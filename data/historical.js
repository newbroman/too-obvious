/**
 * historical-events.js - Historical events database for dates before 1000 AD and medieval Poland
 * 
 * Structure:
 * - Key format: "YYYY-MM-DD" (negative years for BC)
 * - Each event has:
 *   - name (English)
 *   - namePl (Polish)
 *   - description (English)
 *   - descriptionPl (Polish)
 *   - era (ancient-rome, early-poland, medieval-poland, etc.)
 *   - importance (low, medium, high, critical)
 *   - type (legendary, historical, battle, political, religious, cultural)
 */

export const historicalEvents = {
    // ===== ANCIENT ROME (753 BC - 476 AD) =====
    
    "-753-04-21": {
        name: "Founding of Rome",
        namePl: "Założenie Rzymu",
        description: "According to legend, Romulus founded the city of Rome on the Palatine Hill",
        descriptionPl: "Według legendy, Romulus założył miasto Rzym na Wzgórzu Palatyńskim",
        era: "ancient-rome",
        importance: "critical",
        type: "legendary"
    },
    
    "-509-01-01": {
        name: "Foundation of Roman Republic",
        namePl: "Założenie Republiki Rzymskiej",
        description: "Rome transitioned from monarchy to republic after expelling the last king",
        descriptionPl: "Rzym przeszedł od monarchii do republiki po wygnaniu ostatniego króla",
        era: "ancient-rome",
        importance: "critical",
        type: "political"
    },
    
    "-264-01-01": {
        name: "First Punic War Begins",
        namePl: "Początek Pierwszej Wojny Punickiej",
        description: "Rome and Carthage began their first major conflict for control of the Mediterranean",
        descriptionPl: "Rzym i Kartagina rozpoczęły pierwszy wielki konflikt o kontrolę nad Morzem Śródziemnym",
        era: "ancient-rome",
        importance: "high",
        type: "battle"
    },
    
    "-218-01-01": {
        name: "Second Punic War / Hannibal's Campaign",
        namePl: "Druga Wojna Punicka / Kampania Hannibala",
        description: "Hannibal crossed the Alps with elephants to invade Italy",
        descriptionPl: "Hannibal przekroczył Alpy ze słoniami, aby najechać na Italię",
        era: "ancient-rome",
        importance: "high",
        type: "battle"
    },
    
    "-44-03-15": {
        name: "Assassination of Julius Caesar",
        namePl: "Zamordowanie Juliusza Cezara",
        description: "Julius Caesar was assassinated by senators on the Ides of March",
        descriptionPl: "Juliusz Cezar został zamordowany przez senatorów w Idy Marcowe",
        era: "ancient-rome",
        importance: "critical",
        type: "political"
    },
    
    "-27-01-16": {
        name: "Augustus Becomes First Roman Emperor",
        namePl: "Oktawian August Zostaje Pierwszym Cesarzem Rzymskim",
        description: "Octavian received the title Augustus, marking the beginning of the Roman Empire",
        descriptionPl: "Oktawian otrzymał tytuł Augusta, co oznaczało początek Cesarstwa Rzymskiego",
        era: "ancient-rome",
        importance: "critical",
        type: "political"
    },
    

    "476-09-04": {
        name: "Fall of Western Roman Empire",
        namePl: "Upadek Cesarstwa Zachodniorzymskiego",
        description: "Romulus Augustulus, last Western Roman Emperor, was deposed",
        descriptionPl: "Romulus Augustulus, ostatni cesarz zachodniorzymski, został obalony",
        era: "ancient-rome",
        importance: "critical",
        type: "political"
    },
    
    // ===== EARLY POLAND (Before 966 AD) =====
    
    "960-01-01": {
        name: "Beginning of Polish State",
        namePl: "Początek Państwa Polskiego",
        description: "Duke Mieszko I began consolidating Polish tribes under Piast rule",
        descriptionPl: "Książę Mieszko I rozpoczął konsolidację plemion polskich pod rządami Piastów",
        era: "early-poland",
        importance: "critical",
        type: "political"
    },
    
    // ===== MEDIEVAL POLAND (966 - 1500 AD) =====
    
    "966-04-14": {
        name: "Baptism of Poland",
        namePl: "Chrzest Polski",
        description: "Baptism of Poland (Chrzest Polski) - Duke Mieszko I accepted Christianity from Rome in 966, a pivotal moment that brought Poland into Western Christendom and European civilization. This strategic decision aligned Poland with the Holy Roman Empire rather than Orthodox Byzantium, shaping Polish identity for over a millennium. The baptism unified the Polish tribes under one faith and established the Church as a central institution. It also brought Latin literacy, architecture, art, and diplomatic ties with other Christian kingdoms. Poland's thousand-year Catholic heritage begins here.",
        descriptionPl: "Książę Mieszko I przyjął chrześcijaństwo z Rzymu, wprowadzając Polskę do zachodniej chrześcijaństwa",
        era: "medieval-poland",
        importance: "critical",
        type: "religious"
    },
    
    "972-06-24": {
        name: "Battle of Cedynia",
        namePl: "Bitwa pod Cedynią",
        description: "Mieszko I defeated German forces, securing Poland's independence",
        descriptionPl: "Mieszko I pokonał siły niemieckie, zabezpieczając niepodległość Polski",
        era: "medieval-poland",
        importance: "high",
        type: "battle"
    },
    
    "992-05-25": {
        name: "Death of Mieszko I",
        namePl: "Śmierć Mieszka I",
        description: "The founder of the Polish state died, succeeded by his son Bolesław I the Brave",
        descriptionPl: "Założyciel państwa polskiego zmarł, jego następcą został syn Bolesław I Chrobry",
        era: "medieval-poland",
        importance: "high",
        type: "political"
    },
    
    "1000-03-01": {
        name: "Congress of Gniezno",
        namePl: "Zjazd Gnieźnieński",
        description: "Holy Roman Emperor Otto III met with Bolesław I, recognizing Poland's sovereignty",
        descriptionPl: "Cesarz rzymsko-niemiecki Otton III spotkał się z Bolesławem I, uznając suwerenność Polski",
        era: "medieval-poland",
        importance: "critical",
        type: "political"
    },
    
    "1025-12-25": {
        name: "Coronation of Bolesław I the Brave",
        namePl: "Koronacja Bolesława I Chrobrego",
        description: "Bolesław I became the first crowned King of Poland",
        descriptionPl: "Bolesław I został pierwszym koronowanym królem Polski",
        era: "medieval-poland",
        importance: "critical",
        type: "political"
    },
    
    "1410-07-15": {
        name: "Battle of Grunwald",
        namePl: "Bitwa pod Grunwaldem",
        description: "Battle of Grunwald (Bitwa pod Grunwaldem) - July 15, 1410. One of the largest and most important battles in medieval Europe. Polish-Lithuanian forces under King Władysław II Jagiełło decisively crushed the Teutonic Knights, ending their aggressive expansion. Over 60,000 soldiers clashed. Teutonic Grand Master Ulrich von Jungingen was killed. This victory is celebrated as one of Poland's greatest military triumphs and a symbol of Slavic resistance. The battle secured Poland's access to the Baltic and cemented the Polish-Lithuanian alliance.",
        descriptionPl: "Siły polsko-litewskie pokonały Zakon Krzyżacki w jednej z największych bitew średniowiecznej Europy",
        era: "medieval-poland",
        importance: "critical",
        type: "battle"
    },
    
    "1466-10-19": {
        name: "Second Peace of Thorn",
        namePl: "Drugi Pokój Toruński",
        description: "Treaty ending the Thirteen Years' War, Teutonic Order became Polish vassal",
        descriptionPl: "Traktat kończący wojnę trzynastoletnią, Zakon Krzyżacki stał się lennikiem Polski",
        era: "medieval-poland",
        importance: "high",
        type: "political"
    }
};

