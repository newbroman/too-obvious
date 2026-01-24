// help.js - Help page language management

export function updateHelpPage(isPolish) {
    const helpTitle = document.getElementById('helpTitle');
    const helpDevNote = document.getElementById('helpDevNote');
    const helpFeedbackBtn = document.getElementById('helpFeedbackBtn');
    const helpBackBtn = document.getElementById('searchBackBtn'); // Help page uses searchBackBtn ID
    const helpNavSearchBtn = document.getElementById('helpNavSearch');
    
    // Set up back button click handler
    if (helpBackBtn) {
        helpBackBtn.onclick = () => document.getElementById('navCalendar').click();
        helpBackBtn.innerText = isPolish ? "Wróć" : "Back";
    }
    
    // Translate help page search button
    if (helpNavSearchBtn) {
        helpNavSearchBtn.innerHTML = isPolish 
            ? "🔍 Szukaj Imienin"
            : "🔍 Name Day Search";
    }
    
    if (helpTitle) {
        helpTitle.innerText = isPolish ? "Pomoc" : "Help";
    }
    
    // Update "How to Use This App" section title
    const howToTitle = document.querySelector('#helpPage h3:nth-of-type(1)');
    if (howToTitle) {
        howToTitle.textContent = isPolish ? "🎯 Jak Korzystać z Aplikacji" : "🎯 How to Use This App";
    }
    
    // Update section headers
    const calTitle = document.getElementById('helpCalendarTitle');
    const cultureTitle = document.getElementById('helpCultureTitle');
    const grammarTitle = document.getElementById('helpGrammarTitle');
    const calList = document.getElementById('helpCalList');
    if (calTitle) {
        calTitle.textContent = isPolish ? "📅 Strona Kalendarza" : "📅 Calendar Page";
    }
    if (cultureTitle) {
        cultureTitle.textContent = isPolish ? "📖 Strona Kultury" : "📖 Culture Page";
    }
    if (grammarTitle) {
        grammarTitle.textContent = isPolish ? "⚖️ Strona Gramatyki" : "⚖️ Grammar Page";
    }
    if (calList) {
        calList.innerHTML = isPolish 
            ? `<li><b>Kliknij dowolną datę</b>, aby usłyszeć polską wymowę</li>
                <li><b>Dwa tryby wymowy:</b>
                    <ul style="margin: 3px 0; padding-left: 20px;">
                        <li><i>"Dzisiaj jest..."</i> - Przypadek mianownik</li>
                        <li><i>"To jest..."</i> - Przypadek dopełniacz do umawiania spotkań</li>
                    </ul>
                </li>
                <li><b>Przełączaj między trybami</b> za pomocą przycisku u góry</li>
                <li><b>Przełączaj lata</b>, aby uwzględnić rok w wymowie daty</li>`
            : `<li><b>Click any date</b> to hear Polish pronunciation</li>
                <li><b>Two pronunciation modes:</b>
                    <ul style="margin: 3px 0; padding-left: 20px;">
                        <li><i>"Today is..."</i> (Dzisiaj jest) - Nominative case</li>
                        <li><i>"It's on..."</i> (To jest) - Genitive case for arranging meetings</li>
                    </ul>
                </li>
                <li><b>Toggle between modes</b> using the button at the top</li>
                <li><b>Toggle years</b> to include the year in the date pronunciation</li>`;
    }
    
    // Update Culture Page section
    const cultTitle = document.querySelector('#helpPage h4:nth-of-type(2)');
    const cultList = document.getElementById('helpCultList');
    if (cultTitle) {
        cultTitle.textContent = isPolish ? "📖 Strona Kultury" : "📖 Culture Page";
    }
    if (cultList) {
        cultList.innerHTML = isPolish 
            ? `<li><b>Odkryj znaczenie</b> polskich nazw dni i miesięcy</li>
                <li><b>Dowiedz się, czyje imieniny</b> przypadają w danym dniu</li>
                <li><b>Poznaj święta</b> przypadające w bieżącym miesiącu</li>
                <li><b>Wyszukaj imiona</b> za pomocą czerwonego przycisku "Szukaj Imienin", aby znaleźć, kiedy ktoś obchodzi imieniny</li>`
            : `<li><b>Discover the meaning</b> of Polish day names and month names</li>
                <li><b>Find out whose name day it is</b> on any date</li>
                <li><b>Learn about holidays</b> happening in the current month</li>
                <li><b>Search for names</b> using the red "Name Day Search" button to find when someone's name day occurs</li>`;
    }
    
    // Update Grammar Page section
    const gramTitle = document.querySelector('#helpPage h4:nth-of-type(3)');
    const gramList = document.getElementById('helpGramList');
    if (gramTitle) {
        gramTitle.textContent = isPolish ? "⚖️ Strona Gramatyki" : "⚖️ Grammar Page";
    }
    if (gramList) {
        gramList.innerHTML = isPolish 
            ? `<li><b>Opanuj polskie przypadki liczebników</b> - klucz do poprawnej wymowy dat</li>
                <li><b>Naucz się, kiedy używać mianownika, a kiedy dopełniacza</b></li>
                <li><b>Zobacz szczegółowe przykłady</b> z wyjaśnieniami</li>`
            : `<li><b>Master Polish numeral cases</b> - the key to correct date pronunciation</li>
                <li><b>Learn when to use nominative vs. genitive</b> case</li>
                <li><b>See detailed examples</b> with explanations</li>`;
    }
    
    // Pronunciation Modes section
    const pronTitle = document.querySelector('#helpPage h3:nth-of-type(2)');
    const pronText = pronTitle ? pronTitle.nextElementSibling : null;
    if (pronTitle) {
        pronTitle.textContent = isPolish ? "🔊 Tryby Wymowy" : "🔊 Pronunciation Modes";
    }
    if (pronText && pronText.tagName === 'P') {
        pronText.innerHTML = isPolish
            ? `Strona kalendarza ma <strong>dwa tryby wymowy</strong> dat. 
               Szczegółowe wyjaśnienia znajdziesz na <strong>stronie Gramatyki (⚖️)</strong>.`
            : `The calendar page has <strong>two pronunciation modes</strong> for dates. 
               Refer to the <strong>Grammar page (⚖️)</strong> for detailed explanations.`;
    }
    
    // Name Days section
    const namedaysTitle = document.querySelector('#helpPage h3:nth-of-type(3)');
    if (namedaysTitle) {
        namedaysTitle.textContent = isPolish ? "🎂 Imieniny" : "🎂 Name Days (Imieniny)";
    }
    const namedaysParagraphs = document.querySelectorAll('#helpPage p');
    if (namedaysParagraphs.length >= 2) {
        // First paragraph about name days
        namedaysParagraphs[1].innerHTML = isPolish
            ? `<strong>W Polsce imieniny są często ważniejsze niż urodziny!</strong> 
               Każdy dzień w roku jest poświęcony jednemu lub kilku świętym lub postaciom historycznym. 
               Jeśli twoje imię pasuje do świętego danego dnia, to jest to twój dzień <em>imienin</em>, 
               a przyjaciele i rodzina świętują cię kwiatami, kartkami i życzeniami.`
            : `<strong>In Poland, Name Days are often more important than birthdays!</strong> 
               Each day of the year is dedicated to one or more saints or historical figures. 
               If your name matches the saint of the day, it's your <em>imieniny</em> (name day), 
               and friends and family celebrate you with flowers, cards, and well-wishes.`;
        
        // Second paragraph
        namedaysParagraphs[2].innerHTML = isPolish
            ? `Większość polskich kalendarzy wyraźnie wyświetla imieniny, a powszechne jest pamiętanie 
               czyjichś imienin, nawet jeśli zapomni się o ich urodzinach!`
            : `Most Polish calendars prominently display name days, and it's common to remember 
               someone's name day even if you forget their birthday!`;
    }
    
    // Polish Holidays & Traditions section
    const holidaysTitle = document.querySelector('#helpPage h3:nth-of-type(4)');
    if (holidaysTitle) {
        holidaysTitle.textContent = isPolish ? "🎉 Polskie Święta i Tradycje" : "🎉 Polish Holidays & Traditions";
    }
    
    // Find paragraphs in holidays section
    const allP = Array.from(document.querySelectorAll('#helpPage p'));
    const holidayStart = allP.findIndex(p => p.innerHTML.includes('Poland has a rich calendar') || p.innerHTML.includes('Polska ma bogaty kalendarz'));
    
    if (holidayStart > 0) {
        allP[holidayStart].innerHTML = isPolish
            ? `<strong>Polska ma bogaty kalendarz świąt i tradycji</strong>, które odzwierciedlają 
               jej katolickie dziedzictwo i słowiańskie korzenie.`
            : `<strong>Poland has a rich calendar of holidays and traditions</strong> that reflect 
               its Catholic heritage and Slavic roots.`;
        
        if (allP[holidayStart + 1]) {
            allP[holidayStart + 1].innerHTML = isPolish
                ? `<strong>Święta Państwowe:</strong> Dni takie jak <em>Wszystkich Świętych</em> 
                   (gdy miliony świec rozświetlają cmentarze) i <em>Wigilia</em> 
                   (Wigilia Bożego Narodzenia z jej świętą 12-daniową kolacją bez mięsa).`
                : `<strong>Official Holidays:</strong> Days like <em>Wszystkich Świętych</em> (All Saints' Day) 
                   when millions of candles light up cemeteries, and <em>Wigilia</em> (Christmas Eve) 
                   with its sacred 12-dish meatless supper.`;
        }
        
        if (allP[holidayStart + 2]) {
            allP[holidayStart + 2].innerHTML = isPolish
                ? `<strong>Tradycje Kulturowe:</strong> Święta takie jak <em>Andrzejki</em> (noc wróżb), 
                   <em>Tłusty Czwartek</em> (dzień pączków!), i <em>Dzień Babci</em> (Dzień Babci).`
                : `<strong>Cultural Traditions:</strong> Celebrations like <em>Andrzejki</em> (fortune-telling night), 
                   <em>Tłusty Czwartek</em> (Fat Thursday - donut day!), and <em>Dzień Babci</em> (Grandmothers' Day).`;
        }
        
        if (allP[holidayStart + 3]) {
            allP[holidayStart + 3].innerHTML = isPolish
                ? `Kalendarz używa kodowania kolorami, aby pomóc ci zidentyfikować różne typy specjalnych dat na pierwszy rzut oka.`
                : `The calendar uses color coding to help you identify different types of special dates at a glance.`;
        }
    }
    
    // Calendar Color Legend
    const legendTitle = document.querySelector('#helpPage h4:nth-of-type(4)');
    if (legendTitle) {
        legendTitle.textContent = isPolish ? "📊 Legenda Kolorów Kalendarza" : "📊 Calendar Color Legend";
    }
    
    // Translate legend items
    const legendItems = document.querySelectorAll('#helpPage .content-body > div > div > div > div:nth-child(2)');
    if (legendItems.length >= 5) {
        // Official Holidays
        legendItems[0].innerHTML = isPolish
            ? `<strong style="color: #dc3545;">Święta Państwowe</strong>
               <div style="font-size: 0.85rem; color: var(--text-dim);">Narodowe święta państwowe (czerwone tło + ikona 🎉)</div>`
            : `<strong style="color: #dc3545;">Official Holidays</strong>
               <div style="font-size: 0.85rem; color: var(--text-dim);">National public holidays (red background + 🎉 icon)</div>`;
        
        // Cultural Traditions
        legendItems[1].innerHTML = isPolish
            ? `<strong style="color: #2196f3;">Tradycje Kulturowe</strong>
               <div style="font-size: 0.85rem; color: var(--text-dim);">Ważne uroczystości kulturowe (pomarańczowe tło + ikona 🎭)</div>`
            : `<strong style="color: #2196f3;">Cultural Traditions</strong>
               <div style="font-size: 0.85rem; color: var(--text-dim);">Important cultural celebrations (orange background + 🎭 icon)</div>`;
        
        // Historical Events
        legendItems[2].innerHTML = isPolish
            ? `<strong style="color: #ff9800;">Wydarzenia Historyczne</strong>
               <div style="font-size: 0.85rem; color: var(--text-dim);">Ważne daty w historii Polski (niebieskie tło)</div>`
            : `<strong style="color: #ff9800;">Historical Events</strong>
               <div style="font-size: 0.85rem; color: var(--text-dim);">Significant dates in Polish history (blue background)</div>`;
        
        // Historical Anniversaries
        legendItems[3].innerHTML = isPolish
            ? `<strong style="color: #9c27b0;">Rocznice Historyczne</strong>
               <div style="font-size: 0.85rem; color: var(--text-dim);">Kamienne rocznice przeszłych wydarzeń (fioletowe tło + odznaka 📅)</div>`
            : `<strong style="color: #9c27b0;">Historical Anniversaries</strong>
               <div style="font-size: 0.85rem; color: var(--text-dim);">Milestone anniversaries of past events (purple background + 📅 badge)</div>`;
        
        // Pagan Traditions
        legendItems[4].innerHTML = isPolish
            ? `<strong style="color: #4caf50;">Tradycje Pogańskie</strong>
               <div style="font-size: 0.85rem; color: var(--text-dim);">Starożytne słowiańskie święta (zielone tło)</div>`
            : `<strong style="color: #4caf50;">Pagan Traditions</strong>
               <div style="font-size: 0.85rem; color: var(--text-dim);">Ancient Slavic celebrations (green background)</div>`;
    }
    
    // Audio Troubleshooting section
    const audioTitle = document.querySelector('#helpPage h3:nth-of-type(5)');
    if (audioTitle) {
        audioTitle.textContent = isPolish ? "🔊 Rozwiązywanie Problemów z Dźwiękiem" : "🔊 Audio Troubleshooting";
    }
    
    // Translate table rows
    const tableRows = document.querySelectorAll('#helpPage table tr');
    if (tableRows.length >= 4) {
        tableRows[0].innerHTML = isPolish
            ? `<td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Głośność:</strong></td>
               <td style="border: none; padding: 4px 0;">Sprawdź, czy głośność urządzenia jest włączona</td>`
            : `<td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Volume:</strong></td>
               <td style="border: none; padding: 4px 0;">Check your device volume is turned up</td>`;
        
        tableRows[1].innerHTML = isPolish
            ? `<td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Polski głos:</strong></td>
               <td style="border: none; padding: 4px 0;">Ustawienia → Dostępność → Wypowiadana treść → Głosy → Pobierz polski</td>`
            : `<td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Polish voice:</strong></td>
               <td style="border: none; padding: 4px 0;">Settings → Accessibility → Spoken Content → Voices → Download Polish</td>`;
        
        tableRows[2].innerHTML = isPolish
            ? `<td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Przeglądarki:</strong></td>
               <td style="border: none; padding: 4px 0;">Chrome, Safari i Edge mają najlepsze wsparcie dla języka polskiego</td>`
            : `<td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Browsers:</strong></td>
               <td style="border: none; padding: 4px 0;">Chrome, Safari, and Edge have best Polish support</td>`;
        
        tableRows[3].innerHTML = isPolish
            ? `<td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Mobilne:</strong></td>
               <td style="border: none; padding: 4px 0;">iOS i Android mają wbudowane polskie głosy</td>`
            : `<td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Mobile:</strong></td>
               <td style="border: none; padding: 4px 0;">iOS and Android have built-in Polish voices</td>`;
    }
    
    if (helpDevNote) {
        helpDevNote.innerText = isPolish 
            ? "Projekt niezależny. Twoja opinia pomaga mi w rozwoju!"
            : "Independent project. Your feedback helps me improve!";
    }
    
    if (helpFeedbackBtn) {
        helpFeedbackBtn.innerText = isPolish 
            ? "Prześlij opinię (Feedback)"
            : "Send Feedback";
    }
}
