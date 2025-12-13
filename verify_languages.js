const fs = require('fs');
const path = require('path');
const vocabPath = path.join('/Users/su6i/@-github/not_finished/LinguaFlash/vocabulary.js');
let content = fs.readFileSync(vocabPath, 'utf8');

const startMarker = "const wordCollections = [";
const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf("function generateVocabulary");
let arrayString = content.substring(startIndex + startMarker.length - 1, endIndex).trim();
if (arrayString.endsWith(';')) arrayString = arrayString.slice(0, -1);
if (!arrayString.endsWith(']')) { const lastBracket = arrayString.lastIndexOf(']'); arrayString = arrayString.substring(0, lastBracket + 1); }
let wordCollections = eval(arrayString);

const languages = ['en', 'fa', 'fr', 'de', 'it', 'es', 'ru', 'zh', 'ar', 'ko'];
let errors = 0;

wordCollections.forEach(collection => {
    console.log(`Checking Level: ${collection.level} (${collection.items.length} items)`);
    collection.items.forEach(item => {
        // Check Word
        if (!item.word) {
            console.error(`Item ${item.id} missing 'word' object.`);
            errors++;
        } else {
            languages.forEach(lang => {
                if (!item.word[lang]) {
                    console.error(`Item ${item.id} (Level ${collection.level}) missing word translation for: ${lang}`);
                    errors++;
                }
            });
        }

        // Check Sentence (if applicable - currently we want ALL to have sentences, right?)
        // The user said: "no word or sentence without translation for 10 languages"
        // So checking sentence coverage too.
        if (collection.level !== 'Grammar_Tips') { // Grammar tips might handle sentence inside word
            if (!item.sentence && collection.level !== 'Grammar_Tips') {
                // Note: Grammar tips structure puts the sentence IN the word object usually.
                // But for A1-C2, we standardized to have 'sentence' object.
                // Let's check if strict sentence checking is needed.
                // For now, let's log missing 'sentence' object or missing keys.
                console.error(`Item ${item.id} (Level ${collection.level}) missing 'sentence' object.`);
                errors++;
            } else if (item.sentence) {
                languages.forEach(lang => {
                    if (!item.sentence[lang]) {
                        console.error(`Item ${item.id} (Level ${collection.level}) missing sentence translation for: ${lang}`);
                        errors++;
                    }
                });
            }
        }
    });
});

if (errors === 0) {
    console.log("SUCCESS: All items have translations for all 10 languages!");
} else {
    console.log(`FAILURE: Found ${errors} missing translations.`);
    process.exit(1);
}