/**
 * Era definitions with colors and icons
 */
export const eras = {
    "ancient-rome": {
        name: "Ancient Rome",
        namePl: "Starożytny Rzym",
        color: "#8B4513", // Brown
        icon: "🏛️",
        period: "753 BC - 476 AD"
    },
    
    "1034-05-10": {
        name: "Death of Mieszko II Lambert",
        namePl: "Śmierć Mieszka II Lamberta",
        description: "Second crowned King of Poland died, leading to a period of crisis and pagan reaction",
        descriptionPl: "Drugi koronowany król Polski zmarł, prowadząc do okresu kryzysu i reakcji pogańskiej",
        era: "medieval-poland",
        importance: "high",
        type: "political"
    },
    
    "1058-02-01": {
        name: "Restoration of Polish Kingdom",
        namePl: "Odnowienie Królestwa Polskiego",
        description: "Casimir I the Restorer rebuilt the Polish state after the crisis of the 1030s",
        descriptionPl: "Kazimierz I Odnowiciel odbudował państwo polskie po kryzysie lat 1030",
        era: "medieval-poland",
        importance: "high",
        type: "political"
    },
    
    "1138-10-28": {
        name: "Death of Bolesław III Wrymouth - Poland Fragmented",
        namePl: "Śmierć Bolesława III Krzywoustego - Rozbicie Polski",
        description: "His testament divided Poland among his sons, beginning the period of feudal fragmentation",
        descriptionPl: "Jego testament podzielił Polskę między synów, rozpoczynając okres rozbicia dzielnicowego",
        era: "medieval-poland",
        importance: "critical",
        type: "political"
    },
    
    "1241-04-09": {
        name: "Battle of Legnica",
        namePl: "Bitwa pod Legnicą",
        description: "Polish and German forces fought the Mongols. Duke Henry II the Pious died defending Central Europe",
        descriptionPl: "Polskie i niemieckie siły walczyły z Mongołami. Książę Henryk II Pobożny zginął broniąc Europy Środkowej",
        era: "medieval-poland",
        importance: "critical",
        type: "battle"
    },
    
    "1295-06-26": {
        name: "Coronation of Przemysł II",
        namePl: "Koronacja Przemysła II",
        description: "First king crowned in Poland since Bolesław II (1076), attempting to reunify the kingdom",
        descriptionPl: "Pierwszy król koronowany w Polsce od czasów Bolesława II (1076), próbujący zjednoczyć królestwo",
        era: "medieval-poland",
        importance: "high",
        type: "political"
    },
    
    "1320-01-20": {
        name: "Coronation of Władysław I the Elbow-high",
        namePl: "Koronacja Władysława I Łokietka",
        description: "Successfully reunited most Polish lands and restored the Kingdom of Poland",
        descriptionPl: "Pomyślnie zjednoczył większość ziem polskich i przywrócił Królestwo Polskie",
        era: "medieval-poland",
        importance: "critical",
        type: "political"
    },
    
    "1333-03-02": {
        name: "Casimir III the Great Becomes King",
        namePl: "Kazimierz III Wielki Zostaje Królem",
        description: "Last Piast king began reign. Founded universities, built castles, reformed law. 'Found Poland wooden, left it stone'",
        descriptionPl: "Ostatni król z dynastii Piastów rozpoczął panowanie. Założył uniwersytety, budował zamki, reformował prawo",
        era: "medieval-poland",
        importance: "critical",
        type: "political"
    },
    
    "1364-05-12": {
        name: "Founding of Jagiellonian University",
        namePl: "Założenie Uniwersytetu Jagiellońskiego",
        description: "Casimir III founded the University of Kraków, second-oldest university in Central Europe",
        descriptionPl: "Kazimierz III założył Uniwersytet Krakowski, drugi najstarszy uniwersytet w Europie Środkowej",
        era: "medieval-poland",
        importance: "high",
        type: "cultural"
    },
    
    "1370-11-05": {
        name: "Death of Casimir III the Great",
        namePl: "Śmierć Kazimierza III Wielkiego",
        description: "Last male Piast ruler died. End of Piast dynasty. Succeeded by Louis I of Hungary",
        descriptionPl: "Ostatni męski władca z dynastii Piastów zmarł. Koniec dynastii Piastów. Następcą został Ludwik I Węgierski",
        era: "medieval-poland",
        importance: "critical",
        type: "political"
    },
    
    "1384-07-22": {
        name: "Jadwiga Crowned 'King' of Poland",
        namePl: "Jadwiga Koronowana na 'Króla' Polski",
        description: "10-year-old Jadwiga crowned as 'king' (not queen) to emphasize her sovereign authority",
        descriptionPl: "10-letnia Jadwiga koronowana na 'króla' (nie królową), aby podkreślić jej suwerenną władzę",
        era: "medieval-poland",
        importance: "high",
        type: "political"
    },
    
    "1385-08-14": {
        name: "Union of Krewo",
        namePl: "Unia Krewska",
        description: "Union of Krewo (Unia w Krewie) - Personal union between Poland and Lithuania in 1385, creating the largest territorial state in medieval Europe. Grand Duke Jogaila of Lithuania married Queen Jadwiga of Poland, converted to Christianity, and became King Władysław II Jagiełło. This dynastic union established the Jagiellonian dynasty and created the Polish-Lithuanian Commonwealth, a unique dual-state partnership that would dominate Eastern Europe for centuries, stretching from the Baltic to the Black Sea.",
        descriptionPl: "Unia personalna między Polską a Litwą. Jogaiło miał poślubić Jadwigę i nawrócić Litwę na chrześcijaństwo",
        era: "medieval-poland",
        importance: "critical",
        type: "political"
    },
    
    "1386-02-18": {
        name: "Marriage of Jadwiga and Jogaila",
        namePl: "Małżeństwo Jadwigi i Jagiełły",
        description: "Union creating the Jagiellonian dynasty. Jogaila baptized as Władysław II Jagiełło",
        descriptionPl: "Unia tworząca dynastię Jagiellonów. Jogaiło ochrzczony jako Władysław II Jagiełło",
        era: "medieval-poland",
        importance: "critical",
        type: "political"
    },
    
    "1399-07-17": {
        name: "Death of Saint Jadwiga",
        namePl: "Śmierć Świętej Jadwigi",
        description: "Queen Jadwiga died after childbirth. Later canonized for her piety and support of education",
        descriptionPl: "Królowa Jadwiga zmarła po porodzie. Później kanonizowana za pobożność i wspieranie edukacji",
        era: "medieval-poland",
        importance: "high",
        type: "religious"
    },
    
    "1401-01-18": {
        name: "Union of Vilnius and Radom",
        namePl: "Unia Wileńsko-Radomska",
        description: "Strengthened Polish-Lithuanian union, granted Lithuanian nobles equal rights with Polish nobility",
        descriptionPl: "Wzmocniła unię polsko-litewską, nadała litewskiej szlachcie równe prawa z polską",
        era: "medieval-poland",
        importance: "medium",
        type: "political"
    },
    
    "1413-10-02": {
        name: "Union of Horodło",
        namePl: "Unia Horodelska",
        description: "Heraldic union granting Lithuanian nobility Polish coat of arms and szlachta privileges",
        descriptionPl: "Unia heraldyczna nadająca litewskiej szlachcie polskie herby i przywileje szlacheckie",
        era: "medieval-poland",
        importance: "medium",
        type: "political"
    },
    
    "1434-06-01": {
        name: "Death of Władysław II Jagiełło",
        namePl: "Śmierć Władysława II Jagiełły",
        description: "Founder of Jagiellonian dynasty died after 48-year reign. Created Polish-Lithuanian union",
        descriptionPl: "Założyciel dynastii Jagiellonów zmarł po 48-letnim panowaniu. Stworzył unię polsko-litewską",
        era: "medieval-poland",
        importance: "critical",
        type: "political"
    },
    
    "1454-02-21": {
        name: "Start of Thirteen Years' War",
        namePl: "Początek Wojny Trzynastoletniej",
        description: "Prussian cities rebelled against Teutonic Order, seeking Polish protection",
        descriptionPl: "Miasta pruskie zbuntowały się przeciwko Zakonowi Krzyżackiemu, szukając polskiej ochrony",
        era: "medieval-poland",
        importance: "high",
        type: "battle"
    },
    
    "1492-06-07": {
        name: "Death of Casimir IV Jagiellon",
        namePl: "Śmierć Kazimierza IV Jagiellończyka",
        description: "His children became kings of Poland, Bohemia, and Hungary, creating Jagiellonian dominance in Central Europe",
        descriptionPl: "Jego dzieci zostały królami Polski, Czech i Węgier, tworząc dominację Jagiellonów w Europie Środkowej",
        era: "medieval-poland",
        importance: "high",
        type: "political"
    },
    "early-poland": {
        name: "Early Poland",
        namePl: "Wczesna Polska",
        color: "#4A5568", // Gray
        icon: "⚔️",
        period: "Before 966 AD"
    },
    "medieval-poland": {
        name: "Medieval Poland",
        namePl: "Średniowieczna Polska",
        color: "#C41E3A", // Polish red
        icon: "🛡️",
        period: "966 - 1500 AD"
    }
};

