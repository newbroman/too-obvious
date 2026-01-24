/**
 * events.js - Fixed Integration
 */
import { speakText, unlockAudio, checkVoices } from './utils/audio.js';
import holidayData from './data/holidays.js';
import culturalData from './data/cultural.js';
import { getRulesHTML } from './pages/grammar.js';
import { updateNamedaysDisplay } from './components/info-panel.js';
import historicalData, { getAnniversariesForDate } from './data/historical.js';

export function setupListeners(state, render) {
    // Audio playback state
    let lastPlayTime = 0;
    let playbackSpeed = 0.85;
    
    // --- 1. Audio and Logic Toggles ---
    const triggerAudioUnlock = () => {
        console.log('🔊 Unlocking audio on user interaction...');
        import('./audio.js').then(m => {
            m.unlockAudio();
            console.log('✅ Audio unlock attempted');
        });
        document.removeEventListener('touchstart', triggerAudioUnlock);
        document.removeEventListener('click', triggerAudioUnlock);
    };
    document.addEventListener('touchstart', triggerAudioUnlock, { once: true });
    document.addEventListener('click', triggerAudioUnlock, { once: true });
    
    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        checkVoices((ready) => {
            if (ready) {
                playBtn.disabled = false;
                playBtn.style.opacity = "1";
                render(); 
            }
        });

        playBtn.onclick = () => {
            const plPhraseElement = document.getElementById('plPhrase');
            if (plPhraseElement) {
                const textToSpeak = plPhraseElement.innerText;
                if (textToSpeak && !textToSpeak.includes("Wybierz")) {
                    unlockAudio();
                    
                    // Speed control: toggle between 0.85x and 0.5x on quick successive taps
                    const now = Date.now();
                    const timeSinceLastPlay = now - lastPlayTime;
                    
                    if (timeSinceLastPlay < 2000) {
                        // Quick tap (within 2 seconds) - switch to slow speed
                        playbackSpeed = playbackSpeed === 0.85 ? 0.5 : 0.85;
                    } else {
                        // First tap or long gap - reset to default
                        playbackSpeed = 0.85;
                    }
                    
                    lastPlayTime = now;
                    
                    // Update button text to show speed
                    const speedLabel = playbackSpeed === 0.5 ? ' (Slow)' : '';
                    playBtn.innerText = (state.isPolish ? '🔊 Słuchaj' : '🔊 Listen') + speedLabel;
                    
                    console.log('🔊 Speaking:', textToSpeak, 'at speed', playbackSpeed);
                    speakText(textToSpeak, playbackSpeed);
                    
                    // Reset button text after 2 seconds
                    setTimeout(() => {
                        playBtn.innerText = state.isPolish ? '🔊 Słuchaj' : '🔊 Listen';
                    }, 2000);
                }
            }
        };
    }

  
    // --- Formal/Informal Toggle Logic ---
    const meetingBtn = document.getElementById('meetingToggle');
