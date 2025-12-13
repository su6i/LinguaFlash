// popup.js

const translations = {
    en: {
        appTitle: "LinguaFlash",
        lblSource: "Source Language:",
        lblTarget: "Target Language:",
        lblLevel: "Level (CEFR):",
        lblFreq: "Frequency (min):",
        lblUnit: "min",
        manageBtn: "📂 Manage Favorites",
        testBtn: "🔊 Test Audio",
        pauseBtn_pause: "⏸ Pause Timer",
        pauseBtn_resume: "▶ Resume Timer",
        saveBtn: "Start / Save Settings",
        lblFavManager: "Manage Favorites",
        exportBtn: "⬇️ Export (CSV)",
        importBtn: "⬆️ Import (CSV)",
        lblEmptyList: "List is empty.",
        saveItemBtn: "Save",
        delBtn: "Delete",
        placeholder: "Enter translation...",
        saved_msg: "✅ Saved! Timer reset.",
        error_lang: "❌ Languages must differ",
        lblMute: "Enable Audio",
        lblNotify: "Show Notification",
        lblContent: "Content Type:",
        dropdowns: {
            languages: { en: "English", fa: "Persian", fr: "French", de: "German", it: "Italian", es: "Spanish", ru: "Russian", zh: "Chinese", ar: "Arabic", ko: "Korean" },
            levels: {
                A1: "Beginner (A1)", A2: "Elementary (A2)", B1: "Intermediate (B1)", B2: "Upper Int. (B2)", C1: "Advanced (C1)", C2: "Mastery (C2)",
                Grammar_Tips: "Grammar Tips", Favorites: "My Favorites"
            },
            contentTypes: { word: "Word", sentence: "Sentence" }
        }
    },
    fa: {
        appTitle: "LinguaFlash",
        lblSource: "زبان مبدأ:",
        lblTarget: "زبان هدف:",
        lblLevel: "سطح:",
        lblFreq: "تکرار (دقیقه):",
        lblUnit: "دقیقه",
        manageBtn: "📂 مدیریت جملات من",
        testBtn: "🔊 تست صدا",
        pauseBtn_pause: "⏸ توقف تایمر",
        pauseBtn_resume: "▶ فعال‌سازی تایمر",
        saveBtn: "شروع / ذخیره تنظیمات",
        lblFavManager: "مدیریت جملات انتخابی",
        exportBtn: "⬇️ خروجی (CSV)",
        importBtn: "⬆️ وارد کردن (CSV)",
        lblEmptyList: "لیست خالی است.",
        saveItemBtn: "ذخیره",
        delBtn: "حذف",
        placeholder: "ترجمه را وارد کنید...",
        saved_msg: "✅ ذخیره شد! تایمر ریست شد",
        error_lang: "❌ زبان‌ها نباید یکی باشند",
        lblMute: "پخش صدا",
        lblNotify: "نمایش اعلان",
        lblContent: "نوع محتوا:",
        dropdowns: {
            languages: { en: "انگلیسی", fa: "فارسی", fr: "فرانسوی", de: "آلمانی", it: "ایتالیایی", es: "اسپانیایی", ru: "روسی", zh: "چینی", ar: "عربی", ko: "کره‌ای" },
            levels: { A1: "مبتدی (A1)", A2: "مقدماتی (A2)", B1: "متوسط (B1)", B2: "پیشرفته (B2)", C1: "پیشرفته (C1)", C2: "پیشرفته (C2)", Grammar_Tips: "نکات گرامری", Favorites: "جملات منتخب من" },
            contentTypes: { word: "کلمه", sentence: "جمله" }
        }
    },
    fr: {
        appTitle: "LinguaFlash",
        lblSource: "Langue source:",
        lblTarget: "Langue cible:",
        lblLevel: "Niveau:",
        lblFreq: "Fréquence (min):",
        lblUnit: "min",
        manageBtn: "📂 Favoris",
        testBtn: "🔊 Test Audio",
        pauseBtn_pause: "⏸ Mettre en pause le minuteur",
        pauseBtn_resume: "▶ Reprendre le minuteur",
        saveBtn: "Enregistrer",
        lblFavManager: "Gérer mes phrases",
        exportBtn: "⬇️ Exporter",
        importBtn: "⬆️ Importer (CSV)",
        lblEmptyList: "Vide.",
        saveItemBtn: "Sauver",
        delBtn: "Suppr.",
        placeholder: "Traduction...",
        saved_msg: "✅ Enregistré !",
        error_lang: "❌ Identiques !",
        lblMute: "Activer l'audio",
        lblNotify: "Afficher notif.",
        lblContent: "Type de contenu:",
        dropdowns: {
            languages: { en: "Anglais", fa: "Persan", fr: "Français", de: "Allemand", it: "Italien", es: "Espagnol", ru: "Russe", zh: "Chinois", ar: "Arabe", ko: "Coréen" },
            levels: {
                A1: "Débutant (A1)", A2: "Élémentaire (A2)", B1: "Intermédiaire (B1)", B2: "Intermédiaire sup. (B2)", C1: "Avancé (C1)", C2: "Maîtrise (C2)",
                Grammar_Tips: "Grammaire", Favorites: "Mes Favoris"
            },
            contentTypes: { word: "Mot", sentence: "Phrase" }
        }
    },
    de: {
        appTitle: "LinguaFlash",
        lblSource: "Quellsprache:",
        lblTarget: "Zielsprache:",
        lblLevel: "Niveau:",
        lblFreq: "Häufigkeit (Min):",
        lblUnit: "Min",
        manageBtn: "📂 Favoriten",
        testBtn: "🔊 Audio-Test",
        pauseBtn_pause: "⏸ Timer pausieren",
        pauseBtn_resume: "▶ Timer fortsetzen",
        saveBtn: "Speichern",
        lblFavManager: "Favoriten verwalten",
        exportBtn: "⬇️ Export",
        importBtn: "⬆️ Importieren (CSV)",
        lblEmptyList: "Leer.",
        saveItemBtn: "Speichern",
        delBtn: "Löschen",
        placeholder: "Übersetzung...",
        saved_msg: "✅ Gespeichert!",
        error_lang: "❌ Identisch!",
        lblMute: "Audio aktivieren",
        lblNotify: "Benachrichtigung",
        lblContent: "Inhaltstyp:",
        dropdowns: {
            languages: { en: "Englisch", fa: "Persisch", fr: "Französisch", de: "Deutsch", it: "Italienisch", es: "Spanisch", ru: "Russisch", zh: "Chinesisch", ar: "Arabisch", ko: "Koreanisch" },
            levels: {
                A1: "Anfänger (A1)", A2: "Grundlegend (A2)", B1: "Mittelstufe (B1)", B2: "Obere Mittelstufe (B2)", C1: "Fortgeschritten (C1)", C2: "Experte (C2)",
                Grammar_Tips: "Grammatik", Favorites: "Meine Favoriten"
            },
            contentTypes: { word: "Wort", sentence: "Satz" }
        }
    },
    it: {
        appTitle: "LinguaFlash",
        lblSource: "Lingua partenza:",
        lblTarget: "Lingua arrivo:",
        lblLevel: "Livello:",
        lblFreq: "Frequenza (min):",
        lblUnit: "min",
        manageBtn: "📂 Preferiti",
        testBtn: "🔊 Test Audio",
        pauseBtn_pause: "⏸ Metti in pausa timer",
        pauseBtn_resume: "▶ Riprendi timer",
        saveBtn: "Salva",
        lblFavManager: "Gestisci frasi",
        exportBtn: "⬇️ Esporta",
        importBtn: "⬆️ Importa (CSV)",
        lblEmptyList: "Vuota.",
        saveItemBtn: "Salva",
        delBtn: "Elimina",
        placeholder: "Traduzione...",
        saved_msg: "✅ Salvato!",
        error_lang: "❌ Identiche!",
        lblMute: "Attiva audio",
        lblNotify: "Mostra notifica",
        lblContent: "Tipo di contenuto:",
        dropdowns: {
            languages: { en: "Inglese", fa: "Persiano", fr: "Francese", de: "Tedesco", it: "Italiano", es: "Spagnolo", ru: "Russo", zh: "Cinese", ar: "Arabo", ko: "Coreano" },
            levels: {
                A1: "Principiante (A1)", A2: "Elementare (A2)", B1: "Intermedio (B1)", B2: "Intermedio sup. (B2)", C1: "Avanzato (C1)", C2: "Padronanza (C2)",
                Grammar_Tips: "Grammatica", Favorites: "I miei preferiti"
            },
            contentTypes: { word: "Parola", sentence: "Frase" }
        }
    },
    es: {
        appTitle: "LinguaFlash",
        lblSource: "Idioma origen:",
        lblTarget: "Idioma destino:",
        lblLevel: "Nivel:",
        lblFreq: "Frecuencia (min):",
        lblUnit: "min",
        manageBtn: "📂 Favoritos",
        testBtn: "🔊 Audio",
        pauseBtn_pause: "⏸ Pausar temporizador",
        pauseBtn_resume: "▶ Reanudar temporizador",
        saveBtn: "Guardar",
        lblFavManager: "Gestionar",
        exportBtn: "⬇️ Exportar",
        importBtn: "⬆️ Importar (CSV)",
        lblEmptyList: "Vacía.",
        saveItemBtn: "Guardar",
        delBtn: "Borrar",
        placeholder: "Traducción...",
        saved_msg: "✅ ¡Guardado!",
        error_lang: "❌ ¡Idénticos!",
        lblMute: "Activar audio",
        lblNotify: "Mostrar notif.",
        lblContent: "Tipo de contenido:",
        dropdowns: {
            languages: { en: "Inglés", fa: "Persa", fr: "Francés", de: "Alemán", it: "Italiano", es: "Español", ru: "Ruso", zh: "Chino", ar: "Árabe", ko: "Coreano" },
            levels: {
                A1: "Principiante (A1)", A2: "Elemental (A2)", B1: "Intermedio (B1)", B2: "Intermedio sup. (B2)", C1: "Avanzado (C1)", C2: "Dominio (C2)",
                Grammar_Tips: "Gramática", Favorites: "Mis Favoritos"
            },
            contentTypes: { word: "Palabra", sentence: "Frase" }
        }
    },
    ru: {
        appTitle: "LinguaFlash",
        lblSource: "Исходный язык:",
        lblTarget: "Изучаемый язык:",
        lblLevel: "Уровень:",
        lblFreq: "Частота (мин):",
        lblUnit: "мин",
        manageBtn: "📂 Избранное",
        testBtn: "🔊 Тест",
        pauseBtn_pause: "⏸ Пауза таймера",
        pauseBtn_resume: "▶ Запустить таймер",
        saveBtn: "Сохранить",
        lblFavManager: "Управление",
        exportBtn: "⬇️ Экспорт",
        importBtn: "⬆️ Импорт (CSV)",
        lblEmptyList: "Пусто.",
        saveItemBtn: "Сохранить",
        delBtn: "Удалить",
        placeholder: "Перевод...",
        saved_msg: "✅ Сохранено!",
        error_lang: "❌ Совпадают!",
        lblMute: "Вкл. звук",
        lblNotify: "Уведомления",
        lblContent: "Тип контента:",
        dropdowns: {
            languages: { en: "Английский", fa: "Персидский", fr: "Французский", de: "Немецкий", it: "Итальянский", es: "Испанский", ru: "Русский", zh: "Китайский", ar: "Арабский", ko: "Корейский" },
            levels: {
                A1: "Начинающий (A1)", A2: "Элементарный (A2)", B1: "Средний (B1)", B2: "Выше сред. (B2)", C1: "Продвинутый (C1)", C2: "Проф. (C2)",
                Grammar_Tips: "Грамматика", Favorites: "Избранное"
            },
            contentTypes: { word: "Слово", sentence: "Предложение" }
        }
    },
    zh: {
        appTitle: "LinguaFlash",
        lblSource: "源语言:",
        lblTarget: "目标语言:",
        lblLevel: "等级:",
        lblFreq: "频率 (分):",
        lblUnit: "分",
        manageBtn: "📂 收藏",
        testBtn: "🔊 测试",
        pauseBtn_pause: "⏸ 暂停计时器",
        pauseBtn_resume: "▶ 继续计时器",
        saveBtn: "保存",
        lblFavManager: "管理",
        exportBtn: "⬇️ 导出",
        importBtn: "⬆️ 导入 (CSV)",
        lblEmptyList: "空.",
        saveItemBtn: "保存",
        delBtn: "删除",
        placeholder: "翻译...",
        saved_msg: "✅ 已保存!",
        error_lang: "❌ 相同!",
        lblMute: "开启音频",
        lblNotify: "显示通知",
        lblContent: "内容类型:",
        dropdowns: {
            languages: { en: "英语", fa: "波斯语", fr: "法语", de: "德语", it: "意大利语", es: "西班牙语", ru: "俄语", zh: "中文", ar: "阿拉伯语", ko: "韩语" },
            levels: {
                A1: "初学者 (A1)", A2: "初级 (A2)", B1: "中级 (B1)", B2: "中高级 (B2)", C1: "高级 (C1)", C2: "精通 (C2)",
                Grammar_Tips: "语法", Favorites: "我的收藏"
            },
            contentTypes: { word: "单词", sentence: "句子" }
        }
    },
    ar: {
        appTitle: "LinguaFlash",
        lblSource: "اللغة المصدر:",
        lblTarget: "اللغة الهدف:",
        lblLevel: "المستوى:",
        lblFreq: "التكرار (د):",
        lblUnit: "د",
        manageBtn: "📂 المفضلة",
        testBtn: "🔊 اختبار",
        pauseBtn_pause: "⏸ إيقاف المؤقت",
        pauseBtn_resume: "▶ استئناف المؤقت",
        saveBtn: "حفظ",
        lblFavManager: "إدارة",
        exportBtn: "⬇️ تصدير",
        importBtn: "⬆️ استيراد (CSV)",
        lblEmptyList: "فارغة.",
        saveItemBtn: "حفظ",
        delBtn: "حذف",
        placeholder: "الترجمة...",
        saved_msg: "✅ تم الحفظ!",
        error_lang: "❌ متطابقة!",
        lblMute: "تشغيل الصوت",
        lblNotify: "إظهار الإشعارات",
        lblContent: "نوع المحتوى:",
        dropdowns: {
            languages: { en: "الإنجليزية", fa: "الفارسية", fr: "الفرنسية", de: "الألمانية", it: "الإيطالية", es: "الأسبانية", ru: "الروسية", zh: "الصينية", ar: "العربية", ko: "الكورية" },
            levels: {
                A1: "مبتدئ (A1)", A2: "أساسي (A2)", B1: "متوسط (B1)", B2: "فوق متوسط (B2)", C1: "متقدم (C1)", C2: "إتقان (C2)",
                Grammar_Tips: "قواعد", Favorites: "المفضلة"
            },
            contentTypes: { word: "كلمة", sentence: "جملة" }
        }
    },
    ko: {
        appTitle: "LinguaFlash",
        lblSource: "출처 언어:",
        lblTarget: "목표 언어:",
        lblLevel: "레벨 (CEFR):",
        lblFreq: "빈도 (분):",
        lblUnit: "분",
        manageBtn: "📂 즐겨찾기 관리",
        testBtn: "🔊 오디오 테스트",
        pauseBtn_pause: "⏸ 타이머 일시정지",
        pauseBtn_resume: "▶ 타이머 재개",
        saveBtn: "설정 저장",
        lblFavManager: "문장 관리",
        exportBtn: "⬇️ 내보내기 (CSV)",
        importBtn: "⬆️ 가져오기 (CSV)",
        lblEmptyList: "목록이 비어 있습니다.",
        saveItemBtn: "저장",
        delBtn: "삭제",
        placeholder: "번역 입력...",
        saved_msg: "✅ 저장됨! 타이머 재설정.",
        error_lang: "❌ 언어가 동일함!",
        lblMute: "오디오 켜기",
        lblNotify: "알림 표시",
        lblContent: "콘텐츠 유형:",
        dropdowns: {
            languages: { en: "영어", fa: "페르시아어", fr: "프랑스어", de: "독일어", it: "이탈리아어", es: "스페인어", ru: "러시아어", zh: "중국어", ar: "아랍어", ko: "한국어" },
            levels: {
                A1: "초급 (A1)", A2: "기초 (A2)", B1: "중급 (B1)", B2: "중상급 (B2)", C1: "고급 (C1)", C2: "최상급 (C2)",
                Grammar_Tips: "문법 팁", Favorites: "내 즐겨찾기"
            },
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

    // Load Settings
    chrome.storage.local.get(['sourceLang', 'targetLang', 'level', 'frequency', 'isPaused', 'muteAudio', 'showNotify', 'contentMode'], (result) => {
        if (result.sourceLang) {
            sourceLangEl.value = result.sourceLang;
            updateUILanguage(result.sourceLang); // Update UI text based on saved language
        }
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

        // Apply Localization
        // updateUILanguage(sourceLangEl.value); // This was moved inside the if (result.sourceLang) block

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
            // ... existing dropdown logic ...
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

            // Content Type (Added Logic)
            if (t.dropdowns.contentTypes) {
                const contentModeEl = document.getElementById('contentMode');
                if (contentModeEl) {
                    Array.from(contentModeEl.options).forEach(opt => {
                        if (t.dropdowns.contentTypes[opt.value]) {
                            opt.textContent = t.dropdowns.contentTypes[opt.value];
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
                csvContent += `"${item.id}", "${word}", "${trans}"\n`;
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
        fa: "تست سیستم صوتی",
        ko: "오디오 시스템 테스트"
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
        fa: "fa-IR",
        ko: "ko-KR"
    };
    return locales[lang] || lang;
}
