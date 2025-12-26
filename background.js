import { initDB, isDBEmpty, populateDB, getRandomWord, getTranslation } from './db.js';

// Global to hold DB status
let isDBReady = false;

async function bootstrapDB() {
    try {
        const empty = await isDBEmpty();
        if (empty) {
            console.log("LinguaFlash: Database is empty. Bootstrapping...");
            const response = await fetch(chrome.runtime.getURL('vocabulary_db.json'));
            const data = await response.json();
            await populateDB(data);
            console.log("LinguaFlash: Database bootstrapped with data.");
        }
        isDBReady = true;
    } catch (error) {
        console.error("LinguaFlash: DB Bootstrap failed:", error);
    }
}

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
    chrome.contextMenus.update("add_to_linguaflash", { title: title }, () => {
        if (chrome.runtime.lastError) { /* ignore */ }
    });
}

chrome.runtime.onInstalled.addListener(async () => {
    console.log("LinguaFlash: Installed/Updated (v1.2.3)");

    // Bootstrap DB
    await bootstrapDB();

    chrome.storage.local.get(['sourceLang', 'isPaused', 'frequency'], (result) => {
        const lang = result.sourceLang || 'en';

        // Initialize defaults if not present
        if (!result.sourceLang) {
            chrome.storage.local.set({
                sourceLang: 'en',
                targetLang: 'en',
                level: 'A1',
                frequency: 5,
                isPaused: false
            });
        }

        // Nuclear Clear: Remove EVERY alarm to ensure no leftovers from v1.2.2 or earlier
        chrome.alarms.clearAll(() => {
            if (result.isPaused === false) { // Explicitly NOT paused
                createAlarm(result.frequency || 5);
                console.log("LinguaFlash: Fresh alarm created on install.");
            } else {
                console.log("LinguaFlash: Started in PAUSED state. No alarms created.");
            }
        });

        chrome.contextMenus.create({
            id: "add_to_linguaflash",
            title: menuTranslations[lang] || menuTranslations['en'],
            contexts: ["selection"]
        });
    });
});

// Added: Watch for Storage changes (Instant Pause response)
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local') {
        if (changes.sourceLang) {
            updateContextMenu(changes.sourceLang.newValue);
        }
        if (changes.isPaused) {
            if (changes.isPaused.newValue === true) {
                chrome.alarms.clearAll(() => console.log("LinguaFlash: Storage changed to PAUSED. Alarms nuked."));
            } else {
                chrome.storage.local.get(['frequency'], (res) => {
                    createAlarm(res.frequency || 5);
                    console.log("LinguaFlash: Storage changed to ACTIVE. Alarm restored.");
                });
            }
        }
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

// Listen for popup messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "resetTimer") {
        // Delay slightly to ensure storage.set is finalized across all contexts
        setTimeout(() => {
            createAlarm(request.settings.frequency);
            console.log(`LinguaFlash: Alarm reset requested (${request.settings.frequency} min).`);
            showNotification();
        }, 300);

    } else if (request.action === "stopTimer") {
        chrome.alarms.clearAll(() => {
            console.log("LinguaFlash: Stop requested. Alarms cleared.");
        });
    }
});

// Alarm Creation Function - Aggressive Version 4
function createAlarm(minutes) {
    const alarmName = "linguaVocab_v4_FINAL";
    // Clear EVERYTHING first, then create the one and only true alarm
    chrome.alarms.clearAll(() => {
        chrome.alarms.create(alarmName, {
            delayInMinutes: parseFloat(minutes),
            periodInMinutes: parseFloat(minutes)
        });
        console.log(`LinguaFlash: Alarm '${alarmName}' created (${minutes} min).`);
    });
}

// When alarm triggers
chrome.alarms.onAlarm.addListener(async (alarm) => {
    const currentName = "linguaVocab_v4_FINAL";
    if (alarm.name !== currentName) {
        console.log(`LinguaFlash: GHOST DETECTED! Killing '${alarm.name}'`);
        chrome.alarms.clear(alarm.name);
        return;
    }

    chrome.storage.local.get(['isPaused'], async (result) => {
        if (result.isPaused === true) {
            console.log("LinguaFlash: Fired while PAUSED. Nuking all alarms.");
            chrome.alarms.clearAll();
            return;
        }
        await showNotification();
    });
});