/**
 * Get historical event for a specific date
 * @param {Date} date - The date to check
 * @returns {Object|null} - Event object or null
 */
export function getHistoricalEvent(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const key = `${year}-${month}-${day}`;
    
    return historicalEvents[key] || null;
}

/**
 * Get all events for a specific year
 * @param {number} year - The year to check
 * @returns {Array} - Array of events with dates
 */
export function getEventsForYear(year) {
    const events = [];
    const yearStr = String(year);
    
    for (const [key, event] of Object.entries(historicalEvents)) {
        if (key.startsWith(yearStr + '-')) {
            const [y, m, d] = key.split('-').map(Number);
            events.push({
                ...event,
                date: new Date(y, m - 1, d),
                dateKey: key
            });
        }
    }
    
    return events.sort((a, b) => a.date - b.date);
}

/**
 * Check if date has historical event
 * @param {Date} date - The date to check
 * @returns {boolean}
 */
export function hasHistoricalEvent(date) {
    return getHistoricalEvent(date) !== null;
}


/**
 * Get anniversary information for a specific date
 * @param {Date} date - The date to check for anniversaries
 * @returns {Array} - Array of anniversary objects with event details and years ago
 */
export function getAnniversariesForDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const currentYear = date.getFullYear();
    
    const anniversaries = [];
    
    // Check all historical events for matching month/day
    for (const [key, event] of Object.entries(historicalEvents)) {
        const [eventYear, eventMonth, eventDay] = key.split('-').map(Number);
        
        // Check if month and day match
        if (eventMonth === parseInt(month) && eventDay === parseInt(day)) {
            // Don't show anniversaries for events that haven't happened yet
            // For BC dates: always show (we're past them)
            // For AD dates: only show if current year is after event year
            if (eventYear > 0 && currentYear < eventYear) {
                continue; // Event is in the future, skip it
            }
            
            // Calculate years ago (handle BC dates)
            let yearsAgo;
            if (eventYear < 0) {
                // BC date: add absolute value + current year
                yearsAgo = Math.abs(eventYear) + currentYear;
            } else {
                // AD date: simple subtraction
                yearsAgo = currentYear - eventYear;
            }
            
            // Only include if it's actually an anniversary (not the same year)
            if (yearsAgo > 0) {
                anniversaries.push({
                    ...event,
                    originalYear: eventYear,
                    yearsAgo: yearsAgo,
                    dateKey: key
                });
            }
        }
    }
    
    // Sort by importance and then by years ago
    anniversaries.sort((a, b) => {
        const importanceOrder = { critical: 0, high: 1, medium: 2, low: 3 };
        const aOrder = importanceOrder[a.importance] || 4;
        const bOrder = importanceOrder[b.importance] || 4;
        
        if (aOrder !== bOrder) return aOrder - bOrder;
        return b.yearsAgo - a.yearsAgo; // Older events first
    });
    
    return anniversaries;
}

/**
 * Check if a date has any anniversaries
 * @param {Date} date - The date to check
 * @returns {boolean}
 */
export function hasAnniversary(date) {
    return getAnniversariesForDate(date).length > 0;
}

/**
 * Get anniversary count for a date
 * @param {Date} date - The date to check
 * @returns {number}
 */
export function getAnniversaryCount(date) {
    return getAnniversariesForDate(date).length;
}

export default {
    events: historicalEvents,
    eras,
    getHistoricalEvent,
    getEventsForYear,
    hasHistoricalEvent,
    getAnniversariesForDate,
    hasAnniversary,
    getAnniversaryCount
};
