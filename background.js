import { vocabulary } from './vocabulary.js';

const menuTranslations = {
    en: "Add to LinguaFlash Favorites",
    fa: "افزودن به جملات LinguaFlash",
    fr: "Ajouter aux favoris LinguaFlash",
    de: "Zu LinguaFlash-Favoriten hinzufügen",
    it: "Aggiungi ai preferiti LinguaFlash",
    es: "Añadir a favoritos de LinguaFlash",
    ru: "Добавить в избранное LinguaFlash",
    zh: "添加到 LinguaFlash 收藏",
    ar: "إضافة إلى مفضلة LinguaFlash"
};

function updateContextMenu(lang) {
    const title = menuTranslations[lang] || menuTranslations['en'];
    // Update if exists, otherwise create? 
    // update only works if created. safe to call.
    chrome.contextMenus.update("add_to_linguaflash", { title: title }, () => {
        if (chrome.runtime.lastError) {
            // Ignore error if item doesn't exist yet (unlikely)
        }
    });
}

chrome.runtime.onInstalled.addListener(() => {
    console.log("LinguaFlash installed.");
    chrome.storage.local.get(['sourceLang'], (result) => {
        const lang = result.sourceLang || 'en';

        // Initialize defaults if not present
        if (!result.sourceLang) {
            chrome.storage.local.set({
                sourceLang: 'en',
                targetLang: 'en', // Default target (user should change)
                level: 'A1',
                frequency: 5
            });
        }
        createAlarm(5);

        chrome.contextMenus.create({
            id: "add_to_linguaflash",
            title: menuTranslations[lang] || menuTranslations['en'],
            contexts: ["selection"]
        });
    });
});

// Listen for language changes to update context menu dynamically
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.sourceLang) {
        updateContextMenu(changes.sourceLang.newValue);
    }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "add_to_linguaflash" && info.selectionText) {
        const text = info.selectionText.trim();
        if (text) {
            addCustomSentence(text);
        }
    }
});

function addCustomSentence(text) {
    // دریافت زبان فعلی انتخاب شده توسط کاربر برای ذخیره به عنوان زبان این جمله
    chrome.storage.local.get(['customItems', 'targetLang'], (result) => {
        const items = result.customItems || [];
        const currentTargetLang = result.targetLang || 'en';

        if (!items.some(item => item.word === text)) {
            items.push({
                id: Date.now().toString(),
                word: text,
                level: "Favorites",
                lang: currentTargetLang, // ذخیره زبان فعلی اکستنشن برای این جمله
                translations: { fa: "متن انتخابی کاربر" }
            });
            chrome.storage.local.set({ customItems: items }, () => {
                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: 'logo-128.png',
                    title: 'LinguaFlash',
                    message: `جمله ذخیره شد (${currentTargetLang})!`,
                    priority: 1
                });
            });
        }
    });
}

// گوش دادن به پیام‌ها از popup.js (برای ریست کردن تایمر)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "resetTimer") {
        createAlarm(request.settings.frequency);
        console.log(`Timer reset to ${request.settings.frequency} minutes.`);

        // UX Enhancement: Show a notification immediately so user knows it's working
        showNotification();

    } else if (request.action === "stopTimer") {
        chrome.alarms.clearAll();
        console.log("Timer stopped (Paused).");
    }
});

// تابع ایجاد آلارم
function createAlarm(minutes) {
    chrome.alarms.clearAll();
    chrome.alarms.create("vocabAlarm", {
        delayInMinutes: parseFloat(minutes),
        periodInMinutes: parseFloat(minutes)
    });
}

// وقتی آلارم زنگ می‌خورد (زمان نمایش کلمه/جمله)
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "vocabAlarm") {
        showNotification();
    }
});

