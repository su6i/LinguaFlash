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

wordCollections.forEach(collection => {
    let missingCounts = {};
    languages.forEach(l => missingCounts[l] = 0);

    collection.items.forEach(item => {
        languages.forEach(lang => {
            if (!item.word || !item.word[lang]) missingCounts[lang]++;
            // Not checking sentence separately to avoid double counting for this summary, 
            // usually if word is missing, sentence is too or irrelevant for this high-level check.
        });
    });

    const totalMissing = Object.values(missingCounts).reduce((a, b) => a + b, 0);
    if (totalMissing > 0) {
        console.log(`Level ${collection.level}:`);
        console.log(JSON.stringify(missingCounts, null, 2));
    } else {
        console.log(`Level ${collection.level}: OK`);
    }
});
