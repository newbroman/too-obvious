// info-panel.js - Display date information in Polish and English

export function updateInfoPanel(selectedDate, isFormal, includeYear, phonetics) {
    const infoPanel = document.getElementById('info-panel');
    if (!infoPanel) return;

    const day = selectedDate.getDate();
    const monthIndex = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const dayOfWeek = selectedDate.getDay();

 // 1. Theme Styling
    const header = document.getElementById('info-header');
    const footer = document.getElementById('info-footer');

    if (header) {
        header.classList.toggle('formal-theme', isFormal);
        header.classList.toggle('informal-theme', !isFormal);
    }

    if (footer) {
        footer.classList.toggle('formal-theme', isFormal);
        footer.classList.toggle('informal-theme', !isFormal);
    }

 // 2. Data Mapping
    const dayNamesPl = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const dayNamesEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dayOfWeekIndex = selectedDate.getDay();
    const dayNamePl = dayNamesPl[dayOfWeekIndex];
    const dayNameEn = dayNamesEn[dayOfWeekIndex]

    
    
    const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthKeysPl = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
    
    const currentMonthKey = monthKeysPl[monthIndex];
    const monthPhonetic = phonetics.months[currentMonthKey]; 
    const monthEn = monthNamesEn[monthIndex];

    const daySpelling = getWrittenDay(day, isFormal);      
    const dayPhonetic = getPhoneticDay(day, isFormal);

    // REMOVED: yearSpelling and yearPhonetic were defined here incorrectly.
    // They are now handled correctly inside the "if (includeYear)" block below.

   // 3. Intros & Base Phrasing
    const capitalizedDaySpelling = daySpelling.charAt(0).toUpperCase() + daySpelling.slice(1);
    const capitalizedDayPhonetic = dayPhonetic.charAt(0).toUpperCase() + dayPhonetic.slice(1);
    
    // We add the Signpost (Day Name) at the start
    let fullPl = `${dayNamePl}, ${daySpelling} ${currentMonthKey}`;
    let fullEn = `${dayNameEn}, ${monthEn} ${day}${getEnglishSuffix(day)}`;
    
    // For phonetics, we need to add the day name pronunciation if you have it, 
    // otherwise, we start with the day number:
    // Get day name phonetic
    const dayNamesPlLower = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
    const dayNamePl_lower = dayNamesPlLower[dayOfWeek];
    const dayNamePhonetic = phonetics.days[dayNamePl_lower] || dayNamePl;
    
    let fullPhonetic = `${dayNamePhonetic}, ${dayPhonetic} ${monthPhonetic}`;

    // 4. Year Logic
    if (includeYear) {
        // Now correctly define yearSpelling and yearPhonetic here
        const yearSpelling = getWrittenYear(year, isFormal);
        const yearPhonetic = getPhoneticYear(year, isFormal);

        fullPl += ` ${yearSpelling}`;
        fullEn += `, ${year}`;
        fullPhonetic += ` ${yearPhonetic}`;
    }

    // 5. Render to DOM
    infoPanel.innerHTML = `
        <div class="info-row">
            <span class="label">Polish:</span>
            <span class="value">${fullPl}</span>
        </div>
        <div class="info-row">
            <span class="label">Phonetic:</span>
            <span class="value phonetic">${fullPhonetic}</span>
        </div>
        <div class="info-row">
            <span class="label">English:</span>
            <span class="value">${fullEn}</span>
        </div>
    `;
}

// Helper functions for day/year spelling and phonetics
function getWrittenDay(day, isFormal) {
    // Your existing logic here
    const dayMap = {
        1: isFormal ? "pierwszego" : "pierwszy",
        2: isFormal ? "drugiego" : "drugi",
        3: isFormal ? "trzeciego" : "trzeci",
        4: isFormal ? "czwartego" : "czwarty",
        5: isFormal ? "piątego" : "piąty",
        6: isFormal ? "szóstego" : "szósty",
        7: isFormal ? "siódmego" : "siódmy",
        8: isFormal ? "ósmego" : "ósmy",
        9: isFormal ? "dziewiątego" : "dziewiąty",
        10: isFormal ? "dziesiątego" : "dziesiąty",
        11: isFormal ? "jedenastego" : "jedenasty",
        12: isFormal ? "dwunastego" : "dwunasty",
        13: isFormal ? "trzynastego" : "trzynasty",
        14: isFormal ? "czternastego" : "czternasty",
        15: isFormal ? "piętnastego" : "piętnasty",
        16: isFormal ? "szesnastego" : "szesnasty",
        17: isFormal ? "siedemnastego" : "siedemnasty",
        18: isFormal ? "osiemnastego" : "osiemnasty",
        19: isFormal ? "dziewiętnastego" : "dziewiętnasty",
        20: isFormal ? "dwudziestego" : "dwudziesty",
        21: isFormal ? "dwudziestego pierwszego" : "dwudziesty pierwszy",
        22: isFormal ? "dwudziestego drugiego" : "dwudziesty drugi",
        23: isFormal ? "dwudziestego trzeciego" : "dwudziesty trzeci",
        24: isFormal ? "dwudziestego czwartego" : "dwudziesty czwarty",
        25: isFormal ? "dwudziestego piątego" : "dwudziesty piąty",
        26: isFormal ? "dwudziestego szóstego" : "dwudziesty szósty",
        27: isFormal ? "dwudziestego siódmego" : "dwudziesty siódmy",
        28: isFormal ? "dwudziestego ósmego" : "dwudziesty ósmy",
        29: isFormal ? "dwudziestego dziewiątego" : "dwudziesty dziewiąty",
        30: isFormal ? "trzydziestego" : "trzydziesty",
        31: isFormal ? "trzydziestego pierwszego" : "trzydziesty pierwszy"
    };
    return dayMap[day] || day.toString();
}

