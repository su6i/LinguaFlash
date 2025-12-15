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
    // Get current target language to save as this sentence's language
    chrome.storage.local.get(['customItems', 'targetLang'], (result) => {
        const items = result.customItems || [];
        const currentTargetLang = result.targetLang || 'en';

        if (!items.some(item => item.word === text)) {
            items.push({
                id: Date.now().toString(),
                word: text,
                level: "Favorites",
                lang: currentTargetLang, // Save current extension language for this item
                translations: { fa: "متن انتخابی کاربر" } // "User selected text" placeholder
            });
            chrome.storage.local.set({ customItems: items }, () => {
                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: 'logo-128.png',
                    title: 'LinguaFlash',
                    message: `Sentence saved (${currentTargetLang})!`,
                    priority: 1
                });
            });
        }
    });
}

// Listen for popup messages (to reset timer)
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

// Alarm Creation Function
function createAlarm(minutes) {
    chrome.alarms.clearAll();
    chrome.alarms.create("vocabAlarm", {
        delayInMinutes: parseFloat(minutes),
        periodInMinutes: parseFloat(minutes)
    });
}

// When alarm triggers (time to show word/sentence)
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
            // Use custom items
            filteredItems = customItems || [];
        } else {
            // Use main database
            filteredItems = vocabulary.filter(item =>
                item.lang === targetLang && item.level === level
            );
        }

        if (filteredItems.length === 0) {
            console.log("No items found for this level/language.");
            // Notify user instead of being silent
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'logo-128.png',
                title: 'LinguaFlash',
                message: `No words found for level: ${level} / ${targetLang}`,
                priority: 2
            });
            return;
        }

        // 2. Select a random item
        const randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];

        // Determine content based on settings (word or sentence)
        // Default mode is 'word'
        const mode = contentMode || 'word';

        let targetText = randomItem.word;
        let sourceText = randomItem.translations[sourceLang] || "---";

        // === Fix: Special logic for grammar ===
        if (level === 'Grammar_Tips') {
            // In grammar, Word is the title and Sentence is the example. Show both.
            const title = randomItem.word;
            const example = randomItem.sentence || "";

            // Combine main text
            targetText = `🔹 ${title}\n${example}`;

            // Combine translation (if available)
            const transTitle = randomItem.translations[sourceLang] || "";
            const transExample = randomItem.translations['sentence_' + sourceLang] || "";
            sourceText = `🔸 ${transTitle}\n${transExample}`;
        }
        // === Normal logic for other levels ===
        else if (mode === 'sentence' && randomItem.sentence) {
            targetText = randomItem.sentence;
            const sentenceKey = 'sentence_' + sourceLang;
            if (randomItem.translations[sentenceKey]) {
                sourceText = randomItem.translations[sentenceKey];
            }
        }

        // 3. Show Notification (if enabled)
        if (showNotify !== false) { // Default is true if undefined
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'logo-128.png',
                title: `LinguaFlash (${(randomItem.lang || targetLang).toUpperCase()})`,
                message: `${targetText}\n\n${sourceText}`,
                priority: 2
            });
        }

        // 4. Play Audio (TTS) (if not muted)
        if (muteAudio !== true) { // Default is false if undefined
            const itemLang = randomItem.lang || targetLang;

            // Important: Send raw text to TTS, not decorated text with 🔹
            let rawTargetText = randomItem.word;
            let rawSourceText = randomItem.translations[sourceLang] || "";

            if (level === 'Grammar_Tips') {
                // For grammar, read the title or example?
                rawTargetText = randomItem.sentence || randomItem.word;
            } else if (mode === 'sentence' && randomItem.sentence) {
                rawTargetText = randomItem.sentence;
                const key = 'sentence_' + sourceLang;
                if (randomItem.translations[key]) rawSourceText = randomItem.translations[key];
            }

            playAudio(rawTargetText, itemLang, rawSourceText, sourceLang);
        }
    });
}


// Function to play audio
function playAudio(targetText, targetLang, sourceText, sourceLang) {
    console.log("TTS Debug:", { targetText, targetLang, sourceText, sourceLang });

    // Map language codes to standard locales
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

    // 1. Stop any previous audio to prevent overlap/stuck queue
    chrome.tts.stop();

    // 2. Play Target Language
    chrome.tts.speak(targetText, {
        lang: targetLocale,
        rate: 0.8,
        pitch: 1.0,
        volume: 1.0,
        enqueue: false, // Start immediately
        onEvent: function (event) {
            if (event.type === 'error') console.error("TTS Target Error:", event.errorMessage);
        }
    });

    // 3. Play Translation (if exists)
    if (sourceText && sourceText !== "---" && sourceText !== "متن انتخابی کاربر") {

        // Hack: Speak whitespace/punctuation to create a small gap using the TTS engine itself
        // This avoids using setTimeout which kills the Service Worker
        chrome.tts.speak(" . ", {
            lang: targetLocale,
            rate: 0.5,
            volume: 0.01, // Low volume for the spacer
            enqueue: true
        });

        chrome.tts.speak(sourceText, {
            lang: sourceLocale,
            rate: 1.0,
            pitch: 1.0,
            volume: 1.0,
            enqueue: true, // Play after the target and spacer
            onEvent: function (e) {
                if (e.type === 'error') console.error("TTS Source Error:", e.errorMessage);
            }
        });
    }
}