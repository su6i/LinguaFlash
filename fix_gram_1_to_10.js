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

// Data for fixing Items 1-10 (gram_8 is already fixed, but we include it for completeness if needed, or skip)
const corrections = {
    "gram_1": {
        title: { en: "To Be (Present)", fa: "فعل بودن (حال)", fr: "Être (Présent)", de: "Sein (Präsens)", it: "Essere (Presente)", es: "Ser/Estar (Presente)", ru: "Быть (Настоящее)", zh: "是 (现在时)", ar: "يكون (مضارع)", ko: "이다 (현재)" },
        example: { en: "I am happy.", fa: "من خوشحال هستم.", fr: "Je suis heureux.", de: "Ich bin glücklich.", it: "Sono felice.", es: "Estoy feliz.", ru: "Я счастлив.", zh: "我很快乐。", ar: "أنا سعيد.", ko: "나는 행복하다." }
    },
    "gram_2": {
        title: { en: "To Have (Present)", fa: "فعل داشتن (حال)", fr: "Avoir (Présent)", de: "Haben (Präsens)", it: "Avere (Presente)", es: "Tener (Presente)", ru: "Иметь (Настоящее)", zh: "有 (现在时)", ar: "يملك (مضارع)", ko: "가지다 (현재)" },
        example: { en: "I have a book.", fa: "من یک کتاب دارم.", fr: "J'ai un livre.", de: "Ich habe ein Buch.", it: "Ho un libro.", es: "Tengo un libro.", ru: "У меня есть книга.", zh: "我有一本书。", ar: "أملك كتاباً.", ko: "나는 책이 있다." }
    },
    "gram_3": {
        title: { en: "Simple Present", fa: "حال ساده", fr: "Présent Simple", de: "Präsens", it: "Presente Semplice", es: "Presente Simple", ru: "Настоящее простое", zh: "一般现在时", ar: "المضارع البسيط", ko: "현재 시제" },
        example: { en: "He walks every day.", fa: "او هر روز پیاده‌روی می‌کند.", fr: "Il marche tous les jours.", de: "Er läuft jeden Tag.", it: "Lui cammina ogni giorno.", es: "Él camina todos los días.", ru: "Он гуляет каждый день.", zh: "他每天散步。", ar: "هو يمشي كل يوم.", ko: "그는 매일 걷는다." }
    },
    "gram_4": {
        title: { en: "Present Continuous", fa: "حال استمراری", fr: "Présent Continu", de: "Verlaufsform Präsens", it: "Presente Progressivo", es: "Presente Continuo", ru: "Настоящее продолженное", zh: "现在进行时", ar: "المضارع المستمر", ko: "현재 진행형" },
        example: { en: "I am eating now.", fa: "من الان دارم غذا می‌خورم.", fr: "Je mange maintenant.", de: "Ich esse gerade.", it: "Sto mangiando ora.", es: "Estoy comiendo ahora.", ru: "Я сейчас ем.", zh: "我现在在吃东西。", ar: "أنا آكل الآن.", ko: "나는 지금 먹고 있다." }
    },
    "gram_5": {
        title: { en: "Simple Past", fa: "گذشته ساده", fr: "Passé Simple", de: "Präteritum", it: "Passato Remoto", es: "Pasado Simple", ru: "Прошедшее простое", zh: "一般过去时", ar: "الماضي البسيط", ko: "과거 시제" },
        example: { en: "I saw him yesterday.", fa: "من دیروز او را دیدم.", fr: "Je l'ai vu hier.", de: "Ich sah ihn gestern.", it: "L'ho visto ieri.", es: "Lo vi ayer.", ru: "Я видел его вчера.", zh: "我昨天见到了他。", ar: "رأيته أمس.", ko: "나는 어제 그를 보았다." }
    },
    "gram_6": {
        title: { en: "Past Continuous", fa: "گذشته استمراری", fr: "Passé Continu", de: "Verlaufsform Präteritum", it: "Passato Progressivo", es: "Pasado Continuo", ru: "Прошедшее продолженное", zh: "过去进行时", ar: "الماضي المستمر", ko: "과거 진행형" },
        example: { en: "I was sleeping when you called.", fa: "وقتی تماس گرفتی، خواب بودم.", fr: "Je dormais quand tu as appelé.", de: "Ich schlief, als du anriefst.", it: "Stavo dormendo quando hai chiamato.", es: "Estaba durmiendo cuando llamaste.", ru: "Я спал, когда ты позвонил.", zh: "你打电话时我在睡觉。", ar: "كنت نائماً عندما اتصلت.", ko: "네가 전화했을 때 나는 자고 있었다." }
    },
    "gram_7": {
        title: { en: "Future (Will)", fa: "آینده (Will)", fr: "Futur (Will)", de: "Futur I", it: "Futuro (Will)", es: "Futuro (Will)", ru: "Будущее (Will)", zh: "将来时 (Will)", ar: "المستقبل (Will)", ko: "미래 (Will)" },
        example: { en: "I will go tomorrow.", fa: "من فردا خواهم رفت.", fr: "J'irai demain.", de: "Ich werde morgen gehen.", it: "Andrò domani.", es: "Iré mañana.", ru: "Я пойду завтра.", zh: "我明天去。", ar: "سأذهب غداً.", ko: "나는 내일 갈 것이다." }
    },
    "gram_9": {
        title: { en: "Going to Future", fa: "آینده (Going to)", fr: "Futur Proche", de: "Futur (Going to)", it: "Futuro Intenzionale", es: "Futuro (Ir a)", ru: "Будущее (Going to)", zh: "打算做...", ar: "المستقبل القريب", ko: "미래 (Going to)" },
        example: { en: "I am going to buy a car.", fa: "من قصد دارم یک ماشین بخرم.", fr: "Je vais acheter une voiture.", de: "Ich werde ein Auto kaufen.", it: "Ho intenzione di comprare un'auto.", es: "Voy a comprar un coche.", ru: "Я собираюсь купить машину.", zh: "我打算买辆车。", ar: "سأشتري سيارة.", ko: "나는 차를 살 예정이다." }
    },
    "gram_10": {
        title: { en: "Present Perfect", fa: "حال کامل", fr: "Passé Composé", de: "Perfekt", it: "Passato Prossimo", es: "Pretérito Perfecto", ru: "Настоящее совершенное", zh: "现在完成时", ar: "المضارع التام", ko: "현재 완료" },
        example: { en: "I have finished my work.", fa: "من کارم را تمام کرده‌ام.", fr: "J'ai fini mon travail.", de: "Ich habe meine Arbeit beendet.", it: "Ho finito il mio lavoro.", es: "He terminado mi trabajo.", ru: "Я закончил работу.", zh: "我已经完成了工作。", ar: "لقد أنهيت عملي.", ko: "나는 일을 끝마쳤다." }
    }
};