function getPhoneticDay(day, isFormal) {
    const phoneticMap = {
        1: isFormal ? "pyer-fsheh-go" : "pyer-fshi",
        2: isFormal ? "droo-gye-go" : "droo-gi",
        3: isFormal ? "tsheh-chye-go" : "tsheh-chi",
        4: isFormal ? "chfar-teh-go" : "chfar-ti",
        5: isFormal ? "pyon-teh-go" : "pyon-ti",
        6: isFormal ? "shoos-teh-go" : "shoos-ti",
        7: isFormal ? "shyood-meh-go" : "shyood-mi",
        8: isFormal ? "oos-meh-go" : "oos-mi",
        9: isFormal ? "djeh-vyon-teh-go" : "djeh-vyon-ti",
        10: isFormal ? "djeh-shon-teh-go" : "djeh-shon-ti",
        11: isFormal ? "yeh-deh-nas-teh-go" : "yeh-deh-nas-ti",
        12: isFormal ? "dvoo-nas-teh-go" : "dvoo-nas-ti",
        13: isFormal ? "tshi-nas-teh-go" : "tshi-nas-ti",
        14: isFormal ? "chtehr-nas-teh-go" : "chtehr-nas-ti",
        15: isFormal ? "pyent-nas-teh-go" : "pyent-nas-ti",
        16: isFormal ? "shes-nas-teh-go" : "shes-nas-ti",
        17: isFormal ? "shye-dem-nas-teh-go" : "shye-dem-nas-ti",
        18: isFormal ? "o-shem-nas-teh-go" : "o-shem-nas-ti",
        19: isFormal ? "djeh-vyent-nas-teh-go" : "djeh-vyent-nas-ti",
        20: isFormal ? "dvoo-djyes-teh-go" : "dvoo-djyes-ti",
        21: isFormal ? "dvoo-djyes-teh-go pyer-fsheh-go" : "dvoo-djyes-ti pyer-fshi",
        22: isFormal ? "dvoo-djyes-teh-go droo-gye-go" : "dvoo-djyes-ti droo-gi",
        23: isFormal ? "dvoo-djyes-teh-go tsheh-chye-go" : "dvoo-djyes-ti tsheh-chi",
        24: isFormal ? "dvoo-djyes-teh-go chfar-teh-go" : "dvoo-djyes-ti chfar-ti",
        25: isFormal ? "dvoo-djyes-teh-go pyon-teh-go" : "dvoo-djyes-ti pyon-ti",
        26: isFormal ? "dvoo-djyes-teh-go shoos-teh-go" : "dvoo-djyes-ti shoos-ti",
        27: isFormal ? "dvoo-djyes-teh-go shyood-meh-go" : "dvoo-djyes-ti shyood-mi",
        28: isFormal ? "dvoo-djyes-teh-go oos-meh-go" : "dvoo-djyes-ti oos-mi",
        29: isFormal ? "dvoo-djyes-teh-go djeh-vyon-teh-go" : "dvoo-djyes-ti djeh-vyon-ti",
        30: isFormal ? "tshi-djyes-teh-go" : "tshi-djyes-ti",
        31: isFormal ? "tshi-djyes-teh-go pyer-fsheh-go" : "tshi-djyes-ti pyer-fshi"
    };
    return phoneticMap[day] || day.toString();
}

function getWrittenYear(year, isFormal) {
    return isFormal ? `roku ${year}` : `rok ${year}`;
}

function getPhoneticYear(year, isFormal) {
    return isFormal ? `ro-koo ${year}` : `rok ${year}`;
}

function getEnglishSuffix(day) {
    if (day >= 11 && day <= 13) return 'th';
    const lastDigit = day % 10;
    if (lastDigit === 1) return 'st';
    if (lastDigit === 2) return 'nd';
    if (lastDigit === 3) return 'rd';
    return 'th';
}
