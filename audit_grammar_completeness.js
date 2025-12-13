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

console.log("=== GRAMMAR SENTENCE COMPLETENESS AUDIT ===");
const expectedLangs = ['en', 'fa', 'fr', 'de', 'it', 'es', 'ru', 'zh', 'ar', 'ko'];
let incompleteCount = 0;

wordCollections.forEach(level => {
    if (level.level === 'Grammar_Tips') {
        level.items.forEach(item => {
            if (!item.sentence) {
                console.log(`[CRITICAL] ${item.id}: No sentence object at all.`);
                incompleteCount++;
                return;
            }

            const missingLangs = expectedLangs.filter(lang => !item.sentence[lang]);

            if (missingLangs.length > 0) {
                console.log(`[INCOMPLETE] ${item.id}: Missing sentence for [${missingLangs.join(', ')}]`);
                incompleteCount++;
            }
        });
    }
});

if (incompleteCount === 0) {
    console.log("✅ All grammar items have complete sentence translations for all 10 languages.");
} else {
    console.log(`❌ Found ${incompleteCount} incomplete grammar items.`);
}