let fixedCount = 0;
wordCollections.forEach(level => {
    if (level.level === 'Grammar_Tips') {
        level.items.forEach(item => {
            if (corrections[item.id]) {
                const fix = corrections[item.id];

                // Preserve 'fa' if it exists and upgrade it, else use fix
                // Actually, we want to enforce the standard structure
                item.word = fix.title;
                item.sentence = fix.example;
                // Preserve FA conceptual note if it was in 'sentence' previously?
                // The prompt says "mostly have less than 10 languages", implying they might have some.
                // But for uniformity, we restart with clean verified Native-Simple examples.

                fixedCount++;
            }
        });
    }
});

console.log(`Fixed ${fixedCount} grammar items.`);

// Serialize
const newArrayString = JSON.stringify(wordCollections, null, 2).replace(/"([^"]+)":/g, '$1:');
const newFileContent = `// vocabulary.js

// دیتابیس کلمات دسته‌بندی شده بر اساس سطح
const wordCollections = ${newArrayString};

// تابع کمکی اصلاح شده برای تولید ساختار نهایی
function generateVocabulary() {
  const dataset = [];
  const languages = ['en', 'fr', 'de', 'it', 'es', 'ru', 'zh', 'ar', 'ko'];

  // حلقه روی هر سطح
  wordCollections.forEach(collection => {
    const currentLevel = collection.level;

    // حلقه روی آیتم‌های آن سطح
    collection.items.forEach(baseWord => {
      // حلقه روی زبان‌های هدف
      languages.forEach(targetLang => {
        // === اصلاح مهم: چک کن که آیا ترجمه این زبان وجود دارد یا نه ===
        if (baseWord[targetLang]) {
          dataset.push({
            word: baseWord[targetLang],
            level: currentLevel,
            lang: targetLang,
            translations: baseWord,
            sentence: baseWord['sentence_' + targetLang] || "" // Add sentence field
          });
        }
      });
    });
  });

  return dataset;
}
// خروجی نهایی
export const vocabulary = generateVocabulary();
`;

fs.writeFileSync(vocabPath, newFileContent);
console.log("Updated vocabulary.js with Grammar 1-10 fixes.");
