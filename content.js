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
    backgroundImage:       "images/hero_bg.webp",
    backgroundImageMobile: "images/hero_bg.webp",
    overlayOpacity:        0.45,
    venueLabel: {
      ru: "Castello Petrata · Ассизи, Умбрия, Италия",
      en: "Castello Petrata · Assisi, Umbria, Italy",
      he: "קסטלו פטרטה · אסיסי, אומבריה, איטליה",
    },
  },

  /* ── Nav labels ─────────────────────────────────────────── */
  nav: {
    details:    { ru: "Выходные",      en: "The weekend", he: "פרטים" },
    gallery:    { ru: "Фото",          en: "Photos",      he: "תמונות" },
    schedule:   { ru: "Программа",     en: "Schedule",    he: "לוח זמנים" },
    attire:     { ru: "Дресс-код",     en: "Dress code",  he: "קוד לבוש" },
    venue:      { ru: "Место",         en: "Venue",       he: "מקום האירוע" },
    travel:     { ru: "Как добраться", en: "Travel",      he: "הגעה" },
    rsvp:       { ru: "Подтвердить",   en: "RSVP",        he: "אישור הגעה" },
    gifts:      { ru: "Подарки",       en: "A Little Gift", he: "מתנה" },
  },

  /* ── Photo Gallery / Carousel ────────────────────────────── */
  gallery: {
    sectionTitle: { ru: "Рон и Дана", en: "Moments Together", he: "רגעים שלנו" },
    subtitle: {
      ru: "Наши любимые моменты, и впереди еще больше…",
      en: "Our favorite moments with more to come…",
      he: "הרגעים האהובים עלינו עד כה",
    },
    images: [
      { src: "images/carousel_1.webp", alt: { ru: "Рон и Дана", en: "Ron & Dana", he: "רון ודנה" } },
      { src: "images/carousel_2.webp", alt: { ru: "Рон и Дана", en: "Ron & Dana", he: "רון ודנה" } },
      { src: "images/carousel_3.webp", alt: { ru: "Рон и Дана", en: "Ron & Dana", he: "רון ודנה" } },
      { src: "images/carousel_4.webp", alt: { ru: "Рон и Дана", en: "Ron & Dana", he: "רון ודנה" } },
      { src: "images/carousel_5.webp", alt: { ru: "Рон и Дана", en: "Ron & Dana", he: "רון ודנה" } },
      { src: "images/carousel_6.webp", alt: { ru: "Рон и Дана", en: "Ron & Dana", he: "רון ודנה" } },
      { src: "images/carousel_7.webp", alt: { ru: "Рон и Дана", en: "Ron & Dana", he: "רון ודנה" } },
    ],
  },

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
            "Welcome party в <span class=\"detail-em\">18:00</span>",
            "Ужин-буфет и напитки",
          ],
          en: [
            "Check-in at Hotel Cenacolo (Assisi) from <span class=\"detail-em\">2:00 PM (14:00)</span>",
            "Welcome party 6:00 PM (18:00)",
            "Buffet Dinner & Drinks",
          ],
          he: [
            "צ'ק-אין במלון Hotel Cenacolo (אסיסי) החל מ-<span class=\"detail-em\">14:00</span>",
            "קבלת חדרים והתמקמות האורחים במלון",
            "Welcome Party - בופה פיצות ופסטות ואלכוהול",
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
            "Завтрак в отеле Hotel Cenacolo (включен) (<span class=\"detail-em\">07:30–10:00</span>)",
            "<span class=\"detail-em\">15:30</span> – Организованный трансфер (шаттл) из Hotel Cenacolo в Castello Petrata",
            "16:00 Сбор гостей · 16:30 Церемония · 17:00 Аперитив · 19:00 Ужин · 21:00 Вечеринка!",
            "Организованные обратные шаттлы в отель после завершения праздника",
          ],
          en: [
            "Breakfast at Hotel Cenacolo  (included) (<span class=\"detail-em\">7:30–10:00 AM</span>)",
            "<span class=\"detail-em\">3:30 PM (15:30)</span> – Shuttle service from Hotel Cenacolo to Castello Petrata",
            "4:00 PM Gathering · 4:30 PM Ceremony · 5:00 PM Aperitivo · 7:00 PM Dinner · 9:00 PM Party!",
            "Return shuttles to Hotel Cenacolo provided throughout the night",
          ],
          he: [
            "ארוחת בוקר במלון (כלולה) Hotel Cenacolo (<span class=\"detail-em\">07:30–10:00</span>)",
            "<span class=\"detail-em\">15:30</span> – הסעה מהמלון לחתונה בקסטלו",
            "16:00 התכנסות · 16:30 טקס חופה · 17:00 אפריטיבו · 19:00 ארוחת ערב · 21:00 מסיבה",
            "שאטלים חזרה למלון ייצאו לאורך כל הלילה",
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
            "Завтрак в отеле Hotel Cenacolo (включен) (<span class=\"detail-em\">07:30–10:00</span>)",
            "Выезд из номеров в <span class=\"detail-em\">10:00</span>",
          ],
          en: [
            "Breakfast at Hotel Cenacolo  (included) (<span class=\"detail-em\">7:30–10:00 AM</span>)",
            "Hotel check-out at <span class=\"detail-em\">10:00 AM (10:00)</span>",
          ],
          he: [
            "ארוחת בוקר במלון (כלולה) Hotel Cenacolo (<span class=\"detail-em\">07:30–10:00</span>)",
            "צ'ק-אאוט מחדרי המלון בשעה <span class=\"detail-em\">10:00</span>",
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
        time:  "15:30",
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
        time:  "16:00",
        label: {
          ru: "Сбор гостей и напитки",
          en: "Gathering & Welcome Drinks",
          he: "התכנסות וקבלת פנים",
        },
        note:  {
          ru: "Приветственные напитки на панорамной террасе Castello Petrata",
          en: "Welcome drinks on the panoramic terrace at Castello Petrata",
          he: "שתייה על המרפסת לצד הנוף בקסטלו פטרטה",
        },
      },
      {
        time:  "16:30",
        label: {
          ru: "Свадебная церемония",
          en: "Wedding Ceremony",
          he: "\"חופה\"",
        },
        note:  {
          ru: "В саду замка Castello Petrata",
          en: "In the gardens of Castello Petrata",
          he: "בגני הטירה של קסטלו פטרטה",
        },
      },
      {
        time:  "17:00",
        label: {
          ru: "Аперитив и коктейли",
          en: "Aperitivo & Cocktails",
          he: "אפריטיבו וקוקטיילים",
        },
        note:  {
          ru: "Коктейли и итальянский буфет",
          en: "Cocktails and Italian buffet",
          he: "קוקטיילים ובופה איטלקי",
        },
      },
      {
        time:  "19:00",
        label: {
          ru: "Ужин",
          en: "Dinner",
          he: "ארוחת ערב",
        },
        note:  {
          ru: "Ужин из трех блюд: ризотто, паста, основное блюдо",
          en: "Three course dinner: Risotto, Pasta, Main course",
          he: "ארוחת שלוש מנות: ראשונה-ריזוטו, שנייה-פסטה, מנה עיקרית",
        },
      },
      {
        time:  "21:00",
        label: {
          ru: "Вечеринка",
          en: "Party & Dancing!",
          he: "מסיבה",
        },
        note:  {
          ru: "Открытый бар и танцы · Организованные шаттлы обратно в Hotel Cenacolo",
          en: "Open bar & dancing · Return shuttles to Hotel Cenacolo throughout the night",
          he: "בר פתוח וריקודים · שאטלים חזרה למלון Hotel Cenacolo לאורך הלילה",
        },
      },
    ],
  },

  /* ── Attire & Dress Code (Formal Garden Party) ──────────── */
  attire: {
    sectionTitle: {
      ru: "Дресс-код",
      en: "Attire & Dress Code",
      he: "קוד לבוש",
    },
    vibe: {
      ru: "Formal Garden Party",
      en: "Formal Garden Party",
      he: "Formal garden party",
    },
    subtitle: {
      ru: "Наше свадебное торжество пройдет под открытым небом в окружении холмов Умбрии и оливковых рощ замка Castello Petrata.",
      en: "Our wedding celebration takes place outdoors surrounded by the rolling Umbrian hills and olive groves of Castello Petrata.",
      he: "החתונה שלנו תתקיים תחת כיפת השמיים בין גבעות אומבריה ומטעי הזיתים של קסטלו פטרטה.",
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
            ru: "Натуральные льняные и хлопковые ткани идеально подойдут для теплого итальянского вечера. (Для мужчин нет ограничений по цветовой палитре)",
            en: "Linen, cotton, and breathable fabrics are encouraged for a comfortable Italian evening.",
            he: "בדי פשתן וכותנה קלילים מושלמים לערב איטלקי נעים וחגיגי. (אין חובת צבעי פסטל)",
          },
          {
            ru: "Галстук не обязателен — непринужденная торжественность приветствуется.",
            en: "Ties are not mandatory — effortless formal style is welcomed. (no color code for men)",
            he: "עניבות אינן חובה — סגנון חגיגי וקליל מבורך.",
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
      ru: "Мягкие пастельные тона",
      en: "Soft pastels",
      he: "פסטלים רכים",
    },
    swatches: [
      {
        name: { ru: "Светло-голубой", en: "Sky Blue", he: "תכלת בהיר" },
        hex: "#BBD7EC",
      },
      {
        name: { ru: "Светло-розовый", en: "Pale Blush", he: "ורוד בהיר" },
        hex: "#F7D2D6",
      },
      {
        name: { ru: "Светло-желтый", en: "Butter Yellow", he: "צהוב בהיר" },
        hex: "#FBF0B9",
      },
      {
        name: { ru: "Персиковый", en: "Peach", he: "אפרסק" },
        hex: "#FAD4B5",
      },
      {
        name: { ru: "Светло-зеленый", en: "Pale Pistachio", he: "ירוק בהיר" },
        hex: "#C8DBBC",
      },
      {
        name: { ru: "Сиреневый", en: "Purple", he: "סגול" },
        hex: "#D8C2E8",
      },
    ],
    reservedTitle: {
      ru: "Зарезервированные цвета",
      en: "Kindly Reserved Colors",
      he: "צבעים שמורים",
    },
    reservedSubtitle: {
      ru: "Пожалуйста, воздержитесь от следующих цветов:",
      en: "Please kindly refrain from wearing these colors:",
      he: "אנא הימנעו מללבוש את הצבעים הבאים:",
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
          ru: "Только для невесты",
          en: "Reserved exclusively for the Bride",
          he: "שמור לכלה",
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
          ru: "Только для жениха",
          en: "Reserved for the Groom's Tuxedo",
          he: "שמור לחתן",
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
      ru: "Свадебная церемония, ужин и вечеринка пройдут в исторической крепости XIV века <strong>Castello Petrata</strong> в Ассизи с захватывающим видом на холмы Умбрии.<br><br>Все гости размещаются в отеле <strong>Hotel Cenacolo</strong> в Ассизи.",
      en: "Our wedding ceremony, dinner, and party will take place at the historic 14th-century fortress <strong>Castello Petrata</strong> in Assisi, overlooking the stunning Umbrian countryside.<br><br>All attending guests will be hosted at <strong>Hotel Cenacolo</strong> in Assisi.",
      he: "טקס החופה, ארוחת הערב והמסיבה יתקיימו במבצר ההיסטורי מהמאה ה-14 <strong>Castello Petrata</strong> שבאסיסי, המשקיף על נוף עוצר נשימה של עמק אומבריה.<br><br>כל אורחינו היקרים יתארחו במלון <strong>Hotel Cenacolo</strong> שבאסיסי.",
    },
    accommodationCallout: {
      icon: "🚌",
      text: {
        ru: "Проживание в отеле <strong>Hotel Cenacolo</strong> (Ассизи) включено для всех гостей на все выходные (22–24 мая). В день свадьбы между отелем Cenacolo и замком Castello Petrata будут курсировать шаттлы!",
        en: "Accommodation is included for all guests at <strong>Hotel Cenacolo</strong> (Assisi) for the entire weekend (May 22–24). Shuttle service will run between Hotel Cenacolo and Castello Petrata for the wedding celebration!",
        he: "האירוח במלון כלול לכל האורחים לכל סוף השבוע (22-24 במאי) שאטלים יפעלו בין המלון לקסטלו פטרטה ביום האירוע!",
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
        ru: "Заезд: суббота 22 мая с 14:00 · Выезд: понедельник 24 мая до 10:00. Городской налог оплачивается гостями самостоятельно — 3 евро с человека за ночь!",
        en: "Check-in: Saturday May 22 from 14:00 · Check-out: Monday May 24 by 10:00. city tax must be paid by the guests - 3 euro per person per night!",
        he: "צ'ק-אין: שבת 22 במאי מ-14:00 · צ'ק-אאוט: שני 24 במאי עד 10:00. על האורחים לשלם את מס העיר בסך שלושה יורו לאדם לכל לילה!",
      },
      websiteUrl: "https://www.hotelcenacolo.com/",
      directionsUrl: "https://maps.google.com/?q=Hotel+Cenacolo+Viale+Patrono+d%27Italia+70+Assisi",
      websiteLabel: { ru: "Сайт отеля", en: "Hotel Website", he: "אתר המלון" },
      directionsLabel: { ru: "Маршрут к отелю", en: "Directions to Hotel", he: "הוראות הגעה למלון" },
    },
    mapsEmbedUrl: "https://maps.google.com/maps?q=Castello+Petrata,+Localita+Petrata+22,+06081+Assisi+PG,+Italy&output=embed&z=14",
    photo: "images/venue_wedding.webp",
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
        ru: "До отеля легко добраться от железнодорожного вокзала Ассизи.",
        en: "The Hotel is accessible from Assisi railway station.",
        he: "המקום נגיש מתחנת הרכבת של אסיסי.",
      },
      routes: [
        {
          from: { ru: "Из Рима", en: "From Rome", he: "מרומא" },
          desc: {
            ru: "Поезд до Ассизи, далее на такси прямо до отеля.",
            en: "Take a train to Assisi, then continue by taxi directly to the hotel",
            he: "קחו רכבת לאסיסי, ואז המשיכו במונית ישירות למלון",
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
        ru: "Несколько автобусных компаний связывают Рим и Ассизи.",
        en: "Several bus companies connect Rome to Assisi.",
        he: "ישנו אוטובוס ישיר לאסיסי מהשדה עם חברת Sulga ומשם קחו מונית ישירות למלון",
      },
      routeTitle: {
        ru: "Рекомендуемый маршрут из Рима Фьюмичино (FCO)",
        en: "Suggested route from Rome Fiumicino (FCO)",
        he: "",
      },
      steps: [
        {
          ru: "Прибытие в аэропорт Рим Фьюмичино (FCO).",
          en: "Arrive at Rome Fiumicino Airport (FCO).",
          he: "",
        },
        {
          ru: "Рим Фьюмичино (FCO) — прямой автобус до Ассизи (Sulga), далее на такси напрямую до отеля.",
          en: "Rome Fiumicino (FCO) take a direct bus to assisi (Sulga), then continue by taxi directly to the hotel",
          he: "",
        },
      ],
      companies: [
        { name: "Sulga", url: "https://www.sulga.eu/en/" },
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
      image: "images/ztl_sign.webp",
      caption: {
        ru: "Типичный знак въезда в зону ZTL",
        en: "A typical ZTL entrance sign",
        he: "שלט כניסה טיפוסי לאזור ZTL",
      },
    },
    appsSection: {
      title: { ru: "📱 Полезные приложения и сайты", en: "📱 Helpful Apps & Websites", he: "📱 אפליקציות ואתרים שימושיים" },
      apps: [
        { emoji: "🔍", name: "Omio",        url: "https://www.omio.com/",                  desc: { ru: "Поиск поездов и автобусов (лучше заказывать на оф. сайте)", en: "Search trains & buses (better to order from official site)", he: "חיפוש רכבות ואוטובוסים (עדיף להזמין באתר הרשמי)" } },
        { emoji: "🚆", name: "Trainline",   url: "https://www.thetrainline.com/",          desc: { ru: "Поиск и бронирование поездов всех операторов", en: "Search & book trains across all operators", he: "חיפוש והזמנת רכבות אצל כל המפעילים" } },
        { emoji: "🚆", name: "Trenitalia",  url: "https://www.trenitalia.com/en.html",     desc: { ru: "Официальное приложение итальянских поездов", en: "Official Italian railway network", he: "רשת הרכבות האיטלקית הרשמית" } },
        { emoji: "🗺️", name: "Google Maps", url: "https://maps.google.com",               desc: { ru: "Маршруты и расписание транспорта онлайн", en: "Plan routes and check live transit", he: "תכנון מסלולים ובדיקת תחבורה ציבורית בזמן אמת" } },
        { emoji: "🚍", name: "Moovit",      url: "https://moovitapp.com/",                desc: { ru: "Помощник по местному общественному транспорту", en: "Local public transportation helper", he: "עזרה לתחבורה ציבורית מקומית" } },
      ],
    },
    contactNote: {
      ru: "Если у вас есть вопросы о том, как добраться до отеля, пожалуйста, свяжитесь с нами — мы с радостью поможем!",
      en: "If you have any questions about getting to the Hotel, feel free to contact us — we'll be happy to help!",
      he: "לכל שאלה תרגישו חופשי לפנות אלינו נשמח לעזור!",
    },
  },


  /* ── Gifts ──────────────────────────────────────────────── */
  gifts: {
    sectionTitle: { ru: "Подарки", en: "A Little Gift", he: "מתנה" },
    detailsToggle: { ru: "Подробнее", en: "For more details", he: "לפרטים נוספים" },
    intro: {
      ru: "Ваше присутствие на нашей свадьбе — самый главный и ценный подарок для нас! Ваша любовь и поддержка значат для нас всё. Если вы все же захотите помочь нам построить наше общее будущее, реквизиты указаны ниже ❤️",
      en: "Your presence at our wedding is the greatest gift of all. Your love and support mean the world to us! If you wish to contribute to our future together, you can find our details below❤️",
      he: "נוכחותכם ביום המיוחד שלנו היא המתנה הגדולה והיקרה מכל. אם בכל זאת תרצו לתת לנו מתנה שתעזור לנו לבנות את עתידנו המשותף נשמח ונודה לכם מאוד. הפרטים מופיעים למטה ❤️",
    },
    options: [
      {
        icon:  "🏦",
        title: { ru: "Банковский перевод", en: "Bank Transfer", he: "העברה בנקאית" },
        text:  {
          ru: "Реквизиты для банковского перевода:",
          en: "Account details for bank transfer in NIS:",
          he: "פרטי חשבון להעברה בנקאית :",
        },
        details: [
          {
            label: { ru: "Получатель", en: "מוטב", he: "מוטב" },
            value: {
              ru: "רון יונקר",
              en: "רון יונקר",
              he: "רון יונקר",
            },
          },
          {
            label: { ru: "Банк и отделение", en: "מספר בנק", he: "בנק וסניף" },
            value: {
              ru: "Bank Yahav (04), отд. 141",
              en: "יהב 04 , סניף 141",
              he: "בנק יהב 04, סניף 141",
            },
          },
          {
            label: { ru: "Номер счета", en: "מספר חשבון", he: "מספר חשבון" },
            value: {
              ru: "140852",
              en: "140852",
              he: "140852",
            },
          },
        ],
        url:   "",
        label: { ru: "", en: "", he: "" },
      },
      {
        icon:  "📱",
        title: { ru: "Bit", en: "Bit", he: "Bit" },
        text:  {
          ru: "Перевод через Bit: 0523595288",
          en: "0523595288",
          he: "העברה בביט - 0523595288",
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
      he: "אנחנו מתרגשים ומצפים לחגוג את סוף השבוע המיוחד הזה יחד איתכם! אנא מלאו את הטופס כדי לאשר את הגעתכם.",
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
      url: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ron+%26+Dana%27s+Wedding&dates=20270522T120000Z%2F20270524T080000Z&details=Ron+%26+Dana%27s+Wedding%21%0A%0A%E2%80%A2+Guest+Hotel%3A+Hotel+Cenacolo%2C+Assisi+%28Check-in+Saturday+May+22+at+14%3A00%2C+Check-out+Monday+May+24+at+10%3A00%29%0A%E2%80%A2+Wedding+Venue%3A+Castello+Petrata%2C+Assisi%0A%E2%80%A2+Wedding+Day%3A+Sunday+May+23+%28Shuttle+15%3A30+%C2%B7+Gathering+16%3A00+%C2%B7+Ceremony+16%3A30+%C2%B7+Aperitivo+17%3A00+%C2%B7+Dinner+19%3A00+%C2%B7+Party+21%3A00%29&location=Castello+Petrata%2C+Localit%C3%A0+Petrata+22%2C+06081+Assisi+PG%2C+Italy&ctz=Europe/Rome",
    },
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    text: {
      ru: "С любовью, Рон и Дана · 23 мая 2027",
      en: "With love, Ron & Dana · May 23, 2027",
      he: "אוהבים, רון ודנה · 23 במאי 2027",
    },
  },

};
