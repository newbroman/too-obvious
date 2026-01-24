/**
 * pagan-traditions.js - Ancient Slavic/Polish Pagan Calendar Traditions
 * Based on pre-Christian festivals and seasonal celebrations
 */

const paganTraditions = {
    // Fixed dates (month-day, 0-indexed month)
    fixed: {
        // Spring Equinox (approximate)
        "2-20": {
            nameEn: "Spring Equinox (Jare Gody)",
            namePl: "Równonoc Wiosenna (Jare Gody)",
            type: "equinox",
            season: "spring"
        },
        
        // Summer Solstice - Kupala Night
        "5-21": {
            nameEn: "Kupala Night (Midsummer)",
            namePl: "Noc Kupały (Sobótka)",
            type: "solstice",
            season: "summer"
        },
        "5-22": {
            nameEn: "Kupala Night",
            namePl: "Noc Kupały",
            type: "solstice",
            season: "summer"
        },
        "5-23": {
            nameEn: "Kupala Night",
            namePl: "Noc Kupały",
            type: "solstice",
            season: "summer"
        },
        "5-24": {
            nameEn: "Kupala Night (End)",
            namePl: "Noc Kupały (Koniec)",
            type: "solstice",
            season: "summer"
        },
        
        // Autumn Equinox
        "8-22": {
            nameEn: "Autumn Equinox (Dozhinki)",
            namePl: "Równonoc Jesienna (Dożynki)",
            type: "equinox",
            season: "autumn"
        },
        
        // Winter Solstice - Koliada begins
        "11-21": {
            nameEn: "Winter Solstice (Koliada Begins)",
            namePl: "Przesilenie Zimowe (Początek Koliady)",
            type: "solstice",
            season: "winter"
        },
        "11-22": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "11-23": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "11-24": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "11-25": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "11-26": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "11-27": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "11-28": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "11-29": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "11-30": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "11-31": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "0-1": {
            nameEn: "Koliada (New Year)",
            namePl: "Koliada (Nowy Rok)",
            type: "solstice",
            season: "winter"
        },
        "0-2": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "0-3": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "0-4": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "0-5": {
            nameEn: "Koliada",
            namePl: "Koliada",
            type: "solstice",
            season: "winter"
        },
        "0-6": {
            nameEn: "Koliada (Epiphany - End)",
            namePl: "Koliada (Objawienie - Koniec)",
            type: "solstice",
            season: "winter"
        },
        
        // Dziady - Spring (moveable, but approximate dates)
        "3-1": {
            nameEn: "Spring Dziady (Forefathers' Eve)",
            namePl: "Wiosenne Dziady",
            type: "ancestors",
            season: "spring"
        },
        
        // Dziady - Autumn
        "9-31": {
            nameEn: "Autumn Dziady (Forefathers' Eve)",
            namePl: "Jesienne Dziady",
            type: "ancestors",
            season: "autumn"
        },
        "10-1": {
            nameEn: "Autumn Dziady (All Saints)",
            namePl: "Jesienne Dziady (Wszystkich Świętych)",
            type: "ancestors",
            season: "autumn"
        },
        "10-2": {
            nameEn: "Zaduszki (All Souls' Day)",
            namePl: "Zaduszki",
            type: "ancestors",
            season: "autumn"
        }
    },

    descriptions: {
        "Kupala Night (Midsummer)": {
            en: "Kupala Night (Noc Kupały/Sobótka) - Ancient summer solstice festival (June 21-24). The most magical night of the year when boundaries between worlds thin. Young couples jump over bonfires hand-in-hand to test their love and purify themselves. Girls weave flower wreaths and float them down rivers - if two wreaths stay together, that couple will marry. The legendary fern flower blooms only this night at midnight, bringing fortune to whoever finds it. Herbs gathered now have peak magical and healing potency. Ritual bathing in rivers for health and fertility. Named after Kupala, Slavic goddess of water, fertility, and purification.",
            pl: "Starożytne święto przesilenia letniego. Obchodzone przy ogniskach, skakaniu przez płomienie dla oczyszczenia, puszczaniu wianków na wodzie, zbieraniu ziół o największej mocy i kąpieli w świętych wodach. Najkrótsza noc, kiedy granice między światami się zacierają."
        },
        "Noc Kupały (Sobótka)": {
            en: "Night of Kupala - from Proto-Slavic 'kǫpati' (to bathe). Fire and water rituals honoring fertility, sun's peak power, and nature's abundance. Young people search for the mythical fern flower.",
            pl: "Noc Kupały - od prasłowiańskiego 'kǫpati' (kąpać się). Rytuały ognia i wody honorujące płodność, szczyt mocy słońca i obfitość natury. Młodzi ludzie szukają mitycznego kwiatu paproci."
        },
        "Winter Solstice (Koliada Begins)": {
            en: "Koliada (Dec 21 - Jan 6) - Winter solstice marking the sun's rebirth and victory of light over darkness. The weakened sun needs help to return, so bonfires burn throughout the 12-day Sviatki period. Groups of carolers (kolędnicy) dressed as animals, stars, and mythical creatures visit homes singing ritual songs and receiving gifts of food. Divination rituals peek into the coming year. The boundary between past and future is thinnest. Feasting honors ancestors and welcomes the new solar year. Many traditions later absorbed into Christmas celebrations.",
            pl: "Koliada oznacza przesilenie zimowe i odrodzenie słońca. 12-dniowy okres Świątek z kolędowaniem, obdarowywaniem, rytualnymi pieśniami i odpędzaniem złych duchów. Świętowanie powrotu światła po najdłuższej nocy."
        },
        "Koliada": {
            en: "Koliada - Part of the 12-day winter solstice celebration (Sviatki). Each day has special rituals. Carolers (kolędnicy) go house to house singing ritual songs that blend blessing, entertainment, and mild threat ('give us treats or we'll curse your crops!'). Special breads (kolach) are shared. Bonfires help the sun regain strength. Young people divine their marriage prospects. The name may derive from Latin 'calendae' (first day of month) or from the Slavic word for 'wheel' (solar symbol).",
            pl: "Część 12-dniowego święta przesilenia zimowego. Rytualne kolędowanie, dzielenie się specjalnym chlebem, spotkania wspólnotowe i czci powrotu słońca. Od łacińskiego 'calendae' (pierwszy dzień miesiąca)."
        },
        "Spring Equinox (Jare Gody)": {
            en: "Jare Gody (Spring Celebrations) - balance of day and night. Time for spring rituals, welcoming warmth, preparing for planting season. Ancient Slavs celebrated earth's awakening from winter sleep.",
            pl: "Jare Gody - równowaga dnia i nocy. Czas na wiosenne rytuały, witanie ciepła, przygotowania do sezonu sadzenia. Starożytni Słowianie świętowali przebudzenie ziemi ze snu zimowego."
        },
        "Autumn Equinox (Dozhinki)": {
            en: "Autumn Equinox & Harvest Festival (Sept 22). Balance returns as day equals night. Ancient Dożynki - thanksgiving for successful harvest. Last sheaf rituals: the final grain cut was woven into wreaths and kept until spring planting. Feasting honors earth's abundance before winter scarcity. Offerings to Mokosh (earth goddess). Later Christianized but harvest customs remain (Dożynki). Thanksgiving for successful harvest, last sheaf rituals, feasting, and honoring earth's abundance before winter. Balance of day and night.",
            pl: "Równonoc jesienna i święto żniw (Dożynki). Dziękczynien ie za udane żniwa, rytuały ostatniego snopa, ucztowanie i czci obfitości ziemi przed zimą. Równowaga dnia i nocy."
        },
        "Spring Dziady (Forefathers' Eve)": {
            en: "Spring ancestor veneration. 'Communion of the living with the dead' - feasting, summoning ancestors for blessings on crops and fertility. Ancestors believed to be caretakers of prosperity.",
            pl: "Wiosenne wspominanie przodków. 'Komunia żywych ze zmarłymi' - ucztowanie, wzywanie przodków o błogosławieństwo dla plonów i płodności. Przodkowie uważani za opiekunów dobrobytu."
        },
        "Autumn Dziady (Forefathers' Eve)": {
            en: "Autumn ancestor veneration. Tables set with food and drink for returning souls. Rituals led by priest-poets (Guślarz/Koźlarz) in sacred spaces. Honoring those who passed, seeking their favor.",
            pl: "Jesienne wspominanie przodków. Stoły zastawione jedzeniem i piciem dla powracających dusz. Rytuały prowadzone przez kapłanów-poetów (Guślarz/Koźlarz) w świętych miejscach. Czci zmarłych, poszukiwanie ich łaski."
        },
        "Zaduszki (All Souls' Day)": {
            en: "Christianized form of Dziady. 'Day of prayers for souls' - visiting cemeteries, lighting candles (znicze), praying for ancestors in purgatory. Ancient pagan tradition merged with Catholic observance.",
            pl: "Schrystianizowana forma Dziadów. 'Dzień modlitw za dusze' - odwiedzanie cmentarzy, zapalanie zniczy, modlitwy za przodków w czyśćcu. Starożytna tradycja pogańska połączona z katolicką obrzędowością."
        }
    },

    // Check if a date has pagan tradition
    hasPaganTradition(date) {
        const key = `${date.getMonth()}-${date.getDate()}`;
        return !!this.fixed[key];
    },

    // Get pagan tradition for a date
    getPaganTradition(date, isPolish = false) {
        const key = `${date.getMonth()}-${date.getDate()}`;
        const tradition = this.fixed[key];
        if (!tradition) return null;
        
        return {
            name: isPolish ? tradition.namePl : tradition.nameEn,
            type: tradition.type,
            season: tradition.season,
            description: this.getDescription(tradition.nameEn, isPolish)
        };
    },

    // Get description for a tradition
    getDescription(traditionName, isPolish = false) {
        const desc = this.descriptions[traditionName];
        if (!desc) return "";
        return isPolish ? desc.pl : desc.en;
    },

    // Get all traditions for a month
    getTraditionsForMonth(month) {
        const traditions = [];
        for (const [key, tradition] of Object.entries(this.fixed)) {
            const [m, d] = key.split('-').map(Number);
            if (m === month) {
                traditions.push({
                    day: d,
                    ...tradition
                });
            }
        }
        return traditions.sort((a, b) => a.day - b.day);
    },

    // Get icon for tradition type
    getIcon(type) {
        const icons = {
            'solstice': '☀️',
            'equinox': '⚖️',
            'ancestors': '🕯️',
            'harvest': '🌾'
        };
        return icons[type] || '🌿';
    },

    // Get color theme for tradition type
    getColor(type) {
        const colors = {
            'solstice': '#4caf50',      // Green
            'equinox': '#66bb6a',       // Light green
            'ancestors': '#81c784',     // Lighter green
            'harvest': '#a5d6a7'        // Pale green
        };
        return colors[type] || '#4caf50';
    }
};

// ES6 Export
export default paganTraditions;

// Named exports for convenience
export const { hasPaganTradition, getPaganTradition, getIcon, getColor, getDescription, getAllTraditionsForMonth } = paganTraditions;
