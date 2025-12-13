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
        pauseBtn_pause: "⏸ Pause",
        pauseBtn_resume: "▶ Resume",
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
        lblMute: "Mute Audio",
        lblNotify: "Show Notification",
        dropdowns: {
            languages: { en: "English", fa: "Persian", fr: "French", de: "German", it: "Italian", es: "Spanish", ru: "Russian", zh: "Chinese", ar: "Arabic", ko: "Korean" },
            levels: { A1: "Beginner (A1)", A2: "Elementary (A2)", B1: "Intermediate (B1)", B2: "Upper Intermediate (B2)", C1: "Advanced (C1)", C2: "Mastery (C2)", A1_Sentences: "Sentences (A1)", A2_Sentences: "Sentences (A2)", B1_Sentences: "Sentences (B1)", B2_Sentences: "Sentences (B2)", C1_Sentences: "Sentences (C1)", C2_Sentences: "Sentences (C2)", Grammar_Tips: "Grammar Tips", Motivational: "Motivational Quotes", Favorites: "My Favorites" }
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
        pauseBtn_pause: "⏸ توقف",
        pauseBtn_resume: "▶ ادامه",
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
        lblMute: "قطع صدا",
        lblNotify: "نمایش اعلان",
        dropdowns: {
            languages: { en: "انگلیسی", fa: "فارسی", fr: "فرانسوی", de: "آلمانی", it: "ایتالیایی", es: "اسپانیایی", ru: "روسی", zh: "چینی", ar: "عربی", ko: "کره‌ای" },
            levels: { A1: "مبتدی (A1)", A2: "مقدماتی (A2)", B1: "متوسط (B1)", B2: "پیشرفته (B2)", C1: "پیشرفته (C1)", C2: "پیشرفته (C2)", A1_Sentences: "جمله (A1)", A2_Sentences: "جمله (A2)", B1_Sentences: "جمله (B1)", B2_Sentences: "جمله (B2)", C1_Sentences: "جمله (C1)", C2_Sentences: "جمله (C2)", Grammar_Tips: "نکات گرامری", Motivational: "جملات انگیزشی", Favorites: "جملات منتخب من" }
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
        pauseBtn_pause: "⏸ Pause",
        pauseBtn_resume: "▶ Reprendre",
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
        lblMute: "Couper le son",
        lblNotify: "Afficher notif.",
        dropdowns: {
            languages: { en: "Anglais", fa: "Persan", fr: "Français", de: "Allemand", it: "Italien", es: "Espagnol", ru: "Russe", zh: "Chinois", ar: "Arabe", ko: "Coréen" },
            levels: {
                A1: "Débutant (A1)", A2: "Élémentaire (A2)", B1: "Intermédiaire (B1)", B2: "Intermédiaire sup. (B2)", C1: "Avancé (C1)", C2: "Maîtrise (C2)",
                A1_Sentences: "Phrases (A1)", A2_Sentences: "Phrases (A2)", B1_Sentences: "Phrases (B1)", B2_Sentences: "Phrases (B2)", C1_Sentences: "Phrases (C1)", C2_Sentences: "Phrases (C2)",
                Grammar_Tips: "Grammaire", Motivational: "Motivation", Favorites: "Mes Favoris"
            }
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
        pauseBtn_pause: "⏸ Pause",
        pauseBtn_resume: "▶ Weiter",
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
        lblMute: "Stumm",
        lblNotify: "Benachrichtigung",
        dropdowns: {
            languages: { en: "Englisch", fa: "Persisch", fr: "Französisch", de: "Deutsch", it: "Italienisch", es: "Spanisch", ru: "Russisch", zh: "Chinesisch", ar: "Arabisch", ko: "Koreanisch" },
            levels: {
                A1: "Anfänger (A1)", A2: "Grundlegend (A2)", B1: "Mittelstufe (B1)", B2: "Obere Mittelstufe (B2)", C1: "Fortgeschritten (C1)", C2: "Experte (C2)",
                A1_Sentences: "Sätze (A1)", A2_Sentences: "Sätze (A2)", B1_Sentences: "Sätze (B1)", B2_Sentences: "Sätze (B2)", C1_Sentences: "Sätze (C1)", C2_Sentences: "Sätze (C2)",
                Grammar_Tips: "Grammatik", Motivational: "Motivation", Favorites: "Meine Favoriten"
            }
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
        pauseBtn_pause: "⏸ Pausa",
        pauseBtn_resume: "▶ Riprendi",
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
        lblMute: "Muto",
        lblNotify: "Mostra notifica",
        dropdowns: {
            languages: { en: "Inglese", fa: "Persiano", fr: "Francese", de: "Tedesco", it: "Italiano", es: "Spagnolo", ru: "Russo", zh: "Cinese", ar: "Arabo", ko: "Coreano" },
            levels: {
                A1: "Principiante (A1)", A2: "Elementare (A2)", B1: "Intermedio (B1)", B2: "Intermedio sup. (B2)", C1: "Avanzato (C1)", C2: "Padronanza (C2)",
                A1_Sentences: "Frasi (A1)", A2_Sentences: "Frasi (A2)", B1_Sentences: "Frasi (B1)", B2_Sentences: "Frasi (B2)", C1_Sentences: "Frasi (C1)", C2_Sentences: "Frasi (C2)",
                Grammar_Tips: "Grammatica", Motivational: "Motivazione", Favorites: "I miei preferiti"
            }
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
        pauseBtn_pause: "⏸ Pausa",
        pauseBtn_resume: "▶ Reanudar",
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
        lblMute: "Silenciar",
        lblNotify: "Mostrar notif.",
        dropdowns: {
            languages: { en: "Inglés", fa: "Persa", fr: "Francés", de: "Alemán", it: "Italiano", es: "Español", ru: "Ruso", zh: "Chino", ar: "Árabe", ko: "Coreano" },
            levels: {
                A1: "Principiante (A1)", A2: "Elemental (A2)", B1: "Intermedio (B1)", B2: "Intermedio sup. (B2)", C1: "Avanzado (C1)", C2: "Dominio (C2)",
                A1_Sentences: "Frases (A1)", A2_Sentences: "Frases (A2)", B1_Sentences: "Frases (B1)", B2_Sentences: "Frases (B2)", C1_Sentences: "Frases (C1)", C2_Sentences: "Frases (C2)",
                Grammar_Tips: "Gramática", Motivational: "Motivación", Favorites: "Mis Favoritos"
            }
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
        pauseBtn_pause: "⏸ Пауза",
        pauseBtn_resume: "▶ Пуск",
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
        lblMute: "Без звука",
        lblNotify: "Уведомления",
        dropdowns: {
            languages: { en: "Английский", fa: "Персидский", fr: "Французский", de: "Немецкий", it: "Итальянский", es: "Испанский", ru: "Русский", zh: "Китайский", ar: "Арабский", ko: "Корейский" },
            levels: {
                A1: "Начинающий (A1)", A2: "Элементарный (A2)", B1: "Средний (B1)", B2: "Выше сред. (B2)", C1: "Продвинутый (C1)", C2: "Проф. (C2)",
                A1_Sentences: "Фразы (A1)", A2_Sentences: "Фразы (A2)", B1_Sentences: "Фразы (B1)", B2_Sentences: "Фразы (B2)", C1_Sentences: "Фразы (C1)", C2_Sentences: "Фразы (C2)",
                Grammar_Tips: "Грамматика", Motivational: "Мотивация", Favorites: "Избранное"
            }
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
        pauseBtn_pause: "⏸ 暂停",
        pauseBtn_resume: "▶ 继续",
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
        lblMute: "静音",
        lblNotify: "显示通知",
        dropdowns: {
            languages: { en: "英语", fa: "波斯语", fr: "法语", de: "德语", it: "意大利语", es: "西班牙语", ru: "俄语", zh: "中文", ar: "阿拉伯语", ko: "韩语" },
            levels: {
                A1: "初学者 (A1)", A2: "初级 (A2)", B1: "中级 (B1)", B2: "中高级 (B2)", C1: "高级 (C1)", C2: "精通 (C2)",
                A1_Sentences: "句子 (A1)", A2_Sentences: "句子 (A2)", B1_Sentences: "句子 (B1)", B2_Sentences: "句子 (B2)", C1_Sentences: "句子 (C1)", C2_Sentences: "句子 (C2)",
                Grammar_Tips: "语法", Motivational: "励志", Favorites: "我的收藏"
            }
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
        pauseBtn_pause: "⏸ إيقاف",
        pauseBtn_resume: "▶ استئناف",
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
        lblMute: "كتم الصوت",
        lblNotify: "إظهار الإشعارات",
        dropdowns: {
            languages: { en: "الإنجليزية", fa: "الفارسية", fr: "الفرنسية", de: "الألمانية", it: "الإيطالية", es: "الأسبانية", ru: "الروسية", zh: "الصينية", ar: "العربية", ko: "الكورية" },
            levels: {
                A1: "مبتدئ (A1)", A2: "أساسي (A2)", B1: "متوسط (B1)", B2: "فوق متوسط (B2)", C1: "متقدم (C1)", C2: "إتقان (C2)",
                A1_Sentences: "جمل (A1)", A2_Sentences: "جمل (A2)", B1_Sentences: "جمل (B1)", B2_Sentences: "جمل (B2)", C1_Sentences: "جمل (C1)", C2_Sentences: "جمل (C2)",
                Grammar_Tips: "قواعد", Motivational: "تحفيز", Favorites: "المفضلة"
            }
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
        pauseBtn_pause: "⏸ 일시정지",
        pauseBtn_resume: "▶ 재개",
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
        lblMute: "오디오 음소거",
        lblNotify: "알림 표시",
        dropdowns: {
            languages: { en: "영어", fa: "페르시아어", fr: "프랑스어", de: "독일어", it: "이탈리아어", es: "스페인어", ru: "러시아어", zh: "중국어", ar: "아랍어", ko: "한국어" },
            levels: {
                A1: "초급 (A1)", A2: "기초 (A2)", B1: "중급 (B1)", B2: "중상급 (B2)", C1: "고급 (C1)", C2: "최상급 (C2)",
                A1_Sentences: "문장 (A1)", A2_Sentences: "문장 (A2)", B1_Sentences: "문장 (B1)", B2_Sentences: "문장 (B2)", C1_Sentences: "문장 (C1)", C2_Sentences: "문장 (C2)",
                Grammar_Tips: "문법 팁", Motivational: "동기 부여", Favorites: "내 즐겨찾기"
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

    // NEW Elements
    const importBtn = document.getElementById('importBtn');
    const importFile = document.getElementById('importFile');
    const muteAudioEl = document.getElementById('muteAudio');
    const showNotifyEl = document.getElementById('showNotify');
    const lblMute = document.getElementById('lblMute');
    const lblNotify = document.getElementById('lblNotify');

    // Load Settings
    chrome.storage.local.get(['sourceLang', 'targetLang', 'level', 'frequency', 'isPaused', 'muteAudio', 'showNotify'], (result) => {
        if (result.sourceLang) sourceLangEl.value = result.sourceLang;
        if (result.targetLang) targetLangEl.value = result.targetLang;
        if (result.level) levelEl.value = result.level;
        if (result.frequency) frequencyEl.value = result.frequency;

        // Checkboxes
        if (result.muteAudio !== undefined) muteAudioEl.checked = result.muteAudio;
        else muteAudioEl.checked = false; // default off

        if (result.showNotify !== undefined) showNotifyEl.checked = result.showNotify;
        else showNotifyEl.checked = true; // default on

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
            frequency: parseInt(frequencyEl.value, 10) || 5,
            muteAudio: muteAudioEl.checked,
            showNotify: showNotifyEl.checked
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
        if (muteAudioEl.checked) return; // Don't play if muted? Or allow test? Allow test is better.
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
