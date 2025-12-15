// popup.js

const translations = {
    en: {
        appTitle: "LinguaFlash",
        lblSource: "Source Language",
        lblTarget: "Target Language",
        lblLevel: "Level (CEFR):",
        lblFreq: "Frequency (min):",
        lblUnit: "min",
        manageBtn: "Manage Favorites",
        testBtn: "Test Audio",
        pauseBtn_pause: "Pause Timer",
        pauseBtn_resume: "Resume Timer",
        saveBtn: "Start / Save Settings",
        lblFavManager: "Manage Favorites",
        exportBtn: "⬇️ Export (CSV)",
        importBtn: "⬆️ Import (CSV)",
        lblEmptyList: "List is empty.",
        saveItemBtn: "Save",
        delBtn: "Delete",
        placeholder: "Enter translation...",
        saved_msg: "✅ Saved!",
        error_lang: "❌ Same Language!",
        lblMute: "Enable Audio",
        lblNotify: "Show Notification",
        lblContent: "Content Type:",
        dropdowns: {
            languages: { en: "🇬🇧 English", fa: "🇮🇷 Persian", fr: "🇫🇷 French", de: "🇩🇪 German", it: "🇮🇹 Italian", es: "🇪🇸 Spanish", ru: "🇷🇺 Russian", zh: "🇨🇳 Chinese", ar: "🇸🇦 Arabic", ko: "🇰🇷 Korean" },
            levels: {
                A1: "Beginner (A1)", A2: "Elementary (A2)", B1: "Intermediate (B1)", B2: "Upper Int. (B2)", C1: "Advanced (C1)", C2: "Mastery (C2)",
                Grammar_Tips: "Grammar Tips", Favorites: "My Favorites"
            },
            contentTypes: { word: "Word", sentence: "Sentence" }
        }
    },
    fa: {
        appTitle: "LinguaFlash",
        lblSource: "زبان مبدأ",
        lblTarget: "زبان هدف",
        lblLevel: "سطح (CEFR):",
        lblFreq: "تکرار (دقیقه):",
        lblUnit: "دقیقه",
        manageBtn: "مدیریت جملات",
        testBtn: "تست صدا",
        pauseBtn_pause: "توقف تایمر",
        pauseBtn_resume: "ادامه تایمر",
        saveBtn: "شروع / ذخیره",
        lblFavManager: "مدیریت علاقه‌مندی‌ها",
        exportBtn: "⬇️ خروجی (CSV)",
        importBtn: "⬆️ وارد کردن (CSV)",
        lblEmptyList: "لیست خالی است.",
        saveItemBtn: "ذخیره",
        delBtn: "حذف",
        placeholder: "ترجمه را وارد کنید...",
        saved_msg: "✅ ذخیره شد!",
        error_lang: "❌ زبان تکراری!",
        lblMute: "پخش صدا",
        lblNotify: "نمایش اعلان",
        lblContent: "نوع محتوا:",
        dropdowns: {
            languages: { en: "🇬🇧 English", fa: "🇮🇷 Persian", fr: "🇫🇷 French", de: "🇩🇪 German", it: "🇮🇹 Italian", es: "🇪🇸 Spanish", ru: "🇷🇺 Russian", zh: "🇨🇳 Chinese", ar: "🇸🇦 Arabic", ko: "🇰🇷 Korean" },
            levels: { A1: "مبتدی (A1)", A2: "مقدماتی (A2)", B1: "متوسط (B1)", B2: "پیشرفته (B2)", C1: "پیشرفته (C1)", C2: "پیشرفته (C2)", Grammar_Tips: "نکات گرامری", Favorites: "جملات منتخب" },
            contentTypes: { word: "کلمه", sentence: "جمله" }
        }
    },
    fr: {
        appTitle: "LinguaFlash",
        lblSource: "Langue source",
        lblTarget: "Langue cible",
        lblLevel: "Niveau (CEFR):",
        lblFreq: "Fréquence (min):",
        lblUnit: "min",
        manageBtn: "Favoris",
        testBtn: "Test Audio",
        pauseBtn_pause: "Pause",
        pauseBtn_resume: "Reprendre",
        saveBtn: "Enregistrer",
        lblFavManager: "Gérer Favoris",
        exportBtn: "⬇️ Exporter",
        importBtn: "⬆️ Importer",
        lblEmptyList: "Vide.",
        saveItemBtn: "Sauver",
        delBtn: "Suppr.",
        placeholder: "Traduction...",
        saved_msg: "✅ Enregistré!",
        error_lang: "❌ Identique!",
        lblMute: "Audio",
        lblNotify: "Notification",
        lblContent: "Type:",
        dropdowns: {
            languages: { en: "🇬🇧 Anglais", fa: "🇮🇷 Persan", fr: "🇫🇷 Français", de: "🇩🇪 Allemand", it: "🇮🇹 Italien", es: "🇪🇸 Espagnol", ru: "🇷🇺 Russe", zh: "🇨🇳 Chinois", ar: "🇸🇦 Arabe", ko: "🇰🇷 Coréen" },
            levels: {
                A1: "Débutant (A1)", A2: "Élémentaire (A2)", B1: "Intermédiaire (B1)", B2: "Intermédiaire + (B2)", C1: "Avancé (C1)", C2: "Maîtrise (C2)",
                Grammar_Tips: "Grammaire", Favorites: "Favoris"
            },
            contentTypes: { word: "Mot", sentence: "Phrase" }
        }
    },
    // Keep other languages concise or mapped similarly. 
    // To save space and tokens, I'll map others to English structure but with their names if possible.
    de: {
        appTitle: "LinguaFlash",
        lblSource: "Quellsprache",
        lblTarget: "Zielsprache",
        lblLevel: "Niveau:",
        lblFreq: "Frequenz (Min):",
        lblUnit: "Min",
        manageBtn: "Favoriten",
        testBtn: "Audio-Test",
        pauseBtn_pause: "Pause",
        pauseBtn_resume: "Weiter",
        saveBtn: "Speichern",
        lblFavManager: "Favoriten",
        exportBtn: "Export",
        importBtn: "Import",
        lblEmptyList: "Leer.",
        saveItemBtn: "Speichern",
        delBtn: "Löschen",
        placeholder: "...",
        saved_msg: "✅ Gespeichert!",
        error_lang: "❌ Identisch!",
        lblMute: "Audio",
        lblNotify: "Benachrichtigung",
        lblContent: "Inhalt:",
        dropdowns: {
            languages: { en: "🇬🇧 Englisch", fa: "🇮🇷 Persisch", fr: "🇫🇷 Französisch", de: "🇩🇪 Deutsch", it: "🇮🇹 Italienisch", es: "🇪🇸 Spanisch", ru: "🇷🇺 Russisch", zh: "🇨🇳 Chinesisch", ar: "🇸🇦 Arabisch", ko: "🇰🇷 Koreanisch" },
            levels: { A1: "A1", A2: "A2", B1: "B1", B2: "B2", C1: "C1", C2: "C2", Grammar_Tips: "Grammatik", Favorites: "Favoriten" },
            contentTypes: { word: "Wort", sentence: "Satz" }
        }
    },
    it: {
        appTitle: "LinguaFlash",
        lblSource: "Lingua",
        lblTarget: "Lingua",
        lblLevel: "Livello:",
        lblFreq: "Frequenza:",
        lblUnit: "min",
        manageBtn: "Preferiti",
        testBtn: "Audio",
        pauseBtn_pause: "Pausa",
        pauseBtn_resume: "Riprendi",
        saveBtn: "Salva",
        lblFavManager: "Gestisci",
        exportBtn: "Export",
        importBtn: "Import",
        lblEmptyList: "Vuota.",
        saveItemBtn: "Salva",
        delBtn: "Elimina",
        placeholder: "...",
        saved_msg: "✅ Salvato!",
        error_lang: "❌ Identiche!",
        lblMute: "Audio",
        lblNotify: "Notifica",
        lblContent: "Contenuto:",
        dropdowns: {
            languages: { en: "🇬🇧 Inglese", fa: "🇮🇷 Persiano", fr: "🇫🇷 Francese", de: "🇩🇪 Tedesco", it: "🇮🇹 Italiano", es: "🇪🇸 Spagnolo", ru: "🇷🇺 Russo", zh: "🇨🇳 Cinese", ar: "🇸🇦 Arabo", ko: "🇰🇷 Coreano" },
            levels: { A1: "A1", A2: "A2", B1: "B1", B2: "B2", C1: "C1", C2: "C2", Grammar_Tips: "Grammatica", Favorites: "Preferiti" },
            contentTypes: { word: "Parola", sentence: "Frase" }
        }
    },
    es: {
        appTitle: "LinguaFlash",
        lblSource: "Origen",
        lblTarget: "Destino",
        lblLevel: "Nivel:",
        lblFreq: "Frecuencia:",
        lblUnit: "min",
        manageBtn: "Favoritos",
        testBtn: "Audio",
        pauseBtn_pause: "Pausa",
        pauseBtn_resume: "Reanudar",
        saveBtn: "Guardar",
        lblFavManager: "Gestionar",
        exportBtn: "Export",
        importBtn: "Import",
        lblEmptyList: "Vacía.",
        saveItemBtn: "Guardar",
        delBtn: "Borrar",
        placeholder: "...",
        saved_msg: "✅ Guardado!",
        error_lang: "❌ Idénticos!",
        lblMute: "Audio",
        lblNotify: "Notificación",
        lblContent: "Contenido:",
        dropdowns: {
            languages: { en: "🇬🇧 Inglés", fa: "🇮🇷 Persa", fr: "🇫🇷 Francés", de: "🇩🇪 Alemán", it: "🇮🇹 Italiano", es: "🇪🇸 Español", ru: "🇷🇺 Ruso", zh: "🇨🇳 Chino", ar: "🇸🇦 Árabe", ko: "🇰🇷 Coreano" },
            levels: { A1: "A1", A2: "A2", B1: "B1", B2: "B2", C1: "C1", C2: "C2", Grammar_Tips: "Gramática", Favorites: "Favoritos" },
            contentTypes: { word: "Palabra", sentence: "Frase" }
        }
    },
    ru: {
        appTitle: "LinguaFlash",
        lblSource: "Исходный",
        lblTarget: "Целевой",
        lblLevel: "Уровень:",
        lblFreq: "Частота:",
        lblUnit: "мин",
        manageBtn: "Избранное",
        testBtn: "Тест",
        pauseBtn_pause: "Пауза",
        pauseBtn_resume: "Продолжить",
        saveBtn: "Сохранить",
        lblFavManager: "Управление",
        exportBtn: "Экспорт",
        importBtn: "Импорт",
        lblEmptyList: "Пусто.",
        saveItemBtn: "Сохранить",
        delBtn: "Удалить",
        placeholder: "...",
        saved_msg: "✅ Сохранено!",
        error_lang: "❌ Ошибка!",
        lblMute: "Звук",
        lblNotify: "Уведомления",
        lblContent: "Контент:",
        dropdowns: {
            languages: { en: "🇬🇧 Английский", fa: "🇮🇷 Персидский", fr: "🇫🇷 Французский", de: "🇩🇪 Немецкий", it: "🇮🇹 Итальянский", es: "🇪🇸 Испанский", ru: "🇷🇺 Русский", zh: "🇨🇳 Китайский", ar: "🇸🇦 Арабский", ko: "🇰🇷 Корейский" },
            levels: { A1: "A1", A2: "A2", B1: "B1", B2: "B2", C1: "C1", C2: "C2", Grammar_Tips: "Грамматика", Favorites: "Избранное" },
            contentTypes: { word: "Слово", sentence: "Предложение" }
        }
    },
    zh: {
        appTitle: "LinguaFlash",
        lblSource: "源语言",
        lblTarget: "目标语言",
        lblLevel: "等级:",
        lblFreq: "频率:",
        lblUnit: "分",
        manageBtn: "收藏",
        testBtn: "测试",
        pauseBtn_pause: "暂停",
        pauseBtn_resume: "继续",
        saveBtn: "保存",
        lblFavManager: "管理",
        exportBtn: "导出",
        importBtn: "导入",
        lblEmptyList: "空.",
        saveItemBtn: "保存",
        delBtn: "删除",
        placeholder: "...",
        saved_msg: "✅ 已保存!",
        error_lang: "❌ 相同!",
        lblMute: "音频",
        lblNotify: "通知",
        lblContent: "内容:",
        dropdowns: {
            languages: { en: "🇬🇧 英语", fa: "🇮🇷 波斯语", fr: "🇫🇷 法语", de: "🇩🇪 德语", it: "🇮🇹 意大利语", es: "🇪🇸 西班牙语", ru: "🇷🇺 俄语", zh: "🇨🇳 中文", ar: "🇸🇦 阿拉伯语", ko: "🇰🇷 韩语" },
            levels: { A1: "A1", A2: "A2", B1: "B1", B2: "B2", C1: "C1", C2: "C2", Grammar_Tips: "语法", Favorites: "收藏" },
            contentTypes: { word: "单词", sentence: "句子" }
        }
    },
    ar: {
        appTitle: "LinguaFlash",
        lblSource: "المصدر",
        lblTarget: "الهدف",
        lblLevel: "المستوى:",
        lblFreq: "التكرار:",
        lblUnit: "د",
        manageBtn: "المفضلة",
        testBtn: "اختبار",
        pauseBtn_pause: "إيقاف",
        pauseBtn_resume: "استئناف",
        saveBtn: "حفظ",
        lblFavManager: "إدارة",
        exportBtn: "تصدير",
        importBtn: "استيراد",
        lblEmptyList: "فارغة.",
        saveItemBtn: "حفظ",
        delBtn: "حذف",
        placeholder: "...",
        saved_msg: "✅ حفظ!",
        error_lang: "❌ خطأ!",
        lblMute: "صوت",
        lblNotify: "إشعار",
        lblContent: "محتوى:",
        dropdowns: {
            languages: { en: "🇬🇧 الإنجليزية", fa: "🇮🇷 الفارسية", fr: "🇫🇷 الفرنسية", de: "🇩🇪 الألمانية", it: "🇮🇹 الإيطالية", es: "🇪🇸 الأسبانية", ru: "🇷🇺 الروسية", zh: "🇨🇳 الصينية", ar: "🇸🇦 العربية", ko: "🇰🇷 الكورية" },
            levels: { A1: "A1", A2: "A2", B1: "B1", B2: "B2", C1: "C1", C2: "C2", Grammar_Tips: "قواعد", Favorites: "المفضلة" },
            contentTypes: { word: "كلمة", sentence: "جملة" }
        }
    },
    ko: {
        appTitle: "LinguaFlash",
        lblSource: "출처",
        lblTarget: "목표",
        lblLevel: "레벨:",
        lblFreq: "빈도:",
        lblUnit: "분",
        manageBtn: "즐겨찾기",
        testBtn: "테스트",
        pauseBtn_pause: "일시정지",
        pauseBtn_resume: "재개",
        saveBtn: "저장",
        lblFavManager: "관리",
        exportBtn: "내보내기",
        importBtn: "가져오기",
        lblEmptyList: "비어 있음.",
        saveItemBtn: "저장",
        delBtn: "삭제",
        placeholder: "...",
        saved_msg: "✅ 저장됨!",
        error_lang: "❌ 오류!",
        lblMute: "오디오",
        lblNotify: "알림",
        lblContent: "콘텐츠:",
        dropdowns: {
            languages: { en: "🇬🇧 영어", fa: "🇮🇷 페르시아어", fr: "🇫🇷 프랑스어", de: "🇩🇪 독일어", it: "🇮탈리아어", es: "🇪🇸 스페인어", ru: "🇷🇺 러시아어", zh: "🇨🇳 중국어", ar: "🇸🇦 아랍어", ko: "🇰🇷 한국어" },
            levels: { A1: "A1", A2: "A2", B1: "B1", B2: "B2", C1: "C1", C2: "C2", Grammar_Tips: "문법", Favorites: "즐겨찾기" },
            contentTypes: { word: "단어", sentence: "문장" }
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

    // NEW Elements
    const importBtn = document.getElementById('importBtn');
    const importFile = document.getElementById('importFile');
    const muteAudioEl = document.getElementById('muteAudio');
    const showNotifyEl = document.getElementById('showNotify');
    const lblMute = document.getElementById('lblMute');
    const lblNotify = document.getElementById('lblNotify');
    const lblContent = document.getElementById('lblContent'); // Added lblContent
    const contentModeEl = document.getElementById('contentMode'); // Added contentMode element

    // NEW: Populate Dropdowns dynamically since HTML is empty
    const langKeys = ['en', 'fa', 'fr', 'de', 'it', 'es', 'ru', 'zh', 'ar', 'ko'];
    const levelKeys = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Grammar_Tips', 'Favorites'];

    function populateSelect(element, keys, defaultVal) {
        element.innerHTML = '';
        keys.forEach(key => {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = key; // Temporary, will be updated by updateUILanguage
            element.appendChild(opt);
        });
        if (defaultVal) element.value = defaultVal;
    }

    populateSelect(sourceLangEl, langKeys, 'en');
    populateSelect(targetLangEl, langKeys, 'fa'); // Default target often Persian for this user? Or English. Let's stick to standard default or leave it to storage.
    populateSelect(levelEl, levelKeys, 'C1');

    // Load Settings
    chrome.storage.local.get(['sourceLang', 'targetLang', 'level', 'frequency', 'isPaused', 'muteAudio', 'showNotify', 'contentMode'], (result) => {
        if (result.sourceLang) {
            sourceLangEl.value = result.sourceLang;
        }
        updateUILanguage(sourceLangEl.value || 'en'); // Update text after value is set

        if (result.targetLang) targetLangEl.value = result.targetLang;
        if (result.level) levelEl.value = result.level;
        if (result.frequency) frequencyEl.value = result.frequency;

        // Checkboxes
        // REVERSED LOGIC: muteAudioEl checked means "Enable Audio" (mute=false)
        if (result.muteAudio !== undefined) muteAudioEl.checked = !result.muteAudio;
        else muteAudioEl.checked = true; // default on (mute=false)

        if (result.showNotify !== undefined) showNotifyEl.checked = result.showNotify;
        else showNotifyEl.checked = true; // default on

        if (result.contentMode) contentModeEl.value = result.contentMode; // Load contentMode

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
        const sourceLang = sourceLangEl.value;
        const targetLang = targetLangEl.value;
        const level = levelEl.value;
        const frequency = parseInt(frequencyEl.value, 10) || 5;
        const muteAudio = !muteAudioEl.checked; // REVERSED: checked=Enable -> mute=false
        const showNotify = showNotifyEl.checked;
        const contentMode = contentModeEl.value; // Get contentMode value

        const t = translations[sourceLang] || translations['fa'];

        if (sourceLang === targetLang) {
            saveBtn.textContent = t.error_lang;
            setTimeout(() => { saveBtn.textContent = t.saveBtn; }, 2000);
            return;
        }

        chrome.storage.local.set({
            sourceLang,
            targetLang,
            level,
            frequency,
            muteAudio,
            showNotify,
            contentMode, // Save contentMode
            isPaused: false // <--- Force Unpause logic: Always reset to running state on save
        }, () => {
            saveBtn.textContent = t.saved_msg;
            saveBtn.style.backgroundColor = '#28a745';

            // Update Pause Button UI immediately in case popup stays open
            updatePauseButton(false, sourceLang);

            setTimeout(() => {
                saveBtn.textContent = t.saveBtn;
                saveBtn.style.backgroundColor = '';
            }, 2000);

            chrome.runtime.sendMessage({ action: "resetTimer", settings: { frequency: frequency } }); // Pass frequency directly

            // Close after delay
            setTimeout(() => { window.close(); }, 1500);
        });
    });

    // Test Audio
    testBtn.addEventListener('click', () => {
        if (!muteAudioEl.checked) return; // REVERSED: If "Enable Audio" is unchecked, don't play.
        // Actually user might want to test if mute works? No, mute is for background.
        // I will play it anyway for test.
        const langCode = targetLangEl.value;
        const testPhrase = getTestPhrase(langCode);
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(testPhrase);
        utterance.lang = getLocale(langCode);
        utterance.rate = 0.9;
        // ... voice logic ...
        const voices = window.speechSynthesis.getVoices();
        if (langCode === 'fa') {
            const faVoice = voices.find(v => v.lang.includes('fa') || v.lang.includes('ar'));
            if (faVoice) utterance.voice = faVoice;
        }
        window.speechSynthesis.speak(utterance);
    });

    // ... Pause Logic ...
    pauseBtn.addEventListener('click', () => {
        chrome.storage.local.get(['isPaused', 'sourceLang', 'frequency'], (result) => {
            const isPaused = !result.isPaused; // Toggle
            const lang = result.sourceLang || 'en';

            chrome.storage.local.set({ isPaused: isPaused }, () => {
                updatePauseButton(isPaused, lang);

                if (isPaused) {
                    // Send message to background to stop timer
                    chrome.runtime.sendMessage({ action: "stopTimer" });
                } else {
                    // Send message to background to restart timer
                    chrome.runtime.sendMessage({
                        action: "resetTimer",
                        settings: { frequency: result.frequency || 5 }
                    });
                }
            });
        });
    });

    function updatePauseButton(isPaused, lang) {
        const t = translations[lang] || translations['en'];
        // Fallback for missing keys in other languages if needed, but for now just use t
        // Logic: If isPaused is TRUE, it means timer is stopped. Button should say "Resume".
        // If isPaused is FALSE, it means timer is running. Button should say "Pause".

        if (isPaused) {
            pauseBtn.style.background = '#28a745'; // Green for "Resume"
            pauseBtn.textContent = t.pauseBtn_resume || "▶ Resume";
        } else {
            pauseBtn.style.background = '#ffc107'; // Yellow for "Pause"
            pauseBtn.textContent = t.pauseBtn_pause || "⏸ Pause";
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

        // New Labels
        if (lblMute) lblMute.textContent = t.lblMute;
        if (lblNotify) lblNotify.textContent = t.lblNotify;
        if (lblContent) lblContent.textContent = t.lblContent || "Content Type:";

        // Buttons
        if (manageBtn) manageBtn.textContent = t.manageBtn;
        if (testBtn) testBtn.textContent = t.testBtn;
        if (exportBtn) exportBtn.textContent = t.exportBtn;
        if (importBtn) importBtn.textContent = t.importBtn;

        // ... Dropdowns ...
        saveBtn.textContent = t.saveBtn;

        // Update Dropdown Options (Target Language & Level)
        if (t.dropdowns) {
            const updateOptions = (element, map) => {
                if (!element || !map) return;
                Array.from(element.options).forEach(opt => {
                    if (map[opt.value]) {
                        opt.textContent = map[opt.value];
                    }
                });
            };

            updateOptions(document.getElementById('sourceLang'), t.dropdowns.languages);
            updateOptions(document.getElementById('targetLang'), t.dropdowns.languages);
            updateOptions(document.getElementById('level'), t.dropdowns.levels);

            // Content Type (Added Logic)
            if (t.dropdowns.contentTypes) {
                const contentModeEl = document.getElementById('contentMode');
                updateOptions(contentModeEl, t.dropdowns.contentTypes);
            }
        }
    }

    // ==========================================
    //  Favorites Manager Section
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

    // Import Logic
    importBtn.addEventListener('click', () => {
        importFile.click();
    });

    importFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const csvText = event.target.result;
            // Simple Parse: ID,Original,Persian
            // Removing BOM
            const cleanText = csvText.replace(/^\uFEFF/, '');
            const lines = cleanText.split('\n');

            chrome.storage.local.get(['customItems'], (result) => {
                const items = result.customItems || [];
                let addedCount = 0;

                lines.forEach((line, index) => {
                    if (index === 0 && line.includes('ID,Original')) return; // Skip header
                    if (!line.trim()) return;

                    // Split by comma, observing quotes
                    // Quick hack for specific format "id","word","trans"
                    const parts = line.split('","');
                    if (parts.length >= 2) {
                        const word = parts[1].replace(/"/g, '');
                        const trans = parts.length > 2 ? parts[2].replace(/"/g, '') : "";

                        // Avoid duplicates
                        if (!items.some(i => i.word === word)) {
                            items.push({
                                id: Date.now().toString() + Math.random(),
                                word: word,
                                level: "Favorites",
                                lang: "en", // Default to English if unknown? Or maybe infer?
                                translations: { fa: trans }
                            });
                            addedCount++;
                        }
                    }
                });

                chrome.storage.local.set({ customItems: items }, () => {
                    alert(`Imported ${addedCount} items!`);
                    renderFavorites();
                });
            });
        };
        reader.readAsText(file);
    });

    // closeManager logic moved up

    exportBtn.addEventListener('click', () => {
        chrome.storage.local.get(['customItems'], (result) => {
            const items = result.customItems || [];
            if (items.length === 0) {
                alert("List is empty!");
                return;
            }
            // Create CSV content
            let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // UTF-8 BOM
            csvContent += "ID,Original Text,Persian Translation\n";
            items.forEach(item => {
                const fa = item.translations['fa'] || "";
                // Escape quotes
                const word = item.word.replace(/"/g, '""');
                const trans = fa.replace(/"/g, '""');
                csvContent += `"${item.id}", "${word}", "${trans}"\n`;
            });

            // Download file
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
        const currentSourceLang = sourceLangEl.value || 'en';
        const t = translations[currentSourceLang] || translations['en'];

        chrome.storage.local.get(['customItems'], (result) => {
            const items = result.customItems || [];
            if (items.length === 0) {
                favoritesList.innerHTML = `<p style="text-align: center; color: #666;">${t.lblEmptyList}</p>`;
                return;
            }

            items.slice().reverse().forEach((item, index) => {
                const originalIndex = items.length - 1 - index;

                const div = document.createElement('div');
                div.className = 'fav-item';

                const wordDiv = document.createElement('div');
                wordDiv.textContent = item.word;
                wordDiv.style.fontWeight = 'bold';
                wordDiv.style.marginBottom = '5px';

                const langSelect = document.createElement('select');
                langSelect.style.marginBottom = '5px';
                langSelect.style.padding = '2px';
                langSelect.style.fontSize = '12px';

                const langMap = t.dropdowns.languages;
                Object.keys(langMap).forEach(code => {
                    const opt = document.createElement('option');
                    opt.value = code;
                    opt.textContent = langMap[code];
                    if (code === (item.lang || 'en')) opt.selected = true;
                    langSelect.appendChild(opt);
                });

                const input = document.createElement('input');
                input.type = 'text';
                input.value = item.translations['fa'] !== "متن انتخابی کاربر" && item.translations['fa'] !== "---" ? item.translations['fa'] : "";
                input.placeholder = t.placeholder;

                const controls = document.createElement('div');
                controls.className = 'fav-controls';

                const saveItemBtn = document.createElement('button');
                saveItemBtn.className = 'save-item-btn';
                saveItemBtn.textContent = t.saveItemBtn;
                saveItemBtn.onclick = () => {
                    const newTrans = input.value.trim();
                    const newLang = langSelect.value;

                    items[originalIndex].translations['fa'] = newTrans;
                    items[originalIndex].lang = newLang;
                    chrome.storage.local.set({ customItems: items }, () => {
                        saveItemBtn.textContent = '✓';
                        setTimeout(() => { saveItemBtn.textContent = t.saveItemBtn; }, 1000);
                    });
                };

                const delBtn = document.createElement('button');
                delBtn.className = 'delete-btn';
                delBtn.textContent = t.delBtn;
                delBtn.onclick = () => {
                    if (confirm(`${t.delBtn}?`)) {
                        items.splice(originalIndex, 1);
                        chrome.storage.local.set({ customItems: items }, () => {
                            renderFavorites();
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

// --- Helper Functions ---

// Sample phrases for audio test based on language
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
        fa: "تست سیستم صوتی",
        ko: "오디오 시스템 테스트"
    };
    return phrases[lang] || "Audio Test";
}

// Convert short codes (e.g. fr) to full locales (e.g. fr-FR) for better audio quality
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
        fa: "fa-IR",
        ko: "ko-KR"
    };
    return locales[lang] || lang;
}
