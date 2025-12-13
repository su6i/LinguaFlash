const fs = require('fs');
const path = require('path');

try {
    const vocabPath = path.join('/Users/su6i/@-github/not_finished/LinguaFlash/vocabulary.js');
    let content = fs.readFileSync(vocabPath, 'utf8');

    // Remove "export const vocabulary =" part to verify the logic manually or use node to require it if it was commonjs
    // Since it uses 'export', it's ES module. I can try to parse the 'wordCollections' array.

    const startMarker = "const wordCollections = [";
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf("function generateVocabulary");

    if (startIndex === -1 || endIndex === -1) throw new Error("Markers not found");

    let arrayString = content.substring(startIndex + startMarker.length - 1, endIndex).trim();
    if (arrayString.endsWith(';')) arrayString = arrayString.slice(0, -1);

    // Fix potential trailing close bracket if logic was sloppy before
    if (!arrayString.endsWith(']')) {
        const lastBracket = arrayString.lastIndexOf(']');
        arrayString = arrayString.substring(0, lastBracket + 1);
    }

    const wordCollections = eval(arrayString);
    console.log("✅ vocabulary.js parsed successfully.");
    console.log(`Total Levels: ${wordCollections.length}`);
    wordCollections.forEach(l => {
        console.log(`- ${l.level}: ${l.items.length} items`);
    });

} catch (e) {
    console.error("❌ Error parsing vocabulary.js:", e.message);
}
