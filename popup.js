// popup.js

const translations = {
    fa: {
        appTitle: "LinguaFlash",
        lblSource: "زبان مبدأ (که بلدید):",
        lblTarget: "زبان هدف (برای یادگیری):",
        lblLevel: "سطح (CEFR):",
        lblFreq: "هر چند دقیقه تکرار شود؟",
        lblUnit: "دقیقه",
        manageBtn: "📂 مدیریت جملات من",
        testBtn: "🔊 تست صدا",
        pauseBtn_pause: "⏸ توقف",
        pauseBtn_resume: "▶ ادامه",
        saveBtn: "شروع / ذخیره تنظیمات",
        lblFavManager: "مدیریت جملات انتخابی",
        exportBtn: "⬇️ خروجی (CSV)",
        lblEmptyList: "لیست خالی است.",
        saveItemBtn: "ذخیره",
        delBtn: "حذف",
        placeholder: "ترجمه فارسی را وارد کنید...",
        saved_msg: "✅ ذخیره شد! تایمر ریست شد",
        error_lang: "❌ زبان‌ها نباید یکی باشند",
        dropdowns: {
            languages: {
                en: "انگلیسی",
                fr: "فرانسوی",
                de: "آلمانی",
                it: "ایتالیایی",
                es: "اسپانیایی",
                ru: "روسی",
                zh: "چینی",
                ar: "عربی",
                fa: "فارسی"
            },
            levels: {
                A1: "مبتدی (A1)",
                A2: "مقدماتی (A2)",
                B1: "متوسط (B1)",
                B2: "پیشرفته (B2)",
                C1: "پیشرفته (C1)",
                C2: "پیشرفته (C2)",
                A1_Sentences: "جمله (A1)",
                A2_Sentences: "جمله (A2)",
                B1_Sentences: "جمله (B1)",
                B2_Sentences: "جمله (B2)",
                C1_Sentences: "جمله (C1)",
                C2_Sentences: "جمله (C2)",
                Grammar_Tips: "نکات گرامری",
                Motivational: "جملات انگیزشی",
                Favorites: "جملات منتخب من"
            }
        }
    },
    en: {
        appTitle: "LinguaFlash",
        lblSource: "Source Language (You know):",
        lblTarget: "Target Language (To learn):",
        lblLevel: "Level (CEFR):",
        lblFreq: "Frequency (minutes):",
        lblUnit: "min",
        manageBtn: "📂 Manage Favorites",
        testBtn: "🔊 Test Audio",
        pauseBtn_pause: "⏸ Pause",
        pauseBtn_resume: "▶ Resume",
        saveBtn: "Start / Save Settings",
        lblFavManager: "Manage Favorites",
        exportBtn: "⬇️ Export (CSV)",
        lblEmptyList: "List is empty.",
        saveItemBtn: "Save",
        delBtn: "Delete",
        placeholder: "Enter translation...",
        saved_msg: "✅ Saved! Timer reset.",
        error_lang: "❌ Languages must differ",
        dropdowns: {
            languages: {
                en: "English",
                fr: "French",
                de: "German",
                it: "Italian",
                es: "Spanish",
                ru: "Russian",
                zh: "Chinese",
                ar: "Arabic",
                fa: "Persian"
            },
            levels: {
                A1: "Beginner (A1)",
                A2: "Elementary (A2)",
                B1: "Intermediate (B1)",
                B2: "Upper Intermediate (B2)",
                C1: "Advanced (C1)",
                C2: "Mastery (C2)",
                A1_Sentences: "Sentences (A1)",
                A2_Sentences: "Sentences (A2)",
                B1_Sentences: "Sentences (B1)",
                B2_Sentences: "Sentences (B2)",
                C1_Sentences: "Sentences (C1)",
                C2_Sentences: "Sentences (C2)",
                Grammar_Tips: "Grammar Tips",
                Motivational: "Motivational Quotes",
                Favorites: "My Favorites"
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const sourceLangEl = document.getElementById('sourceLang');
    const targetLangEl = document.getElementById('targetLang');
    const levelEl = document.getElementById('level');
    const frequencyEl = document.getElementById('frequency');
    const saveBtn = document.getElementById('saveBtn');
    const testBtn = document.getElementById('testBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const manageBtn = document.getElementById('manageBtn');

    // UI Elements for Localization
    const appTitle = document.getElementById('appTitle');
    const lblSource = document.getElementById('lblSource');
    const lblTarget = document.getElementById('lblTarget');
    const lblLevel = document.getElementById('lblLevel');
    const lblFreq = document.getElementById('lblFreq');
    const lblUnit = document.getElementById('lblUnit');
    const lblFavManager = document.getElementById('lblFavManager');
    const lblEmptyList = document.getElementById('lblEmptyList');
    const exportBtn = document.getElementById('exportBtn');

    // Load Settings
    chrome.storage.local.get(['sourceLang', 'targetLang', 'level', 'frequency', 'isPaused'], (result) => {
        if (result.sourceLang) sourceLangEl.value = result.sourceLang;
        if (result.targetLang) targetLangEl.value = result.targetLang;
        if (result.level) levelEl.value = result.level;
        if (result.frequency) frequencyEl.value = result.frequency;

        // Apply Localization
        updateUILanguage(sourceLangEl.value);

        // Update Pause Button
        updatePauseButton(result.isPaused || false, sourceLangEl.value);
    });

    // Listen for Source Language Change
    sourceLangEl.addEventListener('change', () => {
        updateUILanguage(sourceLangEl.value);
        // Also update pause button text
        chrome.storage.local.get(['isPaused'], (res) => {
            updatePauseButton(res.isPaused || false, sourceLangEl.value);
        });
    });

    // Save Button
    saveBtn.addEventListener('click', () => {
        const settings = {
            sourceLang: sourceLangEl.value,
            targetLang: targetLangEl.value,
            level: levelEl.value,
            frequency: parseInt(frequencyEl.value, 10) || 5
        };
        const t = translations[settings.sourceLang] || translations['fa'];

        if (settings.sourceLang === settings.targetLang) {
            saveBtn.textContent = t.error_lang;
            setTimeout(() => { saveBtn.textContent = t.saveBtn; }, 2000);
            return;
        }

        chrome.storage.local.set(settings, () => {
            saveBtn.textContent = t.saved_msg;
            saveBtn.style.backgroundColor = '#28a745';
            setTimeout(() => {
                saveBtn.textContent = t.saveBtn;
                saveBtn.style.backgroundColor = '';
            }, 2000);

            chrome.runtime.sendMessage({ action: "resetTimer", settings: settings });

            // Close after delay
            setTimeout(() => { window.close(); }, 1500);
        });
    });

    // Test Audio
    testBtn.addEventListener('click', () => {
        const langCode = targetLangEl.value;
        const testPhrase = getTestPhrase(langCode);
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(testPhrase);
        utterance.lang = getLocale(langCode);
        utterance.rate = 0.9;

        const voices = window.speechSynthesis.getVoices();
        if (langCode === 'fa') {
            const faVoice = voices.find(v => v.lang.includes('fa') || v.lang.includes('ar'));
            if (faVoice) utterance.voice = faVoice;
        }
        window.speechSynthesis.speak(utterance);
    });

    // Pause / Resume Logic
    pauseBtn.addEventListener('click', () => {
        chrome.storage.local.get(['isPaused', 'frequency'], (result) => {
            const newState = !result.isPaused; // Toggle
            chrome.storage.local.set({ isPaused: newState }, () => {
                updatePauseButton(newState, sourceLangEl.value);

                if (newState) {
                    chrome.alarms.clearAll();
                } else {
                    chrome.runtime.sendMessage({
                        action: "resetTimer",
                        settings: { frequency: result.frequency || 5 }
                    });
                }
            });
        });
    });

    function updatePauseButton(isPaused, lang) {
        const t = translations[lang] || translations['fa'];
        if (isPaused) {
            pauseBtn.textContent = t.pauseBtn_resume;
            pauseBtn.style.backgroundColor = '#28a745'; // Resume (Green)
        } else {
            pauseBtn.textContent = t.pauseBtn_pause;
            pauseBtn.style.backgroundColor = '#ffc107'; // Pause (Yellow/Orange)
        }
    }

    function updateUILanguage(lang) {
        const t = translations[lang] || translations['en'];

        // Static Labels
        if (appTitle) appTitle.textContent = t.appTitle;
        if (lblSource) lblSource.textContent = t.lblSource;
        if (lblTarget) lblTarget.textContent = t.lblTarget;
        if (lblLevel) lblLevel.textContent = t.lblLevel;
        if (lblFreq) lblFreq.textContent = t.lblFreq;
        if (lblUnit) lblUnit.textContent = t.lblUnit;
        if (lblFavManager) lblFavManager.textContent = t.lblFavManager;
        if (lblEmptyList) lblEmptyList.textContent = t.lblEmptyList;

        // Buttons
        if (manageBtn) manageBtn.textContent = t.manageBtn;
        if (testBtn) testBtn.textContent = t.testBtn;
        if (exportBtn) exportBtn.textContent = t.exportBtn;
        // Check if saveBtn text was temporary (e.g. "Saved!"), if so don't overwrite immediately? 
        // Actually, simple overwrite is safer for consistency on lang change.
        saveBtn.textContent = t.saveBtn;

        // Update Dropdown Options (Target Language & Level)
        if (t.dropdowns) {
            // Target Language
            if (t.dropdowns.languages) {
                const targetLangEl = document.getElementById('targetLang');
                if (targetLangEl) {
                    Array.from(targetLangEl.options).forEach(opt => {
                        if (t.dropdowns.languages[opt.value]) {
                            opt.textContent = t.dropdowns.languages[opt.value];
                        }
                    });
                }
            }

            // Level
            if (t.dropdowns.levels) {
                const levelEl = document.getElementById('level');
                if (levelEl) {
                    Array.from(levelEl.options).forEach(opt => {
                        if (t.dropdowns.levels[opt.value]) {
                            opt.textContent = t.dropdowns.levels[opt.value];
                        }
                    });
                }
            }
        }
    }

    // ==========================================
    //  بخش مدیریت جملات (Favorites Manager)
    // ==========================================
    const favoritesManager = document.getElementById('favoritesManager');
    const closeManager = document.getElementById('closeManager');
    const favoritesList = document.getElementById('favoritesList');

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