if (meetingBtn) {
    meetingBtn.onclick = () => {
        // Just flip the switch and let render() update the labels
        state.isFormal = !state.isFormal;
        render(); 
    };
}

    // --- 2. Navigation Logic ---
    const showSection = (id) => {
        window.scrollTo(0, 0); 
        const sections = {
            'calendar': document.getElementById('calendarSection'),
            'culture': document.getElementById('culturalHub'),
            'rules': document.getElementById('rulesPage'),
            'search': document.getElementById('nameSearchPage'),
            'help': document.getElementById('helpPage')
        };
        const infoPanel = document.querySelector('.info-panel');

        Object.values(sections).forEach(s => { 
            if (s) s.style.setProperty('display', 'none', 'important'); 
        });

        const activeSection = sections[id];
        if (activeSection) {
            const displayType = (id === 'calendar') ? 'flex' : 'block';
            activeSection.style.setProperty('display', displayType, 'important');
            
            if (id !== 'calendar') {
                activeSection.classList.add('content-page');
            }
        }

        if (infoPanel) {
            infoPanel.style.setProperty('display', id === 'calendar' ? 'flex' : 'none', 'important');
        }

        document.querySelectorAll('.nav-icon-btn').forEach(b => {
            b.classList.toggle('active', b.id === `nav${id.charAt(0).toUpperCase() + id.slice(1)}`);
        });
    };

    // --- 3. Click Listeners ---
    document.getElementById('navCalendar').onclick = () => {
        showSection('calendar');
        render(); 
    };

    document.getElementById('navCulture').onclick = () => {
        showSection('culture');
        renderCulturalHub(state); 
    };

    document.getElementById('navRules').onclick = () => {
        showSection('rules');
        renderRulesPage(state);
    };
    
    document.getElementById('navHelp').onclick = () => {
        showSection('help');
        import('./pages/help.js').then(m => m.updateHelpPage(state.isPolish));
    };

    // Use event delegation for dynamically created navSearch buttons (culture page + help page)
    document.addEventListener('click', (e) => {
        if (e.target.id === 'navSearch' || e.target.id === 'helpNavSearch' || 
            e.target.closest('#navSearch') || e.target.closest('#helpNavSearch')) {
            showSection('search');
            renderSearchPage(state);
        }
    });

    document.getElementById('prevMonth').onclick = () => {
        state.viewDate.setMonth(state.viewDate.getMonth() - 1);
        render();
    };
        
        // Setup Back button in help modal
        setTimeout(() => {
            const modalBackBtn = document.querySelector("#aboutModal .back-to-cal");
            if (modalBackBtn) {
                modalBackBtn.onclick = () => {
                    document.getElementById("helpPage").style.display = "none";
                };
            }
        }, 100);

    document.getElementById('nextMonth').onclick = () => {
        state.viewDate.setMonth(state.viewDate.getMonth() + 1);
    
        render();
    };

    document.getElementById('monthRoller').onchange = (e) => {
        state.viewDate.setMonth(parseInt(e.target.value));
        render();
    };

    document.getElementById('yearInput').onchange = (e) => {
        state.viewDate.setFullYear(parseInt(e.target.value));
        render();
    };

    document.getElementById('langToggle').onclick = (e) => {
        state.isPolish = !state.isPolish;
        e.target.innerText = state.isPolish ? 'PL' : 'EN';
        render(); 
    };

    document.getElementById('repeatYearBtn').onclick = () => {
        state.includeYear = !state.includeYear;
        render(); 
    };

    // Swipe Navigation for Mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    const calendarGrid = document.getElementById('calendarGrid');
    
    if (calendarGrid) {
        calendarGrid.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        calendarGrid.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        const swipeThreshold = 50; // minimum pixels for swipe
        const horizontalDiff = touchStartX - touchEndX;
        const verticalDiff = Math.abs(touchStartY - touchEndY);
        
        // Only trigger if horizontal swipe is dominant (not vertical scroll)
        if (Math.abs(horizontalDiff) > swipeThreshold && verticalDiff < 100) {
            if (horizontalDiff > 0) {
                // Swiped left → next month
                document.getElementById('nextMonth').click();
            } else {
                // Swiped right → prev month
                document.getElementById('prevMonth').click();
            }
        }
    }

} // <--- CORRECTLY CLOSES setupListeners

/**
 * Renders the Cultural Hub
 */
