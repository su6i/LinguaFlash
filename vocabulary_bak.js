// vocabulary.js

// دیتابیس کلمات دسته‌بندی شده بر اساس سطح
const wordCollections = [
  {
    level: "A1",
    items: [
      {
        id: "hello",
        word: {
          en: "Hello",
          fa: "سلام",
          fr: "Bonjour",
          de: "Hallo",
          it: "Ciao",
          es: "Hola",
          ru: "Здравствуйте",
          zh: "你好",
          ar: "مرحبا",
          ko: "안녕하세요"
        },
        sentence: {
          en: "Hello, how are you?",
          fa: "سلام، حال شما چطور است؟",
          fr: "Bonjour, comment allez-vous ?",
          de: "Hallo, wie geht es Ihnen?",
          it: "Ciao, come stai?",
          es: "Hola, ¿cómo estás?",
          ru: "Здравствуйте, как дела?",
          zh: "你好，你好吗？",
          ar: "مرحبا، كيف حالك؟",
          ko: "안녕하세요, 어떻게 지내세요?"
        }
      },
      {
        id: "goodbye",
        word: {
          en: "Goodbye",
          fa: "خداحافظ",
          fr: "Au revoir",
          de: "Auf Wiedersehen",
          it: "Arrivederci",
          es: "Adiós",
          ru: "До свидания",
          zh: "再见",
          ar: "وداعا",
          ko: "안녕히 가세요"
        },
        sentence: {
          en: "Goodbye, see you later.",
          fa: "خداحافظ، بعدا می‌بینمت.",
          fr: "Au revoir, à plus tard.",
          de: "Auf Wiedersehen, bis später.",
          it: "Arrivederci, a dopo.",
          es: "Adiós, hasta luego.",
          ru: "До свидания, увидимся позже.",
          zh: "再见，回头见。",
          ar: "وداعا، أراك لاحقا.",
          ko: "안녕히 가세요, 나중에 봐요."
        }
      },
      {
        id: "yes",
        word: {
          en: "Yes",
          fa: "بله",
          fr: "Oui",
          de: "Ja",
          it: "Sì",
          es: "Sí",
          ru: "Да",
          zh: "是",
          ar: "نعم",
          ko: "네"
        },
        sentence: {
          en: "Yes, I agree.",
          fa: "بله، من موافقم.",
          fr: "Oui, je suis d'accord.",
          de: "Ja, ich stimme zu.",
          it: "Sì, sono d'accordo.",
          es: "Sí, estoy de acuerdo.",
          ru: "Да, я согласен.",
          zh: "是的，我同意。",
          ar: "نعم، أنا موافق.",
          ko: "네, 동의합니다."
        }
      },
      {
        id: "no",
        word: {
          en: "No",
          fa: "خیر",
          fr: "Non",
          de: "Nein",
          it: "No",
          es: "No",
          ru: "Нет",
          zh: "不",
          ar: "لا",
          ko: "아니요"
        },
        sentence: {
          en: "No, thank you.",
          fa: "خیر، متشکرم.",
          fr: "Non, merci.",
          de: "Nein, danke.",
          it: "No, grazie.",
          es: "No, gracias.",
          ru: "Нет, спасибо.",
          zh: "不，谢谢。",
          ar: "لا، شكرا.",
          ko: "아니요, 감사합니다."
        }
      },
      {
        id: "please",
        word: {
          en: "Please",
          fa: "لطفا",
          fr: "S'il vous plaît",
          de: "Bitte",
          it: "Per favore",
          es: "Por favor",
          ru: "Пожалуйста",
          zh: "请",
          ar: "من فضلك",
          ko: "제발"
        },
        sentence: {
          en: "Please help me.",
          fa: "لطفا به من کمک کنید.",
          fr: "S'il vous plaît, aidez-moi.",
          de: "Bitte helfen Sie mir.",
          it: "Per favore, aiutami.",
          es: "Por favor, ayúdame.",
          ru: "Пожалуйста, помогите мне.",
          zh: "请帮帮我。",
          ar: "من فضلك ساعدني.",
          ko: "제발 저를 도와주세요."
        }
      },
      {
        id: "thank_you",
        word: {
          en: "Thank you",
          fa: "متشکرم",
          fr: "Merci",
          de: "Danke",
          it: "Grazie",
          es: "Gracias",
          ru: "Спасибо",
          zh: "谢谢",
          ar: "شكرا",
          ko: "감사합니다"
        },
        sentence: {
          en: "Thank you very much.",
          fa: "خیلی متشکرم.",
          fr: "Merci beaucoup.",
          de: "Vielen Dank.",
          it: "Grazie mille.",
          es: "Muchas gracias.",
          ru: "Большое спасибо.",
          zh: "非常感谢。",
          ar: "شكرا جزيلا.",
          ko: "대단히 감사합니다."
        }
      },
      {
        id: "excuse_me",
        word: {
          en: "Excuse me",
          fa: "ببخشید",
          fr: "Excusez-moi",
          de: "Entschuldigung",
          it: "Mi scusi",
          es: "Perdón",
          ru: "Извините",
          zh: "打扰一下",
          ar: "عذرا",
          ko: "실례합니다"
        },
        sentence: {
          en: "Excuse me, where is the exit?",
          fa: "ببخشید، خروجی کجاست؟",
          fr: "Excusez-moi, où est la sortie ?",
          de: "Entschuldigung, wo ist der Ausgang?",
          it: "Mi scusi, dov'è l'uscita?",
          es: "Perdón, ¿dónde está la salida?",
          ru: "Извините, где выход?",
          zh: "打扰一下，出口在哪里？",
          ar: "عذرا، أين المخرج؟",
          ko: "실례합니다, 출구는 어디입니까?"
        }
      },
      {
        id: "sorry",
        word: {
          en: "Sorry",
          fa: "متاسفم",
          fr: "Désolé",
          de: "Es tut mir leid",
          it: "Mi dispiace",
          es: "Lo siento",
          ru: "Простите",
          zh: "对不起",
          ar: "آسف",
          ko: "미안합니다"
        },
        sentence: {
          en: "I am sorry for the mistake.",
          fa: "برای اشتباه متاسفم.",
          fr: "Je suis désolé pour l'erreur.",
          de: "Es tut mir leid wegen des Fehlers.",
          it: "Mi dispiace per l'errore.",
          es: "Lo siento por el error.",
          ru: "Простите за ошибку.",
          zh: "对不起，我错了。",
          ar: "أنا آسف على الخطأ.",
          ko: "실수에 대해 미안합니다."
        }
      },
      {
        id: "family",
        word: {
          en: "Family",
          fa: "خانواده",
          fr: "Famille",
          de: "Familie",
          it: "Famiglia",
          es: "Familia",
          ru: "Семья",
          zh: "家庭",
          ar: "عائلة",
          ko: "가족"
        },
        sentence: {
          en: "I love my family.",
          fa: "من خانواده‌ام را دوست دارم.",
          fr: "J'aime ma famille.",
          de: "Ich liebe meine Familie.",
          it: "Amo la mia famiglia.",
          es: "Amo a mi familia.",
          ru: "Я люблю свою семью.",
          zh: "我爱我的家人。",
          ar: "أحب عائلتي.",
          ko: "나는 내 가족을 사랑합니다."
        }
      },
      {
        id: "father",
        word: {
          en: "Father",
          fa: "پدر",
          fr: "Père",
          de: "Vater",
          it: "Padre",
          es: "Padre",
          ru: "Отец",
          zh: "父亲",
          ar: "أب",
          ko: "아버지"
        },
        sentence: {
          en: "My father is working.",
          fa: "پدر  من کار می‌کند.",
          fr: "Mon père travaille.",
          de: "Mein Vater arbeitet.",
          it: "Mio padre lavora.",
          es: "Mi padre trabaja.",
          ru: "Мой отецу работает.",
          zh: "我的父亲在工作。",
          ar: "أبي يعمل.",
          ko: "아버지는 일하고 계십니다."
        }
      },
      {
        id: "mother",
        word: {
          en: "Mother",
          fa: "مادر",
          fr: "Mère",
          de: "Mutter",
          it: "Madre",
          es: "Madre",
          ru: "Мать",
          zh: "母亲",
          ar: "أم",
          ko: "어머니"
        },
        sentence: {
          en: "My mother is cooking.",
          fa: "مادر من آشپزی می‌کند.",
          fr: "Ma mère cuisine.",
          de: "Meine Mutter kocht.",
          it: "Mia madre cucina.",
          es: "Mi madre cocina.",
          ru: "Моя мать готовит.",
          zh: "我的母亲在做饭。",
          ar: "أمي تطبخ.",
          ko: "어머니는 요리하고 계십니다."
        }
      },
      {
        id: "brother",
        word: {
          en: "Brother",
          fa: "برادر",
          fr: "Frère",
          de: "Bruder",
          it: "Fratello",
          es: "Hermano",
          ru: "Брат",
          zh: "兄弟",
          ar: "أخ",
          ko: "형제"
        },
        sentence: {
          en: "I have one brother.",
          fa: "من یک برادر دارم.",
          fr: "J'ai un frère.",
          de: "Ich habe einen Bruder.",
          it: "Ho un fratello.",
          es: "Tengo un hermano.",
          ru: "У меня есть один брат.",
          zh: "我有一个兄弟。",
          ar: "لي أخ واحد.",
          ko: "나는 형제가 한 명 있습니다."
        }
      },
      {
        id: "sister",
        word: {
          en: "Sister",
          fa: "خواهر",
          fr: "Sœur",
          de: "Schwester",
          it: "Sorella",
          es: "Hermana",
          ru: "Сестра",
          zh: "姐妹",
          ar: "أخت",
          ko: "자매"
        },
        sentence: {
          en: "Is she your sister?",
          fa: "آیا او خواهر شماست؟",
          fr: "Est-ce ta sœur ?",
          de: "Ist sie deine Schwester?",
          it: "È tua sorella?",
          es: "¿Es ella tu hermana?",
          ru: "Это твоя сестра?",
          zh: "她是你的姐妹吗？",
          ar: "هل هي أختك؟",
          ko: "그녀는 당신의 자매입니까?"
        }
      },
      {
        id: "go",
        word: {
          en: "Go",
          fa: "رفتن",
          fr: "Aller",
          de: "Gehen",
          it: "Andare",
          es: "Ir",
          ru: "Идти",
          zh: "去",
          ar: "ذهب",
          ko: "가다"
        },
        sentence: {
          en: "I go to school.",
          fa: "من به مدرسه می‌روم.",
          fr: "Je vais à l'école.",
          de: "Ich gehe zur Schule.",
          it: "Vado a scuola.",
          es: "Voy a la escuela.",
          ru: "Я иду в школу.",
          zh: "我去学校。",
          ar: "أذهب إلى المدرسة.",
          ko: "나는 학교에 갑니다."
        }
      },
      {
        id: "come",
        word: {
          en: "Come",
          fa: "آمدن",
          fr: "Venir",
          de: "Kommen",
          it: "Venire",
          es: "Venir",
          ru: "Приходить",
          zh: "来",
          ar: "أتى",
          ko: "오다"
        },
        sentence: {
          en: "Come here, please.",
          fa: "لطفا بیا اینجا.",
          fr: "Viens ici, s'il te plaît.",
          de: "Komm bitte her.",
          it: "Vieni qui, per favore.",
          es: "Ven aquí, por favor.",
          ru: "Иди сюда, пожалуйста.",
          zh: "请过来。",
          ar: "تعال هنا من فضلك.",
          ko: "여기로 오세요."
        }
      },
      {
        id: "eat",
        word: {
          en: "Eat",
          fa: "خوردن",
          fr: "Manger",
          de: "Essen",
          it: "Mangiare",
          es: "Comer",
          ru: "Есть",
          zh: "吃",
          ar: "أكل",
          ko: "먹다"
        },
        sentence: {
          en: "I eat an apple.",
          fa: "من یک سیب می‌خورم.",
          fr: "Je mange une pomme.",
          de: "Ich esse einen Apfel.",
          it: "Mangio una mela.",
          es: "Como una manzana.",
          ru: "Я ем яблоко.",
          zh: "我吃苹果。",
          ar: "أكل تفاحة.",
          ko: "나는 사과를 먹습니다."
        }
      },
      {
        id: "drink",
        word: {
          en: "Drink",
          fa: "نوشیدن",
          fr: "Boire",
          de: "Trinken",
          it: "Bere",
          es: "Beber",
          ru: "Пить",
          zh: "喝",
          ar: "شرب",
          ko: "마시다"
        },
        sentence: {
          en: "I drink water.",
          fa: "من آب می‌نوشم.",
          fr: "Je bois de l'eau.",
          de: "Ich trinke Wasser.",
          it: "Bevo acqua.",
          es: "Bebo agua.",
          ru: "Я пью воду.",
          zh: "我喝水。",
          ar: "أشرب ماء.",
          ko: "나는 물을 마십니다."
        }
      },
      {
        id: "sleep",
        word: {
          en: "Sleep",
          fa: "خوابیدن",
          fr: "Dormir",
          de: "Schlafen",
          it: "Dormire",
          es: "Dormir",
          ru: "Спать",
          zh: "睡",
          ar: "نام",
          ko: "자다"
        },
        sentence: {
          en: "I sleep at night.",
          fa: "من شب‌ها می‌خوابم.",
          fr: "Je dors la nuit.",
          de: "Ich schlafe nachts.",
          it: "Dormo di notte.",
          es: "Duermo por la noche.",
          ru: "Я сплю ночью.",
          zh: "我晚上睡觉。",
          ar: "أنام في الليل.",
          ko: "나는 밤에 잡니다."
        }
      },
      {
        id: "food",
        word: {
          en: "Food",
          fa: "غذا",
          fr: "Nourriture",
          de: "Essen",
          it: "Cibo",
          es: "Comida",
          ru: "Еда",
          zh: "食物",
          ar: "طعام",
          ko: "음식"
        },
        sentence: {
          en: "The food is delicious.",
          fa: "غذا خوشمزه است.",
          fr: "La nourriture est délicieuse.",
          de: "Das Essen ist lecker.",
          it: "Il cibo è delizioso.",
          es: "La comida es deliciosa.",
          ru: "Еда вкусная.",
          zh: "这食物很好吃。",
          ar: "الطعام لذيذ.",
          ko: "음식이 맛있습니다."
        }
      },
      {
        id: "water",
        word: {
          en: "Water",
          fa: "آب",
          fr: "Eau",
          de: "Wasser",
          it: "Acqua",
          es: "Agua",
          ru: "Вода",
          zh: "水",
          ar: "ماء",
          ko: "물"
        },
        sentence: {
          en: "Can I have some water?",
          fa: "می‌توانم کمی آب داشته باشم؟",
          fr: "Puis-je avoir de l'eau ?",
          de: "Kann ich etwas Wasser haben?",
          it: "Posso avere dell'acqua?",
          es: "¿Puedo tomar agua?",
          ru: "Можно мне воды?",
          zh: "能给我点水吗？",
          ar: "هل يمكنني الحصول على بعض الماء؟",
          ko: "물 좀 주시겠어요?"
        }
      },
      {
        id: "milk",
        word: {
          en: "Milk",
          fa: "شیر",
          fr: "Lait",
          de: "Milch",
          it: "Latte",
          es: "Leche",
          ru: "Молоко",
          zh: "牛奶",
          ar: "حليب",
          ko: "우유"
        },
        sentence: {
          en: "I like milk.",
          fa: "من شیر دوست دارم.",
          fr: "J'aime le lait.",
          de: "Ich mag Milch.",
          it: "Mi piace il latte.",
          es: "Me gusta la leche.",
          ru: "Я люблю молоко.",
          zh: "我喜欢牛奶。",
          ar: "أحب الحليب.",
          ko: "나는 우유를 좋아합니다."
        }
      },
      {
        id: "bread",
        word: {
          en: "Bread",
          fa: "نان",
          fr: "Pain",
          de: "Brot",
          it: "Pane",
          es: "Pan",
          ru: "Хлеб",
          zh: "面包",
          ar: "خبز",
          ko: "빵"
        },
        sentence: {
          en: "We buy fresh bread.",
          fa: "ما نان تازه می‌خریم.",
          fr: "Nous achetons du pain frais.",
          de: "Wir kaufen frisches Brot.",
          it: "Compriamo pane fresco.",
          es: "Compramos pan fresco.",
          ru: "Мы покупаем свежий хлеб.",
          zh: "我们买新鲜面包。",
          ar: "نشتري خبزا طازجا.",
          ko: "우리는 신선한 빵을 삽니다."
        }
      },
      {
        id: "apple",
        word: {
          en: "Apple",
          fa: "سیب",
          fr: "Pomme",
          de: "Apfel",
          it: "Mela",
          es: "Manzana",
          ru: "Яблоко",
          zh: "苹果",
          ar: "تفاحة",
          ko: "사과"
        },
        sentence: {
          en: "An apple a day.",
          fa: "یک سیب در روز.",
          fr: "Une pomme par jour.",
          de: "Ein Apfel am Tag.",
          it: "Una mela al giorno.",
          es: "Una manzana al día.",
          ru: "Яблоко в день.",
          zh: "一天一苹果。",
          ar: "تفاحة في اليوم.",
          ko: "하루에 사과 한 개."
        }
      },
      {
        id: "good",
        word: {
          en: "Good",
          fa: "خوب",
          fr: "Bon",
          de: "Gut",
          it: "Buono",
          es: "Bueno",
          ru: "Хороший",
          zh: "好",
          ar: "جيد",
          ko: "좋은"
        },
        sentence: {
          en: "He is a good man.",
          fa: "او مرد خوبی است.",
          fr: "C'est un homme bon.",
          de: "Er ist ein guter Mann.",
          it: "Lui è un brav'uomo.",
          es: "Él es un buen hombre.",
          ru: "Он хороший человек.",
          zh: "他是个好人。",
          ar: "هو رجل جيد.",
          ko: "그는 좋은 사람입니다."
        }
      },
      {
        id: "bad",
        word: {
          en: "Bad",
          fa: "بد",
          fr: "Mauvais",
          de: "Schlecht",
          it: "Cattivo",
          es: "Malo",
          ru: "Плохой",
          zh: "坏",
          ar: "سيء",
          ko: "나쁜"
        },
        sentence: {
          en: "Smoking is bad.",
          fa: "سیگار کشیدن بد است.",
          fr: "Fumer est mauvais.",
          de: "Rauchen ist schlecht.",
          it: "Fumare fa male.",
          es: "Fumar es malo.",
          ru: "Курить вредно.",
          zh: "吸烟有害。",
          ar: "التدخين سيء.",
          ko: "흡연은 나쁩니다."
        }
      },
      {
        id: "big",
        word: {
          en: "Big",
          fa: "بزرگ",
          fr: "Grand",
          de: "Groß",
          it: "Grande",
          es: "Grande",
          ru: "Большой",
          zh: "大",
          ar: "كبير",
          ko: "큰"
        },
        sentence: {
          en: "The house is big.",
          fa: "خانه بزرگ است.",
          fr: "La maison est grande.",
          de: "Das Haus ist groß.",
          it: "La casa è grande.",
          es: "La casa es grande.",
          ru: "Дом большой.",
          zh: "房子很大。",
          ar: "المنزل كبير.",
          ko: "집이 큽니다."
        }
      },
      {
        id: "small",
        word: {
          en: "Small",
          fa: "کوچک",
          fr: "Petit",
          de: "Klein",
          it: "Piccolo",
          es: "Pequeño",
          ru: "Маленький",
          zh: "小",
          ar: "صغير",
          ko: "작은"
        },
        sentence: {
          en: "The car is small.",
          fa: "ماشین کوچک است.",
          fr: "La voiture est petite.",
          de: "Das Auto ist klein.",
          it: "L'auto è piccola.",
          es: "El coche es pequeño.",
          ru: "Машина маленькая.",
          zh: "车很小。",
          ar: "السيارة صغيرة.",
          ko: "차는 작습니다."
        }
      },
      {
        id: "hot",
        word: {
          en: "Hot",
          fa: "داغ",
          fr: "Chaud",
          de: "Heiß",
          it: "Caldo",
          es: "Caliente",
          ru: "Горячий",
          zh: "热",
          ar: "ساخن",
          ko: "뜨거운"
        },
        sentence: {
          en: "The tea is hot.",
          fa: "چای داغ است.",
          fr: "Le thé est chaud.",
          de: "Der Tee ist heiß.",
          it: "Il tè è caldo.",
          es: "El té está caliente.",
          ru: "Чай горячий.",
          zh: "茶很热。",
          ar: "الشاي ساخن.",
          ko: "차는 뜨겁습니다."
        }
      },
      {
        id: "cold",
        word: {
          en: "Cold",
          fa: "سرد",
          fr: "Froid",
          de: "Kalt",
          it: "Freddo",
          es: "Frío",
          ru: "Холодный",
          zh: "冷",
          ar: "بارد",
          ko: "추운"
        },
        sentence: {
          en: "Today is cold.",
          fa: "امروز سرد است.",
          fr: "Aujourd'hui, il fait froid.",
          de: "Heute ist es kalt.",
          it: "Oggi fa freddo.",
          es: "Hoy hace frío.",
          ru: "Сегодня холодно.",
          zh: "今天很冷。",
          ar: "اليوم بارد.",
          ko: "오늘은 춥습니다."
        }
      },
      {
        id: "red",
        word: {
          en: "Red",
          fa: "قرمز",
          fr: "Rouge",
          de: "Rot",
          it: "Rosso",
          es: "Rojo",
          ru: "Красный",
          zh: "红",
          ar: "أحمر",
          ko: "빨간"
        },
        sentence: {
          en: "I see a red flower.",
          fa: "من یک گل قرمز می‌بینم.",
          fr: "Je vois une fleur rouge.",
          de: "Ich sehe eine rote Blume.",
          it: "Vedo un fiore rosso.",
          es: "Veo una flor roja.",
          ru: "Я вижу красный цветок.",
          zh: "我看见一朵红花。",
          ar: "أرى زهرة حمراء.",
          ko: "나는 빨간 꽃을 봅니다."
        }
      },
      {
        id: "blue",
        word: {
          en: "Blue",
          fa: "آبی",
          fr: "Bleu",
          de: "Blau",
          it: "Blu",
          es: "Azul",
          ru: "Синий",
          zh: "蓝",
          ar: "أزرق",
          ko: "파란"
        },
        sentence: {
          en: "The sky is blue.",
          fa: "آسمان آبی است.",
          fr: "Le ciel est bleu.",
          de: "Der Himmel ist blau.",
          it: "Il cielo è blu.",
          es: "El cielo es azul.",
          ru: "Небо синее.",
          zh: "天空是蓝色的。",
          ar: "السماء زرقاء.",
          ko: "하늘은 파랗습니다."
        }
      },
      {
        id: "green",
        word: {
          en: "Green",
          fa: "سبز",
          fr: "Vert",
          de: "Grün",
          it: "Verde",
          es: "Verde",
          ru: "Зеленый",
          zh: "绿",
          ar: "أخضر",
          ko: "녹색"
        },
        sentence: {
          en: "The grass is green.",
          fa: "چمن سبز است.",
          fr: "L'herbe est verte.",
          de: "Das Gras ist grün.",
          it: "L'erba è verde.",
          es: "La hierba es verde.",
          ru: "Трава зеленая.",
          zh: "草是绿色的。",
          ar: "العشب أخضر.",
          ko: "잔디는 녹색입니다."
        }
      },
      {
        id: "house",
        word: {
          en: "House",
          fa: "خانه",
          fr: "Maison",
          de: "Haus",
          it: "Casa",
          es: "Casa",
          ru: "Дом",
          zh: "房子",
          ar: "منزل",
          ko: "집"
        },
        sentence: {
          en: "This is my house.",
          fa: "این خانه من است.",
          fr: "C'est ma maison.",
          de: "Das ist mein Haus.",
          it: "Questa è la mia casa.",
          es: "Esta es mi casa.",
          ru: "Это мой дом.",
          zh: "这是我的房子。",
          ar: "هذا منزلي.",
          ko: "이것은 내 집입니다."
        }
      },
      {
        id: "door",
        word: {
          en: "Door",
          fa: "در",
          fr: "Porte",
          de: "Tür",
          it: "Porta",
          es: "Puerta",
          ru: "Дверь",
          zh: "门",
          ar: "باب",
          ko: "문"
        },
        sentence: {
          en: "Open the door.",
          fa: "در را باز کن.",
          fr: "Oouvrez la porte.",
          de: "Öffne die Tür.",
          it: "Apri la porta.",
          es: "Abre la puerta.",
          ru: "Открой дверь.",
          zh: "开门。",
          ar: "افتح الباب.",
          ko: "문을 여세요."
        }
      },
      {
        id: "window",
        word: {
          en: "Window",
          fa: "پنجره",
          fr: "Fenêtre",
          de: "Fenster",
          it: "Finestra",
          es: "Ventana",
          ru: "Окно",
          zh: "窗户",
          ar: "نافذة",
          ko: "창문"
        },
        sentence: {
          en: "Close the window.",
          fa: "پنجره را ببند.",
          fr: "Fermez la fenêtre.",
          de: "Schließe das Fenster.",
          it: "Chiudi la finestra.",
          es: "Cierra la ventana.",
          ru: "Закрой окно.",
          zh: "关窗户。",
          ar: "أغلق النافذة.",
          ko: "창문을 닫으세요."
        }
      },
      {
        id: "car",
        word: {
          en: "Car",
          fa: "ماشین",
          fr: "Voiture",
          de: "Auto",
          it: "Auto",
          es: "Coche",
          ru: "Машина",
          zh: "车",
          ar: "سيارة",
          ko: "자동차"
        },
        sentence: {
          en: "I drive a car.",
          fa: "من رانندگی می‌کنم.",
          fr: "Je conduis une voiture.",
          de: "Ich fahre ein Auto.",
          it: "Guido un'auto.",
          es: "Conduzco un coche.",
          ru: "Я вожу машину.",
          zh: "我开车。",
          ar: "أنا أقود سيارة.",
          ko: "나는 운전을 합니다."
        }
      },
      {
        id: "bus",
        word: {
          en: "Bus",
          fa: "اتوبوس",
          fr: "Bus",
          de: "Bus",
          it: "Autobus",
          es: "Autobús",
          ru: "Автобус",
          zh: "公共汽车",
          ar: "حافلة",
          ko: "버스"
        },
        sentence: {
          en: "We take the bus.",
          fa: "ما با اتوبوس می‌رویم.",
          fr: "Nous prenons le bus.",
          de: "Wir nehmen den Bus.",
          it: "Prendiamo l'autobus.",
          es: "Tomamos el autobús.",
          ru: "Мы едем на автобусе.",
          zh: "我们坐公共汽车。",
          ar: "نستقل الحافلة.",
          ko: "우리는 버스를 탑니다."
        }
      }
    ]
  },
  {
    level: "A2",
    items: [
      {
        id: "money",
        word: {
          en: "Money",
          fa: "پول",
          fr: "Argent",
          de: "Geld",
          it: "Denaro",
          es: "Dinero",
          ru: "Деньги",
          zh: "钱",
          ar: "مال",
          ko: "돈"
        },
        sentence: {
          en: "I need some money.",
          fa: "من به مقداری پول نیاز دارم.",
          fr: "J'ai besoin d'argent.",
          de: "Ich brauche etwas Geld.",
          it: "Ho bisogno di denaro.",
          es: "Necesito dinero.",
          ru: "Мне нужны деньги.",
          zh: "我需要一些钱。",
          ar: "أحتاج لبعض المال.",
          ko: "돈이 좀 필요합니다."
        }
      },
      {
        id: "price",
        word: {
          en: "Price",
          fa: "قیمت",
          fr: "Prix",
          de: "Preis",
          it: "Prezzo",
          es: "Precio",
          ru: "Цена",
          zh: "价格",
          ar: "سعر",
          ko: "가격"
        },
        sentence: {
          en: "What is the price?",
          fa: "قیمت چقدر است؟",
          fr: "Quel est le prix ?",
          de: "Was ist der Preis?",
          it: "Qual è il prezzo?",
          es: "¿Cuál es el precio?",
          ru: "Какова цена?",
          zh: "价格是多少？",
          ar: "ما هو السعر؟",
          ko: "가격은 얼마입니까?"
        }
      },
      {
        id: "office",
        word: {
          en: "Office",
          fa: "دفتر کار",
          fr: "Bureau",
          de: "Büro",
          it: "Ufficio",
          es: "Oficina",
          ru: "Офис",
          zh: "办公室",
          ar: "مكتب",
          ko: "사무실"
        },
        sentence: {
          en: "I am at the office.",
          fa: "من در دفتر کار هستم.",
          fr: "Je suis au bureau.",
          de: "Ich bin im Büro.",
          it: "Sono in ufficio.",
          es: "Estoy en la oficina.",
          ru: "Я в офисе.",
          zh: "我在办公室。",
          ar: "أنا في المكتب.",
          ko: "나는 사무실에 있습니다."
        }
      },
      {
        id: "manager",
        word: {
          en: "Manager",
          fa: "مدیر",
          fr: "Manager",
          de: "Manager",
          it: "Manager",
          es: "Gerente",
          ru: "Менеджер",
          zh: "经理",
          ar: "مدير",
          ko: "매니저"
        },
        sentence: {
          en: "Talk to the manager.",
          fa: "با مدیر صحبت کن.",
          fr: "Parle au manager.",
          de: "Sprich mit dem Manager.",
          it: "Parla con il manager.",
          es: "Habla con el gerente.",
          ru: "Поговори с менеджером.",
          zh: "跟经理谈谈。",
          ar: "تحدث إلى المدير.",
          ko: "매니저와 이야기하세요."
        }
      },
      {
        id: "airport",
        word: {
          en: "Airport",
          fa: "فرودگاه",
          fr: "Aéroport",
          de: "Flughafen",
          it: "Aeroporto",
          es: "Aeropuerto",
          ru: "Аэропорт",
          zh: "机场",
          ar: "مطار",
          ko: "공항"
        },
        sentence: {
          en: "We are at the airport.",
          fa: "ما در فرودگاه هستیم.",
          fr: "Nous sommes à l'aéroport.",
          de: "Wir sind am Flughafen.",
          it: "Siamo all'aeroporto.",
          es: "Estamos en el aeropuerto.",
          ru: "Мы в аэропорту.",
          zh: "我们在机场。",
          ar: "نحن في المطار.",
          ko: "우리는 공항에 있습니다."
        }
      },
      {
        id: "ticket",
        word: {
          en: "Ticket",
          fa: "بلیط",
          fr: "Billet",
          de: "Ticket",
          it: "Biglietto",
          es: "Billete",
          ru: "Билет",
          zh: "票",
          ar: "تذكرة",
          ko: "티켓"
        },
        sentence: {
          en: "Where is my ticket?",
          fa: "بلیط من کجاست؟",
          fr: "Où est mon billet ?",
          de: "Wo ist mein Ticket?",
          it: "Dov'è il mio biglietto?",
          es: "¿Dónde está mi billete?",
          ru: "Где мой билет?",
          zh: "我的票在哪里？",
          ar: "أين تذكرتي؟",
          ko: "내 티켓은 어디에 있습니까?"
        }
      },
      {
        id: "actions_words",
        word: {
          en: "Speak",
          fa: "صحبت کردن",
          fr: "Parler",
          de: "Sprechen",
          it: "Parlare",
          es: "Hablar",
          ru: "Говорить",
          zh: "说",
          ar: "تحدث",
          ko: "말하다"
        },
        sentence: {
          en: "Actions speak louder than words.",
          fa: "دو صد گفته چون نیم کردار نیست.",
          fr: "Les actes valent plus que les mots.",
          de: "Taten sagen mehr als Worte.",
          it: "I fatti contano più delle parole.",
          es: "Las acciones valen más que las palabras.",
          ru: "Поступки говорят громче слов.",
          zh: "事实胜于雄辩。",
          ar: "الأفعال أبلغ من الأقوال.",
          ko: "말보다 행동이 중요하다."
        }
      },
      {
        id: "happy",
        word: {
          en: "Happy",
          fa: "خوشحال",
          fr: "Heureux",
          de: "Glücklich",
          it: "Felice",
          es: "Feliz",
          ru: "Счастливый",
          zh: "快乐",
          ar: "سعيد",
          ko: "행복한"
        },
        sentence: {
          en: "I am very happy.",
          fa: "من خیلی خوشحال هستم.",
          fr: "Je suis très heureux.",
          de: "Ich bin sehr glücklich.",
          it: "Sono molto felice.",
          es: "Estoy muy feliz.",
          ru: "Я очень счастлив.",
          zh: "我很快乐。",
          ar: "أنا سعيد جدا.",
          ko: "나는 매우 행복합니다."
        }
      },
      {
        id: "sad",
        word: {
          en: "Sad",
          fa: "ناراحت",
          fr: "Triste",
          de: "Traurig",
          it: "Triste",
          es: "Triste",
          ru: "Грустный",
          zh: "悲伤",
          ar: "حزين",
          ko: "슬픈"
        },
        sentence: {
          en: "Why are you sad?",
          fa: "چرا ناراحت هستی؟",
          fr: "Pourquoi es-tu triste ?",
          de: "Warum bist du traurig?",
          it: "Perché sei triste?",
          es: "¿Por qué estás triste?",
          ru: "Почему ты грустный?",
          zh: "你为什么悲伤？",
          ar: "لماذا أنت حزين؟",
          ko: "왜 슬퍼요?"
        }
      },
      {
        id: "angry",
        word: {
          en: "Angry",
          fa: "عصبانی",
          fr: "En colère",
          de: "Wütend",
          it: "Arrabbiato",
          es: "Enojado",
          ru: "Злой",
          zh: "生气",
          ar: "غاضب",
          ko: "화난"
        },
        sentence: {
          en: "He is angry with me.",
          fa: "او از دست من عصبانی است.",
          fr: "Il est en colère contre moi.",
          de: "Er ist wütend auf mich.",
          it: "È arrabbiato con me.",
          es: "Está enojado conmigo.",
          ru: "Он злится на меня.",
          zh: "他生我的气。",
          ar: "هو غاضب مني.",
          ko: "그는 나에게 화가 났습니다."
        }
      },
      {
        id: "tired",
        word: {
          en: "Tired",
          fa: "خسته",
          fr: "Fatigué",
          de: "Müde",
          it: "Stanco",
          es: "Cansado",
          ru: "Усталый",
          zh: "累",
          ar: "متعب",
          ko: "피곤한"
        },
        sentence: {
          en: "I am too tired.",
          fa: "من بیش از حد خسته هستم.",
          fr: "Je suis trop fatigué.",
          de: "Ich bin zu müde.",
          it: "Sono troppo stanco.",
          es: "Estoy demasiado cansado.",
          ru: "Я слишком устал.",
          zh: "我太累了。",
          ar: "أنا متعب جدا.",
          ko: "나는 너무 피곤합니다."
        }
      },
      {
        id: "wake_up",
        word: {
          en: "Wake up",
          fa: "بیدار شدن",
          fr: "Se réveiller",
          de: "Aufwachen",
          it: "Svegliarsi",
          es: "Despertarse",
          ru: "Просыпаться",
          zh: "醒来",
          ar: "استيقظ",
          ko: "일어나다"
        },
        sentence: {
          en: "I wake up at 7.",
          fa: "من ساعت ۷ بیدار می‌شوم.",
          fr: "Je me réveille à 7h.",
          de: "Ich wache um 7 Uhr auf.",
          it: "Mi sveglio alle 7.",
          es: "Me despierto a las 7.",
          ru: "Я просыпаюсь в 7.",
          zh: "我7点醒来。",
          ar: "أستيقظ في الساعة 7.",
          ko: "나는 7시에 일어납니다."
        }
      },
      {
        id: "breakfast",
        word: {
          en: "Breakfast",
          fa: "صبحانه",
          fr: "Petit déjeuner",
          de: "Frühstück",
          it: "Colazione",
          es: "Desayuno",
          ru: "Завтрак",
          zh: "早餐",
          ar: "إفطار",
          ko: "아침 식사"
        },
        sentence: {
          en: "I eat breakfast.",
          fa: "من صبحانه می‌خورم.",
          fr: "Je prends le petit déjeuner.",
          de: "Ich esse Frühstück.",
          it: "Faccio colazione.",
          es: "Desayuno.",
          ru: "Я завтракаю.",
          zh: "我吃早餐。",
          ar: "أتناول الإفطار.",
          ko: "나는 아침을 먹습니다."
        }
      },
      {
        id: "shower",
        word: {
          en: "Shower",
          fa: "دوش",
          fr: "Douche",
          de: "Dusche",
          it: "Doccia",
          es: "Ducha",
          ru: "Душ",
          zh: "淋浴",
          ar: "دش",
          ko: "샤워"
        },
        sentence: {
          en: "I take a shower.",
          fa: "من دوش می‌گیرم.",
          fr: "Je prends une douche.",
          de: "Ich nehme eine Dusche.",
          it: "Faccio una doccia.",
          es: "Me ducho.",
          ru: "Я принимаю душ.",
          zh: "我洗澡。",
          ar: "أستحم.",
          ko: "나는 샤워를 합니다."
        }
      },
      {
        id: "cheap",
        word: {
          en: "Cheap",
          fa: "ارزان",
          fr: "Bon marché",
          de: "Billig",
          it: "Economico",
          es: "Barato",
          ru: "Дешевый",
          zh: "便宜",
          ar: "رخيص",
          ko: "싼"
        },
        sentence: {
          en: "This shirt is cheap.",
          fa: "این پیراهن ارزان است.",
          fr: "Cette chemise est bon marché.",
          de: "Dieses Hemd ist billig.",
          it: "Questa camicia è economica.",
          es: "Esta camisa es barata.",
          ru: "Эта рубашка дешевая.",
          zh: "这件衬衫很便宜。",
          ar: "هذا القميص رخيص.",
          ko: "이 셔츠는 쌉니다."
        }
      },
      {
        id: "expensive",
        word: {
          en: "Expensive",
          fa: "گران",
          fr: "Cher",
          de: "Teuer",
          it: "Costoso",
          es: "Caro",
          ru: "Дорогой",
          zh: "贵",
          ar: "غالي",
          ko: "비싼"
        },
        sentence: {
          en: "Cars are expensive.",
          fa: "ماشین‌ها گران هستند.",
          fr: "Les voitures sont chères.",
          de: "Autos sind teuer.",
          it: "Le auto sono costose.",
          es: "Los coches son caros.",
          ru: "Машины дорогие.",
          zh: "汽车很贵。",
          ar: "السيارات غالية.",
          ko: "자동차는 비쌉니다."
        }
      },
      {
        id: "buy_a2",
        word: {
          en: "Buy",
          fa: "خریدن",
          fr: "Acheter",
          de: "Kaufen",
          it: "Comprare",
          es: "Comprar",
          ru: "Покупать",
          zh: "买",
          ar: "شترى",
          ko: "사다"
        },
        sentence: {
          en: "I want to buy food.",
          fa: "من می‌خواهم غذا بخرم.",
          fr: "Je veux acheter de la nourriture.",
          de: "Ich möchte Essen kaufen.",
          it: "Voglio comprare cibo.",
          es: "Quiero comprar comida.",
          ru: "Я хочу купить еды.",
          zh: "我想买食物。",
          ar: "أريد شراء طعام.",
          ko: "음식을 사고 싶습니다."
        }
      },
      {
        id: "sell",
        word: {
          en: "Sell",
          fa: "فروختن",
          fr: "Vendre",
          de: "Verkaufen",
          it: "Vendere",
          es: "Vender",
          ru: "Продавать",
          zh: "卖",
          ar: "باع",
          ko: "팔다"
        },
        sentence: {
          en: "Do you sell books?",
          fa: "آیا شما کتاب می‌فروشید؟",
          fr: "Vendez-vous des livres ?",
          de: "Verkaufen Sie Bücher?",
          it: "Vendi libri?",
          es: "¿Vendes libros?",
          ru: "Вы продаете книги?",
          zh: "你卖书吗？",
          ar: "هل تبيع كتباً؟",
          ko: "책을 팝니까?"
        }
      },
      {
        id: "wallet",
        word: {
          en: "Wallet",
          fa: "کیف پول",
          fr: "Portefeuille",
          de: "Geldbörse",
          it: "Portafoglio",
          es: "Cartera",
          ru: "Кошелек",
          zh: "钱包",
          ar: "محفظة",
          ko: "지갑"
        },
        sentence: {
          en: "I lost my wallet.",
          fa: "من کیف پولم را گم کردم.",
          fr: "J'ai perdu mon portefeuille.",
          de: "Ich habe meine Geldbörse verloren.",
          it: "Ho perso il mio portafoglio.",
          es: "Perdí mi cartera.",
          ru: "Я потерял свой кошелек.",
          zh: "我丢了钱包。",
          ar: "فقدت محفظتي.",
          ko: "지갑을 잃어버렸습니다."
        }
      },
      {
        id: "sick",
        word: {
          en: "Sick",
          fa: "بیمار",
          fr: "Malade",
          de: "Krank",
          it: "Malato",
          es: "Enfermo",
          ru: "Больной",
          zh: "生病",
          ar: "مريض",
          ko: "아픈"
        },
        sentence: {
          en: "I feel sick today.",
          fa: "امروز احساس بیماری می‌کنم.",
          fr: "Je me sens malade aujourd'hui.",
          de: "Ich fühle mich heute krank.",
          it: "Mi sento malato oggi.",
          es: "Me siento enfermo hoy.",
          ru: "Я чувствую себя больным сегодня.",
          zh: "我今天感觉不舒服。",
          ar: "أشعر بالمرض اليوم.",
          ko: "오늘 아픈 것 같습니다."
        }
      },
      {
        id: "doctor",
        word: {
          en: "Doctor",
          fa: "دکتر",
          fr: "Médecin",
          de: "Arzt",
          it: "Medico",
          es: "Médico",
          ru: "Врач",
          zh: "医生",
          ar: "طبيب",
          ko: "의사"
        },
        sentence: {
          en: "Call a doctor.",
          fa: "یک دکتر خبر کن.",
          fr: "Appelle un médecin.",
          de: "Ruf einen Arzt.",
          it: "Chiama un medico.",
          es: "Llama a un médico.",
          ru: "Вызови врача.",
          zh: "叫医生。",
          ar: "اتصل بالطبيب.",
          ko: "의사를 부르세요."
        }
      },
      {
        id: "medicine",
        word: {
          en: "Medicine",
          fa: "دارو",
          fr: "Médicament",
          de: "Medizin",
          it: "Medicina",
          es: "Medicina",
          ru: "Лекарство",
          zh: "药",
          ar: "دواء",
          ko: "약"
        },
        sentence: {
          en: "Take your medicine.",
          fa: "دارویت را بخور.",
          fr: "Prends ton médicament.",
          de: "Nimm deine Medizin.",
          it: "Prendi la tua medicina.",
          es: "Toma tu medicina.",
          ru: "Прими лекарство.",
          zh: "吃药。",
          ar: "تناول دواءك.",
          ko: "약을 드세요."
        }
      },
      {
        id: "pain",
        word: {
          en: "Pain",
          fa: "درد",
          fr: "Douleur",
          de: "Schmerz",
          it: "Dolore",
          es: "Dolor",
          ru: "Боль",
          zh: "疼痛",
          ar: "ألم",
          ko: "고통"
        },
        sentence: {
          en: "I have back pain.",
          fa: "من کمردرد دارم.",
          fr: "J'ai mal au dos.",
          de: "Ich habe Rückenschmerzen.",
          it: "Ho mal di schiena.",
          es: "Tengo dolor de espalda.",
          ru: "У меня болит спина.",
          zh: "我背痛。",
          ar: "لدي ألم في الظهر.",
          ko: "나는 허리 통증이 있습니다."
        }
      },
      {
        id: "weather",
        word: {
          en: "Weather",
          fa: "آب و هوا",
          fr: "Météo",
          de: "Wetter",
          it: "Tempo",
          es: "Tiempo",
          ru: "Погода",
          zh: "天气",
          ar: "طقس",
          ko: "날씨"
        },
        sentence: {
          en: "The weather is nice.",
          fa: "هوا خوب است.",
          fr: "La météo est belle.",
          de: "Das Wetter ist schön.",
          it: "Il tempo è bello.",
          es: "El tiempo es agradable.",
          ru: "Погода хорошая.",
          zh: "天气很好。",
          ar: "الطقس لطيف.",
          ko: "날씨가 좋습니다."
        }
      },
      {
        id: "storm",
        word: {
          en: "Storm",
          fa: "طوفان",
          fr: "Tempête",
          de: "Sturm",
          it: "Tempesta",
          es: "Tormenta",
          ru: "Шторм",
          zh: "暴风雨",
          ar: "عاصفة",
          ko: "폭풍"
        },
        sentence: {
          en: "A storm is coming.",
          fa: "طوفان در راه است.",
          fr: "Une tempête arrive.",
          de: "Ein Sturm kommt.",
          it: "Arriva una tempesta.",
          es: "Se acerca una tormenta.",
          ru: "Приближается шторм.",
          zh: "暴风雨来了。",
          ar: "عاصفة قادمة.",
          ko: "폭풍이 오고 있습니다."
        }
      },
      {
        id: "umbrella",
        word: {
          en: "Umbrella",
          fa: "چتر",
          fr: "Parapluie",
          de: "Regenschirm",
          it: "Ombrello",
          es: "Paraguas",
          ru: "Зонт",
          zh: "雨伞",
          ar: "مظلة",
          ko: "우산"
        },
        sentence: {
          en: "Don't forget your umbrella.",
          fa: "چترت را فراموش نکن.",
          fr: "N'oublie pas ton parapluie.",
          de: "Vergiss deinen Regenschirm nicht.",
          it: "Non dimenticare il tuo ombrello.",
          es: "No olvides tu paraguas.",
          ru: "Не забудь свой зонт.",
          zh: "别忘了带伞。",
          ar: "لا تنس مظلتك.",
          ko: "우산을 잊지 마세요."
        }
      },
      {
        id: "meeting",
        word: {
          en: "Meeting",
          fa: "جلسه",
          fr: "Réunion",
          de: "Treffen",
          it: "Riunione",
          es: "Reunión",
          ru: "Встреча",
          zh: "会议",
          ar: "اجتماع",
          ko: "회의"
        },
        sentence: {
          en: "The meeting starts at 9.",
          fa: "جلسه ساعت ۹ شروع می‌شود.",
          fr: "La réunion commence à 9h.",
          de: "Das Treffen beginnt um 9 Uhr.",
          it: "La riunione inizia alle 9.",
          es: "La reunión empieza a las 9.",
          ru: "Встреча начинается в 9.",
          zh: "会议9点开始。",
          ar: "الاجتماع يبدأ في الساعة 9.",
          ko: "회의는 9시에 시작합니다."
        }
      },
      {
        id: "job",
        word: {
          en: "Job",
          fa: "شغل",
          fr: "Emploi",
          de: "Job",
          it: "Lavoro",
          es: "Trabajo",
          ru: "Работа",
          zh: "工作",
          ar: "وظيفة",
          ko: "직업"
        },
        sentence: {
          en: "I love my job.",
          fa: "من شغلم را دوست دارم.",
          fr: "J'aime mon travail.",
          de: "Ich liebe meinen Job.",
          it: "Amo il mio lavoro.",
          es: "Amo mi trabajo.",
          ru: "Я люблю свою работу.",
          zh: "我爱我的工作。",
          ar: "أحب وظيفتي.",
          ko: "나는 내 직업을 사랑합니다."
        }
      },
      {
        id: "company",
        word: {
          en: "Company",
          fa: "شرکت",
          fr: "Entreprise",
          de: "Firma",
          it: "Azienda",
          es: "Empresa",
          ru: "Компания",
          zh: "公司",
          ar: "شركة",
          ko: "회사"
        },
        sentence: {
          en: "This is a big company.",
          fa: "این یک شرکت بزرگ است.",
          fr: "C'est une grande entreprise.",
          de: "Das ist eine große Firma.",
          it: "Questa è una grande azienda.",
          es: "Esta es una gran empresa.",
          ru: "Это большая компания.",
          zh: "这是一家大公司。",
          ar: "هذه شركة كبيرة.",
          ko: "이것은 큰 회사입니다."
        }
      },
      {
        id: "email",
        word: {
          en: "Email",
          fa: "ایمیل",
          fr: "Email",
          de: "E-Mail",
          it: "Email",
          es: "Correo",
          ru: "Электронная почта",
          zh: "电子邮件",
          ar: "بريد إلكتروني",
          ko: "이메일"
        },
        sentence: {
          en: "Check your email.",
          fa: "ایمیلت را چک کن.",
          fr: "Vérifie tes emails.",
          de: "Überprüfe deine E-Mails.",
          it: "Controlla la tua email.",
          es: "Revisa tu correo.",
          ru: "Проверь почту.",
          zh: "查收你的邮件。",
          ar: "تحقق من بريدك الإلكتروني.",
          ko: "이메일을 확인하세요."
        }
      },
      {
        id: "computer",
        word: {
          en: "Computer",
          fa: "کامپیوتر",
          fr: "Ordinateur",
          de: "Computer",
          it: "Computer",
          es: "Computadora",
          ru: "Компьютер",
          zh: "电脑",
          ar: "حاسوب",
          ko: "컴퓨터"
        },
        sentence: {
          en: "My computer is old.",
          fa: "کامپیوتر من قدیمی است.",
          fr: "Mon ordinateur est vieux.",
          de: "Mein Computer ist alt.",
          it: "Il mio computer è vecchio.",
          es: "Mi computadora es vieja.",
          ru: "Мой компьютер старый.",
          zh: "我的电脑很旧。",
          ar: "حاسوبي قديم.",
          ko: "내 컴퓨터는 오래되었습니다."
        }
      },
      {
        id: "colleague",
        word: {
          en: "Colleague",
          fa: "همکار",
          fr: "Collègue",
          de: "Kollege",
          it: "Collega",
          es: "Colega",
          ru: "Коллега",
          zh: "同事",
          ar: "زميل",
          ko: "동료"
        },
        sentence: {
          en: "She is my colleague.",
          fa: "او همکار من است.",
          fr: "C'est ma collègue.",
          de: "Sie ist meine Kollegin.",
          it: "Lei è mia collega.",
          es: "Ella es mi colega.",
          ru: "Она моя коллега.",
          zh: "她是我的同事。",
          ar: "هي زميلتي.",
          ko: "그녀는 내 동료입니다."
        }
      },
      {
        id: "project",
        word: {
          en: "Project",
          fa: "پروژه",
          fr: "Projet",
          de: "Projekt",
          it: "Progetto",
          es: "Proyecto",
          ru: "Проект",
          zh: "项目",
          ar: "مشروع",
          ko: "프로젝트"
        },
        sentence: {
          en: "We have a new project.",
          fa: "ما یک پروژه جدید داریم.",
          fr: "Nous avons un nouveau projet.",
          de: "Wir haben ein neues Projekt.",
          it: "Abbiamo un nuovo progetto.",
          es: "Tenemos un nuevo proyecto.",
          ru: "У нас новый проект.",
          zh: "我们有一个新项目。",
          ar: "لدينا مشروع جديد.",
          ko: "우리는 새 프로젝트가 있습니다."
        }
      },
      {
        id: "salary",
        word: {
          en: "Salary",
          fa: "حقوق",
          fr: "Salaire",
          de: "Gehalt",
          it: "Stipendio",
          es: "Salario",
          ru: "Зарплата",
          zh: "薪水",
          ar: "راتب",
          ko: "급여"
        },
        sentence: {
          en: "The salary is good.",
          fa: "حقوق خوب است.",
          fr: "Le salaire est bon.",
          de: "Das Gehalt ist gut.",
          it: "Lo stipendio è buono.",
          es: "El salario es bueno.",
          ru: "Зарплата хорошая.",
          zh: "薪水不错。",
          ar: "الراتب جيد.",
          ko: "급여가 좋습니다."
        }
      },
      {
        id: "busy",
        word: {
          en: "Busy",
          fa: "مشغول",
          fr: "Occupé",
          de: "Beschäftigt",
          it: "Occupato",
          es: "Ocupado",
          ru: "Занят",
          zh: "忙",
          ar: "مشغول",
          ko: "바쁜"
        },
        sentence: {
          en: "I am very busy.",
          fa: "من خیلی مشغول هستم.",
          fr: "Je suis très occupé.",
          de: "Ich bin sehr beschäftigt.",
          it: "Sono molto occupato.",
          es: "Estoy muy ocupado.",
          ru: "Я очень занят.",
          zh: "我很忙。",
          ar: "أنا مشغول جداً.",
          ko: "나는 매우 바쁩니다."
        }
      },
      {
        id: "passport",
        word: {
          en: "Passport",
          fa: "پاسپورت",
          fr: "Passeport",
          de: "Reisepass",
          it: "Passaporto",
          es: "Pasaporte",
          ru: "Паспорт",
          zh: "护照",
          ar: "جواز سفر",
          ko: "여권"
        },
        sentence: {
          en: "Show me your passport.",
          fa: "پاسپورتت را نشان بده.",
          fr: "Montrez-moi votre passeport.",
          de: "Zeigen Sie mir Ihren Reisepass.",
          it: "Mostrami il tuo passaporto.",
          es: "Muéstrame tu pasaporte.",
          ru: "Покажи мне свой паспорт.",
          zh: "给我看你的护照。",
          ar: "أرني جواز سفرك.",
          ko: "여권을 보여주세요."
        }
      },
      {
        id: "hotel",
        word: {
          en: "Hotel",
          fa: "هتل",
          fr: "Hôtel",
          de: "Hotel",
          it: "Hotel",
          es: "Hotel",
          ru: "Отель",
          zh: "酒店",
          ar: "فندق",
          ko: "호텔"
        },
        sentence: {
          en: "The hotel is nice.",
          fa: "هتل خوب است.",
          fr: "L'hôtel est agréable.",
          de: "Das Hotel ist schön.",
          it: "L'hotel è bello.",
          es: "El hotel es agradable.",
          ru: "Отель хороший.",
          zh: "这家酒店很好。",
          ar: "الفندق جميل.",
          ko: "호텔이 좋습니다."
        }
      },
      {
        id: "room",
        word: {
          en: "Room",
          fa: "اتاق",
          fr: "Chambre",
          de: "Zimmer",
          it: "Camera",
          es: "Habitación",
          ru: "Комната",
          zh: "房间",
          ar: "غرفة",
          ko: "방"
        },
        sentence: {
          en: "I booked a room.",
          fa: "من یک اتاق رزرو کردم.",
          fr: "J'ai réservé une chambre.",
          de: "Ich habe ein Zimmer gebucht.",
          it: "Ho prenotato una camera.",
          es: "Reservé una habitación.",
          ru: "Я забронировал номер.",
          zh: "我订了一个房间。",
          ar: "حجزت غرفة.",
          ko: "방을 예약했습니다."
        }
      },
      {
        id: "luggage",
        word: {
          en: "Luggage",
          fa: "چمدان",
          fr: "Bagages",
          de: "Gepäck",
          it: "Bagaglio",
          es: "Equipaje",
          ru: "Багаж",
          zh: "行李",
          ar: "أمتعة",
          ko: "수하물"
        },
        sentence: {
          en: "This is my luggage.",
          fa: "این چمدان من است.",
          fr: "C'est mon bagage.",
          de: "Das ist mein Gepäck.",
          it: "Questo è il mio bagaglio.",
          es: "Este es mi equipaje.",
          ru: "Это мой багаж.",
          zh: "这是我的行李。",
          ar: "هذه أمتعتي.",
          ko: "이것은 내 수하물입니다."
        }
      },
      {
        id: "train",
        word: {
          en: "Train",
          fa: "قطار",
          fr: "Train",
          de: "Zug",
          it: "Treno",
          es: "Tren",
          ru: "Поезд",
          zh: "火车",
          ar: "قطار",
          ko: "기차"
        },
        sentence: {
          en: "The train is late.",
          fa: "قطار تأخیر دارد.",
          fr: "Le train est en retard.",
          de: "Der Zug hat Verspätung.",
          it: "Il treno è in ritardo.",
          es: "El tren llega tarde.",
          ru: "Поезд опаздывает.",
          zh: "火车晚点了。",
          ar: "القطار متأخر.",
          ko: "기차가 늦었습니다."
        }
      },
      {
        id: "bus_stop",
        word: {
          en: "Bus stop",
          fa: "ایستگاه اتوبوس",
          fr: "Arrêt de bus",
          de: "Bushaltestelle",
          it: "Fermata dell'autobus",
          es: "Parada de autobús",
          ru: "Остановка",
          zh: "公交车站",
          ar: "موقف حافلات",
          ko: "버스 정류장"
        },
        sentence: {
          en: "Wait at the bus stop.",
          fa: "در ایستگاه اتوبوس منتظر بمان.",
          fr: "Attends à l'arrêt de bus.",
          de: "Warte an der Bushaltestelle.",
          it: "Aspetta alla fermata dell'autobus.",
          es: "Espera en la parada de autobús.",
          ru: "Жди на остановке.",
          zh: "在公交车站等。",
          ar: "انتظر في موقف الحافلات.",
          ko: "버스 정류장에서 기다리세요."
        }
      },
      {
        id: "map",
        word: {
          en: "Map",
          fa: "نقشه",
          fr: "Carte",
          de: "Karte",
          it: "Mappa",
          es: "Mapa",
          ru: "Карта",
          zh: "地图",
          ar: "خريطة",
          ko: "지도"
        },
        sentence: {
          en: "Look at the map.",
          fa: "به نقشه نگاه کن.",
          fr: "Regarde la carte.",
          de: "Schau auf die Karte.",
          it: "Guarda la mappa.",
          es: "Mira el mapa.",
          ru: "Посмотри на карту.",
          zh: "看地图。",
          ar: "انظر إلى الخريطة.",
          ko: "지도를 보세요."
        }
      },
      {
        id: "tourist",
        word: {
          en: "Tourist",
          fa: "توریست",
          fr: "Touriste",
          de: "Tourist",
          it: "Turista",
          es: "Turista",
          ru: "Турист",
          zh: "游客",
          ar: "سائح",
          ko: "관광객"
        },
        sentence: {
          en: "I am a tourist.",
          fa: "من یک توریست هستم.",
          fr: "Je suis un touriste.",
          de: "Ich bin Tourist.",
          it: "Sono un turista.",
          es: "Soy turista.",
          ru: "Я турист.",
          zh: "我是游客。",
          ar: "أنا سائح.",
          ko: "나는 관광객입니다."
        }
      },
      {
        id: "flight",
        word: {
          en: "Flight",
          fa: "پرواز",
          fr: "Vol",
          de: "Flug",
          it: "Volo",
          es: "Vuelo",
          ru: "Рейс",
          zh: "航班",
          ar: "رحلة طيران",
          ko: "비행"
        },
        sentence: {
          en: "The flight is cancelled.",
          fa: "پرواز لغو شد.",
          fr: "Le vol est annulé.",
          de: "Der Flug ist gestrichen.",
          it: "Il volo è cancellato.",
          es: "El vuelo está cancelado.",
          ru: "Рейс отменен.",
          zh: "航班取消了。",
          ar: "تم إلغاء الرحلة.",
          ko: "비행이 취소되었습니다."
        }
      },
      {
        id: "guide",
        word: {
          en: "Guide",
          fa: "راهنما",
          fr: "Guide",
          de: "Führer",
          it: "Guida",
          es: "Guía",
          ru: "Гид",
          zh: "向导",
          ar: "دليل",
          ko: "가이드"
        },
        sentence: {
          en: "We need a guide.",
          fa: "ما به یک راهنما نیاز داریم.",
          fr: "Nous avons besoin d'un guide.",
          de: "Wir brauchen einen Führer.",
          it: "Abbiamo bisogno di una guida.",
          es: "Necesitamos un guía.",
          ru: "Нам нужен гид.",
          zh: "我们需要向导。",
          ar: "نحن بحاجة إلى دليل.",
          ko: "우리는 가이드가 필요합니다."
        }
      },
      {
        id: "seat",
        word: {
          en: "Seat",
          fa: "صندلی",
          fr: "Siège",
          de: "Sitz",
          it: "Posto",
          es: "Asiento",
          ru: "Место",
          zh: "座位",
          ar: "مقعد",
          ko: "좌석"
        },
        sentence: {
          en: "Is this your seat?",
          fa: "آیا این صندلی شماست؟",
          fr: "Est-ce votre siège ?",
          de: "Ist das Ihr Sitz?",
          it: "È questo il tuo posto?",
          es: "¿Es este tu asiento?",
          ru: "Это ваше место?",
          zh: "这是你的座位吗？",
          ar: "هل هذا مقعدك؟",
          ko: "이것은 당신의 좌석입니까?"
        }
      },
      {
        id: "visa",
        word: {
          en: "Visa",
          fa: "ویزا",
          fr: "Visa",
          de: "Visum",
          it: "Visto",
          es: "Visa",
          ru: "Виза",
          zh: "签证",
          ar: "تأشيرة",
          ko: "비자"
        },
        sentence: {
          en: "I need a visa.",
          fa: "من به ویزا نیاز دارم.",
          fr: "J'ai besoin d'un visa.",
          de: "Ich brauche ein Visum.",
          it: "Ho bisogno di un visto.",
          es: "Necesito una visa.",
          ru: "Мне нужна виза.",
          zh: "我需要签证。",
          ar: "أحتاج إلى تأشيرة.",
          ko: "나는 비자가 필요합니다."
        }
      },
      {
        id: "prevention",
        word: {
          en: "Prevention",
          fa: "پیشگیری",
          fr: "Prévention",
          de: "Vorbeugung",
          it: "Prevenzione",
          es: "Prevención",
          ru: "Профилактика",
          zh: "预防",
          ar: "وقاية",
          ko: "예방"
        },
        sentence: {
          en: "Prevention is better than cure.",
          fa: "پیشگیری بهتر از درمان است.",
          fr: "Mieux vaut prévenir que guérir.",
          de: "Vorbeugen ist besser als heilen.",
          it: "Prevenire è meglio che curare.",
          es: "Más vale prevenir que curar.",
          ru: "Легче предупредить, чем лечить.",
          zh: "预防胜于治疗。",
          ar: "الوقاية خير من العلاج.",
          ko: "예방이 치료보다 낫다."
        }
      },
      {
        id: "knowledge_power",
        word: {
          en: "Knowledge",
          fa: "دانش",
          fr: "Connaissance",
          de: "Wissen",
          it: "Conoscenza",
          es: "Conocimiento",
          ru: "Знание",
          zh: "知识",
          ar: "معرفة",
          ko: "지식"
        },
        sentence: {
          en: "Knowledge is power.",
          fa: "توانا بود هر که دانا بود.",
          fr: "Savoir, c'est pouvoir.",
          de: "Wissen ist Macht.",
          it: "Sapere è potere.",
          es: "El conocimiento es poder.",
          ru: "Знание - сила.",
          zh: "知识就是力量。",
          ar: "المعرفة قوة.",
          ko: "아는 것이 힘이다."
        }
      },
      {
        id: "silence_gold",
        word: {
          en: "Silence",
          fa: "سکوت",
          fr: "Silence",
          de: "Stille",
          it: "Silenzio",
          es: "Silencio",
          ru: "Тишина",
          zh: "沉默",
          ar: "صمت",
          ko: "침묵"
        },
        sentence: {
          en: "Silence is golden.",
          fa: "سکوت طلاست.",
          fr: "Le silence est d'or.",
          de: "Schweigen ist Gold.",
          it: "Il silenzio è d'oro.",
          es: "El silencio es oro.",
          ru: "Молчание - золото.",
          zh: "沉默是金。",
          ar: "السكوت من ذهب.",
          ko: "침묵은 금이다."
        }
      },
      {
        id: "never_late",
        word: {
          en: "Late",
          fa: "دیر",
          fr: "Tard",
          de: "Spät",
          it: "Tardi",
          es: "Tarde",
          ru: "Поздно",
          zh: "晚",
          ar: "متأخر",
          ko: "늦은"
        },
        sentence: {
          en: "Better late than never.",
          fa: "دیر رسیدن بهتر از هرگز نرسیدن است.",
          fr: "Mieux vaut tard que jamais.",
          de: "Besser spät als nie.",
          it: "Meglio tardi che mai.",
          es: "Más vale tarde que nunca.",
          ru: "Лучше поздно, чем никогда.",
          zh: "迟做总比不做好。",
          ar: "أن تصل متأخرا خير من ألا تصل أبدا.",
          ko: "아예 안 하는 것보다는 늦게라도 하는 게 낫다."
        }
      },
      {
        id: "honesty",
        word: {
          en: "Honesty",
          fa: "صداقت",
          fr: "Honnêteté",
          de: "Ehrlichkeit",
          it: "Onestà",
          es: "Honestidad",
          ru: "Честность",
          zh: "诚实",
          ar: "صدق",
          ko: "정직"
        },
        sentence: {
          en: "Honesty is the best policy.",
          fa: "صداقت بهترین سیاست است.",
          fr: "L'honnêteté est la meilleure politique.",
          de: "Ehrlichkeit währt am längsten.",
          it: "L'onestà è la miglior politica.",
          es: "La honestidad es la mejor política.",
          ru: "Честность - лучшая политика.",
          zh: "诚实是上策。",
          ar: "الصدق هو أفضل سياسة.",
          ko: "정직이 최선의 방책이다."
        }
      },
      {
        id: "practice_perfect",
        word: {
          en: "Practice",
          fa: "تمرین",
          fr: "Pratique",
          de: "Übung",
          it: "Pratica",
          es: "Práctica",
          ru: "Практика",
          zh: "练习",
          ar: "ممارسة",
          ko: "연습"
        },
        sentence: {
          en: "Practice makes perfect.",
          fa: "کار نیکو کردن از پر کردن است.",
          fr: "C'est en forgeant qu'on devient forgeron.",
          de: "Übung macht den Meister.",
          it: "La pratica rende perfetti.",
          es: "La práctica hace al maestro.",
          ru: "Повторение - мать учения.",
          zh: "熟能生巧。",
          ar: "الممارسة تؤدي إلى الإتقان.",
          ko: "연습이 완벽을 만든다."
        }
      },
      {
        id: "no_pain",
        word: {
          en: "Pain",
          fa: "رنج",
          fr: "Douleur",
          de: "Schmerz",
          it: "Dolore",
          es: "Dolor",
          ru: "Боль",
          zh: "痛苦",
          ar: "ألم",
          ko: "고통"
        },
        sentence: {
          en: "No pain, no gain.",
          fa: "نابرده رنج گنج میسر نمی‌شود.",
          fr: "On n'a rien sans rien.",
          de: "Ohne Fleiß kein Preis.",
          it: "Nessuna pena, nessun guadagno.",
          es: "Sin dolor no hay ganancia.",
          ru: "Под лежачий камень вода не течет.",
          zh: "不劳无获。",
          ar: "لا ألم لا ربح.",
          ko: "고통 없이는 얻는 것도 없다."
        }
      },
      {
        id: "haste_waste",
        word: {
          en: "Haste",
          fa: "عجله",
          fr: "Hâte",
          de: "Eile",
          it: "Fretta",
          es: "Prisa",
          ru: "Спешка",
          zh: "匆忙",
          ar: "عجلة",
          ko: "서두름"
        },
        sentence: {
          en: "Haste makes waste.",
          fa: "عجله کار شیطان است.",
          fr: "Hâte toi lentement.",
          de: "Eile mit Weile.",
          it: "La gatta frettolosa fece i gattini ciechi.",
          es: "Vísteme despacio que tengo prisa.",
          ru: "Поспешишь - людей насмешишь.",
          zh: "欲速则不达。",
          ar: "في العجلة الندامة.",
          ko: "급할수록 돌아가라."
        }
      },
      {
        id: "easy_come",
        word: {
          en: "Easy",
          fa: "آسان",
          fr: "Facile",
          de: "Leicht",
          it: "Facile",
          es: "Fácil",
          ru: "Легко",
          zh: "容易",
          ar: "سهل",
          ko: "쉬운"
        },
        sentence: {
          en: "Easy come, easy go.",
          fa: "باد آورده را باد می‌برد.",
          fr: "Ce qui vient facilement part facilement.",
          de: "Wie gewonnen, so zerronnen.",
          it: "Come viene, così va.",
          es: "Lo que fácil viene, fácil se va.",
          ru: "Легко пришло, легко ушло.",
          zh: "来得容易去得快。",
          ar: "ما يأتي بسهولة يذهب بسهولة.",
          ko: "쉽게 얻은 것은 쉽게 잃는다."
        }
      },
      {
        id: "mountain",
        word: {
          en: "Mountain",
          fa: "کوه",
          fr: "Montagne",
          de: "Berg",
          it: "Montagna",
          es: "Montaña",
          ru: "Гора",
          zh: "山",
          ar: "جبل",
          ko: "산"
        },
        sentence: {
          en: "We climbed the mountain.",
          fa: "ما از کوه بالا رفتیم.",
          fr: "Nous avons escaladé la montagne.",
          de: "Wir sind auf den Berg gestiegen.",
          it: "Abbiamo scalato la montagna.",
          es: "Escalamos la montaña.",
          ru: "Мы поднялись на гору.",
          zh: "我们爬了山。",
          ar: "تسلقنا الجبل.",
          ko: "우리는 산에 올랐습니다."
        }
      },
      {
        id: "river",
        word: {
          en: "River",
          fa: "رودخانه",
          fr: "Rivière",
          de: "Fluss",
          it: "Fiume",
          es: "Río",
          ru: "Река",
          zh: "河",
          ar: "نهر",
          ko: "강"
        },
        sentence: {
          en: "The river is long.",
          fa: "رودخانه طولانی است.",
          fr: "La rivière est longue.",
          de: "Der Fluss ist lang.",
          it: "Il fiume è lungo.",
          es: "El río es largo.",
          ru: "Река длинная.",
          zh: "这条河很长。",
          ar: "النهر طويل.",
          ko: "강은 깁니다."
        }
      },
      {
        id: "sea",
        word: {
          en: "Sea",
          fa: "دریا",
          fr: "Mer",
          de: "Meer",
          it: "Mare",
          es: "Mar",
          ru: "Море",
          zh: "海",
          ar: "بحر",
          ko: "바다"
        },
        sentence: {
          en: "I love the sea.",
          fa: "من دریا را دوست دارم.",
          fr: "J'aime la mer.",
          de: "Ich liebe das Meer.",
          it: "Amo il mare.",
          es: "Amo el mar.",
          ru: "Я люблю море.",
          zh: "我爱大海。",
          ar: "أحب البحر.",
          ko: "나는 바다를 좋아합니다."
        }
      },
      {
        id: "forest",
        word: {
          en: "Forest",
          fa: "جنگل",
          fr: "Forêt",
          de: "Wald",
          it: "Foresta",
          es: "Bosque",
          ru: "Лес",
          zh: "森林",
          ar: "غابة",
          ko: "숲"
        },
        sentence: {
          en: "The forest is green.",
          fa: "جنگل سبز است.",
          fr: "La forêt est verte.",
          de: "Der Wald ist grün.",
          it: "La foresta è verde.",
          es: "El bosque es verde.",
          ru: "Лес зеленый.",
          zh: "森林是绿色的。",
          ar: "الغابة خضراء.",
          ko: "숲은 푸르다."
        }
      },
      {
        id: "today",
        word: {
          en: "Today",
          fa: "امروز",
          fr: "Aujourd'hui",
          de: "Heute",
          it: "Oggi",
          es: "Hoy",
          ru: "Сегодня",
          zh: "今天",
          ar: "اليوم",
          ko: "오늘"
        },
        sentence: {
          en: "Today is Monday.",
          fa: "امروز دوشنبه است.",
          fr: "Aujourd'hui, c'est lundi.",
          de: "Heute ist Montag.",
          it: "Oggi è lunedì.",
          es: "Hoy es lunes.",
          ru: "Сегодня понедельник.",
          zh: "今天是星期一。",
          ar: "اليوم هو الاثنين.",
          ko: "오늘은 월요일입니다."
        }
      },
      {
        id: "tomorrow",
        word: {
          en: "Tomorrow",
          fa: "فردا",
          fr: "Demain",
          de: "Morgen",
          it: "Domani",
          es: "Mañana",
          ru: "Завтра",
          zh: "明天",
          ar: "غدا",
          ko: "내일"
        },
        sentence: {
          en: "See you tomorrow.",
          fa: "فردا می‌بینمت.",
          fr: "À demain.",
          de: "Bis morgen.",
          it: "A domani.",
          es: "Nos vemos mañana.",
          ru: "Увидимся завтра.",
          zh: "明天见。",
          ar: "أراك غدا.",
          ko: "내일 봐요."
        }
      },
      {
        id: "yesterday",
        word: {
          en: "Yesterday",
          fa: "دیروز",
          fr: "Hier",
          de: "Gestern",
          it: "Ieri",
          es: "Ayer",
          ru: "Вчера",
          zh: "昨天",
          ar: "أمس",
          ko: "어제"
        },
        sentence: {
          en: "Yesterday was Sunday.",
          fa: "دیروز یکشنبه بود.",
          fr: "Hier, c'était dimanche.",
          de: "Gestern war Sonntag.",
          it: "Ieri era domenica.",
          es: "Ayer fue domingo.",
          ru: "Вчера было воскресенье.",
          zh: "昨天是星期天。",
          ar: "كان الأمس يوم الأحد.",
          ko: "어제는 일요일이었습니다."
        }
      },
      {
        id: "morning",
        word: {
          en: "Morning",
          fa: "صبح",
          fr: "Matin",
          de: "Morgen",
          it: "Mattina",
          es: "Mañana",
          ru: "Утро",
          zh: "早晨",
          ar: "صباح",
          ko: "아침"
        },
        sentence: {
          en: "Good morning!",
          fa: "صبح بخیر!",
          fr: "Bonjour !",
          de: "Guten Morgen!",
          it: "Buongiorno!",
          es: "¡Buenos días!",
          ru: "Доброе утро!",
          zh: "早上好！",
          ar: "صباح الخير!",
          ko: "좋은 아침!"
        }
      },
      {
        id: "night",
        word: {
          en: "Night",
          fa: "شب",
          fr: "Nuit",
          de: "Nacht",
          it: "Notte",
          es: "Noche",
          ru: "Ночь",
          zh: "夜晚",
          ar: "ليل",
          ko: "밤"
        },
        sentence: {
          en: "Good night.",
          fa: "شب بخیر.",
          fr: "Bonne nuit.",
          de: "Gute Nacht.",
          it: "Buonanotte.",
          es: "Buenas noches.",
          ru: "Спокойной ночи.",
          zh: "晚安。",
          ar: "تصبح على خير.",
          ko: "안녕히 주무세요."
        }
      },
      {
        id: "week",
        word: {
          en: "Week",
          fa: "هفته",
          fr: "Semaine",
          de: "Woche",
          it: "Settimana",
          es: "Semana",
          ru: "Неделя",
          zh: "周",
          ar: "أسبوع",
          ko: "주"
        },
        sentence: {
          en: "Next week.",
          fa: "هفته آینده.",
          fr: "La semaine prochaine.",
          de: "Nächste Woche.",
          it: "La prossima settimana.",
          es: "La próxima semana.",
          ru: "На следующей неделе.",
          zh: "下周。",
          ar: "الأسبوع القادم.",
          ko: "다음 주."
        }
      },
      {
        id: "year",
        word: {
          en: "Year",
          fa: "سال",
          fr: "Année",
          de: "Jahr",
          it: "Anno",
          es: "Año",
          ru: "Год",
          zh: "年",
          ar: "سنة",
          ko: "년"
        },
        sentence: {
          en: "Happy New Year.",
          fa: "سال نو مبارک.",
          fr: "Bonne année.",
          de: "Frohes neues Jahr.",
          it: "Buon anno.",
          es: "Feliz año nuevo.",
          ru: "С Новым годом.",
          zh: "新年快乐。",
          ar: "سنة جديدة سعيدة.",
          ko: "새해 복 많이 받으세요."
        }
      },
      {
        id: "street",
        word: {
          en: "Street",
          fa: "خیابان",
          fr: "Rue",
          de: "Straße",
          it: "Strada",
          es: "Calle",
          ru: "Улица",
          zh: "街道",
          ar: "شارع",
          ko: "거리"
        },
        sentence: {
          en: "Cross the street.",
          fa: "از خیابان رد شو.",
          fr: "Traversez la rue.",
          de: "Überquere die Straße.",
          it: "Attraversa la strada.",
          es: "Cruza la calle.",
          ru: "Перейди улицу.",
          zh: "过马路。",
          ar: "اعبر الشارع.",
          ko: "길을 건너세요."
        }
      },
      {
        id: "city",
        word: {
          en: "City",
          fa: "شهر",
          fr: "Ville",
          de: "Stadt",
          it: "Città",
          es: "Ciudad",
          ru: "Город",
          zh: "城市",
          ar: "مدينة",
          ko: "도시"
        },
        sentence: {
          en: "I live in the city.",
          fa: "من در شهر زندگی می‌کنم.",
          fr: "J'habite en ville.",
          de: "Ich lebe in der Stadt.",
          it: "Vivo in città.",
          es: "Vivo en la ciudad.",
          ru: "Я живу в городе.",
          zh: "我住在城市。",
          ar: "أعيش في المدينة.",
          ko: "나는 도시에 삽니다."
        }
      },
      {
        id: "bridge",
        word: {
          en: "Bridge",
          fa: "پل",
          fr: "Pont",
          de: "Brücke",
          it: "Ponte",
          es: "Puente",
          ru: "Мост",
          zh: "桥",
          ar: "جسر",
          ko: "다리"
        },
        sentence: {
          en: "The bridge is old.",
          fa: "پل قدیمی است.",
          fr: "Le pont est vieux.",
          de: "Die Brücke ist alt.",
          it: "Il ponte è vecchio.",
          es: "El puente es viejo.",
          ru: "Мост старый.",
          zh: "这座桥很旧。",
          ar: "الجسر قديم.",
          ko: "다리는 오래되었습니다."
        }
      },
      {
        id: "park_place",
        word: {
          en: "Park",
          fa: "پارک",
          fr: "Parc",
          de: "Park",
          it: "Parco",
          es: "Parque",
          ru: "Парк",
          zh: "公园",
          ar: "حديقة",
          ko: "공원"
        },
        sentence: {
          en: "Let's go to the park.",
          fa: "بیایید به پارک برویم.",
          fr: "Allons au parc.",
          de: "Lass uns in den Park gehen.",
          it: "Andiamo al parco.",
          es: "Vamos al parque.",
          ru: "Пойдем в парк.",
          zh: "我们去公园吧。",
          ar: "لنذهب إلى الحديقة.",
          ko: "공원에 갑시다."
        }
      },
      {
        id: "shirt",
        word: {
          en: "Shirt",
          fa: "پیراهن",
          fr: "Chemise",
          de: "Hemd",
          it: "Camicia",
          es: "Camisa",
          ru: "Рубашка",
          zh: "衬衫",
          ar: "قميص",
          ko: "셔츠"
        },
        sentence: {
          en: "Nice shirt.",
          fa: "پیراهن قشنگی است.",
          fr: "Belle chemise.",
          de: "Schönes Hemd.",
          it: "Bella camicia.",
          es: "Bonita camisa.",
          ru: "Хорошая рубашка.",
          zh: "这件衬衫不错。",
          ar: "قميص جميل.",
          ko: "멋진 셔츠네요."
        }
      },
      {
        id: "shoes",
        word: {
          en: "Shoes",
          fa: "کفش",
          fr: "Chaussures",
          de: "Schuhe",
          it: "Scarpe",
          es: "Zapatos",
          ru: "Обувь",
          zh: "鞋子",
          ar: "أحذية",
          ko: "신발"
        },
        sentence: {
          en: "My shoes are new.",
          fa: "کفش‌های من نو هستند.",
          fr: "Mes chaussures sont neuves.",
          de: "Meine Schuhe sind neu.",
          it: "Le mie scarpe sono nuove.",
          es: "Mis zapatos son nuevos.",
          ru: "Моя обувь новая.",
          zh: "我的鞋是新的。",
          ar: "أحذيتي جديدة.",
          ko: "내 신발은 새것입니다."
        }
      },
      {
        id: "pants",
        word: {
          en: "Pants",
          fa: "شلوار",
          fr: "Pantalon",
          de: "Hose",
          it: "Pantaloni",
          es: "Pantalones",
          ru: "Брюки",
          zh: "裤子",
          ar: "بنطلون",
          ko: "바지"
        },
        sentence: {
          en: "I bought new pants.",
          fa: "من شلوار نو خریدم.",
          fr: "J'ai acheté un nouveau pantalon.",
          de: "Ich habe eine neue Hose gekauft.",
          it: "Ho comprato pantaloni nuovi.",
          es: "Compré pantalones nuevos.",
          ru: "Я купил новые брюки.",
          zh: "我买了新裤子。",
          ar: "اشتريت بنطلوناً جديداً.",
          ko: "나는 새 바지를 샀습니다."
        }
      },
      {
        id: "because",
        word: {
          en: "Because",
          fa: "زیرا",
          fr: "Parce que",
          de: "Weil",
          it: "Perché",
          es: "Porque",
          ru: "Потому что",
          zh: "因为",
          ar: "لأن",
          ko: "왜냐하면"
        },
        sentence: {
          en: "I eat because I am hungry.",
          fa: "من می‌خورم چون گرسنه هستم.",
          fr: "Je mange parce que j'ai faim.",
          de: "Ich esse, weil ich hungrig bin.",
          it: "Mangio perché ho fame.",
          es: "Como porque tengo hambre.",
          ru: "Я ем, потому что я голоден.",
          zh: "我吃是因为我饿了。",
          ar: "أاكل لأني جائع.",
          ko: "나는 배가 고파서 먹습니다."
        }
      },
      {
        id: "but",
        word: {
          en: "But",
          fa: "اما",
          fr: "Mais",
          de: "Aber",
          it: "Ma",
          es: "Pero",
          ru: "Но",
          zh: "但是",
          ar: "لكن",
          ko: "하지만"
        },
        sentence: {
          en: "I like tea but not coffee.",
          fa: "من چای دوست دارم اما قهوه نه.",
          fr: "J'aime le thé mais pas le café.",
          de: "Ich mag Tee, aber keinen Kaffee.",
          it: "Mi piace il tè ma non il caffè.",
          es: "Me gusta el té pero no el café.",
          ru: "Я люблю чай, но не кофе.",
          zh: "我喜欢茶但不喜欢咖啡。",
          ar: "أحب الشاي ولكن ليس القهوة.",
          ko: "나는 차는 좋아하지만 커피는 좋아하지 않습니다."
        }
      },
      {
        id: "if",
        word: {
          en: "If",
          fa: "اگر",
          fr: "Si",
          de: "Wenn",
          it: "Se",
          es: "Si",
          ru: "Если",
          zh: "如果",
          ar: "إذا",
          ko: "만약"
        },
        sentence: {
          en: "If it rains, we stay home.",
          fa: "اگر باران ببارد، خانه می‌مانیم.",
          fr: "S'il pleut, nous restons à la maison.",
          de: "Wenn es regnet, bleiben wir zu Hause.",
          it: "Se piove, restiamo a casa.",
          es: "Si llueve, nos quedamos en casa.",
          ru: "Если пойдет дождь, мы останемся дома.",
          zh: "如果下雨，我们就呆在家里。",
          ar: "إذا أمطرت، سنبقى في المنزل.",
          ko: "비가 오면 우리는 집에 머뭅니다."
        }
      },
      {
        id: "internet",
        word: {
          en: "Internet",
          fa: "اینترنت",
          fr: "Internet",
          de: "Internet",
          it: "Internet",
          es: "Internet",
          ru: "Интернет",
          zh: "互联网",
          ar: "إنترنت",
          ko: "인터넷"
        },
        sentence: {
          en: "The internet is fast.",
          fa: "اینترنت سریع است.",
          fr: "L'Internet est rapide.",
          de: "Das Internet ist schnell.",
          it: "Internet è veloce.",
          es: "El internet es rápido.",
          ru: "Интернет быстрый.",
          zh: "互联网很快。",
          ar: "الإنترنت سريع.",
          ko: "인터넷이 빠릅니다."
        }
      },
      {
        id: "website",
        word: {
          en: "Website",
          fa: "وب‌سایت",
          fr: "Site web",
          de: "Webseite",
          it: "Sito web",
          es: "Sitio web",
          ru: "Веб-сайт",
          zh: "网站",
          ar: "موقع الكتروني",
          ko: "웹사이트"
        },
        sentence: {
          en: "Visit our website.",
          fa: "از وب‌سایت ما بازدید کنید.",
          fr: "Visitez notre site web.",
          de: "Besuchen Sie unsere Webseite.",
          it: "Visita il nostro sito web.",
          es: "Visita nuestro sitio web.",
          ru: "Посетите наш веб-сайт.",
          zh: "访问我们的网站。",
          ar: "قم بزيارة موقعنا.",
          ko: "우리 웹사이트를 방문하세요."
        }
      },
      {
        id: "password",
        word: {
          en: "Password",
          fa: "رمز عبور",
          fr: "Mot de passe",
          de: "Passwort",
          it: "Password",
          es: "Contraseña",
          ru: "Пароль",
          zh: "密码",
          ar: "كلمة المرور",
          ko: "비밀번호"
        },
        sentence: {
          en: "Enter your password.",
          fa: "رمز عبور خود را وارد کنید.",
          fr: "Entrez votre mot de passe.",
          de: "Geben Sie Ihr Passwort ein.",
          it: "Inserisci la tua password.",
          es: "Ingresa tu contraseña.",
          ru: "Введите пароль.",
          zh: "输入你的密码。",
          ar: "أدخل كلمة المرور.",
          ko: "비밀번호를 입력하세요."
        }
      },
      {
        id: "download",
        word: {
          en: "Download",
          fa: "دانلود",
          fr: "Télécharger",
          de: "Herunterladen",
          it: "Scaricare",
          es: "Descargar",
          ru: "Скачать",
          zh: "下载",
          ar: "تحميل",
          ko: "다운로드"
        },
        sentence: {
          en: "Download the file.",
          fa: "فایل را دانلود کنید.",
          fr: "Téléchargez le fichier.",
          de: "Laden Sie die Datei herunter.",
          it: "Scarica il file.",
          es: "Descarga el archivo.",
          ru: "Скачай файл.",
          zh: "下载文件。",
          ar: "قم بتحميل الملف.",
          ko: "파일을 다운로드하세요."
        }
      },
      {
        id: "screen",
        word: {
          en: "Screen",
          fa: "صفحه نمایش",
          fr: "Écran",
          de: "Bildschirm",
          it: "Schermo",
          es: "Pantalla",
          ru: "Экран",
          zh: "屏幕",
          ar: "شاشة",
          ko: "화면"
        },
        sentence: {
          en: "The screen is broken.",
          fa: "صفحه نمایش شکسته است.",
          fr: "L'écran est cassé.",
          de: "Der Bildschirm ist kaputt.",
          it: "Lo schermo è rotto.",
          es: "La pantalla está rota.",
          ru: "Экран разбит.",
          zh: "屏幕碎了。",
          ar: "الشاشة مكسورة.",
          ko: "화면이 깨졌습니다."
        }
      },
      {
        id: "keyboard",
        word: {
          en: "Keyboard",
          fa: "کیبورد",
          fr: "Clavier",
          de: "Tastatur",
          it: "Tastiera",
          es: "Teclado",
          ru: "Клавиатура",
          zh: "键盘",
          ar: "لوحة المفاتيح",
          ko: "키보드"
        },
        sentence: {
          en: "I need a new keyboard.",
          fa: "من به یک کیبورد جدید نیاز دارم.",
          fr: "J'ai besoin d'un nouveau clavier.",
          de: "Ich brauche eine neue Tastatur.",
          it: "Ho bisogno di una nuova tastiera.",
          es: "Necesito un teclado nuevo.",
          ru: "Мне нужна новая клавиатура.",
          zh: "我需要一个新键盘。",
          ar: "أحتاج إلى لوحة مفاتيح جديدة.",
          ko: "새 키보드가 필요합니다."
        }
      },
      {
        id: "mouse",
        word: {
          en: "Mouse",
          fa: "موس",
          fr: "Souris",
          de: "Maus",
          it: "Mouse",
          es: "Ratón",
          ru: "Мышь",
          zh: "鼠标",
          ar: "فأرة",
          ko: "마우스"
        },
        sentence: {
          en: "Click with the mouse.",
          fa: "با موس کلیک کنید.",
          fr: "Cliquez avec la souris.",
          de: "Klicken Sie mit der Maus.",
          it: "Clicca con il mouse.",
          es: "Haz clic con el ratón.",
          ru: "Кликни мышкой.",
          zh: "用鼠标点击。",
          ar: "انقر بالفأرة.",
          ko: "마우스로 클릭하세요."
        }
      },
      {
        id: "battery",
        word: {
          en: "Battery",
          fa: "باتری",
          fr: "Batterie",
          de: "Batterie",
          it: "Batteria",
          es: "Batería",
          ru: "Батарея",
          zh: "电池",
          ar: "بطارية",
          ko: "배터리"
        },
        sentence: {
          en: "The battery is low.",
          fa: "باتری ضعیف است.",
          fr: "La batterie est faible.",
          de: "Die Batterie ist schwach.",
          it: "La batteria è scarica.",
          es: "La batería está baja.",
          ru: "Батарея разряжена.",
          zh: "电池电量低。",
          ar: "البطارية منخفضة.",
          ko: "배터리가 부족합니다."
        }
      },
      {
        id: "wifi",
        word: {
          en: "WiFi",
          fa: "وای‌فای",
          fr: "WiFi",
          de: "WLAN",
          it: "WiFi",
          es: "WiFi",
          ru: "WiFi",
          zh: "无线网",
          ar: "واي فاي",
          ko: "와이파이"
        },
        sentence: {
          en: "Is there free WiFi?",
          fa: "آیا وای‌فای رایگان وجود دارد؟",
          fr: "Y a-t-il du WiFi gratuit ?",
          de: "Gibt es kostenloses WLAN?",
          it: "C'è il WiFi gratuito?",
          es: "¿Hay WiFi gratis?",
          ru: "Здесь есть бесплатный WiFi?",
          zh: "有免费WiFi吗？",
          ar: "هل يوجد واي فاي مجاني؟",
          ko: "무료 와이파이가 있나요?"
        }
      },
      {
        id: "message",
        word: {
          en: "Message",
          fa: "پیام",
          fr: "Message",
          de: "Nachricht",
          it: "Messaggio",
          es: "Mensaje",
          ru: "Сообщение",
          zh: "消息",
          ar: "رسالة",
          ko: "메시지"
        },
        sentence: {
          en: "Send me a message.",
          fa: "به من پیام بده.",
          fr: "Envoie-moi un message.",
          de: "Sende mir eine Nachricht.",
          it: "Inviami un messaggio.",
          es: "Envíame un mensaje.",
          ru: "Отправь мне сообщение.",
          zh: "给我发个消息。",
          ar: "أرسل لي رسالة.",
          ko: "메시지를 보내주세요."
        }
      },
      {
        id: "university",
        word: {
          en: "University",
          fa: "دانشگاه",
          fr: "Université",
          de: "Universität",
          it: "Università",
          es: "Universidad",
          ru: "Университет",
          zh: "大学",
          ar: "جامعة",
          ko: "대학교"
        },
        sentence: {
          en: "She goes to university.",
          fa: "او به دانشگاه می‌رود.",
          fr: "Elle va à l'université.",
          de: "Sie geht zur Universität.",
          it: "Lei va all'università.",
          es: "Ella va a la universidad.",
          ru: "Она ходит в университет.",
          zh: "她上大学。",
          ar: "هي تذهب إلى الجامعة.",
          ko: "그녀는 대학교에 다닙니다."
        }
      },
      {
        id: "student_a2",
        word: {
          en: "Student",
          fa: "دانشجو",
          fr: "Étudiant",
          de: "Student",
          it: "Studente",
          es: "Estudiante",
          ru: "Студент",
          zh: "学生",
          ar: "طالب",
          ko: "학생"
        },
        sentence: {
          en: "I am a student.",
          fa: "من دانشجو هستم.",
          fr: "Je suis étudiant.",
          de: "Ich bin Student.",
          it: "Sono uno studente.",
          es: "Soy estudiante.",
          ru: "Я студент.",
          zh: "我是学生。",
          ar: "أنا طالب.",
          ko: "나는 학생입니다."
        }
      },
      {
        id: "exam",
        word: {
          en: "Exam",
          fa: "امتحان",
          fr: "Examen",
          de: "Prüfung",
          it: "Esame",
          es: "Examen",
          ru: "Экзамен",
          zh: "考试",
          ar: "امتحان",
          ko: "시험"
        },
        sentence: {
          en: "The exam was hard.",
          fa: "امتحان سخت بود.",
          fr: "L'examen était difficile.",
          de: "Die Prüfung war schwer.",
          it: "L'esame era difficile.",
          es: "El examen fue difícil.",
          ru: "Экзамен был трудным.",
          zh: "考试很难。",
          ar: "الامتحان كان صعباً.",
          ko: "시험은 어려웠습니다."
        }
      },
      {
        id: "lesson",
        word: {
          en: "Lesson",
          fa: "درس",
          fr: "Leçon",
          de: "Lektion",
          it: "Lezione",
          es: "Lección",
          ru: "Урок",
          zh: "课",
          ar: "درس",
          ko: "수업"
        },
        sentence: {
          en: "This lesson is easy.",
          fa: "این درس آسان است.",
          fr: "Cette leçon est facile.",
          de: "Diese Lektion ist einfach.",
          it: "Questa lezione è facile.",
          es: "Esta lección es fácil.",
          ru: "Этот урок легкий.",
          zh: "这课很容易。",
          ar: "هذا الدرس سهل.",
          ko: "이 수업은 쉽습니다."
        }
      },
      {
        id: "homework",
        word: {
          en: "Homework",
          fa: "تکلیف",
          fr: "Devoirs",
          de: "Hausaufgaben",
          it: "Compiti",
          es: "Tarea",
          ru: "Домашнее задание",
          zh: "作业",
          ar: "واجب منزلي",
          ko: "숙제"
        },
        sentence: {
          en: "Do your homework.",
          fa: "تکلیفت را انجام بده.",
          fr: "Fais tes devoirs.",
          de: "Mach deine Hausaufgaben.",
          it: "Fai i tuoi compiti.",
          es: "Haz tu tarea.",
          ru: "Делай домашнее задание.",
          zh: "做作业。",
          ar: "قم بواجبك المنزلي.",
          ko: "숙제를 하세요."
        }
      },
      {
        id: "dictionary",
        word: {
          en: "Dictionary",
          fa: "دیکشنری",
          fr: "Dictionnaire",
          de: "Wörterbuch",
          it: "Dizionario",
          es: "Diccionario",
          ru: "Словарь",
          zh: "字典",
          ar: "قاموس",
          ko: "사전"
        },
        sentence: {
          en: "Use a dictionary.",
          fa: "از یک دیکشنری استفاده کن.",
          fr: "Utilise un dictionnaire.",
          de: "Benutze ein Wörterbuch.",
          it: "Usa un dizionario.",
          es: "Usa un diccionario.",
          ru: "Используй словарь.",
          zh: "用字典。",
          ar: "استخدم قاموساً.",
          ko: "사전을 사용하세요."
        }
      },
      {
        id: "library",
        word: {
          en: "Library",
          fa: "کتابخانه",
          fr: "Bibliothèque",
          de: "Bibliothek",
          it: "Biblioteca",
          es: "Biblioteca",
          ru: "Библиотека",
          zh: "图书馆",
          ar: "مكتبة",
          ko: "도서관"
        },
        sentence: {
          en: "I study in the library.",
          fa: "من در کتابخانه مطالعه می‌کنم.",
          fr: "J'étudie à la bibliothèque.",
          de: "Ich lerne in der Bibliothek.",
          it: "Studio in biblioteca.",
          es: "Estudio en la biblioteca.",
          ru: "Я учусь в библиотеке.",
          zh: "我在图书馆学习。",
          ar: "أدرس في المكتبة.",
          ko: "나는 도서관에서 공부합니다."
        }
      },
      {
        id: "question",
        word: {
          en: "Question",
          fa: "سوال",
          fr: "Question",
          de: "Frage",
          it: "Domanda",
          es: "Pregunta",
          ru: "Вопрос",
          zh: "问题",
          ar: "سؤال",
          ko: "질문"
        },
        sentence: {
          en: "I have a question.",
          fa: "من یک سوال دارم.",
          fr: "J'ai une question.",
          de: "Ich habe eine Frage.",
          it: "Ho una domanda.",
          es: "Tengo una pregunta.",
          ru: "У меня есть вопрос.",
          zh: "我有个问题。",
          ar: "لدي سؤال.",
          ko: "질문이 있습니다."
        }
      },
      {
        id: "answer",
        word: {
          en: "Answer",
          fa: "جواب",
          fr: "Réponse",
          de: "Antwort",
          it: "Risposta",
          es: "Respuesta",
          ru: "Ответ",
          zh: "答案",
          ar: "إجابة",
          ko: "대답"
        },
        sentence: {
          en: "What is the answer?",
          fa: "جواب چیست؟",
          fr: "Quelle est la réponse ?",
          de: "Was ist die Antwort?",
          it: "Qual è la risposta?",
          es: "¿Cuál es la respuesta?",
          ru: "Какой ответ?",
          zh: "答案是什么？",
          ar: "ما هي الإجابة؟",
          ko: "대답은 무엇입니까?"
        }
      },
      {
        id: "learn",
        word: {
          en: "Learn",
          fa: "یاد گرفتن",
          fr: "Apprendre",
          de: "Lernen",
          it: "Imparare",
          es: "Aprender",
          ru: "Учиться",
          zh: "学习",
          ar: "تعلم",
          ko: "배우다"
        },
        sentence: {
          en: "I want to learn English.",
          fa: "من می‌خواهم انگلیسی یاد بگیرم.",
          fr: "Je veux apprendre l'anglais.",
          de: "Ich möchte Englisch lernen.",
          it: "Voglio imparare l'inglese.",
          es: "Quiero aprender inglés.",
          ru: "Я хочу выучить английский.",
          zh: "我想学英语。",
          ar: "أريد تعلم الإنجليزية.",
          ko: "나는 영어를 배우고 싶습니다."
        }
      },
      {
        id: "hospital",
        word: {
          en: "Hospital",
          fa: "بیمارستان",
          fr: "Hôpital",
          de: "Krankenhaus",
          it: "Ospedale",
          es: "Hospital",
          ru: "Больница",
          zh: "医院",
          ar: "مستشفى",
          ko: "병원"
        },
        sentence: {
          en: "Go to the hospital.",
          fa: "به بیمارستان برو.",
          fr: "Va à l'hôpital.",
          de: "Geh ins Krankenhaus.",
          it: "Vai all'ospedale.",
          es: "Ve al hospital.",
          ru: "Иди в больницу.",
          zh: "去医院。",
          ar: "اذهب إلى المستشفى.",
          ko: "병원에 가세요."
        }
      },
      {
        id: "headache",
        word: {
          en: "Headache",
          fa: "سردرد",
          fr: "Mal de tête",
          de: "Kopfschmerzen",
          it: "Mal di testa",
          es: "Dolor de cabeza",
          ru: "Головная боль",
          zh: "头痛",
          ar: "صداع",
          ko: "두통"
        },
        sentence: {
          en: "I have a headache.",
          fa: "من سردرد دارم.",
          fr: "J'ai mal à la tête.",
          de: "Ich habe Kopfschmerzen.",
          it: "Ho mal di testa.",
          es: "Tengo dolor de cabeza.",
          ru: "У меня болит голова.",
          zh: "我头痛。",
          ar: "لدي صداع.",
          ko: "두통이 있습니다."
        }
      },
      {
        id: "fever",
        word: {
          en: "Fever",
          fa: "تب",
          fr: "Fièvre",
          de: "Fieber",
          it: "Febbre",
          es: "Fiebre",
          ru: "Лихорадка",
          zh: "发烧",
          ar: "حمى",
          ko: "열"
        },
        sentence: {
          en: "He has a high fever.",
          fa: "او تب بالایی دارد.",
          fr: "Il a une forte fièvre.",
          de: "Er hat hohes Fieber.",
          it: "Ha la febbre alta.",
          es: "Tiene fiebre alta.",
          ru: "У него высокая температура.",
          zh: "他发高烧。",
          ar: "لديه حمى شديدة.",
          ko: "그는 고열이 있습니다."
        }
      },
      {
        id: "pharmacy",
        word: {
          en: "Pharmacy",
          fa: "داروخانه",
          fr: "Pharmacie",
          de: "Apotheke",
          it: "Farmacia",
          es: "Farmacia",
          ru: "Аптека",
          zh: "药房",
          ar: "صيدلية",
          ko: "약국"
        },
        sentence: {
          en: "Where is the pharmacy?",
          fa: "داروخانه کجاست؟",
          fr: "Où est la pharmacie ?",
          de: "Wo ist die Apotheke?",
          it: "Dov'è la farmacia?",
          es: "¿Dónde está la farmacia?",
          ru: "Где аптека?",
          zh: "药房在哪里？",
          ar: "أين الصيدلية؟",
          ko: "약국은 어디있습니까?"
        }
      },
      {
        id: "body",
        word: {
          en: "Body",
          fa: "بدن",
          fr: "Corps",
          de: "Körper",
          it: "Corpo",
          es: "Cuerpo",
          ru: "Тело",
          zh: "身体",
          ar: "جسم",
          ko: "신체"
        },
        sentence: {
          en: "Take care of your body.",
          fa: "مراقب بدنت باش.",
          fr: "Prends soin de ton corps.",
          de: "Pass auf deinen Körper auf.",
          it: "Prenditi cura del tuo corpo.",
          es: "Cuida tu cuerpo.",
          ru: "Береги свое тело.",
          zh: "照顾好你的身体。",
          ar: "اعتني بجسمك.",
          ko: "몸조심하세요."
        }
      },
      {
        id: "hand",
        word: {
          en: "Hand",
          fa: "دست",
          fr: "Main",
          de: "Hand",
          it: "Mano",
          es: "Mano",
          ru: "Рука",
          zh: "手",
          ar: "يد",
          ko: "손"
        },
        sentence: {
          en: "Wash your hands.",
          fa: "دست‌هایت را بشوی.",
          fr: "Lave tes mains.",
          de: "Wasch deine Hände.",
          it: "Lavati le mani.",
          es: "Lávate las manos.",
          ru: "Помой руки.",
          zh: "洗手。",
          ar: "اغسل يديك.",
          ko: "손을 씻으세요."
        }
      },
      {
        id: "foot",
        word: {
          en: "Foot",
          fa: "پا",
          fr: "Pied",
          de: "Fuß",
          it: "Piede",
          es: "Pie",
          ru: "Нога",
          zh: "脚",
          ar: "قدم",
          ko: "발"
        },
        sentence: {
          en: "My foot hurts.",
          fa: "پایم درد می‌کند.",
          fr: "J'ai mal au pied.",
          de: "Mein Fuß tut weh.",
          it: "Mi fa male il piede.",
          es: "Me duele el pie.",
          ru: "У меня болит нога.",
          zh: "我的脚疼。",
          ar: "قدمي تؤلمني.",
          ko: "발이 아픕니다."
        }
      },
      {
        id: "eye",
        word: {
          en: "Eye",
          fa: "چشم",
          fr: "Œil",
          de: "Auge",
          it: "Occhio",
          es: "Ojo",
          ru: "Глаз",
          zh: "眼睛",
          ar: "عين",
          ko: "눈"
        },
        sentence: {
          en: "Close your eyes.",
          fa: "چشمانت را ببند.",
          fr: "Ferme les yeux.",
          de: "Schließ deine Augen.",
          it: "Chiudi gli occhi.",
          es: "Cierra los ojos.",
          ru: "Закрой глаза.",
          zh: "闭上眼睛。",
          ar: "أغلق عينيك.",
          ko: "눈을 감으세요."
        }
      },
      {
        id: "emergency",
        word: {
          en: "Emergency",
          fa: "اورژانس",
          fr: "Urgence",
          de: "Notfall",
          it: "Emergenza",
          es: "Emergencia",
          ru: "Чрезвычайная ситуация",
          zh: "紧急情况",
          ar: "طوارئ",
          ko: "비상"
        },
        sentence: {
          en: "This is an emergency.",
          fa: "این یک مورد اضطراری است.",
          fr: "C'est une urgence.",
          de: "Das ist ein Notfall.",
          it: "Questa è un'emergenza.",
          es: "Esta es una emergencia.",
          ru: "Это чрезвычайная ситуация.",
          zh: "这是紧急情况。",
          ar: "هذه حالة طوارئ.",
          ko: "이것은 비상 상황입니다."
        }
      },
      {
        id: "healthy",
        word: {
          en: "Healthy",
          fa: "سالم",
          fr: "Sain",
          de: "Gesund",
          it: "Sano",
          es: "Saludable",
          ru: "Здоровый",
          zh: "健康",
          ar: "صحي",
          ko: "건강한"
        },
        sentence: {
          en: "Eat healthy food.",
          fa: "غذای سالم بخور.",
          fr: "Mange de la nourriture saine.",
          de: "Iss gesundes Essen.",
          it: "Mangia cibo sano.",
          es: "Come comida saludable.",
          ru: "Ешь здоровую пищу.",
          zh: "吃健康的食物。",
          ar: "تناول طعاماً صحياً.",
          ko: "건강한 음식을 드세요."
        }
      },
      {
        id: "world",
        word: {
          en: "World",
          fa: "جهان",
          fr: "Monde",
          de: "Welt",
          it: "Mondo",
          es: "Mundo",
          ru: "Мир",
          zh: "世界",
          ar: "عالم",
          ko: "세계"
        },
        sentence: {
          en: "The world is round.",
          fa: "زمین گرد است.",
          fr: "Le monde est rond.",
          de: "Die Welt ist rund.",
          it: "Il mondo è rotondo.",
          es: "El mundo es redondo.",
          ru: "Мир круглый.",
          zh: "世界是圆的。",
          ar: "العالم كروي.",
          ko: "세계는 둥글다."
        }
      },
      {
        id: "flower",
        word: {
          en: "Flower",
          fa: "گل",
          fr: "Fleur",
          de: "Blume",
          it: "Fiore",
          es: "Flor",
          ru: "Цветок",
          zh: "花",
          ar: "زهرة",
          ko: "꽃"
        },
        sentence: {
          en: "This flower is beautiful.",
          fa: "این گل زیباست.",
          fr: "Cette fleur est belle.",
          de: "Diese Blume ist schön.",
          it: "Questo fiore è bello.",
          es: "Esta flor es hermosa.",
          ru: "Этот цветок красивый.",
          zh: "这朵花很美。",
          ar: "هذه الزهرة جميلة.",
          ko: "이 꽃은 아름답습니다."
        }
      },
      {
        id: "tree",
        word: {
          en: "Tree",
          fa: "درخت",
          fr: "Arbre",
          de: "Baum",
          it: "Albero",
          es: "Árbol",
          ru: "Дерево",
          zh: "树",
          ar: "شجرة",
          ko: "나무"
        },
        sentence: {
          en: "The tree is tall.",
          fa: "درخت بلند است.",
          fr: "L'arbre est grand.",
          de: "Der Baum ist hoch.",
          it: "L'albero è alto.",
          es: "El árbol es alto.",
          ru: "Дерево высокое.",
          zh: "树很高。",
          ar: "الشجرة طويلة.",
          ko: "나무가 높습니다."
        }
      },
      {
        id: "animal",
        word: {
          en: "Animal",
          fa: "حیوان",
          fr: "Animal",
          de: "Tier",
          it: "Animale",
          es: "Animal",
          ru: "Животное",
          zh: "动物",
          ar: "حيوان",
          ko: "동물"
        },
        sentence: {
          en: "I like animals.",
          fa: "من حیوانات را دوست دارم.",
          fr: "J'aime les animaux.",
          de: "Ich mag Tiere.",
          it: "Mi piacciono gli animali.",
          es: "Me gustan los animales.",
          ru: "Я люблю животных.",
          zh: "我喜欢动物。",
          ar: "أحب الحيوانات.",
          ko: "나는 동물을 좋아합니다."
        }
      },
      {
        id: "dog",
        word: {
          en: "Dog",
          fa: "سگ",
          fr: "Chien",
          de: "Hund",
          it: "Cane",
          es: "Perro",
          ru: "Собака",
          zh: "狗",
          ar: "كلب",
          ko: "개"
        },
        sentence: {
          en: "The dog is barking.",
          fa: "سگ پارس می‌کند.",
          fr: "Le chien aboie.",
          de: "Der Hund bellt.",
          it: "Il cane abbaia.",
          es: "El perro está ladrando.",
          ru: "Собака лает.",
          zh: "狗在叫。",
          ar: "الكلب ينبح.",
          ko: "개가 짖고 있습니다."
        }
      },
      {
        id: "cat",
        word: {
          en: "Cat",
          fa: "گربه",
          fr: "Chat",
          de: "Katze",
          it: "Gatto",
          es: "Gato",
          ru: "Кошка",
          zh: "猫",
          ar: "قطة",
          ko: "고양이"
        },
        sentence: {
          en: "The cat is sleeping.",
          fa: "گربه خوابیده است.",
          fr: "Le chat dort.",
          de: "Die Katze schläft.",
          it: "Il gatto sta dormendo.",
          es: "El gato está durmiendo.",
          ru: "Кошка спит.",
          zh: "猫在睡觉。",
          ar: "القطة نائمة.",
          ko: "고양이가 자고 있습니다."
        }
      },
      {
        id: "bird",
        word: {
          en: "Bird",
          fa: "پرنده",
          fr: "Oiseau",
          de: "Vogel",
          it: "Uccello",
          es: "Pájaro",
          ru: "Птица",
          zh: "鸟",
          ar: "طائر",
          ko: "새"
        },
        sentence: {
          en: "Look at that bird.",
          fa: "به آن پرنده نگاه کن.",
          fr: "Regarde cet oiseau.",
          de: "Schau dir diesen Vogel an.",
          it: "Guarda quell'uccello.",
          es: "Mira ese pájaro.",
          ru: "Посмотри на ту птицу.",
          zh: "看那只鸟。",
          ar: "انظر إلى ذلك الطائر.",
          ko: "저 새를 보세요."
        }
      },
      {
        id: "sun",
        word: {
          en: "Sun",
          fa: "خورشید",
          fr: "Soleil",
          de: "Sonne",
          it: "Sole",
          es: "Sol",
          ru: "Солнце",
          zh: "太阳",
          ar: "شمس",
          ko: "태양"
        },
        sentence: {
          en: "The sun is shining.",
          fa: "خورشید می‌درخشد.",
          fr: "Le soleil brille.",
          de: "Die Sonne scheint.",
          it: "Il sole splende.",
          es: "El sol brilla.",
          ru: "Солнце светит.",
          zh: "阳光普照。",
          ar: "الشمس مشرقة.",
          ko: "태양이 빛나고 있습니다."
        }
      },
      {
        id: "moon",
        word: {
          en: "Moon",
          fa: "ماه",
          fr: "Lune",
          de: "Mond",
          it: "Luna",
          es: "Luna",
          ru: "Луна",
          zh: "月亮",
          ar: "قمر",
          ko: "달"
        },
        sentence: {
          en: "Look at the moon.",
          fa: "به ماه نگاه کن.",
          fr: "Regarde la lune.",
          de: "Schau dir den Mond an.",
          it: "Guarda la luna.",
          es: "Mira la luna.",
          ru: "Посмотри на луну.",
          zh: "看月亮。",
          ar: "انظر إلى القمر.",
          ko: "달을 보세요."
        }
      },
      {
        id: "star",
        word: {
          en: "Star",
          fa: "ستاره",
          fr: "Étoile",
          de: "Stern",
          it: "Stella",
          es: "Estrella",
          ru: "Звезда",
          zh: "星星",
          ar: "نجم",
          ko: "별"
        },
        sentence: {
          en: "The stars are bright.",
          fa: "ستارگان درخشان هستند.",
          fr: "Les étoiles sont brillantes.",
          de: "Die Sterne sind hell.",
          it: "Le stelle sono luminose.",
          es: "Las estrellas son brillantes.",
          ru: "Звезды яркие.",
          zh: "星星很亮。",
          ar: "النجوم لامعة.",
          ko: "별이 밝습니다."
        }
      },
      {
        id: "market",
        word: {
          en: "Market",
          fa: "بازار",
          fr: "Marché",
          de: "Markt",
          it: "Mercato",
          es: "Mercado",
          ru: "Рынок",
          zh: "市场",
          ar: "سوق",
          ko: "시장"
        },
        sentence: {
          en: "Go to the market.",
          fa: "به بازار برو.",
          fr: "Va au marché.",
          de: "Geh auf den Markt.",
          it: "Vai al mercato.",
          es: "Ve al mercado.",
          ru: "Иди на рынок.",
          zh: "去市场。",
          ar: "اذهب إلى السوق.",
          ko: "시장에 가세요."
        }
      },
      {
        id: "shop",
        word: {
          en: "Shop",
          fa: "مغازه",
          fr: "Magasin",
          de: "Geschäft",
          it: "Negozio",
          es: "Tienda",
          ru: "Магазин",
          zh: "商店",
          ar: "دكان",
          ko: "가게"
        },
        sentence: {
          en: "The shop is closed.",
          fa: "مغازه بسته است.",
          fr: "Le magasin est fermé.",
          de: "Das Geschäft ist geschlossen.",
          it: "Il negozio è chiuso.",
          es: "La tienda está cerrada.",
          ru: "Магазин закрыт.",
          zh: "商店关门了。",
          ar: "المحل مغلق.",
          ko: "가게가 문을 닫았습니다."
        }
      },
      {
        id: "money_cash",
        word: {
          en: "Cash",
          fa: "پول نقد",
          fr: "Espèces",
          de: "Bargeld",
          it: "Contanti",
          es: "Efectivo",
          ru: "Наличные",
          zh: "现金",
          ar: "نقد",
          ko: "현금"
        },
        sentence: {
          en: "I pay with cash.",
          fa: "من با پول نقد پرداخت می‌کنم.",
          fr: "Je paie en espèces.",
          de: "Ich zahle bar.",
          it: "Pago in contanti.",
          es: "Pago en efectivo.",
          ru: "Я плачу наличными.",
          zh: "我付现金。",
          ar: "أدفع نقداً.",
          ko: "현금으로 지불합니다."
        }
      },
      {
        id: "card",
        word: {
          en: "Card",
          fa: "کارت",
          fr: "Carte",
          de: "Karte",
          it: "Carta",
          es: "Tarjeta",
          ru: "Карта",
          zh: "卡",
          ar: "بطاقة",
          ko: "카드"
        },
        sentence: {
          en: "Do you accept cards?",
          fa: "آیا کارت قبول می‌کنید؟",
          fr: "Acceptez-vous les cartes ?",
          de: "Akzeptieren Sie Karten?",
          it: "Accettate carte?",
          es: "¿Aceptan tarjetas?",
          ru: "Вы принимаете карты?",
          zh: "你收卡吗？",
          ar: "هل تقبل البطاقات؟",
          ko: "카드를 받습니까?"
        }
      },
      {
        id: "bag",
        word: {
          en: "Bag",
          fa: "کیف",
          fr: "Sac",
          de: "Tasche",
          it: "Borsa",
          es: "Bolso",
          ru: "Сумка",
          zh: "包",
          ar: "حقيبة",
          ko: "가방"
        },
        sentence: {
          en: "Is this your bag?",
          fa: "آیا این کیف شماست؟",
          fr: "Est-ce votre sac ?",
          de: "Ist das Ihre Tasche?",
          it: "È questa la tua borsa?",
          es: "¿Es este tu bolso?",
          ru: "Это ваша сумка?",
          zh: "这是你的包吗？",
          ar: "هل هذه حقيبتك؟",
          ko: "이것은 당신의 가방입니까?"
        }
      },
      {
        id: "dress",
        word: {
          en: "Dress",
          fa: "لباس زنانه",
          fr: "Robe",
          de: "Kleid",
          it: "Vestito",
          es: "Vestido",
          ru: "Платье",
          zh: "连衣裙",
          ar: "فستان",
          ko: "드레스"
        },
        sentence: {
          en: "She wears a dress.",
          fa: "او پیراهن زنانه می‌پوشد.",
          fr: "Elle porte une robe.",
          de: "Sie trägt ein Kleid.",
          it: "Lei indossa un vestito.",
          es: "Ella lleva un vestido.",
          ru: "Она носит платье.",
          zh: "她穿连衣裙。",
          ar: "هي ترتدي فستاناً.",
          ko: "그녀는 드레스를 입습니다."
        }
      },
      {
        id: "hat",
        word: {
          en: "Hat",
          fa: "کلاه",
          fr: "Chapeau",
          de: "Hut",
          it: "Cappello",
          es: "Sombrero",
          ru: "Шляпа",
          zh: "帽子",
          ar: "قبعة",
          ko: "모자"
        },
        sentence: {
          en: "Put on your hat.",
          fa: "کلاهت را سرت کن.",
          fr: "Mets ton chapeau.",
          de: "Setz deinen Hut auf.",
          it: "Mettiti il cappello.",
          es: "Ponte el sombrero.",
          ru: "Надень шляпу.",
          zh: "戴上你的帽子。",
          ar: "ارتد قبعتك.",
          ko: "모자를 쓰세요."
        }
      },
      {
        id: "coat",
        word: {
          en: "Coat",
          fa: "کت/پالتو",
          fr: "Manteau",
          de: "Mantel",
          it: "Cappotto",
          es: "Abrigo",
          ru: "Пальто",
          zh: "外套",
          ar: "معطف",
          ko: "코트"
        },
        sentence: {
          en: "It is cold, wear a coat.",
          fa: "سرد است، پالتو بپوش.",
          fr: "Il fait froid, porte un manteau.",
          de: "Es ist kalt, trag einen Mantel.",
          it: "Fa freddo, indossa un cappotto.",
          es: "Hace frío, usa un abrigo.",
          ru: "Холодно, надень пальто.",
          zh: "天冷，穿件外套。",
          ar: "الجو بارد، ارتد معطفاً.",
          ko: "추우니 코트를 입으세요."
        }
      },
      {
        id: "restaurant",
        word: {
          en: "Restaurant",
          fa: "رستوران",
          fr: "Restaurant",
          de: "Restaurant",
          it: "Ristorante",
          es: "Restaurante",
          ru: "Ресторан",
          zh: "餐厅",
          ar: "مطعم",
          ko: "식당"
        },
        sentence: {
          en: "Let's eat at a restaurant.",
          fa: "بیایید در رستوران غذا بخوریم.",
          fr: "Mangeons au restaurant.",
          de: "Lass uns im Restaurant essen.",
          it: "Mangiamo al ristorante.",
          es: "Vamos a comer a un restaurante.",
          ru: "Давай поедим в ресторане.",
          zh: "我们在餐厅吃饭吧。",
          ar: "لنأكل في مطعم.",
          ko: "식당에서 먹읍시다."
        }
      },
      {
        id: "menu",
        word: {
          en: "Menu",
          fa: "منو",
          fr: "Menu",
          de: "Speisekarte",
          it: "Menu",
          es: "Menú",
          ru: "Меню",
          zh: "菜单",
          ar: "قائمة طعام",
          ko: "메뉴"
        },
        sentence: {
          en: "Can I see the menu?",
          fa: "میتوانم منو را ببینم؟",
          fr: "Puis-je voir le menu ?",
          de: "Kann ich die Speisekarte sehen?",
          it: "Posso vedere il menu?",
          es: "¿Puedo ver el menú?",
          ru: "Можно посмотреть меню?",
          zh: "我看下菜单可以吗？",
          ar: "هل يمكنني رؤية قائمة الطعام؟",
          ko: "메뉴 좀 볼 수 있나요?"
        }
      },
      {
        id: "meat",
        word: {
          en: "Meat",
          fa: "گوشت",
          fr: "Viande",
          de: "Fleisch",
          it: "Carne",
          es: "Carne",
          ru: "Мясо",
          zh: "肉",
          ar: "لحم",
          ko: "고기"
        },
        sentence: {
          en: "I don't eat meat.",
          fa: "من گوشت نمی‌خورم.",
          fr: "Je ne mange pas de viande.",
          de: "Ich esse kein Fleisch.",
          it: "Non mangio carne.",
          es: "No como carne.",
          ru: "Я не ем мясо.",
          zh: "我不吃肉。",
          ar: "أنا لا آكل اللحم.",
          ko: "나는 고기를 먹지 않습니다."
        }
      },
      {
        id: "fish",
        word: {
          en: "Fish",
          fa: "ماهی",
          fr: "Poisson",
          de: "Fisch",
          it: "Pesce",
          es: "Pescado",
          ru: "Рыба",
          zh: "鱼",
          ar: "سمك",
          ko: "물고기"
        },
        sentence: {
          en: "Fish swims in water.",
          fa: "ماهی در آب شنا می‌کند.",
          fr: "Le poisson nage dans l'eau.",
          de: "Fische schwimmen im Wasser.",
          it: "Il pesce nuota nell'acqua.",
          es: "El pez nada en el agua.",
          ru: "Рыба плавает в воде.",
          zh: "鱼在水里游。",
          ar: "السمك يسبح في الماء.",
          ko: "물고기는 물에서 수영합니다."
        }
      },
      {
        id: "vegetable",
        word: {
          en: "Vegetable",
          fa: "سبزیجات",
          fr: "Légume",
          de: "Gemüse",
          it: "Verdura",
          es: "Vegetal",
          ru: "Овощ",
          zh: "蔬菜",
          ar: "خضار",
          ko: "야채"
        },
        sentence: {
          en: "Eat your vegetables.",
          fa: "سبزیجاتت را بخور.",
          fr: "Mange tes légumes.",
          de: "Iss dein Gemüse.",
          it: "Mangia la tua verdura.",
          es: "Come tus vegetales.",
          ru: "Ешь овощи.",
          zh: "吃蔬菜。",
          ar: "كل خضرواتك.",
          ko: "야채를 드세요."
        }
      },
      {
        id: "fruit",
        word: {
          en: "Fruit",
          fa: "میوه",
          fr: "Fruit",
          de: "Obst",
          it: "Frutta",
          es: "Fruta",
          ru: "Фрукт",
          zh: "水果",
          ar: "فاكهة",
          ko: "과일"
        },
        sentence: {
          en: "Fresh fruit is healthy.",
          fa: "میوه تازه سالم است.",
          fr: "Les fruits frais sont sains.",
          de: "Frisches Obst ist gesund.",
          it: "La frutta fresca è sana.",
          es: "La fruta fresca es saludable.",
          ru: "Свежие фрукты полезны.",
          zh: "新鲜水果很健康。",
          ar: "الفاكهة الطازجة صحية.",
          ko: "신선한 과일은 건강에 좋습니다."
        }
      },
      {
        id: "coffee",
        word: {
          en: "Coffee",
          fa: "قهوه",
          fr: "Café",
          de: "Kaffee",
          it: "Caffè",
          es: "Café",
          ru: "Кофе",
          zh: "咖啡",
          ar: "قهوة",
          ko: "커피"
        },
        sentence: {
          en: "I drink coffee in the morning.",
          fa: "من صبح‌ها قهوه می‌نوشم.",
          fr: "Je bois du café le matin.",
          de: "Ich trinke morgens Kaffee.",
          it: "Bevo caffè la mattina.",
          es: "Bebo café por la mañana.",
          ru: "Я пью кофе по утрам.",
          zh: "我早上喝咖啡。",
          ar: "أشرب القهوة في الصباح.",
          ko: "나는 아침에 커피를 마십니다."
        }
      },
      {
        id: "tea",
        word: {
          en: "Tea",
          fa: "چای",
          fr: "Thé",
          de: "Tee",
          it: "Tè",
          es: "Té",
          ru: "Чай",
          zh: "茶",
          ar: "شاي",
          ko: "차"
        },
        sentence: {
          en: "Would you like some tea?",
          fa: "چای میل دارید؟",
          fr: "Voulez-vous du thé ?",
          de: "Möchten Sie Tee?",
          it: "Vuoi del tè?",
          es: "¿Quieres té?",
          ru: "Хотите чаю?",
          zh: "你想喝茶吗？",
          ar: "هل تريد بعض الشاي؟",
          ko: "차 드시겠어요?"
        }
      },
      {
        id: "sugar",
        word: {
          en: "Sugar",
          fa: "شکر",
          fr: "Sucre",
          de: "Zucker",
          it: "Zucchero",
          es: "Azúcar",
          ru: "Сахар",
          zh: "糖",
          ar: "سكر",
          ko: "설탕"
        },
        sentence: {
          en: "No sugar, please.",
          fa: "بدون شکر، لطفا.",
          fr: "Pas de sucre, s'il vous plaît.",
          de: "Kein Zucker, bitte.",
          it: "Niente zucchero, per favore.",
          es: "Sin azúcar, por favor.",
          ru: "Без сахара, пожалуйста.",
          zh: "不要糖，谢谢。",
          ar: "بدون سكر من فضلك.",
          ko: "설탕은 빼주세요."
        }
      },
      {
        id: "salt",
        word: {
          en: "Salt",
          fa: "نمک",
          fr: "Sel",
          de: "Salz",
          it: "Sale",
          es: "Sal",
          ru: "Соль",
          zh: "盐",
          ar: "ملح",
          ko: "소금"
        },
        sentence: {
          en: "Pass me the salt.",
          fa: "نمک را به من بده.",
          fr: "Passe-moi le sel.",
          de: "Gib mir das Salz.",
          it: "Passami il sale.",
          es: "Pásame la sal.",
          ru: "Передай мне соль.",
          zh: "把盐递给我。",
          ar: "مرر لي الملح.",
          ko: "소금 좀 주세요."
        }
      },
      {
        id: "kitchen",
        word: {
          en: "Kitchen",
          fa: "آشپزخانه",
          fr: "Cuisine",
          de: "Küche",
          it: "Cucina",
          es: "Cocina",
          ru: "Кухня",
          zh: "厨房",
          ar: "مطبخ",
          ko: "부엌"
        },
        sentence: {
          en: "The kitchen is clean.",
          fa: "آشپزخانه تمیز است.",
          fr: "La cuisine est propre.",
          de: "Die Küche ist sauber.",
          it: "La cucina è pulita.",
          es: "La cocina está limpia.",
          ru: "Кухня чистая.",
          zh: "厨房很干净。",
          ar: "المطبخ نظيف.",
          ko: "부엌은 깨끗합니다."
        }
      },
      {
        id: "bedroom",
        word: {
          en: "Bedroom",
          fa: "اتاق خواب",
          fr: "Chambre à coucher",
          de: "Schlafzimmer",
          it: "Camera da letto",
          es: "Dormitorio",
          ru: "Спальня",
          zh: "卧室",
          ar: "غرفة النوم",
          ko: "침실"
        },
        sentence: {
          en: "My bedroom is large.",
          fa: "اتاق خواب من بزرگ است.",
          fr: "Ma chambre est grande.",
          de: "Mein Schlafzimmer ist groß.",
          it: "La mia camera da letto è grande.",
          es: "Mi dormitorio es grande.",
          ru: "Моя спальня большая.",
          zh: "我的卧室很大。",
          ar: "غرفة نومي كبيرة.",
          ko: "내 침실은 큽니다."
        }
      },
      {
        id: "bathroom",
        word: {
          en: "Bathroom",
          fa: "حمام",
          fr: "Salle de bain",
          de: "Badezimmer",
          it: "Bagno",
          es: "Baño",
          ru: "Ванная",
          zh: "浴室",
          ar: "حمام",
          ko: "욕실"
        },
        sentence: {
          en: "The bathroom has a shower.",
          fa: "حمام دوش دارد.",
          fr: "La salle de bain a une douche.",
          de: "Das Badezimmer hat eine Dusche.",
          it: "Il bagno ha una doccia.",
          es: "El baño tiene ducha.",
          ru: "В ванной есть душ.",
          zh: "浴室有淋浴。",
          ar: "الحمام به دش.",
          ko: "욕실에는 샤워실이 있습니다."
        }
      },
      {
        id: "living_room",
        word: {
          en: "Living room",
          fa: "پذیرایی",
          fr: "Salon",
          de: "Wohnzimmer",
          it: "Soggiorno",
          es: "Sala de estar",
          ru: "Гостиная",
          zh: "客厅",
          ar: "غرفة المعيشة",
          ko: "거실"
        },
        sentence: {
          en: "We watch TV in the living room.",
          fa: "ما در پذیرایی تلویزیون تماشا می‌کنیم.",
          fr: "Nous regardons la télé dans le salon.",
          de: "Wir sehen im Wohnzimmer fern.",
          it: "Guardiamo la TV nel soggiorno.",
          es: "Vemos la televisión en la sala.",
          ru: "Мы смотрим телевизор в гостиной.",
          zh: "我们在客厅看电视。",
          ar: "نشاهد التلفاز في غرفة المعيشة.",
          ko: "우리는 거실에서 TV를 봅니다."
        }
      },
      {
        id: "bed",
        word: {
          en: "Bed",
          fa: "تخت",
          fr: "Lit",
          de: "Bett",
          it: "Letto",
          es: "Cama",
          ru: "Кровать",
          zh: "床",
          ar: "سرير",
          ko: "침대"
        },
        sentence: {
          en: "The bed is comfortable.",
          fa: "تخت راحت است.",
          fr: "Le lit est confortable.",
          de: "Das Bett ist bequem.",
          it: "Il letto è comodo.",
          es: "La cama es cómoda.",
          ru: "Кровать удобная.",
          zh: "床很舒服。",
          ar: "السرير مريح.",
          ko: "침대는 편안합니다."
        }
      },
      {
        id: "table",
        word: {
          en: "Table",
          fa: "میز",
          fr: "Table",
          de: "Tisch",
          it: "Tavolo",
          es: "Mesa",
          ru: "Стол",
          zh: "桌子",
          ar: "طاولة",
          ko: "탁자"
        },
        sentence: {
          en: "Put it on the table.",
          fa: "آن را روی میز بگذار.",
          fr: "Mets-le sur la table.",
          de: "Leg es auf den Tisch.",
          it: "Mettilo sul tavolo.",
          es: "Ponlo en la mesa.",
          ru: "Положи это на стол.",
          zh: "把它放在桌子上。",
          ar: "ضعه على الطاولة.",
          ko: "탁자 위에 놓으세요."
        }
      },
      {
        id: "chair",
        word: {
          en: "Chair",
          fa: "صندلی",
          fr: "Chaise",
          de: "Stuhl",
          it: "Sedia",
          es: "Silla",
          ru: "Стул",
          zh: "椅子",
          ar: "كرسي",
          ko: "의자"
        },
        sentence: {
          en: "Sit on the chair.",
          fa: "روی صندلی بنشین.",
          fr: "Assieds-toi sur la chaise.",
          de: "Setz dich auf den Stuhl.",
          it: "Siediti sulla sedia.",
          es: "Siéntate en la silla.",
          ru: "Сядь на стул.",
          zh: "坐在椅子上。",
          ar: "اجلس على الكرسي.",
          ko: "의자에 앉으세요."
        }
      },
      {
        id: "sofa",
        word: {
          en: "Sofa",
          fa: "مبل",
          fr: "Canapé",
          de: "Sofa",
          it: "Divano",
          es: "Sofá",
          ru: "Диван",
          zh: "沙发",
          ar: "أريكة",
          ko: "소파"
        },
        sentence: {
          en: "The sofa is new.",
          fa: "مبل نو است.",
          fr: "Le canapé est neuf.",
          de: "Das Sofa ist neu.",
          it: "Il divano è nuovo.",
          es: "El sofá es nuevo.",
          ru: "Диван новый.",
          zh: "沙发是新的。",
          ar: "الأريكة جديدة.",
          ko: "소파는 새것입니다."
        }
      },
      {
        id: "bicycle",
        word: {
          en: "Bicycle",
          fa: "دوچرخه",
          fr: "Vélo",
          de: "Fahrrad",
          it: "Bicicletta",
          es: "Bicicleta",
          ru: "Велосипед",
          zh: "自行车",
          ar: "دراجة",
          ko: "자전거"
        },
        sentence: {
          en: "I ride a bicycle.",
          fa: "من دوچرخه‌سواری می‌کنم.",
          fr: "Je fais du vélo.",
          de: "Ich fahre Fahrrad.",
          it: "Vado in bicicletta.",
          es: "Monto en bicicleta.",
          ru: "Я катаюсь на велосипеде.",
          zh: "我骑自行车。",
          ar: "أركب دراجة.",
          ko: "나는 자전거를 탑니다."
        }
      },
      {
        id: "taxi",
        word: {
          en: "Taxi",
          fa: "تاکسی",
          fr: "Taxi",
          de: "Taxi",
          it: "Taxi",
          es: "Taxi",
          ru: "Такси",
          zh: "出租车",
          ar: "تاكسي",
          ko: "택시"
        },
        sentence: {
          en: "Take a taxi.",
          fa: "تاکسی بگیر.",
          fr: "Prends un taxi.",
          de: "Nimm ein Taxi.",
          it: "Prendi un taxi.",
          es: "Toma un taxi.",
          ru: "Возьми такси.",
          zh: "坐出租车。",
          ar: "خذ تاكسي.",
          ko: "택시를 타세요."
        }
      },
      {
        id: "boat",
        word: {
          en: "Boat",
          fa: "قایق",
          fr: "Bateau",
          de: "Boot",
          it: "Barca",
          es: "Barco",
          ru: "Лодка",
          zh: "船",
          ar: "قارب",
          ko: "보트"
        },
        sentence: {
          en: "The boat is on the water.",
          fa: "قایق روی آب است.",
          fr: "Le bateau est sur l'eau.",
          de: "Das Boot ist auf dem Wasser.",
          it: "La barca è sull'acqua.",
          es: "El barco está en el agua.",
          ru: "Лодка на воде.",
          zh: "船在水上。",
          ar: "القارب في الماء.",
          ko: "보트는 물 위에 있습니다."
        }
      },
      {
        id: "road",
        word: {
          en: "Road",
          fa: "جاده",
          fr: "Route",
          de: "Straße",
          it: "Strada",
          es: "Carretera",
          ru: "Дорога",
          zh: "路",
          ar: "طريق",
          ko: "도로"
        },
        sentence: {
          en: "The road is long.",
          fa: "جاده طولانی است.",
          fr: "La route est longue.",
          de: "Die Straße ist lang.",
          it: "La strada è lunga.",
          es: "La carretera es larga.",
          ru: "Дорога длинная.",
          zh: "路很长。",
          ar: "الطريق طويل.",
          ko: "도로는 깁니다."
        }
      },
      {
        id: "station",
        word: {
          en: "Station",
          fa: "ایستگاه",
          fr: "Gare",
          de: "Bahnhof",
          it: "Stazione",
          es: "Estación",
          ru: "Станция",
          zh: "站",
          ar: "محطة",
          ko: "역"
        },
        sentence: {
          en: "Meet me at the station.",
          fa: "مرا در ایستگاه ببین.",
          fr: "Retrouve-moi à la gare.",
          de: "Triff mich am Bahnhof.",
          it: "Incontrami alla stazione.",
          es: "Encuéntrame en la estación.",
          ru: "Встретимся на станции.",
          zh: "在车站见我。",
          ar: "قابلني في المحطة.",
          ko: "역에서 만나요."
        }
      },
      {
        id: "afraid",
        word: {
          en: "Afraid",
          fa: "ترسیده",
          fr: "Peur",
          de: "Angst",
          it: "Paura",
          es: "Miedo",
          ru: "Испуганный",
          zh: "害怕",
          ar: "خائف",
          ko: "두려운"
        },
        sentence: {
          en: "Don't be afraid.",
          fa: "نترس.",
          fr: "N'aie pas peur.",
          de: "Hab keine Angst.",
          it: "Non avere paura.",
          es: "No tengas miedo.",
          ru: "Не бойся.",
          zh: "别害怕。",
          ar: "لا تخف.",
          ko: "두려워하지 마세요."
        }
      },
      {
        id: "bored",
        word: {
          en: "Bored",
          fa: "بی‌حوصله",
          fr: "Ennuyé",
          de: "Gelangweilt",
          it: " annoiato",
          es: "Aburrido",
          ru: "Скучающий",
          zh: "无聊",
          ar: "ضجر",
          ko: "지루한"
        },
        sentence: {
          en: "I am bored.",
          fa: "حوصله‌ام سر رفته.",
          fr: "Je m'ennuie.",
          de: "Ich bin gelangweilt.",
          it: "Sono annoiato.",
          es: "Estoy aburrido.",
          ru: "Мне скучно.",
          zh: "我很无聊。",
          ar: "أشعر بالملل.",
          ko: "나는 지루합니다."
        }
      },
      {
        id: "excited",
        word: {
          en: "Excited",
          fa: "هیجان‌زده",
          fr: "Excité",
          de: "Aufgeregt",
          it: "Eccitato",
          es: "Emocionado",
          ru: "Взволнованный",
          zh: "兴奋",
          ar: "متحمس",
          ko: "흥분한"
        },
        sentence: {
          en: "I am so excited.",
          fa: "من خیلی هیجان‌زده هستم.",
          fr: "Je suis tellement excité.",
          de: "Ich bin so aufgeregt.",
          it: "Sono così eccitato.",
          es: "Estoy tan emocionado.",
          ru: "Я так взволнован.",
          zh: "我太兴奋了。",
          ar: "أنا متحمس جدا.",
          ko: "나는 매우 흥분됩니다."
        }
      },
      {
        id: "love_a2",
        word: {
          en: "Love",
          fa: "عشق",
          fr: "Amour",
          de: "Liebe",
          it: "Amore",
          es: "Amor",
          ru: "Любовь",
          zh: "爱",
          ar: "حب",
          ko: "사랑"
        },
        sentence: {
          en: "Love is beautiful.",
          fa: "عشق زیباست.",
          fr: "L'amour est beau.",
          de: "Liebe ist schön.",
          it: "L'amore è bello.",
          es: "El amor es hermoso.",
          ru: "Любовь прекрасна.",
          zh: "爱是美丽的。",
          ar: "الحب جميل.",
          ko: "사랑은 아름답습니다."
        }
      },
      {
        id: "hate",
        word: {
          en: "Hate",
          fa: "نفرت",
          fr: "Haine",
          de: "Hass",
          it: "Odio",
          es: "Odio",
          ru: "Ненависть",
          zh: "恨",
          ar: "كره",
          ko: "미움"
        },
        sentence: {
          en: "Hate brings pain.",
          fa: "نفرت درد می‌آورد.",
          fr: "La haine apporte la douleur.",
          de: "Hass bringt Schmerz.",
          it: "L'odio porta dolore.",
          es: "El odio trae dolor.",
          ru: "Ненависть приносит боль.",
          zh: "恨带来痛苦。",
          ar: "الكره يجلب الألم.",
          ko: "미움은 고통을 가져옵니다."
        }
      },
      {
        id: "pen",
        word: {
          en: "Pen",
          fa: "خودکار",
          fr: "Stylo",
          de: "Stift",
          it: "Penna",
          es: "Bolígrafo",
          ru: "Ручка",
          zh: "笔",
          ar: "قلم",
          ko: "펜"
        },
        sentence: {
          en: "Can I borrow a pen?",
          fa: "می‌توانم یک خودکار قرض بگیرم؟",
          fr: "Puis-je emprunter un stylo ?",
          de: "Kann ich einen Stift leihen?",
          it: "Posso prendere in prestito una penna?",
          es: "¿Puedo pedir prestado un bolígrafo?",
          ru: "Можно одолжить ручку?",
          zh: "能借支笔吗？",
          ar: "هل يمكنني استعارة قلم؟",
          ko: "펜 좀 빌릴 수 있나요?"
        }
      },
      {
        id: "key",
        word: {
          en: "Key",
          fa: "کلید",
          fr: "Clé",
          de: "Schlüssel",
          it: "Chiave",
          es: "Llave",
          ru: "Ключ",
          zh: "钥匙",
          ar: "مفتاح",
          ko: "열쇠"
        },
        sentence: {
          en: "I lost my key.",
          fa: "من کلیدم را گم کردم.",
          fr: "J'ai perdu ma clé.",
          de: "Ich habe meinen Schlüssel verloren.",
          it: "Ho perso la mia chiave.",
          es: "Perdí mi llave.",
          ru: "Я потерял ключ.",
          zh: "我丢了钥匙。",
          ar: "فقدت مفتاحي.",
          ko: "열쇠를 잃어버렸습니다."
        }
      },
      {
        id: "clock",
        word: {
          en: "Clock",
          fa: "ساعت دیواری",
          fr: "Horloge",
          de: "Uhr",
          it: "Orologio",
          es: "Reloj",
          ru: "Часы",
          zh: "时钟",
          ar: "ساعة حائط",
          ko: "시계"
        },
        sentence: {
          en: "Look at the clock.",
          fa: "به ساعت نگاه کن.",
          fr: "Regarde l'horloge.",
          de: "Schau auf die Uhr.",
          it: "Guarda l'orologio.",
          es: "Mira el reloj.",
          ru: "Посмотри на часы.",
          zh: "看时钟。",
          ar: "انظر إلى الساعة.",
          ko: "시계를 보세요."
        }
      },
      {
        id: "picture",
        word: {
          en: "Picture",
          fa: "تصویر",
          fr: "Image",
          de: "Bild",
          it: "Immagine",
          es: "Imagen",
          ru: "Картина",
          zh: "图片",
          ar: "صورة",
          ko: "그림"
        },
        sentence: {
          en: "Take a picture.",
          fa: "یک عکس بگیر.",
          fr: "Prends une photo.",
          de: "Mach ein Foto.",
          it: "Fai una foto.",
          es: "Toma una foto.",
          ru: "Сделай фото.",
          zh: "拍张照。",
          ar: "التقط صورة.",
          ko: "사진을 찍으세요."
        }
      },
      {
        id: "music",
        word: {
          en: "Music",
          fa: "موسیقی",
          fr: "Musique",
          de: "Musik",
          it: "Musica",
          es: "Música",
          ru: "Музыка",
          zh: "音乐",
          ar: "موسيقى",
          ko: "음악"
        },
        sentence: {
          en: "I listen to music.",
          fa: "من به موسیقی گوش می‌دهم.",
          fr: "J'écoute de la musique.",
          de: "Ich höre Musik.",
          it: "Ascolto musica.",
          es: "Escucho música.",
          ru: "Я слушаю музыку.",
          zh: "我听音乐。",
          ar: "أستمع إلى الموسيقى.",
          ko: "나는 음악을 듣습니다."
        }
      },
      {
        id: "football",
        word: {
          en: "Football",
          fa: "فوتبال",
          fr: "Football",
          de: "Fußball",
          it: "Calcio",
          es: "Fútbol",
          ru: "Футбол",
          zh: "足球",
          ar: "كرة القدم",
          ko: "축구"
        },
        sentence: {
          en: "I play football.",
          fa: "من فوتبال بازی می‌کنم.",
          fr: "Je joue au football.",
          de: "Ich spiele Fußball.",
          it: "Gioco a calcio.",
          es: "Juego al fútbol.",
          ru: "Я играю в футбол.",
          zh: "我踢足球。",
          ar: "ألعب كرة القدم.",
          ko: "나는 축구를 합니다."
        }
      },
      {
        id: "tennis",
        word: {
          en: "Tennis",
          fa: "تنیس",
          fr: "Tennis",
          de: "Tennis",
          it: "Tennis",
          es: "Tenis",
          ru: "Теннис",
          zh: "网球",
          ar: "تنس",
          ko: "테니스"
        },
        sentence: {
          en: "Do you like tennis?",
          fa: "آیا تنیس دوست داری؟",
          fr: "Aimes-tu le tennis ?",
          de: "Magst du Tennis?",
          it: "Ti piace il tennis?",
          es: "¿Te gusta el tenis?",
          ru: "Тебе нравится теннис?",
          zh: "你喜欢网球吗？",
          ar: "هل تحب التنس؟",
          ko: "테니스를 좋아합니까?"
        }
      },
      {
        id: "swim",
        word: {
          en: "Swim",
          fa: "شنا کردن",
          fr: "Nager",
          de: "Schwimmen",
          it: "Nuotare",
          es: "Nadar",
          ru: "Плавать",
          zh: "游泳",
          ar: "سباحة",
          ko: "수영하다"
        },
        sentence: {
          en: "I can swim.",
          fa: "من می‌توانم شنا کنم.",
          fr: "Je peux nager.",
          de: "Ich kann schwimmen.",
          it: "Posso nuotare.",
          es: "Puedo nadar.",
          ru: "Я умею плавать.",
          zh: "我会游泳。",
          ar: "أستطيع السباحة.",
          ko: "나는 수영할 수 있습니다."
        }
      },
      {
        id: "run",
        word: {
          en: "Run",
          fa: "دویدن",
          fr: "Courir",
          de: "Laufen",
          it: "Correre",
          es: "Correr",
          ru: "Бежать",
          zh: "跑",
          ar: "ركض",
          ko: "달리다"
        },
        sentence: {
          en: "He runs fast.",
          fa: "او سریع می‌دود.",
          fr: "Il court vite.",
          de: "Er läuft schnell.",
          it: "Lui corre veloce.",
          es: "Él corre rápido.",
          ru: "Он бежит быстро.",
          zh: "他跑得快。",
          ar: "هو يركض بسرعة.",
          ko: "그는 빨리 달립니다."
        }
      },
      {
        id: "ball",
        word: {
          en: "Ball",
          fa: "توپ",
          fr: "Balle",
          de: "Ball",
          it: "Palla",
          es: "Pelota",
          ru: "Мяч",
          zh: "球",
          ar: "كرة",
          ko: "공"
        },
        sentence: {
          en: "Kick the ball.",
          fa: "به توپ ضربه بزن.",
          fr: "Frappe la balle.",
          de: "Tritt den Ball.",
          it: "Calcia la palla.",
          es: "Patea la pelota.",
          ru: "Пни мяч.",
          zh: "踢球。",
          ar: "اركل الكرة.",
          ko: "공을 차세요."
        }
      },
      {
        id: "school",
        word: {
          en: "School",
          fa: "مدرسه",
          fr: "École",
          de: "Schule",
          it: "Scuola",
          es: "Escuela",
          ru: "Школа",
          zh: "学校",
          ar: "مدرسة",
          ko: "학교"
        },
        sentence: {
          en: "The school is near.",
          fa: "مدرسه نزدیک است.",
          fr: "L'école est proche.",
          de: "Die Schule ist nah.",
          it: "La scuola è vicina.",
          es: "La escuela está cerca.",
          ru: "Школа рядом.",
          zh: "学校很近。",
          ar: "المدرسة قريبة.",
          ko: "학교는 가깝습니다."
        }
      },
      {
        id: "bank",
        word: {
          en: "Bank",
          fa: "بانک",
          fr: "Banque",
          de: "Bank",
          it: "Banca",
          es: "Banco",
          ru: "Банк",
          zh: "银行",
          ar: "بنك",
          ko: "은행"
        },
        sentence: {
          en: "I need to go to the bank.",
          fa: "من باید به بانک بروم.",
          fr: "Je dois aller à la banque.",
          de: "Ich muss zur Bank gehen.",
          it: "Devo andare in banca.",
          es: "Necesito ir al banco.",
          ru: "Мне нужно в банк.",
          zh: "我得去银行。",
          ar: "أحتاج للذهاب إلى البنك.",
          ko: "은행에 가야 합니다."
        }
      },
      {
        id: "cinema",
        word: {
          en: "Cinema",
          fa: "سینما",
          fr: "Cinéma",
          de: "Kino",
          it: "Cinema",
          es: "Cine",
          ru: "Кино",
          zh: "电影院",
          ar: "سينما",
          ko: "영화관"
        },
        sentence: {
          en: "Let's go to the cinema.",
          fa: "بیایید به سینما برویم.",
          fr: "Allons au cinéma.",
          de: "Lass uns ins Kino gehen.",
          it: "Andiamo al cinema.",
          es: "Vamos al cine.",
          ru: "Пойдем в кино.",
          zh: "我们去电影院吧。",
          ar: "لنذهب إلى السينما.",
          ko: "영화관에 갑시다."
        }
      },
      {
        id: "beach",
        word: {
          en: "Beach",
          fa: "ساحل",
          fr: "Plage",
          de: "Strand",
          it: "Spiaggia",
          es: "Playa",
          ru: "Пляж",
          zh: "海滩",
          ar: "شاطئ",
          ko: "해변"
        },
        sentence: {
          en: "The beach is beautiful.",
          fa: "ساحل زیباست.",
          fr: "La plage est belle.",
          de: "Der Strand ist schön.",
          it: "La spiaggia è bella.",
          es: "La playa es hermosa.",
          ru: "Пляж красивый.",
          zh: "海滩很美。",
          ar: "الشاطئ جميل.",
          ko: "해변은 아름답습니다."
        }
      },
      {
        id: "garden",
        word: {
          en: "Garden",
          fa: "باغ",
          fr: "Jardin",
          de: "Garten",
          it: "Giardino",
          es: "Jardín",
          ru: "Сад",
          zh: "花园",
          ar: "حديقة",
          ko: "정원"
        },
        sentence: {
          en: "I work in the garden.",
          fa: "من در باغ کار می‌کنم.",
          fr: "Je travaille dans le jardin.",
          de: "Ich arbeite im Garten.",
          it: "Lavoro in giardino.",
          es: "Trabajo en el jardín.",
          ru: "Я работаю в саду.",
          zh: "我在花园里工作。",
          ar: "أعمل في الحديقة.",
          ko: "나는 정원에서 일합니다."
        }
      },
      {
        id: "fast",
        word: {
          en: "Fast",
          fa: "سریع",
          fr: "Rapide",
          de: "Schnell",
          it: "Veloce",
          es: "Rápido",
          ru: "Быстрый",
          zh: "快",
          ar: "سريع",
          ko: "빠른"
        },
        sentence: {
          en: "This car is fast.",
          fa: "این ماشین سریع است.",
          fr: "Cette voiture est rapide.",
          de: "Dieses Auto ist schnell.",
          it: "Questa auto è veloce.",
          es: "Este coche es rápido.",
          ru: "Эта машина быстрая.",
          zh: "这辆车很快。",
          ar: "هذه السيارة سريعة.",
          ko: "이 차는 빠릅니다."
        }
      },
      {
        id: "slow",
        word: {
          en: "Slow",
          fa: "کند",
          fr: "Lent",
          de: "Langsam",
          it: "Lento",
          es: "Lento",
          ru: "Медленный",
          zh: "慢",
          ar: "بطيء",
          ko: "느린"
        },
        sentence: {
          en: "Turtles are slow.",
          fa: "لاک‌پشت‌ها کند هستند.",
          fr: "Les tortues sont lentes.",
          de: "Schildkröten sind langsam.",
          it: "Le tartarughe sono lente.",
          es: "Las tortugas son lentas.",
          ru: "Черепахи медленные.",
          zh: "乌龟很慢。",
          ar: "السلاحف بطيئة.",
          ko: "거북이는 느립니다."
        }
      },
      {
        id: "old",
        word: {
          en: "Old",
          fa: "پیر/قدیمی",
          fr: "Vieux",
          de: "Alt",
          it: "Vecchio",
          es: "Viejo",
          ru: "Старый",
          zh: "老",
          ar: "قديم",
          ko: "늙은/오래된"
        },
        sentence: {
          en: "He is an old man.",
          fa: "او مرد پیری است.",
          fr: "C'est un vieil homme.",
          de: "Er ist ein alter Mann.",
          it: "Lui è un vecchio uomo.",
          es: "Él es un hombre viejo.",
          ru: "Он старик.",
          zh: "他是个老人。",
          ar: "هو رجل عجوز.",
          ko: "그는 노인입니다."
        }
      },
      {
        id: "young",
        word: {
          en: "Young",
          fa: "جوان",
          fr: "Jeune",
          de: "Jung",
          it: "Giovane",
          es: "Joven",
          ru: "Молодой",
          zh: "年轻",
          ar: "شاب",
          ko: "젊은"
        },
        sentence: {
          en: "She is very young.",
          fa: "او خیلی جوان است.",
          fr: "Elle est très jeune.",
          de: "Sie ist sehr jung.",
          it: "Lei è molto giovane.",
          es: "Ella es muy joven.",
          ru: "Она очень молода.",
          zh: "她很年轻。",
          ar: "هي شابة جدا.",
          ko: "그녀는 매우 젊습니다."
        }
      },
      {
        id: "new",
        word: {
          en: "New",
          fa: "جدید",
          fr: "Nouveau",
          de: "Neu",
          it: "Nuovo",
          es: "Nuevo",
          ru: "Новый",
          zh: "新",
          ar: "جديد",
          ko: "새로운"
        },
        sentence: {
          en: "I have a new phone.",
          fa: "من یک گوشی جدید دارم.",
          fr: "J'ai un nouveau téléphone.",
          de: "Ich habe ein neues Handy.",
          it: "Ho un nuovo telefono.",
          es: "Tengo un teléfono nuevo.",
          ru: "У меня новый телефон.",
          zh: "我有个新手机。",
          ar: "لدي هاتف جديد.",
          ko: "새 전화기가 있습니다."
        }
      },
      {
        id: "rich",
        word: {
          en: "Rich",
          fa: "ثروتمند",
          fr: "Riche",
          de: "Reich",
          it: "Ricco",
          es: "Rico",
          ru: "Богатый",
          zh: "富",
          ar: "غني",
          ko: "부유한"
        },
        sentence: {
          en: "He is very rich.",
          fa: "او خیلی ثروتمند است.",
          fr: "Il est très riche.",
          de: "Er ist sehr reich.",
          it: "Lui è molto ricco.",
          es: "Él es muy rico.",
          ru: "Он очень богат.",
          zh: "他很富有。",
          ar: "هو غني جدا.",
          ko: "그는 매우 부유합니다."
        }
      },
      {
        id: "poor",
        word: {
          en: "Poor",
          fa: "فقیر",
          fr: "Pauvre",
          de: "Arm",
          it: "Povero",
          es: "Pobre",
          ru: "Бедный",
          zh: "穷",
          ar: "فقير",
          ko: "가난한"
        },
        sentence: {
          en: "Help the poor.",
          fa: "به فقرا کمک کن.",
          fr: "Aide les pauvres.",
          de: "Hilf den Armen.",
          it: "Aiuta i poveri.",
          es: "Ayuda a los pobres.",
          ru: "Помогай бедным.",
          zh: "帮助穷人。",
          ar: "ساعد الفقراء.",
          ko: "가난한 사람들을 도와주세요."
        }
      },
      {
        id: "clean",
        word: {
          en: "Clean",
          fa: "تمیز",
          fr: "Propre",
          de: "Sauber",
          it: "Pulito",
          es: "Limpio",
          ru: "Чистый",
          zh: "干净",
          ar: "نظيف",
          ko: "깨끗한"
        },
        sentence: {
          en: "Keep your room clean.",
          fa: "اتاقت را تمیز نگه دار.",
          fr: "Garde ta chambre propre.",
          de: "Halt dein Zimmer sauber.",
          it: "Tieni pulita la tua stanza.",
          es: "Mantén limpio tu cuarto.",
          ru: "Держи комнату в чистоте.",
          zh: "保持房间整洁。",
          ar: "حافظ على نظافة غرفتك.",
          ko: "방을 깨끗하게 유지하세요."
        }
      },
      {
        id: "dirty",
        word: {
          en: "Dirty",
          fa: "کثیف",
          fr: "Sale",
          de: "Schmutzig",
          it: "Sporco",
          es: "Sucio",
          ru: "Грязный",
          zh: "脏",
          ar: "قذر",
          ko: "더러운"
        },
        sentence: {
          en: "My hands are dirty.",
          fa: "دست‌هایم کثیف هستند.",
          fr: "Mes mains sont sales.",
          de: "Meine Hände sind schmutzig.",
          it: "Le mie mani sono sporche.",
          es: "Mis manos están sucias.",
          ru: "Мои руки грязные.",
          zh: "我的手很脏。",
          ar: "يداي قذرتان.",
          ko: "내 손이 더럽습니다."
        }
      },
      {
        id: "yellow",
        word: {
          en: "Yellow",
          fa: "زرد",
          fr: "Jaune",
          de: "Gelb",
          it: "Giallo",
          es: "Amarillo",
          ru: "Желтый",
          zh: "黄",
          ar: "أصفر",
          ko: "노란"
        },
        sentence: {
          en: "The sun is yellow.",
          fa: "خورشید زرد است.",
          fr: "Le soleil est jaune.",
          de: "Die Sonne ist gelb.",
          it: "Il sole è giallo.",
          es: "El sol es amarillo.",
          ru: "Солнце желтое.",
          zh: "太阳是黄色的。",
          ar: "الشمس صفراء.",
          ko: "태양은 노란색입니다."
        }
      },
      {
        id: "black",
        word: {
          en: "Black",
          fa: "سیاه",
          fr: "Noir",
          de: "Schwarz",
          it: "Nero",
          es: "Negro",
          ru: "Черный",
          zh: "黑",
          ar: "أسود",
          ko: "검은"
        },
        sentence: {
          en: "I like black coffee.",
          fa: "من قهوه سیاه دوست دارم.",
          fr: "J'aime le café noir.",
          de: "Ich mag schwarzen Kaffee.",
          it: "Mi piace il caffè nero.",
          es: "Me gusta el café negro.",
          ru: "Я люблю черный кофе.",
          zh: "我喜欢黑咖啡。",
          ar: "أحب القهوة السوداء.",
          ko: "나는 블랙 커피를 좋아합니다."
        }
      },
      {
        id: "white",
        word: {
          en: "White",
          fa: "سفید",
          fr: "Blanc",
          de: "Weiß",
          it: "Bianco",
          es: "Blanco",
          ru: "Белый",
          zh: "白",
          ar: "أبيض",
          ko: "흰"
        },
        sentence: {
          en: "The snow is white.",
          fa: "برف سفید است.",
          fr: "La neige est blanche.",
          de: "Der Schnee ist weiß.",
          it: "La neve è bianca.",
          es: "La nieve es blanca.",
          ru: "Снег белый.",
          zh: "雪是白色的。",
          ar: "الثلج أبيض.",
          ko: "눈은 흰색입니다."
        }
      },
      {
        id: "orange_color",
        word: {
          en: "Orange",
          fa: "نارنجی",
          fr: "Orange",
          de: "Orange",
          it: "Arancione",
          es: "Naranja",
          ru: "Оранжевый",
          zh: "橙",
          ar: "برتقالي",
          ko: "주황색"
        },
        sentence: {
          en: "An orange car.",
          fa: "یک ماشین نارنجی.",
          fr: "Une voiture orange.",
          de: "Ein oranges Auto.",
          it: "Un'auto arancione.",
          es: "Un coche naranja.",
          ru: "Оранжевая машина.",
          zh: "一辆橙色的车。",
          ar: "سيارة برتقالية.",
          ko: "주황색 차."
        }
      },
      {
        id: "pink",
        word: {
          en: "Pink",
          fa: "صورتی",
          fr: "Rose",
          de: "Rosa",
          it: "Rosa",
          es: "Rosa",
          ru: "Розовый",
          zh: "粉红",
          ar: "وردي",
          ko: "분홍"
        },
        sentence: {
          en: "She loves pink.",
          fa: "او عاشق رنگ صورتی است.",
          fr: "Elle adore le rose.",
          de: "Sie liebt Rosa.",
          it: "Lei ama il rosa.",
          es: "Ella ama el rosa.",
          ru: "Она любит розовый.",
          zh: "她喜欢粉红色。",
          ar: "هي تحب الوردي.",
          ko: "그녀는 분홍색을 좋아합니다."
        }
      },
      {
        id: "gray",
        word: {
          en: "Gray",
          fa: "خاکستری",
          fr: "Gris",
          de: "Grau",
          it: "Grigio",
          es: "Gris",
          ru: "Серый",
          zh: "灰",
          ar: "رمادي",
          ko: "회색"
        },
        sentence: {
          en: "The sky is gray.",
          fa: "آسمان خاکستری است.",
          fr: "Le ciel est gris.",
          de: "Der Himmel ist grau.",
          it: "Il cielo è grigio.",
          es: "El cielo es gris.",
          ru: "Небо серое.",
          zh: "天空是灰色的。",
          ar: "السماء رمادية.",
          ko: "하늘은 회색입니다."
        }
      },
      {
        id: "brown",
        word: {
          en: "Brown",
          fa: "قهوه‌ای",
          fr: "Marron",
          de: "Braun",
          it: "Marrone",
          es: "Marrón",
          ru: "Коричневый",
          zh: "棕",
          ar: "بني",
          ko: "갈색"
        },
        sentence: {
          en: "He has brown eyes.",
          fa: "او چشمان قهوه‌ای دارد.",
          fr: "Il a les yeux marron.",
          de: "Er hat braune Augen.",
          it: "Ha gli occhi marroni.",
          es: "Tiene ojos marrones.",
          ru: "У него карие глаза.",
          zh: "他有棕色的眼睛。",
          ar: "لديه عيون بنية.",
          ko: "그는 갈색 눈을 가졌습니다."
        }
      },
      {
        id: "january",
        word: {
          en: "January",
          fa: "ژانویه",
          fr: "Janvier",
          de: "Januar",
          it: "Gennaio",
          es: "Enero",
          ru: "Январь",
          zh: "一月",
          ar: "يناير",
          ko: "1월"
        },
        sentence: {
          en: "It is cold in January.",
          fa: "در ژانویه هوا سرد است.",
          fr: "Il fait froid en janvier.",
          de: "Im Januar ist es kalt.",
          it: "Fa freddo a gennaio.",
          es: "Hace frío en enero.",
          ru: "В январе холодно.",
          zh: "一月很冷。",
          ar: "الجو بارد في يناير.",
          ko: "1월은 춥습니다."
        }
      },
      {
        id: "summer",
        word: {
          en: "Summer",
          fa: "تابستان",
          fr: "Été",
          de: "Sommer",
          it: "Estate",
          es: "Verano",
          ru: "Лето",
          zh: "夏天",
          ar: "صيف",
          ko: "여름"
        },
        sentence: {
          en: "I love summer.",
          fa: "من عاشق تابستان هستم.",
          fr: "J'aime l'été.",
          de: "Ich liebe den Sommer.",
          it: "Amo l'estate.",
          es: "Amo el verano.",
          ru: "Я люблю лето.",
          zh: "我喜欢夏天。",
          ar: "أحب الصيف.",
          ko: "나는 여름을 좋아합니다."
        }
      },
      {
        id: "winter",
        word: {
          en: "Winter",
          fa: "زمستان",
          fr: "Hiver",
          de: "Winter",
          it: "Inverno",
          es: "Invierno",
          ru: "Зима",
          zh: "冬天",
          ar: "شتاء",
          ko: "겨울"
        },
        sentence: {
          en: "Winter is coming.",
          fa: "زمستان در راه است.",
          fr: "L'hiver arrive.",
          de: "Der Winter kommt.",
          it: "L'inverno sta arrivando.",
          es: "Se acerca el invierno.",
          ru: "Зима близко.",
          zh: "冬天来了。",
          ar: "الشتاء قادم.",
          ko: "겨울이 오고 있습니다."
        }
      },
      {
        id: "spring",
        word: {
          en: "Spring",
          fa: "بهار",
          fr: "Printemps",
          de: "Frühling",
          it: "Primavera",
          es: "Primavera",
          ru: "Весна",
          zh: "春天",
          ar: "ربيع",
          ko: "봄"
        },
        sentence: {
          en: "Flowers bloom in spring.",
          fa: "گل‌ها در بهار می‌شکفند.",
          fr: "Les fleurs fleurissent au printemps.",
          de: "Blumen blühen im Frühling.",
          it: "I fiori sbocciano in primavera.",
          es: "Las flores florecen en primavera.",
          ru: "Цветы цветут весной.",
          zh: "花在春天开放。",
          ar: "الزهور تتفتح في الربيع.",
          ko: "봄에는 꽃이 핍니다."
        }
      },
      {
        id: "autumn",
        word: {
          en: "Autumn",
          fa: "پاییز",
          fr: "Automne",
          de: "Herbst",
          it: "Autunno",
          es: "Otoño",
          ru: "Осень",
          zh: "秋天",
          ar: "خريف",
          ko: "가을"
        },
        sentence: {
          en: "Leaves fall in autumn.",
          fa: "برگ‌ها در پاییز می‌ریزند.",
          fr: "Les feuilles tombent en automne.",
          de: "Blätter fallen im Herbst.",
          it: "Le foglie cadono in autunno.",
          es: "Las hojas caen en otoño.",
          ru: "Листья падают осенью.",
          zh: "秋天叶子落下。",
          ar: "الأوراق تتساقط في الخريف.",
          ko: "가을에는 잎이 떨어집니다."
        }
      },
      {
        id: "phone",
        word: {
          en: "Phone",
          fa: "تلفن",
          fr: "Téléphone",
          de: "Telefon",
          it: "Telefono",
          es: "Teléfono",
          ru: "Телефон",
          zh: "电话",
          ar: "هاتف",
          ko: "전화"
        },
        sentence: {
          en: "Answer the phone.",
          fa: "تلفن را جواب بده.",
          fr: "Réponds au téléphone.",
          de: "Geh ans Telefon.",
          it: "Rispondi al telefono.",
          es: "Contesta el teléfono.",
          ru: "Ответь на звонок.",
          zh: "接电话。",
          ar: "أجب على الهاتف.",
          ko: "전화를 받으세요."
        }
      },
      {
        id: "laptop",
        word: {
          en: "Laptop",
          fa: "لپ‌تاپ",
          fr: "Ordinateur portable",
          de: "Laptop",
          it: "Portatile",
          es: "Portátil",
          ru: "Ноутбук",
          zh: "笔记本电脑",
          ar: "لابتوب",
          ko: "노트북"
        },
        sentence: {
          en: "My laptop is new.",
          fa: "لپ‌تاپ من نو است.",
          fr: "Mon ordinateur portable est neuf.",
          de: "Mein Laptop ist neu.",
          it: "Il mio portatile è nuovo.",
          es: "Mi portátil es nuevo.",
          ru: "Мой ноутбук новый.",
          zh: "我的笔记本电脑是新的。",
          ar: "لابتوبي جديد.",
          ko: "내 노트북은 새것입니다."
        }
      },
      {
        id: "paper",
        word: {
          en: "Paper",
          fa: "کاغذ",
          fr: "Papier",
          de: "Papier",
          it: "Carta",
          es: "Papel",
          ru: "Бумага",
          zh: "纸",
          ar: "ورق",
          ko: "종이"
        },
        sentence: {
          en: "I need some paper.",
          fa: "من مقداری کاغذ نیاز دارم.",
          fr: "J'ai besoin de papier.",
          de: "Ich brauche Papier.",
          it: "Ho bisogno di carta.",
          es: "Necesito papel.",
          ru: "Мне нужна бумага.",
          zh: "我需要纸。",
          ar: "أحتاج إلى ورق.",
          ko: "종이가 필요합니다."
        }
      },
      {
        id: "left",
        word: {
          en: "Left",
          fa: "چپ",
          fr: "Gauche",
          de: "Links",
          it: "Sinistra",
          es: "Izquierda",
          ru: "Лево",
          zh: "左",
          ar: "يسار",
          ko: "왼쪽"
        },
        sentence: {
          en: "Turn left.",
          fa: "به چپ بپیچ.",
          fr: "Tournez à gauche.",
          de: "Bieg links ab.",
          it: "Gira a sinistra.",
          es: "Gira a la izquierda.",
          ru: "Поверни налево.",
          zh: "左转。",
          ar: "انعطف يساراً.",
          ko: "왼쪽으로 도세요."
        }
      },
      {
        id: "right",
        word: {
          en: "Right",
          fa: "راست",
          fr: "Droite",
          de: "Rechts",
          it: "Destra",
          es: "Derecha",
          ru: "Право",
          zh: "右",
          ar: "يمين",
          ko: "오른쪽"
        },
        sentence: {
          en: "Turn right.",
          fa: "به راست بپیچ.",
          fr: "Tournez à droite.",
          de: "Bieg rechts ab.",
          it: "Gira a destra.",
          es: "Gira a la derecha.",
          ru: "Поверни направо.",
          zh: "右转。",
          ar: "انعطف يميناً.",
          ko: "오른쪽으로 도세요."
        }
      },
      {
        id: "up",
        word: {
          en: "Up",
          fa: "بالا",
          fr: "Haut",
          de: "Oben",
          it: "Su",
          es: "Arriba",
          ru: "Вверх",
          zh: "上",
          ar: "فوق",
          ko: "위"
        },
        sentence: {
          en: "Look up.",
          fa: "به بالا نگاه کن.",
          fr: "Regarde en haut.",
          de: "Schau nach oben.",
          it: "Guarda in alto.",
          es: "Mira arriba.",
          ru: "Посмотри вверх.",
          zh: "往上看。",
          ar: "انظر للأعلى.",
          ko: "위로 보세요."
        }
      },
      {
        id: "down",
        word: {
          en: "Down",
          fa: "پایین",
          fr: "Bas",
          de: "Unten",
          it: "Giù",
          es: "Abajo",
          ru: "Вниз",
          zh: "下",
          ar: "تحت",
          ko: "아래"
        },
        sentence: {
          en: "Sit down.",
          fa: "بنشین.",
          fr: "Asseyez-vous.",
          de: "Setz dich hin.",
          it: "Siediti.",
          es: "Siéntate.",
          ru: "Садись.",
          zh: "坐下。",
          ar: "اجلس.",
          ko: "앉으세요."
        }
      },
      {
        id: "near",
        word: {
          en: "Near",
          fa: "نزدیک",
          fr: "Près",
          de: "Nahe",
          it: "Vicino",
          es: "Cerca",
          ru: "Близко",
          zh: "近",
          ar: "قريب",
          ko: "가까운"
        },
        sentence: {
          en: "Is it near?",
          fa: "آیا نزدیک است؟",
          fr: "Est-ce près ?",
          de: "Ist es nah?",
          it: "È vicino?",
          es: "¿Está cerca?",
          ru: "Это близко?",
          zh: "近吗？",
          ar: "هل هو قريب؟",
          ko: "가깝습니까?"
        }
      },
      {
        id: "far",
        word: {
          en: "Far",
          fa: "دور",
          fr: "Loin",
          de: "Weit",
          it: "Lontano",
          es: "Lejos",
          ru: "Далеко",
          zh: "远",
          ar: "بعيد",
          ko: "멀리"
        },
        sentence: {
          en: "It is very far.",
          fa: "خیلی دور است.",
          fr: "C'est très loin.",
          de: "Es ist sehr weit.",
          it: "È molto lontano.",
          es: "Está muy lejos.",
          ru: "Это очень далеко.",
          zh: "很远。",
          ar: "إنه بعيد جدا.",
          ko: "매우 멉니다."
        }
      },
      {
        id: "inside",
        word: {
          en: "Inside",
          fa: "داخل",
          fr: "Dedans",
          de: "Drinnen",
          it: "Dentro",
          es: "Adentro",
          ru: "Внутри",
          zh: "里面",
          ar: "داخل",
          ko: "안에"
        },
        sentence: {
          en: "Go inside.",
          fa: "برو داخل.",
          fr: "Va dedans.",
          de: "Geh rein.",
          it: "Vai dentro.",
          es: "Ve adentro.",
          ru: "Иди внутрь.",
          zh: "进去。",
          ar: "اذهب للداخل.",
          ko: "안으로 들어가세요."
        }
      },
      {
        id: "outside",
        word: {
          en: "Outside",
          fa: "خارج/بیرون",
          fr: "Dehors",
          de: "Draußen",
          it: "Fuori",
          es: "Afuera",
          ru: "Снаружи",
          zh: "外面",
          ar: "خارج",
          ko: "밖에"
        },
        sentence: {
          en: "Play outside.",
          fa: "بیرون بازی کن.",
          fr: "Joue dehors.",
          de: "Spiel draußen.",
          it: "Gioca fuori.",
          es: "Juega afuera.",
          ru: "Играй на улице.",
          zh: "在外面玩。",
          ar: "العب في الخارج.",
          ko: "밖에서 놀아요."
        }
      },
      {
        id: "king",
        word: {
          en: "King",
          fa: "پادشاه",
          fr: "Roi",
          de: "König",
          it: "Re",
          es: "Rey",
          ru: "Король",
          zh: "国王",
          ar: "ملك",
          ko: "왕"
        },
        sentence: {
          en: "The king is wise.",
          fa: "پادشاه دانا است.",
          fr: "Le roi est sage.",
          de: "Der König ist weise.",
          it: "Il re è saggio.",
          es: "El rey es sabio.",
          ru: "Король мудр.",
          zh: "国王是明智的。",
          ar: "الملك حكيم.",
          ko: "왕은 지혜롭습니다."
        }
      },
      {
        id: "queen",
        word: {
          en: "Queen",
          fa: "ملکه",
          fr: "Reine",
          de: "Königin",
          it: "Regina",
          es: "Reina",
          ru: "Королева",
          zh: "女王",
          ar: "ملكة",
          ko: "여왕"
        },
        sentence: {
          en: "The queen is beautiful.",
          fa: "ملکه زیبا است.",
          fr: "La reine est belle.",
          de: "Die Königin ist schön.",
          it: "La regina è bella.",
          es: "La reina es hermosa.",
          ru: "Королева красива.",
          zh: "女王很美。",
          ar: "الملكة جميلة.",
          ko: "여왕은 아름답습니다."
        }
      },
      {
        id: "prince",
        word: {
          en: "Prince",
          fa: "شاهزاده",
          fr: "Prince",
          de: "Prinz",
          it: "Principe",
          es: "Príncipe",
          ru: "Принц",
          zh: "王子",
          ar: "أمير",
          ko: "왕자"
        },
        sentence: {
          en: "The prince is young.",
          fa: "شاهزاده جوان است.",
          fr: "Le prince est jeune.",
          de: "Der Prinz ist jung.",
          it: "Il principe è giovane.",
          es: "El príncipe es joven.",
          ru: "Принц молод.",
          zh: "王子很年轻。",
          ar: "الأمير شاب.",
          ko: "왕자는 젊습니다."
        }
      },
      {
        id: "princess",
        word: {
          en: "Princess",
          fa: "شاهزاده خانم",
          fr: "Princesse",
          de: "Prinzessin",
          it: "Principessa",
          es: "Princesa",
          ru: "Принцесса",
          zh: "公主",
          ar: "أميرة",
          ko: "공주"
        },
        sentence: {
          en: "She is a princess.",
          fa: "او یک شاهزاده خانم است.",
          fr: "C'est une princesse.",
          de: "Sie ist eine Prinzessin.",
          it: "Lei è una principessa.",
          es: "Ella es una princesa.",
          ru: "Она принцесса.",
          zh: "她是公主。",
          ar: "هي أميرة.",
          ko: "그녀는 공주입니다."
        }
      },
      {
        id: "castle",
        word: {
          en: "Castle",
          fa: "قلعه",
          fr: "Château",
          de: "Schloss",
          it: "Castello",
          es: "Castillo",
          ru: "Замок",
          zh: "城堡",
          ar: "قلعة",
          ko: "성"
        },
        sentence: {
          en: "They live in a castle.",
          fa: "آن‌ها در قلعه زندگی می‌کنند.",
          fr: "Ils vivent dans un château.",
          de: "Sie leben in einem Schloss.",
          it: "Vivono in un castello.",
          es: "Viven en un castillo.",
          ru: "Они живут в замке.",
          zh: "他们住在城堡里。",
          ar: "يعيشون في قلعة.",
          ko: "그들은 성에 삽니다."
        }
      }
    ]
  },
  {
    level: "B1",
    items: [
      {
        id: "environment",
        word: {
          en: "Environment",
          fa: "محیط زیست",
          fr: "Environnement",
          de: "Umwelt",
          it: "Ambiente",
          es: "Medio ambiente",
          ru: "Окружающая среда",
          zh: "环境",
          ar: "بيئة",
          ko: "환경"
        },
        sentence: {
          en: "We must protect the environment.",
          fa: "ما باید از محیط زیست محافظت کنیم.",
          fr: "Nous devons protéger l'environnement.",
          de: "Wir müssen die Umwelt schützen.",
          ko: "우리는 환경을 보호해야 합니다."
        }
      },
      {
        id: "freedom",
        word: {
          en: "Freedom",
          fa: "آزادی",
          fr: "Liberté",
          de: "Freiheit",
          it: "Libertà",
          es: "Libertad",
          ru: "Свобода",
          zh: "自由",
          ar: "حرية",
          ko: "자유"
        },
        sentence: {
          en: "Freedom is essential for happiness.",
          fa: "آزادی برای خوشبختی ضروری است.",
          fr: "La liberté est essentielle au bonheur.",
          de: "Freiheit ist wesentlich für das Glück.",
          ko: "자유는 행복을 위해 필수적입니다."
        }
      },
      {
        id: "success",
        word: {
          en: "Success",
          fa: "موفقیت",
          fr: "Succès",
          de: "Erfolg",
          it: "Successo",
          es: "Éxito",
          ru: "Успех",
          zh: "成功",
          ar: "نجاح",
          ko: "성공"
        },
        sentence: {
          en: "Hard work leads to success.",
          fa: "تلاش سخت به موفقیت منجر می‌شود.",
          fr: "Le travail acharné mène au succès.",
          de: "Harte Arbeit führt zum Erfolg.",
          ko: "노력은 성공으로 이끕니다."
        }
      },
      {
        id: "knowledge",
        word: {
          en: "Knowledge",
          fa: "دانش",
          fr: "Connaissance",
          de: "Wissen",
          it: "Conoscenza",
          es: "Conocimiento",
          ru: "Знание",
          zh: "知识",
          ar: "معرفة",
          ko: "지식"
        },
        sentence: {
          en: "He has a lot of knowledge about history.",
          fa: "او دانش زیادی در مورد تاریخ دارد.",
          fr: "Il a beaucoup de connaissances sur l'histoire.",
          de: "Er hat viel Wissen über Geschichte.",
          ko: "그는 역사에 대해 많은 지식을 가지고 있습니다."
        }
      },
      {
        id: "opinion",
        word: {
          en: "Opinion",
          fa: "نظر",
          fr: "Opinion",
          de: "Meinung",
          it: "Opinione",
          es: "Opinión",
          ru: "Мнение",
          zh: "意见",
          ar: "رأي",
          ko: "의견"
        },
        sentence: {
          en: "What is your opinion about this book?",
          fa: "نظر شما در مورد این کتاب چیست؟",
          fr: "Quelle est votre opinion sur ce livre ?",
          de: "Was ist deine Meinung zu diesem Buch?",
          ko: "이 책에 대한 당신의 의견은 무엇입니까?"
        }
      },
      {
        id: "experience",
        word: {
          en: "Experience",
          fa: "تجربه",
          fr: "Expérience",
          de: "Erfahrung",
          it: "Esperienza",
          es: "Experiencia",
          ru: "Опыт",
          zh: "经验",
          ar: "تجربة",
          ko: "경험"
        },
        sentence: {
          en: "I have five years of work experience.",
          fa: "من پنج سال تجربه کاری دارم.",
          fr: "J'ai cinq ans d'expérience professionnelle.",
          de: "Ich habe fünf Jahre Berufserfahrung.",
          ko: "저는 5년의 업무 경험이 있습니다."
        }
      },
      {
        id: "government",
        word: {
          en: "Government",
          fa: "دولت",
          fr: "Gouvernement",
          de: "Regierung",
          it: "Governo",
          es: "Gobierno",
          ru: "Правительство",
          zh: "政府",
          ar: "حكومة",
          ko: "정부"
        },
        sentence: {
          en: "The government increased taxes.",
          fa: "دولت مالیات‌ها را افزایش داد.",
          fr: "Le gouvernement a augmenté les impôts.",
          de: "Die Regierung hat die Steuern erhöht.",
          ko: "정부가 세금을 인상했습니다."
        }
      },
      {
        id: "culture",
        word: {
          en: "Culture",
          fa: "فرهنگ",
          fr: "Culture",
          de: "Kultur",
          it: "Cultura",
          es: "Cultura",
          ru: "Культура",
          zh: "文化",
          ar: "ثقافة",
          ko: "문화"
        },
        sentence: {
          en: "We enjoy learning about other cultures.",
          fa: "ما از یادگیری درباره فرهنگ‌های دیگر لذت می‌بریم.",
          fr: "Nous aimons apprendre sur d'autres cultures.",
          de: "Wir lernen gerne etwas über andere Kulturen.",
          ko: "우리는 다른 문화에 대해 배우는 것을 즐깁니다."
        }
      },
      {
        id: "decision",
        word: {
          en: "Decision",
          fa: "تصمیم",
          fr: "Décision",
          de: "Entscheidung",
          it: "Decisione",
          es: "Decisión",
          ru: "Решение",
          zh: "决定",
          ar: "قرار",
          ko: "결정"
        },
        sentence: {
          en: "It was difficult to make this decision.",
          fa: "گرفتن این تصمیم دشوار بود.",
          fr: "C'était difficile de prendre cette décision.",
          de: "Es war schwierig, diese Entscheidung zu treffen.",
          ko: "이 결정을 내리는 것은 어려웠습니다."
        }
      },
      {
        id: "opportunity",
        word: {
          en: "Opportunity",
          fa: "فرصت",
          fr: "Opportunité",
          de: "Gelegenheit",
          it: "Opportunità",
          es: "Oportunidad",
          ru: "Возможность",
          zh: "机会",
          ar: "فرصة",
          ko: "기회"
        },
        sentence: {
          en: "This is a good opportunity to learn.",
          fa: "این فرصت خوبی برای یادگیری است.",
          fr: "C'est une bonne opportunité d'apprendre.",
          de: "Das ist eine gute Gelegenheit zu lernen.",
          ko: "이것은 배울 수 있는 좋은 기회입니다."
        }
      },
      {
        id: "environment",
        word: {
          en: "Environment",
          fa: "محیط زیست",
          fr: "Environnement",
          de: "Umwelt",
          it: "Ambiente",
          es: "Medio ambiente",
          ru: "Окружающая среда",
          zh: "环境",
          ar: "بيئة",
          ko: "환경"
        }
      },
      {
        id: "freedom",
        word: {
          en: "Freedom",
          fa: "آزادی",
          fr: "Liberté",
          de: "Freiheit",
          it: "Libertà",
          es: "Libertad",
          ru: "Свобода",
          zh: "自由",
          ar: "حرية",
          ko: "자유"
        }
      },
      {
        id: "success",
        word: {
          en: "Success",
          fa: "موفقیت",
          fr: "Succès",
          de: "Erfolg",
          it: "Successo",
          es: "Éxito",
          ru: "Успех",
          zh: "成功",
          ar: "نجاح",
          ko: "성공"
        }
      },
      {
        id: "knowledge",
        word: {
          en: "Knowledge",
          fa: "دانش",
          fr: "Connaissance",
          de: "Wissen",
          it: "Conoscenza",
          es: "Conocimiento",
          ru: "Знание",
          zh: "知识",
          ar: "معرفة",
          ko: "지식"
        }
      },
      {
        id: "opinion",
        word: {
          en: "Opinion",
          fa: "نظر",
          fr: "Opinion",
          de: "Meinung",
          it: "Opinione",
          es: "Opinión",
          ru: "Мнение",
          zh: "意见",
          ar: "رأي",
          ko: "의견"
        }
      },
      {
        id: "experience",
        word: {
          en: "Experience",
          fa: "تجربه",
          fr: "Expérience",
          de: "Erfahrung",
          it: "Esperienza",
          es: "Experiencia",
          ru: "Опыт",
          zh: "经验",
          ar: "تجربة",
          ko: "경험"
        }
      },
      {
        id: "government",
        word: {
          en: "Government",
          fa: "دولت",
          fr: "Gouvernement",
          de: "Regierung",
          it: "Governo",
          es: "Gobierno",
          ru: "Правительство",
          zh: "政府",
          ar: "حكومة",
          ko: "정부"
        }
      },
      {
        id: "culture",
        word: {
          en: "Culture",
          fa: "فرهنگ",
          fr: "Culture",
          de: "Kultur",
          it: "Cultura",
          es: "Cultura",
          ru: "Культура",
          zh: "文化",
          ar: "ثقافة",
          ko: "문화"
        }
      },
      {
        id: "decision",
        word: {
          en: "Decision",
          fa: "تصمیم",
          fr: "Décision",
          de: "Entscheidung",
          it: "Decisione",
          es: "Decisión",
          ru: "Решение",
          zh: "决定",
          ar: "قرار",
          ko: "결정"
        }
      },
      {
        id: "opportunity",
        word: {
          en: "Opportunity",
          fa: "فرصت",
          fr: "Opportunité",
          de: "Gelegenheit",
          it: "Opportunità",
          es: "Oportunidad",
          ru: "Возможность",
          zh: "机会",
          ar: "فرصة",
          ko: "기회"
        }
      },
      {
        id: "society",
        word: {
          en: "Society",
          fa: "جامعه",
          fr: "Société",
          de: "Gesellschaft",
          it: "Società",
          es: "Sociedad",
          ru: "Общество",
          zh: "社会",
          ar: "مجتمع",
          ko: "사회"
        },
        sentence: {
          en: "We live in a modern society.",
          fa: "ما در یک جامعه مدرن زندگی می‌کنیم.",
          fr: "Nous vivons dans une société moderne.",
          de: "Wir leben in einer modernen Gesellschaft.",
          ko: "우리는 현대 사회에 살고 있습니다."
        }
      },
      {
        id: "technology",
        word: {
          en: "Technology",
          fa: "فناوری",
          fr: "Technologie",
          de: "Technologie",
          it: "Tecnologia",
          es: "Tecnología",
          ru: "Технология",
          zh: "技术",
          ar: "تكنولوجيا",
          ko: "기술"
        },
        sentence: {
          en: "Technology has changed our lives.",
          fa: "فناوری زندگی ما را تغییر داده است.",
          fr: "La technologie a changé nos vies.",
          de: "Die Technologie hat unser Leben verändert.",
          ko: "기술은 우리의 삶을 변화시켰습니다."
        }
      },
      {
        id: "economy",
        word: {
          en: "Economy",
          fa: "اقتصاد",
          fr: "Économie",
          de: "Wirtschaft",
          it: "Economia",
          es: "Economía",
          ru: "Экономика",
          zh: "经济",
          ar: "اقتصاد",
          ko: "경제"
        },
        sentence: {
          en: "The country's economy is growing.",
          fa: "اقتصاد کشور در حال رشد است.",
          fr: "L'économie du pays est en croissance.",
          de: "Die Wirtschaft des Landes wächst.",
          ko: "국가 경제가 성장하고 있습니다."
        }
      },
      {
        id: "education",
        word: {
          en: "Education",
          fa: "آموزش",
          fr: "Éducation",
          de: "Bildung",
          it: "Educazione",
          es: "Educación",
          ru: "Образование",
          zh: "教育",
          ar: "تعليم",
          ko: "교육"
        },
        sentence: {
          en: "Education is the key to the future.",
          fa: "آموزش کلید آینده است.",
          fr: "L'éducation est la clé de l'avenir.",
          de: "Bildung ist der Schlüssel zur Zukunft.",
          ko: "교육은 미래의 열쇠입니다."
        }
      },
      {
        id: "health",
        word: {
          en: "Health",
          fa: "سلامت",
          fr: "Santé",
          de: "Gesundheit",
          it: "Salute",
          es: "Salud",
          ru: "Здоровье",
          zh: "健康",
          ar: "صحة",
          ko: "건강"
        },
        sentence: {
          en: "Health is more important than wealth.",
          fa: "سلامت از ثروت مهم‌تر است.",
          fr: "La santé est plus importante que la richesse.",
          de: "Gesundheit ist wichtiger als Reichtum.",
          ko: "건강은 부보다 더 중요합니다."
        }
      },
      {
        id: "system",
        word: {
          en: "System",
          fa: "سیستم",
          fr: "Système",
          de: "System",
          it: "Sistema",
          es: "Sistema",
          ru: "Система",
          zh: "系统",
          ar: "نظام",
          ko: "시스템"
        },
        sentence: {
          en: "The computer system is down.",
          fa: "سیستم کامپیوتری خراب است.",
          fr: "Le système informatique est en panne.",
          de: "Das Computersystem ist ausgefallen.",
          ko: "컴퓨터 시스템이 다운되었습니다."
        }
      },
      {
        id: "method",
        word: {
          en: "Method",
          fa: "روش",
          fr: "Méthode",
          de: "Methode",
          it: "Metodo",
          es: "Método",
          ru: "Метод",
          zh: "方法",
          ar: "طريقة",
          ko: "방법"
        },
        sentence: {
          en: "This method is very effective.",
          fa: "این روش بسیار موثر است.",
          fr: "Cette méthode est très efficace.",
          de: "Diese Methode ist sehr effektiv.",
          ko: "이 방법은 매우 효과적입니다."
        }
      },
      {
        id: "theory",
        word: {
          en: "Theory",
          fa: "نظریه",
          fr: "Théorie",
          de: "Theorie",
          it: "Teoria",
          es: "Teoría",
          ru: "Теория",
          zh: "理论",
          ar: "نظرية"
        },
        sentence: {
          en: "That is just a theory, not a fact.",
          fa: "این فقط یک نظریه است، نه یک واقعیت.",
          fr: "C'est juste une théorie, pas un fait.",
          de: "Das ist nur eine Theorie, keine Tatsache.",
          ko: "저것은 단지 이론일 뿐, 사실이 아닙니다."
        }
      },
      {
        id: "solution",
        word: {
          en: "Solution",
          fa: "راه حل",
          fr: "Solution",
          de: "Lösung",
          it: "Soluzione",
          es: "Solución",
          ru: "Решение",
          zh: "解决方案",
          ar: "حل",
          ko: "해결책"
        },
        sentence: {
          en: "We need to find a solution.",
          fa: "ما باید یک راه حل پیدا کنیم.",
          fr: "Nous devons trouver une solution.",
          de: "Wir müssen eine Lösung finden.",
          ko: "우리는 해결책을 찾아야 합니다."
        }
      },
      {
        id: "quality",
        word: {
          en: "Quality",
          fa: "کیفیت",
          fr: "Qualité",
          de: "Qualität",
          it: "Qualità",
          es: "Calidad",
          ru: "Качество",
          zh: "质量",
          ar: "جودة",
          ko: "품질"
        },
        sentence: {
          en: "The quality of this product is excellent.",
          fa: "کیفیت این محصول عالی است.",
          fr: "La qualité de ce produit est excellente.",
          de: "Die Qualität dieses Produkts ist ausgezeichnet.",
          ko: "이 제품의 품질은 훌륭합니다."
        }
      },
      {
        id: "goal",
        word: {
          en: "Goal",
          fa: "هدف",
          fr: "But",
          de: "Ziel",
          it: "Obiettivo",
          es: "Meta",
          ru: "Цель",
          zh: "目标",
          ar: "هدف",
          ko: "목표"
        },
        sentence: {
          en: "My main goal is to learn French.",
          fa: "هدف اصلی من یادگیری زبان فرانسه است.",
          fr: "Mon but principal est d'apprendre le français.",
          de: "Mein Hauptziel ist es, Französisch zu lernen.",
          ko: "저의 주된 목표는 프랑스어를 배우는 것입니다."
        }
      },
      {
        id: "result",
        word: {
          en: "Result",
          fa: "نتیجه",
          fr: "Résultat",
          de: "Ergebnis",
          it: "Risultato",
          es: "Resultado",
          ru: "Результат",
          zh: "结果",
          ar: "نتيجة",
          ko: "결과"
        },
        sentence: {
          en: "The result of the test was positive.",
          fa: "نتیجه آزمون مثبت بود.",
          fr: "Le résultat du test était positif.",
          de: "Das Ergebnis des Tests war positiv.",
          ko: "시험 결과는 긍정적이었습니다."
        }
      },
      {
        id: "reason",
        word: {
          en: "Reason",
          fa: "دلیل",
          fr: "Raison",
          de: "Grund",
          it: "Ragione",
          es: "Razón",
          ru: "Причина",
          zh: "原因",
          ar: "سبب",
          ko: "이유"
        },
        sentence: {
          en: "What is the reason for your delay?",
          fa: "دلیل تاخیر شما چیست؟",
          fr: "Quelle est la raison de votre retard ?",
          de: "Was ist der Grund für Ihre Verspätung?",
          ko: "당신이 늦은 이유는 무엇입니까?"
        }
      },
      {
        id: "advice",
        word: {
          en: "Advice",
          fa: "نصیحت",
          fr: "Conseil",
          de: "Rat",
          it: "Consiglio",
          es: "Consejo",
          ru: "Совет",
          zh: "建议",
          ar: "نصيحة",
          ko: "조언"
        },
        sentence: {
          en: "Can you give me some advice?",
          fa: "می‌توانید به من نصیحتی بکنید؟",
          fr: "Pouvez-vous me donner un conseil ?",
          de: "Kannst du mir einen Rat geben?",
          ko: "제게 조언을 좀 해주시겠습니까?"
        }
      },
      {
        id: "argument",
        word: {
          en: "Argument",
          fa: "استدلال",
          fr: "Argument",
          de: "Argument",
          it: "Argomento",
          es: "Argumento",
          ru: "Аргумент",
          zh: "争论",
          ar: "جدال",
          ko: "주장"
        },
        sentence: {
          en: "They had convincing arguments.",
          fa: "آن‌ها استدلال‌های متقاعدکننده‌ای داشتند.",
          fr: "Ils avaient des arguments convaincants.",
          de: "Sie hatten überzeugende Argumente.",
          ko: "그들은 설득력 있는 주장을 가지고 있었습니다."
        }
      },
      {
        id: "agreement",
        word: {
          en: "Agreement",
          fa: "توافق",
          fr: "Accord",
          de: "Vereinbarung",
          it: "Accordo",
          es: "Acuerdo",
          ru: "Соглашение",
          zh: "协议",
          ar: "اتفاق"
        },
        sentence: {
          en: "We finally reached an agreement.",
          fa: "ما بالاخره به یک توافق رسیدیم.",
          fr: "Nous sommes finalement parvenus à un accord.",
          de: "Wir haben endlich eine Einigung erzielt.",
          ko: "우리는 마침내 합의에 도달했습니다."
        }
      },
      {
        id: "competition",
        word: {
          en: "Competition",
          fa: "رقابت",
          fr: "Compétition",
          de: "Wettbewerb",
          it: "Competizione",
          es: "Competencia",
          ru: "Конкуренция",
          zh: "竞争",
          ar: "منافسة",
          ko: "경쟁"
        },
        sentence: {
          en: "Competition between companies is intense.",
          fa: "رقابت بین شرکت‌ها شدید است.",
          fr: "La concurrence entre les entreprises est intense.",
          de: "Der Wettbewerb zwischen den Unternehmen ist intensiv.",
          ko: "기업 간의 경쟁이 치열합니다."
        }
      },
      {
        id: "event",
        word: {
          en: "Event",
          fa: "رویداد",
          fr: "Événement",
          de: "Ereignis",
          it: "Evento",
          es: "Evento",
          ru: "Событие",
          zh: "事件",
          ar: "حدث",
          ko: "행사"
        },
        sentence: {
          en: "The event takes place every year.",
          fa: "این رویداد هر سال برگزار می‌شود.",
          fr: "L'événement a lieu chaque année.",
          de: "Das Ereignis findet jedes Jahr statt.",
          ko: "그 행사는 매년 열립니다."
        }
      },
      {
        id: "development",
        word: {
          en: "Development",
          fa: "توسعه",
          fr: "Développement",
          de: "Entwicklung",
          it: "Sviluppo",
          es: "Desarrollo",
          ru: "Развитие",
          zh: "发展",
          ar: "تطوير",
          ko: "개발"
        },
        sentence: {
          en: "Software development takes time.",
          fa: "توسعه نرم‌افزار زمان می‌برد.",
          fr: "Le développement de logiciels prend du temps.",
          de: "Softwareentwicklung braucht Zeit.",
          ko: "소프트웨어 개발에는 시간이 걸립니다."
        }
      },
      {
        id: "responsibility",
        word: {
          en: "Responsibility",
          fa: "مسئولیت",
          fr: "Responsabilité",
          de: "Verantwortung",
          it: "Responsabilità",
          es: "Responsabilidad",
          ru: "Ответственность",
          zh: "责任",
          ar: "مسؤولية",
          ko: "책임"
        },
        sentence: {
          en: "It is your responsibility to finish the project.",
          fa: "این مسئولیت شماست که پروژه را تمام کنید.",
          fr: "C'est votre responsabilité de finir le projet.",
          de: "Es ist Ihre Verantwortung, das Projekt zu beenden.",
          ko: "프로젝트를 끝내는 것은 당신의 책임입니다."
        }
      },
      {
        id: "industry",
        word: {
          en: "Industry",
          fa: "صنعت",
          fr: "Industrie",
          de: "Industrie",
          it: "Industria",
          es: "Industria",
          ru: "Промышленность",
          zh: "工业",
          ar: "صناعة",
          ko: "산업"
        },
        sentence: {
          en: "She works in the fashion industry.",
          fa: "او در صنعت مد کار می‌کند.",
          fr: "Elle travaille dans l'industrie de la mode.",
          de: "Sie arbeitet in der Modebranche.",
          ko: "그녀는 패션 산업에서 일합니다."
        }
      },
      {
        id: "security",
        word: {
          en: "Security",
          fa: "امنیت",
          fr: "Sécurité",
          de: "Sicherheit",
          it: "Sicurezza",
          es: "Seguridad",
          ru: "Безопасность",
          zh: "安全",
          ar: "أمن",
          ko: "보안"
        },
        sentence: {
          en: "Airport security is very strict.",
          fa: "امنیت فرودگاه بسیار دقیق است.",
          fr: "La sécurité de l'aéroport est très stricte.",
          de: "Die Flughafensicherheit ist sehr streng.",
          ko: "공항 보안은 매우 엄격합니다."
        }
      },
      {
        id: "population",
        word: {
          en: "Population",
          fa: "جمعیت",
          fr: "Population",
          de: "Bevölkerung",
          it: "Popolazione",
          es: "Población",
          ru: "Население",
          zh: "人口",
          ar: "سكان",
          ko: "인구"
        },
        sentence: {
          en: "The city's population is growing fast.",
          fa: "جمعیت شهر به سرعت در حال رشد است.",
          fr: "La population de la ville croît rapidement.",
          de: "Die Bevölkerung der Stadt wächst schnell.",
          ko: "도시의 인구는 빠르게 증가하고 있습니다."
        }
      },
      {
        id: "tradition",
        word: {
          en: "Tradition",
          fa: "سنت",
          fr: "Tradition",
          de: "Tradition",
          it: "Tradizione",
          es: "Tradición",
          ru: "Традиция",
          zh: "传统",
          ar: "تقليد",
          ko: "전통"
        },
        sentence: {
          en: "Drinking tea is an old tradition.",
          fa: "نوشیدن چای یک سنت قدیمی است.",
          fr: "Boire du thé est une vieille tradition.",
          de: "Tee trinken ist eine alte Tradition.",
          ko: "차를 마시는 것은 오래된 전통입니다."
        }
      },
      {
        id: "community",
        word: {
          en: "Community",
          fa: "انجمن",
          fr: "Communauté",
          de: "Gemeinschaft",
          it: "Comunità",
          es: "Comunidad",
          ru: "Сообщество",
          zh: "社区",
          ar: "جالية",
          ko: "공동체"
        },
        sentence: {
          en: "He is an active member of the community.",
          fa: "او عضو فعال انجمن است.",
          fr: "Il est un membre actif de la communauté.",
          de: "Er ist ein aktives Mitglied der Gemeinschaft.",
          ko: "그는 지역 사회의 활동적인 회원입니다."
        }
      },
      {
        id: "process",
        word: {
          en: "Process",
          fa: "فرآیند",
          fr: "Processus",
          de: "Prozess",
          it: "Processo",
          es: "Proceso",
          ru: "Процесс",
          zh: "过程",
          ar: "عملية",
          ko: "과정"
        },
        sentence: {
          en: "Learning is a long process.",
          fa: "یادگیری یک فرآیند طولانی است.",
          fr: "L'apprentissage est un long processus.",
          de: "Lernen ist ein langer Prozess.",
          ko: "배움은 긴 과정입니다."
        }
      },
      {
        id: "variety",
        word: {
          en: "Variety",
          fa: "تنوع",
          fr: "Variété",
          de: "Vielfalt",
          it: "Varietà",
          es: "Variedad",
          ru: "Разнообразие",
          zh: "种类",
          ar: "تنوع",
          ko: "다양성"
        },
        sentence: {
          en: "The shop has a large variety of goods.",
          fa: "این مغازه تنوع زیادی از کالاها دارد.",
          fr: "Le magasin a une grande variété de marchandises.",
          de: "Der Laden hat eine große Vielfalt an Waren.",
          ko: "그 가게는 다양한 상품을 보유하고 있습니다."
        }
      },
      {
        id: "difference",
        word: {
          en: "Difference",
          fa: "تفاوت",
          fr: "Différence",
          de: "Unterschied",
          it: "Differenza",
          es: "Diferencia",
          ru: "Разница",
          zh: "差异",
          ar: "اختلاف",
          ko: "차이"
        },
        sentence: {
          en: "What is the difference between these two?",
          fa: "تفاوت بین این دو چیست؟",
          fr: "Quelle est la différence entre ces deux-là ?",
          de: "Was ist der Unterschied zwischen diesen beiden?",
          ko: "이 둘의 차이점은 무엇입니까?"
        }
      },
      {
        id: "similarity",
        word: {
          en: "Similarity",
          fa: "شباهت",
          fr: "Similitude",
          de: "Ähnlichkeit",
          it: "Somiglianza",
          es: "Similitud",
          ru: "Сходство",
          zh: "相似",
          ar: "تشابه",
          ko: "유사성"
        },
        sentence: {
          en: "There is a strong similarity between them.",
          fa: "شباهت زیادی بین آن‌ها وجود دارد.",
          fr: "Il y a une forte similitude entre eux.",
          de: "Es gibt eine starke Ähnlichkeit zwischen ihnen.",
          ko: "그들 사이에는 강한 유사성이 있습니다."
        }
      },
      {
        id: "activity",
        word: {
          en: "Activity",
          fa: "فعالیت",
          fr: "Activité",
          de: "Aktivität",
          it: "Attività",
          es: "Actividad",
          ru: "Деятельность",
          zh: "活动",
          ar: "نشاط",
          ko: "활동"
        },
        sentence: {
          en: "Swimming is my favorite activity.",
          fa: "شنا فعالیت مورد علاقه من است.",
          fr: "La natation est mon activité préférée.",
          de: "Schwimmen ist meine Lieblingsaktivität.",
          ko: "수영은 제가 가장 좋아하는 활동입니다."
        }
      },
      {
        id: "relationship",
        word: {
          en: "Relationship",
          fa: "رابطه",
          fr: "Relation",
          de: "Beziehung",
          it: "Relazione",
          es: "Relación",
          ru: "Отношение",
          zh: "关系",
          ar: "علاقة",
          ko: "관계"
        },
        sentence: {
          en: "They have a good relationship with their neighbors.",
          fa: "آن‌ها رابطه خوبی با همسایگانشان دارند.",
          fr: "Ils ont une bonne relation avec leurs voisins.",
          de: "Sie haben eine gute Beziehung zu ihren Nachbarn.",
          ko: "그들은 이웃과 좋은 관계를 맺고 있습니다."
        }
      },
      {
        id: "role",
        word: {
          en: "Role",
          fa: "نقش",
          fr: "Rôle",
          de: "Rolle",
          it: "Ruolo",
          es: "Rol",
          ru: "Роль",
          zh: "角色",
          ar: "دور",
          ko: "역할"
        },
        sentence: {
          en: "What is the role of education in society?",
          fa: "نقش آموزش در جامعه چیست؟",
          fr: "Quel est le rôle de l'éducation dans la société ?",
          de: "Was ist die Rolle der Bildung in der Gesellschaft?",
          ko: "사회에서 교육의 역할은 무엇입니까?"
        }
      },
      {
        id: "effect",
        word: {
          en: "Effect",
          fa: "اثر",
          fr: "Effet",
          de: "Wirkung",
          it: "Effetto",
          es: "Efecto",
          ru: "Эффект",
          zh: "效果",
          ar: "تأثير",
          ko: "효과"
        },
        sentence: {
          en: "Stress has a bad effect on health.",
          fa: "استرس اثر بدی بر سلامتی دارد.",
          fr: "Le stress a un mauvais effet sur la santé.",
          de: "Stress hat eine schlechte Wirkung auf die Gesundheit.",
          ko: "스트레스는 건강에 나쁜 영향을 미칩니다."
        }
      },
      {
        id: "behavior",
        word: {
          en: "Behavior",
          fa: "رفتار",
          fr: "Comportement",
          de: "Verhalten",
          it: "Comportamento",
          es: "Comportamiento",
          ru: "Поведение",
          zh: "行为",
          ar: "سلوك"
        },
        sentence: {
          en: "His behavior at school has improved.",
          fa: "رفتار او در مدرسه بهتر شده است.",
          fr: "Son comportement à l'école s'est amélioré.",
          de: "Sein Verhalten in der Schule hat sich verbessert.",
          ko: "학교에서 그의 행동이 개선되었습니다."
        }
      },
      {
        id: "memory",
        word: {
          en: "Memory",
          fa: "حافظه/خاطره",
          fr: "Mémoire",
          de: "Erinnerung",
          it: "Memoria",
          es: "Memoria",
          ru: "Память",
          zh: "记忆",
          ar: "ذاكرة",
          ko: "기억"
        },
        sentence: {
          en: "I don't have a good memory for names.",
          fa: "من حافظه خوبی برای اسامی ندارم.",
          fr: "Je n'ai pas une bonne mémoire pour les noms.",
          de: "Ich habe kein gutes Gedächtnis für Namen.",
          ko: "저는 이름에 대한 기억력이 좋지 않습니다."
        }
      },
      {
        id: "imagination",
        word: {
          en: "Imagination",
          fa: "تخیل",
          fr: "Imagination",
          de: "Fantasie",
          it: "Immaginazione",
          es: "Imaginación",
          ru: "Воображение",
          zh: "想象力",
          ar: "خيال",
          ko: "상상력"
        },
        sentence: {
          en: "She has a very vivid imagination.",
          fa: "او تخیل بسیار زنده‌ای دارد.",
          fr: "Elle a une imagination très vive.",
          de: "Sie hat eine sehr lebhafte Fantasie.",
          ko: "그녀는 매우 생생한 상상력을 가지고 있습니다."
        }
      },
      {
        id: "communication",
        word: {
          en: "Communication",
          fa: "ارتباط",
          fr: "Communication",
          de: "Kommunikation",
          it: "Comunicazione",
          es: "Comunicación",
          ru: "Общение",
          zh: "交流",
          ar: "اتصال",
          ko: "의사소통"
        },
        sentence: {
          en: "Good communication is key to success.",
          fa: "ارتباطات خوب کلید موفقیت است.",
          fr: "Une bonne communication est la clé du succès.",
          de: "Gute Kommunikation ist der Schlüssel zum Erfolg.",
          ko: "좋은 의사소통은 성공의 열쇠입니다."
        }
      },
      {
        id: "media",
        word: {
          en: "Media",
          fa: "رسانه",
          fr: "Médias",
          de: "Medien",
          it: "Media",
          es: "Medios",
          ru: "СМИ",
          zh: "媒体",
          ar: "إعلام",
          ko: "미디어"
        },
        sentence: {
          en: "The media plays an important role.",
          fa: "رسانه‌ها نقش مهمی ایفا می‌کنند.",
          fr: "Les médias jouent un rôle important.",
          de: "Die Medien spielen eine wichtige Rolle.",
          ko: "미디어는 중요한 역할을 합니다."
        }
      },
      {
        id: "politics",
        word: {
          en: "Politics",
          fa: "سیاست",
          fr: "Politique",
          de: "Politik",
          it: "Politica",
          es: "Política",
          ru: "Политика",
          zh: "政治",
          ar: "سياسة",
          ko: "정치"
        },
        sentence: {
          en: "I don't have much interest in politics.",
          fa: "من علاقه زیادی به سیاست ندارم.",
          fr: "Je n'ai pas beaucoup d'intérêt pour la politique.",
          de: "Ich habe kein großes Interesse an Politik.",
          ko: "저는 정치에 큰 관심이 없습니다."
        }
      },
      {
        id: "science",
        word: {
          en: "Science",
          fa: "علم",
          fr: "Science",
          de: "Wissenschaft",
          it: "Scienza",
          es: "Ciencia",
          ru: "Наука",
          zh: "科学",
          ar: "علم",
          ko: "과학"
        },
        sentence: {
          en: "Science helps us understand the world.",
          fa: "علم به ما کمک می‌کند جهان را درک کنیم.",
          fr: "La science nous aide à comprendre le monde.",
          de: "Die Wissenschaft hilft uns, die Welt zu verstehen.",
          ko: "과학은 우리가 세상을 이해하는 데 도움을 줍니다."
        }
      },
      {
        id: "vehicle",
        word: {
          en: "Vehicle",
          fa: "وسیله نقلیه",
          fr: "Véhicule",
          de: "Fahrzeug",
          it: "Veicolo",
          es: "Vehículo",
          ru: "Транспортное средство",
          zh: "车辆",
          ar: "مركبة",
          ko: "차량"
        },
        sentence: {
          en: "The vehicle is parked outside.",
          fa: "وسیله نقلیه بیرون پارک شده است.",
          fr: "Le véhicule est garé dehors.",
          de: "Das Fahrzeug parkt draußen.",
          it: "Il veicolo è parcheggiato fuori.",
          es: "El vehículo está estacionado afuera.",
          ru: "Транспортное средство припарковано снаружи.",
          zh: "车辆停在外面。",
          ar: "المركبة متوقفة في الخارج.",
          ko: "차량이 밖에 주차되어 있습니다."
        }
      },
      {
        id: "traffic",
        word: {
          en: "Traffic",
          fa: "ترافیک",
          fr: "Circulation",
          de: "Verkehr",
          it: "Traffico",
          es: "Tráfico",
          ru: "Движение",
          zh: "交通",
          ar: "حركة المرور",
          ko: "교통"
        },
        sentence: {
          en: "There is heavy traffic today.",
          fa: "امروز ترافیک سنگین است.",
          fr: "Il y a beaucoup de circulation aujourd'hui.",
          de: "Heute herrscht starker Verkehr.",
          it: "C'è molto traffico oggi.",
          es: "Hay mucho tráfico hoy.",
          ru: "Сегодня сильное движение.",
          zh: "今天交通拥堵。",
          ar: "حركة المرور كثيفة اليوم.",
          ko: "오늘 교통이 혼잡합니다."
        }
      },
      {
        id: "route",
        word: {
          en: "Route",
          fa: "مسیر",
          fr: "Itinéraire",
          de: "Route",
          it: "Percorso",
          es: "Ruta",
          ru: "Маршрут",
          zh: "路线",
          ar: "طريق",
          ko: "경로"
        },
        sentence: {
          en: "We took a different route.",
          fa: "ما مسیر متفاوتی را انتخاب کردیم.",
          fr: "Nous avons pris un itinéraire différent.",
          de: "Wir haben eine andere Route genommen.",
          it: "Abbiamo preso una strada diversa.",
          es: "Tomamos una ruta diferente.",
          ru: "Мы выбрали другой маршрут.",
          zh: "我们走了不同的路线。",
          ar: "سلكنا طريقاً مختلفاً.",
          ko: "우리는 다른 경로를 택했습니다."
        }
      },
      {
        id: "journey",
        word: {
          en: "Journey",
          fa: "سفر (طولانی)",
          fr: "Voyage",
          de: "Reise",
          it: "Viaggio",
          es: "Viaje",
          ru: "Путешествие",
          zh: "旅程",
          ar: "رحلة",
          ko: "여정"
        },
        sentence: {
          en: "Life is a journey.",
          fa: "زندگی یک سفر است.",
          fr: "La vie est un voyage.",
          de: "Das Leben ist eine Reise.",
          it: "La vita è un viaggio.",
          es: "La vida es un viaje.",
          ru: "Жизнь — это путешествие.",
          zh: "生活是一场旅行。",
          ar: "الحياة رحلة.",
          ko: "인생은 여정입니다."
        }
      },
      {
        id: "flight",
        word: {
          en: "Flight",
          fa: "پرواز",
          fr: "Vol",
          de: "Flug",
          it: "Volo",
          es: "Vuelo",
          ru: "Полет",
          zh: "航班",
          ar: "طيران",
          ko: "비행"
        },
        sentence: {
          en: "The flight was cancelled.",
          fa: "پرواز لغو شد.",
          fr: "Le vol a été annulé.",
          de: "Der Flug wurde gestrichen.",
          it: "Il volo è stato cancellato.",
          es: "El vuelo fue cancelado.",
          ru: "Рейс был отменен.",
          zh: "航班取消了。",
          ar: "ألغيت الرحلة.",
          ko: "비행이 취소되었습니다."
        }
      },
      {
        id: "risk",
        word: {
          en: "Risk",
          fa: "ریسک/خطر",
          fr: "Risque",
          de: "Risiko",
          it: "Rischio",
          es: "Riesgo",
          ru: "Риск",
          zh: "风险",
          ar: "مخاطرة",
          ko: "위험"
        },
        sentence: {
          en: "It is a big risk.",
          fa: "این یک ریسک بزرگ است.",
          fr: "C'est un gros risque.",
          de: "Das ist ein großes Risiko.",
          it: "È un grosso rischio.",
          es: "Es un gran riesgo.",
          ru: "Это большой риск.",
          zh: "这是一个很大的风险。",
          ar: "إنها مخاطرة كبيرة.",
          ko: "그것은 큰 위험입니다."
        }
      },
      {
        id: "danger",
        word: {
          en: "Danger",
          fa: "خطر",
          fr: "Danger",
          de: "Gefahr",
          it: "Pericolo",
          es: "Peligro",
          ru: "Опасность",
          zh: "危险",
          ar: "خطر",
          ko: "위험"
        },
        sentence: {
          en: "Stay away from danger.",
          fa: "از خطر دوری کن.",
          fr: "Reste loin du danger.",
          de: "Bleib der Gefahr fern.",
          it: "Stai lontano dal pericolo.",
          es: "Aléjate del peligro.",
          ru: "Держись подальше от опасности.",
          zh: "远离危险。",
          ar: "ابتعد عن الخطر.",
          ko: "위험에서 멀리 떨어져 있으세요."
        }
      },
      {
        id: "safety",
        word: {
          en: "Safety",
          fa: "ایمنی",
          fr: "Sécurité",
          de: "Sicherheit",
          it: "Sicurezza",
          es: "Seguridad",
          ru: "Безопасность",
          zh: "安全",
          ar: "سلامة",
          ko: "안전"
        },
        sentence: {
          en: "Safety come first.",
          fa: "ایمنی حرف اول را می‌زند.",
          fr: "La sécurité avant tout.",
          de: "Sicherheit geht vor.",
          it: "La sicurezza viene prima.",
          es: "La seguridad es lo primero.",
          ru: "Безопасность превыше всего.",
          zh: "安全第一。",
          ar: "السلامة تأتي أولاً.",
          ko: "안전이 최우선입니다."
        }
      },
      {
        id: "emergency",
        word: {
          en: "Emergency",
          fa: "اورژانس/اضطرار",
          fr: "Urgence",
          de: "Notfall",
          it: "Emergenza",
          es: "Emergencia",
          ru: "Чрезвычайная ситуация",
          zh: "紧急情况",
          ar: "طوارئ",
          ko: "비상"
        },
        sentence: {
          en: "Call in case of emergency.",
          fa: "در صورت اضطرار تماس بگیر.",
          fr: "Appelle en cas d'urgence.",
          de: "Ruf im Notfall an.",
          it: "Chiama in caso di emergenza.",
          es: "Llama en caso de emergencia.",
          ru: "Звони в случае чрезвычайной ситуации.",
          zh: "紧急情况请致电。",
          ar: "اتصل في حالة الطوارئ.",
          ko: "비상시 전화하십시오."
        }
      },
      {
        id: "accident",
        word: {
          en: "Accident",
          fa: "تصادف",
          fr: "Accident",
          de: "Unfall",
          it: "Incidente",
          es: "Accidente",
          ru: "Авария",
          zh: "事故",
          ar: "حادث",
          ko: "사고"
        },
        sentence: {
          en: "He had a car accident.",
          fa: "او تصادف رانندگی داشت.",
          fr: "Il a eu un accident de voiture.",
          de: "Er hatte einen Autounfall.",
          it: "Ha avuto un incidente d'auto.",
          es: "Tuvo un accidente automovilístico.",
          ru: "Он попал в автомобильную аварию.",
          zh: "他出了车祸。",
          ar: "تعرض لحادث سيارة.",
          ko: "그는 자동차 사고를 당했습니다."
        }
      },
      {
        id: "guest",
        word: {
          en: "Guest",
          fa: "مهمان",
          fr: "Invité",
          de: "Gast",
          it: "Ospite",
          es: "Huésped",
          ru: "Гость",
          zh: "客人",
          ar: "ضيف",
          ko: "손님"
        },
        sentence: {
          en: "Be a good guest.",
          fa: "مهمان خوبی باش.",
          fr: "Sois un bon invité.",
          de: "Sei ein guter Gast.",
          it: "Sii un buon ospite.",
          es: "Sé un buen invitado.",
          ru: "Будь хорошим гостем.",
          zh: "做一个好客人。",
          ar: "كن ضيفاً جيداً.",
          ko: "좋은 손님이 되세요."
        }
      },
      {
        id: "host",
        word: {
          en: "Host",
          fa: "میزبان",
          fr: "Hôte",
          de: "Gastgeber",
          it: "Ospite (padrone)",
          es: "Anfitrión",
          ru: "Хозяин",
          zh: "主人",
          ar: "مضيف",
          ko: "주인"
        },
        sentence: {
          en: "The host welcomed us.",
          fa: "میزبان به ما خوش‌آمد گفت.",
          fr: "L'hôte nous a accueillis.",
          de: "Der Gastgeber hieß uns willkommen.",
          it: "L'ospite ci ha dato il benvenuto.",
          es: "El anfitrión nos dio la bienvenida.",
          ru: "Хозяин приветствовал нас.",
          zh: "主人欢迎我们。",
          ar: "رحب بنا المضيف.",
          ko: "주인은 우리를 환영했습니다."
        }
      },
      {
        id: "neighbor",
        word: {
          en: "Neighbor",
          fa: "همسایه",
          fr: "Voisin",
          de: "Nachbar",
          it: "Vicino",
          es: "Vecino",
          ru: "Сосед",
          zh: "邻居",
          ar: "جار",
          ko: "이웃"
        },
        sentence: {
          en: "My neighbor is quiet.",
          fa: "همسایه من ساکت است.",
          fr: "Mon voisin est calme.",
          de: "Mein Nachbar ist ruhig.",
          it: "Il mio vicino è tranquillo.",
          es: "Mi vecino es tranquilo.",
          ru: "Мой сосед тихий.",
          zh: "我的邻居很安静。",
          ar: "جاري هادئ.",
          ko: "내 이웃은 조용합니다."
        }
      },
      {
        id: "stranger",
        word: {
          en: "Stranger",
          fa: "غریبه",
          fr: "Étranger",
          de: "Fremder",
          it: "Sconosciuto",
          es: "Desconocido",
          ru: "Незнакомец",
          zh: "陌生人",
          ar: "غريب",
          ko: "낯선 사람"
        },
        sentence: {
          en: "Don't talk to strangers.",
          fa: "با غریبه‌ها حرف نزن.",
          fr: "Ne parle pas aux inconnus.",
          de: "Sprich nicht mit Fremden.",
          it: "Non parlare con gli sconosciuti.",
          es: "No hables con extraños.",
          ru: "Не разговаривай с незнакомцами.",
          zh: "不要和陌生人说话。",
          ar: "لا تتحدث مع الغرباء.",
          ko: "낯선 사람과 이야기하지 마세요."
        }
      },
      {
        id: "citizen",
        word: {
          en: "Citizen",
          fa: "شهروند",
          fr: "Citoyen",
          de: "Bürger",
          it: "Cittadino",
          es: "Ciudadano",
          ru: "Гражданин",
          zh: "公民",
          ar: "مواطن",
          ko: "시민"
        },
        sentence: {
          en: "She is a US citizen.",
          fa: "او شهروند آمریکا است.",
          fr: "Elle est citoyenne américaine.",
          de: "Sie ist US-Bürgerin.",
          it: "È cittadina americana.",
          es: "Ella es ciudadana estadounidense.",
          ru: "Она гражданка США.",
          zh: "她是美国公民。",
          ar: "إنها مواطنة أمريكية.",
          ko: "그녀는 미국 시민입니다."
        }
      },
      {
        id: "generation",
        word: {
          en: "Generation",
          fa: "نسل",
          fr: "Génération",
          de: "Generation",
          it: "Generazione",
          es: "Generación",
          ru: "Поколение",
          zh: "一代",
          ar: "جيل",
          ko: "세대"
        },
        sentence: {
          en: "A new generation.",
          fa: "یک نسل جدید.",
          fr: "Une nouvelle génération.",
          de: "Eine neue Generation.",
          it: "Una nuova generazione.",
          es: "Una nueva generación.",
          ru: "Новое поколение.",
          zh: "新一代。",
          ar: "جيل جديد.",
          ko: "새로운 세대."
        }
      },
      {
        id: "century",
        word: {
          en: "Century",
          fa: "قرن",
          fr: "Siècle",
          de: "Jahrhundert",
          it: "Secolo",
          es: "Siglo",
          ru: "Век",
          zh: "世纪",
          ar: "قرن",
          ko: "세기"
        },
        sentence: {
          en: "We live in the 21st century.",
          fa: "ما در قرن ۲۱ زندگی می‌کنیم.",
          fr: "Nous vivons au 21ème siècle.",
          de: "Wir leben im 21. Jahrhundert.",
          it: "Viviamo nel 21° secolo.",
          es: "Vivimos en el siglo 21.",
          ru: "Мы живем в 21 веке.",
          zh: "我们生活在21世纪。",
          ar: "نحن نعيش في القرن الحادي والعشرين.",
          ko: "우리는 21세기에 살고 있습니다."
        }
      },
      {
        id: "period",
        word: {
          en: "Period",
          fa: "دوره",
          fr: "Période",
          de: "Periode",
          it: "Periodo",
          es: "Periodo",
          ru: "Период",
          zh: "期间",
          ar: "فترة",
          ko: "기간"
        },
        sentence: {
          en: "A period of peace.",
          fa: "یک دوره صلح.",
          fr: "Une période de paix.",
          de: "Eine Zeit des Friedens.",
          it: "Un periodo di pace.",
          es: "Un período de paz.",
          ru: "Период мира.",
          zh: "和平时期。",
          ar: "فترة سلام.",
          ko: "평화의 기간."
        }
      },
      {
        id: "moment",
        word: {
          en: "Moment",
          fa: "لحظه",
          fr: "Moment",
          de: "Moment",
          it: "Momento",
          es: "Momento",
          ru: "Момент",
          zh: "时刻",
          ar: "لحظة",
          ko: "순간"
        },
        sentence: {
          en: "Wait a moment.",
          fa: "یک لحظه صبر کن.",
          fr: "Attends un moment.",
          de: "Warte einen Moment.",
          it: "Aspetta un momento.",
          es: "Espera un momento.",
          ru: "Подожди минутку.",
          zh: "等一下。",
          ar: "انتظر لحظة.",
          ko: "잠시만 기다려주세요."
        }
      },
      {
        id: "future",
        word: {
          en: "Future",
          fa: "آینده",
          fr: "Futur",
          de: "Zukunft",
          it: "Futuro",
          es: "Futuro",
          ru: "Будущее",
          zh: "未来",
          ar: "مستقبل",
          ko: "미래"
        },
        sentence: {
          en: "The future is bright.",
          fa: "آینده روشن است.",
          fr: "L'avenir est brillant.",
          de: "Die Zukunft ist rosig.",
          it: "Il futuro è luminoso.",
          es: "El futuro es brillante.",
          ru: "Будущее светлое.",
          zh: "未来是光明的。",
          ar: "المستقبل مشرق.",
          ko: "미래는 밝습니다."
        }
      },
      {
        id: "difficulty",
        word: {
          en: "Difficulty",
          fa: "سختی/مشکل",
          fr: "Difficulté",
          de: "Schwierigkeit",
          it: "Difficoltà",
          es: "Dificultad",
          ru: "Трудность",
          zh: "困难",
          ar: "صعوبة",
          ko: "어려움"
        },
        sentence: {
          en: "I had some difficulty.",
          fa: "من کمی مشکل داشتم.",
          fr: "J'ai eu des difficultés.",
          de: "Ich hatte einige Schwierigkeiten.",
          it: "Ho avuto qualche difficoltà.",
          es: "Tuve algunas dificultades.",
          ru: "У меня были трудности.",
          zh: "我有困难。",
          ar: "واجهت بعض الصعوبة.",
          ko: "나는 약간의 어려움이 있었습니다."
        }
      },
      {
        id: "possibility",
        word: {
          en: "Possibility",
          fa: "امکان",
          fr: "Possibilité",
          de: "Möglichkeit",
          it: "Possibilità",
          es: "Posibilidad",
          ru: "Возможность",
          zh: "可能性",
          ar: "إمكانية",
          ko: "가능성"
        },
        sentence: {
          en: "There is a possibility.",
          fa: "یک احتمالی وجود دارد.",
          fr: "Il y a une possibilité.",
          de: "Es gibt eine Möglichkeit.",
          it: "C'è una possibilità.",
          es: "Existe una posibilidad.",
          ru: "Есть возможность.",
          zh: "有一种可能性。",
          ar: "هناك احتمال.",
          ko: "가능성이 있습니다."
        }
      },
      {
        id: "necessity",
        word: {
          en: "Necessity",
          fa: "ضرورت",
          fr: "Nécessité",
          de: "Notwendigkeit",
          it: "Necessità",
          es: "Necesidad",
          ru: "Необходимость",
          zh: "必要性",
          ar: "ضرورة",
          ko: "필요성"
        },
        sentence: {
          en: "It is a necessity.",
          fa: "این یک ضرورت است.",
          fr: "C'est une nécessité.",
          de: "Es ist eine Notwendigkeit.",
          it: "È una necessità.",
          es: "Es una necesidad.",
          ru: "Это необходимость.",
          zh: "这是必要的。",
          ar: "إنها ضرورة.",
          ko: "그것은 필수입니다."
        }
      },
      {
        id: "permission",
        word: {
          en: "Permission",
          fa: "اجازه",
          fr: "Permission",
          de: "Erlaubnis",
          it: "Permesso",
          es: "Permiso",
          ru: "Разрешение",
          zh: "许可",
          ar: "إذن",
          ko: "허가"
        },
        sentence: {
          en: "Ask for permission.",
          fa: "اجازه بگیر.",
          fr: "Demande la permission.",
          de: "Bitte um Erlaubnis.",
          it: "Chiedi il permesso.",
          es: "Pide permiso.",
          ru: "Спроси разрешения.",
          zh: "请求许可。",
          ar: "اطلب الإذن.",
          ko: "허락을 구하세요."
        }
      },
      {
        id: "ability",
        word: {
          en: "Ability",
          fa: "توانایی",
          fr: "Capacité",
          de: "Fähigkeit",
          it: "Abilità",
          es: "Habilidad",
          ru: "Способность",
          zh: "能力",
          ar: "قدرة",
          ko: "능력"
        },
        sentence: {
          en: "She has the ability.",
          fa: "او توانایی‌اش را دارد.",
          fr: "Elle a la capacité.",
          de: "Sie hat die Fähigkeit.",
          it: "Lei ha l'abilità.",
          es: "Ella tiene la habilidad.",
          ru: "У нее есть способность.",
          zh: "她有能力。",
          ar: "لديها القدرة.",
          ko: "그녀는 능력이 있습니다."
        }
      },
      {
        id: "message",
        word: {
          en: "Message",
          fa: "پیام",
          fr: "Message",
          de: "Nachricht",
          it: "Messaggio",
          es: "Mensaje",
          ru: "Сообщение",
          zh: "信息",
          ar: "رسالة",
          ko: "메시지"
        },
        sentence: {
          en: "I got your message.",
          fa: "پیامت را دریافت کردم.",
          fr: "J'ai reçu ton message.",
          de: "Ich habe deine Nachricht erhalten.",
          it: "Ho ricevuto il tuo messaggio.",
          es: "Recibí tu mensaje.",
          ru: "Я получил твое сообщение.",
          zh: "我收到了你的消息。",
          ar: "استلمت رسالتك.",
          ko: "당신의 메시지를 받았습니다."
        }
      },
      {
        id: "signal",
        word: {
          en: "Signal",
          fa: "سیگنال/علامت",
          fr: "Signal",
          de: "Signal",
          it: "Segnale",
          es: "Señal",
          ru: "Сигнал",
          zh: "信号",
          ar: "إشارة",
          ko: "신호"
        },
        sentence: {
          en: "The signal is weak.",
          fa: "سیگنال ضعیف است.",
          fr: "Le signal est faible.",
          de: "Das Signal ist schwach.",
          it: "Il segnale è debole.",
          es: "La señal es débil.",
          ru: "Сигнал слабый.",
          zh: "信号很弱。",
          ar: "الإشارة ضعيفة.",
          ko: "신호가 약합니다."
        }
      },
      {
        id: "discussion",
        word: {
          en: "Discussion",
          fa: "بحث",
          fr: "Discussion",
          de: "Diskussion",
          it: "Discussione",
          es: "Discusión",
          ru: "Обсуждение",
          zh: "讨论",
          ar: "مناقشة",
          ko: "토론"
        },
        sentence: {
          en: "We had a long discussion.",
          fa: "ما بحث طولانی‌ای داشتیم.",
          fr: "Nous avons eu une longue discussion.",
          de: "Wir hatten eine lange Diskussion.",
          it: "Abbiamo avuto una lunga discussione.",
          es: "Tuvimos una larga discusión.",
          ru: "У нас была долгая дискуссия.",
          zh: "我们进行了长时间的讨论。",
          ar: "أجرينا مناقشة طويلة.",
          ko: "우리는 긴 토론을 했습니다."
        }
      },
      {
        id: "conversation",
        word: {
          en: "Conversation",
          fa: "مکالمه",
          fr: "Conversation",
          de: "Gespräch",
          it: "Conversazione",
          es: "Conversación",
          ru: "Разговор",
          zh: "对话",
          ar: "محادثة",
          ko: "대화"
        },
        sentence: {
          en: "Nice conversation.",
          fa: "گفتگوی خوبی بود.",
          fr: "Belle conversation.",
          de: "Nettes Gespräch.",
          it: "Bella conversazione.",
          es: "Buena conversación.",
          ru: "Приятный разговор.",
          zh: "愉快的交谈。",
          ar: "محادثة لطيفة.",
          ko: "즐거운 대화였습니다."
        }
      },
      {
        id: "speech",
        word: {
          en: "Speech",
          fa: "سخنرانی",
          fr: "Discours",
          de: "Rede",
          it: "Discorso",
          es: "Discurso",
          ru: "Речь",
          zh: "演讲",
          ar: "خطاب",
          ko: "연설"
        },
        sentence: {
          en: "He gave a speech.",
          fa: "او سخنرانی کرد.",
          fr: "Il a fait un discours.",
          de: "Er hielt eine Rede.",
          it: "Ha fatto un discorso.",
          es: "Dio un discurso.",
          ru: "Он произнес речь.",
          zh: "他发表演讲。",
          ar: "ألقى خطاباً.",
          ko: "그는 연설을 했습니다."
        }
      },
      {
        id: "mind",
        word: {
          en: "Mind",
          fa: "ذهن",
          fr: "Esprit",
          de: "Verstand",
          it: "Mente",
          es: "Mente",
          ru: "Разум",
          zh: "头脑",
          ar: "عقل",
          ko: "마음"
        },
        sentence: {
          en: "Change your mind.",
          fa: "نظرت را عوض کن.",
          fr: "Change d'avis.",
          de: "Ändere deine Meinung.",
          it: "Cambia idea.",
          es: "Cambia de opinión.",
          ru: "Передумай.",
          zh: "改变你的想法。",
          ar: "غير رأيك.",
          ko: "마음을 바꾸세요."
        }
      },
      {
        id: "thought",
        word: {
          en: "Thought",
          fa: "فکر",
          fr: "Pensée",
          de: "Gedanke",
          it: "Pensiero",
          es: "Pensamiento",
          ru: "Мысль",
          zh: "思想",
          ar: "فكر",
          ko: "생각"
        },
        sentence: {
          en: "Deep thought.",
          fa: "فکر عمیق.",
          fr: "Pensée profonde.",
          de: "Tiefer Gedanke.",
          it: "Pensiero profondo.",
          es: "Pensamiento profundo.",
          ru: "Глубокая мысль.",
          zh: "深思。",
          ar: "تفكير عميق.",
          ko: "깊은 생각."
        }
      },
      {
        id: "spirit",
        word: {
          en: "Spirit",
          fa: "روحیه/شبح",
          fr: "Esprit",
          de: "Geist",
          it: "Spirito",
          es: "Espíritu",
          ru: "Дух",
          zh: "精神",
          ar: "روح",
          ko: "정신"
        },
        sentence: {
          en: "Team spirit.",
          fa: "روحیه تیمی.",
          fr: "Esprit d'équipe.",
          de: "Teamgeist.",
          it: "Spirito di squadra.",
          es: "Espíritu de equipo.",
          ru: "Командный дух.",
          zh: "团队精神。",
          ar: "روح الفريق.",
          ko: "팀 정신."
        }
      },
      {
        id: "soul",
        word: {
          en: "Soul",
          fa: "جان/روح",
          fr: "Âme",
          de: "Seele",
          it: "Anima",
          es: "Alma",
          ru: "Душа",
          zh: "灵魂",
          ar: "نفس",
          ko: "영혼"
        },
        sentence: {
          en: "Music feeds the soul.",
          fa: "موسیقی خوراک روح است.",
          fr: "La musique nourrit l'âme.",
          de: "Musik nährt die Seele.",
          it: "La musica nutre l'anima.",
          es: "La música alimenta el alma.",
          ru: "Музыка питает душу.",
          zh: "音乐滋养灵魂。",
          ar: "الموسيق تغذي الروح.",
          ko: "음악은 영혼을 키웁니다."
        }
      },
      {
        id: "belief",
        word: {
          en: "Belief",
          fa: "باور",
          fr: "Croyance",
          de: "Glaube",
          it: "Credenza",
          es: "Creencia",
          ru: "Вера",
          zh: "信仰",
          ar: "معتقد",
          ko: "믿음"
        },
        sentence: {
          en: "It is my belief.",
          fa: "این باور من است.",
          fr: "C'est ma croyance.",
          de: "Es ist mein Glaube.",
          it: "È la mia convinzione.",
          es: "Es mi creencia.",
          ru: "Это мое убеждение.",
          zh: "这是我的信念。",
          ar: "هذا معتقدي.",
          ko: "이것은 내 믿음입니다."
        }
      },
      {
        id: "shape",
        word: {
          en: "Shape",
          fa: "شکل",
          fr: "Forme",
          de: "Form",
          it: "Forma",
          es: "Forma",
          ru: "Форма",
          zh: "形状",
          ar: "شكل",
          ko: "모양"
        },
        sentence: {
          en: "What shape is it?",
          fa: "چه شکلی است؟",
          fr: "Quelle forme a-t-il ?",
          de: "Welche Form hat es?",
          it: "Che forma ha?",
          es: "¿Qué forma tiene?",
          ru: "Какой это формы?",
          zh: "它是什么形状？",
          ar: "ما هو شكله؟",
          ko: "무슨 모양입니까?"
        }
      },
      {
        id: "size",
        word: {
          en: "Size",
          fa: "اندازه",
          fr: "Taille",
          de: "Größe",
          it: "Dimensione",
          es: "Tamaño",
          ru: "Размер",
          zh: "尺寸",
          ar: "حجم",
          ko: "크기"
        },
        sentence: {
          en: "Pick the right size.",
          fa: "اندازه درست را انتخاب کن.",
          fr: "Choisis la bonne taille.",
          de: "Wähle die richtige Größe.",
          it: "Scegli la taglia giusta.",
          es: "Elige el tamaño correcto.",
          ru: "Выбери правильный размер.",
          zh: "选择合适的尺寸。",
          ar: "اختر الحجم المناسب.",
          ko: "올바른 크기를 선택하세요."
        }
      },
      {
        id: "weight",
        word: {
          en: "Weight",
          fa: "وزن",
          fr: "Poids",
          de: "Gewicht",
          it: "Peso",
          es: "Peso",
          ru: "Вес",
          zh: "重量",
          ar: "وزن",
          ko: "무게"
        },
        sentence: {
          en: "Watch your weight.",
          fa: "مراقب وزنت باش.",
          fr: "Surveille ton poids.",
          de: "Achte auf dein Gewicht.",
          it: "Controlla il tuo peso.",
          es: "Cuida tu peso.",
          ru: "Следи за своим весом.",
          zh: "注意你的体重。",
          ar: "راقب وزنك.",
          ko: "체중에 주의하세요."
        }
      },
      {
        id: "length",
        word: {
          en: "Length",
          fa: "طول",
          fr: "Longueur",
          de: "Länge",
          it: "Lunghezza",
          es: "Longitud",
          ru: "Длина",
          zh: "长度",
          ar: "طول",
          ko: "길이"
        },
        sentence: {
          en: "Measure the length.",
          fa: "طول را اندازه بگیر.",
          fr: "Mesure la longueur.",
          de: "Miss die Länge.",
          it: "Misura la lunghezza.",
          es: "Mide la longitud.",
          ru: "Измерь длину.",
          zh: "测量长度。",
          ar: "قس الطول.",
          ko: "길이를 측정하세요."
        }
      },
      {
        id: "distance",
        word: {
          en: "Distance",
          fa: "فاصله",
          fr: "Distance",
          de: "Entfernung",
          it: "Distanza",
          es: "Distancia",
          ru: "Расстояние",
          zh: "距离",
          ar: "مسافة",
          ko: "거리"
        },
        sentence: {
          en: "Long distance.",
          fa: "مسافت طولانی.",
          fr: "Longue distance.",
          de: "Lange Distanz.",
          it: "Lunga distanza.",
          es: "Larga distancia.",
          ru: "Дальнее расстояние.",
          zh: "长距离。",
          ar: "مسافة طويلة.",
          ko: "장거리."
        }
      },
      {
        id: "surface",
        word: {
          en: "Surface",
          fa: "سطح",
          fr: "Surface",
          de: "Oberfläche",
          it: "Superficie",
          es: "Superficie",
          ru: "Поверхность",
          zh: "表面",
          ar: "سطح",
          ko: "표면"
        },
        sentence: {
          en: "Smooth surface.",
          fa: "سطح صاف.",
          fr: "Surface lisse.",
          de: "Glatte Oberfläche.",
          it: "Superficie liscia.",
          es: "Superficie lisa.",
          ru: "Гладкая поверхность.",
          zh: "光滑的表面。",
          ar: "سطح أملس.",
          ko: "매끄러운 표면."
        }
      },
      {
        id: "material",
        word: {
          en: "Material",
          fa: "جنس/ماده",
          fr: "Matériau",
          de: "Material",
          it: "Materiale",
          es: "Material",
          ru: "Материал",
          zh: "材料",
          ar: "مادة",
          ko: "재료"
        },
        sentence: {
          en: "Natural material.",
          fa: "مواد طبیعی.",
          fr: "Matériau naturel.",
          de: "Natürliches Material.",
          it: "Materiale naturale.",
          es: "Material natural.",
          ru: "Натуральный материал.",
          zh: "天然材料。",
          ar: "مادة طبيعية.",
          ko: "천연 재료."
        }
      },
      {
        id: "object",
        word: {
          en: "Object",
          fa: "شیء",
          fr: "Objet",
          de: "Objekt",
          it: "Oggetto",
          es: "Objeto",
          ru: "Объект",
          zh: "物体",
          ar: "شيء",
          ko: "물체"
        },
        sentence: {
          en: "Identify the object.",
          fa: "شیء را شناسایی کن.",
          fr: "Identifie l'objet.",
          de: "Identifiziere das Objekt.",
          it: "Identifica l'oggetto.",
          es: "Identifica el objeto.",
          ru: "Определи объект.",
          zh: "识别物体。",
          ar: "حدد الكائن.",
          ko: "물체를 식별하세요."
        }
      },
      {
        id: "tool",
        word: {
          en: "Tool",
          fa: "ابزار",
          fr: "Outil",
          de: "Werkzeug",
          it: "Strumento",
          es: "Herramienta",
          ru: "Инструмент",
          zh: "工具",
          ar: "أداة",
          ko: "도구"
        },
        sentence: {
          en: "Use the right tool.",
          fa: "از ابزار درست استفاده کن.",
          fr: "Utilise le bon outil.",
          de: "Benutze das richtige Werkzeug.",
          it: "Usa lo strumento giusto.",
          es: "Usa la herramienta correcta.",
          ru: "Используй правильный инструмент.",
          zh: "使用正确的工具。",
          ar: "استخدم الأداة المناسبة.",
          ko: "올바른 도구를 사용하세요."
        }
      },
      {
        id: "machine",
        word: {
          en: "Machine",
          fa: "دستگاه",
          fr: "Machine",
          de: "Maschine",
          it: "Macchina",
          es: "Máquina",
          ru: "Машина",
          zh: "机器",
          ar: "آلة",
          ko: "기계"
        },
        sentence: {
          en: "The machine is working.",
          fa: "دستگاه کار می‌کند.",
          fr: "La machine fonctionne.",
          de: "Die Maschine funktioniert.",
          it: "La macchina funziona.",
          es: "La máquina está funcionando.",
          ru: "Машина работает.",
          zh: "机器正在运转。",
          ar: "الآلة تعمل.",
          ko: "기계가 작동 중입니다."
        }
      },
      {
        id: "internet",
        word: {
          en: "Internet",
          fa: "اینترنت",
          fr: "Internet",
          de: "Internet",
          it: "Internet",
          es: "Internet",
          ru: "Интернет",
          zh: "互联网",
          ar: "إنترنت",
          ko: "인터넷"
        },
        sentence: {
          en: "The internet connects people worldwide.",
          fa: "اینترنت مردم را در سراسر جهان متصل می‌کند.",
          fr: "Internet connecte les gens du monde entier.",
          de: "Das Internet verbindet Menschen weltweit.",
          it: "Internet collega le persone in tutto il mondo.",
          es: "Internet conecta a las personas en todo el mundo.",
          ru: "Интернет соединяет людей по всему миру.",
          zh: "互联网连接全世界的人。",
          ar: "الإنترنت يربط الناس في جميع أنحاء العالم.",
          ko: "인터넷은 전 세계 사람들을 연결합니다."
        }
      },
      {
        id: "website",
        word: {
          en: "Website",
          fa: "وب‌سایت",
          fr: "Site web",
          de: "Webseite",
          it: "Sito web",
          es: "Sitio web",
          ru: "Веб-сайт",
          zh: "网站",
          ar: "موقع الكتروني",
          ko: "웹사이트"
        },
        sentence: {
          en: "This website is very informative.",
          fa: "این وب‌سایت بسیار آموزنده است.",
          fr: "Ce site web est très informatif.",
          de: "Diese Webseite ist sehr informativ.",
          it: "Questo sito web è molto informativo.",
          es: "Este sitio web es muy informativo.",
          ru: "Этот веб-сайт очень информативный.",
          zh: "这个网站非常有信息量。",
          ar: "هذا الموقع غني بالمعلومات.",
          ko: "이 웹사이트는 매우 유익합니다."
        }
      },
      {
        id: "network",
        word: {
          en: "Network",
          fa: "شبکه",
          fr: "Réseau",
          de: "Netzwerk",
          it: "Rete",
          es: "Red",
          ru: "Сеть",
          zh: "网络",
          ar: "شبكة",
          ko: "네트워크"
        },
        sentence: {
          en: "A strong social network.",
          fa: "یک شبکه اجتماعی قوی.",
          fr: "Un réseau social fort.",
          de: "Ein starkes soziales Netzwerk.",
          it: "Una forte rete sociale.",
          es: "Una red social fuerte.",
          ru: "Сильная социальная сеть.",
          zh: "强大的社交网络。",
          ar: "شبكة اجتماعية قوية.",
          ko: "강력한 소셜 네트워크."
        }
      },
      {
        id: "data",
        word: {
          en: "Data",
          fa: "داده",
          fr: "Données",
          de: "Daten",
          it: "Dati",
          es: "Datos",
          ru: "Данные",
          zh: "数据",
          ar: "بيانات",
          ko: "데이터"
        },
        sentence: {
          en: "Analyze the data.",
          fa: "داده‌ها را تحلیل کن.",
          fr: "Analyse les données.",
          de: "Analysiere die Daten.",
          it: "Analizza i dati.",
          es: "Analiza los datos.",
          ru: "Проанализируй данные.",
          zh: "分析数据。",
          ar: "حلل البيانات.",
          ko: "데이터를 분석하세요."
        }
      },
      {
        id: "software",
        word: {
          en: "Software",
          fa: "نرم‌افزار",
          fr: "Logiciel",
          de: "Software",
          it: "Software",
          es: "Software",
          ru: "Программное обеспечение",
          zh: "软件",
          ar: "برمجيات",
          ko: "소프트웨어"
        },
        sentence: {
          en: "Update the software.",
          fa: "نرم‌افزار را به‌روزرسانی کن.",
          fr: "Mets à jour le logiciel.",
          de: "Aktualisiere die Software.",
          it: "Aggiorna il software.",
          es: "Actualiza el software.",
          ru: "Обнови программное обеспечение.",
          zh: "更新软件。",
          ar: "حدث البرنامج.",
          ko: "소프트웨어를 업데이트하세요."
        }
      },
      {
        id: "analysis",
        word: {
          en: "Analysis",
          fa: "تحلیل",
          fr: "Analyse",
          de: "Analyse",
          it: "Analisi",
          es: "Análisis",
          ru: "Анализ",
          zh: "分析",
          ar: "تحليل",
          ko: "분석"
        },
        sentence: {
          en: "Detailed analysis.",
          fa: "تحلیل دقیق.",
          fr: "Analyse détaillée.",
          de: "Detaillierte Analyse.",
          it: "Analisi dettagliata.",
          es: "Análisis detallado.",
          ru: "Подробный анализ.",
          zh: "详细分析。",
          ar: "تحليل مفصل.",
          ko: "상세 분석."
        }
      },
      {
        id: "research",
        word: {
          en: "Research",
          fa: "تحقیق/پژوهش",
          fr: "Recherche",
          de: "Forschung",
          it: "Ricerca",
          es: "Investigación",
          ru: "Исследование",
          zh: "研究",
          ar: "بحث",
          ko: "연구"
        },
        sentence: {
          en: "Scientific research.",
          fa: "تحقیق علمی.",
          fr: "Recherche scientifique.",
          de: "Wissenschaftliche Forschung.",
          it: "Ricerca scientifica.",
          es: "Investigación científica.",
          ru: "Научное исследование.",
          zh: "科学研究。",
          ar: "بحث علمي.",
          ko: "과학 연구."
        }
      },
      {
        id: "strategy",
        word: {
          en: "Strategy",
          fa: "استراتژی/راهبرد",
          fr: "Stratégie",
          de: "Strategie",
          it: "Strategia",
          es: "Estrategia",
          ru: "Стратегия",
          zh: "策略",
          ar: "استراتيجية",
          ko: "전략"
        },
        sentence: {
          en: "We need a strategy.",
          fa: "ما به یک استراتژی نیاز داریم.",
          fr: "Nous avons besoin d'une stratégie.",
          de: "Wir brauchen eine Strategie.",
          it: "Abbiamo bisogno di una strategia.",
          es: "Necesitamos una estrategia.",
          ru: "Нам нужна стратегия.",
          zh: "我们需要一个策略。",
          ar: "نحن بحاجة إلى استراتيجية.",
          ko: "우리는 전략이 필요합니다."
        }
      },
      {
        id: "concept",
        word: {
          en: "Concept",
          fa: "مفهوم",
          fr: "Concept",
          de: "Konzept",
          it: "Concetto",
          es: "Concepto",
          ru: "Концепция",
          zh: "概念",
          ar: "مفهوم",
          ko: "개념"
        },
        sentence: {
          en: "A new concept.",
          fa: "یک مفهوم جدید.",
          fr: "Un nouveau concept.",
          de: "Ein neues Konzept.",
          it: "Un nuovo concetto.",
          es: "Un nuevo concepto.",
          ru: "Новая концепция.",
          zh: "一个新概念。",
          ar: "مفهوم جديد.",
          ko: "새로운 개념."
        }
      },
      {
        id: "definition",
        word: {
          en: "Definition",
          fa: "تعریف",
          fr: "Définition",
          de: "Definition",
          it: "Definizione",
          es: "Definición",
          ru: "Определение",
          zh: "定义",
          ar: "تعريف",
          ko: "정의"
        },
        sentence: {
          en: "What is the definition?",
          fa: "تعریف چیست؟",
          fr: "Quelle est la définition ?",
          de: "Was ist die Definition?",
          it: "Qual è la definizione?",
          es: "¿Cuál es la definición?",
          ru: "Каково определение?",
          zh: "定义是什么？",
          ar: "ما هو التعريف؟",
          ko: "정의가 무엇입니까?"
        }
      },
      {
        id: "challenge",
        word: {
          en: "Challenge",
          fa: "چالش",
          fr: "Défi",
          de: "Herausforderung",
          it: "Sfida",
          es: "Desafío",
          ru: "Вызов",
          zh: "挑战",
          ar: "تحدي",
          ko: "도전"
        },
        sentence: {
          en: "Accept the challenge.",
          fa: "چالش را بپذیر.",
          fr: "Accepte le défi.",
          de: "Nimm die Herausforderung an.",
          it: "Accetta la sfida.",
          es: "Acepta el desafío.",
          ru: "Прими вызов.",
          zh: "接受挑战。",
          ar: "اقبل التحدي.",
          ko: "도전을 받아들이세요."
        }
      },
      {
        id: "advantage",
        word: {
          en: "Advantage",
          fa: "مزیت",
          fr: "Avantage",
          de: "Vorteil",
          it: "Vantaggio",
          es: "Ventaja",
          ru: "Преимущество",
          zh: "优势",
          ar: "ميزة",
          ko: "장점"
        },
        sentence: {
          en: "It has many advantages.",
          fa: "مزایای زیادی دارد.",
          fr: "Cela a de nombreux avantages.",
          de: "Es hat viele Vorteile.",
          it: "Ha molti vantaggi.",
          es: "Tiene muchas ventajas.",
          ru: "У этого много преимуществ.",
          zh: "它有很多优点。",
          ar: "له مزايا عديدة.",
          ko: "그것은 많은 장점이 있습니다."
        }
      },
      {
        id: "disadvantage",
        word: {
          en: "Disadvantage",
          fa: "عیب/ضرر",
          fr: "Désavantage",
          de: "Nachteil",
          it: "Svantaggio",
          es: "Desventaja",
          ru: "Недостаток",
          zh: "劣势",
          ar: "عيب",
          ko: "단점"
        },
        sentence: {
          en: "There is one disadvantage.",
          fa: "یک نقطه ضعف وجود دارد.",
          fr: "Il y a un inconvénient.",
          de: "Es gibt einen Nachteil.",
          it: "C'è uno svantaggio.",
          es: "Hay una desventaja.",
          ru: "Есть один недостаток.",
          zh: "有一个缺点。",
          ar: "هناك عيب واحد.",
          ko: "단점이 하나 있습니다."
        }
      },
      {
        id: "benefit",
        word: {
          en: "Benefit",
          fa: "منفعت",
          fr: "Bénéfice",
          de: "Nutzen",
          it: "Beneficio",
          es: "Beneficio",
          ru: "Выгода",
          zh: "利益",
          ar: "فائدة",
          ko: "이익"
        },
        sentence: {
          en: "For your benefit.",
          fa: "به نفع شما.",
          fr: "Pour votre bénéfice.",
          de: "Zu Ihrem Vorteil.",
          it: "A tuo beneficio.",
          es: "Para tu beneficio.",
          ru: "Для твоей пользы.",
          zh: "为了你的利益。",
          ar: "لمصلحتك.",
          ko: "당신의 이익을 위해."
        }
      },
      {
        id: "issue",
        word: {
          en: "Issue",
          fa: "مسئله/موضوع",
          fr: "Problème",
          de: "Angelegenheit",
          it: "Problema/Questione",
          es: "Asunto",
          ru: "Вопрос/Проблема",
          zh: "问题",
          ar: "قضية",
          ko: "문제"
        },
        sentence: {
          en: "Address the issue.",
          fa: "به مسئله رسیدگی کن.",
          fr: "Aborde le problème.",
          de: "Geh das Problem an.",
          it: "Affronta il problema.",
          es: "Aborda el asunto.",
          ru: "Реши проблему.",
          zh: "解决这个问题。",
          ar: "عالج القضية.",
          ko: "문제를 해결하세요."
        }
      },
      {
        id: "source",
        word: {
          en: "Source",
          fa: "منبع",
          fr: "Source",
          de: "Quelle",
          it: "Fonte",
          es: "Fuente",
          ru: "Источник",
          zh: "来源",
          ar: "مصدر",
          ko: "출처"
        },
        sentence: {
          en: "Check the source.",
          fa: "منبع را چک کن.",
          fr: "Vérifie la source.",
          de: "Überprüfe die Quelle.",
          it: "Controlla la fonte.",
          es: "Verifica la fuente.",
          ru: "Проверь источник.",
          zh: "检查来源。",
          ar: "تحقق من المصدر.",
          ko: "출처를 확인하세요."
        }
      },
      {
        id: "report",
        word: {
          en: "Report",
          fa: "گزارش",
          fr: "Rapport",
          de: "Bericht",
          it: "Rapporto",
          es: "Informe",
          ru: "Отчет",
          zh: "报告",
          ar: "تقرير",
          ko: "보고서"
        },
        sentence: {
          en: "Write a report.",
          fa: "یک گزارش بنویس.",
          fr: "Écris un rapport.",
          de: "Schreib einen Bericht.",
          it: "Scrivi un rapporto.",
          es: "Escribe un informe.",
          ru: "Напиши отчет.",
          zh: "写一份报告。",
          ar: "اكتب تقريراً.",
          ko: "보고서를 작성하세요."
        }
      },
      {
        id: "contract",
        word: {
          en: "Contract",
          fa: "قرارداد",
          fr: "Contrat",
          de: "Vertrag",
          it: "Contratto",
          es: "Contrato",
          ru: "Контракт",
          zh: "合同",
          ar: "عقد",
          ko: "계약"
        },
        sentence: {
          en: "Sign the contract.",
          fa: "قرارداد را امضا کن.",
          fr: "Signe le contrat.",
          de: "Unterschreibe den Vertrag.",
          it: "Firma il contratto.",
          es: "Firma el contrato.",
          ru: "Подпиши контракт.",
          zh: "签署合同。",
          ar: "وقع العقد.",
          ko: "계약서에 서명하세요."
        }
      },
      {
        id: "signature",
        word: {
          en: "Signature",
          fa: "امضا",
          fr: "Signature",
          de: "Unterschrift",
          it: "Firma",
          es: "Firma",
          ru: "Подпись",
          zh: "签名",
          ar: "توقيع",
          ko: "서명"
        },
        sentence: {
          en: "I need your signature.",
          fa: "به امضای شما نیاز دارم.",
          fr: "J'ai besoin de votre signature.",
          de: "Ich brauche Ihre Unterschrift.",
          it: "Ho bisogno della tua firma.",
          es: "Necesito su firma.",
          ru: "Мне нужна ваша подпись.",
          zh: "我需要你的签名。",
          ar: "أحتاج توقيعك.",
          ko: "서명이 필요합니다."
        }
      },
      {
        id: "salary",
        word: {
          en: "Salary",
          fa: "حقوق",
          fr: "Salaire",
          de: "Gehalt",
          it: "Stipendio",
          es: "Salario",
          ru: "Зарплата",
          zh: "薪水",
          ar: "راتب",
          ko: "급여"
        },
        sentence: {
          en: "High salary.",
          fa: "حقوق بالا.",
          fr: "Salaire élevé.",
          de: "Hohes Gehalt.",
          it: "Stipendio alto.",
          es: "Salario alto.",
          ru: "Высокая зарплата.",
          zh: "高薪。",
          ar: "راتب مرتفع.",
          ko: "높은 급여."
        }
      },
      {
        id: "insurance",
        word: {
          en: "Insurance",
          fa: "بیمه",
          fr: "Assurance",
          de: "Versicherung",
          it: "Assicurazione",
          es: "Seguro",
          ru: "Страхование",
          zh: "保险",
          ar: "تأمين",
          ko: "보험"
        },
        sentence: {
          en: "Health insurance.",
          fa: "بیمه سلامت.",
          fr: "Assurance maladie.",
          de: "Krankenversicherung.",
          it: "Assicurazione sanitaria.",
          es: "Seguro de salud.",
          ru: "Медицинская страховка.",
          zh: "健康保险。",
          ar: "تأمين صحي.",
          ko: "건강 보험."
        }
      },
      {
        id: "investment",
        word: {
          en: "Investment",
          fa: "سرمایه‌گذاری",
          fr: "Investissement",
          de: "Investition",
          it: "Investimento",
          es: "Inversión",
          ru: "Инвестиция",
          zh: "投资",
          ar: "استثمار",
          ko: "투자"
        },
        sentence: {
          en: "Good investment.",
          fa: "سرمایه‌گذاری خوب.",
          fr: "Bon investissement.",
          de: "Gute Investition.",
          it: "Buon investimento.",
          es: "Buena inversión.",
          ru: "Хорошая инвестиция.",
          zh: "好的投资。",
          ar: "استثمار جيد.",
          ko: "좋은 투자."
        }
      },
      {
        id: "debt",
        word: {
          en: "Debt",
          fa: "بدهی",
          fr: "Dette",
          de: "Schuld",
          it: "Debito",
          es: "Deuda",
          ru: "Долг",
          zh: "债务",
          ar: "دين",
          ko: "부채"
        },
        sentence: {
          en: "Pay off your debt.",
          fa: "بدهی‌ات را پرداخت کن.",
          fr: "Rembourse ta dette.",
          de: "Bezahl deine Schulden.",
          it: "Ripaga il tuo debito.",
          es: "Paga tu deuda.",
          ru: "Выплати долг.",
          zh: "还清债务。",
          ar: "سدد دينك.",
          ko: "빚을 갚으세요."
        }
      },
      {
        id: "payment",
        word: {
          en: "Payment",
          fa: "پرداخت",
          fr: "Paiement",
          de: "Zahlung",
          it: "Pagamento",
          es: "Pago",
          ru: "Платеж",
          zh: "支付",
          ar: "دفع",
          ko: "지불"
        },
        sentence: {
          en: "Make a payment.",
          fa: "پرداخت انجام بده.",
          fr: "Fais un paiement.",
          de: "Mach eine Zahlung.",
          it: "Effettua un pagamento.",
          es: "Realiza un pago.",
          ru: "Сделай платеж.",
          zh: "付款。",
          ar: "قم بالدفع.",
          ko: "지불하세요."
        }
      },
      {
        id: "product",
        word: {
          en: "Product",
          fa: "محصول",
          fr: "Produit",
          de: "Produkt",
          it: "Prodotto",
          es: "Producto",
          ru: "Продукт",
          zh: "产品",
          ar: "منتج",
          ko: "제품"
        },
        sentence: {
          en: "New product.",
          fa: "محصول جدید.",
          fr: "Nouveau produit.",
          de: "Neues Produkt.",
          it: "Nuovo prodotto.",
          es: "Nuevo producto.",
          ru: "Новый продукт.",
          zh: "新产品。",
          ar: "منتج جديد.",
          ko: "신제품."
        }
      },
      {
        id: "service",
        word: {
          en: "Service",
          fa: "خدمت",
          fr: "Service",
          de: "Dienstleistung",
          it: "Servizio",
          es: "Servicio",
          ru: "Услуга",
          zh: "服务",
          ar: "خدمة",
          ko: "서비스"
        },
        sentence: {
          en: "Customer service.",
          fa: "خدمات مشتریان.",
          fr: "Service client.",
          de: "Kundenservice.",
          it: "Servizio clienti.",
          es: "Servicio al cliente.",
          ru: "Обслуживание клиентов.",
          zh: "客户服务。",
          ar: "خدمة العملاء.",
          ko: "고객 서비스."
        }
      },
      {
        id: "customer",
        word: {
          en: "Customer",
          fa: "مشتری (خریدار)",
          fr: "Client",
          de: "Kunde",
          it: "Cliente",
          es: "Cliente",
          ru: "Покупатель",
          zh: "顾客",
          ar: "زبون",
          ko: "고객"
        },
        sentence: {
          en: "The customer is creating an account.",
          fa: "مشتری در حال ایجاد حساب کاربری است.",
          fr: "Le client crée un compte.",
          de: "Der Kunde erstellt ein Konto.",
          it: "Il cliente sta creando un account.",
          es: "El cliente está creando una cuenta.",
          ru: "Клиент создает учетную запись.",
          zh: "客户正在创建一个帐户。",
          ar: "العميل يقوم بإنشاء حساب.",
          ko: "고객이 계정을 만들고 있습니다."
        }
      },
      {
        id: "management",
        word: {
          en: "Management",
          fa: "مدیریت",
          fr: "Gestion",
          de: "Management",
          it: "Gestione",
          es: "Gestión",
          ru: "Управление",
          zh: "管理",
          ar: "إدارة",
          ko: "관리"
        },
        sentence: {
          en: "Project management.",
          fa: "مدیریت پروژه.",
          fr: "Gestion de projet.",
          de: "Projektmanagement.",
          it: "Gestione del progetto.",
          es: "Gestión de proyectos.",
          ru: "Управление проектами.",
          zh: "项目管理。",
          ar: "إدارة المشاريع.",
          ko: "프로젝트 관리."
        }
      },
      {
        id: "organization",
        word: {
          en: "Organization",
          fa: "سازمان",
          fr: "Organisation",
          de: "Organisation",
          it: "Organizzazione",
          es: "Organización",
          ru: "Организация",
          zh: "组织",
          ar: "منظمة",
          ko: "조직"
        },
        sentence: {
          en: "Non-profit organization.",
          fa: "سازمان غیرانتفاعی.",
          fr: "Organisation à but non lucratif.",
          de: "Gemeinnützige Organisation.",
          it: "Organizzazione no-profit.",
          es: "Organización sin fines de lucro.",
          ru: "Некоммерческая организация.",
          zh: "非营利组织。",
          ar: "منظمة غير ربحية.",
          ko: "비영리 단체."
        }
      },
      {
        id: "department",
        word: {
          en: "Department",
          fa: "بخش/دپارتمان",
          fr: "Département",
          de: "Abteilung",
          it: "Dipartimento",
          es: "Departamento",
          ru: "Отдел",
          zh: "部门",
          ar: "قسم",
          ko: "부서"
        },
        sentence: {
          en: "HR department.",
          fa: "بخش منابع انسانی.",
          fr: "Service des ressources humaines.",
          de: "Personalabteilung.",
          it: "Dipartimento risorse umane.",
          es: "Departamento de recursos humanos.",
          ru: "Отдел кадров.",
          zh: "人力资源部。",
          ar: "قسم الموارد البشرية.",
          ko: "인사부."
        }
      },
      {
        id: "employee",
        word: {
          en: "Employee",
          fa: "کارمند",
          fr: "Employé",
          de: "Angestellter",
          it: "Impiegato",
          es: "Empleado",
          ru: "Сотрудник",
          zh: "员工",
          ar: "موظف",
          ko: "직원"
        },
        sentence: {
          en: "He is a good employee.",
          fa: "او کارمند خوبی است.",
          fr: "C'est un bon employé.",
          de: "Er ist ein guter Mitarbeiter.",
          it: "È un buon impiegato.",
          es: "Es un buen empleado.",
          ru: "Он хороший сотрудник.",
          zh: "他是个好员工。",
          ar: "إنه موظف جيد.",
          ko: "그는 좋은 직원입니다."
        }
      },
      {
        id: "employer",
        word: {
          en: "Employer",
          fa: "کارفرما",
          fr: "Employeur",
          de: "Arbeitgeber",
          it: "Datore di lavoro",
          es: "Empleador",
          ru: "Работодатель",
          zh: "雇主",
          ar: "رب العمل",
          ko: "고용주"
        },
        sentence: {
          en: "The employer hires staff.",
          fa: "کارفرما کارکنان را استخدام می‌کند.",
          fr: "L'employeur embauche du personnel.",
          de: "Der Arbeitgeber stellt Personal ein.",
          it: "Il datore di lavoro assume personale.",
          es: "El empleador contrata personal.",
          ru: "Работодатель нанимает персонал.",
          zh: "雇主雇用员工。",
          ar: "رب العمل يوظف الموظفين.",
          ko: "고용주는 직원을 고용합니다."
        }
      },
      {
        id: "literature",
        word: {
          en: "Literature",
          fa: "ادبیات",
          fr: "Littérature",
          de: "Literatur",
          it: "Letteratura",
          es: "Literatura",
          ru: "Литература",
          zh: "文学",
          ar: "أدب",
          ko: "문학"
        },
        sentence: {
          en: "Classic literature.",
          fa: "ادبیات کلاسیک.",
          fr: "Littérature classique.",
          de: "Klassische Literatur.",
          it: "Letteratura classica.",
          es: "Literatura clásica.",
          ru: "Классическая литература.",
          zh: "经典文学。",
          ar: "الأدب الكلاسيكي.",
          ko: "고전 문학."
        }
      },
      {
        id: "author",
        word: {
          en: "Author",
          fa: "نویسنده",
          fr: "Auteur",
          de: "Autor",
          it: "Autore",
          es: "Autor",
          ru: "Автор",
          zh: "作者",
          ar: "مؤلف",
          ko: "작가"
        },
        sentence: {
          en: "Famous author.",
          fa: "نویسنده مشهور.",
          fr: "Auteur célèbre.",
          de: "Berühmter Autor.",
          it: "Autore famoso.",
          es: "Autor famoso.",
          ru: "Известный автор.",
          zh: "著名作家。",
          ar: "مؤلف مشهور.",
          ko: "유명한 작가."
        }
      },
      {
        id: "religion",
        word: {
          en: "Religion",
          fa: "دین/مذهب",
          fr: "Religion",
          de: "Religion",
          it: "Religione",
          es: "Religión",
          ru: "Религия",
          zh: "宗教",
          ar: "دين",
          ko: "종교"
        },
        sentence: {
          en: "Freedom of religion.",
          fa: "آزادی مذهب.",
          fr: "Liberté de religion.",
          de: "Religionsfreiheit.",
          it: "Libertà di religione.",
          es: "Libertad de religión.",
          ru: "Свобода вероисповедания.",
          zh: "宗教自由。",
          ar: "حرية الدين.",
          ko: "종교의 자유."
        }
      },
      {
        id: "history",
        word: {
          en: "History",
          fa: "تاریخ",
          fr: "Histoire",
          de: "Geschichte",
          it: "Storia",
          es: "Historia",
          ru: "История",
          zh: "历史",
          ar: "تاريخ",
          ko: "역사"
        },
        sentence: {
          en: "Study history.",
          fa: "تاریخ بخوان.",
          fr: "Étudie l'histoire.",
          de: "Studiere Geschichte.",
          it: "Studia la storia.",
          es: "Estudia historia.",
          ru: "Изучай историю.",
          zh: "学习历史。",
          ar: "ادرس التاريخ.",
          ko: "역사를 공부하세요."
        }
      },
      {
        id: "geography",
        word: {
          en: "Geography",
          fa: "جغرافیا",
          fr: "Géographie",
          de: "Geographie",
          it: "Geografia",
          es: "Geografía",
          ru: "География",
          zh: "地理",
          ar: "جغرافيا",
          ko: "지리"
        },
        sentence: {
          en: "Geography lesson.",
          fa: "درس جغرافیا.",
          fr: "Leçon de géographie.",
          de: "Geographiestunde.",
          it: "Lezione di geografia.",
          es: "Lección de geografía.",
          ru: "Урок географии.",
          zh: "地理课。",
          ar: "درس جغرافيا.",
          ko: "지리 수업."
        }
      },
      {
        id: "map",
        word: {
          en: "Map",
          fa: "نقشه",
          fr: "Carte",
          de: "Karte",
          it: "Mappa",
          es: "Mapa",
          ru: "Карта",
          zh: "地图",
          ar: "خريطة",
          ko: "지도"
        },
        sentence: {
          en: "Look at the map.",
          fa: "به نقشه نگاه کن.",
          fr: "Regarde la carte.",
          de: "Schau auf die Karte.",
          it: "Guarda la mappa.",
          es: "Mira el mapa.",
          ru: "Посмотри на карту.",
          zh: "看地图。",
          ar: "انظر إلى الخريطة.",
          ko: "지도를 보세요."
        }
      },
      {
        id: "direction",
        word: {
          en: "Direction",
          fa: "جهت/مسیر",
          fr: "Direction",
          de: "Richtung",
          it: "Direzione",
          es: "Dirección",
          ru: "Направление",
          zh: "方向",
          ar: "اتجاه",
          ko: "방향"
        },
        sentence: {
          en: "Wrong direction.",
          fa: "جهت اشتباه.",
          fr: "Mauvaise direction.",
          de: "Falsche Richtung.",
          it: "Direzione sbagliata.",
          es: "Dirección equivocada.",
          ru: "Неправильное направление.",
          zh: "错误的方向。",
          ar: "اتجاه خاطئ.",
          ko: "잘못된 방향."
        }
      },
      {
        id: "temperature",
        word: {
          en: "Temperature",
          fa: "دما",
          fr: "Température",
          de: "Temperatur",
          it: "Temperatura",
          es: "Temperatura",
          ru: "Температура",
          zh: "温度",
          ar: "درجة الحرارة",
          ko: "온도"
        },
        sentence: {
          en: "High temperature.",
          fa: "دمای بالا.",
          fr: "Haute température.",
          de: "Hohe Temperatur.",
          it: "Alta temperatura.",
          es: "Alta temperatura.",
          ru: "Высокая температура.",
          zh: "高温。",
          ar: "درجة حرارة عالية.",
          ko: "높은 온도."
        }
      },
      {
        id: "electricity",
        word: {
          en: "Electricity",
          fa: "برق",
          fr: "Électricité",
          de: "Elektrizität",
          it: "Elettricità",
          es: "Electricidad",
          ru: "Электричество",
          zh: "电力",
          ar: "كهرباء",
          ko: "전기"
        },
        sentence: {
          en: "Save electricity.",
          fa: "در مصرف برق صرفه‌جویی کن.",
          fr: "Économise l'électricité.",
          de: "Spara Strom.",
          it: "Risparmia elettricità.",
          es: "Ahorra electricidad.",
          ru: "Экономь электричество.",
          zh: "节约用电。",
          ar: "وفر الكهرباء.",
          ko: "전기를 절약하세요."
        }
      },
      {
        id: "engine",
        word: {
          en: "Engine",
          fa: "موتور",
          fr: "Moteur",
          de: "Motor",
          it: "Motore",
          es: "Motor",
          ru: "Двигатель",
          zh: "引擎",
          ar: "محرك",
          ko: "엔진"
        },
        sentence: {
          en: "Start the engine.",
          fa: "موتور را روشن کن.",
          fr: "Démarre le moteur.",
          de: "Starte den Motor.",
          it: "Accendi il motore.",
          es: "Enciende el motor.",
          ru: "Запусти двигатель.",
          zh: "启动引擎。",
          ar: "شغل المحرك.",
          ko: "엔진을 시동하세요."
        }
      },
      {
        id: "fuel",
        word: {
          en: "Fuel",
          fa: "سوخت",
          fr: "Carburant",
          de: "Kraftstoff",
          it: "Carburante",
          es: "Combustible",
          ru: "Топливо",
          zh: "燃料",
          ar: "وقود",
          ko: "연료"
        },
        sentence: {
          en: "We need fuel.",
          fa: "ما به سوخت نیاز داریم.",
          fr: "Nous avons besoin de carburant.",
          de: "Wir brauchen Treibstoff.",
          it: "Abbiamo bisogno di carburante.",
          es: "Necesitamos combustible.",
          ru: "Нам нужно топливо.",
          zh: "我们需要燃料。",
          ar: "نحن بحاجة إلى الوقود.",
          ko: "우리는 연료가 필요합니다."
        }
      },
      {
        id: "plastic",
        word: {
          en: "Plastic",
          fa: "پلاستیک",
          fr: "Plastique",
          de: "Plastik",
          it: "Plastica",
          es: "Plástico",
          ru: "Пластик",
          zh: "塑料",
          ar: "بلاستيك",
          ko: "플라스틱"
        },
        sentence: {
          en: "Recycle plastic.",
          fa: "پلاستیک را بازیافت کن.",
          fr: "Recycle le plastique.",
          de: "Recycle Plastik.",
          it: "Ricicla la plastica.",
          es: "Recicla el plástico.",
          ru: "Перерабатывай пластик.",
          zh: "回收塑料。",
          ar: "أعد تدوير البلاستيك.",
          ko: "플라스틱을 재활용하세요."
        }
      },
      {
        id: "metal",
        word: {
          en: "Metal",
          fa: "فلز",
          fr: "Métal",
          de: "Metall",
          it: "Metallo",
          es: "Metal",
          ru: "Металл",
          zh: "金属",
          ar: "معدن",
          ko: "금속"
        },
        sentence: {
          en: "Heavy metal.",
          fa: "فلز سنگین.",
          fr: "Métal lourd.",
          de: "Schwermetall.",
          it: "Metallo pesante.",
          es: "Metal pesado.",
          ru: "Тяжелый металл.",
          zh: "重金属。",
          ar: "معدن ثقيل.",
          ko: "중금속."
        }
      },
      {
        id: "gold",
        word: {
          en: "Gold",
          fa: "طلا",
          fr: "Or",
          de: "Gold",
          it: "Oro",
          es: "Oro",
          ru: "Золото",
          zh: "金子",
          ar: "ذهب",
          ko: "금"
        },
        sentence: {
          en: "Gold ring.",
          fa: "حلقه طلا.",
          fr: "Bague en or.",
          de: "Goldring.",
          it: "Anello d'oro.",
          es: "Anillo de oro.",
          ru: "Золотое кольцо.",
          zh: "金戒指。",
          ar: "خاتم ذهب.",
          ko: "금반지."
        }
      },
      {
        id: "silver",
        word: {
          en: "Silver",
          fa: "نقره",
          fr: "Argent",
          de: "Silber",
          it: "Argento",
          es: "Plata",
          ru: "Серебро",
          zh: "银",
          ar: "فضة",
          ko: "은"
        },
        sentence: {
          en: "Silver spoon.",
          fa: "قاشق نقره.",
          fr: "Cuillère en argent.",
          de: "Silberlöffel.",
          it: "Cucchiaio d'argento.",
          es: "Cuchara de plata.",
          ru: "Серебряная ложка.",
          zh: "银勺。",
          ar: "ملعقة فضية.",
          ko: "은수저."
        }
      },
      {
        id: "wood",
        word: {
          en: "Wood",
          fa: "چوب",
          fr: "Bois",
          de: "Holz",
          it: "Legno",
          es: "Madera",
          ru: "Дерево",
          zh: "木头",
          ar: "خشب",
          ko: "나무"
        },
        sentence: {
          en: "Made of wood.",
          fa: "ساخته شده از چوب.",
          fr: "Fait de bois.",
          de: "Aus Holz gemacht.",
          it: "Fatto di legno.",
          es: "Hecho de madera.",
          ru: "Сделано из дерева.",
          zh: "由木头制成。",
          ar: "مصنوع من الخشب.",
          ko: "나무로 만든."
        }
      },
      {
        id: "glass",
        word: {
          en: "Glass",
          fa: "شیشه",
          fr: "Verre",
          de: "Glas",
          it: "Vetro",
          es: "Vidrio",
          ru: "Стекло",
          zh: "玻璃",
          ar: "زجاج",
          ko: "유리"
        },
        sentence: {
          en: "Broken glass.",
          fa: "شیشه شکسته.",
          fr: "Verre brisé.",
          de: "Zerbrochenes Glas.",
          it: "Vetro rotto.",
          es: "Vidrio roto.",
          ru: "Разбитое стекло.",
          zh: "碎玻璃。",
          ar: "زجاج مكسور.",
          ko: "깨진 유리."
        }
      },
      {
        id: "paper",
        word: {
          en: "Paper",
          fa: "کاغذ",
          fr: "Papier",
          de: "Papier",
          it: "Carta",
          es: "Papel",
          ru: "Бумага",
          zh: "纸",
          ar: "ورق",
          ko: "종이"
        },
        sentence: {
          en: "Sheet of paper.",
          fa: "ورق کاغذ.",
          fr: "Feuille de papier.",
          de: "Blatt Papier.",
          it: "Foglio di carta.",
          es: "Hoja de papel.",
          ru: "Лист бумаги.",
          zh: "一张纸。",
          ar: "ورقة.",
          ko: "종이 한 장."
        }
      },
      {
        id: "screen",
        word: {
          en: "Screen",
          fa: "صفحه نمایش",
          fr: "Écran",
          de: "Bildschirm",
          it: "Schermo",
          es: "Pantalla",
          ru: "Экран",
          zh: "屏幕",
          ar: "شاشة",
          ko: "화면"
        },
        sentence: {
          en: "Touch screen.",
          fa: "صفحه لمسی.",
          fr: "Écran tactile.",
          de: "Touchscreen.",
          it: "Schermo tattile.",
          es: "Pantalla táctil.",
          ru: "Сенсорный экран.",
          zh: "触摸屏。",
          ar: "شاشة تعمل باللمس.",
          ko: "터치 스크린."
        }
      },
      {
        id: "camera",
        word: {
          en: "Camera",
          fa: "دوربین",
          fr: "Caméra",
          de: "Kamera",
          it: "Macchina fotografica",
          es: "Cámara",
          ru: "Камера",
          zh: "照相机",
          ar: "كاميرا",
          ko: "카메라"
        },
        sentence: {
          en: "Digital camera.",
          fa: "دوربین دیجیتال.",
          fr: "Appareil photo numérique.",
          de: "Digitalkamera.",
          it: "Fotocamera digitale.",
          es: "Cámara digital.",
          ru: "Цифровая камера.",
          zh: "数码相机。",
          ar: "كاميرا رقمية.",
          ko: "디지털 카메라."
        }
      },
      {
        id: "battery",
        word: {
          en: "Battery",
          fa: "باتری",
          fr: "Batterie",
          de: "Batterie",
          it: "Batteria",
          es: "Batería",
          ru: "Батарея",
          zh: "电池",
          ar: "بطارية",
          ko: "배터리"
        },
        sentence: {
          en: "Charge the battery.",
          fa: "باتری را شارژ کن.",
          fr: "Charge la batterie.",
          de: "Lade die Batterie.",
          it: "Carica la batteria.",
          es: "Carga la batería.",
          ru: "Заряди батарею.",
          zh: "给电池充电。",
          ar: "اشحن البطارية.",
          ko: "배터리를 충전하세요."
        }
      },
      {
        id: "connection",
        word: {
          en: "Connection",
          fa: "اتصال",
          fr: "Connexion",
          de: "Verbindung",
          it: "Connessione",
          es: "Conexión",
          ru: "Связь",
          zh: "连接",
          ar: "اتصال",
          ko: "연결"
        },
        sentence: {
          en: "Lost connection.",
          fa: "اتصال قطع شد.",
          fr: "Connexion perdue.",
          de: "Verbindung verloren.",
          it: "Connessione persa.",
          es: "Conexión perdida.",
          ru: "Соединение потеряно.",
          zh: "失去连接。",
          ar: "فقد الاتصال.",
          ko: "연결이 끊어졌습니다."
        }
      },
      {
        id: "access",
        word: {
          en: "Access",
          fa: "دسترسی",
          fr: "Accès",
          de: "Zugang",
          it: "Accesso",
          es: "Acceso",
          ru: "Доступ",
          zh: "访问",
          ar: "وصول",
          ko: "접근"
        },
        sentence: {
          en: "Access denied.",
          fa: "دسترسی رد شد.",
          fr: "Accès refusé.",
          de: "Zugriff verweigert.",
          it: "Accesso negato.",
          es: "Acceso denegado.",
          ru: "Доступ запрещен.",
          zh: "访问被拒绝。",
          ar: "تم رفض الوصول.",
          ko: "접근이 거부되었습니다."
        }
      }
    ]
  },
  {
    level: "B2",
    items: [
      {
        id: "abandon",
        word: {
          en: "Abandon",
          fa: "ترک کردن/رها کردن",
          fr: "Abandonner",
          de: "Verlassen",
          it: "Abbandonare",
          es: "Abandonar",
          ru: "Покидать",
          zh: "放弃",
          ar: "تخلى",
          ko: "포기하다"
        },
        sentence: {
          en: "Do not abandon hope.",
          fa: "امیدت را از دست نده.",
          fr: "N'abandonne pas l'espoir.",
          de: "Gib die Hoffnung nicht auf.",
          it: "Non abbandonare la speranza.",
          es: "No abandones la esperanza.",
          ru: "Не оставляй надежду.",
          zh: "不要放弃希望。",
          ar: "لا تتخلى عن الأمل.",
          ko: "희망을 버리지 마세요."
        }
      },
      {
        id: "absolute",
        word: {
          en: "Absolute",
          fa: "مطلق/قطعی",
          fr: "Absolu",
          de: "Absolut",
          it: "Assoluto",
          es: "Absoluto",
          ru: "Абсолютный",
          zh: "绝对",
          ar: "مطلق",
          ko: "절대적인"
        },
        sentence: {
          en: "Absolute silence.",
          fa: "سکوت مطلق.",
          fr: "Silence absolu.",
          de: "Absolute Stille.",
          it: "Silenzio assoluto.",
          es: "Silencio absoluto.",
          ru: "Абсолютная тишина.",
          zh: "绝对的沉默。",
          ar: "صمت مطبق.",
          ko: "완전한 침묵."
        }
      },
      {
        id: "academic",
        word: {
          en: "Academic",
          fa: "آکادمیک/تحصیلی",
          fr: "Académique",
          de: "Akademisch",
          it: "Accademico",
          es: "Académico",
          ru: "Академический",
          zh: "学术",
          ar: "أكاديمي",
          ko: "학업의"
        },
        sentence: {
          en: "Academic year.",
          fa: "سال تحصیلی.",
          fr: "Année académique.",
          de: "Akademisches Jahr.",
          it: "Anno accademico.",
          es: "Año académico.",
          ru: "Учебный год.",
          zh: "学年。",
          ar: "السنة الدراسية.",
          ko: "학년."
        }
      },
      {
        id: "acceptable",
        word: {
          en: "Acceptable",
          fa: "قابل قبول",
          fr: "Acceptable",
          de: "Akzeptabel",
          it: "Accettabile",
          es: "Aceptable",
          ru: "Приемлемый",
          zh: "可接受",
          ar: "مقبول",
          ko: "받아들일 수 있는"
        },
        sentence: {
          en: "It is not acceptable.",
          fa: "این قابل قبول نیست.",
          fr: "Ce n'est pas acceptable.",
          de: "Das ist nicht akzeptabel.",
          it: "Non è accettabile.",
          es: "No es aceptable.",
          ru: "Это неприемлемо.",
          zh: "这不可接受。",
          ar: "هذا غير مقبول.",
          ko: "허용되지 않습니다."
        }
      },
      {
        id: "accompany",
        word: {
          en: "Accompany",
          fa: "همراهی کردن",
          fr: "Accompagner",
          de: "Begleiten",
          it: "Accompagnare",
          es: "Acompañar",
          ru: "Сопровождать",
          zh: "陪同",
          ar: "رافق",
          ko: "동반하다"
        },
        sentence: {
          en: "May I accompany you?",
          fa: "میتوانم شما را همراهی کنم؟",
          fr: "Puis-je vous accompagner ?",
          de: "Darf ich Sie begleiten?",
          it: "Posso accompagnarti?",
          es: "¿Puedo acompañarte?",
          ru: "Могу я вас сопроводить?",
          zh: "我可以陪你吗？",
          ar: "هل يمكنني مرافقتك؟",
          ko: "동행해도 될까요?"
        }
      },
      {
        id: "account",
        word: {
          en: "Account",
          fa: "حساب/گزارش",
          fr: "Compte",
          de: "Konto/Bericht",
          it: "Conto",
          es: "Cuenta",
          ru: "Счет",
          zh: "账户",
          ar: "حساب",
          ko: "계좌"
        },
        sentence: {
          en: "Bank account.",
          fa: "حساب بانکی.",
          fr: "Compte bancaire.",
          de: "Bankkonto.",
          it: "Conto bancario.",
          es: "Cuenta bancaria.",
          ru: "Банковский счет.",
          zh: "银行账户。",
          ar: "حساب بنكي.",
          ko: "은행 계좌."
        }
      },
      {
        id: "accurate",
        word: {
          en: "Accurate",
          fa: "دقیق",
          fr: "Précis",
          de: "Genau",
          it: "Accurato",
          es: "Preciso",
          ru: "Точный",
          zh: "准确",
          ar: "دقيق",
          ko: "정확한"
        },
        sentence: {
          en: "Accurate information.",
          fa: "اطلاعات دقیق.",
          fr: "Informations précises.",
          de: "Genaue Informationen.",
          it: "Informazioni accurate.",
          es: "Información precisa.",
          ru: "Точная информация.",
          zh: "准确的信息。",
          ar: "معلومات دقيقة.",
          ko: "정확한 정보."
        }
      },
      {
        id: "accuse",
        word: {
          en: "Accuse",
          fa: "متهم کردن",
          fr: "Accuser",
          de: "Anklagen",
          it: "Accusare",
          es: "Acusar",
          ru: "Обвинять",
          zh: "指控",
          ar: "اتهم",
          ko: "비난하다"
        },
        sentence: {
          en: "Don't accuse him.",
          fa: "او را متهم نکن.",
          fr: "Ne l'accuse pas.",
          de: "Beschuldige ihn nicht.",
          it: "Non accusarlo.",
          es: "No lo acuses.",
          ru: "Не обвиняй его.",
          zh: "不要指责他。",
          ar: "لا تتهمه.",
          ko: "그를 비난하지 마세요."
        }
      },
      {
        id: "acknowledge",
        word: {
          en: "Acknowledge",
          fa: "اذعان کردن/تایید کردن",
          fr: "Reconnaître",
          de: "Anerkennen",
          it: "Riconoscere",
          es: "Reconocer",
          ru: "Признавать",
          zh: "承认",
          ar: "اعترف",
          ko: "인정하다"
        },
        sentence: {
          en: "Acknowledge the receipt.",
          fa: "رسید را تایید کن.",
          fr: "Accuse réception.",
          de: "Bestätigen Sie den Empfang.",
          it: "Conferma la ricevuta.",
          es: "Acusa recibo.",
          ru: "Подтвердите получение.",
          zh: "确认收到。",
          ar: "أقر بالاستلام.",
          ko: "수령을 확인하세요."
        }
      },
      {
        id: "acquire",
        word: {
          en: "Acquire",
          fa: "به دست آوردن/کسب کردن",
          fr: "Acquérir",
          de: "Erwerben",
          it: "Acquisire",
          es: "Adquirir",
          ru: "Приобретать",
          zh: "获得",
          ar: "اكتسب",
          ko: "얻다"
        },
        sentence: {
          en: "Acquire new skills.",
          fa: "مهارت‌های جدید کسب کن.",
          fr: "Acquérir de nouvelles compétences.",
          de: "Neue Fähigkeiten erwerben.",
          it: "Acquisire nuove competenze.",
          es: "Adquirir nuevas habilidades.",
          ru: "Приобретать новые навыки.",
          zh: "获得新技能。",
          ar: "اكتساب مهارات جديدة.",
          ko: "새로운 기술을 습득하세요."
        }
      },
      {
        id: "adapt",
        word: {
          en: "Adapt",
          fa: "سازگار شدن",
          fr: "Adapter",
          de: "Anpassen",
          it: "Adattare",
          es: "Adaptar",
          ru: "Адаптировать",
          zh: "适应",
          ar: "تأقلم",
          ko: "적응하다"
        },
        sentence: {
          en: "Adapt to change.",
          fa: "سازگاری با تغییر.",
          fr: "S'adapter au changement.",
          de: "Sich an Veränderungen anpassen.",
          it: "Adattarsi al cambiamento.",
          es: "Adaptarse al cambio.",
          ru: "Адаптироваться к изменениям.",
          zh: "适应变化。",
          ar: "التكيف مع التغيير.",
          ko: "변화에 적응하세요."
        }
      },
      {
        id: "additional",
        word: {
          en: "Additional",
          fa: "اضافی",
          fr: "Additionnel",
          de: "Zusätzlich",
          it: "Addizionale",
          es: "Adicional",
          ru: "Дополнительный",
          zh: "额外",
          ar: "إضافي",
          ko: "추가적인"
        },
        sentence: {
          en: "Additional information.",
          fa: "اطلاعات اضافی.",
          fr: "Informations supplémentaires.",
          de: "Zusätzliche Informationen.",
          it: "Informazioni aggiuntive.",
          es: "Información adicional.",
          ru: "Дополнительная информация.",
          zh: "附加信息。",
          ar: "معلومات إضافية.",
          ko: "추가 정보."
        }
      },
      {
        id: "address",
        word: {
          en: "Address",
          fa: "خطاب کردن/رسیدگی کردن",
          fr: "Adresser",
          de: "Adressieren",
          it: "Rivolgersi",
          es: "Abordar",
          ru: "Адресовать",
          zh: "致辞/处理",
          ar: "خاطب",
          ko: "주소/다루다"
        },
        sentence: {
          en: "What is your address?",
          fa: "آدرس شما چیست؟",
          fr: "Quelle est votre adresse ?",
          de: "Wie ist Ihre Adresse?",
          it: "Qual è il tuo indirizzo?",
          es: "¿Cuál es tu dirección?",
          ru: "Какой у вас адрес?",
          zh: "你的地址是什么？",
          ar: "ما هو عنوانك؟",
          ko: "주소가 어떻게 됩니까?"
        }
      },
      {
        id: "adequate",
        word: {
          en: "Adequate",
          fa: "کافی/مناسب",
          fr: "Adéquat",
          de: "Angemessen",
          it: "Adeguato",
          es: "Adecuado",
          ru: "Адекватный",
          zh: "充足",
          ar: "کاف",
          ko: "적절한"
        },
        sentence: {
          en: "Adequate resources.",
          fa: "منابع کافی.",
          fr: "Ressources adéquates.",
          de: "Ausreichende Ressourcen.",
          it: "Risorse adeguate.",
          es: "Recursos adecuados.",
          ru: "Адекватные ресурсы.",
          zh: "充足的资源。",
          ar: "موارد كافية.",
          ko: "적절한 자원."
        }
      },
      {
        id: "adjust",
        word: {
          en: "Adjust",
          fa: "تنظیم کردن",
          fr: "Ajuster",
          de: "Einstellen",
          it: "Regolare",
          es: "Ajustar",
          ru: "Регулировать",
          zh: "调整",
          ar: "ضبط",
          ko: "조절하다"
        },
        sentence: {
          en: "Adjust the volume.",
          fa: "صدا را تنظیم کن.",
          fr: "Règle le volume.",
          de: "Stell die Lautstärke ein.",
          it: "Regola il volume.",
          es: "Ajusta el volumen.",
          ru: "Отрегулируй громкость.",
          zh: "调节音量。",
          ar: "اضبط مستوى الصوت.",
          ko: "볼륨을 조절하세요."
        }
      },
      {
        id: "administration",
        word: {
          en: "Administration",
          fa: "مدیریت/اجرا",
          fr: "Administration",
          de: "Verwaltung",
          it: "Amministrazione",
          es: "Administración",
          ru: "Администрация",
          zh: "行政",
          ar: "إدارة",
          ko: "행정"
        },
        sentence: {
          en: "Business administration.",
          fa: "مدیریت کسب و کار.",
          fr: "Administration des affaires.",
          de: "Betriebswirtschaftslehre.",
          it: "Amministrazione aziendale.",
          es: "Administración de empresas.",
          ru: "Деловое администрирование.",
          zh: "工商管理。",
          ar: "إدارة الأعمال.",
          ko: "경영학."
        }
      },
      {
        id: "adopt",
        word: {
          en: "Adopt",
          fa: "اتخاذ کردن/به فرزندی گرفتن",
          fr: "Adopter",
          de: "Adoptieren",
          it: "Adottare",
          es: "Adoptar",
          ru: "Принимать/Усыновлять",
          zh: "采纳",
          ar: "تبنى",
          ko: "채택하다"
        },
        sentence: {
          en: "Adopt a child.",
          fa: "یک کودک را به فرزندی قبول کن.",
          fr: "Adopter un enfant.",
          de: "Ein Kind adoptieren.",
          it: "Adottare un bambino.",
          es: "Adoptar un niño.",
          ru: "Усыновить ребенка.",
          zh: "收养一个孩子。",
          ar: "تبني طفل.",
          ko: "아이를 입양하세요."
        }
      },
      {
        id: "advance",
        word: {
          en: "Advance",
          fa: "پیشرفت",
          fr: "Avance",
          de: "Fortschritt",
          it: "Avanzamento",
          es: "Avance",
          ru: "Продвижение",
          zh: "前进",
          ar: "تقدم",
          ko: "진보"
        },
        sentence: {
          en: "In advance.",
          fa: "از قبل.",
          fr: "À l'avance.",
          de: "Im Voraus.",
          it: "In anticipo.",
          es: "Por adelantado.",
          ru: "Заранее.",
          zh: "提前。",
          ar: "مقدما.",
          ko: "미리."
        }
      },
      {
        id: "affair",
        word: {
          en: "Affair",
          fa: "امر/ماجرا",
          fr: "Affaire",
          de: "Angelegenheit",
          it: "Affare",
          es: "Asunto",
          ru: "Дело",
          zh: "事务",
          ar: "شأن",
          ko: "사건"
        },
        sentence: {
          en: "Foreign affairs.",
          fa: "امور خارجه.",
          fr: "Affaires étrangères.",
          de: "Auswärtige Angelegenheiten.",
          it: "Affari esteri.",
          es: "Asuntos exteriores.",
          ru: "Иностранные дела.",
          zh: "外交事务。",
          ar: "الشؤون الخارجية.",
          ko: "외무."
        }
      },
      {
        id: "afford",
        word: {
          en: "Afford",
          fa: "استطاعت داشتن",
          fr: "Se permettre",
          de: "Sich leisten",
          it: "Permettersi",
          es: "Permitirse",
          ru: "Позволить себе",
          zh: "买得起",
          ar: "تحمل تكاليف",
          ko: "여유가 있다"
        },
        sentence: {
          en: "I cannot afford it.",
          fa: "من توان مالی‌اش را ندارم.",
          fr: "Je ne peux pas me le permettre.",
          de: "Ich kann es mir nicht leisten.",
          it: "Non posso permettermelo.",
          es: "No puedo pagarlo.",
          ru: "Я не могу себе этого позволить.",
          zh: "我买不起。",
          ar: "لا أستطيع تحمل تكلفته.",
          ko: "나는 그것을 감당할 수 없습니다."
        }
      },
      {
        id: "agency",
        word: {
          en: "Agency",
          fa: "آژانس/نمایندگی",
          fr: "Agence",
          de: "Agentur",
          it: "Agenzia",
          es: "Agencia",
          ru: "Агентство",
          zh: "代理机构",
          ar: "وكالة",
          ko: "대리점"
        },
        sentence: {
          en: "Travel agency.",
          fa: "آژانس مسافرتی.",
          fr: "Agence de voyage.",
          de: "Reisebüro.",
          it: "Agenzia di viaggi.",
          es: "Agencia de viajes.",
          ru: "Туристическое агентство.",
          zh: "旅行社。",
          ar: "وكالة سفر.",
          ko: "여행사."
        }
      },
      {
        id: "aggressive",
        word: {
          en: "Aggressive",
          fa: "پرخاشگر",
          fr: "Agressif",
          de: "Aggressiv",
          it: "Aggressivo",
          es: "Agresivo",
          ru: "Агрессивный",
          zh: "好斗",
          ar: "عدواني",
          ko: "공격적인"
        },
        sentence: {
          en: "Aggressive behavior.",
          fa: "رفتار تهاجمی.",
          fr: "Comportement agressif.",
          de: "Aggressives Verhalten.",
          it: "Comportamento aggressivo.",
          es: "Comportamiento agresivo.",
          ru: "Агрессивное поведение.",
          zh: "攻击性行为。",
          ar: "سلوك عدواني.",
          ko: "공격적인 행동."
        }
      },
      {
        id: "agriculture",
        word: {
          en: "Agriculture",
          fa: "کشاورزی",
          fr: "Agriculture",
          de: "Landwirtschaft",
          it: "Agricoltura",
          es: "Agricultura",
          ru: "Сельское хозяйство",
          zh: "农业",
          ar: "زراعة",
          ko: "농업"
        },
        sentence: {
          en: "Modern agriculture.",
          fa: "کشاورزی مدرن.",
          fr: "Agriculture moderne.",
          de: "Moderne Landwirtschaft.",
          it: "Agricoltura moderna.",
          es: "Agricultura moderna.",
          ru: "Современное сельское хозяйство.",
          zh: "现代农业。",
          ar: "زراعة حديثة.",
          ko: "현대 농업."
        }
      },
      {
        id: "aid",
        word: {
          en: "Aid",
          fa: "کمک/یاری",
          fr: "Aide",
          de: "Hilfe",
          it: "Aiuto",
          es: "Ayuda",
          ru: "Помощь",
          zh: "援助",
          ar: "مساعدة",
          ko: "원조"
        },
        sentence: {
          en: "First aid kit.",
          fa: "جعبه کمک‌های اولیه.",
          fr: "Trousse de premiers secours.",
          de: "Verbandskasten.",
          it: "Kit di pronto soccorso.",
          es: "Botiquín de primeros auxilios.",
          ru: "Аптечка первой помощи.",
          zh: "急救箱。",
          ar: "حقيبة الإسعافات الأولية.",
          ko: "구급상자."
        }
      },
      {
        id: "alarm",
        word: {
          en: "Alarm",
          fa: "هشدار",
          fr: "Alarme",
          de: "Alarm",
          it: "Allarme",
          es: "Alarma",
          ru: "Тревога",
          zh: "警报",
          ar: "إنذار",
          ko: "경보"
        },
        sentence: {
          en: "Set the alarm.",
          fa: "آلارم را تنظیم کن.",
          fr: "Règle l'alarme.",
          de: "Stell den Wecker.",
          it: "Imposta la sveglia.",
          es: "Pon la alarma.",
          ru: "Установи будильник.",
          zh: "设定闹钟。",
          ar: "اضبط المنبه.",
          ko: "알람을 설정하세요."
        }
      },
      {
        id: "alter",
        word: {
          en: "Alter",
          fa: "تغییر دادن",
          fr: "Modifier",
          de: "Ändern",
          it: "Alterare",
          es: "Alterar",
          ru: "Изменять",
          zh: "改变",
          ar: "غير",
          ko: "바꾸다"
        },
        sentence: {
          en: "Do not alter it.",
          fa: "آن را تغییر نده.",
          fr: "Ne le modifie pas.",
          de: "Ändere es nicht.",
          it: "Non modificarlo.",
          es: "No lo alteres.",
          ru: "Не изменяй это.",
          zh: "不要改变它。",
          ar: "لا تغيره.",
          ko: "그것을 바꾸지 마세요."
        }
      },
      {
        id: "alternative",
        word: {
          en: "Alternative",
          fa: "جایگزین",
          fr: "Alternative",
          de: "Alternative",
          it: "Alternativa",
          es: "Alternativa",
          ru: "Альтернатива",
          zh: "替代",
          ar: "بديل",
          ko: "대안"
        },
        sentence: {
          en: "An alternative solution.",
          fa: "یک راه حل جایگزین.",
          fr: "Une solution alternative.",
          de: "Eine alternative Lösung.",
          it: "Una soluzione alternativa.",
          es: "Una solución alternativa.",
          ru: "Альтернативное решение.",
          zh: "替代方案。",
          ar: "حل بديل.",
          ko: "대안."
        }
      },
      {
        id: "ambition",
        word: {
          en: "Ambition",
          fa: "جاه‌طلبی/آرزو",
          fr: "Ambition",
          de: "Ehrgeiz",
          it: "Ambizione",
          es: "Ambición",
          ru: "Амбиция",
          zh: "野心",
          ar: "طموح",
          ko: "야망"
        },
        sentence: {
          en: "He has ambition.",
          fa: "او جاه‌طلبی دارد.",
          fr: "Il a de l'ambition.",
          de: "Er hat Ehrgeiz.",
          it: "Ha ambizione.",
          es: "Tiene ambición.",
          ru: "У него есть амбиции.",
          zh: "他有野心。",
          ar: "لديه طموح.",
          ko: "그는 야망이 있습니다."
        }
      },
      {
        id: "annual",
        word: {
          en: "Annual",
          fa: "سالانه",
          fr: "Annuel",
          de: "Jährlich",
          it: "Annuale",
          es: "Anual",
          ru: "Ежегодный",
          zh: "年度",
          ar: "سنوي",
          ko: "연간의"
        },
        sentence: {
          en: "Annual report.",
          fa: "گزارش سالانه.",
          fr: "Rapport annuel.",
          de: "Jahresbericht.",
          it: "Rapporto annuale.",
          es: "Informe anual.",
          ru: "Годовой отчет.",
          zh: "年度报告。",
          ar: "تقرير سنوي.",
          ko: "연례 보고서."
        }
      },
      {
        id: "anticipate",
        word: {
          en: "Anticipate",
          fa: "پیش‌بینی کردن",
          fr: "Anticiper",
          de: "Vorhersehen",
          it: "Anticipare",
          es: "Anticipar",
          ru: "Предвидеть",
          zh: "预期",
          ar: "توقع",
          ko: "예상하다"
        },
        sentence: {
          en: "Anticipate the outcome.",
          fa: "نتیجه را پیش‌بینی کن.",
          fr: "Anticiper le résultat.",
          de: "Das Ergebnis vorwegnehmen.",
          it: "Anticipare il risultato.",
          es: "Anticipar el resultado.",
          ru: "Предвидеть результат.",
          zh: "预见结果。",
          ar: "توقع النتيجة.",
          ko: "결과를 예상하세요."
        }
      },
      {
        id: "anxiety",
        word: {
          en: "Anxiety",
          fa: "اضطراب",
          fr: "Anxiété",
          de: "Angst",
          it: "Ansia",
          es: "Ansiedad",
          ru: "Тревога",
          zh: "焦虑",
          ar: "قلق",
          ko: "불안"
        },
        sentence: {
          en: "Overcome anxiety.",
          fa: "غلیه بر اضطراب.",
          fr: "Surmonter l'anxiété.",
          de: "Angst überwinden.",
          it: "Superare l'ansia.",
          es: "Superar la ansiedad.",
          ru: "Преодолеть тревогу.",
          zh: "克服焦虑。",
          ar: "التغلب على القلق.",
          ko: "불안을 극복하세요."
        }
      },
      {
        id: "apparent",
        word: {
          en: "Apparent",
          fa: "آشکار/ظاهری",
          fr: "Apparent",
          de: "Offensichtlich",
          it: "Apparente",
          es: "Aparente",
          ru: "Очевидный",
          zh: "明显",
          ar: "ظاهر",
          ko: "명백한"
        },
        sentence: {
          en: "It became apparent.",
          fa: "آشکار شد.",
          fr: "C'est devenu évident.",
          de: "Es wurde offensichtlich.",
          it: "È diventato evidente.",
          es: "Se hizo evidente.",
          ru: "Это стало очевидным.",
          zh: "变得明显。",
          ar: "أصبح واضحا.",
          ko: "분명해졌습니다."
        }
      },
      {
        id: "appeal",
        word: {
          en: "Appeal",
          fa: "درخواست/جذابیت",
          fr: "Appel",
          de: "Reiz/Appell",
          it: "Appello",
          es: "Apelación",
          ru: "Обращение",
          zh: "呼吁/吸引力",
          ar: "ناشد/جاذبية",
          ko: "호소"
        },
        sentence: {
          en: "Appeal to the court.",
          fa: "درخواست تجدیدنظر به دادگاه.",
          fr: "Faire appel au tribunal.",
          de: "Berufung beim Gericht einlegen.",
          it: "Appello alla corte.",
          es: "Apelar a la corte.",
          ru: "Обратиться в суд.",
          zh: "向上诉法院上诉。",
          ar: "الاستئناف أمام المحكمة.",
          ko: "법원에 항소하세요."
        }
      },
      {
        id: "appearance",
        word: {
          en: "Appearance",
          fa: "ظاهر",
          fr: "Apparence",
          de: "Erscheinung",
          it: "Aspetto",
          es: "Apariencia",
          ru: "Внешность",
          zh: "外貌",
          ar: "مظهر",
          ko: "외모"
        },
        sentence: {
          en: "Judge by appearance.",
          fa: "از روی ظاهر قضاوت کن.",
          fr: "Juger sur l'apparence.",
          de: "Nach dem Schein urteilen.",
          it: "Giudicare dall'apparenza.",
          es: "Juzgar por la apariencia.",
          ru: "Судить по внешности.",
          zh: "以貌取人。",
          ar: "احكم بالمظهر.",
          ko: "외모로 판단하세요."
        }
      },
      {
        id: "application",
        word: {
          en: "Application",
          fa: "کاربرد/درخواست",
          fr: "Application",
          de: "Anwendung",
          it: "Applicazione",
          es: "Aplicación",
          ru: "Приложение/Заявка",
          zh: "应用/申请",
          ar: "تطبيق",
          ko: "지원"
        },
        sentence: {
          en: "Job application.",
          fa: "درخواست شغل.",
          fr: "Demande d'emploi.",
          de: "Bewerbung.",
          it: "Domanda di lavoro.",
          es: "Solicitud de empleo.",
          ru: "Заявление о приеме на работу.",
          zh: "求职申请。",
          ar: "طلب وظيفة.",
          ko: "입사 지원서."
        }
      },
      {
        id: "appoint",
        word: {
          en: "Appoint",
          fa: "منصوب کردن",
          fr: "Nommer",
          de: "Ernennen",
          it: "Nominare",
          es: "Nombrar",
          ru: "Назначать",
          zh: "任命",
          ar: "عين",
          ko: "임명하다"
        },
        sentence: {
          en: "Appoint a leader.",
          fa: "یک رهبر تعیین کن.",
          fr: "Nommer un chef.",
          de: "Einen Anführer ernennen.",
          it: "Nominare un leader.",
          es: "Nombrar un líder.",
          ru: "Назначить лидера.",
          zh: "任命一位领导人。",
          ar: "عين قائداً.",
          ko: "지도자를 임명하세요."
        }
      },
      {
        id: "appreciate",
        word: {
          en: "Appreciate",
          fa: "قدردانی کردن/درک کردن",
          fr: "Apprécier",
          de: "Schätzen",
          it: "Apprezzare",
          es: "Apreciar",
          ru: "Ценить",
          zh: "欣赏/感激",
          ar: "قدر",
          ko: "감사하다"
        },
        sentence: {
          en: "I appreciate your help.",
          fa: "از کمک شما قدردانی می‌کنم.",
          fr: "J'apprécie votre aide.",
          de: "Ich schätze Ihre Hilfe.",
          it: "Apprezzo il tuo aiuto.",
          es: "Aprecio tu ayuda.",
          ru: "Я ценю вашу помощь.",
          zh: "我感谢你的帮助。",
          ar: "أقدر مساعدتك.",
          ko: "당신의 도움에 감사드립니다."
        }
      },
      {
        id: "approach",
        word: {
          en: "Approach",
          fa: "رویکرد/نزدیک شدن",
          fr: "Approche",
          de: "Ansatz",
          it: "Approccio",
          es: "Enfoque",
          ru: "Подход",
          zh: "方法/接近",
          ar: "نهج",
          ko: "접근"
        },
        sentence: {
          en: "A new approach.",
          fa: "یک رویکرد جدید.",
          fr: "Une nouvelle approche.",
          de: "Ein neuer Ansatz.",
          it: "Un nuovo approccio.",
          es: "Un nuevo enfoque.",
          ru: "Новый подход.",
          zh: "一种新方法。",
          ar: "نهج جديد.",
          ko: "새로운 접근 방식."
        }
      },
      {
        id: "appropriate",
        word: {
          en: "Appropriate",
          fa: "مناسب",
          fr: "Approprié",
          de: "Angemessen",
          it: "Appropriato",
          es: "Apropiado",
          ru: "Подходящий",
          zh: "适当",
          ar: "مناسب",
          ko: "적절한"
        },
        sentence: {
          en: "Is it appropriate?",
          fa: "آیا مناسب است؟",
          fr: "Est-ce approprié ?",
          de: "Ist es angemessen?",
          it: "È appropriato?",
          es: "¿Es apropiado?",
          ru: "Это уместно?",
          zh: "这合适吗？",
          ar: "هل هذا مناسب؟",
          ko: "적절합니까?"
        }
      },
      {
        id: "approval",
        word: {
          en: "Approval",
          fa: "تایید",
          fr: "Approbation",
          de: "Genehmigung",
          it: "Approvazione",
          es: "Aprobación",
          ru: "Одобрение",
          zh: "批准",
          ar: "موافقة",
          ko: "승인"
        },
        sentence: {
          en: "Get approval.",
          fa: "تاییدیه بگیر.",
          fr: "Obtenir l'approbation.",
          de: "Genehmigung einholen.",
          it: "Ottenere l'approvazione.",
          es: "Obtener aprobación.",
          ru: "Получить одобрение.",
          zh: "获得批准。",
          ar: "احصل على الموافقة.",
          ko: "승인을 받으세요."
        }
      },
      {
        id: "arise",
        word: {
          en: "Arise",
          fa: "ناشی شدن/برخاستن",
          fr: "Survenir",
          de: "Entstehen",
          it: "Sorgere",
          es: "Surgir",
          ru: "Возникать",
          zh: "出现",
          ar: "نشأ",
          ko: "발생하다"
        },
        sentence: {
          en: "Problems may arise.",
          fa: "ممکن است مشکلاتی پیش بیاید.",
          fr: "Des problèmes peuvent survenir.",
          de: "Probleme können auftreten.",
          it: "Possono sorgere problemi.",
          es: "Pueden surgir problemas.",
          ru: "Могут возникнуть проблемы.",
          zh: "可能会出现问题。",
          ar: "قد تنشأ مشاكل.",
          ko: "문제가 발생할 수 있습니다."
        }
      },
      {
        id: "artificial",
        word: {
          en: "Artificial",
          fa: "مصنوعی",
          fr: "Artificiel",
          de: "Künstlich",
          it: "Artificiale",
          es: "Artificial",
          ru: "Искусственный",
          zh: "人造",
          ar: "اصطناعي",
          ko: "인공적인"
        },
        sentence: {
          en: "Artificial intelligence.",
          fa: "هوش مصنوعی.",
          fr: "Intelligence artificielle.",
          de: "Künstliche Intelligenz.",
          it: "Intelligenza artificiale.",
          es: "Inteligencia artificial.",
          ru: "Искусственный интеллект.",
          zh: "人工智能。",
          ar: "ذكاء اصطناعي.",
          ko: "인공 지능."
        }
      },
      {
        id: "artistic",
        word: {
          en: "Artistic",
          fa: "هنری",
          fr: "Artistique",
          de: "Künstlerisch",
          it: "Artistico",
          es: "Artístico",
          ru: "Художественный",
          zh: "艺术",
          ar: "فني",
          ko: "예술적인"
        },
        sentence: {
          en: "Artistic talent.",
          fa: "استعداد هنری.",
          fr: "Talent artistique.",
          de: "Künstlerisches Talent.",
          it: "Talento artistico.",
          es: "Talento artístico.",
          ru: "Художественный талант.",
          zh: "艺术天赋。",
          ar: "موهبة فنية.",
          ko: "예술적 재능."
        }
      },
      {
        id: "ashamed",
        word: {
          en: "Ashamed",
          fa: "شرمنده",
          fr: "Honteux",
          de: "Beschämt",
          it: "Vergognarsi",
          es: "Avergonzado",
          ru: "Пристыженный",
          zh: "羞愧",
          ar: "خجل",
          ko: "부끄러운"
        },
        sentence: {
          en: "Don't be ashamed.",
          fa: "خجالت نکش.",
          fr: "N'aie pas honte.",
          de: "Schäme dich nicht.",
          it: "Non vergognarti.",
          es: "No te avergüences.",
          ru: "Не стыдись.",
          zh: "不要感到羞耻。",
          ar: "لا تخجل.",
          ko: "부끄러워하지 마세요."
        }
      },
      {
        id: "aspect",
        word: {
          en: "Aspect",
          fa: "جنبه",
          fr: "Aspect",
          de: "Aspekt",
          it: "Aspetto",
          es: "Aspecto",
          ru: "Аспект",
          zh: "方面",
          ar: "جانب",
          ko: "측면"
        },
        sentence: {
          en: "Consider every aspect.",
          fa: "همه جنبه‌ها را در نظر بگیر.",
          fr: "Considére chaque aspect.",
          de: "Berücksichtige jeden Aspekt.",
          it: "Considera ogni aspetto.",
          es: "Considera cada aspecto.",
          ru: "Учитывай каждый аспект.",
          zh: "考虑方方面面。",
          ar: "ضع في اعتبارك كل جانب.",
          ko: "모든 측면을 고려하세요."
        }
      },
      {
        id: "assess",
        word: {
          en: "Assess",
          fa: "ارزیابی کردن",
          fr: "Évaluer",
          de: "Beurteilen",
          it: "Valutare",
          es: "Evaluar",
          ru: "Оценивать",
          zh: "评估",
          ar: "قيم",
          ko: "평가하다"
        },
        sentence: {
          en: "Assess the situation.",
          fa: "وضیعت را ارزیابی کن.",
          fr: "Évaluer la situation.",
          de: "Beurteile die Situation.",
          it: "Valuta la situazione.",
          es: "Evalúa la situación.",
          ru: "Оцени ситуацию.",
          zh: "评估形势。",
          ar: "قيم الوضع.",
          ko: "상황을 평가하세요."
        }
      },
      {
        id: "assessment",
        word: {
          en: "Assessment",
          fa: "ارزیابی",
          fr: "Évaluation",
          de: "Bewertung",
          it: "Valutazione",
          es: "Evaluación",
          ru: "Оценка",
          zh: "评估",
          ar: "تقييم",
          ko: "평가"
        },
        sentence: {
          en: "Risk assessment.",
          fa: "ارزیابی ریسک.",
          fr: "Évaluation des risques.",
          de: "Risikobewertung.",
          it: "Valutazione del rischio.",
          es: "Evaluación de riesgos.",
          ru: "Оценка рисков.",
          zh: "风险评估。",
          ar: "تقييم المخاطر.",
          ko: "위험 평가."
        }
      },
      {
        id: "assignment",
        word: {
          en: "Assignment",
          fa: "تکلیف/ماموریت",
          fr: "Mission/Devoir",
          de: "Aufgabe",
          it: "Assegnazione",
          es: "Asignación",
          ru: "Задание",
          zh: "作业/任务",
          ar: "مهمة",
          ko: "과제"
        },
        sentence: {
          en: "Complete the assignment.",
          fa: "تکلیف را کامل کن.",
          fr: "Termine le devoir.",
          de: "Schließ die Aufgabe ab.",
          it: "Completa il compito.",
          es: "Completa la tarea.",
          ru: "Выполни задание.",
          zh: "完成作业。",
          ar: "أكمل المهمة.",
          ko: "과제를 완료하세요."
        }
      },
      {
        id: "assist",
        word: {
          en: "Assist",
          fa: "کمک کردن (رسمی)",
          fr: "Assister",
          de: "Helfen",
          it: "Assistere",
          es: "Asistir",
          ru: "Помогать",
          zh: "协助",
          ar: "ساعد",
          ko: "돕다"
        },
        sentence: {
          en: "Can I assist you?",
          fa: "میتوانم کمکتان کنم؟",
          fr: "Puis-je vous aider ?",
          de: "Kann ich Ihnen helfen?",
          it: "Posso assisterti?",
          es: "¿Puedo ayudarte?",
          ru: "Могу я вам помочь?",
          zh: "我可以帮你吗？",
          ar: "هل يمكنني مساعدتك؟",
          ko: "도와드릴까요?"
        }
      },
      {
        id: "associate",
        word: {
          en: "Associate",
          fa: "مرتبط دانستن/شریک",
          fr: "Associer",
          de: "Verbinden",
          it: "Associare",
          es: "Asociar",
          ru: "Ассоциировать",
          zh: "联想/同事",
          ar: "ربط",
          ko: "연관시키다"
        },
        sentence: {
          en: "Associate with good people.",
          fa: "با افراد خوب معاشرت کن.",
          fr: "S'associer avec de bonnes personnes.",
          de: "Umgib dich mit guten Menschen.",
          it: "Associati con brave persone.",
          es: "Asóciate con buena gente.",
          ru: "Общайся с хорошими людьми.",
          zh: "与好人交往。",
          ar: "ارتبط بأناس طيبين.",
          ko: "좋은 사람들과 어울리세요."
        }
      },
      {
        id: "association",
        word: {
          en: "Association",
          fa: "انجمن/وابستگی",
          fr: "Association",
          de: "Verband/Assoziation",
          it: "Associazione",
          es: "Asociación",
          ru: "Ассоциация",
          zh: "协会",
          ar: "جمعية",
          ko: "협회"
        },
        sentence: {
          en: "Alumni association.",
          fa: "انجمن فارغ‌التحصیلان.",
          fr: "Association des anciens élèves.",
          de: "Ehemaligenvereinigung.",
          it: "Associazione ex alunni.",
          es: "Asociación de ex alumnos.",
          ru: "Ассоциация выпускников.",
          zh: "校友会。",
          ar: "رابطة الخريجين.",
          ko: "동문회."
        }
      },
      {
        id: "assumption",
        word: {
          en: "Assumption",
          fa: "فرض",
          fr: "Hypothèse",
          de: "Annahme",
          it: "Presupposto",
          es: "Suposición",
          ru: "Предположение",
          zh: "假设",
          ar: "افتراض",
          ko: "가정"
        },
        sentence: {
          en: "Wrong assumption.",
          fa: "فرض اشتباه.",
          fr: "Mauvaise hypothèse.",
          de: "Falsche Annahme.",
          it: "Presupposto sbagliato.",
          es: "Suposición errónea.",
          ru: "Неверное предположение.",
          zh: "错误的假设。",
          ar: "افتراض خاطئ.",
          ko: "잘못된 가정."
        }
      },
      {
        id: "atmosphere",
        word: {
          en: "Atmosphere",
          fa: "جو/اتمسفر",
          fr: "Atmosphère",
          de: "Atmosphäre",
          it: "Atmosfera",
          es: "Atmósfera",
          ru: "Атмосфера",
          zh: "气氛",
          ar: "غلاف جوي",
          ko: "분위기"
        },
        sentence: {
          en: "Relaxed atmosphere.",
          fa: "جو آرام.",
          fr: "Atmosphère détendue.",
          de: "Entspannte Atmosphäre.",
          it: "Atmosfera rilassata.",
          es: "Ambiente relajado.",
          ru: "Расслабленная атмосфера.",
          zh: "轻松的氛围。",
          ar: "جو مريح.",
          ko: "편안한 분위기."
        }
      },
      {
        id: "attachment",
        word: {
          en: "Attachment",
          fa: "دلبستگی/ضمیمه",
          fr: "Attachement",
          de: "Anhang/Bindung",
          it: "Attaccamento",
          es: "Adjunto/Apego",
          ru: "Вложение/Привязанность",
          zh: "附件",
          ar: "مرفق",
          ko: "부착"
        },
        sentence: {
          en: "Email attachment.",
          fa: "پیوست ایمیل.",
          fr: "Pièce jointe.",
          de: "E-Mail-Anhang.",
          it: "Allegato email.",
          es: "Archivo adjunto.",
          ru: "Вложение электронной почты.",
          zh: "电子邮件附件。",
          ar: "مرفق البريد الإلكتروني.",
          ko: "이메일 첨부 파일."
        }
      },
      {
        id: "attempt",
        word: {
          en: "Attempt",
          fa: "تلاش/قصد",
          fr: "Tentative",
          de: "Versuch",
          it: "Tentativo",
          es: "Intento",
          ru: "Попытка",
          zh: "尝试",
          ar: "محاولة",
          ko: "시도"
        },
        sentence: {
          en: "Make an attempt.",
          fa: "تلاش کن.",
          fr: "Fais une tentative.",
          de: "Mach einen Versuch.",
          it: "Fai un tentativo.",
          es: "Haz un intento.",
          ru: "Сделай попытку.",
          zh: "尝试一下。",
          ar: "قم بمحاولة.",
          ko: "시도해 보세요."
        }
      },
      {
        id: "attribute",
        word: {
          en: "Attribute",
          fa: "ویژگی/نسبت دادن",
          fr: "Attribut",
          de: "Attribut/Eigenschaft",
          it: "Attributo",
          es: "Atributo",
          ru: "Атрибут",
          zh: "属性",
          ar: "سمة",
          ko: "속성"
        },
        sentence: {
          en: "Key attribute.",
          fa: "ویژگی کلیدی.",
          fr: "Attribut clé.",
          de: "Hauptmerkmal.",
          it: "Attributo chiave.",
          es: "Atributo clave.",
          ru: "Ключевой атрибут.",
          zh: "关键属性。",
          ar: "سمة رئيسية.",
          ko: "주요 속성."
        }
      },
      {
        id: "audience",
        word: {
          en: "Audience",
          fa: "مخاطبان/حضار",
          fr: "Public",
          de: "Publikum",
          it: "Pubblico",
          es: "Audiencia",
          ru: "Аудитория",
          zh: "观众",
          ar: "جمهور",
          ko: "청중"
        },
        sentence: {
          en: "Large audience.",
          fa: "مخاطبان زیاد.",
          fr: "Large public.",
          de: "Großes Publikum.",
          it: "Grande pubblico.",
          es: "Gran audiencia.",
          ru: "Большая аудитория.",
          zh: "大量观众。",
          ar: "جمهور كبير.",
          ko: "많은 청중."
        }
      },
      {
        id: "authority",
        word: {
          en: "Authority",
          fa: "اقتدار/مقامات",
          fr: "Autorité",
          de: "Autorität",
          it: "Autorità",
          es: "Autoridad",
          ru: "Власть",
          zh: "权威",
          ar: "سلطة",
          ko: "권위"
        },
        sentence: {
          en: "Local authority.",
          fa: "مقامات محلی.",
          fr: "Autorité locale.",
          de: "Lokale Behörde.",
          it: "Autorità locale.",
          es: "Autoridad local.",
          ru: "Местная власть.",
          zh: "地方当局。",
          ar: "سلطة محلية.",
          ko: "지방 당국."
        }
      },
      {
        id: "awareness",
        word: {
          en: "Awareness",
          fa: "آگاهی",
          fr: "Conscience",
          de: "Bewusstsein",
          it: "Consapevolezza",
          es: "Conciencia",
          ru: "Осведомленность",
          zh: "意识",
          ar: "وعي",
          ko: "인식"
        },
        sentence: {
          en: "Raise awareness.",
          fa: "افزایش آگاهی.",
          fr: "Sensibiliser.",
          de: "Bewusstsein schärfen.",
          it: "Aumentare la consapevolezza.",
          es: "Crear conciencia.",
          ru: "Повышать осведомленность.",
          zh: "提高认识。",
          ar: "رفع الوعي.",
          ko: "인식을 높이세요."
        }
      },
      {
        id: "background",
        word: {
          en: "Background",
          fa: "پس‌زمینه/سوابق",
          fr: "Arrière-plan",
          de: "Hintergrund",
          it: "Sfondo",
          es: "Fondo",
          ru: "Фон",
          zh: "背景",
          ar: "خلفية",
          ko: "배경"
        },
        sentence: {
          en: "Check the background.",
          fa: "پس‌زمینه را بررسی کن.",
          fr: "Vérifie l'arrière-plan.",
          de: "Überprüfe den Hintergrund.",
          it: "Controlla lo sfondo.",
          es: "Verifica el fondo.",
          ru: "Проверь фон.",
          zh: "检查背景。",
          ar: "تحقق من الخلفية.",
          ko: "배경을 확인하세요."
        }
      },
      {
        id: "barrier",
        word: {
          en: "Barrier",
          fa: "مانع",
          fr: "Barrière",
          de: "Barriere",
          it: "Barriera",
          es: "Barrera",
          ru: "Барьер",
          zh: "障碍",
          ar: "حاجز",
          ko: "장벽"
        },
        sentence: {
          en: "Language barrier.",
          fa: "مانع زبانی.",
          fr: "Barrière de la langue.",
          de: "Sprachbarriere.",
          it: "Barriera linguistica.",
          es: "Barrera del idioma.",
          ru: "Языковой барьер.",
          zh: "语言障碍。",
          ar: "حاجز اللغة.",
          ko: "언어 장벽."
        }
      },
      {
        id: "basis",
        word: {
          en: "Basis",
          fa: "مبنا/پایه",
          fr: "Base",
          de: "Basis",
          it: "Base",
          es: "Base",
          ru: "Основа",
          zh: "基础",
          ar: "أساس",
          ko: "기초"
        },
        sentence: {
          en: "On a daily basis.",
          fa: "به صورت روزانه.",
          fr: "Sur une base quotidienne.",
          de: "Auf täglicher Basis.",
          it: "Su base giornaliera.",
          es: "Diariamente.",
          ru: "Ежедневно.",
          zh: "每天。",
          ar: "بشكل يومي.",
          ko: "매일."
        }
      },
      {
        id: "bond",
        word: {
          en: "Bond",
          fa: "پیوند/رابطه",
          fr: "Lien",
          de: "Bindung",
          it: "Legame",
          es: "Vínculo",
          ru: "Связь",
          zh: "纽带",
          ar: "رابطة",
          ko: "유대"
        },
        sentence: {
          en: "Strong bond.",
          fa: "پیوند قوی.",
          fr: "Lien fort.",
          de: "Starke Bindung.",
          it: "Legame forte.",
          es: "Vínculo fuerte.",
          ru: "Сильная связь.",
          zh: "牢固的纽带。",
          ar: "رابطة قوية.",
          ko: "강한 유대."
        }
      },
      {
        id: "border",
        word: {
          en: "Border",
          fa: "مرز",
          fr: "Frontière",
          de: "Grenze",
          it: "Confine",
          es: "Frontera",
          ru: "Граница",
          zh: "边界",
          ar: "حدود",
          ko: "국경"
        },
        sentence: {
          en: "Cross the border.",
          fa: "از مرز عبور کن.",
          fr: "Traverser la frontière.",
          de: "Die Grenze überqueren.",
          it: "Attraversare il confine.",
          es: "Cruzar la frontera.",
          ru: "Пересечь границу.",
          zh: "越过边境。",
          ar: "اعبر الحدود.",
          ko: "국경을 넘으세요."
        }
      },
      {
        id: "boundary",
        word: {
          en: "Boundary",
          fa: "حد و مرز",
          fr: "Limite",
          de: "Grenze",
          it: "Confine",
          es: "Límite",
          ru: "Граница",
          zh: "界限",
          ar: "حد",
          ko: "경계"
        },
        sentence: {
          en: "Push the boundary.",
          fa: "مرزها را جابجا کن.",
          fr: "Repousser les limites.",
          de: "Grenzen verschieben.",
          it: "Superare il confine.",
          es: "Superar el límite.",
          ru: "Расширять границы.",
          zh: "突破界限。",
          ar: "ادفع الحدود.",
          ko: "한계를 뛰어넘으세요."
        }
      },
      {
        id: "brand",
        word: {
          en: "Brand",
          fa: "برند/نام تجاری",
          fr: "Marque",
          de: "Marke",
          it: "Marca",
          es: "Marca",
          ru: "Бренд",
          zh: "品牌",
          ar: "علامة تجارية",
          ko: "브랜드"
        },
        sentence: {
          en: "Famous brand.",
          fa: "برند معروف.",
          fr: "Marque célèbre.",
          de: "Berühmte Marke.",
          it: "Marchio famoso.",
          es: "Marca famosa.",
          ru: "Известный бренд.",
          zh: "著名品牌。",
          ar: "علامة تجارية مشهورة.",
          ko: "유명 브랜드."
        }
      },
      {
        id: "brief",
        word: {
          en: "Brief",
          fa: "مختصر",
          fr: "Bref",
          de: "Kurz",
          it: "Breve",
          es: "Breve",
          ru: "Краткий",
          zh: "简短",
          ar: "موجز",
          ko: "간략한"
        },
        sentence: {
          en: "Keep it brief.",
          fa: "مختصرش کن.",
          fr: "Fais court.",
          de: "Fass dich kurz.",
          it: "Sii breve.",
          es: "Sé breve.",
          ru: "Будь краток.",
          zh: "长话短说。",
          ar: "اجعلها موجزة.",
          ko: "간단히 하세요."
        }
      },
      {
        id: "broad",
        word: {
          en: "Broad",
          fa: "گسترده/پهن",
          fr: "Large",
          de: "Breit",
          it: "Largo",
          es: "Ancho",
          ru: "Широкий",
          zh: "宽",
          ar: "واسع",
          ko: "넓은"
        },
        sentence: {
          en: "Broad shoulders.",
          fa: "شانه‌های پهن.",
          fr: "Épaules larges.",
          de: "Breite Schultern.",
          it: "Spalle larghe.",
          es: "Hombros anchos.",
          ru: "Широкие плечи.",
          zh: "宽阔的肩膀。",
          ar: "أكتاف عريضة.",
          ko: "넓은 어깨."
        }
      },
      {
        id: "broadcast",
        word: {
          en: "Broadcast",
          fa: "پخش کردن",
          fr: "Diffuser",
          de: "Senden",
          it: "Trasmissione",
          es: "Emisión",
          ru: "Трансляция",
          zh: "广播",
          ar: "بث",
          ko: "방송"
        },
        sentence: {
          en: "Live broadcast.",
          fa: "پخش زنده.",
          fr: "Diffusion en direct.",
          de: "Live-Übertragung.",
          it: "Trasmissione in diretta.",
          es: "Transmisión en vivo.",
          ru: "Прямая трансляция.",
          zh: "现场直播。",
          ar: "بث مباشر.",
          ko: "생방송."
        }
      },
      {
        id: "budget",
        word: {
          en: "Budget",
          fa: "بودجه",
          fr: "Budget",
          de: "Budget",
          it: "Bilancio",
          es: "Presupuesto",
          ru: "Бюджет",
          zh: "预算",
          ar: "ميزانية",
          ko: "예산"
        },
        sentence: {
          en: "Low budget.",
          fa: "بودجه کم.",
          fr: "Petit budget.",
          de: "Niedriges Budget.",
          it: "Budget basso.",
          es: "Bajo presupuesto.",
          ru: "Низкий бюджет.",
          zh: "低预算。",
          ar: "ميزانية منخفضة.",
          ko: "저예산."
        }
      },
      {
        id: "calculate",
        word: {
          en: "Calculate",
          fa: "محاسبه کردن",
          fr: "Calculer",
          de: "Berechnen",
          it: "Calcolare",
          es: "Calcular",
          ru: "Вычислять",
          zh: "计算",
          ar: "حسب",
          ko: "계산하다"
        },
        sentence: {
          en: "Calculate the cost.",
          fa: "هزینه را محاسبه کن.",
          fr: "Calcule le coût.",
          de: "Berechne die Kosten.",
          it: "Calcola il costo.",
          es: "Calcula el costo.",
          ru: "Рассчитай стоимость.",
          zh: "计算成本。",
          ar: "احسب التكلفة.",
          ko: "비용을 계산하세요."
        }
      },
      {
        id: "campaign",
        word: {
          en: "Campaign",
          fa: "کمپین/پویش",
          fr: "Campagne",
          de: "Kampagne",
          it: "Campagna",
          es: "Campaña",
          ru: "Кампания",
          zh: "运动",
          ar: "حملة",
          ko: "캠페인"
        },
        sentence: {
          en: "Ad campaign.",
          fa: "کمپین تبلیغاتی.",
          fr: "Campagne publicitaire.",
          de: "Werbekampagne.",
          it: "Campagna pubblicitaria.",
          es: "Campaña publicitaria.",
          ru: "Рекламная кампания.",
          zh: "广告活动。",
          ar: "حملة إعلانية.",
          ko: "광고 캠페인."
        }
      },
      {
        id: "candidate",
        word: {
          en: "Candidate",
          fa: "کاندیدا/نامزد",
          fr: "Candidat",
          de: "Kandidat",
          it: "Candidato",
          es: "Candidato",
          ru: "Кандидат",
          zh: "候选人",
          ar: "مرشح",
          ko: "후보자"
        },
        sentence: {
          en: "Ideal candidate.",
          fa: "کاندیدای ایده‌آل.",
          fr: "Candidat idéal.",
          de: "Idealer Kandidat.",
          it: "Candidato ideale.",
          es: "Candidato ideal.",
          ru: "Идеальный кандидат.",
          zh: "理想的候选人。",
          ar: "مرشح مثالي.",
          ko: "이상적인 후보자."
        }
      },
      {
        id: "capability",
        word: {
          en: "Capability",
          fa: "قابلیت",
          fr: "Capacité",
          de: "Fähigkeit",
          it: "Capacità",
          es: "Capacidad",
          ru: "Способность",
          zh: "能力",
          ar: "قدرة",
          ko: "능력"
        },
        sentence: {
          en: "High capability.",
          fa: "قابلیت بالا.",
          fr: "haute capacité.",
          de: "Hohe Leistungsfähigkeit.",
          it: "Alta capacità.",
          es: "Alta capacidad.",
          ru: "Высокая способность.",
          zh: "高能力。",
          ar: "قدرة عالية.",
          ko: "높은 능력."
        }
      },
      {
        id: "capacity",
        word: {
          en: "Capacity",
          fa: "ظرفیت",
          fr: "Capacité",
          de: "Kapazität",
          it: "Capacità",
          es: "Capacidad",
          ru: "Вместимость",
          zh: "容量",
          ar: "سعة",
          ko: "용량"
        },
        sentence: {
          en: "Full capacity.",
          fa: "ظرفیت کامل.",
          fr: "Pleine capacité.",
          de: "Volle Kapazität.",
          it: "Piena capacità.",
          es: "Capacidad total.",
          ru: "Полная мощность.",
          zh: "满负荷。",
          ar: "سعة كاملة.",
          ko: "최대 용량."
        }
      },
      {
        id: "capture",
        word: {
          en: "Capture",
          fa: "تسخیر کردن/گرفتن",
          fr: "Capturer",
          de: "Erfassen/Fangen",
          it: "Catturare",
          es: "Capturar",
          ru: "Захват",
          zh: "捕获",
          ar: "التقاط",
          ko: "포획하다"
        },
        sentence: {
          en: "Capture the moment.",
          fa: "لحظه را ثبت کن.",
          fr: "Capture le moment.",
          de: "Fang den Moment ein.",
          it: "Cattura il momento.",
          es: "Captura el momento.",
          ru: "Запечатлей момент.",
          zh: "捕捉瞬间。",
          ar: "التقط اللحظة.",
          ko: "순간을 포착하세요."
        }
      },
      {
        id: "category",
        word: {
          en: "Category",
          fa: "دسته‌بندی",
          fr: "Catégorie",
          de: "Kategorie",
          it: "Categoria",
          es: "Categoría",
          ru: "Категория",
          zh: "类别",
          ar: "فئة",
          ko: "범주"
        },
        sentence: {
          en: "Choose a category.",
          fa: "یک دسته‌بندی انتخاب کن.",
          fr: "Choisis une catégorie.",
          de: "Wähle eine Kategorie.",
          it: "Scegli una categoria.",
          es: "Elige una categoría.",
          ru: "Выбери категорию.",
          zh: "选择一个类别。",
          ar: "اختر فئة.",
          ko: "카테고리를 선택하세요."
        }
      },
      {
        id: "cause",
        word: {
          en: "Cause",
          fa: "علت/آرمان",
          fr: "Cause",
          de: "Ursache",
          it: "Causa",
          es: "Causa",
          ru: "Причина",
          zh: "原因",
          ar: "سبب",
          ko: "원인"
        },
        sentence: {
          en: "Cause of death.",
          fa: "علت مرگ.",
          fr: "Cause de la mort.",
          de: "Todesursache.",
          it: "Causa della morte.",
          es: "Causa de muerte.",
          ru: "Причина смерти.",
          zh: "死因。",
          ar: "سبب الوفاة.",
          ko: "사망 원인."
        }
      },
      {
        id: "celebration",
        word: {
          en: "Celebration",
          fa: "جشن",
          fr: "Célébration",
          de: "Feier",
          it: "Celebrazione",
          es: "Celebración",
          ru: "Празднование",
          zh: "庆典",
          ar: "احتفال",
          ko: "축하"
        },
        sentence: {
          en: "Birthday celebration.",
          fa: "جشن تولد.",
          fr: "Célébration d'anniversaire.",
          de: "Geburtstagsfeier.",
          it: "Festa di compleanno.",
          es: "Celebración de cumpleaños.",
          ru: "Празднование дня рождения.",
          zh: "生日庆典。",
          ar: "احتفال عيد الميلاد.",
          ko: "생일 축하."
        }
      },
      {
        id: "ceremony",
        word: {
          en: "Ceremony",
          fa: "مراسم",
          fr: "Cérémonie",
          de: "Zeremonie",
          it: "Cerimonia",
          es: "Ceremonia",
          ru: "Церемония",
          zh: "仪式",
          ar: "مراسم",
          ko: "의식"
        },
        sentence: {
          en: "Opening ceremony.",
          fa: "مراسم افتتاحیه.",
          fr: "Cérémonie d'ouverture.",
          de: "Eröffnungsfeier.",
          it: "Cerimonia di apertura.",
          es: "Ceremonia de apertura.",
          ru: "Церемония открытия.",
          zh: "开幕式。",
          ar: "حفل الافتتاح.",
          ko: "개막식."
        }
      },
      {
        id: "chain",
        word: {
          en: "Chain",
          fa: "زنجیره",
          fr: "Chaîne",
          de: "Kette",
          it: "Catena",
          es: "Cadena",
          ru: "Цепь",
          zh: "链",
          ar: "سلسلة",
          ko: "사슬"
        },
        sentence: {
          en: "Chain reaction.",
          fa: "واکنش زنجیره‌ای.",
          fr: "Réaction en chaîne.",
          de: "Kettenreaktion.",
          it: "Reazione a catena.",
          es: "Reacción en cadena.",
          ru: "Цепная реакция.",
          zh: "连锁反应。",
          ar: "تفاعل متسلسل.",
          ko: "연쇄 반응."
        }
      },
      {
        id: "chairman",
        word: {
          en: "Chairman",
          fa: "رئیس (جلسه/هیات)",
          fr: "Président",
          de: "Vorsitzender",
          it: "Presidente",
          es: "Presidente",
          ru: "Председатель",
          zh: "主席",
          ar: "رئيس",
          ko: "회장"
        },
        sentence: {
          en: "Company chairman.",
          fa: "رئیس شرکت.",
          fr: "Président de la société.",
          de: "Vorsitzender.",
          it: "Presidente della società.",
          es: "Presidente de la compañía.",
          ru: "Председатель компании.",
          zh: "公司董事长。",
          ar: "رئيس الشركة.",
          ko: "회사 회장."
        }
      },
      {
        id: "chamber",
        word: {
          en: "Chamber",
          fa: "تالا/اتاق بازرگانی",
          fr: "Chambre",
          de: "Kammer",
          it: "Camera",
          es: "Cámara",
          ru: "Палата",
          zh: "室",
          ar: "غرفة",
          ko: "회의실"
        },
        sentence: {
          en: "Chamber of commerce.",
          fa: "اتاق بازرگانی.",
          fr: "Chambre de commerce.",
          de: "Handelskammer.",
          it: "Camera di commercio.",
          es: "Cámara de comercio.",
          ru: "Торговая палата.",
          zh: "商会。",
          ar: "غرفة التجارة.",
          ko: "상공 회의소."
        }
      },
      {
        id: "characteristic",
        word: {
          en: "Characteristic",
          fa: "مشخصه",
          fr: "Caractéristique",
          de: "Eigenschaft",
          it: "Caratteristica",
          es: "Característica",
          ru: "Характеристика",
          zh: "特征",
          ar: "خاصية",
          ko: "특징"
        },
        sentence: {
          en: "Defining characteristic.",
          fa: "ویژگی تعیین کننده.",
          fr: "Caractéristique déterminante.",
          de: "Charakteristisches Merkmal.",
          it: "Caratteristica distintiva.",
          es: "Característica definitoria.",
          ru: "Определяющая характеристика.",
          zh: "Defining character.",
          ar: "سمة مميزة.",
          ko: "결정적인 특징."
        }
      },
      {
        id: "charity",
        word: {
          en: "Charity",
          fa: "خیریه",
          fr: "Charité",
          de: "Wohltätigkeit",
          it: "Beneficenza",
          es: "Caridad",
          ru: "Благотворительность",
          zh: "慈善",
          ar: "صدقة/خيرية",
          ko: "자선"
        },
        sentence: {
          en: "Give to charity.",
          fa: "به خیریه کمک کن.",
          fr: "Donner à des œuvres caritatives.",
          de: "Für wohltätige Zwecke spenden.",
          it: "Dai in beneficenza.",
          es: "Da a la caridad.",
          ru: "Пожертвуй на благотворительность.",
          zh: "捐给慈善机构。",
          ar: "تصدق.",
          ko: "자선 단체에 기부하세요."
        }
      },
      {
        id: "chart",
        word: {
          en: "Chart",
          fa: "نمودار",
          fr: "Graphique",
          de: "Diagramm",
          it: "Grafico",
          es: "Gráfico",
          ru: "Диаграмма",
          zh: "图表",
          ar: "رسم بياني",
          ko: "차트"
        },
        sentence: {
          en: "Pie chart.",
          fa: "نمودار دایره‌ای.",
          fr: "Diagramme circulaire.",
          de: "Tortendiagramm.",
          it: "Grafico a torta.",
          es: "Gráfico circular.",
          ru: "Круговая диаграмма.",
          zh: "饼图。",
          ar: "رسم بياني دائري.",
          ko: "파이 차트."
        }
      },
      {
        id: "chemical",
        word: {
          en: "Chemical",
          fa: "شیمیایی",
          fr: "Chimique",
          de: "Chemisch",
          it: "Chimico",
          es: "Químico",
          ru: "Химический",
          zh: "化学",
          ar: "كيميائي",
          ko: "화학의"
        },
        sentence: {
          en: "Chemical reaction.",
          fa: "واکنش شیمیایی.",
          fr: "Réaction chimique.",
          de: "Chemische Reaktion.",
          it: "Reazione chimica.",
          es: "Reacción química.",
          ru: "Химическая реакция.",
          zh: "化学反应。",
          ar: "تفاعل كيميائي.",
          ko: "화학 반응."
        }
      },
      {
        id: "circuit",
        word: {
          en: "Circuit",
          fa: "مدار",
          fr: "Circuit",
          de: "Kreislauf/Schaltung",
          it: "Circuito",
          es: "Circuito",
          ru: "Цепь/Схема",
          zh: "电路",
          ar: "دائرة",
          ko: "회로"
        },
        sentence: {
          en: "Electrical circuit.",
          fa: "مدار الکتریکی.",
          fr: "Circuit électrique.",
          de: "Stromkreis.",
          it: "Circuito elettrico.",
          es: "Circuito eléctrico.",
          ru: "Электрическая цепь.",
          zh: "电路。",
          ar: "دائرة كهربائية.",
          ko: "전기 회로."
        }
      },
      {
        id: "circumstance",
        word: {
          en: "Circumstance",
          fa: "شرایط/اوضاع",
          fr: "Circonstance",
          de: "Umstand",
          it: "Circolstanza",
          es: "Circunstancia",
          ru: "Обстоятельство",
          zh: "情况",
          ar: "ظرف",
          ko: "상황"
        },
        sentence: {
          en: "Under no circumstance.",
          fa: "تحت هیچ شرایطی.",
          fr: "En aucune circonstance.",
          de: "Unter keinen Umständen.",
          it: "In nessuna circostanza.",
          es: "Bajo ninguna circunstancia.",
          ru: "Ни при каких обстоятельствах.",
          zh: "决不。",
          ar: "تحت أي ظرف.",
          ko: "어떤 상황에서도."
        }
      },
      {
        id: "cite",
        word: {
          en: "Cite",
          fa: "نقل قول کردن/ارجاع دادن",
          fr: "Citer",
          de: "Zitieren",
          it: "Citare",
          es: "Citar",
          ru: "Цитировать",
          zh: "引用",
          ar: "استشهد",
          ko: "인용하다"
        },
        sentence: {
          en: "Cite sources.",
          fa: "ذکر منابع.",
          fr: "Citer des sources.",
          de: "Quellen zitieren.",
          it: "Citare le fonti.",
          es: "Citar fuentes.",
          ru: "Цитировать источники.",
          zh: "引用来源。",
          ar: "استشهد بالمصادر.",
          ko: "출처를 인용하세요."
        }
      },
      {
        id: "citizenship",
        word: {
          en: "Citizenship",
          fa: "شهروندی",
          fr: "Citoyenneté",
          de: "Staatsbürgerschaft",
          it: "Cittadinanza",
          es: "Ciudadanía",
          ru: "Гражданство",
          zh: "公民身份",
          ar: "مواطنة",
          ko: "시민권"
        },
        sentence: {
          en: "Apply for citizenship.",
          fa: "درخواست شهروندی.",
          fr: "Demander la citoyenneté.",
          de: "Staatsbürgerschaft beantragen.",
          it: "Richiedere la cittadinanza.",
          es: "Solicitar la ciudadanía.",
          ru: "Подать заявление на гражданство.",
          zh: "申请公民身份。",
          ar: "تقدم بطلب للحصول على الجنسية.",
          ko: "시민권을 신청하세요."
        }
      },
      {
        id: "civil",
        word: {
          en: "Civil",
          fa: "مدنی",
          fr: "Civil",
          de: "Zivil",
          it: "Civile",
          es: "Civil",
          ru: "Гражданский",
          zh: "民事",
          ar: "مدني",
          ko: "시민의"
        },
        sentence: {
          en: "Civil rights.",
          fa: "حقوق مدنی.",
          fr: "Droits civils.",
          de: "Bürgerrechte.",
          it: "Diritti civili.",
          es: "Derechos civiles.",
          ru: "Гражданские права.",
          zh: "公民权利。",
          ar: "حقوق مدنية.",
          ko: "시민권."
        }
      },
      {
        id: "claim",
        word: {
          en: "Claim",
          fa: "ادعا",
          fr: "Réclamation",
          de: "Anspruch",
          it: "Reclamo/Pretesa",
          es: "Reclamación",
          ru: "Претензия",
          zh: "索赔/声称",
          ar: "مطالبة",
          ko: "주장하다"
        },
        sentence: {
          en: "Make a claim.",
          fa: "ادعا کردن.",
          fr: "Faire une réclamation.",
          de: "Anspruch geltend machen.",
          it: "Fare un reclamo.",
          es: "Hacer un reclamo.",
          ru: "Подать претензию.",
          zh: "提出索赔。",
          ar: "قدم مطالبة.",
          ko: "청구하다."
        }
      },
      {
        id: "classic",
        word: {
          en: "Classic",
          fa: "کلاسیک",
          fr: "Classique",
          de: "Klassisch",
          it: "Classico",
          es: "Clásico",
          ru: "Классический",
          zh: "经典",
          ar: "كلاسيكي",
          ko: "고전적인"
        },
        sentence: {
          en: "Classic movie.",
          fa: "فیلم کلاسیک.",
          fr: "Film classique.",
          de: "Klassischer Film.",
          it: "Film classico.",
          es: "Película clásica.",
          ru: "Классический фильм.",
          zh: "经典电影。",
          ar: "فيلم كلاسيكي.",
          ko: "고전 영화."
        }
      },
      {
        id: "clause",
        word: {
          en: "Clause",
          fa: "بند (قرارداد/دستور زبان)",
          fr: "Clause",
          de: "Klausel",
          it: "Clausola",
          es: "Cláusula",
          ru: "Пункт",
          zh: "条款",
          ar: "بند",
          ko: "조항"
        },
        sentence: {
          en: "Contract clause.",
          fa: "بند قرارداد.",
          fr: "Clause contractuelle.",
          de: "Vertragsklausel.",
          it: "Clausola contrattuale.",
          es: "Cláusula contractual.",
          ru: "Пункт договора.",
          zh: "合同条款。",
          ar: "شرط العقد.",
          ko: "계약 조항."
        }
      },
      {
        id: "clue",
        word: {
          en: "Clue",
          fa: "سرنخ",
          fr: "Indice",
          de: "Hinweis",
          it: "Indizio",
          es: "Pista",
          ru: "Подсказка",
          zh: "线索",
          ar: "دليل",
          ko: "단서"
        },
        sentence: {
          en: "Give me a clue.",
          fa: "یک سرنخ به من بده.",
          fr: "Donne-moi un indice.",
          de: "Gib mir einen Hinweis.",
          it: "Dammi un indizio.",
          es: "Dame una pista.",
          ru: "Дай мне подсказку.",
          zh: "给我一条线索。",
          ar: "أعطني دليلاً.",
          ko: "단서를 주세요."
        }
      },
      {
        id: "coach",
        word: {
          en: "Coach",
          fa: "مربی",
          fr: "Entraîneur",
          de: "Trainer",
          it: "Allenatore",
          es: "Entrenador",
          ru: "Тренер",
          zh: "教练",
          ar: "مدرب",
          ko: "코치"
        },
        sentence: {
          en: "Football coach.",
          fa: "مربی فوتبال.",
          fr: "Entraîneur de football.",
          de: "Fußballtrainer.",
          it: "Allenatore di calcio.",
          es: "Entrenador de fútbol.",
          ru: "Футбольный тренер.",
          zh: "足球教练。",
          ar: "مدرب كرة قدم.",
          ko: "축구 코치."
        }
      },
      {
        id: "code",
        word: {
          en: "Code",
          fa: "کد/رمز",
          fr: "Code",
          de: "Code",
          it: "Codice",
          es: "Código",
          ru: "Код",
          zh: "代码",
          ar: "رمز",
          ko: "코드"
        },
        sentence: {
          en: "Write code.",
          fa: "کد بنویس.",
          fr: "Écrire du code.",
          de: "Code schreiben.",
          it: "Scrivi codice.",
          es: "Escribe código.",
          ru: "Пиши код.",
          zh: "写代码。",
          ar: "اكتب كود.",
          ko: "코드를 작성하세요."
        }
      },
      {
        id: "cognitive",
        word: {
          en: "Cognitive",
          fa: "شناختی",
          fr: "Cognitif",
          de: "Kognitiv",
          it: "Cognitivo",
          es: "Cognitivo",
          ru: "Когнитивный",
          zh: "认知",
          ar: "معرفي",
          ko: "인지의"
        },
        sentence: {
          en: "Cognitive skills.",
          fa: "مهارت‌های شناختی.",
          fr: "Compétences cognitives.",
          de: "Kognitive Fähigkeiten.",
          it: "Abilità cognitive.",
          es: "Habilidades cognitivas.",
          ru: "Когнитивные навыки.",
          zh: "认知技能。",
          ar: "مهارات معرفية.",
          ko: "인지 능력."
        }
      },
      {
        id: "coincidence",
        word: {
          en: "Coincidence",
          fa: "تصادف/همزمانی",
          fr: "Coïncidence",
          de: "Zufall",
          it: "Coincidenza",
          es: "Coincidencia",
          ru: "Совпадение",
          zh: "巧合",
          ar: "صدفة",
          ko: "우연"
        },
        sentence: {
          en: "What a coincidence!",
          fa: "چه تصادفی!",
          fr: "Quelle coïncidence !",
          de: "Was für ein Zufall!",
          it: "Che coincidenza!",
          es: "¡Qué coincidencia!",
          ru: "Какое совпадение!",
          zh: "真巧！",
          ar: "يا لها من صدفة!",
          ko: "정말 우연이네요!"
        }
      },
      {
        id: "collaboration",
        word: {
          en: "Collaboration",
          fa: "همکاری",
          fr: "Collaboration",
          de: "Zusammenarbeit",
          it: "Collaborazione",
          es: "Colaboración",
          ru: "Сотрудничество",
          zh: "合作",
          ar: "تعاون",
          ko: "협력"
        },
        sentence: {
          en: "Close collaboration.",
          fa: "همکاری نزدیک.",
          fr: "Collaboration étroite.",
          de: "Enge Zusammenarbeit.",
          it: "Stretta collaborazione.",
          es: "Estrecha colaboración.",
          ru: "Тесное сотрудничество.",
          zh: "密切合作。",
          ar: "تعاون وثيق.",
          ko: "긴밀한 협력."
        }
      },
      {
        id: "colleague",
        word: {
          en: "Colleague",
          fa: "همکار",
          fr: "Collègue",
          de: "Kollege",
          it: "Collega",
          es: "Colega",
          ru: "Коллега",
          zh: "同事",
          ar: "زميل",
          ko: "동료"
        },
        sentence: {
          en: "Work colleague.",
          fa: "همکار.",
          fr: "Collègue de travail.",
          de: "Arbeitskollege.",
          it: "Collega di lavoro.",
          es: "Colega de trabajo.",
          ru: "Коллега по работе.",
          zh: "同事。",
          ar: "زميل عمل.",
          ko: "직장 동료."
        }
      },
      {
        id: "combination",
        word: {
          en: "Combination",
          fa: "ترکیب",
          fr: "Combinaison",
          de: "Kombination",
          it: "Combinazione",
          es: "Combinación",
          ru: "Комбинация",
          zh: "组合",
          ar: "مزيج",
          ko: "조합"
        },
        sentence: {
          en: "Perfect combination.",
          fa: "ترکیب کامل.",
          fr: "Combinaison parfaite.",
          de: "Perfekte Kombination.",
          it: "Combinazione perfetta.",
          es: "Combinación perfecta.",
          ru: "Идеальное сочетание.",
          zh: "完美的结合。",
          ar: "مزيج مثالي.",
          ko: "완벽한 조합."
        }
      },
      {
        id: "comfort",
        word: {
          en: "Comfort",
          fa: "راحتی/آسایش",
          fr: "Confort",
          de: "Komfort",
          it: "Comfort",
          es: "Comodidad",
          ru: "Комфорт",
          zh: "舒适",
          ar: "راحة",
          ko: "편안함"
        },
        sentence: {
          en: "Comfort zone.",
          fa: "منطقه امن.",
          fr: "Zone de confort.",
          de: "Komfortzone.",
          it: "Zona di comfort.",
          es: "Zona de confort.",
          ru: "Зона комфорта.",
          zh: "舒适区。",
          ar: "منطقة الراحة.",
          ko: "안전 지대."
        }
      },
      {
        id: "command",
        word: {
          en: "Command",
          fa: "فرمان/تسلط",
          fr: "Commande",
          de: "Befehl",
          it: "Comando",
          es: "Comando",
          ru: "Команда",
          zh: "命令",
          ar: "أمر",
          ko: "명령"
        },
        sentence: {
          en: "Voice command.",
          fa: "فرمان صوتی.",
          fr: "Commande vocale.",
          de: "Sprachbefehl.",
          it: "Comando vocale.",
          es: "Comando de voz.",
          ru: "Голосовая команда.",
          zh: "语音指令。",
          ar: "أمر صوتي.",
          ko: "음성 명령."
        }
      },
      {
        id: "comment",
        word: {
          en: "Comment",
          fa: "تفسیر/نظر",
          fr: "Commentaire",
          de: "Kommentar",
          it: "Commento",
          es: "Comentario",
          ru: "Комментарий",
          zh: "评论",
          ar: "تعليق",
          ko: "논평"
        },
        sentence: {
          en: "No comment.",
          fa: "بدون نظر.",
          fr: "Sans commentaire.",
          de: "Kein Kommentar.",
          it: "Nessun commento.",
          es: "Sin comentarios.",
          ru: "Без комментариев.",
          zh: "无可奉告。",
          ar: "لا تعليق.",
          ko: "노코멘트."
        }
      },
      {
        id: "commercial",
        word: {
          en: "Commercial",
          fa: "تجاری",
          fr: "Commercial",
          de: "Kommerziell",
          it: "Commerciale",
          es: "Comercial",
          ru: "Коммерческий",
          zh: "商业",
          ar: "تجاري",
          ko: "상업적인"
        },
        sentence: {
          en: "TV commercial.",
          fa: "تبلیغ تلویزیونی.",
          fr: "Publicité télévisée.",
          de: "Fernsehwerbung.",
          it: "Pubblicità televisiva.",
          es: "Comercial de televisión.",
          ru: "Телевизионная реклама.",
          zh: "电视广告。",
          ar: "إعلان تلفزيوني.",
          ko: "TV 광고."
        }
      },
      {
        id: "commission",
        word: {
          en: "Commission",
          fa: "کمیسیون/حق‌العمل",
          fr: "Commission",
          de: "Kommission",
          it: "Commissione",
          es: "Comisión",
          ru: "Комиссия",
          zh: "委员会/佣金",
          ar: "لجنة/عمولة",
          ko: "위원회"
        },
        sentence: {
          en: "Earn commission.",
          fa: "کمیسیون دریافت کن.",
          fr: "Gagner une commission.",
          de: "Provision verdienen.",
          it: "Guadagnare commissioni.",
          es: "Ganar comisión.",
          ru: "Зарабатывать комиссионные.",
          zh: "赚取佣金。",
          ar: "اكسب عمولة.",
          ko: "수수료를 받으세요."
        }
      },
      {
        id: "commit",
        word: {
          en: "Commit",
          fa: "مرتکب شدن/تعهد دادن",
          fr: "Commettre/S'engager",
          de: "Begehen/Verpflichten",
          it: "Commettere/Impegnarsi",
          es: "Cometer/Comprometerse",
          ru: "Совершать",
          zh: "承诺/犯",
          ar: "ارتكب/التزم",
          ko: "저지르다"
        },
        sentence: {
          en: "Commit a crime.",
          fa: "مرتکب جرم شو.",
          fr: "Commettre un crime.",
          de: "Ein Verbrechen begehen.",
          it: "Commettere un crimine.",
          es: "Cometer un crimen.",
          ru: "Совершить преступление.",
          zh: "犯罪。",
          ar: "ارتكب جريمة.",
          ko: "범죄를 저지르다."
        }
      },
      {
        id: "commitment",
        word: {
          en: "Commitment",
          fa: "تعهد",
          fr: "Engagement",
          de: "Verpflichtung",
          it: "Impegno",
          es: "Compromiso",
          ru: "Обязательство",
          zh: "承诺",
          ar: "التزام",
          ko: "헌신"
        },
        sentence: {
          en: "Make a commitment.",
          fa: "تعهد بده.",
          fr: "Prendre un engagement.",
          de: "Eine Verpflichtung eingehen.",
          it: "Prendere un impegno.",
          es: "Hacer un compromiso.",
          ru: "Взять на себя обязательство.",
          zh: "做出承诺。",
          ar: "قطع التزاما.",
          ko: "약속하세요."
        }
      },
      {
        id: "committee",
        word: {
          en: "Committee",
          fa: "کمیته",
          fr: "Comité",
          de: "Ausschuss",
          it: "Comitato",
          es: "Comité",
          ru: "Комитет",
          zh: "委员会",
          ar: "لجنة",
          ko: "위원회"
        },
        sentence: {
          en: "Steering committee.",
          fa: "کمیته راهبری.",
          fr: "Comité de pilotage.",
          de: "Lenkungsausschuss.",
          it: "Comitato direttivo.",
          es: "Comité directivo.",
          ru: "Руководящий комитет.",
          zh: "指导委员会。",
          ar: "لجنة التوجيه.",
          ko: "운영 위원회."
        }
      },
      {
        id: "common",
        word: {
          en: "Common",
          fa: "مشترک/رایج",
          fr: "Commun",
          de: "Gemeinsam",
          it: "Comune",
          es: "Común",
          ru: "Общий",
          zh: "共同",
          ar: "شائع",
          ko: "공통의"
        },
        sentence: {
          en: "Common sense.",
          fa: "عقل سلیم.",
          fr: "Bon sens.",
          de: "Gesunder Menschenverstand.",
          it: "Buon senso.",
          es: "Sentido común.",
          ru: "Здравый смысл.",
          zh: "常识。",
          ar: "الحس السليم.",
          ko: "상식."
        }
      },
      {
        id: "comparative",
        word: {
          en: "Comparative",
          fa: "مقایسه‌ای",
          fr: "Comparatif",
          de: "Vergleichend",
          it: "Comparativo",
          es: "Comparativo",
          ru: "Сравнительный",
          zh: "比较",
          ar: "مقارن",
          ko: "비교의"
        },
        sentence: {
          en: "Comparative study.",
          fa: "مطالعه تطبیقی.",
          fr: "Étude comparative.",
          de: "Vergleichende Studie.",
          it: "Studio comparativo.",
          es: "Estudio comparativo.",
          ru: "Сравнительное исследование.",
          zh: "比较研究。",
          ar: "دراسة مقارنة.",
          ko: "비교 연구."
        }
      },
      {
        id: "comparison",
        word: {
          en: "Comparison",
          fa: "مقایسه",
          fr: "Comparaison",
          de: "Vergleich",
          it: "Confronto",
          es: "Comparación",
          ru: "Сравнение",
          zh: "比较",
          ar: "مقارنة",
          ko: "비교"
        },
        sentence: {
          en: "Make a comparison.",
          fa: "مقایسه کن.",
          fr: "Faire une comparaison.",
          de: "Einen Vergleich anstellen.",
          it: "Fai un confronto.",
          es: "Haz una comparación.",
          ru: "Сделай сравнение.",
          zh: "进行比较。",
          ar: "اعقد مقارنة.",
          ko: "비교해 보세요."
        }
      },
      {
        id: "compete",
        word: {
          en: "Compete",
          fa: "رقابت کردن",
          fr: "Concurrencer",
          de: "Konkurrieren",
          it: "Competere",
          es: "Competir",
          ru: "Соревноваться",
          zh: "竞争",
          ar: "نافس",
          ko: "경쟁하다"
        },
        sentence: {
          en: "Compete with others.",
          fa: "با دیگران رقابت کن.",
          fr: "Rivaliser avec les autres.",
          de: "Mit anderen konkurrieren.",
          it: "Competere con gli altri.",
          es: "Competir con otros.",
          ru: "Соревноваться с другими.",
          zh: "与他人竞争。",
          ar: "تنافس مع الآخرين.",
          ko: "다른 사람들과 경쟁하세요."
        }
      },
      {
        id: "complaint",
        word: {
          en: "Complaint",
          fa: "شکایت",
          fr: "Plainte",
          de: "Beschwerde",
          it: "Reclamo",
          es: "Queja",
          ru: "Жалоба",
          zh: "投诉",
          ar: "شكوى",
          ko: "불만"
        },
        sentence: {
          en: "File a complaint.",
          fa: "شکایت ثبت کن.",
          fr: "Déposer une plainte.",
          de: "Beschwerde einreichen.",
          it: "Sporgere reclamo.",
          es: "Presentar una queja.",
          ru: "Подать жалобу.",
          zh: "投诉。",
          ar: "قدم شكوى.",
          ko: "불만을 제기하세요."
        }
      },
      {
        id: "complex",
        word: {
          en: "Complex",
          fa: "پیچیده",
          fr: "Complexe",
          de: "Komplex",
          it: "Complesso",
          es: "Complejo",
          ru: "Сложный",
          zh: "复杂",
          ar: "معقد",
          ko: "복잡한"
        },
        sentence: {
          en: "Complex problem.",
          fa: "مشکل پیچیده.",
          fr: "Problème complexe.",
          de: "Komplexes Problem.",
          it: "Problema complesso.",
          es: "Problema complejo.",
          ru: "Сложная проблема.",
          zh: "复杂的问题。",
          ar: "مشكلة معقدة.",
          ko: "복잡한 문제."
        }
      },
      {
        id: "component",
        word: {
          en: "Component",
          fa: "مؤلفه/اجزاء",
          fr: "Composant",
          de: "Komponente",
          it: "Componente",
          es: "Componente",
          ru: "Компонент",
          zh: "组件",
          ar: "مكون",
          ko: "구성 요소"
        },
        sentence: {
          en: "Key component.",
          fa: "اجزای کلیدی.",
          fr: "Composant clé.",
          de: "Schlüsselkomponente.",
          it: "Componente chiave.",
          es: "Componente clave.",
          ru: "Ключевой компонент.",
          zh: "关键组件。",
          ar: "مكون رئيسي.",
          ko: "핵심 구성 요소."
        }
      },
      {
        id: "compose",
        word: {
          en: "Compose",
          fa: "ساختن/آهنگسازی",
          fr: "Composer",
          de: "Komponieren",
          it: "Comporre",
          es: "Componer",
          ru: "Составлять",
          zh: "组成",
          ar: "ألف",
          ko: "구성하다"
        },
        sentence: {
          en: "Compose music.",
          fa: "موسیقی بساز.",
          fr: "Composer de la musique.",
          de: "Musik komponieren.",
          it: "Comporre musica.",
          es: "Componer música.",
          ru: "Сочинять музыку.",
          zh: "谱曲。",
          ar: "ألف موسيقى.",
          ko: "음악을 작곡하세요."
        }
      },
      {
        id: "comprehensive",
        word: {
          en: "Comprehensive",
          fa: "جامع",
          fr: "Complet",
          de: "Umfassend",
          it: "Completo/Esauriente",
          es: "Integral",
          ru: "Всесторонний",
          zh: "综合",
          ar: "شامل",
          ko: "포괄적인"
        },
        sentence: {
          en: "Comprehensive guide.",
          fa: "راهنمای جامع.",
          fr: "Guide complet.",
          de: "Umfassender Leitfaden.",
          it: "Guida completa.",
          es: "Guía completa.",
          ru: "Всеобъемлющее руководство.",
          zh: "综合指南。",
          ar: "دليل شامل.",
          ko: "포괄적인 가이드."
        }
      },
      {
        id: "comprise",
        word: {
          en: "Comprise",
          fa: "دربرگرفتن/شامل شدن",
          fr: "Comprendre",
          de: "Umfassen",
          it: "Comprendere",
          es: "Comprender",
          ru: "Включать",
          zh: "包含",
          ar: "شمل",
          ko: "포함하다"
        },
        sentence: {
          en: "Comprise of.",
          fa: "شامل شدن.",
          fr: "Comprendre.",
          de: "Umfassen.",
          it: "Comprendere.",
          es: "Comprender.",
          ru: "Включать в себя.",
          zh: "包括。",
          ar: "تتألف من.",
          ko: "구성되다."
        }
      },
      {
        id: "compromise",
        word: {
          en: "Compromise",
          fa: "مصالحه/سازش",
          fr: "Compromis",
          de: "Kompromiss",
          it: "Compromesso",
          es: "Compromiso",
          ru: "Компромисс",
          zh: "妥协",
          ar: "حل وسط",
          ko: "타협"
        },
        sentence: {
          en: "Reach a compromise.",
          fa: "به سازش برس.",
          fr: "Parvenir à un compromis.",
          de: "Einen Kompromiss finden.",
          it: "Raggiungere un compromesso.",
          es: "Llegar a un compromiso.",
          ru: "Достичь компромисса.",
          zh: "达成妥协。",
          ar: "توصل إلى حل وسط.",
          ko: "타협하세요."
        }
      },
      {
        id: "compute",
        word: {
          en: "Compute",
          fa: "محاسبه کردن (رایانه‌ای)",
          fr: "Calculer",
          de: "Berechnen",
          it: "Calcolare",
          es: "Computar",
          ru: "Вычислять",
          zh: "计算",
          ar: "حسب",
          ko: "계산하다"
        },
        sentence: {
          en: "Compute the result.",
          fa: "نتیجه را محاسبه کن.",
          fr: "Calculer le résultat.",
          de: "Ergebnis berechnen.",
          it: "Calcola il risultato.",
          es: "Calcular el resultado.",
          ru: "Вычислить результат.",
          zh: "计算结果。",
          ar: "احسب النتيجة.",
          ko: "결과를 계산하세요."
        }
      },
      {
        id: "concentrate",
        word: {
          en: "Concentrate",
          fa: "تمرکز کردن",
          fr: "Se concentrer",
          de: "Konzentrieren",
          it: "Concentrarsi",
          es: "Concentrarse",
          ru: "Концентрироваться",
          zh: "集中",
          ar: "ركز",
          ko: "집중하다"
        },
        sentence: {
          en: "Concentrate on work.",
          fa: "روی کار تمرکز کن.",
          fr: "Se concentrer sur le travail.",
          de: "Konzentriere dich auf die Arbeit.",
          it: "Concentrati sul lavoro.",
          es: "Concéntrate en el trabajo.",
          ru: "Сосредоточься на работе.",
          zh: "专注于工作。",
          ar: "ركز على العمل.",
          ko: "일에 집중하세요."
        }
      },
      {
        id: "concern",
        word: {
          en: "Concern",
          fa: "نگرانی/دغدغه",
          fr: "Préoccupation",
          de: "Sorge",
          it: "Preoccupazione",
          es: "Preocupación",
          ru: "Беспокойство",
          zh: "关心",
          ar: "قلق/اهتمام",
          ko: "우려"
        },
        sentence: {
          en: "Cause for concern.",
          fa: "جای نگرانی.",
          fr: "Sujet de préoccupation.",
          de: "Grund zur Sorge.",
          it: "Motivo di preoccupazione.",
          es: "Motivo de preocupación.",
          ru: "Повод для беспокойства.",
          zh: "令人担忧的原因。",
          ar: "سبب للقلق.",
          ko: "우려의 원인."
        }
      },
      {
        id: "conclude",
        word: {
          en: "Conclude",
          fa: "نتیجه‌گیری کردن",
          fr: "Conclure",
          de: "Schlussfolgern",
          it: "Concludere",
          es: "Concluir",
          ru: "Делать вывод",
          zh: "总结",
          ar: "استنتج",
          ko: "결론짓다"
        },
        sentence: {
          en: "Conclude the meeting.",
          fa: "جلسه را خاتمه بده.",
          fr: "Conclure la réunion.",
          de: "Die Sitzung beenden.",
          it: "Concludere la riunione.",
          es: "Concluir la reunión.",
          ru: "Завершить встречу.",
          zh: "结束会议。",
          ar: "اختتم الاجتماع.",
          ko: "회의를 마치세요."
        }
      },
      {
        id: "conclusion",
        word: {
          en: "Conclusion",
          fa: "نتیجه‌گیری",
          fr: "Conclusion",
          de: "Fazit",
          it: "Conclusione",
          es: "Conclusión",
          ru: "Заключение",
          zh: "结论",
          ar: "خاتمة",
          ko: "결론"
        },
        sentence: {
          en: "In conclusion.",
          fa: "در نتیجه.",
          fr: "En conclusion.",
          de: "Abschließend.",
          it: "In conclusione.",
          es: "En conclusión.",
          ru: "В заключение.",
          zh: "总之。",
          ar: "في الختام.",
          ko: "결론적으로."
        }
      },
      {
        id: "concrete",
        word: {
          en: "Concrete",
          fa: "بتن/ملموس",
          fr: "Béton/Concret",
          de: "Beton/Konkret",
          it: "Cemento/Concreto",
          es: "Hormigón/Concreto",
          ru: "Бетон/Конкретный",
          zh: "混凝土/具体",
          ar: "خرسانة/ملموس",
          ko: "구체적인"
        },
        sentence: {
          en: "Concrete evidence.",
          fa: "شواهد ملموس.",
          fr: "Preuve concrète.",
          de: "Konkreter Beweis.",
          it: "Prova concreta.",
          es: "Evidencia concreta.",
          ru: "Конкретные доказательства.",
          zh: "确凿的证据。",
          ar: "أدلة ملموسة.",
          ko: "구체적인 증거."
        }
      },
      {
        id: "conduct",
        word: {
          en: "Conduct",
          fa: "هدایت کردن/اجرا کردن",
          fr: "Conduire",
          de: "Durchführen",
          it: "Condurre",
          es: "Conducta/Conducir",
          ru: "Проводить",
          zh: "行为/指挥",
          ar: "أجرى/سلوك",
          ko: "행동"
        },
        sentence: {
          en: "Code of conduct.",
          fa: "آیین‌نامه رفتار.",
          fr: "Code de conduite.",
          de: "Verhaltenskodex.",
          it: "Codice di condotta.",
          es: "Código de conducta.",
          ru: "Кодекс поведения.",
          zh: "行为准则。",
          ar: "قواعد السلوك.",
          ko: "행동 강령."
        }
      },
      {
        id: "conference",
        word: {
          en: "Conference",
          fa: "کنفرانس",
          fr: "Conférence",
          de: "Konferenz",
          it: "Conferenza",
          es: "Conferencia",
          ru: "Конференция",
          zh: "会议",
          ar: "مؤتمر",
          ko: "회의"
        },
        sentence: {
          en: "Press conference.",
          fa: "کنفرانس مطبوعاتی.",
          fr: "Conférence de presse.",
          de: "Pressekonferenz.",
          it: "Conferenza stampa.",
          es: "Conferencia de prensa.",
          ru: "Пресс-конференция.",
          zh: "新闻发布会。",
          ar: "مؤتمر صحفي.",
          ko: "기자 회견."
        }
      },
      {
        id: "confidence",
        word: {
          en: "Confidence",
          fa: "اعتماد به نفس/اطمینان",
          fr: "Confiance",
          de: "Zuversicht",
          it: "Fiducia",
          es: "Confianza",
          ru: "Уверенность",
          zh: "信心",
          ar: "ثقة",
          ko: "자신감"
        },
        sentence: {
          en: "Self confidence.",
          fa: "اعتماد به نفس.",
          fr: "Confiance en soi.",
          de: "Selbstvertrauen.",
          it: "Fiducia in se stessi.",
          es: "Confianza en sí mismo.",
          ru: "Уверенность в себе.",
          zh: "自信。",
          ar: "ثقة بالنفس.",
          ko: "자신감."
        }
      },
      {
        id: "confident",
        word: {
          en: "Confident",
          fa: "مطمئن",
          fr: "Confiant",
          de: "Zuversichtlich",
          it: "Fiducioso",
          es: "Seguro",
          ru: "Уверенный",
          zh: "自信",
          ar: "واثق",
          ko: "자신감 있는"
        },
        sentence: {
          en: "Be confident.",
          fa: "با اعتماد به نفس باش.",
          fr: "Sois confiant.",
          de: "Sei zuversichtlich.",
          it: "Sii fiducioso.",
          es: "Ten confianza.",
          ru: "Будь уверен.",
          zh: "要有自信。",
          ar: "كن واثتقا.",
          ko: "자신감을 가지세요."
        }
      },
      {
        id: "confine",
        word: {
          en: "Confine",
          fa: "محدود کردن/حبس کردن",
          fr: "Confiner",
          de: "Begrenzen",
          it: "Confinare",
          es: "Confinar",
          ru: "Ограничивать",
          zh: "限制",
          ar: "حصر",
          ko: "제한하다"
        },
        sentence: {
          en: "Confine to bed.",
          fa: "بستری شدن.",
          fr: "Rester au lit.",
          de: "Ans Bett gefesselt sein.",
          it: "Confinare a letto.",
          es: "Confinar a la cama.",
          ru: "Приковать к постели.",
          zh: "卧床不起。",
          ar: "الزم الفراش.",
          ko: "침상에 눕다."
        }
      },
      {
        id: "confirm",
        word: {
          en: "Confirm",
          fa: "تایید کردن",
          fr: "Confirmer",
          de: "Bestätigen",
          it: "Confermare",
          es: "Confirmar",
          ru: "Подтверждать",
          zh: "确认",
          ar: "أكد",
          ko: "확인하다"
        },
        sentence: {
          en: "Confirm your order.",
          fa: "سفارشت را تایید کن.",
          fr: "Confirmez votre commande.",
          de: "Bestätigen Sie Ihre Bestellung.",
          it: "Conferma il tuo ordine.",
          es: "Confirma tu pedido.",
          ru: "Подтвердите ваш заказ.",
          zh: "确认您的订单。",
          ar: "أكد طلبك.",
          ko: "주문을 확인하세요."
        }
      },
      {
        id: "conflict",
        word: {
          en: "Conflict",
          fa: "تضاد/درگیری",
          fr: "Conflit",
          de: "Konflikt",
          it: "Conflitto",
          es: "Conflicto",
          ru: "Конфликт",
          zh: "冲突",
          ar: "صراع",
          ko: "갈등"
        },
        sentence: {
          en: "Resolve conflict.",
          fa: "حل تعارض.",
          fr: "Résoudre le conflit.",
          de: "Konflikt lösen.",
          it: "Risolvere il conflitto.",
          es: "Resolver el conflicto.",
          ru: "Разрешить конфликт.",
          zh: "解决冲突。",
          ar: "حل النزاع.",
          ko: "갈등을 해결하세요."
        }
      },
      {
        id: "conform",
        word: {
          en: "Conform",
          fa: "تطبیق دادن/پیروی کردن",
          fr: "Se conformer",
          de: "Entsprechen",
          it: "Conformarsi",
          es: "Conformarse",
          ru: "Соответствовать",
          zh: "符合",
          ar: "تطابق",
          ko: "따르다"
        },
        sentence: {
          en: "Conform to rules.",
          fa: "پیروی از قوانین.",
          fr: "Se conformer aux règles.",
          de: "Sich an Regeln halten.",
          it: "Conformarsi alle regole.",
          es: "Ajustarse a las reglas.",
          ru: "Соблюдать правила.",
          zh: "遵守规则。",
          ar: "الامتثال للقواعد.",
          ko: "규칙을 따르세요."
        }
      },
      {
        id: "confuse",
        word: {
          en: "Confuse",
          fa: "گیج کردن",
          fr: "Confondre",
          de: "Verwirren",
          it: "Confondere",
          es: "Confundir",
          ru: "Сбивать с толку",
          zh: "混淆",
          ar: "أربك",
          ko: "혼란스럽게 하다"
        },
        sentence: {
          en: "Don't confuse me.",
          fa: "مرا گیج نکن.",
          fr: "Ne m'embrouille pas.",
          de: "Verwirr mich nicht.",
          it: "Non confondermi.",
          es: "No me confundas.",
          ru: "Не путай меня.",
          zh: "别把我搞糊涂了。",
          ar: "لا تربكني.",
          ko: "나를 헷갈리게 하지 마세요."
        }
      },
      {
        id: "confusion",
        word: {
          en: "Confusion",
          fa: "سردرگمی",
          fr: "Confusion",
          de: "Verwirrung",
          it: "Confusione",
          es: "Confusión",
          ru: "Путаница",
          zh: "混乱",
          ar: "ارتباك",
          ko: "혼란"
        },
        sentence: {
          en: "Avoid confusion.",
          fa: "جلوگیری از سردرگمی.",
          fr: "Éviter la confusion.",
          de: "Verwirrung vermeiden.",
          it: "Evitare confusione.",
          es: "Evitar confusiones.",
          ru: "Избегать путаницы.",
          zh: "避免混淆。",
          ar: "تجنب الارتباك.",
          ko: "혼란을 피하세요."
        }
      },
      {
        id: "congress",
        word: {
          en: "Congress",
          fa: "کنگره",
          fr: "Congrès",
          de: "Kongress",
          it: "Congresso",
          es: "Congreso",
          ru: "Конгресс",
          zh: "国会",
          ar: "مؤتمر/كونغرس",
          ko: "의회"
        },
        sentence: {
          en: "Member of congress.",
          fa: "عضو کنگره.",
          fr: "Membre du congrès.",
          de: "Kongressabgeordneter.",
          it: "Membro del congresso.",
          es: "Miembro del congreso.",
          ru: "Член конгресса.",
          zh: "国会议员。",
          ar: "عضو في الكونغرس.",
          ko: "국회의원."
        }
      },
      {
        id: "connect",
        word: {
          en: "Connect",
          fa: "متصل کردن",
          fr: "Connecter",
          de: "Verbinden",
          it: "Connettere",
          es: "Conectar",
          ru: "Соединять",
          zh: "连接",
          ar: "وصل",
          ko: "연결하다"
        },
        sentence: {
          en: "Connect the dots.",
          fa: "نقاط را به هم وصل کن.",
          fr: "Relier les points.",
          de: "Verbinde die Punkte.",
          it: "Unisci i puntini.",
          es: "Une los puntos.",
          ru: "Соедини точки.",
          zh: "连点成线。",
          ar: "ربط النقاط.",
          ko: "점들을 연결하세요."
        }
      },
      {
        id: "conscious",
        word: {
          en: "Conscious",
          fa: "هوشیار/آگاه",
          fr: "Conscient",
          de: "Bewusst",
          it: "Cosciente",
          es: "Consciente",
          ru: "Сознательный",
          zh: "有意识",
          ar: "واع",
          ko: "의식하는"
        },
        sentence: {
          en: "Conscious decision.",
          fa: "تصمیم آگاهانه.",
          fr: "Décision consciente.",
          de: "Bewusste Entscheidung.",
          it: "Decisione consapevole.",
          es: "Decisión consciente.",
          ru: "Осознанное решение.",
          zh: "有意识的决定。",
          ar: "قرار واعي.",
          ko: "의식적인 결정."
        }
      },
      {
        id: "consequence",
        word: {
          en: "Consequence",
          fa: "پیامد/نتیجه",
          fr: "Conséquence",
          de: "Konsequenz",
          it: "Conseguenza",
          es: "Consecuencia",
          ru: "Следствие",
          zh: "后果",
          ar: "عاقبة",
          ko: "결과"
        },
        sentence: {
          en: "Face the consequence.",
          fa: "با عواقب روبرو شو.",
          fr: "Faire face aux conséquences.",
          de: "Den Konsequenzen ins Auge sehen.",
          it: "Affronta le conseguenze.",
          es: "Afrontar las consecuencias.",
          ru: "Столкнуться с последствиями.",
          zh: "承担后果。",
          ar: "واجه العواقب.",
          ko: "결과를 받아들이세요."
        }
      },
      {
        id: "conservative",
        word: {
          en: "Conservative",
          fa: "محافظه‌کار",
          fr: "Conservateur",
          de: "Konservativ",
          it: "Conservatore",
          es: "Conservador",
          ru: "Консервативный",
          zh: "保守",
          ar: "محافظ",
          ko: "보수적인"
        },
        sentence: {
          en: "Conservative estimate.",
          fa: "تخمین محافظه‌کارانه.",
          fr: "Estimation prudente.",
          de: "Konservative Schätzung.",
          it: "Stima prudente.",
          es: "Estimación conservadora.",
          ru: "Консервативная оценка.",
          zh: "保守估计。",
          ar: "تقدير محافظ.",
          ko: "보수적인 추정."
        }
      },
      {
        id: "considerable",
        word: {
          en: "Considerable",
          fa: "قابل توجه",
          fr: "Considérable",
          de: "Erheblich",
          it: "Notevole",
          es: "Considerable",
          ru: "Значительный",
          zh: "相当大",
          ar: "ملحوظ",
          ko: "상당한"
        },
        sentence: {
          en: "Considerable amount.",
          fa: "مقدار قابل توجه.",
          fr: "Montant considérable.",
          de: "Beträchtliche Menge.",
          it: "Quantità considerevole.",
          es: "Cantidad considerable.",
          ru: "Значительное количество.",
          zh: "相当大的数额。",
          ar: "كمية كبيرة.",
          ko: "상당한 양."
        }
      },
      {
        id: "consideration",
        word: {
          en: "Consideration",
          fa: "ملاحظه/بررسی",
          fr: "Considération",
          de: "Überlegung",
          it: "Considerazione",
          es: "Consideración",
          ru: "Рассмотрение",
          zh: "考虑",
          ar: "اعتبار",
          ko: "고려"
        },
        sentence: {
          en: "Take into consideration.",
          fa: "در نظر گرفتن.",
          fr: "Prendre en considération.",
          de: "In Betracht ziehen.",
          it: "Prendere in considerazione.",
          es: "Tomar en consideración.",
          ru: "Принимать во внимание.",
          zh: "考虑到。",
          ar: "خذ بعين الإعتبار.",
          ko: "고려하다."
        }
      },
      {
        id: "consistent",
        word: {
          en: "Consistent",
          fa: "ثابت/سازگار",
          fr: "Cohérent",
          de: "Konsistent",
          it: "Coerente",
          es: "Consistente",
          ru: "Последовательный",
          zh: "一致",
          ar: "متسق",
          ko: "일관된"
        },
        sentence: {
          en: "Be consistent.",
          fa: "ثابت قدم باش.",
          fr: "Sois cohérent.",
          de: "Sei konsequent.",
          it: "Sii coerente.",
          es: "Sé consistente.",
          ru: "Будь последовательным.",
          zh: "始终如一。",
          ar: "كن متسقا.",
          ko: "일관성을 유지하세요."
        }
      },
      {
        id: "constant",
        word: {
          en: "Constant",
          fa: "دائمی/ثابت",
          fr: "Constant",
          de: "Konstant",
          it: "Costante",
          es: "Constante",
          ru: "Постоянный",
          zh: "恒定",
          ar: "ثابت",
          ko: "지속적인"
        },
        sentence: {
          en: "Constant pain.",
          fa: "درد مداوم.",
          fr: "Douleur constante.",
          de: "Ständiger Schmerz.",
          it: "Dolore costante.",
          es: "Dolor constante.",
          ru: "Постоянная боль.",
          zh: "持续的疼痛。",
          ar: "ألم مستمر.",
          ko: "지속적인 통증."
        }
      },
      {
        id: "constitute",
        word: {
          en: "Constitute",
          fa: "تشکیل دادن",
          fr: "Constituer",
          de: "Bilden",
          it: "Costituire",
          es: "Constituir",
          ru: "Составлять",
          zh: "构成",
          ar: "شكل",
          ko: "구성하다"
        },
        sentence: {
          en: "Constitute a crime.",
          fa: "جرم محسوب شدن.",
          fr: "Constituer un crime.",
          de: "Einen Straftatbestand erfüllen.",
          it: "Costituire reato.",
          es: "Constituir un delito.",
          ru: "Составлять преступление.",
          zh: "构成犯罪。",
          ar: "يشكل جريمة.",
          ko: "범죄를 구성하다."
        }
      },
      {
        id: "constitutional",
        word: {
          en: "Constitutional",
          fa: "مشروطه/قانون اساسی",
          fr: "Constitutionnel",
          de: "Verfassungsrechtlich",
          it: "Costituzionale",
          es: "Constitucional",
          ru: "Конституционный",
          zh: "宪法",
          ar: "دستوري",
          ko: "헌법의"
        },
        sentence: {
          en: "Constitutional right.",
          fa: "حق قانونی.",
          fr: "Droit constitutionnel.",
          de: "Verfassungsrecht.",
          it: "Diritto costituzionale.",
          es: "Derecho constitucional.",
          ru: "Конституционное право.",
          zh: "宪法权利。",
          ar: "حق دستوري.",
          ko: "헌법상의 권리."
        }
      },
      {
        id: "construct",
        word: {
          en: "Construct",
          fa: "ساختن/بنا کردن",
          fr: "Construire",
          de: "Konstruieren",
          it: "Costruire",
          es: "Construir",
          ru: "Строить",
          zh: "建造",
          ar: "شيد",
          ko: "건설하다"
        },
        sentence: {
          en: "Construct a bridge.",
          fa: "یک پل بساز.",
          fr: "Construire un pont.",
          de: "Eine Brücke bauen.",
          it: "Costruire un ponte.",
          es: "Construir un puente.",
          ru: "Построить мост.",
          zh: "建造一座桥。",
          ar: "ابن جسرا.",
          ko: "다리를 건설하세요."
        }
      },
      {
        id: "construction",
        word: {
          en: "Construction",
          fa: "ساخت و ساز",
          fr: "Construction",
          de: "Bau",
          it: "Costruzione",
          es: "Construcción",
          ru: "Строительство",
          zh: "建设",
          ar: "بناء",
          ko: "건설"
        },
        sentence: {
          en: "Under construction.",
          fa: "در حال ساخت.",
          fr: "En construction.",
          de: "Im Bau.",
          it: "In costruzione.",
          es: "En construcción.",
          ru: "В стадии строительства.",
          zh: "正在施工。",
          ar: "قيد الإنشاء.",
          ko: "공사 중."
        }
      },
      {
        id: "consult",
        word: {
          en: "Consult",
          fa: "مشورت کردن",
          fr: "Consulter",
          de: "Beraten",
          it: "Consultare",
          es: "Consultar",
          ru: "Консультироваться",
          zh: "咨询",
          ar: "استشار",
          ko: "상담하다"
        },
        sentence: {
          en: "Consult an expert.",
          fa: "با یک متخصص مشورت کن.",
          fr: "Consulter un expert.",
          de: "Einen Experten konsultieren.",
          it: "Consultare un esperto.",
          es: "Consultar a un experto.",
          ru: "Проконсультируйтесь с экспертом.",
          zh: "请教专家。",
          ar: "استشر خبيراً.",
          ko: "전문가와 상의하세요."
        }
      },
      {
        id: "consumer",
        word: {
          en: "Consumer",
          fa: "مصرف‌کننده",
          fr: "Consommateur",
          de: "Verbraucher",
          it: "Consumatore",
          es: "Consumidor",
          ru: "Потребитель",
          zh: "消费者",
          ar: "مستهلك",
          ko: "소비자"
        },
        sentence: {
          en: "Consumer rights.",
          fa: "حقوق مصرف کننده.",
          fr: "Droits des consommateurs.",
          de: "Verbraucherrechte.",
          it: "Diritti dei consumatori.",
          es: "Derechos del consumidor.",
          ru: "Права потребителей.",
          zh: "消费者权益。",
          ar: "حقوق المستهلك.",
          ko: "소비자 권리."
        }
      },
      {
        id: "contemporary",
        word: {
          en: "Contemporary",
          fa: "معاصر",
          fr: "Contemporain",
          de: "Zeitgenössisch",
          it: "Contemporaneo",
          es: "Contemporáneo",
          ru: "Современный",
          zh: "当代",
          ar: "معاصر",
          ko: "현대의"
        },
        sentence: {
          en: "Contemporary art.",
          fa: "هنر معاصر.",
          fr: "Art contemporain.",
          de: "Zeitgenössische Kunst.",
          it: "Arte contemporanea.",
          es: "Arte contemporáneo.",
          ru: "Современное искусство.",
          zh: "当代艺术。",
          ar: "فن معاصر.",
          ko: "현대 미술."
        }
      },
      {
        id: "contest",
        word: {
          en: "Contest",
          fa: "مسابقه/رقابت",
          fr: "Concours",
          de: "Wettbewerb",
          it: "Concorso",
          es: "Concurso",
          ru: "Конкурс",
          zh: "比赛",
          ar: "مسابقة",
          ko: "대회"
        },
        sentence: {
          en: "Enter a contest.",
          fa: "در مسابقه شرکت کن.",
          fr: "Participer à un concours.",
          de: "An einem Wettbewerb teilnehmen.",
          it: "Partecipare a un concorso.",
          es: "Participar en un concurso.",
          ru: "Участвовать в конкурсе.",
          zh: "参加比赛。",
          ar: "اشترك في مسابقة.",
          ko: "대회에 참가하세요."
        }
      },
      {
        id: "context",
        word: {
          en: "Context",
          fa: "زمینه/متن",
          fr: "Contexte",
          de: "Kontext",
          it: "Contesto",
          es: "Contexto",
          ru: "Контекст",
          zh: "语境",
          ar: "سياق",
          ko: "맥락"
        },
        sentence: {
          en: "In context.",
          fa: "در زمینه.",
          fr: "En contexte.",
          de: "Im Kontext.",
          it: "Nel contesto.",
          es: "En contexto.",
          ru: "В контексте.",
          zh: "在语境中。",
          ar: "في السياق.",
          ko: "문맥상."
        }
      },
      {
        id: "contrast",
        word: {
          en: "Contrast",
          fa: "تضاد/تباين",
          fr: "Contraste",
          de: "Kontrast",
          it: "Contrasto",
          es: "Contraste",
          ru: "Контраст",
          zh: "对比",
          ar: "تباين",
          ko: "대조"
        },
        sentence: {
          en: "In contrast.",
          fa: "در مقابل.",
          fr: "En revanche.",
          de: "Im Gegensatz.",
          it: "In contrasto.",
          es: "En contraste.",
          ru: "Напротив.",
          zh: "相比之下。",
          ar: "في المقابل.",
          ko: "대조적으로."
        }
      },
      {
        id: "contribute",
        word: {
          en: "Contribute",
          fa: "مشارکت کردن",
          fr: "Contribuer",
          de: "Beitragen",
          it: "Contribuire",
          es: "Contribuir",
          ru: "Способствовать",
          zh: "贡献",
          ar: "ساهم",
          ko: "기여하다"
        },
        sentence: {
          en: "Contribute ideas.",
          fa: "ایده‌ها را به اشتراک بگذار.",
          fr: "Contribuer des idées.",
          de: "Ideen einbringen.",
          it: "Contribuire con idee.",
          es: "Contribuir con ideas.",
          ru: "Вносить идеи.",
          zh: "贡献想法。",
          ar: "تساهم بالأفكار.",
          ko: "아이디어를 기여하세요."
        }
      },
      {
        id: "contribution",
        word: {
          en: "Contribution",
          fa: "مشارکت/سهم",
          fr: "Contribution",
          de: "Beitrag",
          it: "Contributo",
          es: "Contribución",
          ru: "Вклад",
          zh: "贡献",
          ar: "مساهمة",
          ko: "기여"
        },
        sentence: {
          en: "Make a contribution.",
          fa: "مشارکت کن.",
          fr: "Faire une contribution.",
          de: "Einen Beitrag leisten.",
          it: "Dare un contributo.",
          es: "Hacer una contribución.",
          ru: "Внести вклад.",
          zh: "做出贡献。",
          ar: "قدم مساهمة.",
          ko: "기여하세요."
        }
      },
      {
        id: "controversial",
        word: {
          en: "Controversial",
          fa: "بحث‌برانگیز",
          fr: "Controversé",
          de: "Umstritten",
          it: "Controverso",
          es: "Controvertido",
          ru: "Спорный",
          zh: "有争议",
          ar: "مثير للجدل",
          ko: "논란의 여지가 있는"
        },
        sentence: {
          en: "Controversial topic.",
          fa: "موضوع بحث‌برانگیز.",
          fr: "Sujet controversé.",
          de: "Umstrittenes Thema.",
          it: "Argomento controverso.",
          es: "Tema controvertido.",
          ru: "Спорная тема.",
          zh: "有争议的话题。",
          ar: "موضوع مثير للجدل.",
          ko: "논란이 되는 주제."
        }
      },
      {
        id: "convention",
        word: {
          en: "Convention",
          fa: "همایش/قرارداد عرفی",
          fr: "Convention",
          de: "Konvention",
          it: "Convenzione",
          es: "Convención",
          ru: "Конвенция",
          zh: "公约/大会",
          ar: "اتفاقية/مؤتمر",
          ko: "관습"
        },
        sentence: {
          en: "Annual convention.",
          fa: "همایش سالانه.",
          fr: "Convention annuelle.",
          de: "Jahrestagung.",
          it: "Convenzione annuale.",
          es: "Convención anual.",
          ru: "Ежегодный съезд.",
          zh: "年度大会。",
          ar: "اتفاقية سنوية.",
          ko: "연례 대회."
        }
      },
      {
        id: "convert",
        word: {
          en: "Convert",
          fa: "تبدیل کردن",
          fr: "Convertir",
          de: "Umwandeln",
          it: "Convertire",
          es: "Convertir",
          ru: "Преобразовывать",
          zh: "转换",
          ar: "حول",
          ko: "전환하다"
        },
        sentence: {
          en: "Convert currency.",
          fa: "ارز را تبدیل کن.",
          fr: "Convertir la devise.",
          de: "Währung umrechnen.",
          it: "Convertire valuta.",
          es: "Convertir moneda.",
          ru: "Конвертировать валюту.",
          zh: "兑换货币。",
          ar: "حول العملة.",
          ko: "통화를 변환하세요."
        }
      },
      {
        id: "convince",
        word: {
          en: "Convince",
          fa: "متقاعد کردن",
          fr: "Convaincre",
          de: "Überzeugen",
          it: "Convincere",
          es: "Convencer",
          ru: "Убеждать",
          zh: "说服",
          ar: "أقنع",
          ko: "설득하다"
        },
        sentence: {
          en: "Convince the jury.",
          fa: "هیت منصفه را متقاعد کن.",
          fr: "Convaincre le jury.",
          de: "Die Jury überzeugen.",
          it: "Convincere la giuria.",
          es: "Convencer al jurado.",
          ru: "Убедить присяжных.",
          zh: "说服陪审团。",
          ar: "أقنع هيئة المحلفين.",
          ko: "배심원을 설득하세요."
        }
      },
      {
        id: "cooperate",
        word: {
          en: "Cooperate",
          fa: "همکاری کردن",
          fr: "Coopérer",
          de: "Kooperieren",
          it: "Cooperare",
          es: "Cooperar",
          ru: "Сотрудничать",
          zh: "合作",
          ar: "تعاون",
          ko: "협력하다"
        },
        sentence: {
          en: "Cooperate with police.",
          fa: "با پلیس همکاری کن.",
          fr: "Coopérer avec la police.",
          de: "Mit der Polizei kooperieren.",
          it: "Cooperare con la polizia.",
          es: "Cooperar con la policía.",
          ru: "Сотрудничать с полицией.",
          zh: "配合警方。",
          ar: "تعاون مع الشرطة.",
          ko: "경찰에 협조하세요."
        }
      },
      {
        id: "core",
        word: {
          en: "Core",
          fa: "هسته/اصلی",
          fr: "Noyau/Central",
          de: "Kern",
          it: "Nucleo",
          es: "Núcleo",
          ru: "Ядро",
          zh: "核心",
          ar: "جوهر",
          ko: "핵심"
        },
        sentence: {
          en: "Core values.",
          fa: "ارزش‌های اصلی.",
          fr: "Valeurs fondamentales.",
          de: "Grundwerte.",
          it: "Valori fondamentali.",
          es: "Valores fundamentales.",
          ru: "Основные ценности.",
          zh: "核心价值观。",
          ar: "القيم الجوهرية.",
          ko: "핵심 가치."
        }
      },
      {
        id: "corporate",
        word: {
          en: "Corporate",
          fa: "شرکتی/سازمانی",
          fr: "D'entreprise",
          de: "Unternehmens-",
          it: "Aziendale",
          es: "Corporativo",
          ru: "Корпоративный",
          zh: "企业",
          ar: "شركاتي",
          ko: "기업의"
        },
        sentence: {
          en: "Corporate office.",
          fa: "دفتر شرکت.",
          fr: "Siège social.",
          de: "Unternehmenszentrale.",
          it: "Ufficio aziendale.",
          es: "Oficina corporativa.",
          ru: "Корпоративный офис.",
          zh: "公司办公室。",
          ar: "مكتب الشركات.",
          ko: "본사."
        }
      },
      {
        id: "correspond",
        word: {
          en: "Correspond",
          fa: "مکاتبه کردن/مطابقت داشتن",
          fr: "Correspondre",
          de: "Entsprechen",
          it: "Corrispondere",
          es: "Corresponder",
          ru: "Соответствовать",
          zh: "对应",
          ar: "تراسل/طابق",
          ko: "일치하다"
        },
        sentence: {
          en: "Correspond via email.",
          fa: "از طریق ایمیل مکاتبه کن.",
          fr: "Correspondre par email.",
          de: "Per E-Mail korrespondieren.",
          it: "Corrispondere via e-mail.",
          es: "Corresponder por correo electrónico.",
          ru: "Переписываться по электронной почте.",
          zh: "通过电子邮件通信。",
          ar: "تراسل عبر البريد الإلكتروني.",
          ko: "이메일로 서신을 주고받으세요."
        }
      },
      {
        id: "council",
        word: {
          en: "Council",
          fa: "شورا",
          fr: "Conseil",
          de: "Rat",
          it: "Consiglio",
          es: "Consejo",
          ru: "Совет",
          zh: "理事会",
          ar: "مجلس",
          ko: "의회"
        },
        sentence: {
          en: "City council.",
          fa: "شورای شهر.",
          fr: "Conseil municipal.",
          de: "Stadtrat.",
          it: "Consiglio comunale.",
          es: "Ayuntamiento.",
          ru: "Городской совет.",
          zh: "市议会。",
          ar: "مجلس المدينة.",
          ko: "시의회."
        }
      },
      {
        id: "counsel",
        word: {
          en: "Counsel",
          fa: "مشاوره/وکیل",
          fr: "Conseil/Avocat",
          de: "Beratung",
          it: "Consulenza",
          es: "Consejo",
          ru: "Консультация",
          zh: "法律顾问",
          ar: "استشارة",
          ko: "상담"
        },
        sentence: {
          en: "Seek counsel.",
          fa: "مشاوره بجوی.",
          fr: "Demander conseil.",
          de: "Rat suchen.",
          it: "Chiedere consiglio.",
          es: "Buscar consejo.",
          ru: "Искать совета.",
          zh: "寻求建议。",
          ar: "اطلب المشورة.",
          ko: "조언을 구하세요."
        }
      },
      {
        id: "coverage",
        word: {
          en: "Coverage",
          fa: "پوشش (خبری/بیمه)",
          fr: "Couverture",
          de: "Berichterstattung",
          it: "Copertura",
          es: "Cobertura",
          ru: "Охват/Покрытие",
          zh: "覆盖",
          ar: "تغطية",
          ko: "보도"
        },
        sentence: {
          en: "Media coverage.",
          fa: "پوشش رسانه‌ای.",
          fr: "Couverture médiatique.",
          de: "Medienberichterstattung.",
          it: "Copertura mediatica.",
          es: "Cobertura mediática.",
          ru: "Освещение в СМИ.",
          zh: "媒体报道。",
          ar: "تغطية إعلامية.",
          ko: "미디어 보도."
        }
      },
      {
        id: "creation",
        word: {
          en: "Creation",
          fa: "خلقت/آفرینش",
          fr: "Création",
          de: "Schöpfung",
          it: "Creazione",
          es: "Creación",
          ru: "Создание",
          zh: "创造",
          ar: "إبداع/خلق",
          ko: "창조"
        },
        sentence: {
          en: "Job creation.",
          fa: "ایجاد شغل.",
          fr: "Création d'emplois.",
          de: "Schaffung von Arbeitsplätzen.",
          it: "Creazione di posti di lavoro.",
          es: "Creación de empleo.",
          ru: "Создание рабочих мест.",
          zh: "创造就业机会。",
          ar: "خلق فرص العمل.",
          ko: "일자리 창출."
        }
      },
      {
        id: "creative",
        word: {
          en: "Creative",
          fa: "خلاق",
          fr: "Créatif",
          de: "Kreativ",
          it: "Creativo",
          es: "Creativo",
          ru: "Творческий",
          zh: "有创意",
          ar: "مبدع",
          ko: "창의적인"
        },
        sentence: {
          en: "Creative writing.",
          fa: "نویسندگی خلاق.",
          fr: "Écriture créative.",
          de: "Kreatives Schreiben.",
          it: "Scrittura creativa.",
          es: "Escritura creativa.",
          ru: "Творческое письмо.",
          zh: "创意写作。",
          ar: "كتابة إبداعية.",
          ko: "창의적인 글쓰기."
        }
      },
      {
        id: "credit",
        word: {
          en: "Credit",
          fa: "اعتبار/نسیه",
          fr: "Crédit",
          de: "Kredit",
          it: "Credito",
          es: "Crédito",
          ru: "Кредит",
          zh: "信用",
          ar: "ائتمان",
          ko: "신용"
        },
        sentence: {
          en: "Give credit.",
          fa: "اعتبار بده.",
          fr: "Donner du crédit.",
          de: "Anerkennung zollen.",
          it: "Dare credito.",
          es: "Dar crédito.",
          ru: "Отдать должное.",
          zh: "给予赞扬。",
          ar: "امنح الفضل.",
          ko: "공로를 인정하세요."
        }
      },
      {
        id: "crisis",
        word: {
          en: "Crisis",
          fa: "بحران",
          fr: "Crise",
          de: "Krise",
          it: "Crisi",
          es: "Crisis",
          ru: "Кризис",
          zh: "危机",
          ar: "أزمة",
          ko: "위기"
        },
        sentence: {
          en: "Financial crisis.",
          fa: "بحران مالی.",
          fr: "Crise financière.",
          de: "Finanzkrise.",
          it: "Crisi finanziaria.",
          es: "Crisis financiera.",
          ru: "Финансовый кризис.",
          zh: "金融危机。",
          ar: "أزمة مالية.",
          ko: "금융 위기."
        }
      },
      {
        id: "criterion",
        word: {
          en: "Criterion",
          fa: "ملاک/معیار",
          fr: "Critère",
          de: "Kriterium",
          it: "Criterio",
          es: "Criterio",
          ru: "Критерий",
          zh: "标准",
          ar: "معيار",
          ko: "기준"
        },
        sentence: {
          en: "Main criterion.",
          fa: "معیار اصلی.",
          fr: "Critère principal.",
          de: "Hauptkriterium.",
          it: "Criterio principale.",
          es: "Criterio principal.",
          ru: "Главный критерий.",
          zh: "主要标准。",
          ar: "معيار رئيسي.",
          ko: "주요 기준."
        }
      },
      {
        id: "critical",
        word: {
          en: "Critical",
          fa: "بحرانی/انتقادی",
          fr: "Critique",
          de: "Kritisch",
          it: "Critico",
          es: "Crítico",
          ru: "Критический",
          zh: "关键/批判",
          ar: "حاسم/نقدي",
          ko: "비판적인"
        },
        sentence: {
          en: "Critical condition.",
          fa: "شرایط وخیم.",
          fr: "État critique.",
          de: "Kritischer Zustand.",
          it: "Condizioni critiche.",
          es: "Condición crítica.",
          ru: "Критическое состояние.",
          zh: "危急情况。",
          ar: "حالة حرجة.",
          ko: "위독한 상태."
        }
      },
      {
        id: "criticism",
        word: {
          en: "Criticism",
          fa: "نقد/انتقاد",
          fr: "Critique",
          de: "Kritik",
          it: "Critica",
          es: "Crítica",
          ru: "Критика",
          zh: "批评",
          ar: "نقد",
          ko: "비판"
        },
        sentence: {
          en: "Accept criticism.",
          fa: "انتقاد را بپذیر.",
          fr: "Accepter la critique.",
          de: "Kritik annehmen.",
          it: "Accettare le critiche.",
          es: "Aceptar críticas.",
          ru: "Принимать критику.",
          zh: "接受批评。",
          ar: "تقبل النقد.",
          ko: "비판을 받아들이세요."
        }
      },
      {
        id: "crucial",
        word: {
          en: "Crucial",
          fa: "حیاتی/بسیار مهم",
          fr: "Crucial",
          de: "Entscheidend",
          it: "Cruciale",
          es: "Crucial",
          ru: "Решающий",
          zh: "至关重要",
          ar: "حاسم",
          ko: "결정적인"
        },
        sentence: {
          en: "Crucial moment.",
          fa: "لحظه حیاتی.",
          fr: "Moment crucial.",
          de: "Entscheidender Moment.",
          it: "Momento cruciale.",
          es: "Momento crucial.",
          ru: "Решающий момент.",
          zh: "关键时刻。",
          ar: "لحظة حاسمة.",
          ko: "중요한 순간."
        }
      },
      {
        id: "cultural",
        word: {
          en: "Cultural",
          fa: "فرهنگی",
          fr: "Culturel",
          de: "Kulturell",
          it: "Culturale",
          es: "Cultural",
          ru: "Культурный",
          zh: "文化",
          ar: "ثقافي",
          ko: "문화적인"
        },
        sentence: {
          en: "Cultural heritage.",
          fa: "میراث فرهنگی.",
          fr: "Héritage culturel.",
          de: "Kulturerbe.",
          it: "Patrimonio culturale.",
          es: "Herencia cultural.",
          ru: "Культурное наследие.",
          zh: "文化遗产。",
          ar: "تراث ثقافي.",
          ko: "문화 유산."
        }
      },
      {
        id: "curiosity",
        word: {
          en: "Curiosity",
          fa: "کنجکاوی",
          fr: "Curiosité",
          de: "Neugier",
          it: "Curiosità",
          es: "Curiosidad",
          ru: "Любопытство",
          zh: "好奇心",
          ar: "فضول",
          ko: "호기심"
        },
        sentence: {
          en: "Satisfy curiosity.",
          fa: "ارضای حس کنجکاوی.",
          fr: "Satisfaire la curiosité.",
          de: "Neugier befriedigen.",
          it: "Soddisfare la curiosità.",
          es: "Satisfacer la curiosidad.",
          ru: "Удовлетворить любопытство.",
          zh: "满足好奇心。",
          ar: "أشبع الفضول.",
          ko: "호기심을 충족시키세요."
        }
      },
      {
        id: "curriculum",
        word: {
          en: "Curriculum",
          fa: "برنامه درسی",
          fr: "Programme d'études",
          de: "Lehrplan",
          it: "Curriculum",
          es: "Plan de estudios",
          ru: "Учебный план",
          zh: "课程",
          ar: "منهج دراسي",
          ko: "교육 과정"
        },
        sentence: {
          en: "School curriculum.",
          fa: "برنامه درسی مدرسه.",
          fr: "Programme scolaire.",
          de: "Lehrplan.",
          it: "Curriculum scolastico.",
          es: "Plan de estudios escolar.",
          ru: "Школьная программа.",
          zh: "学校课程。",
          ar: "المنهج الدراسي.",
          ko: "학교 교과 과정."
        }
      },
      {
        id: "cycle",
        word: {
          en: "Cycle",
          fa: "چرخه",
          fr: "Cycle",
          de: "Zyklus",
          it: "Ciclo",
          es: "Ciclo",
          ru: "Цикл",
          zh: "周期",
          ar: "دورة",
          ko: "주기"
        },
        sentence: {
          en: "Life cycle.",
          fa: "چرخه زندگی.",
          fr: "Cycle de vie.",
          de: "Lebenszyklus.",
          it: "Ciclo vitale.",
          es: "Ciclo de vida.",
          ru: "Жизненный цикл.",
          zh: "生命周期。",
          ar: "دورة الحياة.",
          ko: "라이프 사이클."
        }
      },
      {
        id: "debate",
        word: {
          en: "Debate",
          fa: "مناظره",
          fr: "Débat",
          de: "Debatte",
          it: "Dibattito",
          es: "Debate",
          ru: "Дебаты",
          zh: "辩论",
          ar: "مناظرة",
          ko: "토론"
        },
        sentence: {
          en: "Public debate.",
          fa: "مناظره عمومی.",
          fr: "Débat public.",
          de: "Öffentliche Debatte.",
          it: "Dibattito pubblico.",
          es: "Debate público.",
          ru: "Публичные дебаты.",
          zh: "公开辩论。",
          ar: "نقاش عام.",
          ko: "공개 토론."
        }
      },
      {
        id: "decade",
        word: {
          en: "Decade",
          fa: "دهه",
          fr: "Décennie",
          de: "Jahrzehnt",
          it: "Decennio",
          es: "Década",
          ru: "Десятилетие",
          zh: "十年",
          ar: "عقد",
          ko: "10년"
        },
        sentence: {
          en: "Last decade.",
          fa: "دهه گذشته.",
          fr: "Dernière décennie.",
          de: "Letztes Jahrzehnt.",
          it: "Ultimo decennio.",
          es: "Última década.",
          ru: "Последнее десятилетие.",
          zh: "过去十年。",
          ar: "العقد الماضي.",
          ko: "지난 10년."
        }
      },
      {
        id: "decline",
        word: {
          en: "Decline",
          fa: "کاهش/رد کردن",
          fr: "Déclin/Refuser",
          de: "Rückgang/Ablehnen",
          it: "Declino",
          es: "Declive/Rechazar",
          ru: "Спад",
          zh: "下降/拒绝",
          ar: "انخفاض/رفض",
          ko: "감소"
        },
        sentence: {
          en: "Decline the offer.",
          fa: "پیشنهاد را رد کن.",
          fr: "Décliner l'offre.",
          de: "Das Angebot ablehnen.",
          it: "Rifiutare l'offerta.",
          es: "Rechazar la oferta.",
          ru: "Отклонить предложение.",
          zh: "拒绝提议。",
          ar: "ارفض العرض.",
          ko: "제안을 거절하세요."
        }
      },
      {
        id: "define",
        word: {
          en: "Define",
          fa: "تعریف کردن",
          fr: "Définir",
          de: "Definieren",
          it: "Definire",
          es: "Definir",
          ru: "Определять",
          zh: "定义",
          ar: "عرف",
          ko: "정의하다"
        },
        sentence: {
          en: "Define the problem.",
          fa: "مشکل را تعریف کن.",
          fr: "Définir le problème.",
          de: "Definiere das Problem.",
          it: "Definisci il problema.",
          es: "Definir el problema.",
          ru: "Определить проблему.",
          zh: "定义问题。",
          ar: "حدد المشكلة.",
          ko: "문제를 정의하세요."
        }
      },
      {
        id: "definite",
        word: {
          en: "Definite",
          fa: "قطعی/مشخص",
          fr: "Défini",
          de: "Bestimmt",
          it: "Definito",
          es: "Definitivo",
          ru: "Определенный",
          zh: "明确",
          ar: "محدد",
          ko: "확실한"
        },
        sentence: {
          en: "Definite answer.",
          fa: "پاسخ قطعی.",
          fr: "Réponse définitive.",
          de: "Endgültige Antwort.",
          it: "Risposta definitiva.",
          es: "Respuesta definitiva.",
          ru: "Определенный ответ.",
          zh: "肯定的回答。",
          ar: "إجابة محددة.",
          ko: "확실한 대답."
        }
      },
      {
        id: "definition",
        word: {
          en: "Definition",
          fa: "تعریف",
          fr: "Définition",
          de: "Definition",
          it: "Definizione",
          es: "Definición",
          ru: "Определение",
          zh: "定义",
          ar: "تعريف",
          ko: "정의"
        },
        sentence: {
          en: "Clear definition.",
          fa: "تعریف روشن.",
          fr: "Définition claire.",
          de: "Klare Definition.",
          it: "Definizione chiara.",
          es: "Definición clara.",
          ru: "Четкое определение.",
          zh: "明确的定义。",
          ar: "تعريف واضح.",
          ko: "명확한 정의."
        }
      },
      {
        id: "degree",
        word: {
          en: "Degree",
          fa: "درجه/مدرک",
          fr: "Degré/Diplôme",
          de: "Grad/Abschluss",
          it: "Grado/Laurea",
          es: "Grado",
          ru: "Степень",
          zh: "学位/程度",
          ar: "درجة",
          ko: "학위"
        },
        sentence: {
          en: "University degree.",
          fa: "مدرک دانشگاهی.",
          fr: "Diplôme universitaire.",
          de: "Universitätsabschluss.",
          it: "Laurea.",
          es: "Título universitario.",
          ru: "Университетская степень.",
          zh: "大学学位。",
          ar: "شهادة جامعية.",
          ko: "대학 학위."
        }
      },
      {
        id: "delay",
        word: {
          en: "Delay",
          fa: "تاخیر",
          fr: "Retard",
          de: "Verzögerung",
          it: "Ritardo",
          es: "Retraso",
          ru: "Задержка",
          zh: "延迟",
          ar: "تأخير",
          ko: "지연"
        },
        sentence: {
          en: "Flight delay.",
          fa: "تاخیر پرواز.",
          fr: "Retard de vol.",
          de: "Flugverspätung.",
          it: "Ritardo del volo.",
          es: "Retraso del vuelo.",
          ru: "Задержка рейса.",
          zh: "航班延误。",
          ar: "تأخير الرحلة.",
          ko: "비행 지연."
        }
      },
      {
        id: "deliberate",
        word: {
          en: "Deliberate",
          fa: "عمدی/سنجیده",
          fr: "Délibéré",
          de: "Absichtlich",
          it: "Deliberato",
          es: "Deliberado",
          ru: "Преднамеренный",
          zh: "故意",
          ar: "متعمد",
          ko: "고의적인"
        },
        sentence: {
          en: "Deliberate action.",
          fa: "اقدام عمدی.",
          fr: "Action délibérée.",
          de: "Absichtliche Handlung.",
          it: "Azione deliberata.",
          es: "Acción deliberada.",
          ru: "Преднамеренное действие.",
          zh: "蓄意行动。",
          ar: "عمل متعمد.",
          ko: "고의적인 행동."
        }
      },
      {
        id: "delicate",
        word: {
          en: "Delicate",
          fa: "ظریف/حساس",
          fr: "Délicat",
          de: "Zart/Empfindlich",
          it: "Delicato",
          es: "Delicado",
          ru: "Хрупкий",
          zh: "微妙",
          ar: "دقيق/رقيق",
          ko: "섬세한"
        },
        sentence: {
          en: "Delicate situation.",
          fa: "موقعیت حساس.",
          fr: "Situation délicate.",
          de: "Heikle Situation.",
          it: "Situazione delicata.",
          es: "Situación delicada.",
          ru: "Деликатная ситуация.",
          zh: "微妙的局势。",
          ar: "موقف دقيق.",
          ko: "미묘한 상황."
        }
      },
      {
        id: "delivery",
        word: {
          en: "Delivery",
          fa: "تحویل",
          fr: "Livraison",
          de: "Lieferung",
          it: "Consegna",
          es: "Entrega",
          ru: "Доставка",
          zh: "交付",
          ar: "تسليم",
          ko: "배달"
        },
        sentence: {
          en: "Express delivery.",
          fa: "تحویل سریع.",
          fr: "Livraison express.",
          de: "Expresslieferung.",
          it: "Consegna espressa.",
          es: "Entrega urgente.",
          ru: "Экспресс-доставка.",
          zh: "快递。",
          ar: "توصيل سريع.",
          ko: "빠른 배송."
        }
      },
      {
        id: "demand",
        word: {
          en: "Demand",
          fa: "تقاضا",
          fr: "Demande",
          de: "Nachfrage",
          it: "Domanda",
          es: "Demanda",
          ru: "Спрос",
          zh: "需求",
          ar: "طلب",
          ko: "수요"
        },
        sentence: {
          en: "High demand.",
          fa: "تقاضای بالا.",
          fr: "Forte demande.",
          de: "Hohe Nachfrage.",
          it: "Alta domanda.",
          es: "Alta demanda.",
          ru: "Высокий спрос.",
          zh: "高需求。",
          ar: "طلب عالي.",
          ko: "높은 수요."
        }
      },
      {
        id: "democracy",
        word: {
          en: "Democracy",
          fa: "دموکراسی",
          fr: "Démocratie",
          de: "Demokratie",
          it: "Democrazia",
          es: "Democracia",
          ru: "Демократия",
          zh: "民主",
          ar: "ديمقراطية",
          ko: "민주주의"
        },
        sentence: {
          en: "True democracy.",
          fa: "دموکراسی واقعی.",
          fr: "Vraie démocratie.",
          de: "Wahre Demokratie.",
          it: "Vera democrazia.",
          es: "Verdadera democracia.",
          ru: "Истинная демократия.",
          zh: "真正的民主。",
          ar: "ديمقراطية حقيقية.",
          ko: "진정한 민주주의."
        }
      },
      {
        id: "demonstrate",
        word: {
          en: "Demonstrate",
          fa: "نشان دادن/تظاهرات کردن",
          fr: "Démontrer",
          de: "Demonstrieren",
          it: "Dimostrare",
          es: "Demostrar",
          ru: "Демонстрировать",
          zh: "展示/示威",
          ar: "أثبت/تظاهر",
          ko: "입증하다"
        },
        sentence: {
          en: "Demonstrate skills.",
          fa: "مهارت‌ها را نشان بده.",
          fr: "Démontrer des compétences.",
          de: "Fähigkeiten demonstrieren.",
          it: "Dimostrare abilità.",
          es: "Demostrar habilidades.",
          ru: "Продемонстрировать навыки.",
          zh: "展示技能。",
          ar: "أظهر المهارات.",
          ko: "기술을 보여주세요."
        }
      },
      {
        id: "deny",
        word: {
          en: "Deny",
          fa: "انکار کردن",
          fr: "Nier",
          de: "Leugnen",
          it: "Negare",
          es: "Negar",
          ru: "Отрицать",
          zh: "否认",
          ar: "أنكر",
          ko: "부인하다"
        },
        sentence: {
          en: "Deny access.",
          fa: "دسترسی را رد کن.",
          fr: "Refuser l'accès.",
          de: "Zugriff verweigern.",
          it: "Negare l'accesso.",
          es: "Denegar acceso.",
          ru: "Запретить доступ.",
          zh: "拒绝访问。",
          ar: "امنع الوصول.",
          ko: "접근을 거부하세요."
        }
      },
      {
        id: "depress",
        word: {
          en: "Depress",
          fa: "افسرده کردن",
          fr: "Déprimer",
          de: "Deprimieren",
          it: "Deprimere",
          es: "Deprimir",
          ru: "Угнетать",
          zh: "使沮丧",
          ar: "أحبط",
          ko: "우울하게 하다"
        },
        sentence: {
          en: "Don't depress me.",
          fa: "مرا دلسرد نکن.",
          fr: "Ne me déprime pas.",
          de: "Mach mich nicht depressiv.",
          it: "Non deprimermi.",
          es: "No me deprimas.",
          ru: "Не вгоняй меня в депрессию.",
          zh: "别让我沮丧。",
          ar: "لا تحبطني.",
          ko: "나를 우울하게 하지 마세요."
        }
      },
      {
        id: "depth",
        word: {
          en: "Depth",
          fa: "عمق",
          fr: "Profondeur",
          de: "Tiefe",
          it: "Profondità",
          es: "Profundidad",
          ru: "Глубина",
          zh: "深度",
          ar: "عمق",
          ko: "깊이"
        },
        sentence: {
          en: "Ocean depth.",
          fa: "عمق اقیانوس.",
          fr: "Profondeur de l'océan.",
          de: "Ozeantiefe.",
          it: "Profondità dell'oceano.",
          es: "Profundidad del océano.",
          ru: "Глубина океана.",
          zh: "海洋深度。",
          ar: "عمق المحيط.",
          ko: "바다의 깊이."
        }
      },
      {
        id: "derive",
        word: {
          en: "Derive",
          fa: "مشتق شدن/ناشی شدن",
          fr: "Dériver",
          de: "Ableiten",
          it: "Derivare",
          es: "Derivar",
          ru: "Происходить",
          zh: "源于",
          ar: "اشتق",
          ko: "유래하다"
        },
        sentence: {
          en: "Derive pleasure.",
          fa: "لذت بردن.",
          fr: "Tirer du plaisir.",
          de: "Vergnügen ableiten.",
          it: "Trarre piacere.",
          es: "Derivar placer.",
          ru: "Получать удовольствие.",
          zh: "获得乐趣。",
          ar: "استمده المتعة.",
          ko: "즐거움을 얻으세요."
        }
      }
    ]
  },
  {
    level: "C1",
    items: [
      {
        id: "abate",
        word: {
          en: "Abate",
          fa: "فروکش کردن/کاسته شدن",
          fr: "S'apaiser",
          de: "Nachlassen",
          it: "Abbassarsi",
          es: "Disminuir",
          ru: "Утихать",
          zh: "减弱",
          ar: "خفّ"
        },
        sentence: {
          en: "The storm will abate.",
          fa: "طوفان فروکش خواهد کرد.",
          fr: "La tempête va s'apaiser.",
          de: "Der Sturm wird nachlassen.",
          it: "La tempesta si placherà.",
          es: "La tormenta amainará.",
          ru: "Шторм утихнет.",
          zh: "暴风雨会减弱。",
          ar: "العاصفة ستهدأ.",
          ko: "폭풍이 가라앉을 것입니다."
        }
      },
      {
        id: "aberration",
        word: {
          en: "Aberration",
          fa: "انحراف/ناهنجاری",
          fr: "Aberration",
          de: "Abweichung",
          it: "Aberrazione",
          es: "Aberración",
          ru: "Аберрация",
          zh: "反常",
          ar: "انحراف"
        },
        sentence: {
          en: "Mental aberration.",
          fa: "انحراف ذهنی.",
          fr: "Aberration mentale.",
          de: "Geistige Verirrung.",
          it: "Aberrazione mentale.",
          es: "Aberración mental.",
          ru: "Умственное отклонение.",
          zh: "精神失常。",
          ar: "انحراف عقلي.",
          ko: "정신 이상."
        }
      },
      {
        id: "abrogate",
        word: {
          en: "Abrogate",
          fa: "نسخ کردن/ملغی کردن",
          fr: "Abroger",
          de: "Aufheben",
          it: "Abrogare",
          es: "Abrogar",
          ru: "Отменять",
          zh: "废除",
          ar: "ألغى"
        },
        sentence: {
          en: "Abrogate the law.",
          fa: "قانون را لغو کن.",
          fr: "Abroger la loi.",
          de: "Das Gesetz aufheben.",
          it: "Abrogare la legge.",
          es: "Abrogar la ley.",
          ru: "Отменить закон.",
          zh: "废除法律。",
          ar: "ألغ القانون.",
          ko: "법을 폐지하세요."
        }
      },
      {
        id: "abscond",
        word: {
          en: "Abscond",
          fa: "فرار کردن (با دزدی)",
          fr: "S'enfuir",
          de: "Fliehen",
          it: "Fuggire",
          es: "Fugarse",
          ru: "Скрыться",
          zh: "潜逃",
          ar: "هرب"
        },
        sentence: {
          en: "Abscond with money.",
          fa: "با پول متواری شو.",
          fr: "S'enfuir avec l'argent.",
          de: "Sich mit dem Geld davonmachen.",
          it: "Fuggire con i soldi.",
          es: "Huir con el dinero.",
          ru: "Скрыться с деньгами.",
          zh: "卷款潜逃。",
          ar: "اهرب بالمال.",
          ko: "돈을 가지고 도망치다."
        }
      },
      {
        id: "abstain",
        word: {
          en: "Abstain",
          fa: "خودداری کردن",
          fr: "S'abstenir",
          de: "Sich enthalten",
          it: "Astenersi",
          es: "Abstenerse",
          ru: "Воздерживаться",
          zh: "戒绝",
          ar: "امتنع"
        },
        sentence: {
          en: "Abstain from voting.",
          fa: "از رای دادن خودداری کن.",
          fr: "S'abstenir de voter.",
          de: "Sich der Stimme enthalten.",
          it: "Astenersi dal voto.",
          es: "Abstenerse de votar.",
          ru: "Воздержаться от голосования.",
          zh: "弃权。",
          ar: "امتنع عن التصويت.",
          ko: "투표를 기권하세요."
        }
      },
      {
        id: "abysmal",
        word: {
          en: "Abysmal",
          fa: "فاجعه‌بار/عمیقاً بد",
          fr: "Abyssal",
          de: "Abgrundtief",
          it: "Abissale",
          es: "Abismal",
          ru: "Ужасный",
          zh: "极坏",
          ar: "رهيب"
        },
        sentence: {
          en: "Abysmal failure.",
          fa: "شکست مفتضحانه.",
          fr: "Échec abyssal.",
          de: "Abgründiges Scheitern.",
          it: "Fallimento abissale.",
          es: "Fracaso abismal.",
          ru: "Ужасный провал.",
          zh: "惨败。",
          ar: "فشل ذريع.",
          ko: "끔찍한 실패."
        }
      },
      {
        id: "accolade",
        word: {
          en: "Accolade",
          fa: "تحسین/جایزه افتخار",
          fr: "Acclamation",
          de: "Auszeichnung",
          it: "Onorificenza",
          es: "Galardón",
          ru: "Похвала",
          zh: "赞扬",
          ar: "تكريم"
        },
        sentence: {
          en: "Highest accolade.",
          fa: "بالاترین تشویق.",
          fr: "Plus haute distinction.",
          de: "Höchste Auszeichnung.",
          it: "Massimo riconoscimento.",
          es: "El mayor elogio.",
          ru: "Высшая награда.",
          zh: "最高荣誉。",
          ar: "أعلى وسام.",
          ko: "최고의 찬사."
        }
      },
      {
        id: "acquiesce",
        word: {
          en: "Acquiesce",
          fa: "قبول اکراهی کردن",
          fr: "Acquiescer",
          de: "Einwilligen",
          it: "Acconsentire",
          es: "Acceder",
          ru: "Соглашаться",
          zh: "默许",
          ar: "سكت عن"
        },
        sentence: {
          en: "Acquiesce to demands.",
          fa: "به خواسته ها تن بده.",
          fr: "Acquiescer aux demandes.",
          de: "Den Forderungen nachgeben.",
          it: "Acconsentire alle richieste.",
          es: "Acceder a las demandas.",
          ru: "Уступить требованиям.",
          zh: "默许要求。",
          ar: "أذعن للمطالب.",
          ko: "요구에 묵인하다."
        }
      },
      {
        id: "acrimonious",
        word: {
          en: "Acrimonious",
          fa: "تلخ و تند/پر از خشم",
          fr: "Acre",
          de: "Bissig",
          it: "Acrimonioso",
          es: "Acrimonioso",
          ru: "Язвительный",
          zh: "尖刻",
          ar: "لاذع"
        },
        sentence: {
          en: "Acrimonious dispute.",
          fa: "اختلاف شدید.",
          fr: "Dispute acrimonieuse.",
          de: "Erbitterter Streit.",
          it: "Disputa acrimoniosa.",
          es: "Disputa agria.",
          ru: "Ожесточенный спор.",
          zh: "激烈的争论。",
          ar: "نزاع حاد.",
          ko: "험악한 논쟁."
        }
      },
      {
        id: "adamant",
        word: {
          en: "Adamant",
          fa: "سرسخت/تسلیم‌ناپذیر",
          fr: "Inébranlable",
          de: "Unerbittlich",
          it: "Adamantino",
          es: "Adamantino",
          ru: "Непреклонный",
          zh: "坚定不移",
          ar: "عنيد"
        },
        sentence: {
          en: "He was adamant.",
          fa: "او مصمم بود.",
          fr: "Il était inflexible.",
          de: "Er war unnachgiebig.",
          it: "Era irremovibile.",
          es: "Era inflexible.",
          ru: "Он был непреклонен.",
          zh: "他坚定不移。",
          ar: "كان مصرا.",
          ko: "그는 단호했습니다."
        }
      },
      {
        id: "admonish",
        word: {
          en: "Admonish",
          fa: "سرزنش جدی کردن",
          fr: "Admonester",
          de: "Ermahnen",
          it: "Ammonire",
          es: "Amonestar",
          ru: "Увещевать",
          zh: "告诫",
          ar: "وبّخ"
        },
        sentence: {
          en: "Admonish the child.",
          fa: "کودک را سرزنش کن.",
          fr: "Admonester l'enfant.",
          de: "Das Kind ermahnen.",
          it: "Ammonire il bambino.",
          es: "Amonestar al niño.",
          ru: "Отчитать ребенка.",
          zh: "告诫孩子。",
          ar: "وبخ الطفل.",
          ko: "아이를 훈계하세요."
        }
      },
      {
        id: "adroit",
        word: {
          en: "Adroit",
          fa: "ماهر/چابک",
          fr: "Adroit",
          de: "Gewandt",
          it: "Abile",
          es: "Diestro",
          ru: "Ловкий",
          zh: "熟练",
          ar: "بارع"
        },
        sentence: {
          en: "Adroit handling.",
          fa: "مدیریت ماهرانه.",
          fr: "Manipulation adroite.",
          de: "Geschickte Handhabung.",
          it: "Gestione abile.",
          es: "Manejo hábil.",
          ru: "Ловкое обращение.",
          zh: "熟练的处理。",
          ar: "تعامل بارع.",
          ko: "능숙한 처리."
        }
      },
      {
        id: "adulation",
        word: {
          en: "Adulation",
          fa: "چاپلوسی بیش از حد",
          fr: "Adulation",
          de: "Schmeichelei",
          it: "Adulazione",
          es: "Adulación",
          ru: "Лесть",
          zh: "奉承",
          ar: "تملّق"
        },
        sentence: {
          en: "Seek adulation.",
          fa: "به دنبال تملق باش.",
          fr: "Chercher l'adulation.",
          de: "Schmeichelei suchen.",
          it: "Cercare l'adulazione.",
          es: "Buscar adulación.",
          ru: "Искать лести.",
          zh: "寻求奉承。",
          ar: "اطلب المداهنة.",
          ko: "아첨을 구하다."
        }
      },
      {
        id: "adverse",
        word: {
          en: "Adverse",
          fa: "نامساعد/منفی",
          fr: "Défavorable",
          de: "Ungünstig",
          it: "Avverso",
          es: "Adverso",
          ru: "Неблагоприятный",
          zh: "不利",
          ar: "معاكس"
        },
        sentence: {
          en: "Adverse effects.",
          fa: "اثرات نامطلوب.",
          fr: "Effets indésirables.",
          de: "Nachteilige Auswirkungen.",
          it: "Effetti avversi.",
          es: "Efectos adversos.",
          ru: "Неблагоприятные последствия.",
          zh: "不利影响。",
          ar: "آثار ضارة.",
          ko: "부작용."
        }
      },
      {
        id: "aesthetic",
        word: {
          en: "Aesthetic",
          fa: "زیبایی‌شناختی",
          fr: "Esthétique",
          de: "Ästhetisch",
          it: "Estetico",
          es: "Estético",
          ru: "Эстетический",
          zh: "美学",
          ar: "جمالي"
        },
        sentence: {
          en: "Aesthetic appeal.",
          fa: "جذابیت زیبایی شناختی.",
          fr: "Attrait esthétique.",
          de: "Ästhetischer Reiz.",
          it: "Fascino estetico.",
          es: "Atractivo estético.",
          ru: "Эстетическая привлекательность.",
          zh: "审美情趣。",
          ar: "جاذبية جمالية.",
          ko: "미적 매력."
        }
      },
      {
        id: "affluent",
        word: {
          en: "Affluent",
          fa: "ثروتمند/مرفه",
          fr: "Aisé",
          de: "Wohlhabend",
          it: "Abbiente",
          es: "Afluente",
          ru: "Богатый",
          zh: "富裕",
          ar: "غني"
        },
        sentence: {
          en: "Affluent society.",
          fa: "جامعه مرفه.",
          fr: "Société opulente.",
          de: "Wohlhabende Gesellschaft.",
          it: "Società benestante.",
          es: "Sociedad opulenta.",
          ru: "Богатое общество.",
          zh: "富裕社会。",
          ar: "مجتمع ثري.",
          ko: "부유한 사회."
        }
      },
      {
        id: "alleviate",
        word: {
          en: "Alleviate",
          fa: "تسکین دادن/کاستن",
          fr: "Alléger",
          de: "Lindern",
          it: "Alleviare",
          es: "Aliviar",
          ru: "Облегчать",
          zh: "减轻",
          ar: "خفّف"
        },
        sentence: {
          en: "Alleviate pain.",
          fa: "درد را تسکین بده.",
          fr: "Soulager la douleur.",
          de: "Schmerzen lindern.",
          it: "Alleviare il dolore.",
          es: "Aliviar el dolor.",
          ru: "Облегчить боль.",
          zh: "减轻疼痛。",
          ar: "خفف الألم.",
          ko: "통증을 완화하세요."
        }
      },
      {
        id: "allude",
        word: {
          en: "Allude",
          fa: "اشاره غیرمستقیم کردن",
          fr: "Faire allusion",
          de: "Andeuten",
          it: "Alludere",
          es: "Aludir",
          ru: "Намекать",
          zh: "暗示",
          ar: "أشار ضمناً"
        },
        sentence: {
          en: "Allude to facts.",
          fa: "به حقایق اشاره کن.",
          fr: "Faire allusion aux faits.",
          de: "Auf Fakten anspielen.",
          it: "Alludere ai fatti.",
          es: "Aludir a los hechos.",
          ru: "Ссылаться на факты.",
          zh: "暗指事实。",
          ar: "ألمح إلى الحقائق.",
          ko: "사실을 암시하다."
        }
      },
      {
        id: "ambivalent",
        word: {
          en: "Ambivalent",
          fa: "دوگانه/متناقض",
          fr: "Ambivalent",
          de: "Ambivalent",
          it: "Ambivalente",
          es: "Ambivalente",
          ru: "Амбивалентный",
          zh: "矛盾情绪",
          ar: "متضارب"
        },
        sentence: {
          en: "Ambivalent feelings.",
          fa: "احساسات متناقض.",
          fr: "Sentiments ambivalents.",
          de: "Ambivalente Gefühle.",
          it: "Sentimenti ambivalenti.",
          es: "Sentimientos ambivalentes.",
          ru: "Двойственные чувства.",
          zh: "矛盾的心情。",
          ar: "مشاريع متناقضة.",
          ko: "양면적인 감정."
        }
      },
      {
        id: "ameliorate",
        word: {
          en: "Ameliorate",
          fa: "بهبود بخشیدن",
          fr: "Améliorer",
          de: "Verbessern",
          it: "Migliorare",
          es: "Mejorar",
          ru: "Улучшать",
          zh: "改善",
          ar: "حسّن"
        },
        sentence: {
          en: "Ameliorate conditions.",
          fa: "شرایط را بهبود ببخش.",
          fr: "Améliorer les conditions.",
          de: "Bedingungen verbessern.",
          it: "Migliorare le condizioni.",
          es: "Mejorar las condiciones.",
          ru: "Улучшить условия.",
          zh: "改善状况。",
          ar: "حسن الظروف.",
          ko: "상황을 개선하세요."
        }
      },
      {
        id: "anachronism",
        word: {
          en: "Anachronism",
          fa: "ناجور زمانی/خارج از زمان",
          fr: "Anachronisme",
          de: "Anachronismus",
          it: "Anacronismo",
          es: "Anacronismo",
          ru: "Анахронизм",
          zh: "时代错误",
          ar: "لازماني"
        },
        sentence: {
          en: "Historical anachronism.",
          fa: "ناهمخوانی تاریخی.",
          fr: "Anachronisme historique.",
          de: "Historischer Anachronismus.",
          it: "Anacronismo storico.",
          es: "Anacronismo histórico.",
          ru: "Исторический анахронизм.",
          zh: "历史错乱。",
          ar: "مفارقة تاريخية.",
          ko: "시대착오."
        }
      },
      {
        id: "analogous",
        word: {
          en: "Analogous",
          fa: "مشابه/قابل قیاس",
          fr: "Analogique",
          de: "Analog",
          it: "Analogo",
          es: "Análogo",
          ru: "Аналогичный",
          zh: "类似",
          ar: "مماثل"
        },
        sentence: {
          en: "Analogous situation.",
          fa: "موقعیت مشابه.",
          fr: "Situation analogue.",
          de: "Analoge Situation.",
          it: "Situazione analoga.",
          es: "Situación análoga.",
          ru: "Аналогичная ситуация.",
          zh: "类似的情况。",
          ar: "موقف مماثل.",
          ko: "유사한 상황."
        }
      },
      {
        id: "anomaly",
        word: {
          en: "Anomaly",
          fa: "ناهنجاری/استثنا",
          fr: "Anomalie",
          de: "Anomalie",
          it: "Anomalia",
          es: "Anomalía",
          ru: "Аномалия",
          zh: "异常",
          ar: "شذوذ"
        },
        sentence: {
          en: "Statistical anomaly.",
          fa: "ناهنجاری آماری.",
          fr: "Anomalie statistique.",
          de: "Statistische Anomalie.",
          it: "Anomalia statistica.",
          es: "Anomalía estadística.",
          ru: "Статистическая аномалия.",
          zh: "统计异常。",
          ar: "شذوذ إحصائي.",
          ko: "통계적 이상."
        }
      },
      {
        id: "antagonize",
        word: {
          en: "Antagonize",
          fa: "دشمنی ایجاد کردن",
          fr: "S'aliéner",
          de: "Verfeinden",
          it: "Antagonizzare",
          es: "Antagonizar",
          ru: "Настраивать против",
          zh: "敌对",
          ar: "عادى"
        },
        sentence: {
          en: "Don't antagonize him.",
          fa: "با او دشمنی نکن.",
          fr: "Ne l'antagonise pas.",
          de: "Verfeinde dich nicht mit ihm.",
          it: "Non inimicartelo.",
          es: "No lo antagonices.",
          ru: "Не настраивай его против себя.",
          zh: "不要与他为敌。",
          ar: "لا تعاده.",
          ko: "그를 적대시하지 마세요."
        }
      },
      {
        id: "antithesis",
        word: {
          en: "Antithesis",
          fa: "متضاد کامل",
          fr: "Antithèse",
          de: "Gegensatz",
          it: "Antitesi",
          es: "Antítesis",
          ru: "Антитеза",
          zh: "对立",
          ar: "تضاد"
        },
        sentence: {
          en: "Complete antithesis.",
          fa: "تضاد کامل.",
          fr: "Antithèse complète.",
          de: "Völlige Antithese.",
          it: "Antitesi completa.",
          es: "Antítesis completa.",
          ru: "Полная противоположность.",
          zh: "完全对立。",
          ar: "نقيض كامل.",
          ko: "정반대."
        }
      },
      {
        id: "apathy",
        word: {
          en: "Apathy",
          fa: "بی‌تفاوتی",
          fr: "Apathie",
          de: "Apathie",
          it: "Apathia",
          es: "Apatía",
          ru: "Апатия",
          zh: "冷漠",
          ar: "لامبالاة"
        },
        sentence: {
          en: "Public apathy.",
          fa: "بی تفاوتی عمومی.",
          fr: "Apathie publique.",
          de: "Öffentliche Apathie.",
          it: "Apatia pubblica.",
          es: "Apatía pública.",
          ru: "Общественная апатия.",
          zh: "公众的冷漠。",
          ar: "لامبالاة عامة.",
          ko: "대중의 무관심."
        }
      },
      {
        id: "arbitrary",
        word: {
          en: "Arbitrary",
          fa: "خودسرانه/دل‌بخواهی",
          fr: "Arbitraire",
          de: "Beliebig",
          it: "Arbitrario",
          es: "Arbitrario",
          ru: "Произвольный",
          zh: "任意",
          ar: "تعسفي"
        },
        sentence: {
          en: "Arbitrary decision.",
          fa: "تصمیم خودسرانه.",
          fr: "Décision arbitraire.",
          de: "Willkürliche Entscheidung.",
          it: "Decisione arbitraria.",
          es: "Decisión arbitraria.",
          ru: "Произвольное решение.",
          zh: "任意决定。",
          ar: "قرار تعسفي.",
          ko: "임의적 결정."
        }
      },
      {
        id: "arcane",
        word: {
          en: "Arcane",
          fa: "رازآلود/مرموز",
          fr: "Arcanique",
          de: "Arkan",
          it: "Arcana",
          es: "Arcane",
          ru: "Тайный",
          zh: "神秘",
          ar: "غامض"
        },
        sentence: {
          en: "Arcane rituals.",
          fa: "آیین‌های محرمانه.",
          fr: "Rituels arcanes.",
          de: "Geheimnisvolle Rituale.",
          it: "Rituali arcani.",
          es: "Rituales arcanos.",
          ru: "Тайные ритуалы.",
          zh: "神秘的仪式。",
          ar: "طقوس غامضة.",
          ko: "신비한 의식."
        }
      },
      {
        id: "arduous",
        word: {
          en: "Arduous",
          fa: "سخت/دشوار",
          fr: "Ardu",
          de: "Mühsam",
          it: "Arduo",
          es: "Arduo",
          ru: "Тяжёлый",
          zh: "艰苦",
          ar: "شاق"
        },
        sentence: {
          en: "Arduous journey.",
          fa: "سفر دشوار.",
          fr: "Voyage ardu.",
          de: "Beschwerliche Reise.",
          it: "Viaggio arduo.",
          es: "Viaje arduo.",
          ru: "Трудное путешествие.",
          zh: "艰难的旅程。",
          ar: "رحلة شاقة.",
          ko: "힘든 여정."
        }
      },
      {
        id: "articulate",
        word: {
          en: "Articulate",
          fa: "بیان واضح کردن",
          fr: "Articuler",
          de: "Artikulieren",
          it: "Articolare",
          es: "Articular",
          ru: "Чётко выражать",
          zh: "清晰表达",
          ar: "نطق ببلاغة"
        },
        sentence: {
          en: "Articulate speaker.",
          fa: "سخنران فصیح.",
          fr: "Orateur articulé.",
          de: "Wortgewandter Redner.",
          it: "Oratore articolato.",
          es: "Orador articulado.",
          ru: "Членораздельный оратор.",
          zh: "口齿伶俐的演说家。",
          ar: "متحدث لبق.",
          ko: "조리 있는 연설가."
        }
      },
      {
        id: "ascendancy",
        word: {
          en: "Ascendancy",
          fa: "برتری/تسلط",
          fr: "Ascendant",
          de: "Vorherrschaft",
          it: "Ascendente",
          es: "Ascendencia",
          ru: "Господство",
          zh: "优势",
          ar: "سيادة"
        },
        sentence: {
          en: "Gain ascendancy.",
          fa: "تسلط پیدا کردن.",
          fr: "Gagner de l'ascendant.",
          de: "Vorherrschaft gewinnen.",
          it: "Guadagnare ascendente.",
          es: "Ganar ascendencia.",
          ru: "Завоевать господство.",
          zh: "占据优势。",
          ar: "اكتساب الهيمنة.",
          ko: "우위를 점하다."
        }
      },
      {
        id: "assuage",
        word: {
          en: "Assuage",
          fa: "تسکین دادن/آرام کردن",
          fr: "Apaiser",
          de: "Lindern",
          it: "Mitigare",
          es: "Mitigar",
          ru: "Смягчать",
          zh: "缓和",
          ar: "سكّن"
        },
        sentence: {
          en: "Assuage fears.",
          fa: "ترس‌ها را تسکین بده.",
          fr: "Apaiser les peurs.",
          de: "Ängste lindern.",
          it: "Placare le paure.",
          es: "Mitigar los miedos.",
          ru: "Успокоить страхи.",
          zh: "缓解恐惧。",
          ar: "هدء المخاوف.",
          ko: "두려움을 진정시키세요."
        }
      },
      {
        id: "audacious",
        word: {
          en: "Audacious",
          fa: "جسور/بی‌پروا",
          fr: "Audacieux",
          de: "Kühn",
          it: "Audace",
          es: "Audaz",
          ru: "Смелый",
          zh: "大胆",
          ar: "جريء"
        },
        sentence: {
          en: "Audacious plan.",
          fa: "طرح جسورانه.",
          fr: "Plan audacieux.",
          de: "Kühner Plan.",
          it: "Piano audace.",
          es: "Plan audaz.",
          ru: "Дерзкий план.",
          zh: "大胆的计划。",
          ar: "خطة جريئة.",
          ko: "대담한 계획."
        }
      },
      {
        id: "augment",
        word: {
          en: "Augment",
          fa: "افزایش دادن",
          fr: "Augmenter",
          de: "Erhöhen",
          it: "Aumentare",
          es: "Aumentar",
          ru: "Увеличивать",
          zh: "增加",
          ar: "زاد"
        },
        sentence: {
          en: "Augment income.",
          fa: "درآمد را افزایش بده.",
          fr: "Augmenter les revenus.",
          de: "Einkommen steigern.",
          it: "Aumentare il reddito.",
          es: "Aumentar los ingresos.",
          ru: "Увеличить доход.",
          zh: "增加收入。",
          ar: "زيادة الدخل.",
          ko: "수입을 늘리세요."
        }
      },
      {
        id: "austere",
        word: {
          en: "Austere",
          fa: "ساده و سخت‌گیر",
          fr: "Austère",
          de: "Streng",
          it: "Austero",
          es: "Austero",
          ru: "Суровый",
          zh: "简朴",
          ar: "زاهد"
        },
        sentence: {
          en: "Austere life.",
          fa: "زندگی ریاضت‌کشانه.",
          fr: "Vie austère.",
          de: "Entbehrungsreiches Leben.",
          it: "Vita austera.",
          es: "Vida austera.",
          ru: "Аскетичная жизнь.",
          zh: "简朴的生活。",
          ar: "حياة ة.",
          ko: "검소한 생활."
        }
      },
      {
        id: "authoritarian",
        word: {
          en: "Authoritarian",
          fa: "اقتدارگرا",
          fr: "Autoritaire",
          de: "Autoritär",
          it: "Autoritario",
          es: "Autoritario",
          ru: "Авторитарный",
          zh: "专制",
          ar: "سلطوي"
        },
        sentence: {
          en: "Authoritarian regime.",
          fa: "رژیم استبدادی.",
          fr: "Régime autoritaire.",
          de: "Autoritäres Regime.",
          it: "Regime autoritario.",
          es: "Régimen autoritario.",
          ru: "Авторитарный режим.",
          zh: "威权政权。",
          ar: "نظام استبدادي.",
          ko: "권위주의 정권."
        }
      },
      {
        id: "aversion",
        word: {
          en: "Aversion",
          fa: "نفرت/بیزاری",
          fr: "Aversion",
          de: "Abneigung",
          it: "Aversione",
          es: "Aversión",
          ru: "Отвращение",
          zh: "厌恶",
          ar: "نفور"
        },
        sentence: {
          en: "Strong aversion.",
          fa: "بیزاری شدید.",
          fr: "Forte aversion.",
          de: "Starke Abneigung.",
          it: "Forte avversione.",
          es: "Fuerte aversión.",
          ru: "Сильное отвращение.",
          zh: "强烈的厌恶。",
          ar: "نفور قوي.",
          ko: "강한 혐오."
        }
      },
      {
        id: "belie",
        word: {
          en: "Belie",
          fa: "رد کردن/مخفی کردن",
          fr: "Démentir",
          de: "Widerlegen",
          it: "Smentire",
          es: "Desmentir",
          ru: "Опровергать",
          zh: "掩饰",
          ar: "كذّب"
        },
        sentence: {
          en: "Belie the truth.",
          fa: "حقیقت را کتمان کن.",
          fr: "Démentir la vérité.",
          de: "Die Wahrheit lügen strafen.",
          it: "Smentire la verità.",
          es: "Desmentir la verdad.",
          ru: "Скрывать истину.",
          zh: "掩盖真相。",
          ar: "كذب الحقيقة.",
          ko: "진실을 숨기다."
        }
      },
      {
        id: "belligerent",
        word: {
          en: "Belligerent",
          fa: "جنگ‌طلب",
          fr: "Belliqueux",
          de: "Kriegslustig",
          it: "Bellicoso",
          es: "Beligerante",
          ru: "Воинственный",
          zh: "好战",
          ar: "محارب"
        },
        sentence: {
          en: "Belligerent attitude.",
          fa: "نگرش جنگ‌طلبانه.",
          fr: "Attitude belliqueuse.",
          de: "Kriegerische Haltung.",
          it: "Atteggiamento belligerante.",
          es: "Actitud beligerante.",
          ru: "Агрессивное отношение.",
          zh: "好战的态度。",
          ar: "موقف عدائي.",
          ko: "호전적인 태도."
        }
      },
      {
        id: "benevolent",
        word: {
          en: "Benevolent",
          fa: "نیکوکار/مهربان",
          fr: "Bienveillant",
          de: "Wohlwollend",
          it: "Benevolo",
          es: "Benévolo",
          ru: "Доброжелательный",
          zh: "仁慈",
          ar: "خيّر"
        },
        sentence: {
          en: "Benevolent leader.",
          fa: "رهبر خیرخواه.",
          fr: "Leader bienveillant.",
          de: "Wohlwollender Führer.",
          it: "Leader benevolo.",
          es: "Líder benevolente.",
          ru: "Доброжелательный лидер.",
          zh: "仁慈的领袖。",
          ar: "قائد خير.",
          ko: "자비로운 지도자."
        }
      },
      {
        id: "bequeath",
        word: {
          en: "Bequeath",
          fa: "به ارث گذاشتن",
          fr: "Léguer",
          de: "Vermachen",
          it: "Lasciare in eredità",
          es: "Legar",
          ru: "Завещать",
          zh: "遗赠",
          ar: "أوصى"
        },
        sentence: {
          en: "Bequeath property.",
          fa: "اموال را وصیت کن.",
          fr: "Léguer des biens.",
          de: "Eigentum vererben.",
          it: "Lasciare in eredità proprietà.",
          es: "Legar propiedades.",
          ru: "Завещать имущество.",
          zh: "遗赠财产。",
          ar: "ورث الممتلكات.",
          ko: "재산을 물려주다."
        }
      },
      {
        id: "berate",
        word: {
          en: "Berate",
          fa: "سرزنش شدید کردن",
          fr: "Réprimander",
          de: "Schelten",
          it: "Rimproverare",
          es: "Reprender",
          ru: "Ругать",
          zh: "斥责",
          ar: "وبّخ بشدة"
        },
        sentence: {
          en: "Berate the employee.",
          fa: "کارمند را شماتت کن.",
          fr: "Réprimander l'employé.",
          de: "Den Mitarbeiter beschimpfen.",
          it: "Rimproverare il dipendente.",
          es: "Regañar al empleado.",
          ru: "Ругать сотрудника.",
          zh: "斥责员工。",
          ar: "وبخ الموظف.",
          ko: "직원을 꾸짖으세요."
        }
      },
      {
        id: "blatant",
        word: {
          en: "Blatant",
          fa: "آشکار/وقیحه",
          fr: "Éhonté",
          de: "Offensichtlich",
          it: "Sfacciato",
          es: "Descarado",
          ru: "Явный",
          zh: "公然",
          ar: "صارخ"
        },
        sentence: {
          en: "Blatant lie.",
          fa: "دروغ آشکار.",
          fr: "Mensonge flagrant.",
          de: "Offensichtliche Lüge.",
          it: "Bugia palese.",
          es: "Mentira flagrante.",
          ru: "Наглая ложь.",
          zh: "公然的谎言。",
          ar: "كذبة صارخة.",
          ko: "노골적인 거짓말."
        }
      },
      {
        id: "bolster",
        word: {
          en: "Bolster",
          fa: "تقویت کردن/حمایت",
          fr: "Soutenir",
          de: "Stützen",
          it: "Rafforzare",
          es: "Reforzar",
          ru: "Поддерживать",
          zh: "支持",
          ar: "دعم"
        },
        sentence: {
          en: "Bolster confidence.",
          fa: "اعتماد به نفس را تقویت کن.",
          fr: "Renforcer la confiance.",
          de: "Das Selbstvertrauen stärken.",
          it: "Rafforzare la fiducia.",
          es: "Reforzar la confianza.",
          ru: "Укрепить уверенность.",
          zh: "增强信心。",
          ar: "عزز الثقة.",
          ko: "자신감을 북돋우세요."
        }
      },
      {
        id: "bombastic",
        word: {
          en: "Bombastic",
          fa: "پرطمطراق/خالی‌بند",
          fr: "Ampoulé",
          de: "Schwülstig",
          it: "Pomposo",
          es: "Grandilocuente",
          ru: "Пафосный",
          zh: "浮夸",
          ar: "مبالغ"
        },
        sentence: {
          en: "Bombastic speech.",
          fa: "سخنرانی پرطمطراق.",
          fr: "Discours grandiloquent.",
          de: "Schwülstige Rede.",
          it: "Discorso ampolloso.",
          es: "Discurso grandilocuente.",
          ru: "Напыщенная речь.",
          zh: "夸夸其谈的演讲。",
          ar: "خطاب طنان.",
          ko: "호언장담하는 연설."
        }
      },
      {
        id: "boorish",
        word: {
          en: "Boorish",
          fa: "بی‌ادب/دهاتی",
          fr: "Grossier",
          de: "Flegelhaft",
          it: "Maleducato",
          es: "Grosero",
          ru: "Грубый",
          zh: "粗鲁",
          ar: "فظ"
        },
        sentence: {
          en: "Boorish behavior.",
          fa: "رفتار بی ادبانه.",
          fr: "Comportement grossier.",
          de: "Flegelhaftes Verhalten.",
          it: "Comportamento rozzo.",
          es: "Comportamiento grosero.",
          ru: "Хамское поведение.",
          zh: "粗鲁的行为。",
          ar: "سلوك فظ.",
          ko: "천박한 행동."
        }
      },
      {
        id: "burgeon",
        word: {
          en: "Burgeon",
          fa: "شکوفا شدن/رشد سریع",
          fr: "Éclore",
          de: "Sprießen",
          it: "Fiorire",
          es: "Brotar",
          ru: "Бурно расти",
          zh: "迅速生长",
          ar: "نما بسرعة"
        },
        sentence: {
          en: "Burgeoning industry.",
          fa: "صنعت رو به رشد.",
          fr: "Industrie naissante.",
          de: "Aufkeimende Industrie.",
          it: "Industria fiorente.",
          es: "Industria floreciente.",
          ru: "Растущая индустрия.",
          zh: "新兴产业。",
          ar: "صناعة مزدهرة.",
          ko: "급성장하는 산업."
        }
      },
      {
        id: "buttress",
        word: {
          en: "Buttress",
          fa: "پشتیبان/تکیه‌گاه",
          fr: "Contrefort",
          de: "Strebepfeiler",
          it: "Contrafforte",
          es: "Contrafuerte",
          ru: "Подпорка",
          zh: "支柱",
          ar: "دعامة"
        },
        sentence: {
          en: "Buttress the argument.",
          fa: "استدلال را محکم کن.",
          fr: "Étayer l'argument.",
          de: "Das Argument untermauern.",
          it: "Sostenere l'argomento.",
          es: "Respaldar el argumento.",
          ru: "Подкрепить аргумент.",
          zh: "支持论点。",
          ar: "ادعم الحجة.",
          ko: "주장을 지지하다."
        }
      },
      {
        id: "cacophony",
        word: {
          en: "Cacophony",
          fa: "صدای ناهنجار",
          fr: "Cacophonie",
          de: "Kakophonie",
          it: "Cacofonia",
          es: "Cacofonía",
          ru: "Какофония",
          zh: "刺耳噪音",
          ar: "ضجيج"
        },
        sentence: {
          en: "Loud cacophony.",
          fa: "سروصدا ناهنجار.",
          fr: "Cacophonie bruyante.",
          de: "Laute Kakophonie.",
          it: "Forte cacofonia.",
          es: "Fuerte cacofonía.",
          ru: "Громкая какaфония.",
          zh: "刺耳的嘈杂声。",
          ar: "تنافر أصوات عالي.",
          ko: "시끄러운 불협화음."
        }
      },
      {
        id: "capricious",
        word: {
          en: "Capricious",
          fa: "دمدمی/بی‌ثبات",
          fr: "Capricieux",
          de: "Launenhaft",
          it: "Capriccioso",
          es: "Caprichoso",
          ru: "Капризный",
          zh: "反复无常",
          ar: "متقلب"
        },
        sentence: {
          en: "Capricious nature.",
          fa: "ماهیت دمدمی مزاج.",
          fr: "Nature capricieuse.",
          de: "Launische Natur.",
          it: "Natura capricciosa.",
          es: "Naturaleza caprichosa.",
          ru: "Капризный характер.",
          zh: "反复无常的本性。",
          ar: "طبيعة متقلبة.",
          ko: "변덕스러운 성격."
        }
      },
      {
        id: "castigate",
        word: {
          en: "Castigate",
          fa: "تنبیه شدید کردن",
          fr: "Châtier",
          de: "Züchtigen",
          it: "Castigare",
          es: "Castigar",
          ru: "Сурово наказывать",
          zh: "严厉惩罚",
          ar: "عاقب"
        },
        sentence: {
          en: "Castigate the wrongdoer.",
          fa: "خطاکار را تنبیه کن.",
          fr: "Châtier le malfaiteur.",
          de: "Den Übeltäter züchtigen.",
          it: "Castigare il malfattore.",
          es: "Castigar al malhechor.",
          ru: "Наказать правонарушителя.",
          zh: "严惩做错事的人。",
          ar: "عاقب المخطئ.",
          ko: "범법자를 비난하세요."
        }
      },
      {
        id: "catalyst",
        word: {
          en: "Catalyst",
          fa: "کاتالیزور/محرک",
          fr: "Catalyseur",
          de: "Katalysator",
          it: "Catalizzatore",
          es: "Catalizador",
          ru: "Катализатор",
          zh: "催化剂",
          ar: "محفّز"
        },
        sentence: {
          en: "Catalyst for change.",
          fa: "کاتالیزوری برای تغییر.",
          fr: "Catalyseur de changement.",
          de: "Katalysator für Veränderungen.",
          it: "Catalizzatore di cambiamento.",
          es: "Catalizador del cambio.",
          ru: "Катализатор перемен.",
          zh: "变革的催化剂。",
          ar: "حافز للتغيير.",
          ko: "변화의 촉매제."
        }
      },
      {
        id: "caustic",
        word: {
          en: "Caustic",
          fa: "گزنده/سوزان",
          fr: "Caustique",
          de: "Ätzend",
          it: "Caustico",
          es: "Cáustico",
          ru: "Едкий",
          zh: "刻薄",
          ar: "لاذع"
        },
        sentence: {
          en: "Caustic remark.",
          fa: "اظهار نظر تند و زننده.",
          fr: "Remarque caustique.",
          de: "Bissige Bemerkung.",
          it: "Osservazione caustica.",
          es: "Comentario cáustico.",
          ru: "Едкое замечание.",
          zh: "刻薄的话。",
          ar: "ملاحظة لاذعة.",
          ko: "신랄한 발언."
        }
      },
      {
        id: "censure",
        word: {
          en: "Censure",
          fa: "سرزنش رسمی",
          fr: "Censure",
          de: "Tadel",
          it: "Censura",
          es: "Censura",
          ru: "Порицание",
          zh: "谴责",
          ar: "لوم"
        },
        sentence: {
          en: "Vote of censure.",
          fa: "رای عدم اعتماد.",
          fr: "Motion de censure.",
          de: "Misstrauensvotum.",
          it: "Voto di censura.",
          es: "Voto de censura.",
          ru: "Вотум недоверия.",
          zh: "不信任票。",
          ar: "تصويت اللوم.",
          ko: "불신임 투표."
        }
      },
      {
        id: "chicanery",
        word: {
          en: "Chicanery",
          fa: "فریبکاری/کلک",
          fr: "Chicane",
          de: "Schikane",
          it: "Sofisma",
          es: "Argucia",
          ru: "Крючкотворство",
          zh: "狡诈",
          ar: "خداع"
        },
        sentence: {
          en: "Political chicanery.",
          fa: "حیله‌گری سیاسی.",
          fr: "Chicanerie politique.",
          de: "Politische Schikane.",
          it: "Chicane politica.",
          es: "Chicanería política.",
          ru: "Политическое крючкотворство.",
          zh: "政治欺诈。",
          ar: "خداع سياسي.",
          ko: "정치적 속임수."
        }
      },
      {
        id: "coerce",
        word: {
          en: "Coerce",
          fa: "اجبار کردن",
          fr: "Contraindre",
          de: "Zwingen",
          it: "Costringere",
          es: "Coaccionar",
          ru: "Принуждать",
          zh: "强迫",
          ar: "أجبر"
        },
        sentence: {
          en: "Coerce into signing.",
          fa: "مجبور کردن به امضا.",
          fr: "Contraindre à signer.",
          de: "Zum Unterschreiben zwingen.",
          it: "Costringere a firmare.",
          es: "Coaccionar para firmar.",
          ru: "Принудить к подписанию.",
          zh: "强迫签字。",
          ar: "أجبر على التوقيع.",
          ko: "서명하도록 강요하다."
        }
      },
      {
        id: "cogent",
        word: {
          en: "Cogent",
          fa: "منطقی و قانع‌کننده",
          fr: "Pertinent",
          de: "Überzeugend",
          it: "Cogente",
          es: "Convincente",
          ru: "Убедительный",
          zh: "有说服力",
          ar: "مقنع"
        },
        sentence: {
          en: "Cogent argument.",
          fa: "استدلال متقاعد کننده.",
          fr: "Argument convaincant.",
          de: "Überzeugendes Argument.",
          it: "Argomento convincente.",
          es: "Argumento convincente.",
          ru: "Убедительный аргумент.",
          zh: "令人信服的论点。",
          ar: "حجة مقنعة.",
          ko: "설득력 있는 주장."
        }
      },
      {
        id: "collusion",
        word: {
          en: "Collusion",
          fa: "تبانی/هم‌دستی",
          fr: "Collusion",
          de: "Kollusion",
          it: "Collusione",
          es: "Colusión",
          ru: "Сговор",
          zh: "勾结",
          ar: "تواطؤ"
        },
        sentence: {
          en: "In collusion with.",
          fa: "در تبانی با.",
          fr: "En collusion avec.",
          de: "In geheimer Absprache mit.",
          it: "In collusione con.",
          es: "En colusión con.",
          ru: "В сговоре с.",
          zh: "与...勾结。",
          ar: "بالتواطؤ مع.",
          ko: "와 공모하여."
        }
      },
      {
        id: "complacent",
        word: {
          en: "Complacent",
          fa: "خود راضی/راحت‌طلب",
          fr: "Complaisant",
          de: "Selbstzufrieden",
          it: "Compiaciuto",
          es: "Complaciente",
          ru: "Самодовольный",
          zh: "自满",
          ar: "مغرور"
        },
        sentence: {
          en: "Complacent attitude.",
          fa: "نگرش از خود راضی.",
          fr: "Attitude complaisante.",
          de: "Selbstgefällige Haltung.",
          it: "Atteggiamento compiacente.",
          es: "Actitud complaciente.",
          ru: "Самодовольное отношение.",
          zh: "自满的态度。",
          ar: "موقف راض عن النفس.",
          ko: "현실에 안주하는 태도."
        }
      },
      {
        id: "conflagration",
        word: {
          en: "Conflagration",
          fa: "آتش‌سوزی عظیم",
          fr: "Conflagration",
          de: "Feuersbrunst",
          it: "Conflagrazione",
          es: "Conflagración",
          ru: "Пожар",
          zh: "大火",
          ar: "حريق هائل"
        },
        sentence: {
          en: "Major conflagration.",
          fa: "آتش سوزی بزرگ.",
          fr: "Conflagration majeure.",
          de: "Großbrand.",
          it: "Grande conflagrazione.",
          es: "Gran conflagración.",
          ru: "Крупный пожар.",
          zh: "大火。",
          ar: "حريق هائل.",
          ko: "대형 화재."
        }
      },
      {
        id: "confound",
        word: {
          en: "Confound",
          fa: "گیج کردن/مخلوط کردن",
          fr: "Confondre",
          de: "Verwechseln",
          it: "Confondere",
          es: "Confundir",
          ru: "Смущать",
          zh: "使困惑",
          ar: "أربك"
        },
        sentence: {
          en: "Confound the critics.",
          fa: "منتقدان را گیج کن.",
          fr: "Confondre les critiques.",
          de: "Die Kritiker verblüffen.",
          it: "Confondere i critici.",
          es: "Confundir a los críticos.",
          ru: "Сбить с толку критиков.",
          zh: "让评论家感到困惑。",
          ar: "أربك النقاد.",
          ko: "비평가들을 당황하게 하세요."
        }
      },
      {
        id: "connoisseur",
        word: {
          en: "Connoisseur",
          fa: "خبره/کارشناس",
          fr: "Connaisseur",
          de: "Kenner",
          it: "Conoscitore",
          es: "Conocedor",
          ru: "Знаток",
          zh: "鉴赏家",
          ar: "خبير"
        },
        sentence: {
          en: "Art connoisseur.",
          fa: "خبره هنر.",
          fr: "Connaisseur d'art.",
          de: "Kunstkenner.",
          it: "Intenditore d'arte.",
          es: "Conocedor de arte.",
          ru: "Знаток искусства.",
          zh: "艺术鉴赏家。",
          ar: "خبير فني.",
          ko: "예술 감정가."
        }
      },
      {
        id: "contemptuous",
        word: {
          en: "Contemptuous",
          fa: "تحقیرآمیز",
          fr: "Méprisant",
          de: "Verächtlich",
          it: "Sdegnoso",
          es: "Despectivo",
          ru: "Презрительный",
          zh: "轻蔑",
          ar: "محتقر"
        },
        sentence: {
          en: "Contemptuous look.",
          fa: "نگاه تحقیرآمیز.",
          fr: "Regard méprisant.",
          de: "Verächtlicher Blick.",
          it: "Sguardo sprezzante.",
          es: "Mirada despectiva.",
          ru: "Презрительный взгляд.",
          zh: "轻蔑的眼神。",
          ar: "نظرة محتقرة.",
          ko: "경멸하는 표정."
        }
      },
      {
        id: "contentious",
        word: {
          en: "Contentious",
          fa: "جنجالی/مورد اختلاف",
          fr: "Controversé",
          de: "Streitlustig",
          it: "Contenzioso",
          es: "Contencioso",
          ru: "Спорный",
          zh: "有争议",
          ar: "جدلي"
        },
        sentence: {
          en: "Contentious issue.",
          fa: "موضوع بحث برانگیز.",
          fr: "Question litigieuse.",
          de: "Strittige Frage.",
          it: "Questione controversa.",
          es: "Cuestión contenciosa.",
          ru: "Спорный вопрос.",
          zh: "有争议的问题。",
          ar: "قضية خلافية.",
          ko: "논쟁의 여지가 있는 문제."
        }
      },
      {
        id: "contrite",
        word: {
          en: "Contrite",
          fa: "پشیمان/ندامت‌زده",
          fr: "Contrit",
          de: "Reumütig",
          it: "Contrito",
          es: "Contrito",
          ru: "Раскаявшийся",
          zh: "悔悟",
          ar: "نادم"
        },
        sentence: {
          en: "Contrite apology.",
          fa: "عذرخواهی پشیمان‌کننده.",
          fr: "Excuse contrite.",
          de: "Reumütige Entschuldigung.",
          it: "Scusa contrita.",
          es: "Disculpa contrita.",
          ru: "Раскаянное извинение.",
          zh: "懊悔的道歉。",
          ar: "اعتذار نادم.",
          ko: "뉘우치는 사과."
        }
      },
      {
        id: "conundrum",
        word: {
          en: "Conundrum",
          fa: "معما/سوال پیچیده",
          fr: "Énigme",
          de: "Rätsel",
          it: "Enigma",
          es: "Enigma",
          ru: "Загадка",
          zh: "难题",
          ar: "لغز"
        },
        sentence: {
          en: "Solve the conundrum.",
          fa: "معما را حل کن.",
          fr: "Résoudre l'énigme.",
          de: "Das Rätsel lösen.",
          it: "Risolvere l'enigma.",
          es: "Resolver el enigma.",
          ru: "Решить головоломку.",
          zh: "解决难题。",
          ar: "حل اللغز.",
          ko: "수수께끼를 푸세요."
        }
      },
      {
        id: "conviction",
        word: {
          en: "Conviction",
          fa: "اعتقاد راسخ/محکومیت",
          fr: "Conviction",
          de: "Überzeugung",
          it: "Convinzione",
          es: "Convicción",
          ru: "Убеждённость",
          zh: "定罪/信念",
          ar: "إدانة/قناعة"
        },
        sentence: {
          en: "Strong conviction.",
          fa: "اعتقاد راسخ.",
          fr: "Forte conviction.",
          de: "Starke Überzeugung.",
          it: "Forte convinzione.",
          es: "Fuerte convicción.",
          ru: "Твердое убеждение.",
          zh: "坚定的信念。",
          ar: "قناعة قوية.",
          ko: "강한 확신."
        }
      },
      {
        id: "credulous",
        word: {
          en: "Credulous",
          fa: "زودباور",
          fr: "Crédule",
          de: "Leichtgläubig",
          it: "Credulone",
          es: "Crédulo",
          ru: "Доверчивый",
          zh: "轻信",
          ar: "ساذج"
        },
        sentence: {
          en: "Credulous people.",
          fa: "افراد زودباور.",
          fr: "Gens crédules.",
          de: "Leichtgläubige Menschen.",
          it: "Gente credulona.",
          es: "Gente crédula.",
          ru: "Доверчивые люди.",
          zh: "轻信的人。",
          ar: "أناس سذج.",
          ko: "잘 믿는 사람들."
        }
      },
      {
        id: "cynical",
        word: {
          en: "Cynical",
          fa: "بدبین/تمسخرآمیز",
          fr: "Cynique",
          de: "Zynisch",
          it: "Cinico",
          es: "Cínico",
          ru: "Циничный",
          zh: "愤世嫉俗",
          ar: "ساخر"
        },
        sentence: {
          en: "Cynical view.",
          fa: "دیدگاه بدبینانه.",
          fr: "Vue cynique.",
          de: "Zynische Ansicht.",
          it: "Visione cinica.",
          es: "Visión cínica.",
          ru: "Циничный взгляд.",
          zh: "愤世嫉俗的观点。",
          ar: "نظرة ساخرة.",
          ko: "냉소적인 견해."
        }
      },
      {
        id: "debilitate",
        word: {
          en: "Debilitate",
          fa: "ضعیف کردن",
          fr: "Débilitante",
          de: "Schwächen",
          it: "Debilitare",
          es: "Debilitar",
          ru: "Ослаблять",
          zh: "使衰弱",
          ar: "أضعف"
        },
        sentence: {
          en: "Debilitating disease.",
          fa: "بیماری ناتوان‌کننده.",
          fr: "Maladie débilitante.",
          de: "Schwächende Krankheit.",
          it: "Malattia debilitante.",
          es: "Enfermedad debilitante.",
          ru: "Изнуряющая болезнь.",
          zh: "使人衰弱的疾病。",
          ar: "مرض موهن.",
          ko: "쇠약하게 하는 질병."
        }
      },
      {
        id: "decadence",
        word: {
          en: "Decadence",
          fa: "انحطاط/فساد",
          fr: "Décadence",
          de: "Dekadenz",
          it: "Decadenza",
          es: "Decadencia",
          ru: "Упадок",
          zh: "颓废",
          ar: "انحلال"
        },
        sentence: {
          en: "Moral decadence.",
          fa: "انحطاط اخلاقی.",
          fr: "Décadence morale.",
          de: "Moralischer Verfall.",
          it: "Decadenza morale.",
          es: "Decadencia moral.",
          ru: "Моральный упадок.",
          zh: "道德沦丧。",
          ar: "انحطاط أخلاقي.",
          ko: "도덕적 타락."
        }
      },
      {
        id: "deference",
        word: {
          en: "Deference",
          fa: "احترام/تعظیم",
          fr: "Déférence",
          de: "Ehrerbietung",
          it: "Deferenza",
          es: "Deferencia",
          ru: "Уважение",
          zh: "敬意",
          ar: "إجلال"
        },
        sentence: {
          en: "Show deference.",
          fa: "احترام گذاشتن.",
          fr: "Montrer de la déférence.",
          de: "Ehrerbietung zeigen.",
          it: "Mostrare deferenza.",
          es: "Mostrar deferencia.",
          ru: "Проявить почтение.",
          zh: "表示尊重。",
          ar: "أظهر الاحترام.",
          ko: "존경을 표하세요."
        }
      },
      {
        id: "delineate",
        word: {
          en: "Delineate",
          fa: "ترسیم کردن/توصیف دقیق",
          fr: "Délinéer",
          de: "Umreißen",
          it: "Delineare",
          es: "Delinear",
          ru: "Очерчивать",
          zh: "勾画",
          ar: "رسم حدود"
        },
        sentence: {
          en: "Delineate the boundary.",
          fa: "مرز را ترسیم کن.",
          fr: "Délimiter la frontière.",
          de: "Die Grenze abgrenzen.",
          it: "Delineare il confine.",
          es: "Delinear el límite.",
          ru: "Очертить границу.",
          zh: "划定界限。",
          ar: "رسم الحدود.",
          ko: "경계를 묘사하다."
        }
      },
      {
        id: "denigrate",
        word: {
          en: "Denigrate",
          fa: "تخطئه کردن/سیاه‌نمایی",
          fr: "Dénigrer",
          de: "Verunglimpfen",
          it: "Denigrare",
          es: "Denigrar",
          ru: "Очернять",
          zh: "诋毁",
          ar: "شوّه سمعة"
        },
        sentence: {
          en: "Denigrate his efforts.",
          fa: "تلاش‌های او را بدنام کن.",
          fr: "Dénigrer ses efforts.",
          de: "Seine Bemühungen verunglimpfen.",
          it: "Denigrare i suoi sforzi.",
          es: "Denigrar sus esfuerzos.",
          ru: "Очернить его усилия.",
          zh: "诋毁他的努力。",
          ar: "شوه جهوده.",
          ko: "그의 노력을 폄하고 하다."
        }
      },
      {
        id: "deride",
        word: {
          en: "Deride",
          fa: "مسخره کردن",
          fr: "Railler",
          de: "Verspotten",
          it: "Deridere",
          es: "Burlarse",
          ru: "Высмеивать",
          zh: "嘲笑",
          ar: "سخر"
        },
        sentence: {
          en: "Deride the idea.",
          fa: "ایده را مسخره کن.",
          fr: "Tourner en dérision l'idée.",
          de: "Die Idee verspotten.",
          it: "Deridere l'idea.",
          es: "Burlarse de la idea.",
          ru: "Высмеять идею.",
          zh: "嘲笑这个主意。",
          ar: "سخر من الفكرة.",
          ko: "아이디어를 조롱하다."
        }
      },
      {
        id: "derivative",
        word: {
          en: "Derivative",
          fa: "تقلیدی/مشتق",
          fr: "Dérivé",
          de: "Abgeleitet",
          it: "Derivato",
          es: "Derivado",
          ru: "Производный",
          zh: "派生",
          ar: "مشتق"
        },
        sentence: {
          en: "Derivative work.",
          fa: "اثر اقتباسی.",
          fr: "Œuvre dérivée.",
          de: "Abgeleitetes Werk.",
          it: "Opera derivata.",
          es: "Obra derivada.",
          ru: "Производная работа.",
          zh: "衍生作品。",
          ar: "عمل مشتق.",
          ko: "파생 작품."
        }
      },
      {
        id: "despot",
        word: {
          en: "Despot",
          fa: "حاکم مستبد",
          fr: "Despote",
          de: "Despot",
          it: "Despota",
          es: "Déspota",
          ru: "Деспот",
          zh: "暴君",
          ar: "مستبد"
        },
        sentence: {
          en: "Cruel despot.",
          fa: "حاکم ظالم.",
          fr: "Despote cruel.",
          de: "Grausamer Despot.",
          it: "Despota crudele.",
          es: "Déspota cruel.",
          ru: "Жестокий деспот.",
          zh: "残暴的暴君。",
          ar: "مستبد قاسي.",
          ko: "잔인한 폭군."
        }
      },
      {
        id: "diatribe",
        word: {
          en: "Diatribe",
          fa: "سخنرانی تند و انتقادی",
          fr: "Diatribe",
          de: "Schmährede",
          it: "Diatriba",
          es: "Diatriba",
          ru: "Инвектива",
          zh: "抨击",
          ar: "هجاء"
        },
        sentence: {
          en: "Angry diatribe.",
          fa: "هجو عصبانی.",
          fr: "Diatribe en colère.",
          de: "Wütende Diatribe.",
          it: "Diatriba rabbiosa.",
          es: "Diatriba airada.",
          ru: "Гневная диатриба.",
          zh: "愤怒的抨击。",
          ar: "هجاء غاضب.",
          ko: "분노의 통렬한 비난."
        }
      },
      {
        id: "didactic",
        word: {
          en: "Didactic",
          fa: "آموزنده/موعظه‌گو",
          fr: "Didactique",
          de: "Lehrhaft",
          it: "Didattico",
          es: "Didáctico",
          ru: "Поучительный",
          zh: "教诲",
          ar: "تعليمي"
        },
        sentence: {
          en: "Didactic tone.",
          fa: "لحن آموزشی.",
          fr: "Ton didactique.",
          de: "Didaktischer Ton.",
          it: "Tono didattico.",
          es: "Tono didáctico.",
          ru: "Назидательный тон.",
          zh: "说教的语气。",
          ar: "نبرة تعليمية.",
          ko: "교훈적인 어조."
        }
      },
      {
        id: "diffident",
        word: {
          en: "Diffident",
          fa: "کم‌رو/بی‌اعتماد",
          fr: "Timide",
          de: "Schüchtern",
          it: "Diffidente",
          es: "Tímido",
          ru: "Robкий",
          zh: "缺乏自信",
          ar: "خجول"
        },
        sentence: {
          en: "Diffident student.",
          fa: "دانش آموز کم‌رو.",
          fr: "Étudiant diffident.",
          de: "Schüchterner Schüler.",
          it: "Studente diffidente.",
          es: "Estudiante tímido.",
          ru: "Неуверенный студент.",
          zh: "缺乏自信的学生。",
          ar: "طالب خجول.",
          ko: "자신감 없는 학생."
        }
      },
      {
        id: "dilatory",
        word: {
          en: "Dilatory",
          fa: "کند/تأخیرانداز",
          fr: "Dilatoire",
          de: "Aufschiebend",
          it: "Dilatorio",
          es: "Dilatorio",
          ru: "Медлительный",
          zh: "拖延",
          ar: "مماطل"
        },
        sentence: {
          en: "Dilatory tactics.",
          fa: "تاکتیک‌های تاخیری.",
          fr: "Tactiques dilatoires.",
          de: "Verzögerungstaktiken.",
          it: "Tattiche dilatorie.",
          es: "Tácticas dilatorias.",
          ru: "Медлительная тактика.",
          zh: "拖延战术。",
          ar: "تكتيكات التسويف.",
          ko: "지연 전술."
        }
      },
      {
        id: "disabuse",
        word: {
          en: "Disabuse",
          fa: "از اشتباه درآوردن",
          fr: "Détromper",
          de: "Aufklären",
          it: "Disilludere",
          es: "Desengañar",
          ru: "Разуверять",
          zh: "纠正错误观念",
          ar: "صحّح خطأ"
        },
        sentence: {
          en: "Disabuse him of that idea.",
          fa: "او را از آن فکر در بیاور.",
          fr: "Le détromper de cette idée.",
          de: "Ihn von dieser Idee abbringen.",
          it: "Disilluderlo da quell'idea.",
          es: "Desengañarlo de esa idea.",
          ru: "Разубедить его в этой идее.",
          zh: "消除他的那种想法。",
          ar: "حرره من تلك الفكرة.",
          ko: "그의 잘못된 생각을 바로잡아주세요."
        }
      },
      {
        id: "disconcert",
        word: {
          en: "Disconcert",
          fa: "پریشان کردن/برهم زدن",
          fr: "Déconcerter",
          de: "Verunsichern",
          it: "Sconcertare",
          es: "Desconcertar",
          ru: "Смущать",
          zh: "使不安",
          ar: "أربك"
        },
        sentence: {
          en: "Disconcert the audience.",
          fa: "مخاطب را دستپاچه کن.",
          fr: "Déconcerter le public.",
          de: "Das Publikum verunsichern.",
          it: "Sconcertare il pubblico.",
          es: "Desconcertar al público.",
          ru: "Смутить аудиторию.",
          zh: "让观众感到不安。",
          ar: "أربك الجمهور.",
          ko: "청중을 당황하게 하세요."
        }
      },
      {
        id: "discredit",
        word: {
          en: "Discredit",
          fa: "بی‌اعتبار کردن",
          fr: "Discréditer",
          de: "Diskreditieren",
          it: "Screditare",
          es: "Desacreditar",
          ru: "Дискредитировать",
          zh: "败坏名声",
          ar: "شوّه سمعة"
        },
        sentence: {
          en: "Discredit the witness.",
          fa: "شاهد را بی اعتبار کن.",
          fr: "Discréditer le témoin.",
          de: "Den Zeugen diskreditieren.",
          it: "Screditare il testimone.",
          es: "Desacreditar al testigo.",
          ru: "Дискредитировать свидетеля.",
          zh: "败坏证人的名声。",
          ar: "شوه سمعة الشاهد.",
          ko: "증인의 신용을 떨어뜨리세요."
        }
      },
      {
        id: "discrepancy",
        word: {
          en: "Discrepancy",
          fa: "تناقض/عدم تطابق",
          fr: "Écart",
          de: "Abweichung",
          it: "Discrepanze",
          es: "Discrepancia",
          ru: "Расхождение",
          zh: "差异",
          ar: "تباين"
        },
        sentence: {
          en: "Huge discrepancy.",
          fa: "تفاوت فاحش.",
          fr: "Énorme divergence.",
          de: "Große Diskrepanz.",
          it: "Enorme discrepanza.",
          es: "Enorme discrepancia.",
          ru: "Огромное несоответствие.",
          zh: "巨大的差异。",
          ar: "تناقض كبير.",
          ko: "큰 차이."
        }
      },
      {
        id: "disdain",
        word: {
          en: "Disdain",
          fa: "تحقیر/بی‌اعتنایی",
          fr: "Dé dain",
          de: "Verachtung",
          it: "Disdegno",
          es: "Desdén",
          ru: "Пренебрежение",
          zh: "鄙视",
          ar: "احتقار"
        },
        sentence: {
          en: "Treat with disdain.",
          fa: "با تحقیر رفتار کن.",
          fr: "Traiter avec dédain.",
          de: "Mit Verachtung behandeln.",
          it: "Trattare con disprezzo.",
          es: "Tratar con desdén.",
          ru: "Относиться с презрением.",
          zh: "蔑视对待。",
          ar: "عامل بازدراء.",
          ko: "경멸하다."
        }
      },
      {
        id: "disparage",
        word: {
          en: "Disparage",
          fa: "تحقیر کردن/کوچک شمردن",
          fr: "Déprécier",
          de: "Herabsetzen",
          it: "Sprezzare",
          es: "Denigrar",
          ru: "Принижать",
          zh: "贬低",
          ar: "حقّر"
        },
        sentence: {
          en: "Disparage his work.",
          fa: "کار او را تحقیر کن.",
          fr: "Dénigrer son travail.",
          de: "Seine Arbeit herabwürdigen.",
          it: "Disprezzare il suo lavoro.",
          es: "Menospreciar su trabajo.",
          ru: "Уничижать его работу.",
          zh: "诋毁他的工作。",
          ar: "استخف بعمله.",
          ko: "그의 일을 폄하하다."
        }
      },
      {
        id: "dispassionate",
        word: {
          en: "Dispassionate",
          fa: "بی‌طرف/خونسرد",
          fr: "Impartial",
          de: "Unparteiisch",
          it: "Imparziale",
          es: "Imparcial",
          ru: "Беспристрастный",
          zh: "冷静",
          ar: "محايد"
        },
        sentence: {
          en: "Dispassionate observer.",
          fa: "ناظر بی‌طرف.",
          fr: "Observateur impartial.",
          de: "Leidenschaftsloser Beobachter.",
          it: "Osservatore spassionato.",
          es: "Observador desapasionado.",
          ru: "Беспристрастный наблюдатель.",
          zh: "冷静的观察者。",
          ar: "مراقبة محايد.",
          ko: "냉정한 관찰자."
        }
      },
      {
        id: "disperse",
        word: {
          en: "Disperse",
          fa: "پراکنده کردن",
          fr: "Disperser",
          de: "Zerstreuen",
          it: "Disperdere",
          es: "Dispersar",
          ru: "Рассеивать",
          zh: "分散",
          ar: "شتّت"
        },
        sentence: {
          en: "Disperse the crowd.",
          fa: "جمعیت را پراکنده کن.",
          fr: "Disperser la foule.",
          de: "Die Menge zerstreuen.",
          it: "Disperdere la folla.",
          es: "Dispersar a la multitud.",
          ru: "Разогнать толпу.",
          zh: "驱散人群。",
          ar: "فرق الحشد.",
          ko: "군중을 해산시키세요."
        }
      },
      {
        id: "disquiet",
        word: {
          en: "Disquiet",
          fa: "نگرانی/اضطراب",
          fr: "Inquiétude",
          de: "Unruhe",
          it: "Inquietudine",
          es: "Inquietud",
          ru: "Беспокойство",
          zh: "不安",
          ar: "قلق"
        },
        sentence: {
          en: "Cause disquiet.",
          fa: "ایجاد ناآرامی.",
          fr: "Causer de l'inquiétude.",
          de: "Unruhe stiften.",
          it: "Causare inquietudine.",
          es: "Causar inquietud.",
          ru: "Вызывать беспокойство.",
          zh: "引起不安。",
          ar: "سبب القلق.",
          ko: "불안을 야기하다."
        }
      },
      {
        id: "dissemble",
        word: {
          en: "Dissemble",
          fa: "تظاهر کردن/پنهان‌کاری",
          fr: "Dissimuler",
          de: "Verhehlen",
          it: "Dissimulare",
          es: "Disimular",
          ru: "Скрывать",
          zh: "掩饰",
          ar: "تظاهر"
        },
        sentence: {
          en: "Dissemble your feelings.",
          fa: "احساساتت را پنهان کن.",
          fr: "Dissimuler tes sentiments.",
          de: "Deine Gefühle verbergen.",
          it: "Dissimulare i tuoi sentimenti.",
          es: "Disimular tus sentimientos.",
          ru: "Скрывать свои чувства.",
          zh: "掩饰你的感情。",
          ar: "أخف مشاعرك.",
          ko: "감정을 숨기세요."
        }
      },
      {
        id: "disseminate",
        word: {
          en: "Disseminate",
          fa: "پخش کردن/اشاعه دادن",
          fr: "Diffuser",
          de: "Verbreiten",
          it: "Disseminare",
          es: "Diseminar",
          ru: "Распространять",
          zh: "传播",
          ar: "نشر"
        },
        sentence: {
          en: "Disseminate information.",
          fa: "اطلاعات را منتشر کن.",
          fr: "Diffuser l'information.",
          de: "Informationen verbreiten.",
          it: "Disseminare informazioni.",
          es: "Difundir información.",
          ru: "Распространять информацию.",
          zh: "传播信息。",
          ar: "انشر المعلومات.",
          ko: "정보를 퍼뜨리세요."
        }
      },
      {
        id: "dissonance",
        word: {
          en: "Dissonance",
          fa: "ناهماهنگی/عدم سازگاری",
          fr: "Dissonance",
          de: "Dissonanz",
          it: "Dissonanza",
          es: "Disonancia",
          ru: "Диссонанс",
          zh: "不和谐",
          ar: "تنافر"
        },
        sentence: {
          en: "Cognitive dissonance.",
          fa: "ناهماهنگی شناختی.",
          fr: "Dissonance cognitive.",
          de: "Kognitive Dissonanz.",
          it: "Dissonanza cognitiva.",
          es: "Disonancia cognitiva.",
          ru: "Когнитивный диссонанс.",
          zh: "认知失调。",
          ar: "تنافر معرفي.",
          ko: "인지 부조화."
        }
      },
      {
        id: "diverge",
        word: {
          en: "Diverge",
          fa: "منشعب شدن/متفاوت بودن",
          fr: "Diverger",
          de: "Abweichen",
          it: "Divergere",
          es: "Divergir",
          ru: "Расходиться",
          zh: "分歧",
          ar: "تباعد"
        },
        sentence: {
          en: "Paths diverge.",
          fa: "مسیرها از هم جدا می‌شوند.",
          fr: "Les chemins divergent.",
          de: "Wege trennen sich.",
          it: "I percorsi divergono.",
          es: "Los caminos divergen.",
          ru: "Пути расходятся.",
          zh: "分道扬镳。",
          ar: "تتفرع المسارات.",
          ko: "길이 갈라지다."
        }
      },
      {
        id: "divest",
        word: {
          en: "Divest",
          fa: "محروم کردن/عریان کردن",
          fr: "Dépouiller",
          de: "Entkleiden",
          it: "Spogliare",
          es: "Despojar",
          ru: "Лишать",
          zh: "剥夺",
          ar: "جرد"
        },
        sentence: {
          en: "Divest assets.",
          fa: "واگذاری دارایی‌ها.",
          fr: "Céder des actifs.",
          de: "Vermögenswerte veräußern.",
          it: "Dismettere attività.",
          es: "Deshacerse de activos.",
          ru: "Лишить активов.",
          zh: "剥离资产。",
          ar: "تجريد الأصول.",
          ko: "자산을 매각하다."
        }
      },
      {
        id: "divulge",
        word: {
          en: "Divulge",
          fa: "فاش کردن",
          fr: "Divulguer",
          de: "Preisgeben",
          it: "Divulgare",
          es: "Divulgar",
          ru: "Разглашать",
          zh: "泄露",
          ar: "أفشى"
        },
        sentence: {
          en: "Divulge secrets.",
          fa: "اسرار را فاش کن.",
          fr: "Divulguer des secrets.",
          de: "Geheimnisse preisgeben.",
          it: "Divulgare segreti.",
          es: "Divulgar secretos.",
          ru: "Разглашать секреты.",
          zh: "泄露秘密。",
          ar: "أفش الأسرار.",
          ko: "비밀을 누설하다."
        }
      },
      {
        id: "dogmatic",
        word: {
          en: "Dogmatic",
          fa: "جزم‌اندیش/تعصبی",
          fr: "Dogmatique",
          de: "Dogmatisch",
          it: "Dogmatico",
          es: "Dogmático",
          ru: "Догматичный",
          zh: "教条",
          ar: "دوغمائي"
        },
        sentence: {
          en: "Dogmatic approach.",
          fa: "رویکرد متعصبانه.",
          fr: "Approche dogmatique.",
          de: "Dogmatischer Ansatz.",
          it: "Approccio dogmatico.",
          es: "Enfoque dogmático.",
          ru: "Догматический подход.",
          zh: "教条的方法。",
          ar: "نهج عقائدي.",
          ko: "독단적인 접근."
        }
      },
      {
        id: "dormant",
        word: {
          en: "Dormant",
          fa: "خفته/غیرفعال",
          fr: "Dormant",
          de: "Ruhend",
          it: "Dormiente",
          es: "Latente",
          ru: "Спящий",
          zh: "休眠",
          ar: "كامن"
        },
        sentence: {
          en: "Dormant volcano.",
          fa: "آتشفشان خاموش.",
          fr: "Volcan endormi.",
          de: "Ruhender Vulkan.",
          it: "Vulcano dormiente.",
          es: "Volcán inactivo.",
          ru: "Спящий вулкан.",
          zh: "休眠火山。",
          ar: "بركان خامل.",
          ko: "휴화산."
        }
      },
      {
        id: "duplicity",
        word: {
          en: "Duplicity",
          fa: "دورویی/نیرنگ",
          fr: "Duplicité",
          de: "Doppezüngigkeit",
          it: "Duplicità",
          es: "Duplicidad",
          ru: "Двуличие",
          zh: "口是心非",
          ar: "نفاق"
        },
        sentence: {
          en: "Expose his duplicity.",
          fa: "دورویی او را فاش کن.",
          fr: "Exposer sa duplicité.",
          de: "Seine Doppelzüngigkeit aufdecken.",
          it: "Smascherare la sua duplicità.",
          es: "Exponer su duplicidad.",
          ru: "Разоблачить его двуличие.",
          zh: "揭露他的两面派。",
          ar: "اكشف نفاقه.",
          ko: "그의 이중성을 폭로하세요."
        }
      },
      {
        id: "ebullient",
        word: {
          en: "Ebullient",
          fa: "سرزنده/جوشان",
          fr: "Ébullient",
          de: "Überschwänglich",
          it: "Esuberante",
          es: "Efusivo",
          ru: "Бурный",
          zh: "热情洋溢",
          ar: "متحمّس"
        },
        sentence: {
          en: "Ebullient personality.",
          fa: "شخصیت پرشور.",
          fr: "Personnalité exubérante.",
          de: "Überschwängliche Persönlichkeit.",
          it: "Personalità esuberante.",
          es: "Personalidad ebullente.",
          ru: "Кипучая личность.",
          zh: "热情洋溢的个性。",
          ar: "شخصية فوارة.",
          ko: "넘치는 열정."
        }
      },
      {
        id: "eclectic",
        word: {
          en: "Eclectic",
          fa: "گزینشی/ترکیبی",
          fr: "Éclectique",
          de: "Eklektisch",
          it: "Eclettico",
          es: "Ecléctico",
          ru: "Эклектичный",
          zh: "折衷",
          ar: "انتقائي"
        },
        sentence: {
          en: "Eclectic taste.",
          fa: "سلیقه متنوع.",
          fr: "Goût éclectique.",
          de: "Eklektischer Geschmack.",
          it: "Gusto eclettico.",
          es: "Gusto ecléctico.",
          ru: "Эклектичный вкус.",
          zh: "兼收并蓄的口味。",
          ar: "ذوق انتقائي.",
          ko: "절충적인 취향."
        }
      },
      {
        id: "efficacy",
        word: {
          en: "Efficacy",
          fa: "کارایی/اثربخشی",
          fr: "Efficacité",
          de: "Wirksamkeit",
          it: "Efficacia",
          es: "Eficacia",
          ru: "Эффективность",
          zh: "功效",
          ar: "فعالية"
        },
        sentence: {
          en: "Prove efficacy.",
          fa: "اثربخشی را ثابت کن.",
          fr: "Prouver l'efficacité.",
          de: "Wirksamkeit beweisen.",
          it: "Dimostrare l'efficacia.",
          es: "Probar la eficacia.",
          ru: "Доказать эффективность.",
          zh: "证明功效。",
          ar: "أثبت الفعالية.",
          ko: "효능을 증명하다."
        }
      },
      {
        id: "effrontery",
        word: {
          en: "Effrontery",
          fa: "وقاحت/پررویی",
          fr: "Effronterie",
          de: "Dreistigkeit",
          it: "Sfacciataggine",
          es: "Desfachatez",
          ru: "Наглость",
          zh: "厚颜无耻",
          ar: "وقاحة"
        },
        sentence: {
          en: "She had the effrontery.",
          fa: "او گستاخی داشت.",
          fr: "Elle a eu l'effronterie.",
          de: "Sie hatte die Frechheit.",
          it: "Ha avuto la sfrontatezza.",
          es: "Ella tuvo el descaro.",
          ru: "У нее хватило наглости.",
          zh: "她竟然厚颜无耻。",
          ar: "كانت لديها الوقاحة.",
          ko: "그녀는 뻔뻔스러웠다."
        }
      },
      {
        id: "elegy",
        word: {
          en: "Elegy",
          fa: "مرثیه/سوگ‌سرود",
          fr: "Élégie",
          de: "Elegie",
          it: "Elegia",
          es: "Elegía",
          ru: "Элегия",
          zh: "挽歌",
          ar: "رثاء"
        },
        sentence: {
          en: "Sad elegy.",
          fa: "مرثیه غمگین.",
          fr: "Élégie triste.",
          de: "Traurige Elegie.",
          it: "Elegia triste.",
          es: "Elegía triste.",
          ru: "Печальная элегия.",
          zh: "悲伤的挽歌。",
          ar: "رثاء حزين.",
          ko: "슬픈 비가."
        }
      },
      {
        id: "elicit",
        word: {
          en: "Elicit",
          fa: "به دست آوردن/استخراج",
          fr: "Éliciter",
          de: "Hervorlocken",
          it: "Elicitare",
          es: "Ellicitar",
          ru: "Вызывать",
          zh: "引出",
          ar: "استخلص"
        },
        sentence: {
          en: "Elicit a response.",
          fa: "پاسخی را برانگیز.",
          fr: "Susciter une réponse.",
          de: "Eine Antwort entlocken.",
          it: "Suscitare una risposta.",
          es: "Provocar una respuesta.",
          ru: "Вызвать ответ.",
          zh: "引出回应。",
          ar: "استنبط استجابة.",
          ko: "반응을 이끌어내다."
        }
      },
      {
        id: "eloquent",
        word: {
          en: "Eloquent",
          fa: "فصیح/بلندپایه",
          fr: "Éloquent",
          de: "Redegewandt",
          it: "Eloquente",
          es: "Elocuente",
          ru: "Красноречивый",
          zh: "雄辩",
          ar: "بليغ"
        },
        sentence: {
          en: "Eloquent speech.",
          fa: "سخنرانی فصیح.",
          fr: "Discours éloquent.",
          de: "Eloquente Rede.",
          it: "Discorso eloquente.",
          es: "Discurso elocuente.",
          ru: "Красноречивая речь.",
          zh: "雄辩的演讲。",
          ar: "خطاب بليغ.",
          ko: "웅변적인 연설."
        }
      },
      {
        id: "embellish",
        word: {
          en: "Embellish",
          fa: "آراستن/زیباسازی",
          fr: "Embellir",
          de: "Verschönern",
          it: "Abbellire",
          es: "Embellecer",
          ru: "Украшать",
          zh: "修饰",
          ar: "زيّن"
        },
        sentence: {
          en: "Embellish the story.",
          fa: "داستان را پر و بال بده.",
          fr: "Embellir l'histoire.",
          de: "Die Geschichte ausschmücken.",
          it: "Abbellire la storia.",
          es: "Embellecer la historia.",
          ru: "Приукрасить историю.",
          zh: "润色故事。",
          ar: "زخرف القصة.",
          ko: "이야기를 꾸미세요."
        }
      },
      {
        id: "emulate",
        word: {
          en: "Emulate",
          fa: "رقابت کردن/تقلید",
          fr: "Émuler",
          de: "Nachahmen",
          it: "Emulare",
          es: "Emular",
          ru: "Подражать",
          zh: "仿效",
          ar: "حاكى"
        },
        sentence: {
          en: "Emulate success.",
          fa: "از موفقیت الگوبرداری کن.",
          fr: "Émuler le succès.",
          de: "Erfolg nachahmen.",
          it: "Emulare il successo.",
          es: "Emular el éxito.",
          ru: "Подражать успеху.",
          zh: "效仿成功。",
          ar: "حاكي النجاح.",
          ko: "성공을 모방하다."
        }
      },
      {
        id: "enervate",
        word: {
          en: "Enervate",
          fa: "ضعیف کردن/بی‌حال کردن",
          fr: "Énerver",
          de: "Entkräften",
          it: "Snervare",
          es: "Enervar",
          ru: "Обессиливать",
          zh: "使衰弱",
          ar: "أضعف"
        },
        sentence: {
          en: "The heat enervated him.",
          fa: "گرما او را ضعیف کرد.",
          fr: "La chaleur l'a énervé (weakened).",
          de: "Die Hitze entkräftete ihn.",
          it: "Il caldo lo snervava.",
          es: "El calor lo enervó.",
          ru: "Жара обессилила его.",
          zh: "高温让他感到无力。",
          ar: "الحرارة أضعفته.",
          ko: "더위가 그를 무기력하게 만들었다."
        }
      },
      {
        id: "engender",
        word: {
          en: "Engender",
          fa: "به وجود آوردن/ایجاد",
          fr: "Engendrer",
          de: "Erzeugen",
          it: "Generare",
          es: "Engendrar",
          ru: "Порождать",
          zh: "产生",
          ar: "ولّد"
        },
        sentence: {
          en: "Engender trust.",
          fa: "اعتماد ایجاد کن.",
          fr: "Engendrer la confiance.",
          de: "Vertrauen erzeugen.",
          it: "Generare fiducia.",
          es: "Engendrar confianza.",
          ru: "Порождать доверие.",
          zh: "产生信任。",
          ar: "ولد الثقة.",
          ko: "신뢰를 낳다."
        }
      },
      {
        id: "enhance",
        word: {
          en: "Enhance",
          fa: "ارتقا دادن/بهبود",
          fr: "Améliorer",
          de: "Verbessern",
          it: "Migliorare",
          es: "Mejorar",
          ru: "Усиливать",
          zh: "增强",
          ar: "عزّز"
        },
        sentence: {
          en: "Enhance performance.",
          fa: "عملکرد را ارتقا بده.",
          fr: "Améliorer la performance.",
          de: "Leistung steigern.",
          it: "Migliorare le prestazioni.",
          es: "Mejorar el rendimiento.",
          ru: "Улучшить производительность.",
          zh: "提高性能。",
          ar: "عزز الأداء.",
          ko: "성능을 향상시키세요."
        }
      },
      {
        id: "enigma",
        word: {
          en: "Enigma",
          fa: "معما/راز",
          fr: "Énigme",
          de: "Rätsel",
          it: "Enigma",
          es: "Enigma",
          ru: "Загадка",
          zh: "谜",
          ar: "لغز"
        },
        sentence: {
          en: "Complete enigma.",
          fa: "معمای کامل.",
          fr: "Énigme complète.",
          de: "Völliges Rätsel.",
          it: "Enigma completo.",
          es: "Enigma completo.",
          ru: "Полная загадка.",
          zh: "完全的谜。",
          ar: "لغز كامل.",
          ko: "완전한 수수께끼."
        }
      },
      {
        id: "ephemeral",
        word: {
          en: "Ephemeral",
          fa: "کوتاه‌مدت/گذرا",
          fr: "Éphémère",
          de: "Vergänglich",
          it: "Effimero",
          es: "Efímero",
          ru: "Эфемерный",
          zh: "短暂",
          ar: "زائل"
        },
        sentence: {
          en: "Ephemeral beauty.",
          fa: "زیبایی زودگذر.",
          fr: "Beauté éphémère.",
          de: "Vergängliche Schönheit.",
          it: "Bellezza effimera.",
          es: "Belleza efímera.",
          ru: "Эфемерная красота.",
          zh: "短暂的美。",
          ar: "جمال زائل.",
          ko: "덧없는 아름다움."
        }
      },
      {
        id: "equanimity",
        word: {
          en: "Equanimity",
          fa: "آرامش/خونسردی",
          fr: "Équanimité",
          de: "Gleichmut",
          it: "Equanimità",
          es: "Ecuanimidad",
          ru: "Спокойствие",
          zh: "平静",
          ar: "اتزان"
        },
        sentence: {
          en: "Accept with equanimity.",
          fa: "با خونسردی بپذیر.",
          fr: "Accepter avec équanimité.",
          de: "Mit Gelassenheit hinnehmen.",
          it: "Accettare con equanimità.",
          es: "Aceptar con ecuanimidad.",
          ru: "Принять с хладнокровием.",
          zh: "泰然处之。",
          ar: "تقبل برباطة جأش.",
          ko: "침착하게 받아들이세요."
        }
      },
      {
        id: "equivocate",
        word: {
          en: "Equivocate",
          fa: "دو پهلو صحبت کردن",
          fr: "Équivoquer",
          de: "Doppelsinnig reden",
          it: "Equivocare",
          es: "Equivocar",
          ru: "Говорить двусмысленно",
          zh: "含糊其辞",
          ar: "لجأ إلى اللبس"
        },
        sentence: {
          en: "Don't equivocate.",
          fa: "دوپهلو حرف نزن.",
          fr: "Ne pas équivoquer.",
          de: "Weiche nicht aus.",
          it: "Non equivocare.",
          es: "No equivoques.",
          ru: "Не увиливай.",
          zh: "不要模棱两可。",
          ar: "لا تراوغ.",
          ko: "얼버무리지 마세요."
        }
      },
      {
        id: "erudite",
        word: {
          en: "Erudite",
          fa: "دانشمند/فاضل",
          fr: "Érudit",
          de: "Gelehrt",
          it: "Erudito",
          es: "Erudito",
          ru: "Эрудированный",
          zh: "博学",
          ar: "عالم"
        },
        sentence: {
          en: "Erudite scholar.",
          fa: "دانشمند فاضل.",
          fr: "Savant érudit.",
          de: "Gelehrter.",
          it: "Studioso erudito.",
          es: "Erudito.",
          ru: "Эрудированный ученый.",
          zh: "博学者。",
          ar: "عالم متبحر.",
          ko: "박식한 학자."
        }
      },
      {
        id: "esoteric",
        word: {
          en: "Esoteric",
          fa: "مخفی/درونی",
          fr: "Ésotérique",
          de: "Esoterisch",
          it: "Esoterico",
          es: "Esotérico",
          ru: "Эзотерический",
          zh: "秘传",
          ar: "باطني"
        },
        sentence: {
          en: "Esoteric knowledge.",
          fa: "دانش محرمانه.",
          fr: "Connaissance ésotérique.",
          de: "Geheimwissen.",
          it: "Conoscenza esoterica.",
          es: "Conocimiento esotérico.",
          ru: "Эзотерическое знание.",
          zh: "深奥的知识。",
          ar: "معرفة باطنية.",
          ko: "난해한 지식."
        }
      },
      {
        id: "eulogy",
        word: {
          en: "Eulogy",
          fa: "سخن ستایش‌آمیز",
          fr: "Éloge",
          de: "Lobrede",
          it: "Elogio",
          es: "Elogio",
          ru: "Панегирик",
          zh: "颂词",
          ar: "مديح"
        },
        sentence: {
          en: "Give a eulogy.",
          fa: "مدح گفتن.",
          fr: "Faire un éloge.",
          de: "Eine Grabrede halten.",
          it: "Fare un elogio.",
          es: "Hacer un elogio.",
          ru: "Произнести панегирик.",
          zh: "致悼词。",
          ar: "ألق تأبينا.",
          ko: "추도사를 하다."
        }
      },
      {
        id: "exacerbate",
        word: {
          en: "Exacerbate",
          fa: "تشدید کردن/بدتر کردن",
          fr: "Exacerber",
          de: "Verschlimmern",
          it: "Esacerbare",
          es: "Exacerbar",
          ru: "Обострять",
          zh: "恶化",
          ar: "فاقم"
        },
        sentence: {
          en: "Exacerbate the problem.",
          fa: "مشکل را بدتر کن.",
          fr: "Exacerber le problème.",
          de: "Das Problem verschärfen.",
          it: "Esacerbare il problema.",
          es: "Exacerbar el problema.",
          ru: "Обострить проблему.",
          zh: "加剧问题。",
          ar: "فاقم المشكلة.",
          ko: "문제를 악화시키다."
        }
      },
      {
        id: "exculpate",
        word: {
          en: "Exculpate",
          fa: "تبرئه کردن",
          fr: "Exculper",
          de: "Entlasten",
          it: "Discolpare",
          es: "Exculpar",
          ru: "Оправдывать",
          zh: "开脱",
          ar: "برّأ"
        },
        sentence: {
          en: "Exculpate the defendant.",
          fa: "متهم را تبرئه کن.",
          fr: "Disculper le défendeur.",
          de: "Den Angeklagten entlasten.",
          it: "Scagionare l'imputato.",
          es: "Exculpar al acusado.",
          ru: "Оправдать подсудимого.",
          zh: "开脱被告。",
          ar: "برئ المدعى عليه.",
          ko: "피고인을 무죄로 하다."
        }
      },
      {
        id: "exigent",
        word: {
          en: "Exigent",
          fa: "فوری/سخت‌گیر",
          fr: "Exigeant",
          de: "Dringend",
          it: "Esigente",
          es: "Exigente",
          ru: "Требовательный",
          zh: "紧急",
          ar: "ملح"
        },
        sentence: {
          en: "Exigent circumstances.",
          fa: "شرایط اضطراری.",
          fr: "Circonstances exigeantes.",
          de: "Dringende Umstände.",
          it: "Circostanze esigenti.",
          es: "Circunstancias exigentes.",
          ru: "Критические обстоятельства.",
          zh: "紧急情况。",
          ar: "ظروف ملحة.",
          ko: "긴급한 상황."
        }
      },
      {
        id: "exonerate",
        word: {
          en: "Exonerate",
          fa: "تبرئه کردن/معاف کردن",
          fr: "Exonérer",
          de: "Entlasten",
          it: "Esonerare",
          es: "Exonerar",
          ru: "Оправдывать",
          zh: "免除责任",
          ar: "برّأ"
        },
        sentence: {
          en: "Exonerate from blame.",
          fa: "از تقصیر تبرئه کن.",
          fr: "Exonérer de tout blâme.",
          de: "Von Schuld freisprechen.",
          it: "Esonerare dalla colpa.",
          es: "Exonerar de culpa.",
          ru: "Освободить от вины.",
          zh: "免除责备。",
          ar: "برئ من اللوم.",
          ko: "비난에서 면제하다."
        }
      },
      {
        id: "expatiate",
        word: {
          en: "Expatiate",
          fa: "به تفصیل سخن گفتن",
          fr: "S'étendre",
          de: "Sich auslassen",
          it: "Dilungarsi",
          es: "Extenderse",
          ru: "Распространяться",
          zh: "详述",
          ar: "توسّع في الكلام"
        },
        sentence: {
          en: "Expatiate on the topic.",
          fa: "در مورد موضوع به تفصیل شرح بده.",
          fr: "Disserter sur le sujet.",
          de: "Über das Thema referieren.",
          it: "Dilungarsi sull'argomento.",
          es: "Explayarse sobre el tema.",
          ru: "Рассуждать на тему.",
          zh: "详述这个话题。",
          ar: "أسهب في الموضوع.",
          ko: "주제에 대해 상세히 설명하세요."
        }
      },
      {
        id: "expedient",
        word: {
          en: "Expedient",
          fa: "مصلحت‌آمیز/مناسب",
          fr: "Opportun",
          de: "Zweckmäßig",
          it: "Opportuno",
          es: "Conveniente",
          ru: "Целесообразный",
          zh: "权宜之计",
          ar: "مناسب للظرف"
        },
        sentence: {
          en: "Politically expedient.",
          fa: "مصلحت سیاسی.",
          fr: "Politiquement opportun.",
          de: "Politisch zweckmäßig.",
          it: "Politicamente opportuno.",
          es: "Políticamente conveniente.",
          ru: "Политически целесообразно.",
          zh: "政治上的权宜之计。",
          ar: "ملائم سياسيا.",
          ko: "정치적으로 편리한."
        }
      },
      {
        id: "expiate",
        word: {
          en: "Expiate",
          fa: "کفاره دادن",
          fr: "Expirer",
          de: "Sühnen",
          it: "Espiare",
          es: "Expiar",
          ru: "Искупать",
          zh: "赎罪",
          ar: "كفّر عن"
        },
        sentence: {
          en: "Expiate his sins.",
          fa: "گناهانش را جبران کن.",
          fr: "Expier ses péchés.",
          de: "Seine Sünden büßen.",
          it: "Espiare i suoi peccati.",
          es: "Expiar sus pecados.",
          ru: "Искупить грехи.",
          zh: "赎罪。",
          ar: "كفر عن خطاياه.",
          ko: "그의 죄를 속죄하다."
        }
      },
      {
        id: "extant",
        word: {
          en: "Extant",
          fa: "موجود/باقی‌مانده",
          fr: "Existant",
          de: "Vorhanden",
          it: "Esistente",
          es: "Existente",
          ru: "Существующий",
          zh: "现存",
          ar: "موجود"
        },
        sentence: {
          en: "Extant manuscripts.",
          fa: "نسخه‌های خطی موجود.",
          fr: "Manuscrits existants.",
          de: "Vorhandene Manuskripte.",
          it: "Manoscritti esistenti.",
          es: "Manuscritos existentes.",
          ru: "Сохранившиеся рукописи.",
          zh: "现存的手稿。",
          ar: "مخطوطات موجودة.",
          ko: "현존하는 원고."
        }
      },
      {
        id: "extenuating",
        word: {
          en: "Extenuating",
          fa: "تخفیف‌دهنده",
          fr: "Atténuant",
          de: "Mildernd",
          it: "Attenuante",
          es: "Atenuante",
          ru: "Смягчающий",
          zh: "情有可原",
          ar: "مخفف"
        },
        sentence: {
          en: "Extenuating circumstances.",
          fa: "شرایط تخفیف دهنده.",
          fr: "Circonstances atténuantes.",
          de: "Mildernde Umstände.",
          it: "Circostanze attenuanti.",
          es: "Circunstancias atenuantes.",
          ru: "Смягчающие обстоятельства.",
          zh: "情有可原的情况。",
          ar: "ظروف مخففة.",
          ko: "정상 참작이 가능한 상황."
        }
      },
      {
        id: "extraneous",
        word: {
          en: "Extraneous",
          fa: "بی‌ربط/خارجی",
          fr: "Étranger",
          de: "Fremd",
          it: "Estraneo",
          es: "Extraño",
          ru: "Посторонний",
          zh: "无关",
          ar: "غريب"
        },
        sentence: {
          en: "Extraneous information.",
          fa: "اطلاعات اضافی.",
          fr: "Informations étrangères.",
          de: "Belanglose Informationen.",
          it: "Informazioni estranee.",
          es: "Información extraña.",
          ru: "Посторонняя информация.",
          zh: "无关信息。",
          ar: "معلومات غريبة.",
          ko: "관련 없는 정보."
        }
      },
      {
        id: "extricate",
        word: {
          en: "Extricate",
          fa: "رها کردن/نجات دادن",
          fr: "Dégager",
          de: "Befreien",
          it: "Estrarre",
          es: "Libertar",
          ru: "Высвобождать",
          zh: "解脱",
          ar: "خلّص"
        },
        sentence: {
          en: "Extricate from danger.",
          fa: "از خطر رهایی یافتن.",
          fr: "S'extirper du danger.",
          de: "Sich aus der Gefahr befreien.",
          it: "Districarsi dal pericolo.",
          es: "Librarse del peligro.",
          ru: "Выпутаться из опасности.",
          zh: "摆脱危险。",
          ar: "تخلص من الخطر.",
          ko: "위험에서 구하다."
        }
      },
      {
        id: "exuberant",
        word: {
          en: "Exuberant",
          fa: "سرزنده/پرشور",
          fr: "Exubérant",
          de: "Üppig",
          it: "Esuberante",
          es: "Exuberante",
          ru: "Бурный",
          zh: "热情洋溢",
          ar: "مفعم بالحيوية"
        },
        sentence: {
          en: "Exuberant joy.",
          fa: "شادی وصف ناپذیر.",
          fr: "Joie exubérante.",
          de: "Überschwängliche Freude.",
          it: "Gioia esuberante.",
          es: "Alegría exuberante.",
          ru: "Бурная радость.",
          zh: "兴高采烈。",
          ar: "فرح غامر.",
          ko: "넘치는 기쁨."
        }
      },
      {
        id: "facile",
        word: {
          en: "Facile",
          fa: "ساده‌لوحانه/آسان",
          fr: "Facile",
          de: "Leichtfertig",
          it: "Facile",
          es: "Fácil",
          ru: "Лёгкий",
          zh: "轻率",
          ar: "سطحي"
        },
        sentence: {
          en: "Facile victory.",
          fa: "پیروزی آسان.",
          fr: "Victoire facile.",
          de: "Leichter Sieg.",
          it: "Vittoria facile.",
          es: "Victoria fácil.",
          ru: "Легкая победа.",
          zh: "轻易的胜利。",
          ar: "انتصار سهل.",
          ko: "손쉬운 승리."
        }
      },
      {
        id: "fallacious",
        word: {
          en: "Fallacious",
          fa: "غلط/فریبنده",
          fr: "Fallacieux",
          de: "Trügerisch",
          it: "Fallace",
          es: "Falaz",
          ru: "Ложный",
          zh: "谬误",
          ar: "مغلط"
        },
        sentence: {
          en: "Fallacious reasoning.",
          fa: "استدلال غلط.",
          fr: "Raisonnement fallacieux.",
          de: "Trügerische Argumentation.",
          it: "Ragionamento fallace.",
          es: "Razonamiento falaz.",
          ru: "Ошибочное рассуждение.",
          zh: "谬误的推理。",
          ar: "استدلال مغلوط.",
          ko: "잘못된 추론."
        }
      },
      {
        id: "fastidious",
        word: {
          en: "Fastidious",
          fa: "دقیق/حساس",
          fr: "Difficile",
          de: "Pingelig",
          it: "Schizzinoso",
          es: "Fastidioso",
          ru: "Привередливый",
          zh: "挑剔",
          ar: "دقيق جداً"
        },
        sentence: {
          en: "Fastidious about detail.",
          fa: "وسواسی در جزئیات.",
          fr: "Fastidieux sur les détails.",
          de: "Wählerisch im Detail.",
          it: "Fastidioso per i dettagli.",
          es: "Fastidioso con los detalles.",
          ru: "Привередливый к деталям.",
          zh: "对细节一丝不苟。",
          ar: "دقيق في التفاصيل.",
          ko: "세세한 것에 까다로운."
        }
      },
      {
        id: "fathom",
        word: {
          en: "Fathom",
          fa: "درک کردن/سنجیدن",
          fr: "Sonder",
          de: "Ergründen",
          it: "Scrutare",
          es: "Sondear",
          ru: "Постигать",
          zh: "理解",
          ar: "أدرك"
        },
        sentence: {
          en: "Hard to fathom.",
          fa: "درکش سخت است.",
          fr: "Difficile à comprendre.",
          de: "Schwer zu ergründen.",
          it: "Difficile da comprendere.",
          es: "Difícil de entender.",
          ru: "Трудно постичь.",
          zh: "难以捉摸。",
          ar: "من الصعب فهمه.",
          ko: "헤아리기 어렵다."
        }
      },
      {
        id: "fatuous",
        word: {
          en: "Fatuous",
          fa: "احمقانه/بی‌معنی",
          fr: "Fatu",
          de: "Albern",
          it: "Fatuo",
          es: "Fatuo",
          ru: "Глупый",
          zh: "愚蠢",
          ar: "أحمق"
        },
        sentence: {
          en: "Fatuous remark.",
          fa: "اظهار نظر احمقانه.",
          fr: "Remarque fatueuse.",
          de: "Alberne Bemerkung.",
          it: "Osservazione fatua.",
          es: "Observación fatua.",
          ru: "Глупое замечание.",
          zh: "愚蠢的话。",
          ar: "ملاحظة حمقاء.",
          ko: "어리석은 발언."
        }
      },
      {
        id: "fawning",
        word: {
          en: "Fawning",
          fa: "چاپلوسانه",
          fr: "Flagorneur",
          de: "Unterwürfig",
          it: "Adulatorio",
          es: "Servil",
          ru: "Подхалимский",
          zh: "谄媚",
          ar: "متزلف"
        },
        sentence: {
          en: "Fawning admirer.",
          fa: "طرفدار چاپلوس.",
          fr: "Admirateur servile.",
          de: "Kriecherischer Bewunderer.",
          it: "Ammiratore servile.",
          es: "Admirador adulador.",
          ru: "Раболепный поклонник.",
          zh: "奉承的崇拜者。",
          ar: "معجب متملق.",
          ko: "아첨하는 숭배자."
        }
      },
      {
        id: "felicitous",
        word: {
          en: "Felicitous",
          fa: "مناسب/خوش‌بیان",
          fr: "Heureux",
          de: "Treffend",
          it: "Felice",
          es: "Afortunado",
          ru: "Удачный",
          zh: "恰当",
          ar: "موفق"
        },
        sentence: {
          en: "Felicitous choice.",
          fa: "انتخاب شایسته.",
          fr: "Choix heureux.",
          de: "Glückliche Wahl.",
          it: "Scelta felice.",
          es: "Elección feliz.",
          ru: "Удачный выбор.",
          zh: "恰当的选择。",
          ar: "خيار موفق.",
          ko: "적절한 선택."
        }
      },
      {
        id: "fervor",
        word: {
          en: "Fervor",
          fa: "شور و شوق",
          fr: "Ferveur",
          de: "Inbrunst",
          it: "Fervore",
          es: "Fervor",
          ru: "Пыл",
          zh: "热情",
          ar: "حماس"
        },
        sentence: {
          en: "Religious fervor.",
          fa: "شور مذهبی.",
          fr: "Ferveur religieuse.",
          de: "Religiöse Inbrunst.",
          it: "Fervore religioso.",
          es: "Fervor religioso.",
          ru: "Религиозный пыл.",
          zh: "宗教狂热。",
          ar: "حماسة دينية.",
          ko: "종교적 열정."
        }
      },
      {
        id: "flag",
        word: {
          en: "Flag",
          fa: "ضعیف شدن/کم شدن",
          fr: "Faiblir",
          de: "Ermüden",
          it: "Affievolirsi",
          es: "Debilitarse",
          ru: "Слабеть",
          zh: "衰退",
          ar: "فترت"
        },
        sentence: {
          en: "Energy began to flag.",
          fa: "انرژی شروع به کاهش کرد.",
          fr: "L'énergie a commencé à faiblir.",
          de: "Die Energie begann zu schwinden.",
          it: "L'energia iniziò a diminuire.",
          es: "La energía comenzó a decaer.",
          ru: "Энергия начала иссякать.",
          zh: "精力开始衰退。",
          ar: "بدأت الطاقة تضعف.",
          ko: "기력이 약해지기 시작했다."
        }
      },
      {
        id: "fleeting",
        word: {
          en: "Fleeting",
          fa: "گذرا/کوتاه",
          fr: "Fugace",
          de: "Vergänglich",
          it: "Fugace",
          es: "Fugaz",
          ru: "Мимолётный",
          zh: "转瞬即逝",
          ar: "عابر"
        },
        sentence: {
          en: "Fleeting moment.",
          fa: "لحظه زودگذر.",
          fr: "Moment fugace.",
          de: "Flüchtiger Moment.",
          it: "Momento fugace.",
          es: "Momento fugaz.",
          ru: "Мимолетный момент.",
          zh: "稍纵即逝的时刻。",
          ar: "لحظة عابرة.",
          ko: "순식간의 순간."
        }
      },
      {
        id: "florid",
        word: {
          en: "Florid",
          fa: "پرزرق‌وبرق/گل‌گون",
          fr: "Fleuri",
          de: "Blumig",
          it: "Florido",
          es: "Florido",
          ru: "Цветистый",
          zh: "华丽",
          ar: "مزخرف"
        },
        sentence: {
          en: "Florid complexion.",
          fa: "چهره گلگون.",
          fr: "Teint florid.",
          de: "Rötlicher Teint.",
          it: "Carnagione florida.",
          es: "Tez florida.",
          ru: "Румяный цвет лица.",
          zh: "红润的肤色。",
          ar: "بشرة متوردة.",
          ko: "불그레한 안색."
        }
      },
      {
        id: "flippant",
        word: {
          en: "Flippant",
          fa: "سبک‌سر/بی‌ادب",
          fr: "Cavaliere",
          de: "Leichtfertig",
          it: "Frivolo",
          es: "Frívolo",
          ru: "Несерьёзный",
          zh: "轻浮",
          ar: "سطحي"
        },
        sentence: {
          en: "Flippant attitude.",
          fa: "نگرش سبک‌سرانه.",
          fr: "Attitude désinvolte.",
          de: "Schnippische Haltung.",
          it: "Atteggiamento disinvolto.",
          es: "Actitud impertinente.",
          ru: "Легкомысленное отношение.",
          zh: "轻率的态度。",
          ar: "موقف مستهتر.",
          ko: "경박한 태도."
        }
      },
      {
        id: "flounder",
        word: {
          en: "Flounder",
          fa: "دست و پا زدن/تقلا",
          fr: "Se débattre",
          de: "Zappeln",
          it: "Dibattersi",
          es: "Debaterse",
          ru: "Барахтаться",
          zh: "挣扎",
          ar: "تخبّط"
        },
        sentence: {
          en: "Flounder in the water.",
          fa: "دست و پا زدن در آب.",
          fr: "Patauger dans l'eau.",
          de: "Im Wasser zappeln.",
          it: "Dibattersi nell'acqua.",
          es: "Forcejear en el agua.",
          ru: "Барахтаться в воде.",
          zh: "在水中挣扎。",
          ar: "تخبط في الماء.",
          ko: "물 속에서 허우적거리다."
        }
      },
      {
        id: "foment",
        word: {
          en: "Foment",
          fa: "تحریک کردن/دامن زدن",
          fr: "Fomenter",
          de: "Anstacheln",
          it: "Fomentare",
          es: "Fomentar",
          ru: "Разжигать",
          zh: "煽动",
          ar: "أجّج"
        },
        sentence: {
          en: "Foment revolution.",
          fa: "انقلاب به پا کردن.",
          fr: "Fomenter la révolution.",
          de: "Revolution schüren.",
          it: "Fomentare la rivoluzione.",
          es: "Fomentar la revolución.",
          ru: "Разжигать революцию.",
          zh: "煽动革命。",
          ar: "أثار الثورة.",
          ko: "혁명을 조장하다."
        }
      },
      {
        id: "forestall",
        word: {
          en: "Forestall",
          fa: "جلوگیری کردن/پیش‌دستی",
          fr: "Prévenir",
          de: "Zuvorkommen",
          it: "Prevenire",
          es: "Prevenir",
          ru: "Предупреждать",
          zh: "先发制人",
          ar: "سبق"
        },
        sentence: {
          en: "Forestall the crisis.",
          fa: "از بحران جلوگیری کن.",
          fr: "Prévenir la crise.",
          de: "Der Krise zuvorkommen.",
          it: "Prevenire la crisi.",
          es: "Prevenir la crisis.",
          ru: "Предотвратить кризис.",
          zh: "阻止危机。",
          ar: "تدارك الأزمة.",
          ko: "위기를 미연에 방지하다."
        }
      },
      {
        id: "forswear",
        word: {
          en: "Forswear",
          fa: "سوگند ترک کردن",
          fr: "Abjurer",
          de: "Abschwören",
          it: "Rinnegare",
          es: "Abjurar",
          ru: "Отрекаться",
          zh: "发誓放弃",
          ar: "حلف على ترك"
        },
        sentence: {
          en: "Forswear bad habits.",
          fa: "عادات بد را ترک کن.",
          fr: "Renoncer aux mauvaises habitudes.",
          de: "Schlechte Gewohnheiten abschwören.",
          it: "Rinunciare alle cattive abitudini.",
          es: "Renunciar a los malos hábitos.",
          ru: "Отречься от дурных привычек.",
          zh: "戒除坏习惯。",
          ar: "تخل عن العادات السيئة.",
          ko: "나쁜 습관을 그만두다."
        }
      },
      {
        id: "fractious",
        word: {
          en: "Fractious",
          fa: "بدخلق/ناسازگار",
          fr: "Récalcitrant",
          de: "Widerspenstig",
          it: "Irascibile",
          es: "Rebelde",
          ru: "Капризный",
          zh: "易怒",
          ar: "عصبي"
        },
        sentence: {
          en: "Fractious child.",
          fa: "کودک بدقلق.",
          fr: "Enfant hargneux.",
          de: "Widerspenstiges Kind.",
          it: "Bambino scontroso.",
          es: "Niño rebelde.",
          ru: "Капризный ребенок.",
          zh: "易怒的孩子。",
          ar: "طفل مشاكس.",
          ko: "짜증 잘 내는 아이."
        }
      },
      {
        id: "frugal",
        word: {
          en: "Frugal",
          fa: "مقتصد/صرفه‌جو",
          fr: "Frugal",
          de: "Genügsam",
          it: "Frugale",
          es: "Frugal",
          ru: "Бережливый",
          zh: "节俭",
          ar: "مقتصد"
        },
        sentence: {
          en: "Frugal lifestyle.",
          fa: "سبک زندگی صرفه‌جویانه.",
          fr: "Mode de vie frugal.",
          de: "Sparsamer Lebensstil.",
          it: "Stile di vita frugale.",
          es: "Estilo de vida frugal.",
          ru: "Бережливый образ жизни.",
          zh: "节俭的生活方式。",
          ar: "نمط حياة مقتصد.",
          ko: "검소한 생활 방식."
        }
      },
      {
        id: "fulminate",
        word: {
          en: "Fulminate",
          fa: "غرغر کردن/انفجار",
          fr: "Tonitruer",
          de: "Donnern",
          it: "Fulminare",
          es: "Fulminar",
          ru: "Громить",
          zh: "猛烈抨击",
          ar: "هدر"
        },
        sentence: {
          en: "Fulminate against policy.",
          fa: "علیه سیاست اعتراض شدید کردن.",
          fr: "Fulminer contre la politique.",
          de: "Gegen die Politik wettern.",
          it: "Fulminare contro la politica.",
          es: "Fulminar contra la política.",
          ru: "Осуждать политику.",
          zh: "抨击政策。",
          ar: "شن هجوما على السياسة.",
          ko: "정책을 맹렬히 비난하다."
        }
      },
      {
        id: "gainsay",
        word: {
          en: "Gainsay",
          fa: "انکار کردن/مخالفت",
          fr: "Contredire",
          de: "Bestreiten",
          it: "Contraddire",
          es: "Contradecir",
          ru: "Оспаривать",
          zh: "否认",
          ar: "أنكر"
        },
        sentence: {
          en: "Cannot gainsay the truth.",
          fa: "نمی‌توان حقیقت را انکار کرد.",
          fr: "Ne peut contredire la vérité.",
          de: "Die Wahrheit nicht leugnen können.",
          it: "Non si può contraddire la verità.",
          es: "No se puede negar la verdad.",
          ru: "Нельзя отрицать истину.",
          zh: "无法否认事实。",
          ar: "لا يمكن إنكار الحقيقة.",
          ko: "진실을 부정할 수 없다."
        }
      },
      {
        id: "garrulous",
        word: {
          en: "Garrulous",
          fa: "پرحرف/سخن‌چین",
          fr: "Bavard",
          de: "Geschwätzig",
          it: "Garrulo",
          es: "Gárrulo",
          ru: "Болтливый",
          zh: "饶舌",
          ar: "ثرثار"
        },
        sentence: {
          en: "Garrulous old man.",
          fa: "پیرمرد پرحرف.",
          fr: "Vieil homme garrule.",
          de: "Geschwätziger alter Mann.",
          it: "Vecchio loquace.",
          es: "Anciano garrulo.",
          ru: "Болтливый старик.",
          zh: "唠叨的老人。",
          ar: "رجل عجوز ثرثار.",
          ko: "수다스러운 노인."
        }
      },
      {
        id: "gesticulation",
        word: {
          en: "Gesticulation",
          fa: "حرکات دست",
          fr: "Gesticulation",
          de: "Gestikulation",
          it: "Gesticolazione",
          es: "Gesticulación",
          ru: "Жестикуляция",
          zh: "手势",
          ar: "إشارات يدوية"
        },
        sentence: {
          en: "Wild gesticulation.",
          fa: "اشاره دست شدید.",
          fr: "Gesticulation sauvage.",
          de: "Wildes Gestikulieren.",
          it: "Gesticolazione selvaggia.",
          es: "Gesticulación salvaje.",
          ru: "Дикая жестикуляция.",
          zh: "疯狂的手势。",
          ar: "إيماءات جامحة.",
          ko: "격렬한 몸짓."
        }
      },
      {
        id: "glib",
        word: {
          en: "Glib",
          fa: "زبان‌باز/سطحی",
          fr: "Volubile",
          de: "Glibberig",
          it: "Sciolto",
          es: "Fácil",
          ru: "Легко говорящий",
          zh: "油嘴滑舌",
          ar: "أفّاق"
        },
        sentence: {
          en: "Glib answer.",
          fa: "پاسخ حاضرجوابانه.",
          fr: "Réponse facile.",
          de: "Aalglatte Antwort.",
          it: "Risposta disinvolta.",
          es: "Respuesta simplista.",
          ru: "Бойкий ответ.",
          zh: "油嘴滑舌的回答。",
          ar: "إجابة سطحية.",
          ko: "입만 살아있는 대답."
        }
      },
      {
        id: "grandiloquent",
        word: {
          en: "Grandiloquent",
          fa: "پرطمطراق/بزرگ‌نما",
          fr: "Grandiloquent",
          de: "Schwülstig",
          it: "Ampolloso",
          es: "Grandilocuente",
          ru: "Пафосный",
          zh: "浮夸",
          ar: "مبذول"
        },
        sentence: {
          en: "Grandiloquent style.",
          fa: "سبک پرطمطراق.",
          fr: "Style grandiloquent.",
          de: "Schwülstiger Stil.",
          it: "Stile grandiloquente.",
          es: "Estilo grandilocuente.",
          ru: "Высокопарный стиль.",
          zh: "夸张的风格。",
          ar: "أسلوب طنان.",
          ko: "호언장담하는 스타일."
        }
      },
      {
        id: "gregarious",
        word: {
          en: "Gregarious",
          fa: "معاشرتی/جمعی",
          fr: "Sociable",
          de: "Gesellig",
          it: "Gregario",
          es: "Gregario",
          ru: "Общительный",
          zh: "合群",
          ar: "اجتماعي"
        },
        sentence: {
          en: "Gregarious animals.",
          fa: "حیوانات اجتماعی.",
          fr: "Animaux grégaires.",
          de: "Gesellige Tiere.",
          it: "Animali gregari.",
          es: "Animales gregarios.",
          ru: "Стадные животные.",
          zh: "群居动物。",
          ar: "حيوانات اجتماعية.",
          ko: "군집 동물."
        }
      },
      {
        id: "grievous",
        word: {
          en: "Grievous",
          fa: "دردناک/جدی",
          fr: "Grave",
          de: "Schwerwiegend",
          it: "Grave",
          es: "Grave",
          ru: "Тяжкий",
          zh: "严重的",
          ar: "فادح"
        },
        sentence: {
          en: "Grievous injury.",
          fa: "آسیب شدید.",
          fr: "Blessure grave.",
          de: "Schwere Verletzung.",
          it: "Lesione grave.",
          es: "Lesión grave.",
          ru: "Тяжкое телесное повреждение.",
          zh: "严重的伤害。",
          ar: "إصابة خطيرة.",
          ko: "심각한 부상."
        }
      },
      {
        id: "grouse",
        word: {
          en: "Grouse",
          fa: "غر زدن/شکایت",
          fr: "Rouspéter",
          de: "Meckern",
          it: "Brontolare",
          es: "Quejarse",
          ru: "Ворчать",
          zh: "抱怨",
          ar: "تذمّر"
        },
        sentence: {
          en: "Grouse about work.",
          fa: "غر زدن درباره کار.",
          fr: "Râler sur le travail.",
          de: "Über die Arbeit meckern.",
          it: "Brontolare sul lavoro.",
          es: "Quejarse del trabajo.",
          ru: "Ворчать на работу.",
          zh: "抱怨工作。",
          ar: "تذمر من العمل.",
          ko: "일에 대해 불평하다."
        }
      },
      {
        id: "guile",
        word: {
          en: "Guile",
          fa: "نیرنگ/حقه",
          fr: "Ruse",
          de: "List",
          it: "Astuzia",
          es: "Astucia",
          ru: "Хитрость",
          zh: "狡猾",
          ar: "مكر"
        },
        sentence: {
          en: "Full of guile.",
          fa: "پر از حیله.",
          fr: "Plein de ruse.",
          de: "Voller List.",
          it: "Pieno di astuzia.",
          es: "Lleno de astucia.",
          ru: "Полный коварства.",
          zh: "充满诡计。",
          ar: "مملوء بالمكر.",
          ko: "교활함으로 가득 찬."
        }
      },
      {
        id: "gullible",
        word: {
          en: "Gullible",
          fa: "زودباور/ساده‌لوح",
          fr: "Crédule",
          de: "Leichtgläubig",
          it: "Credulone",
          es: "Cándido",
          ru: "Легковерный",
          zh: "易受骗",
          ar: "ساذج"
        },
        sentence: {
          en: "Gullible tourists.",
          fa: "توریست‌های زودباور.",
          fr: "Touristes crédules.",
          de: "Leichtgläubige Touristen.",
          it: "Turisti creduloni.",
          es: "Turistas crédulos.",
          ru: "Доверчивые туристы.",
          zh: "易受骗的游客。",
          ar: "سياح سذج.",
          ko: "잘 속는 관광객들."
        }
      },
      {
        id: "hackneyed",
        word: {
          en: "Hackneyed",
          fa: "تکراری/کلیشه‌ای",
          fr: "Rebattu",
          de: "Abgedroschen",
          it: "Banale",
          es: "Trillado",
          ru: "Затёртый",
          zh: "陈词滥调",
          ar: "مبتذل"
        },
        sentence: {
          en: "Hackneyed phrase.",
          fa: "عبارت کلیشه‌ای.",
          fr: "Phrase rebattue.",
          de: "Abgedroschene Phrase.",
          it: "Frase banale.",
          es: "Frase trillada.",
          ru: "Избитая фраза.",
          zh: "陈腐的短语。",
          ar: "عبارة مبتذلة.",
          ko: "진부한 문구."
        }
      },
      {
        id: "hallowed",
        word: {
          en: "Hallowed",
          fa: "مقدس/مبارک",
          fr: "Consacré",
          de: "Geweiht",
          it: "Sacro",
          es: "Sagrado",
          ru: "Священный",
          zh: "神圣",
          ar: "مقدّس"
        },
        sentence: {
          en: "Hallowed ground.",
          fa: "زمین مقدس.",
          fr: "Terre sainte.",
          de: "Geheiligter Boden.",
          it: "Terra consacrata.",
          es: "Tierra santa.",
          ru: "Священная земля.",
          zh: "神圣的土地。",
          ar: "أرض مقدسة.",
          ko: "신성한 땅."
        }
      },
      {
        id: "harangue",
        word: {
          en: "Harangue",
          fa: "سخنرانی پرشور",
          fr: "Harangue",
          de: "Strafpredigt",
          it: "Arringa",
          es: "Arenga",
          ru: "Тирада",
          zh: "长篇大论",
          ar: "خطاب حماسي"
        },
        sentence: {
          en: "Long harangue.",
          fa: "نطق طولانی و خشن.",
          fr: "Longue harangue.",
          de: "Lange Predigt.",
          it: "Lunga arringa.",
          es: "Larga arenga.",
          ru: "Длинная речь.",
          zh: "长篇大论的训斥。",
          ar: "خطبة طويلة.",
          ko: "장광설."
        }
      },
      {
        id: "harbinger",
        word: {
          en: "Harbinger",
          fa: "پیش‌آهنگ/مژده‌دهنده",
          fr: "Précurseur",
          de: "Vorbote",
          it: "Precursore",
          es: "Presagio",
          ru: "Предвестник",
          zh: "先兆",
          ar: "بشير"
        },
        sentence: {
          en: "Harbinger of doom.",
          fa: "بشارت دهنده شوم.",
          fr: "Présage de malheur.",
          de: "Vorbote des Untergangs.",
          it: "Precursore di sventura.",
          es: "Presagio de fatalidad.",
          ru: "Предвестник гибели.",
          zh: "厄运的预兆。",
          ar: "نذير شؤم.",
          ko: "파멸의 전조."
        }
      },
      {
        id: "hedonist",
        word: {
          en: "Hedonist",
          fa: "لذت‌گرا",
          fr: "Hédoniste",
          de: "Hedonist",
          it: "Edonista",
          es: "Hedonista",
          ru: "Гедонист",
          zh: "享乐主义者",
          ar: "لذوي"
        },
        sentence: {
          en: "He is a hedonist.",
          fa: "او یک خوشگذران است.",
          fr: "C'est un hédoniste.",
          de: "Er ist ein Hedonist.",
          it: "È un edonista.",
          es: "Es un hedonista.",
          ru: "Он гедонист.",
          zh: "他是享乐主义者。",
          ar: "هو محب للملذات.",
          ko: "그는 쾌락주의자입니다."
        }
      },
      {
        id: "hegemony",
        word: {
          en: "Hegemony",
          fa: "هژمونی/سلطه",
          fr: "Hégémonie",
          de: "Hegemonie",
          it: "Egemonia",
          es: "Hegemonía",
          ru: "Гегемония",
          zh: "霸权",
          ar: "هيمنة"
        },
        sentence: {
          en: "Cultural hegemony.",
          fa: "هژمونی فرهنگی.",
          fr: "Hégémonie culturelle.",
          de: "Kulturelle Hegemonie.",
          it: "Egemonia culturale.",
          es: "Hegemonía cultural.",
          ru: "Культурная гегемония.",
          zh: "文化霸权。",
          ar: "هيمنة ثقافية.",
          ko: "문화적 패권."
        }
      },
      {
        id: "heretic",
        word: {
          en: "Heretic",
          fa: "مرتد/کافر",
          fr: "Hérétique",
          de: "Ketzer",
          it: "Eretico",
          es: "Hereje",
          ru: "Еретик",
          zh: "异教徒",
          ar: "زنديق"
        },
        sentence: {
          en: "Burn the heretic.",
          fa: "ملحد را بسوزان.",
          fr: "Brûler l'hérétique.",
          de: "Den Ketzer verbrennen.",
          it: "Bruciare l'eretico.",
          es: "Quemar al hereje.",
          ru: "Сжечь еретика.",
          zh: "烧死异教徒。",
          ar: "احرق الزنديق.",
          ko: "이단을 화형시키다."
        }
      },
      {
        id: "hiatus",
        word: {
          en: "Hiatus",
          fa: "وقفه/فاصله",
          fr: "Hiatus",
          de: "Lücke",
          it: "Iato",
          es: "Hiato",
          ru: "Перерыв",
          zh: "间断",
          ar: "فجوة"
        },
        sentence: {
          en: "On hiatus.",
          fa: "در وقفه.",
          fr: "En pause.",
          de: "In einer Pause.",
          it: "In pausa.",
          es: "En pausa.",
          ru: "В перерыве.",
          zh: "暂停。",
          ar: "في فجوة.",
          ko: "중단 상태."
        }
      },
      {
        id: "iconoclast",
        word: {
          en: "Iconoclast",
          fa: "سنت‌شکن/بت‌شکن",
          fr: "Iconoclaste",
          de: "Bilderstürmer",
          it: "Iconoclasta",
          es: "Iconoclasta",
          ru: "Иконоборец",
          zh: "偶像破坏者",
          ar: "متمرد على التقاليد"
        },
        sentence: {
          en: "Famous iconoclast.",
          fa: "بت‌شکن معروف.",
          fr: "Iconoclaste célèbre.",
          de: "Berühmter Bilderstürmer.",
          it: "Famoso iconoclasta.",
          es: "Famoso iconoclasta.",
          ru: "Знаменитый иконоборец.",
          zh: "著名的打破旧习者。",
          ar: "متمرد شهير.",
          ko: "유명한 우상 파괴자."
        }
      },
      {
        id: "idolatry",
        word: {
          en: "Idolatry",
          fa: "بت‌پرستی/پرستش",
          fr: "Idolâtrie",
          de: "Götzendienst",
          it: "Idolatria",
          es: "Idolatría",
          ru: "Идолопоклонство",
          zh: "偶像崇拜",
          ar: "وثنية"
        },
        sentence: {
          en: "Practice idolatry.",
          fa: "بت پرسش.",
          fr: "Pratiquer l'idolâtrie.",
          de: "Götzendienst betreiben.",
          it: "Praticare l'idolatria.",
          es: "Practicar la idolatría.",
          ru: "Заниматься идолопоклонством.",
          zh: "崇拜偶像。",
          ar: "مارس عبادة الأصنام.",
          ko: "우상 숭배를 하다."
        }
      },
      {
        id: "ignominious",
        word: {
          en: "Ignominious",
          fa: "ننگین/شرم‌آور",
          fr: "Ignominieux",
          de: "Schmachvoll",
          it: "Ignominioso",
          es: "Ignominioso",
          ru: "Позорный",
          zh: "耻辱",
          ar: "مهين"
        },
        sentence: {
          en: "Ignominious defeat.",
          fa: "شکست مفتضحانه.",
          fr: "Défaite ignominieuse.",
          de: "Schmachvolle Niederlage.",
          it: "Sconfitta ignominiosa.",
          es: "Derrota ignominiosa.",
          ru: "Позорное поражение.",
          zh: "可耻的失败。",
          ar: "هزيمة مخزية.",
          ko: "불명예스러운 패배."
        }
      },
      {
        id: "imbue",
        word: {
          en: "Imbue",
          fa: "الهام دادن/نفوذ کردن",
          fr: "Imprégner",
          de: "Durchdringen",
          it: "Impregnare",
          es: "Imbuir",
          ru: "Напитывать",
          zh: "浸染",
          ar: "غرس"
        },
        sentence: {
          en: "Imbue with spirit.",
          fa: "با روح اشباع کردن.",
          fr: "Imprégner d'esprit.",
          de: "Mit Geist erfüllen.",
          it: "Impregnare di spirito.",
          es: "Imbuir de espíritu.",
          ru: "Наполнить духом.",
          zh: "灌输精神。",
          ar: "شبع بالروح.",
          ko: "정신을 불어넣다."
        }
      },
      {
        id: "immutable",
        word: {
          en: "Immutable",
          fa: "تغییرناپذیر",
          fr: "Immuable",
          de: "Unveränderlich",
          it: "Immutabile",
          es: "Inmutable",
          ru: "Неизменный",
          zh: "不变",
          ar: "ثابت"
        },
        sentence: {
          en: "Immutable laws.",
          fa: "قوانین تغییرناپذیر.",
          fr: "Lois immuables.",
          de: "Unveränderliche Gesetze.",
          it: "Leggi immutabili.",
          es: "Leyes inmutables.",
          ru: "Непреложные законы.",
          zh: "不可改变的法律。",
          ar: "قوانين غير قابلة للتغيير.",
          ko: "불변의 법칙."
        }
      },
      {
        id: "impair",
        word: {
          en: "Impair",
          fa: "آسیب زدن/ضعیف کردن",
          fr: "Altérer",
          de: "Beeinträchtigen",
          it: "Compromettere",
          es: "Deteriorar",
          ru: "Ухудшать",
          zh: "损害",
          ar: "أضرّ"
        },
        sentence: {
          en: "Impair vision.",
          fa: "بینایی را مختل کن.",
          fr: "Altérer la vision.",
          de: "Das Sehvermögen beeinträchtigen.",
          it: "Compromettere la vista.",
          es: "Deteriorar la visión.",
          ru: "Ухудшить зрение.",
          zh: "损害视力。",
          ar: "أضعف الرؤية.",
          ko: "시력을 손상시키다."
        }
      },
      {
        id: "impartial",
        word: {
          en: "Impartial",
          fa: "بی‌طرف/عادل",
          fr: "Impartial",
          de: "Unparteiisch",
          it: "Imparziale",
          es: "Imparcial",
          ru: "Беспристрастный",
          zh: "公正",
          ar: "محايد"
        },
        sentence: {
          en: "Impartial judge.",
          fa: "قاضی بی‌طرف.",
          fr: "Juge impartial.",
          de: "Unparteiischer Richter.",
          it: "Giudice imparziale.",
          es: "Juez imparcial.",
          ru: "Беспристрастный судья.",
          zh: "公正的法官。",
          ar: "قاض محايد.",
          ko: "공정한 판사."
        }
      },
      {
        id: "impassive",
        word: {
          en: "Impassive",
          fa: "بی‌احساس/سرد",
          fr: "Impassible",
          de: "Ungerührt",
          it: "Impassibile",
          es: "Impasible",
          ru: "Непроницаемый",
          zh: "无动于衷",
          ar: "جامد"
        },
        sentence: {
          en: "Impassive face.",
          fa: "چهره بی‌تفاوت.",
          fr: "Visage impassible.",
          de: "Teilnahmsloses Gesicht.",
          it: "Volto impassibile.",
          es: "Rostro impasible.",
          ru: "Бесстрастное лицо.",
          zh: "面无表情。",
          ar: "وجه جامد.",
          ko: "무표정한 얼굴."
        }
      },
      {
        id: "impecunious",
        word: {
          en: "Impecunious",
          fa: "بی‌پول/فقیر",
          fr: "Impecunieux",
          de: "Mittellos",
          it: "Povero",
          es: "Impecunioso",
          ru: "Неимущий",
          zh: "贫穷",
          ar: "معوز"
        },
        sentence: {
          en: "Impecunious student.",
          fa: "دانشجوی بی‌پول.",
          fr: "Étudiant impécunieux.",
          de: "Mittelloser Student.",
          it: "Studente squattrinato.",
          es: "Estudiante impecune.",
          ru: "Безденежный студент.",
          zh: "身无分文的学生。",
          ar: "طالب فقير.",
          ko: "돈 없는 학생."
        }
      },
      {
        id: "impede",
        word: {
          en: "Impede",
          fa: "مانع شدن/جلوگیری",
          fr: "Gêner",
          de: "Behindern",
          it: "Impedire",
          es: "Impedir",
          ru: "Препятствовать",
          zh: "阻碍",
          ar: "عاق"
        },
        sentence: {
          en: "Impede progress.",
          fa: "مانع پیشرفت شو.",
          fr: "Entraver le progrès.",
          de: "Den Fortschritt behindern.",
          it: "Impedire il progresso.",
          es: "Impedir el progreso.",
          ru: "Препятствовать прогрессу.",
          zh: "阻碍进步。",
          ar: "عق التقدم.",
          ko: "진전을 방해하다."
        }
      },
      {
        id: "impermeable",
        word: {
          en: "Impermeable",
          fa: "نفوذناپذیر",
          fr: "Imperméable",
          de: "Undurchlässig",
          it: "Impermeabile",
          es: "Impermeable",
          ru: "Непроницаемый",
          zh: "不透水",
          ar: "مانع للتسرب"
        },
        sentence: {
          en: "Impermeable membrane.",
          fa: "غشای نفوذناپذیر.",
          fr: "Membrane imperméable.",
          de: "Undurchlässige Membran.",
          it: "Membrana impermeabile.",
          es: "Membrana impermeable.",
          ru: "Непроницаемая мембрана.",
          zh: "不透透膜。",
          ar: "غشاء غير منفذ.",
          ko: "불투과성 막."
        }
      },
      {
        id: "impertinent",
        word: {
          en: "Impertinent",
          fa: "بی‌ادب/بی‌ربط",
          fr: "Impertinent",
          de: "Unverschämt",
          it: "Impertinente",
          es: "Impertinente",
          ru: "Наглый",
          zh: "无礼",
          ar: "وقح"
        },
        sentence: {
          en: "Impertinent question.",
          fa: "سوال گستاخانه.",
          fr: "Question impertinente.",
          de: "Unverschämte Frage.",
          it: "Domanda impertinente.",
          es: "Pregunta impertinente.",
          ru: "Дерзкий вопрос.",
          zh: "无礼的问题。",
          ar: "سؤال وقح.",
          ko: "건방진 질문."
        }
      },
      {
        id: "impetuous",
        word: {
          en: "Impetuous",
          fa: "شتاب‌زده/تند",
          fr: "Impetueux",
          de: "Ungestüm",
          it: "Impetuoso",
          es: "Impetuoso",
          ru: "Порывистый",
          zh: "冲动",
          ar: "مندفع"
        },
        sentence: {
          en: "Impetuous decision.",
          fa: "تصمیم عجولانه.",
          fr: "Décision impétueuse.",
          de: "Ungestüme Entscheidung.",
          it: "Decisione impetuosa.",
          es: "Decisión impetuosa.",
          ru: "Импульсивное решение.",
          zh: "冲动的决定。",
          ar: "قرار متهور.",
          ko: "성급한 결정."
        }
      },
      {
        id: "impious",
        word: {
          en: "Impious",
          fa: "بی‌دین/ناسپاس",
          fr: "Impies",
          de: "Gottlos",
          it: "Empio",
          es: "Impío",
          ru: "Неблагочестивый",
          zh: "不敬",
          ar: "فاسق"
        },
        sentence: {
          en: "Impious act.",
          fa: "عمل ناپسند (کفرآمیز).",
          fr: "Acte impie.",
          de: "Gottloser Akt.",
          it: "Atto empio.",
          es: "Acto impío.",
          ru: "Нечестивый поступок.",
          zh: "不敬的行为。",
          ar: "عمل آثم.",
          ko: "불경한 행동."
        }
      },
      {
        id: "implacable",
        word: {
          en: "Implacable",
          fa: "نرمش‌ناپذیر/بی‌رحم",
          fr: "Implacable",
          de: "Unerbittlich",
          it: "Implacabile",
          es: "Implacable",
          ru: "Неумолимый",
          zh: "毫不宽容",
          ar: "لا يلين"
        },
        sentence: {
          en: "Implacable enemy.",
          fa: "دشمن کینه‌توز.",
          fr: "Ennemi implacable.",
          de: "Unerbittlicher Feind.",
          it: "Nemico implacabile.",
          es: "Enemigo implacable.",
          ru: "Неумолимый враг.",
          zh: "难以安抚的敌人。",
          ar: "عدو لدود.",
          ko: "무자비한 적."
        }
      },
      {
        id: "implicit",
        word: {
          en: "Implicit",
          fa: "ضمنی/تلویحی",
          fr: "Implicite",
          de: "Implizit",
          it: "Implicito",
          es: "Implícito",
          ru: "Неявный",
          zh: "隐含",
          ar: "ضمني"
        },
        sentence: {
          en: "Implicit trust.",
          fa: "اعتماد ضمنی.",
          fr: "Confiance implicite.",
          de: "Implizites Vertrauen.",
          it: "Fiducia implicita.",
          es: "Confianza implícita.",
          ru: "Безоговорочное доверие.",
          zh: "绝对的信任。",
          ar: "ثقة ضمنية.",
          ko: "암묵적인 신뢰."
        }
      },
      {
        id: "implode",
        word: {
          en: "Implode",
          fa: "فروپاشی از داخل",
          fr: "Imploser",
          de: "Implodieren",
          it: "Implodere",
          es: "Implosionar",
          ru: "Имплодировать",
          zh: "内爆",
          ar: "انهيار داخلي"
        },
        sentence: {
          en: "Building imploded.",
          fa: "ساختمان فرو ریخت (به داخل).",
          fr: "Le bâtiment a implosé.",
          de: "Das Gebäude implodierte.",
          it: "L'edificio è imploso.",
          es: "El edificio implosionó.",
          ru: "Здание взорвалось изнутри.",
          zh: "建筑物内爆。",
          ar: "انهار المبنى.",
          ko: "건물이 붕괴되었다."
        }
      },
      {
        id: "inadvertently",
        word: {
          en: "Inadvertently",
          fa: "به طور ناخواسته",
          fr: "Involontairement",
          de: "Unabsichtlich",
          it: "Inavvertitamente",
          es: "Inadvertidamente",
          ru: "Ненамеренно",
          zh: "无意中",
          ar: "عن غير قصد"
        },
        sentence: {
          en: "Inadvertently deleted.",
          fa: "سهوا حذف شد.",
          fr: "Supprimé par inadvertance.",
          de: "Versehentlich gelöscht.",
          it: "Cancellato inavvertitamente.",
          es: "Eliminado inadvertidamente.",
          ru: "Случайно удалено.",
          zh: "不小心删除了。",
          ar: "حذف عن غير قصد.",
          ko: "실수로 삭제되었습니다."
        }
      },
      {
        id: "inane",
        word: {
          en: "Inane",
          fa: "بی‌معنی/احمقانه",
          fr: "Inane",
          de: "Albern",
          it: "Insulso",
          es: "Insustancial",
          ru: "Глупый",
          zh: "愚蠢",
          ar: "تافه"
        },
        sentence: {
          en: "Inane comments.",
          fa: "نظرات پوچ.",
          fr: "Commentaires inanes.",
          de: "Geistlose Kommentare.",
          it: "Commenti inanimi.",
          es: "Comentarios inanes.",
          ru: "Бессмысленные комментарии.",
          zh: "空洞的评论。",
          ar: "تعليقات سخيفة.",
          ko: "어리석은 댓글."
        }
      },
      {
        id: "inchoate",
        word: {
          en: "Inchoate",
          fa: "نیم‌بند/ابتدایی",
          fr: "Inchoatif",
          de: "Angefangen",
          it: "Incoativo",
          es: "Incipiente",
          ru: "Зародышевый",
          zh: "初始",
          ar: "بداي"
        },
        sentence: {
          en: "Inchoate ideas.",
          fa: "ایده‌های اولیه (ناقص).",
          fr: "Idées inchoatives.",
          de: "Unentwickelte Ideen.",
          it: "Idee incoative.",
          es: "Ideas incipientes.",
          ru: "Зачаточные идеи.",
          zh: "早期的想法。",
          ar: "أفكار مبدئية.",
          ko: "초기 아이디어."
        }
      },
      {
        id: "incisive",
        word: {
          en: "Incisive",
          fa: "تیز/نافذ",
          fr: "Incisif",
          de: "Scharfsinnig",
          it: "Incisivo",
          es: "Incisivo",
          ru: "Острый",
          zh: "尖锐",
          ar: "حاد"
        },
        sentence: {
          en: "Incisive analysis.",
          fa: "تحلیل دقیق.",
          fr: "Analyse incisive.",
          de: "Scharfsinnige Analyse.",
          it: "Analisi incisiva.",
          es: "Análisis incisivo.",
          ru: "Острый анализ.",
          zh: "深刻的分析。",
          ar: "تحليل ثاقب.",
          ko: "예리한 분석."
        }
      },
      {
        id: "inclination",
        word: {
          en: "Inclination",
          fa: "گرایش/تمایل",
          fr: "Inclination",
          de: "Neigung",
          it: "Inclinazione",
          es: "Inclinación",
          ru: "Склонность",
          zh: "倾向",
          ar: "ميل"
        },
        sentence: {
          en: "Natural inclination.",
          fa: "تمایل طبیعی.",
          fr: "Inclination naturelle.",
          de: "Natürliche Neigung.",
          it: "Inclinazione naturale.",
          es: "Inclinación natural.",
          ru: "Естественная склонность.",
          zh: "自然倾向。",
          ar: "ميل طبيعي.",
          ko: "타고난 성향."
        }
      },
      {
        id: "incongruous",
        word: {
          en: "Incongruous",
          fa: "ناسازگار/نامتناسب",
          fr: "Incongru",
          de: "Unpassend",
          it: "Incongruo",
          es: "Incongruente",
          ru: "Несоответствующий",
          zh: "不协调",
          ar: "متنافر"
        },
        sentence: {
          en: "Incongruous mixture.",
          fa: "مخلوط ناهمگن.",
          fr: "Mélange incongru.",
          de: "Unpassende Mischung.",
          it: "Miscela incongrua.",
          es: "Mezcla incongruente.",
          ru: "Нелепая смесь.",
          zh: "不协调的混合物。",
          ar: "خليط غير متجانس.",
          ko: "조화롭지 않은 혼합."
        }
      },
      {
        id: "inconsequential",
        word: {
          en: "Inconsequential",
          fa: "بی‌اهمیت/ناچیز",
          fr: "Insignifiant",
          de: "Bedeutungslos",
          it: "Irrilevante",
          es: "Intrascendente",
          ru: "Незначительный",
          zh: "无关紧要",
          ar: "غير جوهري"
        },
        sentence: {
          en: "Inconsequential detail.",
          fa: "جزئیات بی‌اهمیت.",
          fr: "Détail inconséquent.",
          de: "Unwichtiges Detail.",
          it: "Dettaglio irrilevante.",
          es: "Detalle intrascendente.",
          ru: "Несущественная деталь.",
          zh: "无关紧要的细节。",
          ar: "تفاصيل غير مهمة.",
          ko: "중요하지 않은 세부 사항."
        }
      },
      {
        id: "incorrigible",
        word: {
          en: "Incorrigible",
          fa: "اصلاح‌ناپذیر",
          fr: "Incorrigible",
          de: "Unverbesserlich",
          it: "Incorreggibile",
          es: "Incorregible",
          ru: "Неисправимый",
          zh: "无可救药",
          ar: "غير قابل إصلاح"
        },
        sentence: {
          en: "Incorrigible liar.",
          fa: "دروغگوی اصلاح‌ناپذیر.",
          fr: "Menteur incorrigible.",
          de: "Unverbesserlicher Lügner.",
          it: "Bugiardo incorreggibile.",
          es: "Mentiroso incorregible.",
          ru: "Неисправимый лжец.",
          zh: "不可救药的说谎者。",
          ar: "كذاب لا يصحح.",
          ko: "구제불능의 거짓말쟁이."
        }
      },
      {
        id: "indict",
        word: {
          en: "Indict",
          fa: "اتهام رسمی زدن",
          fr: "Inculper",
          de: "Anklagen",
          it: "Incriminare",
          es: "Acusar",
          ru: "Обвинять",
          zh: "起诉",
          ar: "اتهم رسمياً"
        },
        sentence: {
          en: "Indict for murder.",
          fa: "متهم کردن به قتل.",
          fr: "Inculper pour meurtre.",
          de: "Wegen Mordes anklagen.",
          it: "Incriminare per omicidio.",
          es: "Acusar de asesinato.",
          ru: "Обвинить в убийстве.",
          zh: "控告谋杀。",
          ar: "اتهم بالقتل.",
          ko: "살인 혐의로 기소하다."
        }
      },
      {
        id: "indigenous",
        word: {
          en: "Indigenous",
          fa: "بومی/اصیل",
          fr: "Autochtone",
          de: "Einheimisch",
          it: "Indigeno",
          es: "Indígena",
          ru: "Коренной",
          zh: "土著",
          ar: "أصلي"
        },
        sentence: {
          en: "Indigenous people.",
          fa: "مردم بومی.",
          fr: "Peuple indigène.",
          de: "Einheimische Bevölkerung.",
          it: "Popolazioni indigene.",
          es: "Pueblo indígena.",
          ru: "Коренное население.",
          zh: "土著人民。",
          ar: "سكان أصليين.",
          ko: "원주민."
        }
      },
      {
        id: "indolent",
        word: {
          en: "Indolent",
          fa: "تنبل/بی‌حال",
          fr: "Indolent",
          de: "Träge",
          it: "Indolente",
          es: "Indolente",
          ru: "Ленивый",
          zh: "懒惰",
          ar: "كسول"
        },
        sentence: {
          en: "Indolent worker.",
          fa: "کارگر تنبل.",
          fr: "Travailleur indolent.",
          de: "Träger Arbeiter.",
          it: "Lavoratore indolente.",
          es: "Trabajador indolente.",
          ru: "Ленивый работник.",
          zh: "懒惰的工人。",
          ar: "عامل كسول.",
          ko: "게으른 노동자."
        }
      },
      {
        id: "ineffable",
        word: {
          en: "Ineffable",
          fa: "بیان‌ناشدنی",
          fr: "Ineffable",
          de: "Unaussprechlich",
          it: "Ineffabile",
          es: "Inefable",
          ru: "Неописуемый",
          zh: "难以言喻",
          ar: "لا يُنطق"
        },
        sentence: {
          en: "Ineffable beauty.",
          fa: "زیبایی وصف ناپذیر.",
          fr: "Beauté ineffable.",
          de: "Unaussprechliche Schönheit.",
          it: "Bellezza ineffabile.",
          es: "Belleza inefable.",
          ru: "Невыразимая красота.",
          zh: "不可言喻的美。",
          ar: "جمال لا يوصف.",
          ko: "형언할 수 없는 아름다움."
        }
      },
      {
        id: "inert",
        word: {
          en: "Inert",
          fa: "بی‌تحرک/خنثی",
          fr: "Inerte",
          de: "Träge",
          it: "Inerte",
          es: "Inerte",
          ru: "Инертный",
          zh: "惰性",
          ar: "خامل"
        },
        sentence: {
          en: "Inert gas.",
          fa: "گاز بی اثر.",
          fr: "Gaz inerte.",
          de: "Inertgas.",
          it: "Gas inerte.",
          es: "Gas inerte.",
          ru: "Инертный газ.",
          zh: "惰性气体。",
          ar: "غاز خامل.",
          ko: "불활성 기체."
        }
      },
      {
        id: "ingenious",
        word: {
          en: "Ingenious",
          fa: "خلاق/ماهرانه",
          fr: "Ingénieux",
          de: "Genial",
          it: "Ingegnoso",
          es: "Ingenioso",
          ru: "Изобретательный",
          zh: "巧妙",
          ar: "بارع"
        },
        sentence: {
          en: "Ingenious solution.",
          fa: "راه حل هوشمندانه.",
          fr: "Solution ingénieuse.",
          de: "Geniale Lösung.",
          it: "Soluzione ingegnosa.",
          es: "Solución ingeniosa.",
          ru: "Гениальное решение.",
          zh: "巧妙的解决方案。",
          ar: "حل عبقري.",
          ko: "기발한 해결책."
        }
      },
      {
        id: "ingenuous",
        word: {
          en: "Ingenuous",
          fa: "صادق/بی‌آلایش",
          fr: "Ingénu",
          de: "Naiv",
          it: "Ingenuo",
          es: "Ingenuo",
          ru: "Простодушный",
          zh: "天真",
          ar: "ساذج"
        },
        sentence: {
          en: "Ingenuous smile.",
          fa: "لبخند معصومانه.",
          fr: "Sourire ingénu.",
          de: "Naives Lächeln.",
          it: "Sorriso ingenuo.",
          es: "Sonrisa ingenua.",
          ru: "Простодушная улыбка.",
          zh: "天真的微笑。",
          ar: "ابتسامة ساذجة.",
          ko: "천진난만한 미소."
        }
      },
      {
        id: "inherent",
        word: {
          en: "Inherent",
          fa: "ذاتی/جوهری",
          fr: "Inhérent",
          de: "Anhaftend",
          it: "Inerente",
          es: "Inherente",
          ru: "Присущий",
          zh: "固有",
          ar: "ملازم"
        },
        sentence: {
          en: "Inherent risk.",
          fa: "ریسک ذاتی.",
          fr: "Risque inhérent.",
          de: "Inhärentes Risiko.",
          it: "Rischio intrinseco.",
          es: "Riesgo inherente.",
          ru: "Присущий риск.",
          zh: "固有风险。",
          ar: "خطر متأصل.",
          ko: "내재적 위험."
        }
      },
      {
        id: "innocuous",
        word: {
          en: "Innocuous",
          fa: "بی‌ضرر/بی‌آزار",
          fr: "Inoffensif",
          de: "Harmlos",
          it: "Innocuo",
          es: "Inocuo",
          ru: "Безобидный",
          zh: "无害",
          ar: "غير ضار"
        },
        sentence: {
          en: "Innocuous remark.",
          fa: "اظهار نظر بی ضرر.",
          fr: "Remarque inoffensive.",
          de: "Harmloser Bemerkung.",
          it: "Osservazione innocua.",
          es: "Observación inocua.",
          ru: "Безобидное замечание.",
          zh: "无伤大雅的话。",
          ar: "ملاحظة غير ضارة.",
          ko: "무해한 발언."
        }
      },
      {
        id: "inscrutable",
        word: {
          en: "Inscrutable",
          fa: "رازآلود/نفوذناپذیر",
          fr: "Impénétrable",
          de: "Unergründlich",
          it: "Inscrutabile",
          es: "Inescrutable",
          ru: "Непостижимый",
          zh: "高深莫测",
          ar: "غامض"
        },
        sentence: {
          en: "Inscrutable face.",
          fa: "چهره مرموز.",
          fr: "Visage impénétrable.",
          de: "Unergründliches Gesicht.",
          it: "Volto imperscrutabile.",
          es: "Rostro inescrutable.",
          ru: "Непроницаемое лицо.",
          zh: "难以捉摸的表情。",
          ar: "وجه غامض.",
          ko: "헤아릴 수 없는 표정."
        }
      },
      {
        id: "insensible",
        word: {
          en: "Insensible",
          fa: "بی‌حس/بی‌توجه",
          fr: "Insensible",
          de: "Gefühllos",
          it: "Insensibile",
          es: "Insensible",
          ru: "Бесчувственный",
          zh: "无知觉",
          ar: "فاقد الإحساس"
        },
        sentence: {
          en: "Insensible to pain.",
          fa: "بی حس نسبت به درد.",
          fr: "Insensible à la douleur.",
          de: "Unempfindlich gegen Schmerzen.",
          it: "Insensibile al dolore.",
          es: "Insensible al dolor.",
          ru: "Нечувствительный к боли.",
          zh: "对疼痛无感觉。",
          ar: "فاقد الإحساس بالألم.",
          ko: "고통에 무감각한."
        }
      },
      {
        id: "insidious",
        word: {
          en: "Insidious",
          fa: "موذی/فریبنده",
          fr: "Insidieux",
          de: "Heimtückisch",
          it: "Insidioso",
          es: "Insidioso",
          ru: "Коварный",
          zh: "阴险",
          ar: "خبيث"
        },
        sentence: {
          en: "Insidious disease.",
          fa: "بیماری موذی.",
          fr: "Maladie insidieuse.",
          de: "Heimtückische Krankheit.",
          it: "Malattia insidiosa.",
          es: "Enfermedad insidiosa.",
          ru: "Коварная болезнь.",
          zh: "潜在的疾病。",
          ar: "مرض خبيث.",
          ko: "잠행성 질병."
        }
      },
      {
        id: "insinuate",
        word: {
          en: "Insinuate",
          fa: "تلویحاً گفتن/نفوذ کردن",
          fr: "Insinuer",
          de: "Andeuten",
          it: "Insinnuare",
          es: "Insinuar",
          ru: "Намекать",
          zh: "暗示",
          ar: "ألمح"
        },
        sentence: {
          en: "Insinuate doubt.",
          fa: "القاء شک.",
          fr: "Insinuer le doute.",
          de: "Zweifel andeuten.",
          it: "Insinuare dubbi.",
          es: "Insinuar duda.",
          ru: "Внушать сомнение.",
          zh: "暗示怀疑。",
          ar: "دس الشك.",
          ko: "의심을 암시하다."
        }
      },
      {
        id: "insipid",
        word: {
          en: "Insipid",
          fa: "بی‌مزه/ملال‌آور",
          fr: "Insipide",
          de: "Fade",
          it: "Insipido",
          es: "Insípido",
          ru: "Пресный",
          zh: "乏味",
          ar: "باهت"
        },
        sentence: {
          en: "Insipid food.",
          fa: "غذای بی‌مزه.",
          fr: "Nourriture insipide.",
          de: "Fades Essen.",
          it: "Cibo insipido.",
          es: "Comida insípida.",
          ru: "Безвкусная еда.",
          zh: "索然无味的食物。",
          ar: "طعام لا طعم له.",
          ko: "맛없는 음식."
        }
      },
      {
        id: "insolent",
        word: {
          en: "Insolent",
          fa: "بی‌ادب/وقيح",
          fr: "Insolent",
          de: "Frech",
          it: "Insolente",
          es: "Insolente",
          ru: "Наглый",
          zh: "无礼",
          ar: "وقح"
        },
        sentence: {
          en: "Insolent child.",
          fa: "کودک گستاخ.",
          fr: "Enfant insolent.",
          de: "Freches Kind.",
          it: "Bambino insolente.",
          es: "Niño insolente.",
          ru: "Наглый ребенок.",
          zh: "傲慢的孩子。",
          ar: "طفل وقح.",
          ko: "버릇없는 아이."
        }
      },
      {
        id: "instigate",
        word: {
          en: "Instigate",
          fa: "تحریک کردن/برانگیختن",
          fr: "Instiguer",
          de: "Anstiften",
          it: "Istigare",
          es: "Instigar",
          ru: "Подстрекать",
          zh: "煽动",
          ar: "حرّض"
        },
        sentence: {
          en: "Instigate violence.",
          fa: "تحریک خشونت.",
          fr: "Instiguer la violence.",
          de: "Gewalt anstiften.",
          it: "Istigare alla violenza.",
          es: "Instigar la violencia.",
          ru: "Подстрекать к насилию.",
          zh: "煽动暴力。",
          ar: "حرض على العنف.",
          ko: "폭력을 선동하다."
        }
      },
      {
        id: "insularity",
        word: {
          en: "Insularity",
          fa: "جزیره‌محوری/تنگ‌نظری",
          fr: "Insularité",
          de: "Inselhaftigkeit",
          it: "Insularità",
          es: "Insularidad",
          ru: "Изолированность",
          zh: "孤立",
          ar: "انعزالية"
        },
        sentence: {
          en: "Cultural insularity.",
          fa: "انزواي فرهنگي.",
          fr: "Insularité culturelle.",
          de: "Kulturelle Insellage.",
          it: "Insularità culturale.",
          es: "Insularidad cultural.",
          ru: "Культурная замкнутость.",
          zh: "文化孤立。",
          ar: "انعزال ثقافي.",
          ko: "문화적 고립."
        }
      },
      {
        id: "insuperable",
        word: {
          en: "Insuperable",
          fa: "غیرقابل غلبه",
          fr: "Insurmontable",
          de: "Unüberwindlich",
          it: "Insuperabile",
          es: "Insuperable",
          ru: "Непреодолимый",
          zh: "不可逾越",
          ar: "لا يقهر"
        },
        sentence: {
          en: "Insuperable barrier.",
          fa: "مانع عبور ناپذیر.",
          fr: "Barrière insurmontable.",
          de: "Unüberwindbares Hindernis.",
          it: "Barriera insuperabile.",
          es: "Barrera insuperable.",
          ru: "Непреодолимый барьер.",
          zh: "难以逾越的障碍。",
          ar: "حاجز لا يمكن التغلب عليه.",
          ko: "극복할 수 없는 장벽."
        }
      },
      {
        id: "intimate",
        word: {
          en: "Intimate",
          fa: "صمیمی/تلویحی",
          fr: "Intime",
          de: "Vertraut",
          it: "Intimo",
          es: "Íntimo",
          ru: "Интимный",
          zh: "亲密",
          ar: "حميم"
        },
        sentence: {
          en: "Intimate details.",
          fa: "جزئیات صمیمی.",
          fr: "Détails intimes.",
          de: "Intime Details.",
          it: "Dettagli intimi.",
          es: "Detalles íntimos.",
          ru: "Интимные подробности.",
          zh: "私密细节。",
          ar: "تفاصيل حميمة.",
          ko: "친밀한 세부 사항."
        }
      },
      {
        id: "intractable",
        word: {
          en: "Intractable",
          fa: "سرسخت/لجوج",
          fr: "Intraitable",
          de: "Unbeugsam",
          it: "Intrattabile",
          es: "Intratable",
          ru: "Непокорный",
          zh: "难对付",
          ar: "عنيد"
        },
        sentence: {
          en: "Intractable problem.",
          fa: "مشکل لاینحل.",
          fr: "Problème insoluble.",
          de: "Unlösbares Problem.",
          it: "Problema intrattabile.",
          es: "Problema intratable.",
          ru: "Неразрешимая проблема.",
          zh: "棘手的问题。",
          ar: "مشكلة مستعصية.",
          ko: "다루기 힘든 문제."
        }
      },
      {
        id: "intrepid",
        word: {
          en: "Intrepid",
          fa: "شجاع/نترس",
          fr: "Intrépide",
          de: "Unerschrocken",
          it: "Intrepido",
          es: "Intrépido",
          ru: "Бесстрашный",
          zh: "无畏",
          ar: "جسور"
        },
        sentence: {
          en: "Intrepid explorer.",
          fa: "کاوشگر بی‌باک.",
          fr: "Explorateur intrépide.",
          de: "Unerschrockener Forscher.",
          it: "Esploratore intrepido.",
          es: "Explorador intrépido.",
          ru: "Бесстрашный исследователь.",
          zh: "无畏的探险家。",
          ar: "مستكشف مقدام.",
          ko: "용감한 탐험가."
        }
      },
      {
        id: "inundate",
        word: {
          en: "Inundate",
          fa: "غرق کردن/پر کردن",
          fr: "Inonder",
          de: "Überschwemmen",
          it: "Inondare",
          es: "Inundar",
          ru: "Заливать",
          zh: "淹没",
          ar: "غمر"
        },
        sentence: {
          en: "Inundate with emails.",
          fa: "غرق کردن با ایمیل.",
          fr: "Inonder d'emails.",
          de: "Mit E-Mails überfluten.",
          it: "Inondare di e-mail.",
          es: "Inundar con correos.",
          ru: "Завалить письмами.",
          zh: "已被电子邮件淹没。",
          ar: "أغرق برسائل البريد الإلكتروني.",
          ko: "이메일로 쇄도하다."
        }
      },
      {
        id: "inured",
        word: {
          en: "Inured",
          fa: "عادت کرده/مقاوم شده",
          fr: "Aguerri",
          de: "Abgehärtet",
          it: "Assuefatto",
          es: "Acostumbrado",
          ru: "Привыкший",
          zh: "习惯",
          ar: "معتاد"
        },
        sentence: {
          en: "Inured to hardship.",
          fa: "عادت کرده به سختی.",
          fr: "Habitué aux difficultés.",
          de: "An Härte gewöhnt.",
          it: "Abituato alle difficoltà.",
          es: "Acostumbrado a las dificultades.",
          ru: "Привыкший к лишениям.",
          zh: "习惯了苦难。",
          ar: "معتاد على المشقة.",
          ko: "고난에 단련된."
        }
      },
      {
        id: "invective",
        word: {
          en: "Invective",
          fa: "فحاشی/دشنام",
          fr: "Invective",
          de: "Schmährede",
          it: "Invettiva",
          es: "Invectiva",
          ru: "Ругань",
          zh: "痛骂",
          ar: "سباب"
        },
        sentence: {
          en: "Stream of invective.",
          fa: "سیل دشنام.",
          fr: "Torrent d'invectives.",
          de: "Strom von Beschimpfungen.",
          it: "Fiume di invettive.",
          es: "Torrente de invectivas.",
          ru: "Поток ругани.",
          zh: "一连串的谩骂。",
          ar: "سيل من الشتائم.",
          ko: "욕설의 흐름."
        }
      },
      {
        id: "inveigle",
        word: {
          en: "Inveigle",
          fa: "فریب دادن/جلب کردن",
          fr: "Amadouer",
          de: "Beschwatzen",
          it: "Adescare",
          es: "Engatusar",
          ru: "Заманивать",
          zh: "诱骗",
          ar: "خدع"
        },
        sentence: {
          en: "Inveigle into joining.",
          fa: "با فریب عضو کردن.",
          fr: "Enjôler pour rejoindre.",
          de: "Zum Beitritt verleiten.",
          it: "Adescare per unirsi.",
          es: "Engatusar para unirse.",
          ru: "Завлечь.",
          zh: "诱骗加入。",
          ar: "استدرج للانضمام.",
          ko: "꾀어 가입시키다."
        }
      },
      {
        id: "inveterate",
        word: {
          en: "Inveterate",
          fa: "مزمن/ریشه‌دار",
          fr: "Invétéré",
          de: "Eingefleischt",
          it: "Inveterato",
          es: "Inveterado",
          ru: "Застарелый",
          zh: "根深蒂固",
          ar: "عتيق"
        },
        sentence: {
          en: "Inveterate smoker.",
          fa: "سیگاری قهار.",
          fr: "Fumeur invétéré.",
          de: "Eingefleischter Raucher.",
          it: "Fumatore incallito.",
          es: "Fumador empedernido.",
          ru: "Заядлый курильщик.",
          zh: "老烟枪。",
          ar: "مدخن مدمن.",
          ko: "골초."
        }
      },
      {
        id: "invidious",
        word: {
          en: "Invidious",
          fa: "نفرت‌انگیز/حسادت‌بر انگیز",
          fr: "Odieux",
          de: "Verhasst",
          it: "Odioso",
          es: "Odioso",
          ru: "Злопыхательский",
          zh: "招人嫉恨",
          ar: "مثير للحسد"
        },
        sentence: {
          en: "Invidious comparison.",
          fa: "مقایسه ناخوشایند.",
          fr: "Comparaison invidieuse.",
          de: "Unfairer Vergleich.",
          it: "Confronto odioso.",
          es: "Comparación envidiosa.",
          ru: "Оскорбительное сравнение.",
          zh: "令人反感的比较。",
          ar: "مقارنة ظالمة.",
          ko: "비위에 거슬리는 비교."
        }
      },
      {
        id: "irascible",
        word: {
          en: "Irascible",
          fa: "تندخو/عصبی",
          fr: "Irascible",
          de: "Jähzornig",
          it: "Irascibile",
          es: "Irascible",
          ru: "Вспыльчивый",
          zh: "易怒",
          ar: "عصبي المزاج"
        },
        sentence: {
          en: "Irascible temper.",
          fa: "اخلاق تند.",
          fr: "Tempérament irascible.",
          de: "Jähzorniges Gemüt.",
          it: "Temperamento irascibile.",
          es: "Temperamento irascible.",
          ru: "Вспыльчивый характер.",
          zh: "易怒的脾气。",
          ar: "مزاج سريع الغضب.",
          ko: "성마른 기질."
        }
      },
      {
        id: "irresolute",
        word: {
          en: "Irresolute",
          fa: "مردد/بی‌تصمیم",
          fr: "Irrésolu",
          de: "Unentschlossen",
          it: "Irresoluto",
          es: "Indeciso",
          ru: "Нерешительный",
          zh: "犹豫不决",
          ar: "متردد"
        },
        sentence: {
          en: "Irresolute leader.",
          fa: "رهبر مردد.",
          fr: "Leader irrésolu.",
          de: "Unentschlossener Führer.",
          it: "Leader irrisoluto.",
          es: "Líder irresoluto.",
          ru: "Нерешительный лидер.",
          zh: "优柔寡断的领导人。",
          ar: "قائد متردد.",
          ko: "우유부단한 지도자."
        }
      },
      {
        id: "itinerant",
        word: {
          en: "Itinerant",
          fa: "سیار/گردشگر",
          fr: "Itinérant",
          de: "Wandernd",
          it: "Itinerante",
          es: "Itinerante",
          ru: "Кочующий",
          zh: "巡回",
          ar: "جوال"
        },
        sentence: {
          en: "Itinerant worker.",
          fa: "کارگر سیار.",
          fr: "Travailleur itinérant.",
          de: "Wanderarbeiter.",
          it: "Lavoratore itinerante.",
          es: "Trabajador itinerante.",
          ru: "Бродячий рабочий.",
          zh: "流动工人。",
          ar: "عامل متجول.",
          ko: "떠돌이 노동자."
        }
      },
      {
        id: "jettison",
        word: {
          en: "Jettison",
          fa: "دور انداختن/تخلیه",
          fr: "Jeter par-dessus bord",
          de: "Über Bord werfen",
          it: "Gettare fuoribordo",
          es: "Arrojar por la borda",
          ru: "Сбрасывать",
          zh: "抛弃",
          ar: "تخلّص من"
        },
        sentence: {
          en: "Jettison the cargo.",
          fa: "بار را بیرون ریختن.",
          fr: "Larguer la cargaison.",
          de: "Die Ladung abwerfen.",
          it: "Gettare il carico.",
          es: "Echar la carga.",
          ru: "Сбросить груз.",
          zh: "抛弃货物。",
          ar: "تخلص من الحمولة.",
          ko: "화물을 투하하다."
        }
      },
      {
        id: "jocular",
        word: {
          en: "Jocular",
          fa: "شوخ‌طبع/جوک‌گو",
          fr: "Plaisant",
          de: "Scherzhaft",
          it: "Scherzoso",
          es: "Jocoso",
          ru: "Шутливый",
          zh: "诙谐",
          ar: "مزاح"
        },
        sentence: {
          en: "Jocular mood.",
          fa: "حالت شوخ.",
          fr: "Humeur joculaire.",
          de: "Scherzhafte Stimmung.",
          it: "Umore giocoso.",
          es: "Humor jocoso.",
          ru: "Шутливое настроение.",
          zh: "诙谐的心情。",
          ar: "مرح.",
          ko: "익살스러운 기분."
        }
      },
      {
        id: "judicious",
        word: {
          en: "Judicious",
          fa: "حکیمانه/عاقلانه",
          fr: "Judicieux",
          de: "Besonnen",
          it: "Giudizioso",
          es: "Juicioso",
          ru: "Благоразумный",
          zh: "明智",
          ar: "حكيم"
        },
        sentence: {
          en: "Judicious use.",
          fa: "استفاده عاقلانه.",
          fr: "Utilisation judicieuse.",
          de: "Urteilsfähiger Gebrauch.",
          it: "Uso giudizioso.",
          es: "Uso juicioso.",
          ru: "Разумное использование.",
          zh: "明智的使用。",
          ar: "استخدام حكيم.",
          ko: "현명한 사용."
        }
      },
      {
        id: "kindred",
        word: {
          en: "Kindred",
          fa: "هم‌خانواده/مشابه",
          fr: "Apparenté",
          de: "Verwandt",
          it: "Consanguineo",
          es: "Afín",
          ru: "Родственный",
          zh: "同类",
          ar: "قريب"
        },
        sentence: {
          en: "Kindred spirits.",
          fa: "ارواح خویشاوند (همفکر).",
          fr: "Âmes sœurs.",
          de: "Verwandte Seelen.",
          it: "Spiriti affini.",
          es: "Espíritus afines.",
          ru: "Родственные души.",
          zh: "志同道合的人。",
          ar: "أرواح وتوافق.",
          ko: "마음이 맞는 사람들."
        }
      },
      {
        id: "labyrinthine",
        word: {
          en: "Labyrinthine",
          fa: "پیچ‌درپیچ/پیچیده",
          fr: "Labyrinthique",
          de: "Labyrinthartig",
          it: "Labirintico",
          es: "Laberíntico",
          ru: "Лабиринтообразный",
          zh: "迷宫般",
          ar: "متاهي"
        },
        sentence: {
          en: "Labyrinthine plot.",
          fa: "طرح پیچیده (هزارتو).",
          fr: "Intrigue labyrinthique.",
          de: "Labyrinthartige Handlung.",
          it: "Trama labirintica.",
          es: "Trama laberíntica.",
          ru: "Запутанный сюжет.",
          zh: "错综复杂的情节。",
          ar: "مؤامرة معقدة.",
          ko: "미로 같은 줄거리."
        }
      },
      {
        id: "laceration",
        word: {
          en: "Laceration",
          fa: "پارگی/جراحت",
          fr: "Lacération",
          de: "Risswunde",
          it: "Lacerazione",
          es: "Laceración",
          ru: "Рваная рана",
          zh: "撕裂伤",
          ar: "تمزّق"
        },
        sentence: {
          en: "Deep laceration.",
          fa: "پارگی عمیق.",
          fr: "Lacération profonde.",
          de: "Tiefe Schnittwunde.",
          it: "Lacerazione profonda.",
          es: "Laceración profunda.",
          ru: "Глубокая рана.",
          zh: "深深的裂口。",
          ar: "تمزق عميق.",
          ko: "심한 열상."
        }
      },
      {
        id: "lachrymose",
        word: {
          en: "Lachrymose",
          fa: "اشک‌ریزان/غم‌انگیز",
          fr: "Larmoyant",
          de: "Tränenreich",
          it: "Lacrimoso",
          es: "Lagrimoso",
          ru: "Слезливый",
          zh: "爱哭",
          ar: "باك"
        },
        sentence: {
          en: "Lachrymose drama.",
          fa: "درام اشک‌آور.",
          fr: "Drame larmoyant.",
          de: "Rührseliges Drama.",
          it: "Dramma lacrimoso.",
          es: "Drama lacrimoso.",
          ru: "Слезливая драма.",
          zh: "催人泪下的戏剧。",
          ar: "دراما مبكية.",
          ko: "눈물겨운 드라마."
        }
      },
      {
        id: "laconic",
        word: {
          en: "Laconic",
          fa: "مختصر و مفید",
          fr: "Laconique",
          de: "Lakonisch",
          it: "Laconico",
          es: "Lacónico",
          ru: "Лаконичный",
          zh: "简洁",
          ar: "موجز"
        },
        sentence: {
          en: "Laconic reply.",
          fa: "پاسخ کوتاه.",
          fr: "Réponse laconique.",
          de: "Lakonische Antwort.",
          it: "Risposta laconica.",
          es: "Respuesta lacónica.",
          ru: "Лаконичный ответ.",
          zh: "简洁的回答。",
          ar: "رد مقتضب.",
          ko: "간결한 답변."
        }
      },
      {
        id: "languid",
        word: {
          en: "Languid",
          fa: "بی‌حال/سست",
          fr: "Languide",
          de: "Matt",
          it: "Languido",
          es: "Lánguido",
          ru: "Вялый",
          zh: "倦怠",
          ar: "فتور"
        },
        sentence: {
          en: "Languid afternoon.",
          fa: "بعد از ظهر کسل کننده.",
          fr: "Après-midi languissant.",
          de: "Träger Nachmittag.",
          it: "Pomeriggio languido.",
          es: "Tarde lánguida.",
          ru: "Вялый полдень.",
          zh: "倦怠的下午。",
          ar: "بعد ظهر فاتر.",
          ko: "나른한 오후."
        }
      },
      {
        id: "largesse",
        word: {
          en: "Largesse",
          fa: "سخاوت/بخشش",
          fr: "Largesse",
          de: "Freigebigkeit",
          it: "Larghezza",
          es: "Largueza",
          ru: "Щедрость",
          zh: "慷慨",
          ar: "كرم"
        },
        sentence: {
          en: "Public largesse.",
          fa: "سخاوت عمومی.",
          fr: "Largesse publique.",
          de: "Öffentliche Großzügigkeit.",
          it: "Elargizione pubblica.",
          es: "Generosidad pública.",
          ru: "Щедрость общества.",
          zh: "公共慷慨。",
          ar: "سخاء عام.",
          ko: "공공의 관대함."
        }
      },
      {
        id: "latent",
        word: {
          en: "Latent",
          fa: "نهفته/پنهان",
          fr: "Latent",
          de: "Latent",
          it: "Latente",
          es: "Latente",
          ru: "Скрытый",
          zh: "潜在",
          ar: "كامن"
        },
        sentence: {
          en: "Latent talent.",
          fa: "استعداد نهفته.",
          fr: "Talent latent.",
          de: "Latentes Talent.",
          it: "Talento latente.",
          es: "Talento latente.",
          ru: "Скрытый талант.",
          zh: "潜在的天赋。",
          ar: "موهبة كامنة.",
          ko: "잠재적 재능."
        }
      },
      {
        id: "laudable",
        word: {
          en: "Laudable",
          fa: "ستودنی/پسندیده",
          fr: "Louable",
          de: "Lobenswert",
          it: "Lodevole",
          es: "Loable",
          ru: "Похвальный",
          zh: "值得称赞",
          ar: "محمود"
        },
        sentence: {
          en: "Laudable goal.",
          fa: "هدف ستودنی.",
          fr: "Objectif louable.",
          de: "Lobenswertes Ziel.",
          it: "Obiettivo lodevole.",
          es: "Objetivo loable.",
          ru: "Похвальная цель.",
          zh: "值得称赞的目标。",
          ar: "هدف جدير بالثناء.",
          ko: "칭찬할 만한 목표."
        }
      },
      {
        id: "lethargic",
        word: {
          en: "Lethargic",
          fa: "بی‌حال/خواب‌آلود",
          fr: "Léthargique",
          de: "Träge",
          it: "Letargico",
          es: "Letárgico",
          ru: "Вялый",
          zh: "昏沉",
          ar: "خادر"
        },
        sentence: {
          en: "Feeling lethargic.",
          fa: "احساس بی حالی.",
          fr: "Se sentir léthargique.",
          de: "Sich lethargisch fühlen.",
          it: "Sentirsi letargico.",
          es: "Sentirse letárgico.",
          ru: "Чувствовать вялость.",
          zh: "感到昏昏欲睡。",
          ar: "الشعور بالخمول.",
          ko: "무기력함."
        }
      },
      {
        id: "levity",
        word: {
          en: "Levity",
          fa: "سبک‌سری/شوخی بی‌جا",
          fr: "Légèreté",
          de: "Leichtfertigkeit",
          it: "Levezza",
          es: "Liviandad",
          ru: "Лёгкость",
          zh: "轻率",
          ar: "هزل"
        },
        sentence: {
          en: "Treat with levity.",
          fa: "با سبکی رفتار کردن.",
          fr: "Traiter avec légèreté.",
          de: "Mit Leichtsinn behandeln.",
          it: "Trattare con leggerezza.",
          es: "Tratar con ligereza.",
          ru: "Относиться легкомысленно.",
          zh: "轻率对待。",
          ar: "عامل بخفة.",
          ko: "경솔하게 대하다."
        }
      },
      {
        id: "limpid",
        word: {
          en: "Limpid",
          fa: "شفاف/روشن",
          fr: "Limpide",
          de: "Klar",
          it: "Limpido",
          es: "Límpido",
          ru: "Прозрачный",
          zh: "清澈",
          ar: "صاف"
        },
        sentence: {
          en: "Limpid water.",
          fa: "آب زلال.",
          fr: "Eau limpide.",
          de: "Klares Wasser.",
          it: "Acqua limpida.",
          es: "Agua límpida.",
          ru: "Прозрачная вода.",
          zh: "清澈的水。",
          ar: "ماء صافي.",
          ko: "맑은 물."
        }
      },
      {
        id: "listless",
        word: {
          en: "Listless",
          fa: "بی‌حال/بی‌علاقه",
          fr: "Apathique",
          de: "Teilnahmslos",
          it: "Apatico",
          es: "Apático",
          ru: "Вялый",
          zh: "无精打采",
          ar: "كئيب"
        },
        sentence: {
          en: "Listless performance.",
          fa: "اجرای بی حال.",
          fr: "Performance apathique.",
          de: "Lustlose Vorstellung.",
          it: "Performance svogliata.",
          es: "Actuación apática.",
          ru: "Вялое выступление.",
          zh: "无精打采的表演。",
          ar: "أداء فاتر.",
          ko: "무기력한 공연."
        }
      },
      {
        id: "lithe",
        word: {
          en: "Lithe",
          fa: "نرم و انعطاف‌پذیر",
          fr: "Souple",
          de: "Geschmeidig",
          it: "Snello",
          es: "Ágil",
          ru: "Гибкий",
          zh: "柔软",
          ar: "رشيق"
        },
        sentence: {
          en: "Lithe body.",
          fa: "بدن نرم و انعطاف‌پذیر.",
          fr: "Corps souple.",
          de: "Geschmeidiger Körper.",
          it: "Corpo flessuoso.",
          es: "Cuerpo ágil.",
          ru: "Гибкое тело.",
          zh: "柔软的身体。",
          ar: "جسد لدن.",
          ko: "유연한 몸."
        }
      },
      {
        id: "loquacious",
        word: {
          en: "Loquacious",
          fa: "سخن‌چین/پرحرف",
          fr: "Bavard",
          de: "Redselig",
          it: "Loquace",
          es: "Locuaz",
          ru: "Разговорчивый",
          zh: "多话",
          ar: "ثرثار"
        },
        sentence: {
          en: "Loquacious neighbor.",
          fa: "همسایه پرحرف.",
          fr: "Voisin loquace.",
          de: "Gesprächiger Nachbar.",
          it: "Vicino loquace.",
          es: "Vecino locuaz.",
          ru: "Болтливый сосед.",
          zh: "多嘴的邻居。",
          ar: "جار ثرثار.",
          ko: "수다스러운 이웃."
        }
      },
      {
        id: "lucid",
        word: {
          en: "Lucid",
          fa: "روشن/شفاف",
          fr: "Lucide",
          de: "Klar",
          it: "Lucido",
          es: "Lúcido",
          ru: "Ясный",
          zh: "清晰",
          ar: "صافي"
        },
        sentence: {
          en: "Lucid dream.",
          fa: "رویای شفاف.",
          fr: "Rêve lucide.",
          de: "Klartraum.",
          it: "Sogno lucido.",
          es: "Sueño lúcido.",
          ru: "Осознанное сновидение.",
          zh: "清醒梦。",
          ar: "حلم واضح.",
          ko: "자각몽."
        }
      },
      {
        id: "lugubrious",
        word: {
          en: "Lugubrious",
          fa: "غم‌انگیز/ماتم‌زده",
          fr: "Lugubre",
          de: "Traurig",
          it: "Lugubre",
          es: "Lúgubre",
          ru: "Мрачный",
          zh: "忧郁",
          ar: "كئيب"
        },
        sentence: {
          en: "Lugubrious music.",
          fa: "موسیقی حزن انگیز.",
          fr: "Musique lugubre.",
          de: "Lugubrious Musik.",
          it: "Musica lugubre.",
          es: "Música lúgubre.",
          ru: "Мрачная музыка.",
          zh: "悲伤的音乐。",
          ar: "موسيقى حزينة.",
          ko: "침울한 음악."
        }
      },
      {
        id: "magnanimous",
        word: {
          en: "Magnanimous",
          fa: "بزرگ‌منش/بخشنده",
          fr: "Magnanime",
          de: "Großmütig",
          it: "Magnanimo",
          es: "Magnánimo",
          ru: "Великодушный",
          zh: "宽宏大量",
          ar: "كريم"
        },
        sentence: {
          en: "Magnanimous gesture.",
          fa: "ژست بزرگوارانه.",
          fr: "Geste magnanime.",
          de: "Großherzige Geste.",
          it: "Gesto magnanimo.",
          es: "Gesto magnánimo.",
          ru: "Великодушный жест.",
          zh: "宽宏大量的姿态。",
          ar: "لفتة شهمة.",
          ko: "관대한 제스처."
        }
      },
      {
        id: "malediction",
        word: {
          en: "Malediction",
          fa: "لعنت/نفرین",
          fr: "Malédiction",
          de: "Fluch",
          it: "Maledizione",
          es: "Maldición",
          ru: "Проклятие",
          zh: "诅咒",
          ar: "لعنة"
        },
        sentence: {
          en: "Utter a malediction.",
          fa: "نفرین کردن.",
          fr: "Prononcer une malédiction.",
          de: "Einen Fluch aussprechen.",
          it: "Pronunciare una maledizione.",
          es: "Proferir una maldición.",
          ru: "Произнести проклятие.",
          zh: "发出诅咒。",
          ar: "أطلق لعنة.",
          ko: "저주를 퍼붓다."
        }
      },
      {
        id: "malevolent",
        word: {
          en: "Malevolent",
          fa: "بدخواه/خبیث",
          fr: "Malveillant",
          de: "Böswillig",
          it: "Malevolo",
          es: "Malevolente",
          ru: "Зложелательный",
          zh: "恶毒",
          ar: "خبيث"
        },
        sentence: {
          en: "Malevolent spirit.",
          fa: "روح بدخواه.",
          fr: "Esprit malveillant.",
          de: "Böswilliger Geist.",
          it: "Spirito malevolo.",
          es: "Espíritu malévolo.",
          ru: "Злой дух.",
          zh: "恶毒的灵魂。",
          ar: "روح خبيثة.",
          ko: "악의적인 영혼."
        }
      },
      {
        id: "malingerer",
        word: {
          en: "Malingerer",
          fa: "تمارض‌کننده",
          fr: "Simulateur",
          de: "Drückeberger",
          it: "Simulatore",
          es: "Fingidor",
          ru: "Симулянт",
          zh: "装病者",
          ar: "متظاهر بالمرض"
        },
        sentence: {
          en: "He is a malingerer.",
          fa: "او تمارض می‌کند.",
          fr: "C'est un simulateur.",
          de: "Er ist ein Simulant.",
          it: "È un simulatore.",
          es: "Es un simulador.",
          ru: "Он симулянт.",
          zh: "他是装病者。",
          ar: "هو متمارض.",
          ko: "그는 꾀병쟁이입니다."
        }
      },
      {
        id: "malleable",
        word: {
          en: "Malleable",
          fa: "انعطاف‌پذیر/قابل شکل‌گیری",
          fr: "Malléable",
          de: "Formbar",
          it: "Malleabile",
          es: "Maleable",
          ru: "Ковкий",
          zh: "可塑",
          ar: "قابل التشكيل"
        },
        sentence: {
          en: "Malleable metal.",
          fa: "فلز چکش‌خوار.",
          fr: "Métal malléable.",
          de: "Verformbares Metall.",
          it: "Metallo malleabile.",
          es: "Metal maleable.",
          ru: "Ковкий металл.",
          zh: "有延展性的金属。",
          ar: "معدن قابل للطرق.",
          ko: "전성 있는 금속."
        }
      },
      {
        id: "maverick",
        word: {
          en: "Maverick",
          fa: "مستقل/سرکش",
          fr: "Franc-tireur",
          de: "Einzelgänger",
          it: "Indipendente",
          es: "Disidente",
          ru: "Нонконформист",
          zh: "特立独行",
          ar: "متمرد"
        },
        sentence: {
          en: "Maverick politician.",
          fa: "سیاستمدار تک‌رو.",
          fr: "Politicien franc-tireur.",
          de: "Einzelgängerischer Politiker.",
          it: "Politico anticonformista.",
          es: "Político disidente.",
          ru: "Политик-диссидент.",
          zh: "特立独行的政治家。",
          ar: "سياسي غير تقليدي.",
          ko: "독불장군 정치인."
        }
      },
      {
        id: "melancholy",
        word: {
          en: "Melancholy",
          fa: "غمگینی/اندوه",
          fr: "Mélancolie",
          de: "Schwermut",
          it: "Malinconia",
          es: "Melancolía",
          ru: "Меланхолия",
          zh: "忧郁",
          ar: "كآبة"
        },
        sentence: {
          en: "Deep melancholy.",
          fa: "اندوه عمیق.",
          fr: "Profonde mélancolie.",
          de: "Tiefe Melancholie.",
          it: "Profonda malinconia.",
          es: "Profunda melancolía.",
          ru: "Глубокая меланхолия.",
          zh: "深深的忧郁。",
          ar: "كآبة عميقة.",
          ko: "깊은 우울."
        }
      },
      {
        id: "mercurial",
        word: {
          en: "Mercurial",
          fa: "متغیر/تندخو",
          fr: "Mercuriel",
          de: "Launenhaft",
          it: "Mercuriale",
          es: "Mercurial",
          ru: "Переменчивый",
          zh: "反复无常",
          ar: "متقلب المزاج"
        },
        sentence: {
          en: "Mercurial temperament.",
          fa: "مزاج متغیر (دمدمی).",
          fr: "Tempérament mercuriel.",
          de: "Launisches Temperament.",
          it: "Temperamento mercuriale.",
          es: "Temperamento mercurial.",
          ru: "Переменчивый темперамент.",
          zh: "反复无常的脾气。",
          ar: "مزاج متقلب.",
          ko: "변덕스러운 기질."
        }
      },
      {
        id: "meticulous",
        word: {
          en: "Meticulous",
          fa: "دقیق/وسواسی",
          fr: "Méticuleux",
          de: "Akribisch",
          it: "Meticoloso",
          es: "Meticuloso",
          ru: "Тщательный",
          zh: "一丝不苟",
          ar: "دقيق"
        },
        sentence: {
          en: "Meticulous planning.",
          fa: "برنامه‌ریزی دقیق.",
          fr: "Planification méticuleuse.",
          de: "Akribische Planung.",
          it: "Pianificazione meticolosa.",
          es: "Planificación meticulosa.",
          ru: "Тщательное планирование.",
          zh: "周密的计划。",
          ar: "تخطيط دقيق.",
          ko: "꼼꼼한 계획."
        }
      },
      {
        id: "mimicry",
        word: {
          en: "Mimicry",
          fa: "تقلید/شبیه‌سازی",
          fr: "Mimétisme",
          de: "Mimikry",
          it: "Mimetismo",
          es: "Mimetismo",
          ru: "Мимикрия",
          zh: "模仿",
          ar: "محاكاة"
        },
        sentence: {
          en: "Protective mimicry.",
          fa: "تقلید محافظتی.",
          fr: "Mimétisme protecteur.",
          de: "Schutzmimikry.",
          it: "Mimetismo protettivo.",
          es: "Mimetismo protector.",
          ru: "Защитная мимикрия.",
          zh: "保护性模仿。",
          ar: "محاكاة وقائية.",
          ko: "보호색."
        }
      },
      {
        id: "minatory",
        word: {
          en: "Minatory",
          fa: "تهدیدآمیز",
          fr: "Menaçant",
          de: "Drohend",
          it: "Minatorio",
          es: "Amenazante",
          ru: "Угрожающий",
          zh: "威胁",
          ar: "مهدّد"
        },
        sentence: {
          en: "Minatory gesture.",
          fa: "ژست تهدیدآمیز.",
          fr: "Geste minatoire.",
          de: "Drohende Geste.",
          it: "Gesto minaccioso.",
          es: "Gesto amenazador.",
          ru: "Угрожающий жест.",
          zh: "威胁的手势。",
          ar: "إشارة تهديد.",
          ko: "위협적인 몸짓."
        }
      },
      {
        id: "misanthrope",
        word: {
          en: "Misanthrope",
          fa: "آدم‌گریز/منزوی",
          fr: "Misanthrope",
          de: "Menschenfeind",
          it: "Misantropo",
          es: "Misántropo",
          ru: "Мизантроп",
          zh: "厌世者",
          ar: "زاهد الناس"
        },
        sentence: {
          en: "He became a misanthrope.",
          fa: "او مردم‌گریز شد.",
          fr: "Il est devenu misanthrope.",
          de: "Er wurde zum Menschenfeind.",
          it: "Divenne un misantropo.",
          es: "Se convirtió en misántropo.",
          ru: "Он стал мизантропом.",
          zh: "他变得厌世。",
          ar: "أصبح كارها للبشر.",
          ko: "그는 염세주의자가 되었습니다."
        }
      },
      {
        id: "mitigate",
        word: {
          en: "Mitigate",
          fa: "تخفیف دادن/کاستن",
          fr: "Atténuer",
          de: "Mildern",
          it: "Mitigare",
          es: "Mitigar",
          ru: "Смягчать",
          zh: "减轻",
          ar: "خفّف"
        },
        sentence: {
          en: "Mitigate the risk.",
          fa: "ریسک را کاهش بده.",
          fr: "Atténuer le risque.",
          de: "Das Risiko mindern.",
          it: "Mitigare il rischio.",
          es: "Mitigar el riesgo.",
          ru: "Снизить риск.",
          zh: "降低风险。",
          ar: "خفف من المخاطر.",
          ko: "위험을 완화하세요."
        }
      },
      {
        id: "mollify",
        word: {
          en: "Mollify",
          fa: "آرام کردن/تسکین",
          fr: "Apaiser",
          de: "Besänftigen",
          it: "Placat",
          es: "Aplacarse",
          ru: "Успокаивать",
          zh: "安抚",
          ar: "سكّن"
        },
        sentence: {
          en: "Mollify the crowd.",
          fa: "جمعیت را آرام کن.",
          fr: "Apaiser la foule.",
          de: "Die Menge besänftigen.",
          it: "Placare la folla.",
          es: "Apaciguar a la multitud.",
          ru: "Успокоить толпу.",
          zh: "安抚人群。",
          ar: "هدء الحشد.",
          ko: "군중을 달래세요."
        }
      },
      {
        id: "morose",
        word: {
          en: "Morose",
          fa: "بدخلق/غمگین",
          fr: "Morose",
          de: "Mürrisch",
          it: "Mesto",
          es: "Mórbido",
          ru: "Угрюмый",
          zh: "阴郁",
          ar: "كئيب"
        },
        sentence: {
          en: "Morose silence.",
          fa: "سکوت غمگین.",
          fr: "Silence morose.",
          de: "Mürrisches Schweigen.",
          it: "Silenzio cupo.",
          es: "Silencio moroso.",
          ru: "Угрюмое молчание.",
          zh: "忧郁的沉默。",
          ar: "صمت كئيب.",
          ko: "시무룩한 침묵."
        }
      },
      {
        id: "mundane",
        word: {
          en: "Mundane",
          fa: "عادی/دنیوی",
          fr: "Mondain",
          de: "Weltlich",
          it: "Mondano",
          es: "Mundano",
          ru: "Мирской",
          zh: "平凡",
          ar: "دنيوي"
        },
        sentence: {
          en: "Mundane tasks.",
          fa: "کارهای روزمره (پیش پا افتاده).",
          fr: "Tâches banales.",
          de: "Alltägliche Aufgaben.",
          it: "Compiti banali.",
          es: "Tareas mundanas.",
          ru: "Рутинные задачи.",
          zh: "平凡的任务。",
          ar: "مهام عادية.",
          ko: "일상적인 업무."
        }
      },
      {
        id: "myopic",
        word: {
          en: "Myopic",
          fa: "کوتاه‌بین/تنگ‌نظر",
          fr: "Myope",
          de: "Kurzsichtig",
          it: "Miope",
          es: "Miope",
          ru: "Близорукий",
          zh: "近视/目光短浅",
          ar: "قصير النظر"
        },
        sentence: {
          en: "Myopic view.",
          fa: "دیدگاه کوته‌بینانه.",
          fr: "Vue myope.",
          de: "Kurzsichtige Ansicht.",
          it: "Visione miope.",
          es: "Visión miope.",
          ru: "Близорукий взгляд.",
          zh: "短视的观点。",
          ar: "نظرة قاصرة.",
          ko: "근시안적인 견해."
        }
      },
      {
        id: "nadir",
        word: {
          en: "Nadir",
          fa: "پایین‌ترین نقطه",
          fr: "Nadir",
          de: "Tiefpunkt",
          it: "Nadir",
          es: "Nadir",
          ru: "Надир",
          zh: "最低点",
          ar: "الحضيض"
        },
        sentence: {
          en: "Reached the nadir.",
          fa: "به حضیض (پایین‌ترین حد) رسید.",
          fr: "Atteint le nadir.",
          de: "Den Tiefpunkt erreicht.",
          it: "Raggiunto il nadir.",
          es: "Alcanzó el nadir.",
          ru: "Достиг дна.",
          zh: "到达最低点。",
          ar: "وصل الى الحضيض.",
          ko: "밑바닥에 도달했습니다."
        }
      },
      {
        id: "nefarious",
        word: {
          en: "Nefarious",
          fa: "شرورانه/خبیث",
          fr: "Néfaste",
          de: "Niederträchtig",
          it: "Nefando",
          es: "Nefasto",
          ru: "Гнусный",
          zh: "邪恶",
          ar: "خبيث"
        },
        sentence: {
          en: "Nefarious plot.",
          fa: "نقشه شوم.",
          fr: "Complot néfaste.",
          de: "Schändlicher Plan.",
          it: "Trama nefanda.",
          es: "Trama nefasta.",
          ru: "Гнусный заговор.",
          zh: "邪恶的阴谋。",
          ar: "مؤامرة شائنة.",
          ko: "사악한 음모."
        }
      },
      {
        id: "neophyte",
        word: {
          en: "Neophyte",
          fa: "مبتدی/تازه‌کار",
          fr: "Néophyte",
          de: "Neuling",
          it: "Neofita",
          es: "Neófito",
          ru: "Новичок",
          zh: "新手",
          ar: "مبتدئ"
        },
        sentence: {
          en: "Political neophyte.",
          fa: "نوسفر سیاسی (تازه‌کار).",
          fr: "Néophyte politique.",
          de: "Politischer Neuling.",
          it: "Neofita politico.",
          es: "Neófito político.",
          ru: "Политический новичок.",
          zh: "政治新手。",
          ar: "مبتدئ سياسي.",
          ko: "정치 신인."
        }
      },
      {
        id: "noxious",
        word: {
          en: "Noxious",
          fa: "مضر/سمی",
          fr: "Nocif",
          de: "Schädlich",
          it: "Nocivo",
          es: "Nocivo",
          ru: "Вредный",
          zh: "有害",
          ar: "ضار"
        },
        sentence: {
          en: "Noxious fumes.",
          fa: "دودهای سمی.",
          fr: "Vapeurs nocives.",
          de: "Schädliche Dämpfe.",
          it: "Fumi nocivi.",
          es: "Humos nocivos.",
          ru: "Вредные испарения.",
          zh: "有毒烟雾。",
          ar: "أبخرة ضارة.",
          ko: "유해 가스."
        }
      },
      {
        id: "obdurate",
        word: {
          en: "Obdurate",
          fa: "سرسخت/لجوج",
          fr: "Obstiné",
          de: "Verstockt",
          it: "Ostinatamente",
          es: "Obstinado",
          ru: "Упрямый",
          zh: "顽固",
          ar: "عنيد"
        },
        sentence: {
          en: "Obdurate refusal.",
          fa: "امتناع سرسختانه.",
          fr: "Refus obstiné.",
          de: "Hartnäckige Weigerung.",
          it: "Rifiuto ostinato.",
          es: "Negativa obstinada.",
          ru: "Упрямый отказ.",
          zh: "顽固的拒绝。",
          ar: "رفض عنيد.",
          ko: "완고한 거절."
        }
      },
      {
        id: "obfuscate",
        word: {
          en: "Obfuscate",
          fa: "مبهم کردن/گیج کردن",
          fr: "Obscurcir",
          de: "Verdunkeln",
          it: "Offuscare",
          es: "Ofuscar",
          ru: "Запутывать",
          zh: "使模糊",
          ar: "أغشى"
        },
        sentence: {
          en: "Obfuscate the truth.",
          fa: "حقیقت را مبهم کن.",
          fr: "Obfusquer la vérité.",
          de: "Die Wahrheit verschleiern.",
          it: "Offuscare la verità.",
          es: "Ofuscar la verdad.",
          ru: "Запутать истину.",
          zh: "混淆视听。",
          ar: "طمس الحقيقة.",
          ko: "진실을 흐리게 하다."
        }
      },
      {
        id: "oblique",
        word: {
          en: "Oblique",
          fa: "غیرمستقیم/مایل",
          fr: "Oblique",
          de: "Schräg",
          it: "Obliquo",
          es: "Oblicuo",
          ru: "Косвенный",
          zh: "斜",
          ar: "مائل"
        },
        sentence: {
          en: "Oblique referece.",
          fa: "اشاره ضمنی.",
          fr: "Référence oblique.",
          de: "Indirekter Hinweis.",
          it: "Riferimento obliquo.",
          es: "Referencia oblicua.",
          ru: "Косвенная ссылка.",
          zh: "间接提及。",
          ar: "إشارة غير مباشرة.",
          ko: "간접적인 언급."
        }
      },
      {
        id: "obsequious",
        word: {
          en: "Obsequious",
          fa: "چاپلوس/متملق",
          fr: "Obséquieux",
          de: "Unterwürfig",
          it: "Ossequioso",
          es: "Obsequioso",
          ru: "Подхалимский",
          zh: "谄媚",
          ar: "متزلف"
        },
        sentence: {
          en: "Obsequious waiter.",
          fa: "پیشخدمت چاپلوس.",
          fr: "Serveur obséquieux.",
          de: "Unterwürfiger Kellner.",
          it: "Cameriere ossequioso.",
          es: "Camarero obsequioso.",
          ru: "Подобострастный официант.",
          zh: "谄媚的服务员。",
          ar: "نادل متملق.",
          ko: "아첨하는 웨이터."
        }
      },
      {
        id: "obviate",
        word: {
          en: "Obviate",
          fa: "رفع کردن/جلوگیری",
          fr: "Obvier",
          de: "Vermeiden",
          it: "Obviare",
          es: "Obviar",
          ru: "Предотвращать",
          zh: "消除",
          ar: "درأ"
        },
        sentence: {
          en: "Obviate the need.",
          fa: "نیاز را برطرف کن.",
          fr: "Obvier au besoin.",
          de: "Die Notwendigkeit beseitigen.",
          it: "Ovvianre alla necessità.",
          es: "Obviar la necesidad.",
          ru: "Устранить необходимость.",
          zh: "消除需求。",
          ar: "تجاوز الحاجة.",
          ko: "필요를 없애다."
        }
      },
      {
        id: "occlude",
        word: {
          en: "Occlude",
          fa: "بستن/مسدود کردن",
          fr: "Occlure",
          de: "Verschließen",
          it: "Occludere",
          es: "Ocluir",
          ru: "Закупоривать",
          zh: "阻塞",
          ar: "سدّ"
        },
        sentence: {
          en: "Occlude the view.",
          fa: "دید را مسدود کن.",
          fr: "Boucher la vue.",
          de: "Die Sicht versperren.",
          it: "Occludere la vista.",
          es: "Ocluir la vista.",
          ru: "Закрыть вид.",
          zh: "遮挡视线。",
          ar: "سد الرؤية.",
          ko: "시야를 가리다."
        }
      },
      {
        id: "odious",
        word: {
          en: "Odious",
          fa: "منفور/نفرت‌انگیز",
          fr: "Odieux",
          de: "Abscheulich",
          it: "Odioso",
          es: "Odioso",
          ru: "Отвратительный",
          zh: "可憎",
          ar: "ممقوت"
        },
        sentence: {
          en: "Odious crime.",
          fa: "جنایت نفرت‌انگیز.",
          fr: "Crime odieux.",
          de: "Abscheuliches Verbrechen.",
          it: "Crimine odioso.",
          es: "Crimen odioso.",
          ru: "Одиозное преступление.",
          zh: "可憎的罪行。",
          ar: "جريمة بشعة.",
          ko: "끔찍한 범죄."
        }
      },
      {
        id: "officious",
        word: {
          en: "Officious",
          fa: "فضول/دخالت‌جو",
          fr: "Officieux",
          de: "Aufdringlich",
          it: "Zelante",
          es: "Oficioso",
          ru: "Назойливый",
          zh: "多管闲事",
          ar: "متطفل"
        },
        sentence: {
          en: "Officious little man.",
          fa: "مردک فضول.",
          fr: "Petit homme officieux.",
          de: "Wichtigtuerischer kleiner Mann.",
          it: "Ometto invadente.",
          es: "Hombrecito oficioso.",
          ru: "Назойливый человечек.",
          zh: "爱管闲事的小个子。",
          ar: "رجل فضولي.",
          ko: "주제넘은 사람."
        }
      },
      {
        id: "ominous",
        word: {
          en: "Ominous",
          fa: "شوم/تهدیدآمیز",
          fr: "Ominieux",
          de: "Unheilvoll",
          it: "Ominoso",
          es: "Ominoso",
          ru: "Зловещий",
          zh: "不祥",
          ar: "مشؤوم"
        },
        sentence: {
          en: "Ominous clouds.",
          fa: "ابرهای شوم.",
          fr: "Nuages menaçants.",
          de: "Unheilvolle Wolken.",
          it: "Nuvole minacciose.",
          es: "Nubes ominosas.",
          ru: "Зловещие облака.",
          zh: "不祥的乌云。",
          ar: "غيوم مشؤومة.",
          ko: "불길한 구름."
        }
      },
      {
        id: "opprobrium",
        word: {
          en: "Opprobrium",
          fa: "ننگ/سرزنش",
          fr: "Opprobre",
          de: "Schmach",
          it: "Opprobrio",
          es: "Oprobio",
          ru: "Позор",
          zh: "耻辱",
          ar: "عار"
        },
        sentence: {
          en: "Public opprobrium.",
          fa: "رسوایی عمومی.",
          fr: "Opprobre public.",
          de: "Öffentliche Schande.",
          it: "Opprobrio pubblico.",
          es: "Oprobio público.",
          ru: "Общественное порицание.",
          zh: "公众的谴责。",
          ar: "عار عام.",
          ko: "대중의 비난."
        }
      },
      {
        id: "oscillate",
        word: {
          en: "Oscillate",
          fa: "نوسان کردن/تردید",
          fr: "Osciller",
          de: "Schwingen",
          it: "Oscillare",
          es: "Oscilar",
          ru: "Колебаться",
          zh: "摆动",
          ar: "تأرجح"
        },
        sentence: {
          en: "Oscillate between options.",
          fa: "بین گزینه‌ها نوسان داشتن.",
          fr: "Osciller entre les options.",
          de: "Zwischen Optionen schwanken.",
          it: "Oscillare tra le opzioni.",
          es: "Oscilar entre opciones.",
          ru: "Колебаться между вариантами.",
          zh: "在选项之间摇摆不定。",
          ar: "تذذب بين الخيارات.",
          ko: "옵션 사이를 오가다."
        }
      },
      {
        id: "ostensible",
        word: {
          en: "Ostensible",
          fa: "ظاهری/به ظاهر",
          fr: "Apparent",
          de: "Offensichtlich",
          it: "Ostensible",
          es: "Ostensible",
          ru: "Мнимый",
          zh: "表面",
          ar: "ظاهري"
        },
        sentence: {
          en: "Ostensible reason.",
          fa: "دلیل ظاهری.",
          fr: "Raison ostensible.",
          de: "Angebliche Grund.",
          it: "Ragione ostensibile.",
          es: "Razón ostensible.",
          ru: "Мнимая причина.",
          zh: "表面上的理由。",
          ar: "سبب ظاهري.",
          ko: "표면적인 이유."
        }
      },
      {
        id: "ostracize",
        word: {
          en: "Ostracize",
          fa: "طرد کردن/تبعید",
          fr: "Ostraciser",
          de: "Ächten",
          it: "Ostracizzare",
          es: "Ostracizar",
          ru: "Подвергать остракизму",
          zh: "排斥",
          ar: "نفى"
        },
        sentence: {
          en: "Ostracize from society.",
          fa: "طرد شدن از جامعه.",
          fr: "Ostraciser de la société.",
          de: "Aus der Gesellschaft ächten.",
          it: "Ostracizzare dalla società.",
          es: "Ostracizar de la sociedad.",
          ru: "Изгнать из общества.",
          zh: "被社会排斥。",
          ar: "نبذ من المجتمع.",
          ko: "사회에서 추방하다."
        }
      },
      {
        id: "palliate",
        word: {
          en: "Palliate",
          fa: "تسکین موقت/توجیه",
          fr: "Pallier",
          de: "Lindern",
          it: "Palliare",
          es: "Paliar",
          ru: "Смягчать",
          zh: "缓和",
          ar: "خفّف مؤقتاً"
        },
        sentence: {
          en: "Palliate symptoms.",
          fa: "علائم را تسکین میده.",
          fr: "Pallier les symptômes.",
          de: "Symptome lindern.",
          it: "Palliare i sintomi.",
          es: "Paliar los síntomas.",
          ru: "Смягчить симптомы.",
          zh: "缓解症状。",
          ar: "خفف الأعراض.",
          ko: "증상을 완화하다."
        }
      },
      {
        id: "panacea",
        word: {
          en: "Panacea",
          fa: "داروی همه‌چیز",
          fr: "Panacée",
          de: "Allheilmittel",
          it: "Panacea",
          es: "Panacea",
          ru: "Панацея",
          zh: "万灵药",
          ar: "ترياق"
        },
        sentence: {
          en: "Universal panacea.",
          fa: "اکسیر جهانی (درمان همه دردها).",
          fr: "Panacée universelle.",
          de: "Universalheilmittel.",
          it: "Panacea universale.",
          es: "Panacea universal.",
          ru: "Универсальная панацея.",
          zh: "万灵药。",
          ar: "دواء لكل داء.",
          ko: "만병통치약."
        }
      },
      {
        id: "paradigm",
        word: {
          en: "Paradigm",
          fa: "الگو/نمونه",
          fr: "Paradigme",
          de: "Paradigma",
          it: "Paradigma",
          es: "Paradigma",
          ru: "Парадигма",
          zh: "范式",
          ar: "نموذج"
        },
        sentence: {
          en: "New paradigm.",
          fa: "الگوی جدید.",
          fr: "Nouveau paradigme.",
          de: "Neues Paradigma.",
          it: "Nuovo paradigma.",
          es: "Nuevo paradigma.",
          ru: "Новая парадигма.",
          zh: "新范式。",
          ar: "نموذج جديد.",
          ko: "새로운 패러다임."
        }
      },
      {
        id: "paragon",
        word: {
          en: "Paragon",
          fa: "نمونه کامل/الگو",
          fr: "Parangon",
          de: "Musterbeispiel",
          it: "Paragone",
          es: "Dechado",
          ru: "Образец",
          zh: "典范",
          ar: "مثال أعلى"
        },
        sentence: {
          en: "Paragon of virtue.",
          fa: "نمونه فضیلت.",
          fr: "Paragon de vertu.",
          de: "Vorbild an Tugend.",
          it: "Paragone di virtù.",
          es: "Paragón de virtud.",
          ru: "Образец добродетели.",
          zh: "美德的典范。",
          ar: "نموذج للفضيلة.",
          ko: "미덕의 모범."
        }
      },
      {
        id: "pariah",
        word: {
          en: "Pariah",
          fa: "طردشده/پست",
          fr: "Paria",
          de: "Parias",
          it: "Paria",
          es: "Paria",
          ru: "Изгой",
          zh: "贱民",
          ar: "منبوذ"
        },
        sentence: {
          en: "Social pariah.",
          fa: "مطرود اجتماعی.",
          fr: "Paria social.",
          de: "Gesellschaftlicher Paria.",
          it: "Paria sociale.",
          es: "Paria social.",
          ru: "Социальный изгой.",
          zh: "社会弃儿。",
          ar: "منبوذ اجتماعيا.",
          ko: "사회적 부랑자."
        }
      }
    ]
  },
  {
    level: "C2",
    items: [
      {
        id: "abjure",
        word: {
          en: "Abjure",
          fa: "سوگند ترک کردن/تجدیدنظر رسمی",
          fr: "Abjurer",
          de: "Abschwören",
          it: "Abiurare",
          es: "Abjurar",
          ru: "Отрекаться",
          zh: "发誓放弃",
          ar: "تخلّى عن قسم"
        }
      },
      {
        id: "abstruse",
        word: {
          en: "Abstruse",
          fa: "دشوارفهم/مبهم",
          fr: "Abstrus",
          de: "Abstrus",
          it: "Astruso",
          es: "Abstruso",
          ru: "Труднопонимаемый",
          zh: "深奥",
          ar: "غامض جداً"
        }
      },
      {
        id: "acculturation",
        word: {
          en: "Acculturation",
          fa: "فرهنگ‌پذیری",
          fr: "Acculturation",
          de: "Akkulturation",
          it: "Acculturazione",
          es: "Aculturación",
          ru: "Аккультурация",
          zh: "文化适应",
          ar: "تثاقف"
        }
      },
      {
        id: "adumbrate",
        word: {
          en: "Adumbrate",
          fa: "سایه انداختن/پیش‌نمایش دادن",
          fr: "Ébaucher",
          de: "Andeuten",
          it: "Adombrare",
          es: "Adumbrar",
          ru: "Наметить",
          zh: "预示",
          ar: "ألمح بظلال"
        }
      },
      {
        id: "anathema",
        word: {
          en: "Anathema",
          fa: "ملعون/نفرین‌شده",
          fr: "Anathème",
          de: "Anathema",
          it: "Anatema",
          es: "Anatema",
          ru: "Анафема",
          zh: "诅咒",
          ar: "لعنة"
        }
      },
      {
        id: "anodyne",
        word: {
          en: "Anodyne",
          fa: "بی‌ضرر/ملایم/خنثی",
          fr: "Anodin",
          de: "Harmlos",
          it: "Anodino",
          es: "Anodino",
          ru: "Безобидный",
          zh: "平淡无奇",
          ar: "مسكّن"
        }
      },
      {
        id: "apocryphal",
        word: {
          en: "Apocryphal",
          fa: "مشکوک به صحت/جعلی",
          fr: "Apocryphe",
          de: "Apokryph",
          it: "Apocrifo",
          es: "Apócrifo",
          ru: "Апокрифический",
          zh: "伪经",
          ar: "منسوب كذباً"
        }
      },
      {
        id: "apotheosis",
        word: {
          en: "Apotheosis",
          fa: "اوج کمال/تقدیس",
          fr: "Apothéose",
          de: "Apotheose",
          it: "Apoteosi",
          es: "Apoteosis",
          ru: "Апофеоз",
          zh: "神化",
          ar: "تأليه"
        }
      },
      {
        id: "apposite",
        word: {
          en: "Apposite",
          fa: "مناسب/به‌جا",
          fr: "Approprié",
          de: "Passend",
          it: "Appropriato",
          es: "Apropiado",
          ru: "Уместный",
          zh: "恰当",
          ar: "ملائم"
        }
      },
      {
        id: "apprise",
        word: {
          en: "Apprise",
          fa: "آگاه کردن/مطلع کردن",
          fr: "Informier",
          de: "Benachrichtigen",
          it: "Informare",
          es: "Informar",
          ru: "Извещать",
          zh: "通知",
          ar: "أبلغ"
        }
      },
      {
        id: "argot",
        word: {
          en: "Argot",
          fa: "زبان خاص گروه/عامیانه",
          fr: "Argot",
          de: "Jargon",
          it: "Gergo",
          es: "Jerga",
          ru: "Жаргон",
          zh: "行话",
          ar: "عامية"
        }
      },
      {
        id: "arriviste",
        word: {
          en: "Arriviste",
          fa: "جاه‌طلب بی‌پرنسیپ",
          fr: "Arriviste",
          de: "Karrierist",
          it: "Arrivista",
          es: "Advenedizo",
          ru: "Карьерист",
          zh: "暴发户",
          ar: "طامح انتهازي"
        }
      },
      {
        id: "asseveration",
        word: {
          en: "Asseveration",
          fa: "تأکید جدی/سوگند",
          fr: "Asseveration",
          de: "Beteuerung",
          it: "Asserzione",
          es: "Aseveración",
          ru: "Утверждение",
          zh: "断言",
          ar: "تأكيد شديد"
        }
      },
      {
        id: "atavism",
        word: {
          en: "Atavism",
          fa: "بازگشت به اجداد/ارتجاع",
          fr: "Atavisme",
          de: "Atavismus",
          it: "Atavismo",
          es: "Atavismo",
          ru: "Атавизм",
          zh: "返祖现象",
          ar: "رجعية وراثية"
        }
      },
      {
        id: "autarky",
        word: {
          en: "Autarky",
          fa: "خودکفایی اقتصادی",
          fr: "Autarcie",
          de: "Autarkie",
          it: "Autarchia",
          es: "Autarquía",
          ru: "Автаркия",
          zh: "自给自足",
          ar: "اكتفاء ذاتي"
        }
      },
      {
        id: "bellicose",
        word: {
          en: "Bellicose",
          fa: "جنگ‌طلب/خشمگین",
          fr: "Belliqueux",
          de: "Kriegslustig",
          it: "Bellicoso",
          es: "Belicoso",
          ru: "Воинственный",
          zh: "好战",
          ar: "محارب"
        }
      },
      {
        id: "bibliophile",
        word: {
          en: "Bibliophile",
          fa: "کتاب‌دوست/کتاب‌شناس",
          fr: "Bibliophile",
          de: "Bücherliebhaber",
          it: "Bibliophile",
          es: "Bibliófilo",
          ru: "Библиофил",
          zh: "藏书家",
          ar: "محب الكتب"
        }
      },
      {
        id: "bowdlerize",
        word: {
          en: "Bowdlerize",
          fa: "سانسور کردن/پاک‌سازی",
          fr: "Expurger",
          de: "Entschärfen",
          it: "Espurgare",
          es: "Expurgar",
          ru: "Смягчать",
          zh: "删节",
          ar: "حذف الفواحش"
        }
      },
      {
        id: "bruit",
        word: {
          en: "Bruit",
          fa: "شایعه کردن/پخش کردن",
          fr: "Répandre",
          de: "Verbreiten",
          it: "Divulgare",
          es: "Divulgar",
          ru: "Распространять слух",
          zh: "散布",
          ar: "نشَر شائعة"
        }
      },
      {
        id: "calumny",
        word: {
          en: "Calumny",
          fa: "تهمت/افترا",
          fr: "Calomnie",
          de: "Verleumdung",
          it: "Calunnia",
          es: "Calumnia",
          ru: "Клевета",
          zh: "诽谤",
          ar: "بهتان"
        }
      },
      {
        id: "captious",
        word: {
          en: "Captious",
          fa: "ایرادگیر/مغلطه‌گر",
          fr: "Chicanier",
          de: "Sophistisch",
          it: "Cavilloso",
          es: "Capcioso",
          ru: "Придирчивый",
          zh: "吹毛求疵",
          ar: "لجوج"
        }
      },
      {
        id: "chicanery",
        word: {
          en: "Chicanery",
          fa: "کلک قانونی/فریبکاری",
          fr: "Chicane",
          de: "Schikane",
          it: "Sofisma",
          es: "Argucia",
          ru: "Крючкотворство",
          zh: "狡诈",
          ar: "خداع قانوني"
        }
      },
      {
        id: "chimerical",
        word: {
          en: "Chimerical",
          fa: "خیالی/وهمی",
          fr: "Chimérique",
          de: "Chimärisch",
          it: "Chimerico",
          es: "Quimérico",
          ru: "Химерический",
          zh: "虚幻",
          ar: "خيالي"
        }
      },
      {
        id: "codicil",
        word: {
          en: "Codicil",
          fa: "الحاقیه وصیت‌نامه",
          fr: "Codicille",
          de: "Nachtrag",
          it: "Codice",
          es: "Codicilo",
          ru: "Кодицилл",
          zh: "遗嘱附录",
          ar: "ملحق وصية"
        }
      },
      {
        id: "contumacious",
        word: {
          en: "Contumacious",
          fa: "سرکش/نافرمان",
          fr: "Contumace",
          de: "Widerspenstig",
          it: "Contumace",
          es: "Contumaz",
          ru: "Непокорный",
          zh: "叛逆",
          ar: "متمرّد"
        }
      },
      {
        id: "corpulent",
        word: {
          en: "Corpulent",
          fa: "چاق و فربه",
          fr: "Corpulent",
          de: "Korpulent",
          it: "Corpulent",
          es: "Corpulent",
          ru: "Тучный",
          zh: "肥胖",
          ar: "سمين"
        }
      },
      {
        id: "cosset",
        word: {
          en: "Cosset",
          fa: "لوس کردن/نوازش زیاد",
          fr: "Choyer",
          de: "Verwöhnen",
          it: "Coccolare",
          es: "Mimar",
          ru: "Баловать",
          zh: "宠爱",
          ar: "دلّل"
        }
      },
      {
        id: "crepuscular",
        word: {
          en: "Crepuscular",
          fa: "مرتبط با غروب/کم‌نور",
          fr: "Crépusculaire",
          de: "Dämmerungs-",
          it: "Crepuscolare",
          es: "Crepuscular",
          ru: "Сумеречный",
          zh: "黄昏",
          ar: "شفقي"
        }
      },
      {
        id: "deleterious",
        word: {
          en: "Deleterious",
          fa: "مضر/زیان‌آور",
          fr: "Nuisible",
          de: "Schädlich",
          it: "Deleterio",
          es: "Deletereo",
          ru: "Вредный",
          zh: "有害",
          ar: "مؤذ"
        }
      },
      {
        id: "demagogue",
        word: {
          en: "Demagogue",
          fa: "رهبر عوام‌فریب",
          fr: "Démagogue",
          de: "Demagoge",
          it: "Demagogo",
          es: "Demagogo",
          ru: "Демагог",
          zh: "煽动家",
          ar: "ديماغوغي"
        }
      },
      {
        id: "denouement",
        word: {
          en: "Denouement",
          fa: "گره‌گشایی/پایان داستان",
          fr: "Dénouement",
          de: "Auflösung",
          it: "Denouement",
          es: "Desenlace",
          ru: "Развязка",
          zh: "结局",
          ar: "حل العقدة"
        }
      },
      {
        id: "descry",
        word: {
          en: "Descry",
          fa: "دیدن از دور/تشخیص دادن",
          fr: "Apercevoir",
          de: "Erkennen",
          it: "Scorgere",
          es: "Divisar",
          ru: "Разглядеть",
          zh: "远远看见",
          ar: "أبصر عن بعد"
        }
      },
      {
        id: "desuetude",
        word: {
          en: "Desuetude",
          fa: "منسوخ شدن/عدم استفاده",
          fr: "Désuétude",
          de: "Außer-Gebrauch",
          it: "Desuetudine",
          es: "Desuso",
          ru: "Выход из употребления",
          zh: "废止",
          ar: "انقطاع الاستعمال"
        }
      },
      {
        id: "diaphanous",
        word: {
          en: "Diaphanous",
          fa: "نازک و شفاف",
          fr: "Diaphane",
          de: "Durchsichtig",
          it: "Diafano",
          es: "Diáfano",
          ru: "Прозрачный",
          zh: "透明",
          ar: "شفاف جداً"
        }
      },
      {
        id: "dirge",
        word: {
          en: "Dirge",
          fa: "مرثیه/نوحه",
          fr: "Complainte",
          de: "Totenklage",
          it: "Lamento",
          es: "Endecha",
          ru: "Погребальная песня",
          zh: "挽歌",
          ar: "مرثية"
        }
      },
      {
        id: "dipsomaniac",
        word: {
          en: "Dipsomaniac",
          fa: "الکلی/معتاد به الکل",
          fr: "Dipsomane",
          de: "Trinker",
          it: "Dipsomane",
          es: "Dipsómano",
          ru: "Запойный пьяница",
          zh: "酒狂",
          ar: "مدمن خمر"
        }
      },
      {
        id: "discomfit",
        word: {
          en: "Discomfit",
          fa: "ناکام کردن/پریشان کردن",
          fr: "Déconcerter",
          de: "Verlegen machen",
          it: "Sconcertare",
          es: "Desconcertar",
          ru: "Смущать",
          zh: "使狼狈",
          ar: "أربك"
        }
      },
      {
        id: "disingenuous",
        word: {
          en: "Disingenuous",
          fa: "ریاکار/غیرصادق",
          fr: "Hypocrite",
          de: "Unaufrichtig",
          it: "Ipocrita",
          es: "Falso",
          ru: "Неискренний",
          zh: "虚伪",
          ar: "غير صادق"
        }
      },
      {
        id: "dissolute",
        word: {
          en: "Dissolute",
          fa: "فاسد/هرزه",
          fr: "Dissolu",
          de: "Lasterhaft",
          it: "Dissoluto",
          es: "Disoluto",
          ru: "Развратный",
          zh: "放荡",
          ar: "فاسق"
        }
      },
      {
        id: "ebullience",
        word: {
          en: "Ebullience",
          fa: "جوش و خروش/سرزندگی",
          fr: "Ébullition",
          de: "Überschwang",
          it: "Esultanza",
          es: "Ebullición",
          ru: "Бурность",
          zh: "热情洋溢",
          ar: "حماسة"
        }
      },
      {
        id: "effete",
        word: {
          en: "Effete",
          fa: "فرسوده/بی‌رمق",
          fr: "Épuisé",
          de: "Entartet",
          it: "Effeminato",
          es: "Decadente",
          ru: "Изнеженный",
          zh: "衰弱",
          ar: "متهالك"
        }
      },
      {
        id: "elegiac",
        word: {
          en: "Elegiac",
          fa: "مرثیه‌وار/غم‌انگیز",
          fr: "Élegiaque",
          de: "Elegisch",
          it: "Elegiaco",
          es: "Elegíaco",
          ru: "Элегический",
          zh: "哀悼的",
          ar: "رثائي"
        }
      },
      {
        id: "emollient",
        word: {
          en: "Emollient",
          fa: "نرم‌کننده/تسکین‌دهنده",
          fr: "Émollient",
          de: "Erweichend",
          it: "Emolliente",
          es: "Emoliente",
          ru: "Смягчающий",
          zh: "润肤",
          ar: "ملطّف"
        }
      },
      {
        id: "encomium",
        word: {
          en: "Encomium",
          fa: "ستایش‌نامه",
          fr: "Éloge",
          de: "Lobpreisung",
          it: "Encomio",
          es: "Elogio",
          ru: "Похвала",
          zh: "赞辞",
          ar: "مدح"
        }
      },
      {
        id: "epicure",
        word: {
          en: "Epicure",
          fa: "لذت‌گرا/خوش‌گذران",
          fr: "Épicurien",
          de: "Genießer",
          it: "Epicureo",
          es: "Epicúreo",
          ru: "Эпикуреец",
          zh: "享乐主义者",
          ar: "لذوي"
        }
      },
      {
        id: "epistemology",
        word: {
          en: "Epistemology",
          fa: "معرفت‌شناسی",
          fr: "Épistémologie",
          de: "Erkenntnistheorie",
          it: "Epistemologia",
          es: "Epistemología",
          ru: "Эпистемология",
          zh: "认识论",
          ar: "نظرية المعرفة"
        }
      },
      {
        id: "equipoise",
        word: {
          en: "Equipoise",
          fa: "تعادل/توازن",
          fr: "Équilibre",
          de: "Gleichgewicht",
          it: "Equilibrio",
          es: "Equilibrio",
          ru: "Равновесие",
          zh: "平衡",
          ar: "توازن"
        }
      },
      {
        id: "ersatz",
        word: {
          en: "Ersatz",
          fa: "جایگزین مصنوعی/تقلبی",
          fr: "Succédané",
          de: "Ersatz",
          it: "Sostituto",
          es: "Sucedáneo",
          ru: "Суррогат",
          zh: "代用品",
          ar: "بديل مصطنع"
        }
      },
      {
        id: "eschew",
        word: {
          en: "Eschew",
          fa: "اجتناب کردن/دوری کردن",
          fr: "Éviter",
          de: "Meiden",
          it: "Schivare",
          es: "Evitar",
          ru: "Избегать",
          zh: "避免",
          ar: "اجتنب"
        }
      },
      {
        id: "euphemism",
        word: {
          en: "Euphemism",
          fa: "خوشایندسازی/تعبیر ملایم",
          fr: "Euphémisme",
          de: "Euphemismus",
          it: "Eufemismo",
          es: "Eufemismo",
          ru: "Эвфемизм",
          zh: "委婉语",
          ar: "تلطيف"
        }
      },
      {
        id: "excoriate",
        word: {
          en: "Excoriate",
          fa: "پوست کندن/انتقاد شدید",
          fr: "Écorcher",
          de: "Zerfleißen",
          it: "Escoriare",
          es: "Escoriar",
          ru: "Жестоко критиковать",
          zh: "严厉斥责",
          ar: "جلد"
        }
      },
      {
        id: "execrable",
        word: {
          en: "Execrable",
          fa: "نفرت‌انگیز/لعنت‌شده",
          fr: "Exécrable",
          de: "Abscheulich",
          it: "Esecrabile",
          es: "Execrable",
          ru: "Отвратительный",
          zh: "可憎",
          ar: "ملعون"
        }
      },
      {
        id: "exegesis",
        word: {
          en: "Exegesis",
          fa: "تفسیر متون مقدس",
          fr: "Exégèse",
          de: "Exegese",
          it: "Esegesi",
          es: "Exégesis",
          ru: "Экзегеза",
          zh: "释经",
          ar: "تفسير"
        }
      },
      {
        id: "expatiate",
        word: {
          en: "Expatiate",
          fa: "به تفصیل سخن گفتن",
          fr: "S'étendre",
          de: "Sich auslassen",
          it: "Dilungarsi",
          es: "Extenderse",
          ru: "Распространяться",
          zh: "详述",
          ar: "توسّع"
        }
      },
      {
        id: "expurgate",
        word: {
          en: "Expurgate",
          fa: "پاک‌سازی کردن/سانسور",
          fr: "Expurger",
          de: "Säubern",
          it: "Espurgare",
          es: "Expurgar",
          ru: "Очищать",
          zh: "删改",
          ar: "حذف الفواحش"
        }
      },
      {
        id: "extirpate",
        word: {
          en: "Extirpate",
          fa: "ریشه‌کن کردن/نابود کردن",
          fr: "Extirper",
          de: "Ausrotten",
          it: "Estirpare",
          es: "Extirpar",
          ru: "Искоренять",
          zh: "根除",
          ar: "استأصل"
        }
      },
      {
        id: "factitious",
        word: {
          en: "Factitious",
          fa: "مصنوعی/ساختگی",
          fr: "Factice",
          de: "Künstlich",
          it: "Fittizio",
          es: "Ficticio",
          ru: "Искусственный",
          zh: "人为",
          ar: "مفتعل"
        }
      },
      {
        id: "farrago",
        word: {
          en: "Farrago",
          fa: "آمیخته نامنظم/هرج‌ومرج",
          fr: "Fatras",
          de: "Mischmasch",
          it: "Misto",
          es: "Mezcolanza",
          ru: "Смесь",
          zh: "大杂烩",
          ar: "خليط"
        }
      },
      {
        id: "fatidic",
        word: {
          en: "Fatidic",
          fa: "پیشگویانه",
          fr: "Fatidique",
          de: "Schicksalhaft",
          it: "Fatidico",
          es: "Fátidico",
          ru: "Пророческий",
          zh: "预言的",
          ar: "نبوي"
        }
      },
      {
        id: "fecund",
        word: {
          en: "Fecund",
          fa: "بارور/حاصلخیز",
          fr: "Fécond",
          de: "Fruchtbar",
          it: "Fecundo",
          es: "Fecundo",
          ru: "Плодородный",
          zh: "肥沃",
          ar: "خصيب"
        }
      },
      {
        id: "fiat",
        word: {
          en: "Fiat",
          fa: "فرمان/حکم رسمی",
          fr: "Fiat",
          de: "Erlass",
          it: "Fiat",
          es: "Fiat",
          ru: "Указ",
          zh: "命令",
          ar: "أمر"
        }
      },
      {
        id: "filibuster",
        word: {
          en: "Filibuster",
          fa: "ممانعت پارلمانی/دزدی دریایی",
          fr: "Obstruction",
          de: "Filibuster",
          it: "Ostruzionismo",
          es: "Filibustero",
          ru: "Флибустьер",
          zh: "阻挠议事",
          ar: "تعطيل برلماني"
        }
      },
      {
        id: "fissiparous",
        word: {
          en: "Fissiparous",
          fa: "تکثیرشونده با تقسیم",
          fr: "Fissipare",
          de: "Spaltend",
          it: "Fissiparo",
          es: "Fisíparo",
          ru: "Делящийся",
          zh: "分裂生殖",
          ar: "انشطاري"
        }
      },
      {
        id: "flagitious",
        word: {
          en: "Flagitious",
          fa: "جنایت‌کارانه/شرم‌آور",
          fr: "Infâme",
          de: "Schändlich",
          it: "Flagizioso",
          es: "Flagicioso",
          ru: "Злодейский",
          zh: "罪大恶极",
          ar: "فاجر"
        }
      },
      {
        id: "florid",
        word: {
          en: "Florid",
          fa: "پرزرق‌وبرق/گل‌گون",
          fr: "Fleuri",
          de: "Blumig",
          it: "Florido",
          es: "Florido",
          ru: "Цветистый",
          zh: "华丽",
          ar: "مزخرف"
        }
      },
      {
        id: "fugacious",
        word: {
          en: "Fugacious",
          fa: "فرارکننده/گذرا",
          fr: "Fugace",
          de: "Flüchtig",
          it: "Fugace",
          es: "Fugaz",
          ru: "Мимолётный",
          zh: "短暂",
          ar: "زائل"
        }
      },
      {
        id: "fuliginous",
        word: {
          en: "Fuliginous",
          fa: "دودآلود/تیره و تار",
          fr: "Fuligineux",
          de: "Russig",
          it: "Fuligginoso",
          es: "Fuliginoso",
          ru: "Чёрный как сажа",
          zh: "烟尘",
          ar: "مدخّن"
        }
      },
      {
        id: "fulsome",
        word: {
          en: "Fulsome",
          fa: "زیاده از حد/چرب‌زبانی",
          fr: "Excessif",
          de: "Übertrieben",
          it: "Eccessivo",
          es: "Excesivo",
          ru: "Чрезмерный",
          zh: "过分",
          ar: "مفرط"
        }
      },
      {
        id: "funambulist",
        word: {
          en: "Funambulist",
          fa: "بندباز",
          fr: "Funambule",
          de: "Seiltänzer",
          it: "Funambolo",
          es: "Funambulista",
          ru: "Канатоходец",
          zh: "走钢丝者",
          ar: "مشّاء على الحبل"
        }
      },
      {
        id: "fustian",
        word: {
          en: "Fustian",
          fa: "پرطمطراق/پشمالو",
          fr: "Fustaine",
          de: "Schwulst",
          it: "Fustagno",
          es: "Fustán",
          ru: "Пафосный",
          zh: "浮夸",
          ar: "مبالغ"
        }
      },
      {
        id: "gainsay",
        word: {
          en: "Gainsay",
          fa: "انکار کردن/مخالفت",
          fr: "Contredire",
          de: "Bestreiten",
          it: "Contraddire",
          es: "Contradecir",
          ru: "Оспаривать",
          zh: "否认",
          ar: "أنكر"
        }
      },
      {
        id: "gallimaufry",
        word: {
          en: "Gallimaufry",
          fa: "آش شله‌قلمکار/هرج‌ومرج",
          fr: "Mélange",
          de: "Durcheinander",
          it: "Miscuglio",
          es: "Revoltijo",
          ru: "Всякая всячина",
          zh: "杂烩",
          ar: "خليط"
        }
      },
      {
        id: "gamely",
        word: {
          en: "Gamely",
          fa: "با شجاعت/با دل و جرات",
          fr: "Vaillamment",
          de: "Tapfer",
          it: "Coraggiosamente",
          es: "Valientemente",
          ru: "Храбро",
          zh: "勇敢地",
          ar: "بشجاعة"
        }
      },
      {
        id: "garrulity",
        word: {
          en: "Garrulity",
          fa: "پرحرفی/سخن‌چینی",
          fr: "Bavardage",
          de: "Geschwätzigkeit",
          it: "Loquacità",
          es: "Garrulería",
          ru: "Болтливость",
          zh: "多嘴",
          ar: "ثرثرة"
        }
      },
      {
        id: "gasconade",
        word: {
          en: "Gasconade",
          fa: "لاف‌زنی/گنده‌گویی",
          fr: "Fanfaronnade",
          de: "Großsprecherei",
          it: "Vanto",
          es: "Fanfarronada",
          ru: "Хвастовство",
          zh: "吹牛",
          ar: "تبجّح"
        }
      },
      {
        id: "gestate",
        word: {
          en: "Gestate",
          fa: "حامله بودن/در حال شکل‌گیری",
          fr: "Gester",
          de: "Austragen",
          it: "Gestare",
          es: "Gestar",
          ru: "Вынашивать",
          zh: "孕育",
          ar: "حمل"
        }
      },
      {
        id: "glabrous",
        word: {
          en: "Glabrous",
          fa: "بی‌مو/صاف",
          fr: "Glabre",
          de: "Kahl",
          it: "Glabro",
          es: "Lampino",
          ru: "Гладкий",
          zh: "无毛",
          ar: "أصلع"
        }
      },
      {
        id: "gourmand",
        word: {
          en: "Gourmand",
          fa: "شکمو/پرخور",
          fr: "Gourmand",
          de: "Schlemmer",
          it: "Ghiottone",
          es: "Gourmand",
          ru: "Чревоугодник",
          zh: "美食家",
          ar: "نهم"
        }
      },
      {
        id: "grandiloquence",
        word: {
          en: "Grandiloquence",
          fa: "سخنوری پرطمطراق",
          fr: "Grandiloquence",
          de: "Schwülstigkeit",
          it: "Grandiloquenza",
          es: "Grandilocuencia",
          ru: "Пафос",
          zh: "浮夸",
          ar: "إنشاء"
        }
      },
      {
        id: "gravamen",
        word: {
          en: "Gravamen",
          fa: "اصل شکایت/جوهر اتهام",
          fr: "Gravamen",
          de: "Kern der Beschwerde",
          it: "Gravame",
          es: "Gravamen",
          ru: "Суть жалобы",
          zh: "申诉要点",
          ar: "جوهر الشكوى"
        }
      },
      {
        id: "gustatory",
        word: {
          en: "Gustatory",
          fa: "مرتبط با چشایی",
          fr: "Gustatif",
          de: "Geschmacklich",
          it: "Gustativo",
          es: "Gustativo",
          ru: "Вкусовой",
          zh: "味觉的",
          ar: "ذوقي"
        }
      },
      {
        id: "halcyon",
        word: {
          en: "Halcyon",
          fa: "آرام و خوش",
          fr: "Halcyon",
          de: "Friedlich",
          it: "Alcionio",
          es: "Alción",
          ru: "Безмятежный",
          zh: "平静",
          ar: "هادئ"
        }
      },
      {
        id: "haplology",
        word: {
          en: "Haplology",
          fa: "حذف هجا (زبان‌شناسی)",
          fr: "Haplologie",
          de: "Haplologie",
          it: "Aplologia",
          es: "Haplología",
          ru: "Гаплология",
          zh: "单音省略",
          ar: "حذف مقطع"
        }
      },
      {
        id: "harbinger",
        word: {
          en: "Harbinger",
          fa: "پیش‌آهنگ/مژده‌دهنده",
          fr: "Précurseur",
          de: "Vorbote",
          it: "Precursore",
          es: "Presagio",
          ru: "Предвестник",
          zh: "先兆",
          ar: "بشير"
        }
      },
      {
        id: "hebetude",
        word: {
          en: "Hebetude",
          fa: "کندی ذهن/بی‌حالی",
          fr: "Hébétude",
          de: "Stumpfsinn",
          it: "Ebetudine",
          es: "Hebetud",
          ru: "Тупость",
          zh: "迟钝",
          ar: "خمود"
        }
      },
      {
        id: "hegira",
        word: {
          en: "Hegira",
          fa: "هجرت/فرار",
          fr: "Hégire",
          de: "Hidschra",
          it: "Egira",
          es: "Hégira",
          ru: "Хиджра",
          zh: "希吉来",
          ar: "هجرة"
        }
      },
      {
        id: "hieratic",
        word: {
          en: "Hieratic",
          fa: "مقدس/کاهنانه",
          fr: "Hiératique",
          de: "Hieratisch",
          it: "Ieratico",
          es: "Hierático",
          ru: "Иератический",
          zh: "圣职的",
          ar: "كهنوتي"
        }
      },
      {
        id: "hirsute",
        word: {
          en: "Hirsute",
          fa: "پشمالو/مودار",
          fr: "Hirsute",
          de: "Struppig",
          it: "Irsuto",
          es: "Hirsuto",
          ru: "Косматый",
          zh: "多毛",
          ar: "كث الشعر"
        }
      },
      {
        id: "histrionic",
        word: {
          en: "Histrionic",
          fa: "نمایشی/تئاتری",
          fr: "Histrionique",
          de: "Theatralisch",
          it: "Istrionico",
          es: "Histriónico",
          ru: "Театральный",
          zh: "戏剧性",
          ar: "تمثيلي"
        }
      },
      {
        id: "holograph",
        word: {
          en: "Holograph",
          fa: "دست‌نوشته کامل",
          fr: "Holographe",
          de: "Eigenhändig",
          it: "Olografo",
          es: "Olografo",
          ru: "Голографический",
          zh: "亲笔",
          ar: "خط يد كامل"
        }
      },
      {
        id: "homiletic",
        word: {
          en: "Homiletic",
          fa: "موعظه‌گو/خطابه‌ای",
          fr: "Homilétique",
          de: "Homiletisch",
          it: "Omiletico",
          es: "Homilético",
          ru: "Проповеднический",
          zh: "说教的",
          ar: "وعظي"
        }
      },
      {
        id: "horripilation",
        word: {
          en: "Horripilation",
          fa: "سیخ شدن موها (از ترس)",
          fr: "Horripilation",
          de: "Gänsehaut",
          it: "Orripilazione",
          es: "Horripilación",
          ru: "Мурашки",
          zh: "毛发竖立",
          ar: "قشعريرة"
        }
      },
      {
        id: "hypnagogic",
        word: {
          en: "Hypnagogic",
          fa: "مرتبط با حالت پیش از خواب",
          fr: "Hypnagogique",
          de: "Hypnagogisch",
          it: "Ipnagogico",
          es: "Hipnagógico",
          ru: "Гипнагогический",
          zh: "入睡前",
          ar: "قبل النوم"
        }
      },
      {
        id: "hypnopompic",
        word: {
          en: "Hypnopompic",
          fa: "مرتبط با لحظه بیداری",
          fr: "Hypnopompique",
          de: "Hypnopompisch",
          it: "Ipnopompico",
          es: "Hipnopómpico",
          ru: "Гипнопомпический",
          zh: "醒后幻觉",
          ar: "عند الاستيقاظ"
        }
      },
      {
        id: "ignominy",
        word: {
          en: "Ignominy",
          fa: "ننگ/خواری",
          fr: "Ignominie",
          de: "Schmach",
          it: "Ignominia",
          es: "Ignominia",
          ru: "Позор",
          zh: "耻辱",
          ar: "هوان"
        }
      },
      {
        id: "imbroglio",
        word: {
          en: "Imbroglio",
          fa: "گرفتاری پیچیده/درهم",
          fr: "Imbroglio",
          de: "Verwickelte Lage",
          it: "Imbroglio",
          es: "Lío",
          ru: "Запутанная ситуация",
          zh: "纠葛",
          ar: "تعقيد"
        }
      },
      {
        id: "impecunious",
        word: {
          en: "Impecunious",
          fa: "بی‌پول/فقیر",
          fr: "Impecunieux",
          de: "Mittellos",
          it: "Povero",
          es: "Impecunioso",
          ru: "Неимущий",
          zh: "贫穷",
          ar: "معوز"
        }
      },
      {
        id: "imperturbable",
        word: {
          en: "Imperturbable",
          fa: "آرام/خونسرد",
          fr: "Imperturbable",
          de: "Unerschütterlich",
          it: "Imperturbabile",
          es: "Imperturbable",
          ru: "Непоколебимый",
          zh: "沉着",
          ar: "غير مضطرب"
        }
      },
      {
        id: "impignorate",
        word: {
          en: "Impignorate",
          fa: "گرو گذاشتن",
          fr: "Mettre en gage",
          de: "Verpfänden",
          it: "Impegnare",
          es: "Empeñar",
          ru: "Заложить",
          zh: "抵押",
          ar: "رهن"
        }
      },
      {
        id: "imprimatur",
        word: {
          en: "Imprimatur",
          fa: "اجازه چاپ/تأیید رسمی",
          fr: "Imprimatur",
          de: "Imprimatur",
          it: "Imprimatur",
          es: "Imprimatur",
          ru: "Разрешение на печать",
          zh: "出版许可",
          ar: "إجازة طبع"
        }
      },
      {
        id: "inamorata",
        word: {
          en: "Inamorata",
          fa: "معشوقه زن",
          fr: "Inamorata",
          de: "Geliebte",
          it: "Innamorata",
          es: "Enamorada",
          ru: "Возлюбленная",
          zh: "情妇",
          ar: "محبوبة"
        }
      },
      {
        id: "incunabula",
        word: {
          en: "Incunabula",
          fa: "کتاب‌های چاپ اولیه (قرن ۱۵)",
          fr: "Incunable",
          de: "Wiegendruck",
          it: "Incunabolo",
          es: "Incunable",
          ru: "Инкунабула",
          zh: "早期印刷书",
          ar: "مطبوعات قديمة"
        }
      },
      {
        id: "inebriate",
        word: {
          en: "Inebriate",
          fa: "مست کردن/مست",
          fr: "Ivrogn",
          de: "Betrunken machen",
          it: "Inebriare",
          es: "Embriagar",
          ru: "Опьянять",
          zh: "醉",
          ar: "سكّر"
        }
      },
      {
        id: "ineluctable",
        word: {
          en: "Ineluctable",
          fa: "گریزناپذیر/اجتناب‌ناپذیر",
          fr: "Inéluctable",
          de: "Unausweichlich",
          it: "Inevitabile",
          es: "Inefable",
          ru: "Неотвратимый",
          zh: "不可避免",
          ar: "حتمي"
        }
      },
      {
        id: "inexorable",
        word: {
          en: "Inexorable",
          fa: "بی‌رحم/نرمش‌ناپذیر",
          fr: "Inexorable",
          de: "Unerbittlich",
          it: "Inesorabile",
          es: "Inexorable",
          ru: "Неумолимый",
          zh: "无情",
          ar: "لا يلين"
        }
      },
      {
        id: "infraction",
        word: {
          en: "Infraction",
          fa: "تخلف/نقض قانون",
          fr: "Infraction",
          de: "Verstoß",
          it: "Infrazione",
          es: "Infracción",
          ru: "Нарушение",
          zh: "违法",
          ar: "مخالفة"
        }
      },
      {
        id: "ingrate",
        word: {
          en: "Ingrate",
          fa: "ناسپاس/بی‌معرفت",
          fr: "Ingrat",
          de: "Undankbar",
          it: "Ingrato",
          es: "Ingrato",
          ru: "Неблагодарный",
          zh: "忘恩负义",
          ar: "ناكر للجميل"
        }
      },
      {
        id: "inimitable",
        word: {
          en: "Inimitable",
          fa: "بی‌نظیر/تقلیدناپذیر",
          fr: "Inimitable",
          de: "Unnachahmlich",
          it: "Inimitabile",
          es: "Inimitable",
          ru: "Неподражаемый",
          zh: "无法模仿",
          ar: "لا يضاهى"
        }
      },
      {
        id: "iniquitous",
        word: {
          en: "Iniquitous",
          fa: "شرورانه/ناعادلانه",
          fr: "Inique",
          de: "Gottlos",
          it: "Iniquo",
          es: "Inicuo",
          ru: "Нечестивый",
          zh: "邪恶",
          ar: "ظالم"
        }
      },
      {
        id: "innuendo",
        word: {
          en: "Innuendo",
          fa: "کنایه/اشاره غیرمستقیم",
          fr: "Insinuation",
          de: "Anspielung",
          it: "Insinuazione",
          es: "Insinuación",
          ru: "Намёк",
          zh: "影射",
          ar: "تلميح"
        }
      },
      {
        id: "insouciant",
        word: {
          en: "Insouciant",
          fa: "بی‌خیال/بی‌اهمیت",
          fr: "Insouciant",
          de: "Sorglos",
          it: "Spensierato",
          es: "Despreocupado",
          ru: "Беззаботный",
          zh: "漫不经心",
          ar: "لا مبالي"
        }
      },
      {
        id: "interdict",
        word: {
          en: "Interdict",
          fa: "ممنوعیت/تکفیر",
          fr: "Interdit",
          de: "Interdikt",
          it: "Interdetto",
          es: "Interdicto",
          ru: "Запрещение",
          zh: "禁令",
          ar: "حظر"
        }
      },
      {
        id: "intransigent",
        word: {
          en: "Intransigent",
          fa: "تسلیم‌ناپذیر/سازش‌ناپذیر",
          fr: "Intransigeant",
          de: "Unnachgiebig",
          it: "Intransigente",
          es: "Intransigente",
          ru: "Непримиримый",
          zh: "不妥协",
          ar: "عنيد"
        }
      },
      {
        id: "inure",
        word: {
          en: "Inure",
          fa: "عادت دادن/سخت کردن",
          fr: "Aguerri",
          de: "Abhärten",
          it: "Assuefare",
          es: "Acostumbrar",
          ru: "Приучать",
          zh: "使习惯",
          ar: "درّب"
        }
      },
      {
        id: "invective",
        word: {
          en: "Invective",
          fa: "فحاشی/دشنام",
          fr: "Invective",
          de: "Schmährede",
          it: "Invettiva",
          es: "Invectiva",
          ru: "Ругань",
          zh: "痛骂",
          ar: "سباب"
        }
      },
      {
        id: "inveigh",
        word: {
          en: "Inveigh",
          fa: "حمله لفظی کردن",
          fr: "Invectiver",
          de: "Losziehen",
          it: "Inveire",
          es: "Invectivar",
          ru: "Ругать",
          zh: "痛骂",
          ar: "هاجم"
        }
      },
      {
        id: "irenic",
        word: {
          en: "Irenic",
          fa: "صلح‌جویانه/آشتی‌طلب",
          fr: "Irénique",
          de: "Friedfertig",
          it: "Irenico",
          es: "Irénico",
          ru: "Миролюбивый",
          zh: "和平的",
          ar: "سلمي"
        }
      },
      {
        id: "jingoist",
        word: {
          en: "Jingoist",
          fa: "میهن‌پرست افراطی",
          fr: "Chauvin",
          de: "Hurra-Patriot",
          it: "Sciovinista",
          es: "Chauvinista",
          ru: "Шовинист",
          zh: "沙文主义者",
          ar: "شوفيني"
        }
      },
      {
        id: "kudos",
        word: {
          en: "Kudos",
          fa: "تحسین/شهرت",
          fr: "Kudos",
          de: "Ruhm",
          it: "Kudos",
          es: "Kudos",
          ru: "Слава",
          zh: "荣誉",
          ar: "تكريم"
        }
      },
      {
        id: "labile",
        word: {
          en: "Labile",
          fa: "ناپایدار/متغیر",
          fr: "Labile",
          de: "Labil",
          it: "Labile",
          es: "Lábil",
          ru: "Нестабильный",
          zh: "不稳定",
          ar: "غير مستقر"
        }
      },
      {
        id: "laconic",
        word: {
          en: "Laconic",
          fa: "مختصر و مفید",
          fr: "Laconique",
          de: "Lakonisch",
          it: "Laconico",
          es: "Lacónico",
          ru: "Лаконичный",
          zh: "简洁",
          ar: "موجز"
        }
      },
      {
        id: "languor",
        word: {
          en: "Languor",
          fa: "سستی/بی‌حالی",
          fr: "Languor",
          de: "Mattigkeit",
          it: "Languore",
          es: "Languidez",
          ru: "Томность",
          zh: "倦怠",
          ar: "فتور"
        }
      },
      {
        id: "limn",
        word: {
          en: "Limn",
          fa: "نقاشی کردن/توصیف زنده",
          fr: "Dépeindre",
          de: "Darstellen",
          it: "Dipingere",
          es: "Delinear",
          ru: "Описывать",
          zh: "描绘",
          ar: "رسم"
        }
      },
      {
        id: "literati",
        word: {
          en: "Literati",
          fa: "اهل قلم/روشنفکران",
          fr: "Littérateurs",
          de: "Gebildete",
          it: "Letterati",
          es: "Literatos",
          ru: "Литераторы",
          zh: "文人",
          ar: "الأدباء"
        }
      },
      {
        id: "logorrhea",
        word: {
          en: "Logorrhea",
          fa: "پرحرفی بیمارگونه",
          fr: "Logorrhée",
          de: "Wortschwall",
          it: "Logorrea",
          es: "Logorrea",
          ru: "Логорея",
          zh: "多话症",
          ar: "كثرة الكلام"
        }
      },
      {
        id: "louche",
        word: {
          en: "Louche",
          fa: "مشکوک/مبهم",
          fr: "Louche",
          de: "Zwielichtig",
          it: "Loscamente",
          es: "Turbio",
          ru: "Подозрительный",
          zh: "可疑",
          ar: "مريب"
        }
      },
      {
        id: "lucubration",
        word: {
          en: "Lucubration",
          fa: "کار شبانه/نوشته سنگین",
          fr: "Lucubration",
          de: "Nachtarbeit",
          it: "Lucubrazione",
          es: "Lucubración",
          ru: "Ночные бдения",
          zh: "夜间苦读",
          ar: "سهر على الكتابة"
        }
      },
      {
        id: "macerate",
        word: {
          en: "Macerate",
          fa: "نرم کردن با خیساندن",
          fr: "Macérer",
          de: "Einweichen",
          it: "Macerare",
          es: "Macerar",
          ru: "Размачивать",
          zh: "浸渍",
          ar: "نقع"
        }
      },
      {
        id: "maieutic",
        word: {
          en: "Maieutic",
          fa: "سقراطی (روش پرسش و پاسخ)",
          fr: "Maïeutique",
          de: "Maieutisch",
          it: "Maieutico",
          es: "Maiéutico",
          ru: "Майевтический",
          zh: "助产术式",
          ar: "توليدي"
        }
      },
      {
        id: "manumit",
        word: {
          en: "Manumit",
          fa: "آزاد کردن برده",
          fr: "Affranchir",
          de: "Freilassen",
          it: "Manumettere",
          es: "Manumitir",
          ru: "Отпускать на волю",
          zh: "释放奴隶",
          ar: "عتق"
        }
      },
      {
        id: "mendacious",
        word: {
          en: "Mendacious",
          fa: "دروغگو/کذب",
          fr: "Menteur",
          de: "Lügenhaft",
          it: "Mendace",
          es: "Mendaz",
          ru: "Лживый",
          zh: "撒谎",
          ar: "كذوب"
        }
      },
      {
        id: "meretricious",
        word: {
          en: "Meretricious",
          fa: "فریبنده ظاهری/هرزه",
          fr: "Meretricio",
          de: "Aufdringlich",
          it: "Meretricio",
          es: "Meretricio",
          ru: "Пестрый",
          zh: "华而不实",
          ar: "زائف"
        }
      },
      {
        id: "minatory",
        word: {
          en: "Minatory",
          fa: "تهدیدآمیز",
          fr: "Menaçant",
          de: "Drohend",
          it: "Minatorio",
          es: "Amenazante",
          ru: "Угрожающий",
          zh: "威胁",
          ar: "مهدّد"
        }
      },
      {
        id: "mordant",
        word: {
          en: "Mordant",
          fa: "گزنده/سوزان",
          fr: "Mordant",
          de: "Ätzend",
          it: "Mordente",
          es: "Mordaz",
          ru: "Едкий",
          zh: "尖刻",
          ar: "لاذع"
        }
      },
      {
        id: "mulct",
        word: {
          en: "Mulct",
          fa: "جریمه کردن/غرامت",
          fr: "Amende",
          de: "Strafe",
          it: "Multa",
          es: "Multa",
          ru: "Штрафовать",
          zh: "罚款",
          ar: "غرّم"
        }
      },
      {
        id: "nadir",
        word: {
          en: "Nadir",
          fa: "پایین‌ترین نقطه",
          fr: "Nadir",
          de: "Tiefpunkt",
          it: "Nadir",
          es: "Nadir",
          ru: "Надир",
          zh: "最低点",
          ar: "الحضيض"
        }
      },
      {
        id: "neologism",
        word: {
          en: "Neologism",
          fa: "واژه‌سازی جدید",
          fr: "Néologisme",
          de: "Neologismus",
          it: "Neologismo",
          es: "Neologismo",
          ru: "Неологизм",
          zh: "新词",
          ar: "كلمة جديدة"
        }
      },
      {
        id: "nexus",
        word: {
          en: "Nexus",
          fa: "ارتباط/پیوند",
          fr: "Nexus",
          de: "Verknüpfung",
          it: "Nesso",
          es: "Nexo",
          ru: "Связь",
          zh: "联系",
          ar: "رابطة"
        }
      },
      {
        id: "nictitate",
        word: {
          en: "Nictitate",
          fa: "چشمک زدن/پلک زدن",
          fr: "Clignoter",
          de: "Blitzen",
          it: "Nittitare",
          es: "Nictitar",
          ru: "Моргать",
          zh: "眨眼",
          ar: "رمش"
        }
      },
      {
        id: "nihilism",
        word: {
          en: "Nihilism",
          fa: "پوچ‌انگاری",
          fr: "Nihilisme",
          de: "Nihilismus",
          it: "Nichilismo",
          es: "Nihilismo",
          ru: "Нигилизм",
          zh: "虚无主义",
          ar: "عدمية"
        }
      },
      {
        id: "nonplussed",
        word: {
          en: "Nonplussed",
          fa: "گیج/سرگردان",
          fr: "Interloqué",
          de: "Verblüfft",
          it: "Sconcertato",
          es: "Perplejo",
          ru: "Озадаченный",
          zh: "困惑",
          ar: "محيّر"
        }
      },
      {
        id: "obloquy",
        word: {
          en: "Obloquy",
          fa: "ناسزا/بدگویی",
          fr: "Opprobre",
          de: "Schmähung",
          it: "Obloquio",
          es: "Oprobio",
          ru: "Злословие",
          zh: "诽谤",
          ar: "ذم"
        }
      },
      {
        id: "obsequy",
        word: {
          en: "Obsequy",
          fa: "مراسم خاکسپاری",
          fr: "Obsèques",
          de: "Leichenfeier",
          it: "Esequie",
          es: "Exequias",
          ru: "Погребение",
          zh: "葬礼",
          ar: "جنازة"
        }
      },
      {
        id: "oeuvre",
        word: {
          en: "Oeuvre",
          fa: "مجموعه آثار",
          fr: "Œuvre",
          de: "Werk",
          it: "Opera",
          es: "Obra",
          ru: "Творчество",
          zh: "作品集",
          ar: "أعمال"
        }
      },
      {
        id: "oligopoly",
        word: {
          en: "Oligopoly",
          fa: "انحصار چندجانبه",
          fr: "Oligopole",
          de: "Oligopol",
          it: "Oligopolio",
          es: "Oligopolio",
          ru: "Олигополия",
          zh: "寡头垄断",
          ar: "أوليغوبول"
        }
      },
      {
        id: "omnivorous",
        word: {
          en: "Omnivorous",
          fa: "همه‌چیزخوار",
          fr: "Omnivore",
          de: "Allesfresser",
          it: "Onnivoro",
          es: "Omnívoro",
          ru: "Всеядный",
          zh: "杂食",
          ar: "كثير الأكل"
        }
      },
      {
        id: "oneiric",
        word: {
          en: "Oneiric",
          fa: "مرتبط با رویا",
          fr: "Onirique",
          de: "Träumerisch",
          it: "Onirico",
          es: "Onírico",
          ru: "Сновидческий",
          zh: "梦的",
          ar: "حلمي"
        }
      },
      {
        id: "opine",
        word: {
          en: "Opine",
          fa: "عقیده داشتن/گمان کردن",
          fr: "Penser",
          de: "Meinen",
          it: "Opiniare",
          es: "Opinar",
          ru: "Полагать",
          zh: "认为",
          ar: "رأى"
        }
      },
      {
        id: "orotund",
        word: {
          en: "Orotund",
          fa: "پرطنین/بلند و گشاد",
          fr: "Orotund",
          de: "Klangvoll",
          it: "Orotundo",
          es: "Orotundo",
          ru: "Звучный",
          zh: "洪亮",
          ar: "رنّان"
        }
      },
      {
        id: "ossify",
        word: {
          en: "Ossify",
          fa: "سفت شدن/جمود پیدا کردن",
          fr: "Ossifier",
          de: "Verknöchern",
          it: "Ossificare",
          es: "Osificar",
          ru: "Окаменеть",
          zh: "骨化",
          ar: "تصلّب"
        }
      },
      {
        id: "ostentation",
        word: {
          en: "Ostentation",
          fa: "تجمل‌پرستی/خودنمایی",
          fr: "Ostentation",
          de: "Prunk",
          it: "Ostentazione",
          es: "Ostentación",
          ru: "Пышность",
          zh: "炫耀",
          ar: "تباهي"
        }
      },
      {
        id: "overweening",
        word: {
          en: "Overweening",
          fa: "مغرور/خودپسند",
          fr: "Outrecuidant",
          de: "Anmaßend",
          it: "Presuntuoso",
          es: "Arrogante",
          ru: "Самонадеянный",
          zh: "傲慢",
          ar: "متكبّر"
        }
      },
      {
        id: "pallid",
        word: {
          en: "Pallid",
          fa: "رنگ‌پریده/بی‌رنگ",
          fr: "Pâle",
          de: "Blass",
          it: "Pallido",
          es: "Pálido",
          ru: "Бледный",
          zh: "苍白",
          ar: "شاحب"
        }
      },
      {
        id: "panegyric",
        word: {
          en: "Panegyric",
          fa: "سخن ستایش‌آمیز",
          fr: "Panégyrique",
          de: "Lobrede",
          it: "Panegirico",
          es: "Panegírico",
          ru: "Панегирик",
          zh: "颂词",
          ar: "مديح"
        }
      },
      {
        id: "paroxysm",
        word: {
          en: "Paroxysm",
          fa: "تشنج/حمله شدید",
          fr: "Paroxysme",
          de: "Anfall",
          it: "Parossismo",
          es: "Paroxismo",
          ru: "Припадок",
          zh: "发作",
          ar: "نوبة"
        }
      },
      {
        id: "pastiche",
        word: {
          en: "Pastiche",
          fa: "تقلید هنری/ترکیب",
          fr: "Pastiche",
          de: "Pastiche",
          it: "Pastiche",
          es: "Pastiche",
          ru: "Пастиш",
          zh: "模仿作品",
          ar: "محاكاة فنية"
        }
      },
      {
        id: "peculation",
        word: {
          en: "Peculation",
          fa: "اختلاس/سوءاستفاده مالی",
          fr: "Péculation",
          de: "Unterschlagung",
          it: "Peculato",
          es: "Peculado",
          ru: "Расхищение",
          zh: "贪污",
          ar: "اختلاس"
        }
      },
      {
        id: "pedagogue",
        word: {
          en: "Pedagogue",
          fa: "معلم خشک و سخت‌گیر",
          fr: "Pédagogue",
          de: "Pedant",
          it: "Pedagogo",
          es: "Pedagogo",
          ru: "Педагог",
          zh: "学究",
          ar: "مدرّس متزمت"
        }
      },
      {
        id: "penumbra",
        word: {
          en: "Penumbra",
          fa: "نیم‌سایه",
          fr: "Pénombre",
          de: "Halbshadow",
          it: "Penombra",
          es: "Penumbra",
          ru: "Полутень",
          zh: "半影",
          ar: "شبه ظل"
        }
      },
      {
        id: "perfidious",
        word: {
          en: "Perfidious",
          fa: "خیانت‌کار/پیمان‌شکن",
          fr: "Perfide",
          de: "Verräterisch",
          it: "Perfido",
          es: "Pérfido",
          ru: "Коварный",
          zh: "背信弃义",
          ar: "غادر"
        }
      },
      {
        id: "perfunctory",
        word: {
          en: "Perfunctory",
          fa: "سرسری/بی‌علاقه",
          fr: "Bâclé",
          de: "Oberflächlich",
          it: "Sbrigativo",
          es: "Perfunctorio",
          ru: "Формальный",
          zh: "敷衍",
          ar: "روتيني"
        }
      },
      {
        id: "peroration",
        word: {
          en: "Peroration",
          fa: "خاتمه سخنرانی",
          fr: "Péroraison",
          de: "Schlussrede",
          it: "Perorazione",
          es: "Perorata",
          ru: "Заключение речи",
          zh: "结束语",
          ar: "خاتمة"
        }
      },
      {
        id: "persiflage",
        word: {
          en: "Persiflage",
          fa: "طعنه ملایم/مسخره سبک",
          fr: "Persiflage",
          de: "Scherz",
          it: "Persiflage",
          es: "Burla",
          ru: "Насмешка",
          zh: "戏谑",
          ar: "سخرية لطيفة"
        }
      },
      {
        id: "phlegmatic",
        word: {
          en: "Phlegmatic",
          fa: "بی‌حال/خونسرد",
          fr: "Flegmatique",
          de: "Phlegmatisch",
          it: "Flemmatico",
          es: "Flemático",
          ru: "Флегматичный",
          zh: "冷淡",
          ar: "بلغمي"
        }
      },
      {
        id: "plangent",
        word: {
          en: "Plangent",
          fa: "غم‌انگیز و پرصدا",
          fr: "Plaintif",
          de: "Klagend",
          it: "Lamentevole",
          es: "Plangente",
          ru: "Жалобный",
          zh: "悲哀",
          ar: "باكي"
        }
      },
      {
        id: "pleonasm",
        word: {
          en: "Pleonasm",
          fa: "تکرار بی‌جا",
          fr: "Pléonasme",
          de: "Pleonasmus",
          it: "Pleonasmo",
          es: "Pleonasmo",
          ru: "Плеоназм",
          zh: "赘述",
          ar: "إطناب"
        }
      },
      {
        id: "plutocracy",
        word: {
          en: "Plutocracy",
          fa: "حکومت پولداران",
          fr: "Ploutocratie",
          de: "Plutokratie",
          it: "Plutocrazia",
          es: "Plutocracia",
          ru: "Плутократия",
          zh: "财阀统治",
          ar: "بلوتوقراطية"
        }
      },
      {
        id: "polity",
        word: {
          en: "Polity",
          fa: "نظام سیاسی",
          fr: "Politique",
          de: "Staatswesen",
          it: "Politia",
          es: "Política",
          ru: "Государственный строй",
          zh: "政体",
          ar: "نظام سياسي"
        }
      },
      {
        id: "polyglot",
        word: {
          en: "Polyglot",
          fa: "چندزبانه",
          fr: "Polyglotte",
          de: "Mehrsprachig",
          it: "Poliglotta",
          es: "Políglota",
          ru: "Полiglот",
          zh: "多语言者",
          ar: "متعدد اللغات"
        }
      },
      {
        id: "portent",
        word: {
          en: "Portent",
          fa: "فال نیک یا بد/شگون",
          fr: "Présage",
          de: "Omen",
          it: "Presagio",
          es: "Presagio",
          ru: "Знамение",
          zh: "预兆",
          ar: "فأل"
        }
      },
      {
        id: "precatory",
        word: {
          en: "Precatory",
          fa: "درخواست‌کننده/تضرعی",
          fr: "Précatoire",
          de: "Bittend",
          it: "Precativo",
          es: "Precatorio",
          ru: "Просительный",
          zh: "恳求的",
          ar: "توسلي"
        }
      },
      {
        id: "prelapsarian",
        word: {
          en: "Prelapsarian",
          fa: "پیش از گناه اولیه",
          fr: "Prélapsaire",
          de: "Vor dem Sündenfall",
          it: "Prelapsario",
          es: "Prelapsario",
          ru: "Догреховный",
          zh: "堕落前",
          ar: "قبل السقوط"
        }
      },
      {
        id: "presage",
        word: {
          en: "Presage",
          fa: "پیشگویی/شگون",
          fr: "Présager",
          de: "Vorzeichen",
          it: "Presagire",
          es: "Presagiar",
          ru: "Предвещать",
          zh: "预示",
          ar: "فأل"
        }
      },
      {
        id: "preternatural",
        word: {
          en: "Preternatural",
          fa: "فراطبیعی/غیرعادی",
          fr: "Surnaturel",
          de: "Übernatürlich",
          it: "Preternaturale",
          es: "Preternatural",
          ru: "Сверхъестественный",
          zh: "超自然",
          ar: "خارق للعادة"
        }
      },
      {
        id: "primordial",
        word: {
          en: "Primordial",
          fa: "ابتدایی/اصلی",
          fr: "Primordial",
          de: "Ur-",
          it: "Primordiale",
          es: "Primordial",
          ru: "Первозданный",
          zh: "原始",
          ar: "أولي"
        }
      },
      {
        id: "proclivity",
        word: {
          en: "Proclivity",
          fa: "گرایش/میل",
          fr: "Propension",
          de: "Neigung",
          it: "Propensione",
          es: "Propensión",
          ru: "Склонность",
          zh: "倾向",
          ar: "ميل"
        }
      },
      {
        id: "prolix",
        word: {
          en: "Prolix",
          fa: "مطول/پرگویی",
          fr: "Prolixe",
          de: "Weitschweifig",
          it: "Prolisso",
          es: "Prolijo",
          ru: "Многословный",
          zh: "冗长",
          ar: "مطنب"
        }
      },
      {
        id: "propinquity",
        word: {
          en: "Propinquity",
          fa: "خویشاوندی/قرب",
          fr: "Proximité",
          de: "Nähe",
          it: "Prossimità",
          es: "Proximidad",
          ru: "Близость",
          zh: "亲近",
          ar: "قرابة"
        }
      },
      {
        id: "propitiate",
        word: {
          en: "Propitiate",
          fa: "دلجویی کردن/آرام کردن",
          fr: "Concilier",
          de: "Versöhnen",
          it: "Propiziare",
          es: "Propiciar",
          ru: "Умилостивлять",
          zh: "抚慰",
          ar: "استرضى"
        }
      },
      {
        id: "proscenium",
        word: {
          en: "Proscenium",
          fa: "قسمت جلوی صحنه تئاتر",
          fr: "Proscenium",
          de: "Proszenium",
          it: "Proscenio",
          es: "Proscenio",
          ru: "Просцениум",
          zh: "舞台前部",
          ar: "مقدمة المسرح"
        }
      },
      {
        id: "proscribe",
        word: {
          en: "Proscribe",
          fa: "ممنوع کردن/تبعید",
          fr: "Proscrire",
          de: "Ächten",
          it: "Proscrivere",
          es: "Proscribir",
          ru: "Запрещать",
          zh: "取缔",
          ar: "حظر"
        }
      },
      {
        id: "protean",
        word: {
          en: "Protean",
          fa: "متغیر/چندشکل",
          fr: "Protéiforme",
          de: "Vielgestaltig",
          it: "Proteiforme",
          es: "Proteico",
          ru: "Переменчивый",
          zh: "千变万化",
          ar: "متغيّر"
        }
      },
      {
        id: "prurient",
        word: {
          en: "Prurient",
          fa: "شهوت‌ران/هرزه",
          fr: "Lubrique",
          de: "Lüstern",
          it: "Pruriginoso",
          es: "Lascivo",
          ru: "Похотливый",
          zh: "好色",
          ar: "شهواني"
        }
      },
      {
        id: "psittacine",
        word: {
          en: "Psittacine",
          fa: "مرتبط با طوطی",
          fr: "Psittacin",
          de: "Papageienartig",
          it: "Psittacino",
          es: "Psitacino",
          ru: "Попугаеобразный",
          zh: "鹦鹉的",
          ar: "ببغائي"
        }
      },
      {
        id: "puerile",
        word: {
          en: "Puerile",
          fa: "بچه‌گانه/ساده‌لوح",
          fr: "Puéril",
          de: "Kindisch",
          it: "Puerile",
          es: "Pueril",
          ru: "Детский",
          zh: "幼稚",
          ar: "طفولي"
        }
      },
      {
        id: "punctilio",
        word: {
          en: "Punctilio",
          fa: "دقت در آداب/نکته‌سنجی",
          fr: "Punctilio",
          de: "Pünktlichkeit",
          it: "Puntiglio",
          es: "Puntillo",
          ru: "Тонкость",
          zh: "礼节细节",
          ar: "دقة في الأدب"
        }
      },
      {
        id: "pyrrhic",
        word: {
          en: "Pyrrhic",
          fa: "پیروزی تلخ",
          fr: "Pyrrhus",
          de: "Pyrrhussie",
          it: "Pirrico",
          es: "Pírrica",
          ru: "Пиррова",
          zh: "代价巨大的胜利",
          ar: "انتصار باهظ"
        }
      },
      {
        id: "quietus",
        word: {
          en: "Quietus",
          fa: "مرگ/آرامش نهایی",
          fr: "Quietus",
          de: "Todesstoß",
          it: "Quiete",
          es: "Quietus",
          ru: "Смерть",
          zh: "终结",
          ar: "راحة أبدية"
        }
      },
      {
        id: "quondam",
        word: {
          en: "Quondam",
          fa: "سابق/گذشته",
          fr: "Jadis",
          de: "Ehemalig",
          it: "Quondam",
          es: "Antiguo",
          ru: "Бывший",
          zh: "昔日的",
          ar: "سابق"
        }
      },
      {
        id: "raconteur",
        word: {
          en: "Raconteur",
          fa: "قصه‌گو/داستان‌سرا",
          fr: "Raconteur",
          de: "Erzähler",
          it: "Raccontatore",
          es: "Contador",
          ru: "Рассказчик",
          zh: "讲故事者",
          ar: "راوي"
        }
      },
      {
        id: "recondite",
        word: {
          en: "Recondite",
          fa: "مبهم/دشوارفهم",
          fr: "Recondit",
          de: "Verborgen",
          it: "Recondito",
          es: "Recóndito",
          ru: "Скрытый",
          zh: "深奥",
          ar: "خفي"
        }
      },
      {
        id: "redolent",
        word: {
          en: "Redolent",
          fa: "معطر/یادآور",
          fr: "Redolent",
          de: "Duftend",
          it: "Redolente",
          es: "Redolente",
          ru: "Благоухающий",
          zh: "芬芳",
          ar: "معطّر"
        }
      },
      {
        id: "refractory",
        word: {
          en: "Refractory",
          fa: "سرکش/مقاوم",
          fr: "Réfractaire",
          de: "Widerspenstig",
          it: "Refrattario",
          es: "Refracario",
          ru: "Упрямый",
          zh: "难熔",
          ar: "عنيد"
        }
      },
      {
        id: "refulgent",
        word: {
          en: "Refulgent",
          fa: "درخشان/تابان",
          fr: "Refulgent",
          de: "Strahlend",
          it: "Refulgente",
          es: "Refulgente",
          ru: "Сияющий",
          zh: "辉煌",
          ar: "لامع"
        }
      },
      {
        id: "regale",
        word: {
          en: "Regale",
          fa: "پذیرایی کردن/سرگرم کردن",
          fr: "Régaler",
          de: "Bewirten",
          it: "Regalare",
          es: "Regalar",
          ru: "Угощать",
          zh: "款待",
          ar: "أكرم"
        }
      },
      {
        id: "remonstrate",
        word: {
          en: "Remonstrate",
          fa: "اعتراض کردن/سرزنش",
          fr: "Remontrer",
          de: "Vorhalten",
          it: "Rimproverare",
          es: "Reconvenir",
          ru: "Возражать",
          zh: "抗议",
          ar: "احتج"
        }
      },
      {
        id: "repine",
        word: {
          en: "Repine",
          fa: "ناله کردن/گله کردن",
          fr: "Se plaindre",
          de: "Klagen",
          it: "Lamentarsi",
          es: "Quejarse",
          ru: "Роптать",
          zh: "抱怨",
          ar: "تأفّف"
        }
      },
      {
        id: "requisite",
        word: {
          en: "Requisite",
          fa: "لازم/ضروری",
          fr: "Requis",
          de: "Erforderlich",
          it: "Richiesto",
          es: "Requisito",
          ru: "Необходимый",
          zh: "必需",
          ar: "مطلوب"
        }
      },
      {
        id: "resile",
        word: {
          en: "Resile",
          fa: "عقب‌نشینی کردن/برگشتن",
          fr: "Résilier",
          de: "Zurückweichen",
          it: "Resilere",
          es: "Rescindir",
          ru: "Отказываться",
          zh: "退缩",
          ar: "تراجع"
        }
      },
      {
        id: "ribald",
        word: {
          en: "Ribald",
          fa: "مبتذل/هرزه",
          fr: "Ribald",
          de: "Zotig",
          it: "Osceno",
          es: "Ribald",
          ru: "Грубый",
          zh: "下流",
          ar: "فاحش"
        }
      },
      {
        id: "risible",
        word: {
          en: "Risible",
          fa: "خنده‌دار/مضحک",
          fr: "Risibles",
          de: "Lacherlich",
          it: "Risibile",
          es: "Risible",
          ru: "Смешной",
          zh: "可笑",
          ar: "مضحك"
        }
      },
      {
        id: "rodomontade",
        word: {
          en: "Rodomontade",
          fa: "لاف‌زنی/گنده‌گویی",
          fr: "Rodomontade",
          de: "Großsprecherei",
          it: "Rodomontata",
          es: "Rodomontada",
          ru: "Хвастовство",
          zh: "大话",
          ar: "تبجّح"
        }
      },
      {
        id: "roué",
        word: {
          en: "Roué",
          fa: "هرزه/فاسد",
          fr: "Roué",
          de: "Lasterhaft",
          it: "Dissoluto",
          es: "Libertino",
          ru: "Развратник",
          zh: "浪荡子",
          ar: "فاسق"
        }
      },
      {
        id: "runic",
        word: {
          en: "Runic",
          fa: "رمزآلود/اسرارآمیز",
          fr: "Runique",
          de: "Runen-",
          it: "Runico",
          es: "Rúnico",
          ru: "Рунный",
          zh: "如尼文的",
          ar: "روني"
        }
      },
      {
        id: "sacrosanct",
        word: {
          en: "Sacrosanct",
          fa: "بسیار مقدس/دست‌نخورده",
          fr: "Sacrosaint",
          de: "Unantastbar",
          it: "Sacrosanto",
          es: "Sacro santo",
          ru: "Священный",
          zh: "神圣不可侵犯",
          ar: "مقدّس جداً"
        }
      },
      {
        id: "sangfroid",
        word: {
          en: "Sangfroid",
          fa: "خونسردی",
          fr: "Sang-froid",
          de: "Kaltblütigkeit",
          it: "Sangue freddo",
          es: "Sangre fría",
          ru: "Хладнокровие",
          zh: "冷静",
          ar: "رباطة جأش"
        }
      },
      {
        id: "sapient",
        word: {
          en: "Sapient",
          fa: "حکیم/دانا",
          fr: "Sapient",
          de: "Weise",
          it: "Sapiente",
          es: "Sapiente",
          ru: "Мудрый",
          zh: "睿智",
          ar: "حكيم"
        }
      },
      {
        id: "sartorial",
        word: {
          en: "Sartorial",
          fa: "مرتبط با خیاطی/لباس",
          fr: "Sartorial",
          de: "Schneider-",
          it: "Sartoriale",
          es: "Sartorial",
          ru: "Портняжный",
          zh: "裁缝的",
          ar: "خياطي"
        }
      },
      {
        id: "satiate",
        word: {
          en: "Satiate",
          fa: "سیر کردن/اشباع",
          fr: "Saturer",
          de: "Sättigen",
          it: "Saziare",
          es: "Saciar",
          ru: "Насыщать",
          zh: "使饱足",
          ar: "أشبع"
        }
      },
      {
        id: "saturnine",
        word: {
          en: "Saturnine",
          fa: "افسرده/تاریک",
          fr: "Saturnien",
          de: "Finster",
          it: "Saturnino",
          es: "Saturnino",
          ru: "Мрачный",
          zh: "忧郁",
          ar: "كئيب"
        }
      },
      {
        id: "savant",
        word: {
          en: "Savant",
          fa: "دانشمند/فاضل",
          fr: "Savant",
          de: "Gelehrter",
          it: "Sapiente",
          es: "Sabio",
          ru: "Учёный",
          zh: "学者",
          ar: "عالم"
        }
      },
      {
        id: "scabrous",
        word: {
          en: "Scabrous",
          fa: "ناهموار/فاحش",
          fr: "Scabreux",
          de: "Anstößig",
          it: "Scabroso",
          es: "Escabroso",
          ru: "Грубый",
          zh: "粗糙",
          ar: "خشن"
        }
      },
      {
        id: "schadenfreude",
        word: {
          en: "Schadenfreude",
          fa: "لذت از بدبختی دیگران",
          fr: "Schadenfreude",
          de: "Schadenfreude",
          it: "Schadenfreude",
          es: "Schadenfreude",
          ru: "Шаденфройде",
          zh: "幸灾乐祸",
          ar: "شماتة"
        }
      },
      {
        id: "sedulous",
        word: {
          en: "Sedulous",
          fa: "کوشا/سخت‌کوش",
          fr: "Assidu",
          de: "Eifrig",
          it: "Assiduo",
          es: "Asiduo",
          ru: "Усердный",
          zh: "勤勉",
          ar: "مجتهد"
        }
      },
      {
        id: "Seine",
        word: {
          en: "Seine",
          fa: "تور ماهیگیری بزرگ",
          fr: "Seine",
          de: "Zugnetz",
          it: "Sciabica",
          es: "Jábega",
          ru: "Сен",
          zh: "围网",
          ar: "شبكة صيد كبيرة"
        }
      },
      {
        id: "sententious",
        word: {
          en: "Sententious",
          fa: "حکمت‌آموز/موعظه‌گو",
          fr: "Sentencieux",
          de: "Lehrhaft",
          it: "Sentenzioso",
          es: "Sentencioso",
          ru: "Поучительный",
          zh: "格言式的",
          ar: "حكمي"
        }
      },
      {
        id: "sesquipedalian",
        word: {
          en: "Sesquipedalian",
          fa: "بلند و سنگین (کلمات)",
          fr: "Sésquipédal",
          de: "Langwörtig",
          it: "Sesquipedale",
          es: "Sesquipedal",
          ru: "Многосложный",
          zh: "冗长",
          ar: "طويل الكلمات"
        }
      },
      {
        id: "simony",
        word: {
          en: "Simony",
          fa: "خرید و فروش مقامات کلیسایی",
          fr: "Simonie",
          de: "Simonie",
          it: "Simonia",
          es: "Simonía",
          ru: "Симония",
          zh: "买卖圣职",
          ar: "بيع المناصب الدينية"
        }
      },
      {
        id: "sinecure",
        word: {
          en: "Sinecure",
          fa: "شغل بی‌دردسر و پردرآمد",
          fr: "Sinécure",
          de: "Pfründe",
          it: "Sinecura",
          es: "Sinecura",
          ru: "Синекура",
          zh: "挂名职",
          ar: "وظيفة مريحة"
        }
      },
      {
        id: "solecism",
        word: {
          en: "Solecism",
          fa: "اشتباه دستوری/بی‌ادبی",
          fr: "Solécisme",
          de: "Sprachfehler",
          it: "Solecismo",
          es: "Solecismo",
          ru: "Солецизм",
          zh: "语法错误",
          ar: "خطأ لغوي"
        }
      },
      {
        id: "sophistry",
        word: {
          en: "Sophistry",
          fa: "سوفسطایی/مغالطه",
          fr: "Sophisme",
          de: "Sophisterei",
          it: "Sofisma",
          es: "Sofisma",
          ru: "Софистика",
          zh: "诡辩",
          ar: "سفسطة"
        }
      },
      {
        id: "spoonerism",
        word: {
          en: "Spoonerism",
          fa: "جابه‌جایی حروف در کلمات",
          fr: "Contrepèterie",
          de: "Vertauschung",
          it: "Spoonerismo",
          es: "Trastrueque",
          ru: "Спунеризм",
          zh: "首音互换",
          ar: "تبديل أصوات"
        }
      },
      {
        id: "stertorous",
        word: {
          en: "Stertorous",
          fa: "با صدای خرخر",
          fr: "Stertoreux",
          de: "Röchelnd",
          it: "Stertoroso",
          es: "Esteroso",
          ru: "Храпящий",
          zh: "鼾声",
          ar: "مشخّر"
        }
      },
      {
        id: "stygian",
        word: {
          en: "Stygian",
          fa: "جهان زیرین/بسیار تاریک",
          fr: "Stygien",
          de: "Höllisch",
          it: "Stigio",
          es: "Estigio",
          ru: "Стигийский",
          zh: "阴暗",
          ar: "جهنمي"
        }
      },
      {
        id: "succor",
        word: {
          en: "Succor",
          fa: "کمک/یاری",
          fr: "Secours",
          de: "Hilfe",
          it: "Soccorso",
          es: "Socorro",
          ru: "Помощь",
          zh: "援助",
          ar: "إغاثة"
        }
      },
      {
        id: "sumptuary",
        word: {
          en: "Sumptuary",
          fa: "مرتبط با مخارج/تجملات",
          fr: "Somptuaire",
          de: "Luxus-",
          it: "Suntuaria",
          es: "Suntuaria",
          ru: "Роскошный",
          zh: "节约的",
          ar: "متعلق بالإنفاق"
        }
      },
      {
        id: "supercilious",
        word: {
          en: "Supercilious",
          fa: "مغرور/از بالا نگاه کردن",
          fr: "Supercilieux",
          de: "Herablassend",
          it: "Supercilioso",
          es: "Supercilioso",
          ru: "Надменный",
          zh: "傲慢",
          ar: "متكبّر"
        }
      },
      {
        id: "surfeit",
        word: {
          en: "Surfeit",
          fa: "زیاده‌روی/پری",
          fr: "Surfait",
          de: "Übersättigung",
          it: "Eccesso",
          es: "Exceso",
          ru: "Избыток",
          zh: "过饱",
          ar: "تخمة"
        }
      },
      {
        id: "sylvan",
        word: {
          en: "Sylvan",
          fa: "جنگلی/درختی",
          fr: "Sylvain",
          de: "Waldig",
          it: "Silvano",
          es: "Silvano",
          ru: "Лесной",
          zh: "森林的",
          ar: "حرجي"
        }
      },
      {
        id: "taciturn",
        word: {
          en: "Taciturn",
          fa: "کم‌حرف/ساکت",
          fr: "Taciturne",
          de: "Schweigsam",
          it: "Taciturno",
          es: "Taciturno",
          ru: "Молчаливый",
          zh: "沉默寡言",
          ar: "صموت"
        }
      },
      {
        id: "talisman",
        word: {
          en: "Talisman",
          fa: "طلسم/تعویذ",
          fr: "Talisman",
          de: "Talisman",
          it: "Talismano",
          es: "Talismán",
          ru: "Талисман",
          zh: "护身符",
          ar: "طلسم"
        }
      },
      {
        id: "tawdry",
        word: {
          en: "Tawdry",
          fa: "ارزان و پرزرق‌وبرق",
          fr: "Clinquant",
          de: "Kitschig",
          it: "Pacchiano",
          es: "Chabacano",
          ru: "Яркий и дешёвый",
          zh: "俗艳",
          ar: "رخيص مزخرف"
        }
      },
      {
        id: "tellurian",
        word: {
          en: "Tellurian",
          fa: "زمینی/مرتبط با زمین",
          fr: "Tellurique",
          de: "Erdhaft",
          it: "Tellurico",
          es: "Telúrico",
          ru: "Земной",
          zh: "地球的",
          ar: "أرضي"
        }
      },
      {
        id: "tenebrous",
        word: {
          en: "Tenebrous",
          fa: "تاریک و مبهم",
          fr: "Ténébreux",
          de: "Finster",
          it: "Tenebroso",
          es: "Tenebroso",
          ru: "Мрачный",
          zh: "阴暗",
          ar: "مظلم"
        }
      },
      {
        id: "tergiversation",
        word: {
          en: "Tergiversation",
          fa: "چرخش عقیده/فرار از موضع",
          fr: "Tergiversation",
          de: "Ausweichen",
          it: "Tergiversazione",
          es: "Tergiversación",
          ru: "Увиливание",
          zh: "支吾",
          ar: "تلبيس"
        }
      },
      {
        id: "thaumaturgy",
        word: {
          en: "Thaumaturgy",
          fa: "معجزه‌آسایی/سحر",
          fr: "Thaumaturgie",
          de: "Wunderwerk",
          it: "Taumaturgia",
          es: "Taumaturgia",
          ru: "Чудотворство",
          zh: "奇术",
          ar: "سحر"
        }
      },
      {
        id: "theurgy",
        word: {
          en: "Theurgy",
          fa: "سحر الهی",
          fr: "Théurgie",
          de: "Theurgie",
          it: "Teurgia",
          es: "Teurgia",
          ru: "Теургия",
          zh: "神术",
          ar: "سحر إلهي"
        }
      },
      {
        id: "tintinnabulation",
        word: {
          en: "Tintinnabulation",
          fa: "صدای زنگ",
          fr: "Tintinnabulement",
          de: "Glockenklang",
          it: "Tintinnabulo",
          es: "Tintineo",
          ru: "Звон",
          zh: "铃声",
          ar: "رنين"
        }
      },
      {
        id: "torpid",
        word: {
          en: "Torpid",
          fa: "بی‌حال/خفته",
          fr: "Torpid",
          de: "Träge",
          it: "Torpid",
          es: "Tórrido",
          ru: "Оцепенелый",
          zh: "麻木",
          ar: "خادر"
        }
      },
      {
        id: "traduce",
        word: {
          en: "Traduce",
          fa: "تهمت زدن/بدگویی",
          fr: "Diffamer",
          de: "Verleumden",
          it: "Diffamare",
          es: "Denigrar",
          ru: "Очернять",
          zh: "诽谤",
          ar: "افترى"
        }
      },
      {
        id: "trenchant",
        word: {
          en: "Trenchant",
          fa: "تیز/نافذ",
          fr: "Tranchant",
          de: "Scharf",
          it: "Tranciante",
          es: "Trinchante",
          ru: "Резкий",
          zh: "犀利",
          ar: "حاد"
        }
      },
      {
        id: "triptych",
        word: {
          en: "Triptych",
          fa: "سه‌لته‌ای (نقاشی)",
          fr: "Triptyque",
          de: "Triptychon",
          it: "Trittico",
          es: "Tríptico",
          ru: "Триптих",
          zh: "三联画",
          ar: "ثلاثية"
        }
      },
      {
        id: "troglodyte",
        word: {
          en: "Troglodyte",
          fa: "غارنشین/انسان اولیه",
          fr: "Troglodyte",
          de: "Höhlenmensch",
          it: "Troglodita",
          es: "Troglodita",
          ru: "Троглодит",
          zh: "穴居人",
          ar: "تروغلوديت"
        }
      },
      {
        id: "truculent",
        word: {
          en: "Truculent",
          fa: "خشن/پرخاشگر",
          fr: "Truculent",
          de: "Aggressiv",
          it: "Truculento",
          es: "Truculento",
          ru: "Грубый",
          zh: "野蛮",
          ar: "عنيف"
        }
      },
      {
        id: "tumid",
        word: {
          en: "Tumid",
          fa: "متورم/پرطمطراق",
          fr: "Tumide",
          de: "Geschwollen",
          it: "Tumido",
          es: "Túmido",
          ru: "Набухший",
          zh: "肿胀",
          ar: "منتفخ"
        }
      },
      {
        id: "turgid",
        word: {
          en: "Turgid",
          fa: "متورم/پرزرق‌وبرق",
          fr: "Turgide",
          de: "Geschwollen",
          it: "Turgido",
          es: "Túrgido",
          ru: "Надутый",
          zh: "肿胀",
          ar: "منتفخ"
        }
      },
      {
        id: "turpitude",
        word: {
          en: "Turpitude",
          fa: "پستی/فساد",
          fr: "Turpitude",
          de: "Schändlichkeit",
          it: "Turpitudine",
          es: "Turpitud",
          ru: "Низость",
          zh: "道德败坏",
          ar: "دناءة"
        }
      },
      {
        id: "ubiquitous",
        word: {
          en: "Ubiquitous",
          fa: "همه‌جا حاضر",
          fr: "Ubiquitaire",
          de: "Ubiquitär",
          it: "Ubiquo",
          es: "Ubicu",
          ru: "Вездесущий",
          zh: "无处不在",
          ar: "منتشر في كل مكان"
        }
      },
      {
        id: "ululate",
        word: {
          en: "Ululate",
          fa: "زوزه کشیدن/نوحه خواندن",
          fr: "Ululer",
          de: "Heulen",
          it: "Ululare",
          es: "Ulular",
          ru: "Выть",
          zh: "哀号",
          ar: "عول"
        }
      },
      {
        id: "umbrage",
        word: {
          en: "Umbrage",
          fa: "رنجش/ناراحتی",
          fr: "Ombrage",
          de: "Ärger",
          it: "Ombra",
          es: "Enojo",
          ru: "Обида",
          zh: "不快",
          ar: "غضب"
        }
      },
      {
        id: "untenable",
        word: {
          en: "Untenable",
          fa: "غیرقابل دفاع",
          fr: "Intenable",
          de: "Unhaltbar",
          it: "Insostenibile",
          es: "Intenable",
          ru: "Неприемлемый",
          zh: "站不住脚",
          ar: "غير قابل الدفاع"
        }
      },
      {
        id: "valetudinarian",
        word: {
          en: "Valetudinarian",
          fa: "بیمارنما/وسواسی سلامت",
          fr: "Valétudinaire",
          de: "Hypochonder",
          it: "Valetudinario",
          es: "Valetudinario",
          ru: "Ипохондрик",
          zh: "体弱多病者",
          ar: "مريض وهمي"
        }
      },
      {
        id: "vatic",
        word: {
          en: "Vatic",
          fa: "پیشگویانه",
          fr: "Vatique",
          de: "Weissagend",
          it: "Vatico",
          es: "Vático",
          ru: "Пророческий",
          zh: "预言的",
          ar: "نبوي"
        }
      },
      {
        id: "venal",
        word: {
          en: "Venal",
          fa: "فاسد/قابل خرید",
          fr: "Vénal",
          de: "Bestechlich",
          it: "Venale",
          es: "Venal",
          ru: "Продажный",
          zh: "贪污",
          ar: "قابل الرشوة"
        }
      },
      {
        id: "verisimilitude",
        word: {
          en: "Verisimilitude",
          fa: "شباهت به حقیقت",
          fr: "Vraisemblance",
          de: "Wahrscheinlichkeit",
          it: "Verosimiglianza",
          es: "Verosimilitud",
          ru: "Правдоподобие",
          zh: "逼真",
          ar: "شبه الحقيقة"
        }
      },
      {
        id: "vermilion",
        word: {
          en: "Vermilion",
          fa: "قرمز روشن",
          fr: "Vermillon",
          de: "Zinnoberrot",
          it: "Vermiglio",
          es: "Bermellón",
          ru: "Киноварь",
          zh: "朱红",
          ar: "قرمزي"
        }
      },
      {
        id: "vicissitude",
        word: {
          en: "Vicissitude",
          fa: "فراز و نشیب زندگی",
          fr: "Vicissitude",
          de: "Wechselfall",
          it: "Vicissitudine",
          es: "Vicisitud",
          ru: "Превратность",
          zh: "变迁",
          ar: "تقلبات"
        }
      },
      {
        id: "vitiate",
        word: {
          en: "Vitiate",
          fa: "فاسد کردن/باطل کردن",
          fr: "Vivier",
          de: "Verderben",
          it: "Viziare",
          es: "Viciar",
          ru: "Портить",
          zh: "损害",
          ar: "أفسد"
        }
      },
      {
        id: "voluble",
        word: {
          en: "Voluble",
          fa: "سخنران/پرحرف",
          fr: "Volubile",
          de: "Redselig",
          it: "Loquace",
          es: "Voluble",
          ru: "Речестый",
          zh: "流利多言",
          ar: "ثرثار"
        }
      },
      {
        id: "vortex",
        word: {
          en: "Vortex",
          fa: "گرداب/چرخش شدید",
          fr: "Vortex",
          de: "Wirbel",
          it: "Vortice",
          es: "Vórtice",
          ru: "Вихрь",
          zh: "漩涡",
          ar: "دوامة"
        }
      },
      {
        id: "waggish",
        word: {
          en: "Waggish",
          fa: "شوخ/مزاح",
          fr: "Plaisant",
          de: "Scherzhaft",
          it: "Scherzoso",
          es: "Jocoso",
          ru: "Шутливый",
          zh: "诙谐",
          ar: "هزلي"
        }
      },
      {
        id: "welter",
        word: {
          en: "Welter",
          fa: "آشوب/غلتیدن",
          fr: "Se vautrer",
          de: "Wälzen",
          it: "Rotolarsi",
          es: "Revolcarse",
          ru: "Валяться",
          zh: "翻滚",
          ar: "تخبّط"
        }
      },
      {
        id: "wheedle",
        word: {
          en: "Wheedle",
          fa: "چرب‌زبانی کردن/ناز کردن",
          fr: "Cajoler",
          de: "Schmeicheln",
          it: "Lusingare",
          es: "Halagar",
          ru: "Уговаривать",
          zh: "哄骗",
          ar: "تملّق"
        }
      },
      {
        id: "witticism",
        word: {
          en: "Witticism",
          fa: "سخن بامزه/هزل",
          fr: "Trait d'esprit",
          de: "Witz",
          it: "Arguzia",
          es: "Chiste",
          ru: "Остроумие",
          zh: "妙语",
          ar: "نكتة"
        }
      },
      {
        id: "woebegone",
        word: {
          en: "Woebegone",
          fa: "غمگین/اندوهگین",
          fr: "Désolé",
          de: "Betrübt",
          it: "Addolorato",
          es: "Afligido",
          ru: "Удручённый",
          zh: "愁眉苦脸",
          ar: "مكروب"
        }
      },
      {
        id: "xanthic",
        word: {
          en: "Xanthic",
          fa: "زردرنگ",
          fr: "Xanthique",
          de: "Gelb",
          it: "Xantico",
          es: "Xántico",
          ru: "Жёлтый",
          zh: "黄色的",
          ar: "أصفر"
        }
      },
      {
        id: "yokel",
        word: {
          en: "Yokel",
          fa: "دهاتی/روستایی",
          fr: "Péquenaud",
          de: "Bauerntölpel",
          it: "Contadino",
          es: "Paleto",
          ru: "Деревенщина",
          zh: "乡巴佬",
          ar: "فلاح"
        }
      },
      {
        id: "zephyr",
        word: {
          en: "Zephyr",
          fa: "نسیمی ملایم",
          fr: "Zéphyr",
          de: "Zephyr",
          it: "Zefiro",
          es: "Céfiro",
          ru: "Зефир",
          zh: "和风",
          ar: "نسيم"
        }
      },
      {
        id: "zenith",
        word: {
          en: "Zenith",
          fa: "اوج/نقطه اوج",
          fr: "Zénith",
          de: "Zenit",
          it: "Zenit",
          es: "Cenit",
          ru: "Зенит",
          zh: "顶点",
          ar: "ذروة"
        }
      }
    ]
  },
  {
    level: "A1_Sentences",
    items: [
      {
        id: "a1_1",
        word: {
          en: "I am a student.",
          fa: "من دانش‌آموز هستم.",
          fr: "Je suis étudiant.",
          de: "Ich bin Student."
        }
      },
      {
        id: "a1_2",
        word: {
          en: "Hello, how are you?",
          fa: "سلام، حال شما چطور است؟",
          fr: "Bonjour, comment allez-vous ?",
          de: "Hallo, wie geht es dir?"
        }
      },
      {
        id: "a1_3",
        word: {
          en: "My name is Sarah.",
          fa: "اسم من سارا است.",
          fr: "Je m'appelle Sarah.",
          de: "Mein Name ist Sarah."
        }
      },
      {
        id: "a1_4",
        word: {
          en: "I live in Iran.",
          fa: "من در ایران زندگی می‌کنم.",
          fr: "J'habite en Iran.",
          de: "Ich lebe in Iran."
        }
      },
      {
        id: "a1_5",
        word: {
          en: "I like coffee.",
          fa: "من قهوه دوست دارم.",
          fr: "J'aime le café.",
          de: "Ich mag Kaffee."
        }
      },
      {
        id: "a1_6",
        word: {
          en: "I have a brother.",
          fa: "من یک برادر دارم.",
          fr: "J'ai un frère.",
          de: "Ich habe einen Bruder."
        }
      },
      {
        id: "a1_7",
        word: {
          en: "He works in a bank.",
          fa: "او در یک بانک کار می‌کند.",
          fr: "Il travaille dans une banque.",
          de: "Er arbeitet in einer Bank."
        }
      },
      {
        id: "a1_8",
        word: {
          en: "What time is it?",
          fa: "ساعت چند است؟",
          fr: "Quelle heure est-il ?",
          de: "Wie spät ist es?"
        }
      },
      {
        id: "a1_9",
        word: {
          en: "It is sunny today.",
          fa: "امروز هوا آفتابی است.",
          fr: "Il fait soleil aujourd'hui.",
          de: "Es ist heute sonnig."
        }
      },
      {
        id: "a1_10",
        word: {
          en: "Goodbye, see you later.",
          fa: "خداحافظ، بعدا می‌بینمت.",
          fr: "Au revoir, à plus tard.",
          de: "Tschüss, bis später."
        }
      },
      {
        id: "a1_11",
        word: {
          en: "I am sorry, I do not understand.",
          fa: "متاسفم، نمی‌فهمم.",
          fr: "Je suis désolé, je ne comprends pas.",
          de: "Es tut mir leid, ich verstehe nicht."
        }
      },
      {
        id: "a1_12",
        word: {
          en: "Please repeat that.",
          fa: "لطفا آن را تکرار کنید.",
          fr: "Répétez s'il vous plaît.",
          de: "Bitte wiederholen Sie das."
        }
      },
      {
        id: "a1_13",
        word: {
          en: "Thank you very much.",
          fa: "خیلی ممنون.",
          fr: "Merci beaucoup.",
          de: "Vielen Dank."
        }
      },
      {
        id: "a1_14",
        word: {
          en: "Do you speak English?",
          fa: "آیا انگلیسی صحبت می‌کنید؟",
          fr: "Parlez-vous anglais ?",
          de: "Sprechen Sie Englisch?"
        }
      },
      {
        id: "a1_15",
        word: {
          en: "I am hungry.",
          fa: "من گرسنه هستم.",
          fr: "J'ai faim.",
          de: "Ich habe Hunger."
        }
      },
      {
        id: "a1_16",
        word: {
          en: "I am thirsty.",
          fa: "من تشنه هستم.",
          fr: "J'ai soif.",
          de: "Ich habe Durst."
        }
      },
      {
        id: "a1_17",
        word: {
          en: "This is my friend.",
          fa: "این دوست من است.",
          fr: "C'est mon ami.",
          de: "Das ist mein Freund."
        }
      },
      {
        id: "a1_18",
        word: {
          en: "The car is red.",
          fa: "ماشین قرمز است.",
          fr: "La voiture est rouge.",
          de: "Das Auto ist rot."
        }
      },
      {
        id: "a1_19",
        word: {
          en: "The book is on the table.",
          fa: "کتاب روی میز است.",
          fr: "Le livre est sur la table.",
          de: "Das Buch ist auf dem Tisch."
        }
      },
      {
        id: "a1_20",
        word: {
          en: "The house is big.",
          fa: "خانه بزرگ است.",
          fr: "La maison est grande.",
          de: "Das Haus ist groß."
        }
      },
      {
        id: "a1_21",
        word: {
          en: "The cat is small.",
          fa: "گربه کوچک است.",
          fr: "Le chat est petit.",
          de: "Die Katze ist klein."
        }
      },
      {
        id: "a1_22",
        word: {
          en: "She is happy.",
          fa: "او خوشحال است.",
          fr: "Elle est heureuse.",
          de: "Sie ist glücklich."
        }
      },
      {
        id: "a1_23",
        word: {
          en: "Why are you sad?",
          fa: "چرا غمگینی؟",
          fr: "Pourquoi es-tu triste ?",
          de: "Warum bist du traurig?"
        }
      },
      {
        id: "a1_24",
        word: {
          en: "The door is open.",
          fa: "در باز است.",
          fr: "La porte est ouverte.",
          de: "Die Tür ist offen."
        }
      },
      {
        id: "a1_25",
        word: {
          en: "The window is closed.",
          fa: "پنجره بسته است.",
          fr: "La fenêtre est fermée.",
          de: "Das Fenster ist geschlossen."
        }
      },
      {
        id: "a1_26",
        word: {
          en: "The coffee is hot.",
          fa: "قهوه داغ است.",
          fr: "Le café est chaud.",
          de: "Der Kaffee ist heiß."
        }
      },
      {
        id: "a1_27",
        word: {
          en: "The water is cold.",
          fa: "آب سرد است.",
          fr: "L'eau est froide.",
          de: "Das Wasser ist kalt."
        }
      },
      {
        id: "a1_28",
        word: {
          en: "Today is Monday.",
          fa: "امروز دوشنبه است.",
          fr: "Aujourd'hui, c'est lundi.",
          de: "Heute ist Montag."
        }
      },
      {
        id: "a1_29",
        word: {
          en: "What is your phone number?",
          fa: "شماره تلفن شما چیست؟",
          fr: "Quel est votre numéro de téléphone ?",
          de: "Wie ist Ihre Telefonnummer?"
        }
      },
      {
        id: "a1_30",
        word: {
          en: "Where is the bathroom?",
          fa: "دستشویی کجاست؟",
          fr: "Où sont les toilettes ?",
          de: "Wo ist die Toilette?"
        }
      },
      {
        id: "a1_31",
        word: {
          en: "Can you help me?",
          fa: "می‌توانید به من کمک کنید؟",
          fr: "Pouvez-vous m'aider ?",
          de: "Können Sie mir helfen?"
        }
      },
      {
        id: "a1_32",
        word: {
          en: "I am lost.",
          fa: "من گم شده‌ام.",
          fr: "Je suis perdu.",
          de: "Ich habe mich verlaufen."
        }
      },
      {
        id: "a1_33",
        word: {
          en: "I want water.",
          fa: "من آب می‌خواهم.",
          fr: "Je veux de l'eau.",
          de: "Ich möchte Wasser."
        }
      },
      {
        id: "a1_34",
        word: {
          en: "I eat an apple.",
          fa: "من سیب می‌خورم.",
          fr: "Je mange une pomme.",
          de: "Ich esse einen Apfel."
        }
      },
      {
        id: "a1_35",
        word: {
          en: "He drinks tea.",
          fa: "او چای می‌نوشد.",
          fr: "Il boit du thé.",
          de: "Er trinkt Tee."
        }
      },
      {
        id: "a1_36",
        word: {
          en: "We read books.",
          fa: "ما کتاب می‌خوانیم.",
          fr: "Nous lisons des livres.",
          de: "Wir lesen Bücher."
        }
      },
      {
        id: "a1_37",
        word: {
          en: "They write letters.",
          fa: "آن‌ها نامه می‌نویسند.",
          fr: "Ils écrivent des lettres.",
          de: "Sie schreiben Briefe."
        }
      },
      {
        id: "a1_38",
        word: {
          en: "I go to school.",
          fa: "من به مدرسه می‌روم.",
          fr: "Je vais à l'école.",
          de: "Ich gehe zur Schule."
        }
      },
      {
        id: "a1_39",
        word: {
          en: "Come here.",
          fa: "به اینجا بیا.",
          fr: "Viens ici.",
          de: "Komm her."
        }
      },
      {
        id: "a1_40",
        word: {
          en: "I see you.",
          fa: "من تو را می‌بینم.",
          fr: "Je te vois.",
          de: "Ich sehe dich."
        }
      },
      {
        id: "a1_41",
        word: {
          en: "Happy birthday.",
          fa: "تولدت مبارک.",
          fr: "Joyeux anniversaire.",
          de: "Alles Gute zum Geburtstag."
        }
      },
      {
        id: "a1_42",
        word: {
          en: "I love you.",
          fa: "دوستت دارم.",
          fr: "Je t'aime.",
          de: "Ich liebe dich."
        }
      },
      {
        id: "a1_43",
        word: {
          en: "This is my family.",
          fa: "این خانواده من است.",
          fr: "C'est ma famille.",
          de: "Das ist meine Familie."
        }
      },
      {
        id: "a1_44",
        word: {
          en: "My father is a teacher.",
          fa: "پدرم معلم است.",
          fr: "Mon père est enseignant.",
          de: "Mein Vater ist Lehrer."
        }
      },
      {
        id: "a1_45",
        word: {
          en: "My mother is a doctor.",
          fa: "مادرم دکتر است.",
          fr: "Ma mère est médecin.",
          de: "Meine Mutter ist Ärztin."
        }
      },
      {
        id: "a1_46",
        word: {
          en: "I have a younger sister.",
          fa: "خواهر کوچکتر دارم.",
          fr: "J'ai une petite sœur.",
          de: "Ich habe eine jüngere Schwester."
        }
      },
      {
        id: "a1_47",
        word: {
          en: "I want to go home.",
          fa: "می‌خواهم به خانه بروم.",
          fr: "Je veux rentrer à la maison.",
          de: "Ich will nach Hause gehen."
        }
      },
      {
        id: "a1_48",
        word: {
          en: "School is open tomorrow.",
          fa: "مدرسه فردا باز است.",
          fr: "L'école est ouverte demain.",
          de: "Die Schule ist morgen geöffnet."
        }
      },
      {
        id: "a1_49",
        word: {
          en: "Do you have a pen?",
          fa: "آیا خودکار داری؟",
          fr: "As-tu un stylo ?",
          de: "Hast du einen Stift?"
        }
      },
      {
        id: "a1_50",
        word: {
          en: "My phone is ringing.",
          fa: "تلفنم زنگ می‌خورد.",
          fr: "Mon téléphone sonne.",
          de: "Mein Telefon klingelt."
        }
      }
    ]
  },
  {
    level: "A2_Sentences",
    items: [
      {
        id: "a2_1",
        word: {
          en: "I went to the cinema yesterday.",
          fa: "دیروز به سینما رفتم.",
          fr: "Je suis allé au cinéma hier.",
          de: "Ich bin gestern ins Kino gegangen.",
          ko: "어제 영화관에 갔어요."
        }
      },
      {
        id: "a2_2",
        word: {
          en: "What will you do tomorrow?",
          fa: "فردا چه کار خواهی کرد؟",
          fr: "Que feras-tu demain ?",
          de: "Was wirst du morgen machen?",
          ko: "내일 무엇을 할 거예요?"
        }
      },
      {
        id: "a2_3",
        word: {
          en: "I need to buy some food.",
          fa: "باید مقداری غذا بخرم.",
          fr: "Je dois acheter de la nourriture.",
          de: "Ich muss etwas Essen kaufen.",
          ko: "음식을 좀 사야 해요."
        }
      },
      {
        id: "a2_4",
        word: {
          en: "We visited our grandparents last weekend.",
          fa: "ما آخر هفته پدربزرگ و مادربزرگ را دیدیم.",
          fr: "Nous avons rendu visite à nos grands-parents le week-end dernier.",
          de: "Wir haben unsere Großeltern letztes Wochenende besucht.",
          ko: "우리는 지난 주말에 조부모님을 방문했어요."
        }
      },
      {
        id: "a2_5",
        word: {
          en: "I am very busy right now.",
          fa: "الان خیلی سرم شلوغ است.",
          fr: "Je suis très occupé en ce moment.",
          de: "Ich bin gerade sehr beschäftigt.",
          ko: "지금 정말 바빠요."
        }
      },
      {
        id: "a2_6",
        word: {
          en: "This shirt is too expensive.",
          fa: "این پیراهن خیلی گران است.",
          fr: "Cette chemise est trop chère.",
          de: "Dieses Hemd ist zu teuer.",
          ko: "이 셔츠는 너무 비싸요."
        }
      },
      {
        id: "a2_7",
        word: {
          en: "This book is better than that one.",
          fa: "این کتاب بهتر از آن یکی است.",
          fr: "Ce livre est meilleur que celui-là.",
          de: "Dieses Buch ist besser als jenes.",
          ko: "이 책이 저것보다 더 좋아요."
        }
      },
      {
        id: "a2_8",
        word: {
          en: "The train leaves at 10 o'clock.",
          fa: "قطار ساعت ۱۰ حرکت می‌کند.",
          fr: "Le train part à 10 heures.",
          de: "Der Zug fährt um 10 Uhr ab.",
          ko: "기차는 10시에 떠나요."
        }
      },
      {
        id: "a2_9",
        word: {
          en: "It rained all day yesterday.",
          fa: "دیروز تمام روز باران بارید.",
          fr: "Il a plu toute la journée hier.",
          de: "Es hat gestern den ganzen Tag geregnet.",
          ko: "어제 하루 종일 비가 왔어요."
        }
      },
      {
        id: "a2_10",
        word: {
          en: "I was tired so I went to bed early.",
          fa: "خسته بودم پس زود خوابیدم.",
          fr: "J'étais fatigué alors je me suis couché tôt.",
          de: "Ich war müde, also ging ich früh ins Bett.",
          ko: "피곤해서 일찍 잤어요."
        }
      },
      {
        id: "a2_11",
        word: {
          en: "The flight was delayed by two hours.",
          fa: "پرواز دو ساعت تاخیر داشت.",
          fr: "Le vol a été retardé de deux heures.",
          de: "Der Flug hatte zwei Stunden Verspätung.",
          ko: "비행기가 두 시간 지연되었어요."
        }
      },
      {
        id: "a2_12",
        word: {
          en: "Did you buy a ticket?",
          fa: "آیا بلیط خریدی؟",
          fr: "As-tu acheté un billet ?",
          de: "Hast du ein Ticket gekauft?",
          ko: "표를 샀나요?"
        }
      },
      {
        id: "a2_13",
        word: {
          en: "Please show your passport.",
          fa: "لطفا پاسپورت خود را نشان دهید.",
          fr: "Veuillez montrer votre passeport.",
          de: "Bitte zeigen Sie Ihren Reisepass.",
          ko: "여권을 보여주세요."
        }
      },
      {
        id: "a2_14",
        word: {
          en: "We stayed at a good hotel.",
          fa: "ما در هتل خوبی اقامت کردیم.",
          fr: "Nous avons séjourné dans un bon hôtel.",
          de: "Wir haben in einem guten Hotel übernachtet.",
          ko: "우리는 좋은 호텔에 머물렀어요."
        }
      },
      {
        id: "a2_15",
        word: {
          en: "Do you have a map of the city?",
          fa: "آیا نقشه شهر را دارید؟",
          fr: "Avez-vous une carte de la ville ?",
          de: "Haben Sie keinen Stadtplan?",
          ko: "시내 지도가 있나요?"
        }
      },
      {
        id: "a2_16",
        word: {
          en: "Turn left and go straight.",
          fa: "به چپ بپیچید و مستقیم بروید.",
          fr: "Tournez à gauche et allez tout droit.",
          de: "Biegen Sie links ab und gehen Sie geradeaus.",
          ko: "왼쪽으로 돌아서 직진하세요."
        }
      },
      {
        id: "a2_17",
        word: {
          en: "Is the station far?",
          fa: "آیا ایستگاه دور است؟",
          fr: "La gare est-elle loin ?",
          de: "Ist der Bahnhof weit?",
          ko: "역이 먼가요?"
        }
      },
      {
        id: "a2_18",
        word: {
          en: "It is near the park.",
          fa: "نزدیک پارک است.",
          fr: "C'est près du parc.",
          de: "Es ist in der Nähe des Parks.",
          ko: "공원 근처에 있어요."
        }
      },
      {
        id: "a2_19",
        word: {
          en: "When does the bus arrive?",
          fa: "اتوبوس کِی می‌رسد؟",
          fr: "Quand arrive le bus ?",
          de: "Wann kommt der Bus an?",
          ko: "버스는 언제 도착하나요?"
        }
      },
      {
        id: "a2_20",
        word: {
          en: "The driver was very careful.",
          fa: "راننده بسیار محتاط بود.",
          fr: "Le chauffeur était très prudent.",
          de: "Der Fahrer war sehr vorsichtig.",
          ko: "운전 기사가 매우 조심했어요."
        }
      },
      {
        id: "a2_21",
        word: {
          en: "What did you have for lunch?",
          fa: "برای ناهار چه خوردید؟",
          fr: "Qu'est-ce que tu as mangé pour le déjeuner ?",
          de: "Was hast du zu Mittag gegessen?",
          ko: "점심으로 무엇을 먹었나요?"
        }
      },
      {
        id: "a2_22",
        word: {
          en: "The food was delicious.",
          fa: "غذا خوشمزه بود.",
          fr: "La nourriture était délicieuse.",
          de: "Das Essen war lecker.",
          ko: "음식은 맛있었어요."
        }
      },
      {
        id: "a2_23",
        word: {
          en: "I like to cook.",
          fa: "من دوست دارم غذا بپزم.",
          fr: "J'aime cuisiner.",
          de: "Ich koche gerne.",
          ko: "저는 요리하는 것을 좋아해요."
        }
      },
      {
        id: "a2_24",
        word: {
          en: "He is in the kitchen.",
          fa: "او در آشپزخانه است.",
          fr: "Il est dans la cuisine.",
          de: "Er ist in der Küche.",
          ko: "그는 부엌에 있어요."
        }
      },
      {
        id: "a2_25",
        word: {
          en: "You should eat more vegetables.",
          fa: "باید سبزیجات بیشتری بخوری.",
          fr: "Tu devrais manger plus de légumes.",
          de: "Du solltest mehr Gemüse essen.",
          ko: "채소를 더 많이 먹어야 해요."
        }
      },
      {
        id: "a2_26",
        word: {
          en: "Fresh fruit is healthy.",
          fa: "میوه تازه سالم است.",
          fr: "Les fruits frais sont bons pour la santé.",
          de: "Frisches Obst ist gesund.",
          ko: "신선한 과일은 건강에 좋아요."
        }
      },
      {
        id: "a2_27",
        word: {
          en: "The milk is in the fridge.",
          fa: "شیر در یخچال است.",
          fr: "Le lait est dans le frigo.",
          de: "Die Milch ist im Kühlschrank.",
          ko: "우유는 냉장고에 있어요."
        }
      },
      {
        id: "a2_28",
        word: {
          en: "I need to clean my room.",
          fa: "باید اتاقم را تمیز کنم.",
          fr: "Je dois nettoyer ma chambre.",
          de: "Ich muss mein Zimmer aufräumen.",
          ko: "방을 청소해야 해요."
        }
      },
      {
        id: "a2_29",
        word: {
          en: "Have you washed the car?",
          fa: "آیا ماشین را شسته‌ای؟",
          fr: "As-tu lavé la voiture ?",
          de: "Hast du das Auto gewaschen?",
          ko: "세차했나요?"
        }
      },
      {
        id: "a2_30",
        word: {
          en: "I bought new clothes.",
          fa: "لباس‌های جدید خریدم.",
          fr: "J'ai acheté de nouveaux vêtements.",
          de: "Ich habe neue Kleidung gekauft.",
          ko: "새 옷을 샀어요."
        }
      },
      {
        id: "a2_31",
        word: {
          en: "She always wears red.",
          fa: "او همیشه قرمز می‌پوشد.",
          fr: "Elle porte toujours du rouge.",
          de: "Sie trägt immer Rot.",
          ko: "그녀는 항상 빨간 옷을 입어요."
        }
      },
      {
        id: "a2_32",
        word: {
          en: "These shoes are comfortable.",
          fa: "این کفش‌ها راحت هستند.",
          fr: "Ces chaussures sont confortables.",
          de: "Diese Schuhe sind bequem.",
          ko: "이 신발은 편안해요."
        }
      },
      {
        id: "a2_33",
        word: {
          en: "What is your size?",
          fa: "سایز شما چیست؟",
          fr: "Quelle est votre taille ?",
          de: "Welche Größe haben Sie?",
          ko: "사이즈가 어떻게 되세요?"
        }
      },
      {
        id: "a2_34",
        word: {
          en: "Which color do you prefer?",
          fa: "کدام رنگ را ترجیح می‌دهی؟",
          fr: "Quelle couleur préférez-vous ?",
          de: "Welche Farbe bevorzugen Sie?",
          ko: "어떤 색을 더 좋아하세요?"
        }
      },
      {
        id: "a2_35",
        word: {
          en: "It is not cheap.",
          fa: "ارزان نیست.",
          fr: "Ce n'est pas bon marché.",
          de: "Es ist nicht billig.",
          ko: "그것은 싸지 않아요."
        }
      },
      {
        id: "a2_36",
        word: {
          en: "How much does it cost?",
          fa: "قیمت آن چقدر است؟",
          fr: "Combien ça coûte ?",
          de: "Wie viel kostet es?",
          ko: "얼마인가요?"
        }
      },
      {
        id: "a2_37",
        word: {
          en: "I don't have enough money.",
          fa: "پول کافی ندارم.",
          fr: "Je n'ai pas assez d'argent.",
          de: "Ich habe nicht genug Geld.",
          ko: "돈이 충분하지 않아요."
        }
      },
      {
        id: "a2_38",
        word: {
          en: "Can I pay by card?",
          fa: "می‌توانم با کارت پرداخت کنم؟",
          fr: "Puis-je payer par carte ?",
          de: "Kann ich mit Karte bezahlen?",
          ko: "카드로 계산할 수 있나요?"
        }
      },
      {
        id: "a2_39",
        word: {
          en: "We only accept cash.",
          fa: "فقط پول نقد قبول می‌کنیم.",
          fr: "Nous n'acceptons que les espèces.",
          de: "Wir akzeptieren nur Bargeld.",
          ko: "우리는 현금만 받아요."
        }
      },
      {
        id: "a2_40",
        word: {
          en: "I lost my wallet.",
          fa: "کیف پولم را گم کردم.",
          fr: "J'ai perdu mon portefeuille.",
          de: "Ich habe meine Brieftasche verloren.",
          ko: "지갑을 잃어버렸어요."
        }
      }
    ]
  },
  {
    level: "Grammar_Tips",
    items: [
      {
        id: "gram_1",
        word: {
          en: "I used to smoke, but I gave up.",
          fa: "نکته گرامری: برای عادات گذشته از 'Used to' استفاده کنید. (من قبلا سیگار می‌کشیدم اما ترک کردم.)",
          fr: "Je fumais, mais j'ai arrêté.",
          de: "Ich habe früher geraucht, aber ich habe aufgehört."
        }
      },
      {
        id: "gram_2",
        word: {
          en: "The more you read, the more you learn.",
          fa: "نکته گرامری: مقایسه. 'The more... the more...' (هرچقدر بیشتر بخوانی، بیشتر یاد می‌گیری.)",
          fr: "Plus vous lisez, plus vous apprenez.",
          de: "Je mehr du liest, desto mehr lernst du."
        }
      },
      {
        id: "gram_3",
        word: {
          en: "If I were you, I wouldn't do that.",
          fa: "نکته گرامری: شرطی نوع دوم (غیرواقعی). (اگر جای تو بودم، این کار را نمی‌کردم.)",
          fr: "Si j'étais toi, je ne ferais pas ça.",
          de: "Wenn ich du wäre, würde ich das nicht tun."
        }
      },
      {
        id: "gram_4",
        word: {
          en: "I have just finished my homework.",
          fa: "نکته گرامری: حال کامل. (من همین الان تکالیفم را تمام کرده‌ام - اثرش باقی است)",
          fr: "Je viens de finir mes devoirs.",
          de: "Ich habe gerade meine Hausaufgaben beendet."
        }
      },
      {
        id: "gram_5",
        word: {
          en: "This letter was written yesterday.",
          fa: "نکته گرامری: مجهول. (این نامه دیروز نوشته شد.)",
          fr: "Cette lettre a été écrite hier.",
          de: "Dieser Brief wurde gestern geschrieben."
        }
      },
      {
        id: "gram_6",
        word: {
          en: "He must have left his keys behid.",
          fa: "نکته گرامری: قطعیت در گذشته. (او حتما کلیدهایش را جا گذاشته است.)",
          fr: "Il a dû laisser ses clés derrière lui.",
          de: "Er muss seine Schlüssel zurückgelassen haben."
        }
      },
      {
        id: "gram_7",
        word: {
          en: "I enjoy swimming.",
          fa: "نکته گرامری: بعد از Enjoy فعل با ing می‌آید. (از شنا کردن لذت می‌برم.)",
          fr: "J'aime nager.",
          de: "Ich genieße das Schwimmen."
        }
      },
      {
        id: "gram_8",
        word: {
          en: "He is not tall enough to reach the shelf.",
          fa: "نکته گرامری: جایگاه Enough. (او به اندازه کافی قدبلند نیست - صفت + enough)",
          fr: "Il n'est pas assez grand pour atteindre l'étagère.",
          de: "Er ist nicht groß genug, um das Regal zu erreichen."
        }
      },
      {
        id: "gram_9",
        word: {
          en: "The man who you saw yesterday is my father.",
          fa: "نکته گرامری: عبارات موصولی. (مردی که دیروز دیدی پدر من است.)",
          fr: "L'homme que tu as vu hier est mon père.",
          de: "Der Mann, den du gestern gesehen hast, ist mein Vater."
        }
      },
      {
        id: "gram_10",
        word: {
          en: "It is cold, isn't it?",
          fa: "نکته گرامری: سوالات ضمیمه. (هوا سرد است، مگر نه؟)",
          fr: "Il fait froid, n'est-ce pas ?",
          de: "Es ist kalt, oder?"
        }
      }
    ]
  },
  {
    level: "Motivational",
    items: [
      {
        id: "mot_1",
        word: {
          en: "Believe you can and you're halfway there.",
          fa: "باور داشته باش که می‌توانی، آنگاه نیمی از راه را رفته‌ای. (تئودور روزولت)",
          fr: "Crois que tu peux et tu es à mi-chemin.",
          de: "Glaube, dass du es kannst, und du bist schon halb dort."
        }
      },
      {
        id: "mot_2",
        word: {
          en: "It always seems impossible until it's done.",
          fa: "همیشه غیرممکن به نظر می‌رسد تا زمانی که انجام شود. (نلسون ماندلا)",
          fr: "Cela semble toujours impossible jusqu'à ce que ce soit fait.",
          de: "Es scheint immer unmöglich, bis es getan ist."
        }
      },
      {
        id: "mot_3",
        word: {
          en: "Never give up. Great things take time.",
          fa: "هرگز تسلیم نشو. چیزهای بزرگ زمان می‌برند.",
          fr: "N'abandonne jamais. Les grandes choses prennent du temps.",
          de: "Gib niemals auf. Große Dinge brauchen Zeit."
        }
      },
      {
        id: "mot_4",
        word: {
          en: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
          fa: "موفقیت نهایی نیست، شکست کشنده نیست: این شجاعت ادامه دادن است که اهمیت دارد.",
          fr: "Le succès n'est pas final, l'échec n'est pas fatal.",
          de: "Erfolg ist nicht endgültig, Misserfolg ist nicht fatal."
        }
      },
      {
        id: "mot_5",
        word: {
          en: "The future belongs to those who believe in the beauty of their dreams.",
          fa: "آینده متعلق به کسانی است که به زیبایی رویاهایشان باور دارند.",
          fr: "L'avenir appartient à ceux qui croient à la beauté de leurs rêves.",
          de: "Die Zukunft gehört denen, die an die Schönheit ihrer Träume glauben."
        }
      },
      {
        id: "mot_6",
        word: {
          en: "Don't wish for it, work for it.",
          fa: "رویاپردازی نکن، انجامش بده.",
          fr: "Ne le souhaite pas, travaille pour l'obtenir.",
          de: "Wünsche es dir nicht, arbeite dafür."
        }
      },
      {
        id: "mot_7",
        word: {
          en: "Making mistakes is better than faking perfections.",
          fa: "اشتباه کردن بهتر از تظاهر به کمال است.",
          fr: "Faire des erreurs vaut mieux que de feindre la perfection.",
          de: "Fehler zu machen ist besser, als Perfektion vorzutäuschen."
        }
      },
      {
        id: "mot_8",
        word: {
          en: "Push your limits.",
          fa: "محدودیت‌هایت را کنار بگذار.",
          fr: "Repousse tes limites.",
          de: "Gehe an deine Grenzen."
        }
      },
      {
        id: "mot_9",
        word: {
          en: "Don't put off until tomorrow what you can do today.",
          fa: "کاری را که امروز می‌توانی انجام دهی به فردا مینداز.",
          fr: "Ne remets pas à demain ce que tu peux faire aujourd'hui.",
          de: "Verschiebe nicht auf morgen, was du heute tun kannst."
        }
      },
      {
        id: "mot_10",
        word: {
          en: "Don't let anyone dull your sparkle.",
          fa: "اجازه نده کسی درخشش تو را کم کند.",
          fr: "Ne laisse personne ternir ton éclat.",
          de: "Lass niemanden dein Funkeln trüben."
        }
      }
    ]
  }
];

// تابع کمکی اصلاح شده برای تولید ساختار نهایی
function generateVocabulary() {
  const dataset = [];
  const languages = ['en', 'fr', 'de', 'it', 'es', 'ru', 'zh', 'ar', 'ko'];

  // حلقه روی هر سطح
  wordCollections.forEach(collection => {
    const currentLevel = collection.level;

    // حلقه روی آیتم‌های آن سطح
    collection.items.forEach(nestedItem => {
      // حلقه روی زبان‌های هدف
      languages.forEach(targetLang => {
        // چک کن که آیا ترجمه کلمه در این زبان وجود دارد
        if (nestedItem.word && nestedItem.word[targetLang]) {

          // ساخت شیء ترجمه مسطح (Flat) برای سازگاری با کدهای موجود
          const flatTranslations = { id: nestedItem.id };
          languages.forEach(l => {
            if (nestedItem.word[l]) flatTranslations[l] = nestedItem.word[l];
            if (nestedItem.sentence && nestedItem.sentence[l]) flatTranslations['sentence_' + l] = nestedItem.sentence[l];
          });

          dataset.push({
            word: nestedItem.word[targetLang],
            level: currentLevel,
            lang: targetLang,
            translations: flatTranslations,
            sentence: nestedItem.sentence ? (nestedItem.sentence[targetLang] || "") : ""
          });
        }
      });
    });
  });

  return dataset;
}
// خروجی نهایی
export const vocabulary = generateVocabulary();