async function showNotification() {
    if (!isDBReady) await bootstrapDB();

    chrome.storage.local.get(['sourceLang', 'targetLang', 'level', 'customItems', 'muteAudio', 'showNotify', 'contentMode', 'isPaused'], async (settings) => {
        let { targetLang, level, sourceLang, customItems, muteAudio, showNotify, contentMode, isPaused } = settings;

        if (isPaused === true) return;

        // --- Compatibility Fix for 1.3.x ---
        // If user was on the old "Grammar_Tips" level, redirect them to "Grammar_Rules"
        if (level === 'Grammar_Tips') {
            level = 'Grammar_Rules';
            console.log("LinguaFlash: Migrating legacy Grammar_Tips level to Grammar_Rules.");
            chrome.storage.local.set({ level: 'Grammar_Rules' });
        }

        let targetEntry = null;
        let sourceEntry = null;

        if (level === 'Favorites') {
            const favorites = customItems || [];
            if (favorites.length === 0) {
                targetEntry = { word_text: "Empty Favorites", sentence_text: "Add some words!" };
                sourceEntry = { word_text: "لیست خالی", sentence_text: "کلمات را اضافه کنید" };
            } else {
                const fav = favorites[Math.floor(Math.random() * favorites.length)];
                targetEntry = { word_text: fav.word, sentence_text: fav.sentence || "" };
                sourceEntry = { word_text: fav.translations[sourceLang] || "", sentence_text: fav.translations['sentence_' + sourceLang] || "" };
            }
        } else {
            // Get from IndexedDB
            targetEntry = await getRandomWord(level, targetLang);
            if (!targetEntry) {
                console.log(`LinguaFlash: Level '${level}' not found. Attempting emergency bootstrap...`);
                await bootstrapDB();
                targetEntry = await getRandomWord(level, targetLang);
            }

            if (targetEntry) {
                sourceEntry = await getTranslation(targetEntry.word_id, sourceLang);
            }
        }

        if (!targetEntry) {
            console.warn(`LinguaFlash: Still no entries found for ${level}/${targetLang} after bootstrap.`);
            // Fallback notification so user knows SOMETHING happened
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'logo-128.png',
                title: 'LinguaFlash',
                message: `No data found for level: ${level}. Please try choosing another level and save again.`,
                priority: 1
            });
            return;
        }

        const mode = contentMode || 'word';
        const isSpecialLevel = ['Grammar_Rules', 'Confusing_Words', 'Phrasal_Verbs', 'Wisdom'].includes(level);

        let displayTarget = targetEntry.word_text;
        let displaySource = sourceEntry ? sourceEntry.word_text : "---";

        if (mode === 'sentence' && targetEntry.sentence_text) {
            displayTarget = targetEntry.sentence_text;
            displaySource = sourceEntry ? sourceEntry.sentence_text : "---";
        }

        // --- Special Logic for Grammar / Wisdom ---
        if (isSpecialLevel) {
            // Notifications: ALWAYS show TITLE (word) and EXAMPLE (sentence)
            displayTarget = `🔹 ${targetEntry.word_text}`;
            if (targetEntry.sentence_text && targetEntry.sentence_text.trim() !== targetEntry.word_text.trim()) {
                displayTarget += `\n${targetEntry.sentence_text}`;
            }

            if (sourceEntry) {
                displaySource = `🔸 ${sourceEntry.word_text}`;
                if (sourceEntry.sentence_text && sourceEntry.sentence_text.trim() !== sourceEntry.word_text.trim()) {
                    displaySource += `\n${sourceEntry.sentence_text}`;
                }
            }
        }

        if (showNotify !== false) {
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'logo-128.png',
                title: `LinguaFlash (${targetLang.toUpperCase()})`,
                message: `${displayTarget}\n\n${displaySource}`,
                priority: 2
            });
        }

        if (muteAudio !== true) {
            // TTS logic
            let speechText = targetEntry.word_text;
            let sourceSpeech = sourceEntry ? sourceEntry.word_text : "";

            if (mode === 'sentence' || isSpecialLevel) {
                // For Special Levels, ALWAYS speak the sentence (meaning/example), NOT the title/topic
                speechText = targetEntry.sentence_text || targetEntry.word_text;
                sourceSpeech = sourceEntry ? (sourceEntry.sentence_text || sourceEntry.word_text) : "";
            }

            // CLEAN TEXT for TTS: Strip emojis/shapes
            const cleanSpeechText = speechText.replace(/[\u2100-\u2BFF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, '').trim();
            const cleanSourceText = sourceSpeech.replace(/[\u2100-\u2BFF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, '').trim();

            playAudio(cleanSpeechText, targetLang, cleanSourceText, sourceLang);
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
    try {
        chrome.tts.stop();
    } catch (e) { console.error("TTS stop failed", e); }

    // Visual Debug for user (Temporary)
    // chrome.notifications.create({ type: 'basic', iconUrl: 'logo-128.png', title: 'TTS Speaking...', message: `T: ${targetText}\nS: ${sourceText}`, priority: 0 });

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

        // Split by comma (English/Persian) or Slash
        // Regex: /[,،\/]/
        const parts = sourceText.split(/[,،\/]/);

        parts.forEach((part, index) => {
            const trimmed = part.trim();
            if (!trimmed) return;

            chrome.tts.speak(trimmed, {
                lang: sourceLocale,
                rate: 1.0,
                pitch: 1.0,
                volume: 1.0,
                enqueue: true, // Play after the target and spacer
                onEvent: function (e) {
                    if (e.type === 'error') console.error("TTS Source Error:", e.errorMessage);
                }
            });

            // Add a mini pause between multiple meanings (but not after the last one)
            if (index < parts.length - 1) {
                chrome.tts.speak(" . ", {
                    lang: sourceLocale,
                    rate: 0.5,
                    volume: 0.01,
                    enqueue: true
                });
            }
        });
    }
}