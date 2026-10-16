/**
 * WEDDING WEBSITE CONTENT
 * ========================
 * Ron & Dana Wedding – 22–24 May 2027
 * Wedding Venue: Castello Petrata, Assisi (PG), Italy
 * Guest Hotel: Hotel Cenacolo, Santa Maria degli Angeli, Assisi (PG), Italy
 *
 * Supports three languages:
 * - "ru" (Russian)
 * - "en" (English)
 * - "he" (Hebrew / RTL)
 */

const CONTENT = {

  /* ── Site settings ──────────────────────────────────────── */
  defaultLang: "en",          // "ru" | "en" | "he"
  availableLangs: ["ru", "en", "he"],

  /* ── Couple ─────────────────────────────────────────────── */
  couple: {
    name1:     { ru: "Рон", en: "Ron", he: "רון" },
    name2:     { ru: "Дана", en: "Dana", he: "דנה" },
    ampersand: { ru: "&", en: "&", he: "&" },
    tagline: {
      ru: "Два сердца, одна история",
      en: "Two hearts, one story",
      he: "שני לבבות, סיפור אחד",
    },
    subtitle: {
      ru: "женятся",
      en: "are getting married",
      he: "מתחתנים",
    },
  },

  /* ── Wedding dates ──────────────────────────────────────── */
  date: {
    // Countdown targets the wedding gathering on Sunday, 23 May 2027 at 17:00 (Italy Time, CEST / UTC+2)
    iso:         "2027-05-23T17:00:00+02:00",
    display: {
      ru: "23 мая 2027",
      en: "May 23, 2027",
      he: "23 במאי 2027",
    },
    dayRange: {
      ru: "Воскресенье",
      en: "Sunday",
      he: "יום ראשון",
    },
  },

  /* ── Hero ───────────────────────────────────────────────── */
  hero: {
    backgroundImage:       "images/hero_bg.jpeg",
    backgroundImageMobile: "images/hero_bg.jpeg",
    overlayOpacity:        0.45,
    venueLabel: {
      ru: "Castello Petrata · Ассизи, Умбрия, Италия",
      en: "Castello Petrata · Assisi, Umbria, Italy",
      he: "קסטלו פטרטה · אסיסי, אומבריה, איטליה",
    },
  },

  /* ── Nav labels ─────────────────────────────────────────── */
  nav: {
    details:    { ru: "Детали",        en: "Details",     he: "פרטים" },
    schedule:   { ru: "Программа",     en: "Schedule",    he: "לוח זמנים" },
    attire:     { ru: "Дресс-код",     en: "Attire",      he: "קוד לבוש" },
    venue:      { ru: "Место",         en: "Venue",       he: "מקום האירוע" },
    travel:     { ru: "Как добраться", en: "Travel",      he: "הגעה" },
    rsvp:       { ru: "RSVP",          en: "RSVP",        he: "אישור הגעה" },
    gifts:      { ru: "Подарки",       en: "A Little Gift", he: "מתנה" },
  },

  /* ── Story (optional/safe fallback) ─────────────────────── */
  story: null,

  /* ── Event Details (3-day overview) ────────────────────── */
  details: {
    sectionTitle: { ru: "Свадебный уикенд", en: "The Weekend", he: "סוף השבוע" },
    cards: [
      {
        icon:  "🏨",
        title: {
          ru: "Суббота 22 – Прибытие в Hotel Cenacolo",
          en: "Saturday 22 – Arrival to Hotel Cenacolo",
          he: "שבת 22 – הגעה למלון Hotel Cenacolo",
        },
        lines: {
          ru: [
            "Заезд в Hotel Cenacolo (Ассизи) с <span class=\"detail-em\">14:00</span>",
            "Размещение и заселение гостей в отеле",
            "Отдых и вечер знакомства",
            "Дресс-код: праздничный элегантный",
          ],
          en: [
            "Check-in at Hotel Cenacolo (Assisi) from <span class=\"detail-em\">2:00 PM (14:00)</span>",
            "Guest accommodation & room settlement",
            "Evening relaxation and welcome gathering",
            "Dress code: festive chic",
          ],
          he: [
            "צ'ק-אין במלון Hotel Cenacolo (אסיסי) החל מ-<span class=\"detail-em\">14:00</span>",
            "קבלת חדרים והתמקמות האורחים במלון",
            "התרעננות ומפגש פתיחה נינוח",
            "קוד לבוש: שיק חגיגי",
          ],
        },
      },
      {
        icon:  "💍",
        title: {
          ru: "Воскресенье 23 – Свадебный день в Castello Petrata",
          en: "Sunday 23 – Wedding Day at Castello Petrata",
          he: "ראשון 23 – יום החתונה בקסטלו פטרטה",
        },
        lines: {
          ru: [
            "Завтрак в отеле Hotel Cenacolo (<span class=\"detail-em\">07:30–10:00</span>)",
            "<span class=\"detail-em\">16:30</span> – Организованный трансфер (шаттл) из Hotel Cenacolo в Castello Petrata",
            "17:00 Сбор гостей · 17:30 Церемония · 18:00 Аперитив · 20:00 Ужин · 22:00 Вечеринка",
            "Организованные обратные шаттлы в отель после завершения праздника",
            "Дресс-код: вечерний праздничный",
          ],
          en: [
            "Breakfast at Hotel Cenacolo (<span class=\"detail-em\">7:30–10:00 AM</span>)",
            "<span class=\"detail-em\">4:30 PM (16:30)</span> – Shuttle service from Hotel Cenacolo to Castello Petrata",
            "5:00 PM Gathering · 5:30 PM Ceremony · 6:00 PM Aperitivo · 8:00 PM Dinner · 10:00 PM Party",
            "Return shuttles to Hotel Cenacolo provided throughout the night",
            "Dress code: formal / festive attire",
          ],
          he: [
            "ארוחת בוקר במלון Hotel Cenacolo (<span class=\"detail-em\">07:30–10:00</span>)",
            "<span class=\"detail-em\">16:30</span> – שאטל מאורגן ממלון Hotel Cenacolo לקסטלו פטרטה",
            "17:00 התכנסות · 17:30 טקס חופה · 18:00 אפריטיבו · 20:00 ארוחת ערב · 22:00 מסיבה",
            "שאטלים חזרה למלון ייצאו לאורך כל הלילה",
            "קוד לבוש: רשמי / שיק חגיגי",
          ],
        },
      },
      {
        icon:  "🌅",
        title: {
          ru: "Понедельник 24 – Выезд и прощание",
          en: "Monday 24 – Check-out & Farewell",
          he: "שני 24 – צ'ק-אאוט ופרידה",
        },
        lines: {
          ru: [
            "Завтрак в Hotel Cenacolo (<span class=\"detail-em\">07:30–10:00</span>)",
            "Выезд из номеров в <span class=\"detail-em\">10:00</span>",
            "Спасибо, что разделили эти волшебные дни с нами!",
          ],
          en: [
            "Breakfast at Hotel Cenacolo (<span class=\"detail-em\">7:30–10:00 AM</span>)",
            "Hotel check-out at <span class=\"detail-em\">10:00 AM (10:00)</span>",
            "Goodbye and thank you for celebrating this unforgettable weekend with us!",
          ],
          he: [
            "ארוחת בוקר במלון Hotel Cenacolo (<span class=\"detail-em\">07:30–10:00</span>)",
            "צ'ק-אאוט מחדרי המלון בשעה <span class=\"detail-em\">10:00</span>",
            "להתראות ותודה שחגגתם איתנו את סוף השבוע הבלתי נשכח!",
          ],
        },
      },
    ],
  },

  /* ── Schedule (Wedding Day Programme) ───────────────────── */
  schedule: {
    sectionTitle: { ru: "Программа дня", en: "Wedding Programme", he: "תוכנית יום החתונה" },
    subtitle:     {
      ru: "Воскресенье, 23 мая 2027 · День свадьбы",
      en: "Sunday, May 23, 2027 · Wedding Day",
      he: "יום ראשון, 23 במאי 2027 · יום החתונה",
    },
    items: [
      {
        time:  "16:30",
        label: {
          ru: "Шаттл на свадьбу",
          en: "Shuttle to the Wedding",
          he: "שאטל לחתונה",
        },
        note:  {
          ru: "Отправление шаттла от Hotel Cenacolo в Castello Petrata",
          en: "Departure from Hotel Cenacolo to Castello Petrata",
          he: "יציאת שאטל מאורגן ממלון Hotel Cenacolo לקסטלו פטרטה",
        },
      },
      {
        time:  "17:00",
        label: {
          ru: "Сбор гостей и напитки",
          en: "Gathering & Welcome Drinks",
          he: "התכנסות וקבלת פנים",
        },
        note:  {
          ru: "Приветственные напитки на панорамной террасе Castello Petrata",
          en: "Welcome drinks on the panoramic terrace at Castello Petrata",
          he: "כיבוד קל ושתייה על המרפסת הפנורמית בקסטלו פטרטה",
        },
      },
      {
        time:  "17:30",
        label: {
          ru: "Свадебная церемония",
          en: "Wedding Ceremony",
          he: "טקס החופה",
        },
        note:  {
          ru: "В саду замка Castello Petrata",
          en: "In the gardens of Castello Petrata",
          he: "בגני הטירה של קסטלו פטרטה",
        },
      },
      {
        time:  "18:00",
        label: {
          ru: "Аперитив и коктейли",
          en: "Aperitivo & Cocktails",
          he: "אפריטיבו וקוקטיילים",
        },
        note:  {
          ru: "Коктейли и закуски у бассейна и оливковой рощи",
          en: "Cocktails and Italian finger food by the pool and olive grove",
          he: "קוקטיילים ונשנושים לצד הבריכה ומטעי הזיתים",
        },
      },
      {
        time:  "20:00",
        label: {
          ru: "Праздничный гала-ужин",
          en: "Gala Dinner",
          he: "סעודת חתונה",
        },
        note:  {
          ru: "Праздничный ужин в замке",
          en: "Festive wedding dinner",
          he: "ארוחת ערב חגיגית בטירה",
        },
      },
      {
        time:  "22:00",
        label: {
          ru: "Вечеринка и танцы!",
          en: "Party & Dancing!",
          he: "מסיבה וריקודים!",
        },
        note:  {
          ru: "DJ, живой бар и танцы · Организованные шаттлы обратно в Hotel Cenacolo",
          en: "DJ, open bar & dancing · Return shuttles to Hotel Cenacolo throughout the night",
          he: "DJ, בר פתוח וריקודים · שאטלים חזרה למלון Hotel Cenacolo לאורך הלילה",
        },
      },
    ],
  },

  /* ── Attire & Dress Code (Formal Garden Party) ──────────── */
  attire: {
    sectionTitle: {
      ru: "Дресс-код и стиль",
      en: "Attire & Dress Code",
      he: "קוד לבוש וסגנון",
    },
    vibe: {
      ru: "Formal Garden Party",
      en: "Formal Garden Party",
      he: "Formal Garden Party",
    },
    subtitle: {
      ru: "Элегантная торжественность в цветущих садах замка Castello Petrata",
      en: "Summery formal elegance amidst the blooming gardens of Castello Petrata",
      he: "אלגנטיות קיצית ורומנטית בין גני האירוע של קסטלו פטרטה",
    },
    intro: {
      ru: "Наше свадебное торжество пройдет под открытым небом в окружении холмов Умбрии и живописных оливковых рощ замка Castello Petrata. Мы приглашаем наших гостей поддержать атмосферу Formal Garden Party — утонченную, романтичную и летнюю.",
      en: "Our wedding celebration takes place outdoors surrounded by the rolling Umbrian hills and olive groves of Castello Petrata. We invite our guests to embrace a chic Formal Garden Party aesthetic — elevated, romantic, and light.",
      he: "החתונה שלנו תתקיים תחת כיפת השמיים בין גבעות אומבריה ומטעי הזיתים של קסטלו פטרטה. נשמח לחגוג יחד באווירת Formal Garden Party — אלגנטית, קיצית ורומנטית.",
    },
    cards: [
      {
        id: "ladies",
        icon: "👗",
        title: {
          ru: "Для дам",
          en: "Ladies",
          he: "לנשים",
        },
        items: [
          {
            ru: "Платья длины миди или макси, романтичные струящиеся силуэты или элегантные брючные костюмы.",
            en: "Midi or maxi dresses, romantic flowing silhouettes, or chic tailored suits.",
            he: "שמלות מידי או מקסי, גזרות רומנטיות ונשפכות או חליפות מחויטות אלגנטיות.",
          },
          {
            ru: "Приветствуются мягкие пастельные тона, цветочные мотивы и легкие ткани.",
            en: "Light pastels, delicate floral prints, and breathable fabrics are warmly encouraged.",
            he: "גווני פסטל בהירים, הדפסים פרחוניים עדינים ובדים קלילים מומלצים במיוחד.",
          },
        ],
      },
      {
        id: "men",
        icon: "👔",
        title: {
          ru: "Для джентльменов",
          en: "Men",
          he: "לגברים",
        },
        items: [
          {
            ru: "Натуральные льняные и хлопковые ткани идеально подойдут для теплого итальянского вечера.",
            en: "Linen, cotton, and breathable fabrics are encouraged for a comfortable Italian evening.",
            he: "בדי פשתן וכותנה קלילים מושלמים לערב איטלקי נעים וחגיגי.",
          },
          {
            ru: "Галстук не обязателен — непринужденная торжественность приветствуется. Лоферы или классическая легкая обувь.",
            en: "Ties are not required — effortless formal style is welcomed. Loafers or dress shoes.",
            he: "עניבות אינן חובה — סגנון חגיגי וקליל מבורך. מוקסינים או נעלי ערב קלילות.",
          },
        ],
      },
    ],
    paletteTitle: {
      ru: "Цветовая палитра для вдохновения",
      en: "Color Palette & Inspiration",
      he: "פלטת צבעים להשראה",
    },
    paletteSubtitle: {
      ru: "Мягкие пастельные тона, вдохновленные цветущей природой Умбрии",
      en: "Soft pastels inspired by the blooming Umbrian landscape",
      he: "גווני פסטל רכים בהשראת הנוף הפורח של אומבריה",
    },
    swatches: [
      {
        name: { ru: "Небесно-голубой", en: "Sky Blue", he: "תכלת שמיים" },
        hex: "#BBD7EC",
      },
      {
        name: { ru: "Нежно-розовый", en: "Pale Blush", he: "ורוד בלאש" },
        hex: "#F7D2D6",
      },
      {
        name: { ru: "Сливочный желтый", en: "Butter Yellow", he: "צהוב חמאה" },
        hex: "#FBF0B9",
      },
      {
        name: { ru: "Персиковый", en: "Peach", he: "אפרסק" },
        hex: "#FAD4B5",
      },
      {
        name: { ru: "Фисташковый", en: "Pale Pistachio", he: "ירוק פיסטוק" },
        hex: "#C8DBBC",
      },
    ],
    reservedTitle: {
      ru: "Зарезервированные цвета",
      en: "Kindly Reserved Colors",
      he: "צבעים שמורים",
    },
    reservedSubtitle: {
      ru: "Пожалуйста, воздержитесь от выбора нарядов в следующих цветах:",
      en: "Please kindly refrain from wearing these specific colors:",
      he: "נבקש מכל הלב להימנע מבחירת בגדים בצבעים הבאים:",
    },
    reservedItems: [
      {
        icon: "🤍",
        color: "#FFFFFF",
        border: "#D5D0C6",
        who: {
          ru: "Белый / Слоновая кость",
          en: "White & Ivory",
          he: "לבן ושמנת",
        },
        reservedFor: {
          ru: "Зарезервирован исключительно для невесты",
          en: "Reserved exclusively for the Bride",
          he: "שמור באופן בלעדי לכלה",
        },
      },
      {
        icon: "🖤",
        color: "#1C1C1C",
        border: "#1C1C1C",
        who: {
          ru: "Черный смокинг",
          en: "Black Tuxedo",
          he: "טוקסידו שחור",
        },
        reservedFor: {
          ru: "Зарезервирован для смокинга жениха",
          en: "Reserved for the Groom's Tuxedo",
          he: "שמור לטוקסידו של החתן",
        },
      },
    ],
  },

  /* ── Venue & Accommodation ───────────────────────────────── */
  venue: {
    sectionTitle: { ru: "Место проведения и отель", en: "The Venue & Hotel", he: "מקום האירוע והמלון" },
    name: {
      ru: "Castello Petrata и Hotel Cenacolo",
      en: "Castello Petrata & Hotel Cenacolo",
      he: "Castello Petrata ומלון Hotel Cenacolo",
    },
    description: {
      ru: "Свадебная церемония, праздничный ужин и вечеринка пройдут в старинной крепости XIV века <strong>Castello Petrata</strong> в Ассизи с панорамным видом на долину Умбрии.<br><br>Все наши гости будут с комфортом размещены в отеле <strong>Hotel Cenacolo</strong> (Ассизи). Между отелем и замком организован комфортабельный трансфер (шаттлы) на все праздничные мероприятия!",
      en: "Our wedding ceremony, dinner, and party will take place at the historic 14th-century fortress <strong>Castello Petrata</strong> in Assisi, overlooking the stunning Umbrian countryside.<br><br>All attending guests will be hosted at <strong>Hotel Cenacolo</strong> in Assisi. Dedicated round-trip shuttles will be provided between Hotel Cenacolo and Castello Petrata throughout the celebrations!",
      he: "טקס החופה, ארוחת הערב והמסיבה יתקיימו במבצר ההיסטורי מהמאה ה-14 <strong>Castello Petrata</strong> שבאסיסי, המשקיף על נוף עוצר נשימה של עמק אומבריה.<br><br>כל אורחינו היקרים יתארחו במלון <strong>Hotel Cenacolo</strong> שבאסיסי. שאטלים ייעודיים הלוך וחזור יופעלו בין המלון לטירה לאורך כל החגיגות!",
    },
    accommodationCallout: {
      icon: "🚌",
      text: {
        ru: "Проживание гостей организовано в <strong>Hotel Cenacolo</strong> (Ассизи) на весь уикенд (22–24 мая). Между Hotel Cenacolo и Castello Petrata будут курсировать шаттлы на все праздничные события!",
        en: "Guest accommodation is arranged at <strong>Hotel Cenacolo</strong> (Assisi) for the entire weekend (May 22–24). Shuttle service will run between Hotel Cenacolo and Castello Petrata for all wedding celebrations!",
        he: "אירוח האורחים מוסדר במלון <strong>Hotel Cenacolo</strong> (אסיסי) לכל סוף השבוע (22–24 במאי). שאטלים מאורגנים יפעלו בין המלון לקסטלו פטרטה לכל אירועי החתונה!",
      },
    },
    castle: {
      title: {
        ru: "Castello Petrata (Свадебное торжество)",
        en: "Castello Petrata (Wedding Venue)",
        he: "Castello Petrata (מקום החתונה)",
      },
      address: {
        ru: "Località Petrata 22, 06081 Assisi (PG), Италия",
        en: "Località Petrata 22, 06081 Assisi (PG), Italy",
        he: "Località Petrata 22, 06081 Assisi (PG), איטליה",
      },
      websiteUrl: "https://castellopetrata.it/",
      directionsUrl: "https://maps.google.com/?q=Castello+Petrata+Localita+Petrata+22+06081+Assisi+PG+Italy",
      websiteLabel: { ru: "Сайт замка", en: "Castle Website", he: "אתר הטירה" },
      directionsLabel: { ru: "Маршрут к замку", en: "Directions to Castle", he: "הוראות הגעה לטירה" },
    },
    hotel: {
      title: {
        ru: "Hotel Cenacolo (Отель для гостей)",
        en: "Hotel Cenacolo (Guest Hotel)",
        he: "Hotel Cenacolo (מלון האורחים)",
      },
      address: {
        ru: "Viale Patrono d'Italia 70, 06081 Santa Maria degli Angeli, Assisi (PG), Италия",
        en: "Viale Patrono d'Italia 70, 06081 Santa Maria degli Angeli, Assisi (PG), Italy",
        he: "Viale Patrono d'Italia 70, 06081 Santa Maria degli Angeli, Assisi (PG), איטליה",
      },
      note: {
        ru: "Заезд: суббота 22 мая с 14:00 · Выезд: понедельник 24 мая до 10:00. Трансфер в замок и обратно включен!",
        en: "Check-in: Saturday May 22 from 14:00 · Check-out: Monday May 24 by 10:00. Shuttles to/from castle included!",
        he: "צ'ק-אין: שבת 22 במאי מ-14:00 · צ'ק-אאוט: שני 24 במאי עד 10:00. שאטלים לטירה ובחזרה כלולים!",
      },
      websiteUrl: "https://www.hotelcenacolo.com/",
      directionsUrl: "https://maps.google.com/?q=Hotel+Cenacolo+Viale+Patrono+d%27Italia+70+Assisi",
      websiteLabel: { ru: "Сайт отеля", en: "Hotel Website", he: "אתר המלון" },
      directionsLabel: { ru: "Маршрут к отелю", en: "Directions to Hotel", he: "הוראות הגעה למלון" },
    },
    mapsEmbedUrl: "https://maps.google.com/maps?q=Castello+Petrata,+Localita+Petrata+22,+06081+Assisi+PG,+Italy&output=embed&z=14",
    photo: "images/venue_wedding.jpg",
  },

  /* ── Travel / Getting There ─────────────────────────────── */
  travel: {
    sectionTitle: { ru: "Как добраться", en: "Getting There", he: "איך להגיע" },
    intro: {
      ru: "Главный рекомендуемый маршрут: перелет в Рим (аэропорт Fiumicino – FCO), далее поезд до станции Assisi и короткая поездка на такси до отеля Hotel Cenacolo, либо аренда автомобиля в Риме или Ассизи.",
      en: "Primary recommended route: flight into Rome Fiumicino Airport (FCO), followed by a train to Assisi station and a short taxi to Hotel Cenacolo, or renting a car at Rome FCO or Assisi.",
      he: "המסלול המומלץ ביותר: טיסה לנמל התעופה רומא פיומיצ'ינו (FCO), משם רכבת לתחנת אסיסי ונסיעת מונית קצרה למלון Hotel Cenacolo, או השכרת רכב ברומא או באסיסי.",
    },
    airports: [
      {
        code: "FCO",
        badge: "green",
        name: {
          ru: "Рим Фьюмичино (FCO) – Единственный рекомендуемый аэропорт",
          en: "Rome Fiumicino (FCO) – Recommended Flight Option",
          he: "רומא פיומיצ'ינו (FCO) – נמל התעופה המומלץ בלבד",
        },
        desc: {
          ru: "Главный международный аэропорт с прямыми рейсами со всего мира. Из FCO: экспресс Leonardo Express до центрального вокзала Roma Termini (32 мин), откуда отправляются поезда Trenitalia прямо до станции Assisi. Либо аренда авто прямо в терминале аэропорта.",
          en: "The primary international hub with direct worldwide flights. From FCO: take the Leonardo Express train to Roma Termini (32 min), where frequent trains depart directly to Assisi station. Alternatively, rent a car directly at the airport.",
          he: "נמל התעופה הבינלאומי הראשי עם טיסות ישירות מכל העולם. מ-FCO: רכבת לאונרדו אקספרס לתחנת רומא טרמיני (32 דק'), ממנה יוצאות רכבות ישירות לתחנת אסיסי. לחלופין, השכרת רכב ישירות בנמל התעופה.",
        },
        url: "https://www.adr.it/fiumicino",
      },
    ],
    trainSection: {
      title: { ru: "🚆 На поезде", en: "🚆 Traveling by Train", he: "🚆 נסיעה ברכבת" },
      intro: {
        ru: "До места можно добраться от железнодорожных вокзалов Перуджи и Ассизи.",
        en: "The venue is accessible from Perugia and Assisi railway stations.",
        he: "המקום נגיש מתחנות הרכבת של פרוג'ה ואסיסי.",
      },
      routes: [
        {
          from: { ru: "Из Рима", en: "From Rome", he: "מרומא" },
          desc: {
            ru: "Поезд до станции Perugia или Assisi, затем на такси (~20 мин) или свадебном шаттле до места проведения.",
            en: "Take a train to Perugia or Assisi, then continue by taxi (~20 min) or our wedding shuttle to the venue.",
            he: "קחו רכבת לפרוג'ה או אסיסי, ואז המשיכו במונית (~20 דק') או בשאטל החתונה שלנו למקום.",
          },
        },
      ],
      apps: [
        {
          name: "Trainline",
          url: "https://www.thetrainline.com/",
          desc: {
            ru: "Поиск и бронирование билетов всех перевозчиков",
            en: "Search & book train tickets across operators",
            he: "חפשו והזמינו כרטיסי רכבת אצל כל המפעילים",
          },
        },
        {
          name: "Trenitalia",
          url: "https://www.trenitalia.com/en.html",
          desc: {
            ru: "Официальное приложение итальянских железных дорог",
            en: "Official Italian railway app",
            he: "האפליקציה הרשמית של רכבות איטליה",
          },
        },
      ],
    },
    coachSection: {
      title: { ru: "🚌 На автобусе", en: "🚌 Traveling by Bus", he: "🚌 נסיעה באוטובוס" },
      intro: {
        ru: "Несколько автобусных компаний связывают Рим и Флоренцию с Перуджей и Ассизи.",
        en: "Several bus companies connect Rome and Florence to Perugia and Assisi.",
        he: "מספר חברות אוטובוס מחברות את רומא ופירנצה לפרוג'ה ואסיסי.",
      },
      routeTitle: {
        ru: "Рекомендуемый маршрут из Рима Фьюмичино (FCO)",
        en: "Suggested route from Rome Fiumicino (FCO)",
        he: "מסלול מומלץ מרומא פיומיצ'ינו (FCO)",
      },
      steps: [
        {
          ru: "Прибытие в аэропорт Рим Фьюмичино (FCO).",
          en: "Arrive at Rome Fiumicino Airport (FCO).",
          he: "הגעה לנמל תעופה רומא פיומיצ'ינו (FCO).",
        },
        {
          ru: "Поезд Leonardo Express или региональный поезд до Roma Termini (или Roma Tiburtina).",
          en: "Take the Leonardo Express or regional train to Rome Termini (or Rome Tiburtina).",
          he: "קחו את לאונרדו אקספרס או רכבת אזורית לרומא טרמיני (או רומא טיבורטינה).",
        },
        {
          ru: "С вокзала Roma Termini или Tiburtina — прямой автобус до Перуджи или Ассизи.",
          en: "From Rome Termini or Tiburtina, take a direct bus to Perugia or Assisi.",
          he: "מרומא טרמיני או טיבורטינה, קחו אוטובוס ישיר לפרוג'ה או אסיסי.",
        },
        {
          ru: "Из Перуджи или Ассизи — местное такси или свадебный шаттл.",
          en: "From Perugia or Assisi, take a local taxi or our wedding shuttle.",
          he: "מפרוג'ה או אסיסי, קחו מונית מקומית או את שאטל החתונה שלנו.",
        },
      ],
      companies: [
        { name: "MarinoBus", url: "https://www.marinobus.it/en/" },
        { name: "Itabus",    url: "https://www.itabus.it/en" },
        { name: "FlixBus",   url: "https://www.flixbus.it/" },
        { name: "Sulga",     url: "https://www.sulga.eu/en/" },
      ],
    },
    carSection: {
      title: { ru: "🚗 Аренда автомобиля", en: "🚗 Rental Cars", he: "🚗 השכרת רכב" },
      intro: {
        ru: "Если вы хотите исследовать Умбрию с полной свободой передвижения, аренда автомобиля — отличный вариант. Следующие компании работают в крупнейших аэропортах Италии, включая Рим, Флоренцию и Перуджу.",
        en: "If you'd like the flexibility to explore Umbria, renting a car is a great option. These companies operate at major Italian airports including Rome, Florence and Perugia.",
        he: "אם תרצו גמישות לחקור את אומבריה, השכרת רכב היא אפשרות נהדרת. חברות אלה פועלות בנמלי התעופה הגדולים באיטליה, כולל רומא, פירנצה ופרוג'ה.",
      },
      companies: [
        { name: "Hertz",      url: "https://www.hertz.it/rentacar/reservation/" },
        { name: "Avis",       url: "https://www.avis.it/en/home" },
        { name: "Europcar",   url: "https://www.europcar.com/en-it" },
        { name: "Sixt",       url: "https://www.sixt.it/" },
        { name: "Budget",     url: "https://www.budget.it/" },
        { name: "Enterprise", url: "https://www.enterprise.it/en/home.html" },
      ],
    },
    ztlSection: {
      title: {
        ru: "🚗 Остерегайтесь знаков ZTL",
        en: "🚗 Look out for ZTL signs",
        he: "🚗 שימו לב לשלטי ZTL",
      },
      paragraphs: [
        {
          ru: "При въезде на автомобиле в исторические центры итальянских городов обращайте внимание на знаки «ZTL – Zona a Traffico Limitato». Они обозначают зону ограниченного движения, обычно контролируемую камерами, куда въезд разрешен только авторизованному транспорту в указанные часы.",
          en: "When driving into Italian historic towns, look for signs marked “ZTL – Zona a Traffico Limitato”. They mark a restricted traffic area, usually monitored by cameras, where only authorised vehicles may enter during the hours shown.",
          he: "בנסיעה ברכב לתוך מרכזי ערים היסטוריות באיטליה, חפשו שלטים המסומנים ב-“ZTL – Zona a Traffico Limitato”. אלו אזורי תנועה מוגבלת, המפוקחים לרוב באמצעות מצלמות, ואשר הכניסה אליהם מותרת לרכבים מורשים בלבד בשעות המצוינות.",
        },
        {
          ru: "Если на световом табло горит «ZTL ATTIVA», въезжать без специального разрешения строго запрещено — въезд в активную зону ZTL влечет за собой штраф. Правила различаются в зависимости от города, дня и времени, поэтому всегда проверяйте знаки перед въездом.",
          en: "If the panel says “ZTL ATTIVA”, do not drive in unless your vehicle is authorised, as entering an active ZTL results in a fine. Rules vary by town, day and time, so always check the signs before entering.",
          he: "אם הלוח האלקטרוני מציג “ZTL ATTIVA”, אין להיכנס לאזור אלא אם רכבכם מורשה לכך — כניסה ל-ZTL פעיל גוררת קנס. הכללים משתנים לפי עיר, יום ושעה, לכן תמיד בדקו את השילוט לפני הכניסה.",
        },
      ],
      tip: {
        ru: "💡 Совет: при посещении исторических городов оставляйте машину на обозначенных парковках за пределами зоны ZTL и прогуливайтесь в центр пешком.",
        en: "💡 Tip: when visiting historic towns, leave your car in a designated car park outside the ZTL and walk into the centre.",
        he: "💡 טיפ: בעת ביקור בעיירות היסטוריות, השאירו את הרכב בחניון מוסדר מחוץ לאזור ה-ZTL והיכנסו למרכז ברגל.",
      },
      image: "images/ztl_sign.png",
      caption: {
        ru: "Типичный знак въезда в зону ZTL",
        en: "A typical ZTL entrance sign",
        he: "שלט כניסה טיפוסי לאזור ZTL",
      },
    },
    shuttleSection: {
      title: {
        ru: "🚌 Свадебные шаттлы",
        en: "🚌 There will be shuttles",
        he: "🚌 יהיו שאטלים",
      },
      text: {
        ru: "Для гостей будут организованы свадебные шаттлы из Ассизи / Перуджи до места проведения и обратно. Вы можете указать ваши детали и пожелания непосредственно в форме RSVP.",
        en: "There will be shuttles organized from Assisi / Perugia to the venue and back. You can indicate your preferences directly in the RSVP form.",
        he: "יהיו שאטלים מאורגנים מאסיסי / פרוג'ה למקום האירוע ובחזרה. תוכלו לציין את העדפותיכם ישירות בטופס ה-RSVP.",
      },
    },
    appsSection: {
      title: { ru: "📱 Полезные приложения и сайты", en: "📱 Helpful Apps & Websites", he: "📱 אפליקציות ואתרים שימושיים" },
      apps: [
        { emoji: "🔍", name: "Omio",        url: "https://www.omio.com/",                  desc: { ru: "Поиск поездов и автобусов (лучше заказывать на оф. сайте)", en: "Search trains & buses (better to order from official site)", he: "חיפוש רכבות ואוטובוסים (עדיף להזמין באתר הרשמי)" } },
        { emoji: "🚆", name: "Trainline",   url: "https://www.thetrainline.com/",          desc: { ru: "Поиск и бронирование поездов всех операторов", en: "Search & book trains across all operators", he: "חיפוש והזמנת רכבות אצל כל המפעילים" } },
        { emoji: "🚆", name: "Trenitalia",  url: "https://www.trenitalia.com/en.html",     desc: { ru: "Официальное приложение итальянских поездов", en: "Official Italian railway network", he: "רשת הרכבות האיטלקית הרשמית" } },
        { emoji: "🚌", name: "FlixBus",     url: "https://www.flixbus.it/",               desc: { ru: "Бронирование междугородних автобусов", en: "Long-distance bus booking", he: "הזמנת אוטובוסים לטווח ארוך" } },
        { emoji: "🗺️", name: "Google Maps", url: "https://maps.google.com",               desc: { ru: "Маршруты и расписание транспорта онлайн", en: "Plan routes and check live transit", he: "תכנון מסלולים ובדיקת תחבורה ציבורית בזמן אמת" } },
        { emoji: "🚍", name: "Moovit",      url: "https://moovitapp.com/",                desc: { ru: "Помощник по местному общественному транспорту", en: "Local public transportation helper", he: "עזרה לתחבורה ציבורית מקומית" } },
      ],
    },
    contactNote: {
      ru: "Если у вас есть любые вопросы по маршруту до места проведения — свяжитесь с нами, мы с радостью поможем!",
      en: "If you have any questions about getting to the venue, feel free to contact us — we'll be happy to help!",
      he: "לכל שאלה על הגעה למקום, אל תהססו לפנות אלינו — נשמח לעזור!",
    },
  },


  /* ── Gifts ──────────────────────────────────────────────── */
  gifts: {
    sectionTitle: { ru: "Подарки", en: "A Little Gift", he: "מתנה" },
    detailsToggle: { ru: "Подробнее", en: "For more details", he: "לפרטים נוספים" },
    intro: {
      ru: "Ваше присутствие на нашей свадьбе — самый главный и ценный подарок для нас! Если вы захотите поздравить нас подарком, вы можете воспользоваться реквизитами ниже ❤️",
      en: "Your presence at our wedding is the greatest gift of all. If you would like to honor us with a gift toward our future together, details are below ❤️",
      he: "נוכחותכם ביום המיוחד שלנו היא המתנה הגדולה והיקרה מכל. אם תרצו להעניק לנו מתנה לתחילת דרכנו המשותפת, הפרטים מופיעים להלן ❤️",
    },
    options: [
      {
        icon:  "🏦",
        title: { ru: "Банковский перевод", en: "Bank Transfer", he: "העברה בנקאית" },
        text:  {
          ru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          he: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית.",
        },
        details: [
          {
            label: { ru: "Получатель", en: "Recipient", he: "מוטב" },
            value: {
              ru: "Рон и Дана [Заполнитель: имя владельца счета]",
              en: "Ron & Dana [Placeholder: Account Holder Name]",
              he: "רון ודנה [מקום למילוי: שם בעל החשבון]",
            },
          },
          {
            label: "IBAN",
            value: {
              ru: "[Заполнитель: номер счета / IBAN]",
              en: "[Placeholder: IBAN / Account Number]",
              he: "[מקום למילוי: מספר חשבון / IBAN]",
            },
          },
          {
            label: "SWIFT / BIC",
            value: {
              ru: "[Заполнитель: код SWIFT / BIC]",
              en: "[Placeholder: SWIFT / BIC Code]",
              he: "[מקום למילוי: קוד SWIFT / BIC]",
            },
          },
          {
            label: { ru: "Банк", en: "Bank Name", he: "שם הבנק" },
            value: {
              ru: "[Заполнитель: название банка и отделение]",
              en: "[Placeholder: Bank Name & Branch]",
              he: "[מקום למילוי: שם הבנק והסניף]",
            },
          },
        ],
        url:   "",
        label: { ru: "", en: "", he: "" },
      },
      {
        icon:  "📱",
        title: { ru: "Bit / Paybox", en: "Bit / Paybox", he: "Bit או Paybox" },
        text:  {
          ru: "Перевод через Bit или Paybox: [Номер телефона: 05X-XXXXXXX]",
          en: "Transfer via Bit or Paybox: [Phone number: 05X-XXXXXXX]",
          he: "העברה דרך Bit או Paybox: [מספר טלפון: 05X-XXXXXXX]",
        },
        url:   "",
        label: { ru: "", en: "", he: "" },
      },
    ],
  },

  /* ── RSVP ───────────────────────────────────────────────── */
  rsvp: {
    sectionTitle: { ru: "Подтверждение присутствия", en: "RSVP", he: "אישור הגעה" },
    intro: {
      ru: "Мы с нетерпением ждем возможности отпраздновать этот особенный день вместе с вами! Пожалуйста, заполните форму ниже, чтобы подтвердить ваше участие.",
      en: "We cannot wait to celebrate this magical weekend with you! Please complete the form below to let us know if you can join us.",
      he: "אנחנו מתרגשים ומצפים לחגוג את סוף השבוע המיוחד הזה יחד איתכם! אנא מלאו את הטופס להלן כדי לאשר את הגעתכם.",
    },
    formUrls: {
      ru: "https://docs.google.com/forms/d/e/1FAIpQLSeN_XzomUuujakBnHD3ca6DrNtGBi2zTyas3zG6RTqucaCTrw/viewform?embedded=true",
      en: "https://docs.google.com/forms/d/e/1FAIpQLSeN_XzomUuujakBnHD3ca6DrNtGBi2zTyas3zG6RTqucaCTrw/viewform?embedded=true",
      he: "https://docs.google.com/forms/d/e/1FAIpQLSeN_XzomUuujakBnHD3ca6DrNtGBi2zTyas3zG6RTqucaCTrw/viewform?embedded=true",
    },
    formHeight: 1600,
    loadingLabel: { ru: "Загрузка формы…", en: "Loading form…", he: "טוען טופס…" },
    calendar: {
      label: { ru: "Добавить в Google Календарь", en: "Add to Google Calendar", he: "הוסף ליומן Google" },
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM5 7V6h14v1H5zm2 4h10v2H7zm0 4h7v2H7z"/></svg>`,
      url: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ron+%26+Dana%27s+Wedding&dates=20270522T120000Z%2F20270524T080000Z&details=Ron+%26+Dana%27s+Wedding%21%0A%0A%E2%80%A2+Guest+Hotel%3A+Hotel+Cenacolo%2C+Assisi+%28Check-in+Saturday+May+22+at+14%3A00%2C+Check-out+Monday+May+24+at+10%3A00%29%0A%E2%80%A2+Wedding+Venue%3A+Castello+Petrata%2C+Assisi%0A%E2%80%A2+Wedding+Day%3A+Sunday+May+23+%28Shuttle+16%3A30+%C2%B7+Gathering+17%3A00+%C2%B7+Ceremony+17%3A30+%C2%B7+Aperitivo+18%3A00+%C2%B7+Dinner+20%3A00+%C2%B7+Party+22%3A00%29&location=Castello+Petrata%2C+Localit%C3%A0+Petrata+22%2C+06081+Assisi+PG%2C+Italy&ctz=Europe/Rome",
    },
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    text: {
      ru: "С любовью, Рон и Дана · 23 мая 2027",
      en: "With love, Ron & Dana · May 23, 2027",
      he: "באהבה, רון ודנה · 23 במאי 2027",
    },
  },

};