export function renderCulturalHub(state) {
    const hub = document.getElementById('culturalHub');
    const monthIndex = state.selectedDate.getMonth();
    const year = state.selectedDate.getFullYear();
    const day = state.selectedDate.getDate();
    const monthInfo = culturalData.months[monthIndex] || { pl: "Miesiąc", derivation: "N/A", season: "N/A" };
    const nominativeMonths = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    const nominativeMonth = nominativeMonths[monthIndex];
    const holidays = holidayData.getHolidaysForYear(year);
    const displayMonth = monthInfo.pl.charAt(0).toUpperCase() + monthInfo.pl.slice(1);
    
    let html = `
    <button id="cultureBackBtn" class="pill-btn back-to-cal">Back</button>
    <div class="content-body">
        <header class="content-header">
            <h1>${day}. ${nominativeMonth} ${year}${year < 0 ? ' p.n.e.' : ''}</h1>
        </header>
        ${(() => {
            // Check for historical event on this date
            const historicalEvent = historicalData.getHistoricalEvent(state.selectedDate);
            
            if (historicalEvent) {
                const era = historicalData.eras[historicalEvent.era];
                const eventName = state.isPolish ? historicalEvent.namePl : historicalEvent.name;
                const eventDesc = state.isPolish ? historicalEvent.descriptionPl : historicalEvent.description;
                
                return `
                    <div class="historical-event-banner" style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, ${era.color}22 0%, ${era.color}11 100%); border-left: 4px solid ${era.color}; border-radius: 8px; animation: slideIn 0.5s ease-out;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <span style="font-size: 2rem;">${era.icon}</span>
                            <div>
                                <div style="font-size: 0.85rem; color: ${era.color}; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">${state.isPolish ? era.namePl : era.name}</div>
                                <h2 style="margin: 4px 0 0 0; font-size: 1.4rem; color: var(--text-main);">${eventName}</h2>
                            </div>
                        </div>
                        <p style="margin: 0; font-size: 1rem; line-height: 1.6; color: var(--text-dim);">${eventDesc}</p>
                    </div>
                `;
            }
            return '';
        })()}
        ${(() => {
            // Check for anniversaries on this date
            const anniversaries = getAnniversariesForDate(state.selectedDate);
            
            if (anniversaries.length > 0) {
                let annivHtml = `
                    <div class="anniversaries-section" style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #f3e5f5 0%, #f5f5f5 100%); border-left: 4px solid #9c27b0; border-radius: 8px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                            <span style="font-size: 2rem;">📅</span>
                            <h2 style="margin: 0; font-size: 1.3rem; color: #7b1fa2;">${state.isPolish ? 'Rocznice Historyczne' : 'Historical Anniversaries'}</h2>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px;">`;
                
                anniversaries.forEach(anniv => {
                    const era = historicalData.eras[anniv.era];
                    const eventName = state.isPolish ? anniv.namePl : anniv.name;
                    const eventDesc = state.isPolish ? anniv.descriptionPl : anniv.description;
                    const yearDisplay = anniv.originalYear < 0 
                        ? (state.isPolish ? `${Math.abs(anniv.originalYear)} p.n.e.` : `${Math.abs(anniv.originalYear)} BC`)
                        : anniv.originalYear;
                    
                    annivHtml += `
                        <div style="padding: 12px; background: var(--card-bg, white); border-radius: 6px; border-left: 3px solid ${era.color};">
                            <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 6px;">
                                <span style="font-size: 1.2rem;">${era.icon}</span>
                                <div style="flex: 1;">
                                    <div style="font-size: 0.85rem; color: ${era.color}; font-weight: 600;">${anniv.yearsAgo} ${state.isPolish ? 'lat temu' : 'years ago'} (${yearDisplay})</div>
                                    <div style="font-weight: 600; color: var(--text-main); margin-top: 2px;">${eventName}</div>
                                </div>
                            </div>
                            <p style="margin: 0; font-size: 0.95rem; line-height: 1.5; color: var(--text-dim);">${eventDesc}</p>
                        </div>`;
                });
                
                annivHtml += `
                        </div>
                    </div>`;
                
                return annivHtml;
            }
            return '';
        })()}
        <div class="season-box" style="margin-bottom: 20px;">
            <span class="season-icon">${getSeasonIcon(monthInfo.season)}</span>
            <strong>${state.isPolish ? 'Pora roku' : 'Season'}:</strong> 
            <span class="season-text">${monthInfo.season}</span>
        </div>
        <section class="info-block" style="margin-bottom: 20px;">
            <h3>📜 ${state.isPolish ? 'Znaczenie Miesiąca' : 'Meaning of the Month'}</h3>
            <div style="padding: 15px; border: 2px solid var(--accent-color); border-radius: 8px; background: rgba(128,128,128,0.05);"><strong style="font-size: 1.1rem; color: var(--accent-color);">${nominativeMonth}:</strong> <span style="font-size: 1rem;">${monthInfo.derivation}</span></div>
        </section>
        <section class="info-block" style="margin-bottom: 20px;">
            <h3>📅 ${state.isPolish ? 'Znaczenie dzisiejszego dnia' : 'Meaning of Today'}</h3>
            <div class="culture-grid-mini">
                ${(() => {
                    const todayIndex = new Date().getDay();
                    const day = culturalData.days[todayIndex];
                    return `
                        <div class="day-meaning-card" style="padding: 15px; border: 2px solid var(--accent-color); border-radius: 8px; background: rgba(128,128,128,0.05);">
                            <strong style="font-size: 1.1rem; color: var(--accent-color);">${day.pl}:</strong> 
                            <span style="font-size: 1rem;">${day.meaning}</span>
                        </div>
                    `;
                })()}
            </div>
        </section>
        <section class="info-block" style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;"><h3 style="margin: 0;">🎂 ${state.isPolish ? 'Imieniny' : 'Name Days'}</h3><button id="navSearch" class="pill-btn" title="${state.isPolish ? 'Szukaj Imienin' : 'Name Day Search'}" style="background: #dc3545; color: white; border: none; padding: 8px 16px; border-radius: 20px; font-size: 0.9rem; cursor: pointer; white-space: nowrap;">${state.isPolish ? '🔍 Szukaj Imienin' : '🔍 Name Day Search'}</button></div>
            <div id="namedaysList" class="namedays-list" style="padding: 15px; background: rgba(128,128,128,0.05); border-radius: 8px;">
                <p class="namedays-placeholder" style="color: #999; font-style: italic;">Select a date to see name days</p>
            </div>
        </section>
        <section class="info-block" style="margin-bottom: 20px;">
            <h3>📊 ${state.isPolish ? 'Święta państwowe, tradycje i wydarzenia historyczne' : 'Bank holidays, traditions and historical events'}</h3>
            <div class="holiday-list">`;

    let foundHoliday = false;
    Object.entries(holidays).forEach(([key, holidayName]) => {
        // Only show holidays for the SELECTED DATE, not all month
        if (key === `${monthIndex}-${day}`) {
            const dayNum = day;
            
            // 1. Get the data object (fallback to tradition if not found)
            const info = culturalData.holidayExplanations[key] || 
                         culturalData.holidayExplanations[holidayName] || 
                         { text: "", type: "tradition" };

            const isHoliday = info.type === "holiday";
            const capitalizedMonthGenitive = monthInfo.pl.charAt(0).toUpperCase() + monthInfo.pl.slice(1);
            
            html += `
                <div class="holiday-entry ${isHoliday ? 'state-holiday' : 'tradition-item'}">
                    <div class="holiday-type-tag">${isHoliday ? (state.isPolish ? 'ŚWIĘTO PAŃSTWOWE' : 'OFFICIAL HOLIDAY') : (state.isPolish ? 'TRADYCJA' : 'TRADITION')}</div>
                    <div class="holiday-title">
                        <strong>${dayNum}. ${capitalizedMonthGenitive}:</strong> ${holidayName}
                    </div>
                    ${info.text ? `<p class="holiday-desc">${info.text}</p>` : ''}
                </div>`;
            foundHoliday = true;
        }
    });

    // Check for pagan traditions on this date
    if (typeof paganTraditions !== 'undefined' && paganTraditions.hasPaganTradition(state.selectedDate)) {
        const tradition = paganTraditions.getPaganTradition(state.selectedDate, state.isPolish);
        const icon = paganTraditions.getIcon(tradition.type);
        const color = paganTraditions.getColor(tradition.type);
        
        html += `
            <div class="holiday-entry tradition-item" style="background: linear-gradient(135deg, ${color}22 0%, ${color}11 100%); border-left: 4px solid ${color};">
                <div class="holiday-type-tag">${state.isPolish ? 'TRADYCJA POGAŃSKA' : 'PAGAN TRADITION'}</div>
                <div class="holiday-title">
                    <strong>${icon} ${tradition.name}</strong>
                </div>
                <p class="holiday-desc">${tradition.description}</p>
            </div>`;
        foundHoliday = true;
    }


    if (!foundHoliday) {
        html += `<p class="no-data">${state.isPolish ? 'Brak głównych świąt w tym miesiącu.' : 'No major holidays this month.'}</p>`;
    }

    html += `</div></section>
        
        
        </div>`;

    hub.innerHTML = html;
    
    // Translate back button and search button
    const cultureBackBtn = document.getElementById('cultureBackBtn');
    const cultureSearchBtn = hub.querySelector('#navSearch');
    if (cultureBackBtn) {
        cultureBackBtn.onclick = () => document.getElementById('navCalendar').click();
        cultureBackBtn.innerText = state.isPolish ? "Wróć" : "Back";
    }
    if (cultureSearchBtn) {
        cultureSearchBtn.innerHTML = state.isPolish ? "🔍 Szukaj Imienin" : "🔍 Name Day Search";
    }
    
    // Update namedays display after HTML is inserted
    if (state.selectedDate) {
        // Use setTimeout to ensure DOM is fully rendered
        setTimeout(() => {
            updateNamedaysDisplay(state.selectedDate);
        }, 0);
    }
}

/**
 * Renders the Grammar Rules page
 */

export function renderRulesPage(state) {
    const page = document.getElementById('rulesPage');
    if (!page) return;
    
    // Put button at TOP, outside content-body (like Cultural page)
    page.innerHTML = `
        <button id="rulesBackBtn" class="pill-btn back-to-cal">Back</button>
        <h1>${state.isPolish ? "Zasady Gramatyczne" : "Grammar Rules"}</h1>
        <div class="content-body">
            ${getRulesHTML(state)}
        </div>`;
    const rulesBackBtn = document.getElementById('rulesBackBtn');
    if (rulesBackBtn) {
        rulesBackBtn.onclick = () => document.getElementById('navCalendar').click();
        rulesBackBtn.innerText = state.isPolish ? "Wróć" : "Back";
    }
    
    const helpBackBtn = document.getElementById('helpBackBtn');
    if (helpBackBtn) {
        helpBackBtn.onclick = () => document.getElementById('navCalendar').click();
        helpBackBtn.innerText = state.isPolish ? "Wróć" : "Back";
    }
}


function renderSearchPage(state) {
    const page = document.getElementById('nameSearchPage');
    if (!page) return;
    
    // Set up search button handler
    const searchBtn = document.getElementById('nameSearchBtn');
    const searchInput = document.getElementById('nameSearchInput');
    const resultsDiv = document.getElementById('nameSearchResults');
    const backBtn = document.getElementById('searchBackBtn');
    
    if (backBtn) {
        backBtn.onclick = () => document.getElementById('navCalendar').click();
        backBtn.innerText = state.isPolish ? "Wróć" : "Back";
    }
    
    // Translate search page title and button
    const searchTitle = page.querySelector('h2');
    if (searchTitle) {
        searchTitle.textContent = state.isPolish ? "🔍 Szukaj Imienin" : "🔍 Name Day Search";
    }
    if (searchBtn) {
        searchBtn.textContent = state.isPolish ? "Szukaj" : "Search";
    }
    
    // Handle search button click
    searchBtn.onclick = async () => {
        const searchName = searchInput.value.trim();
        
        if (!searchName) {
            resultsDiv.innerHTML = '<p style="color: #999; font-style: italic; text-align: center;">Please enter a name to search</p>';
            return;
        }
        
        // Show loading state
        resultsDiv.innerHTML = '<p style="color: #666; text-align: center;">Searching...</p>';
        
        try {
            // Call the global searchNameDays function from namedays.js
            if (typeof window.searchNameDays === 'function') {
                const results = await window.searchNameDays(searchName);
                
                if (results.length === 0) {
                    resultsDiv.innerHTML = `<p style="color: #999; text-align: center;">No dates found for "${searchName}"</p>`;
                } else {
                    // Build results HTML
                    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                                       'July', 'August', 'September', 'October', 'November', 'December'];
                    
                    let html = `<h3 style="margin-bottom: 15px;">Found ${results.length} date${results.length > 1 ? 's' : ''} for "${searchName}":</h3>`;
                    html += '<div style="max-height: 400px; overflow-y: auto;">';
                    
                    results.forEach(result => {
                        const monthName = monthNames[result.month - 1];
                        const dateStr = `${result.day} ${monthName}`;
                        
                        html += `
                            <div class="nameday-result-item" data-day="${result.day}" data-month="${result.month}" 
                                 style="padding: 12px; margin-bottom: 10px; background: rgba(128,128,128,0.05); border-radius: 8px; border-left: 4px solid var(--primary-color); cursor: pointer; transition: background 0.2s;"
                                 onmouseover="this.style.background='rgba(128,128,128,0.1)'" 
                                 onmouseout="this.style.background='rgba(128,128,128,0.05)'">
                                <strong style="color: var(--primary-color); font-size: 1.1em;">📅 ${dateStr}</strong>
                                <p style="margin: 5px 0 0 0; color: #666;">
                                    ${result.matchingNames.join(', ')}
                                </p>
                                <p style="margin: 5px 0 0 0; color: #999; font-size: 0.85em; font-style: italic;">
                                    Click to practice pronunciation
                                </p>
                            </div>`;
                    });
                    
                    html += '</div>';
                    
                    // Add grammar note
                    html += `
                        <div style="margin-top: 20px; padding: 15px; background: rgba(255, 193, 7, 0.1); border-left: 4px solid #FFC107; border-radius: 8px;">
                            <p style="margin: 0; color: #666; font-size: 0.9em;">
                                <strong>📝 Note:</strong> When you click a date, the app will switch to genitive case grammar 
                                (changing "Dzisiaj jest" to show the date in context: "It's on..."). 
                                This helps you practice the correct grammatical form for referring to specific dates.
                            </p>
                        </div>`;
                    
                    resultsDiv.innerHTML = html;
                    
                    // Add click handlers to all result items
                    const resultItems = resultsDiv.querySelectorAll('.nameday-result-item');
                    resultItems.forEach(item => {
                        item.onclick = () => {
                            const day = parseInt(item.dataset.day);
                            const month = parseInt(item.dataset.month);
                            
                            // Create date object for the selected day (using current year)
                            const selectedDate = new Date();
                            selectedDate.setMonth(month - 1); // month is 0-indexed
                            selectedDate.setDate(day);
                            
                            // Update state
                            state.selectedDate = selectedDate;
                            state.viewDate = new Date(selectedDate);
                            state.isFormal = true; // Switch to formal/genitive case
                            
                            // Navigate back to calendar and render
                            document.getElementById('navCalendar').click();
                        };
                    });
                }
            } else {
                resultsDiv.innerHTML = '<p style="color: red; text-align: center;">Search function not available</p>';
            }
        } catch (error) {
            console.error('Search error:', error);
            resultsDiv.innerHTML = '<p style="color: red; text-align: center;">Error performing search</p>';
        }
    };
    
    // Allow Enter key to trigger search
    searchInput.onkeypress = (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    };
    
    // Clear results and focus input when page is shown
    searchInput.value = '';
    resultsDiv.innerHTML = '<p style="color: #999; font-style: italic; text-align: center;">Enter a name to search</p>';
    setTimeout(() => searchInput.focus(), 100);
}

function getSeasonIcon(season) {
    if (season.includes("Wiosna")) return "🌱";
    if (season.includes("Lato")) return "☀️";
    if (season.includes("Jesień")) return "🍂";
    if (season.includes("Zima")) return "❄️";
    return "📅";
}