function showNotification() {
    chrome.storage.local.get(['sourceLang', 'targetLang', 'level', 'customItems', 'muteAudio', 'showNotify', 'contentMode'], (settings) => {
        const { targetLang, level, sourceLang, customItems, muteAudio, showNotify, contentMode } = settings;
        let filteredItems = [];

        if (level === 'Favorites') {
            // استفاده از آیتم‌های کاستوم
            filteredItems = customItems || [];
        } else {
            // استفاده از دیتابیس اصلی
            filteredItems = vocabulary.filter(item =>
                item.lang === targetLang && item.level === level
            );
        }

        if (filteredItems.length === 0) {
            console.log("No items found for this level/language.");
            return;
        }

        // 2. انتخاب یک مورد تصادفی
        const randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];

        // تعیین محتوا بر اساس تنظیمات (کلمه یا جمله)
        // Default mode is 'word'
        const mode = contentMode || 'word';

        let targetText = randomItem.word;
        let sourceText = randomItem.translations[sourceLang] || "---";

        // === اصلاح: لاجیک اختصاصی برای گرامر ===
        if (level === 'Grammar_Tips') {
            // در گرامر، Word عنوان است و Sentence مثال/توضیح. هر دو را با هم نشان می‌دهیم.
            const title = randomItem.word;
            const example = randomItem.sentence || "";

            // ترکیب متن اصلی
            targetText = `🔹 ${title}\n${example}`;

            // ترکیب ترجمه (اگر موجود باشد)
            const transTitle = randomItem.translations[sourceLang] || "";
            const transExample = randomItem.translations['sentence_' + sourceLang] || "";
            sourceText = `🔸 ${transTitle}\n${transExample}`;
        }
        // === لاجیک عادی برای سایر سطوح ===
        else if (mode === 'sentence' && randomItem.sentence) {
            targetText = randomItem.sentence;
            const sentenceKey = 'sentence_' + sourceLang;
            if (randomItem.translations[sentenceKey]) {
                sourceText = randomItem.translations[sentenceKey];
            }
        }

        // 3. نمایش نوتیفیکیشن (اگر فعال باشد)
        if (showNotify !== false) { // Default is true if undefined
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'logo-128.png',
                title: `LinguaFlash (${(randomItem.lang || targetLang).toUpperCase()})`,
                message: `${targetText}\n\n${sourceText}`,
                priority: 2
            });
        }

        // 4. پخش صدا (TTS) (اگر بی صدا نباشد)
        if (muteAudio !== true) { // Default is false if undefined
            const itemLang = randomItem.lang || targetLang;

            // اصلاح مهم: برای TTS باید متن خالص بفرستیم، نه متن تزیین شده با 🔹 و اینتر
            let rawTargetText = randomItem.word;
            let rawSourceText = randomItem.translations[sourceLang] || "";

            if (level === 'Grammar_Tips') {
                // برای گرامر، شاید بهتر باشد مثال را بخواند یا عنوان را؟
                // معمولا مثال مهم‌تر است. بیایید هر دو را بخواند ولی با مکث.
                // اما فعلا برای سادگی و اطمینان از کارکرد، عنوان را می‌دهیم.
                // یا بهتر: عنوان + مکث + مثال.
                // ولی TTS شاید با کاراکترهای خاص مشکل داشته باشد.
                // بیایید همان title را بفرستیم، یا اگر example دارد، example را.
                rawTargetText = randomItem.sentence || randomItem.word;
                // در گرامر، sentence همان مثال است که برای شنیدن مهم‌تر است.
            } else if (mode === 'sentence' && randomItem.sentence) {
                rawTargetText = randomItem.sentence;
                const key = 'sentence_' + sourceLang;
                if (randomItem.translations[key]) rawSourceText = randomItem.translations[key];
            }

            playAudio(rawTargetText, itemLang, rawSourceText, sourceLang);
        }
    });
}

// تابع پخش صدا
function playAudio(targetText, targetLang, sourceText, sourceLang) {
    console.log("TTS Debug:", { targetText, targetLang, sourceText, sourceLang }); // Debug log

    // نگاشت کدهای زبان به کدهای استاندارد
    const localeMap = {
        en: "en-US",
        fr: "fr-FR",
        de: "de-DE",
        it: "it-IT",
        es: "es-ES",
        ru: "ru-RU",
        zh: "zh-CN",
        ar: "ar-SA",
        fa: "fa-IR",
        ko: "ko-KR"
    };

    const targetLocale = localeMap[targetLang] || targetLang;
    const sourceLocale = localeMap[sourceLang] || sourceLang;

    // پخش زبان هدف (مثلا انگلیسی)
    chrome.tts.speak(targetText, {
        lang: targetLocale,
        rate: 0.8, // کمی آرام‌تر برای یادگیری
        pitch: 1.0,
        volume: 1.0,
        onEvent: function (event) {
            if (event.type === 'error') {
                console.error("TTS Error:", event.errorMessage);
            }
            if (event.type === 'end') {
                // اگر متن ترجمه "متن انتخابی کاربر" باشد (یعنی کاربر هنوز ترجمه نکرده)، آن را نخوان
                // یا اگر "-" باشد
                if (!sourceText || sourceText === "---" || sourceText === "متن انتخابی کاربر") {
                    return;
                }

                // پخش زبان مادری (مثلا فارسی) با کمی تاخیر
                setTimeout(() => {
                    chrome.tts.speak(sourceText, {
                        lang: sourceLocale,
                        rate: 1.0, // سرعت عادی برای زبان مادری
                        pitch: 1.0,
                        volume: 1.0,
                        onEvent: function (e) {
                            if (e.type === 'error') console.error("TTS Source Error:", e.errorMessage);
                        }
                    });
                }, 500);
            }
        }
    });
}