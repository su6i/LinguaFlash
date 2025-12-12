// popup.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. گرفتن المان‌ها بر اساس ID‌هایی که در HTML تعریف کردید
    const sourceLangEl = document.getElementById('sourceLang');
    const targetLangEl = document.getElementById('targetLang');
    const levelEl = document.getElementById('level');
    const frequencyEl = document.getElementById('frequency');
    const saveBtn = document.getElementById('saveBtn');
    const testBtn = document.getElementById('testBtn');

    // 2. بارگذاری تنظیمات قبلی از حافظه مرورگر (اگر وجود داشته باشد)
    chrome.storage.local.get(['sourceLang', 'targetLang', 'level', 'frequency'], (result) => {
        if (result.sourceLang) sourceLangEl.value = result.sourceLang;
        if (result.targetLang) targetLangEl.value = result.targetLang;
        if (result.level) levelEl.value = result.level; // مثلاً B1_Sentences را لود می‌کند
        if (result.frequency) frequencyEl.value = result.frequency;
    });

    // 3. وقتی دکمه "ذخیره" کلیک شد
    saveBtn.addEventListener('click', () => {
        const settings = {
            sourceLang: sourceLangEl.value,
            targetLang: targetLangEl.value,
            level: levelEl.value,
            frequency: parseInt(frequencyEl.value, 10) || 5
        };

        // جلوگیری از انتخاب زبان تکراری
        if (settings.sourceLang === settings.targetLang) {
            // نمایش پیام خطا با تغییر متن دکمه (سریع و ساده)
            saveBtn.textContent = '❌ زبان‌ها نباید یکی باشند';
            setTimeout(() => { saveBtn.textContent = 'شروع / ذخیره تنظیمات'; }, 2000);
            return;
        }

        // ذخیره در کروم
        chrome.storage.local.set(settings, () => {
            // افکت تصویری برای تایید ذخیره
            const originalText = "شروع / ذخیره تنظیمات";
            saveBtn.textContent = '✅ ذخیره شد! تایمر ریست شد';
            saveBtn.style.backgroundColor = '#28a745'; // سبز شدن دکمه

            setTimeout(() => {
                saveBtn.textContent = originalText;
                saveBtn.style.backgroundColor = ''; // بازگشت به رنگ اصلی
            }, 2000);

            // ارسال پیام به background.js برای اینکه تایمر را با زمان جدید شروع کند
            chrome.runtime.sendMessage({ action: "resetTimer", settings: settings });

            // 3. بستن پنجره بعد از 1.5 ثانیه (اینجا بذارید)
            setTimeout(() => {
                window.close(); // <--- این خط پنجره را می‌بندد
            }, 1500);
        });
    });

    // 4. وقتی دکمه "تست صدا" کلیک شد
    testBtn.addEventListener('click', () => {
        const langCode = targetLangEl.value;
        const testPhrase = getTestPhrase(langCode); // جمله‌ی تستی را می‌گیرد

        // متوقف کردن صدای قبلی (اگر در حال پخش باشد)
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(testPhrase);
        utterance.lang = getLocale(langCode); // تبدیل کد زبان به فرمت استاندارد
        utterance.rate = 0.9; // سرعت خواندن

        // لاگ کردن صداهای موجود برای دیباگ (کاربر خواسته بود صدا قابل تغییر باشد)
        const voices = window.speechSynthesis.getVoices();
        // console.log("Available voices:", voices);
        // اگر زبان فارسی است، سعی کنیم صدای فارسی پیدا کنیم (اگرچه معمولا پیش فرض گوگل هست)
        if (langCode === 'fa') {
            const faVoice = voices.find(v => v.lang.includes('fa') || v.lang.includes('ar')); // fallback to ar if similar? No.
            if (faVoice) utterance.voice = faVoice;
        }

        window.speechSynthesis.speak(utterance);
    });

    // ==========================================
    //  بخش مدیریت جملات (Favorites Manager)
    // ==========================================
    const manageBtn = document.getElementById('manageBtn');
    const favoritesManager = document.getElementById('favoritesManager');
    const closeManager = document.getElementById('closeManager');
    const favoritesList = document.getElementById('favoritesList');
    const exportBtn = document.getElementById('exportBtn');

    manageBtn.addEventListener('click', () => {
        favoritesManager.classList.remove('hidden');
        renderFavorites();
    });

    closeManager.addEventListener('click', () => {
        favoritesManager.classList.add('hidden');
    });

    exportBtn.addEventListener('click', () => {
        chrome.storage.local.get(['customItems'], (result) => {
            const items = result.customItems || [];
            if (items.length === 0) {
                alert("لیست خالی است!");
                return;
            }
            // ساخت محتوای CSV
            let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // UTF-8 BOM
            csvContent += "ID,Original Text,Persian Translation\n";
            items.forEach(item => {
                const fa = item.translations['fa'] || "";
                // Escape quotes
                const word = item.word.replace(/"/g, '""');
                const trans = fa.replace(/"/g, '""');
                csvContent += `"${item.id}","${word}","${trans}"\n`;
            });

            // دانلود فایل
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "linguaflash_favorites.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });

    function renderFavorites() {
        favoritesList.innerHTML = '';
        chrome.storage.local.get(['customItems'], (result) => {
            const items = result.customItems || [];
            if (items.length === 0) {
                favoritesList.innerHTML = '<p style="text-align: center; color: #666;">لیست خالی است.</p>';
                return;
            }

            // نمایش آیتم‌ها (جدیدترین اول)
            items.slice().reverse().forEach((item, index) => {
                // ایندکس اصلی را باید پیدا کنیم چون reverse کردیم
                const originalIndex = items.length - 1 - index;

                const div = document.createElement('div');
                div.className = 'fav-item';

                const wordDiv = document.createElement('div');
                wordDiv.textContent = item.word;

                // انتخاب زبان برای این آیتم
                const langSelect = document.createElement('select');
                langSelect.style.marginBottom = '5px';
                langSelect.style.padding = '2px';
                langSelect.style.fontSize = '12px';
                const languages = [
                    { code: 'en', name: 'انگلیسی' },
                    { code: 'fr', name: 'فرانسوی' },
                    { code: 'de', name: 'آلمانی' },
                    { code: 'it', name: 'ایتالیایی' },
                    { code: 'es', name: 'اسپانیایی' },
                    { code: 'ru', name: 'روسی' },
                    { code: 'zh', name: 'چینی' },
                    { code: 'ar', name: 'عربی' }
                ];
                languages.forEach(l => {
                    const opt = document.createElement('option');
                    opt.value = l.code;
                    opt.textContent = l.name;
                    if (l.code === (item.lang || 'en')) opt.selected = true;
                    langSelect.appendChild(opt);
                });

                const input = document.createElement('input');
                input.type = 'text';
                input.value = item.translations['fa'] !== "متن انتخابی کاربر" ? item.translations['fa'] : "";
                input.placeholder = "ترجمه فارسی را وارد کنید...";

                const controls = document.createElement('div');
                controls.className = 'fav-controls';

                const saveItemBtn = document.createElement('button');
                saveItemBtn.className = 'save-item-btn';
                saveItemBtn.textContent = 'ذخیره';
                saveItemBtn.onclick = () => {
                    const newTrans = input.value.trim();
                    const newLang = langSelect.value;
                    if (newTrans) { // allow saving empty translation? No, check if truthy, but " " is also truthy in some contexts. User might want empty.
                        items[originalIndex].translations['fa'] = newTrans;
                        items[originalIndex].lang = newLang; // ذخیره زبان
                        chrome.storage.local.set({ customItems: items }, () => {
                            saveItemBtn.textContent = '✓';
                            setTimeout(() => { saveItemBtn.textContent = 'ذخیره'; }, 1000);
                        });
                    }
                };

                const delBtn = document.createElement('button');
                delBtn.className = 'delete-btn';
                delBtn.textContent = 'حذف';
                delBtn.onclick = () => {
                    if (confirm("آیا مطمئن هستید؟")) {
                        items.splice(originalIndex, 1);
                        chrome.storage.local.set({ customItems: items }, () => {
                            renderFavorites(); // رفرش لیست
                        });
                    }
                };

                controls.appendChild(saveItemBtn);
                controls.appendChild(delBtn);

                div.appendChild(wordDiv);
                div.appendChild(langSelect);
                div.appendChild(input);
                div.appendChild(controls);
                favoritesList.appendChild(div);
            });
        });
    }

});

// --- توابع کمکی ---

// جملات نمونه برای تست صدا بر اساس زبان
function getTestPhrase(lang) {
    const phrases = {
        en: "Testing audio system.",
        fr: "Test du système audio.",
        de: "Test des Audiosystems.",
        it: "Test del sistema audio.",
        es: "Prueba de sistema de audio.",
        ru: "Проверка аудиосистемы.",
        zh: "音频系统测试",
        ar: "اختبار النظام الصوتي",
        fa: "تست سیستم صوتی"
    };
    return phrases[lang] || "Audio Test";
}

// تبدیل کدهای کوتاه (مثل fr) به کدهای کامل (مثل fr-FR) برای کیفیت بهتر صدا
function getLocale(lang) {
    const locales = {
        en: "en-US",
        fr: "fr-FR",
        de: "de-DE",
        it: "it-IT",
        es: "es-ES",
        ru: "ru-RU",
        zh: "zh-CN",
        ar: "ar-SA",
        fa: "fa-IR"
    };
    return locales[lang] || lang;
}