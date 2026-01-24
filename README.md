# Polish Calendar Learning App - Changelog

## v1361 - Added Legend to Cultural Page
**Date**: January 24, 2026

### Changes
- **Added legend section to Cultural page**: Shows all 5 event types with visual examples
- **Bilingual support**: Legend text adapts to Polish/English mode
- **Consistent styling**: Matches calendar cell styling with colored bars
- Legend appears at bottom of Cultural page in events.js

---

## v1360 - Complete Color Swap Implementation
**Date**: January 24, 2026

### Changes
- **Fixed calendar tradition styling**: .is-tradition now blue (#2196f3)
- **Fixed detail page styling**: .tradition-item now blue (#2196f3)
- **Fixed historical event hover**: Now uses orange instead of blue
- **All color references updated**: Cultural Traditions → Blue, Historical Events → Orange
- Complete consistency across calendar, detail pages, help text, and legends

---

## v1359 - Final Packaging
**Date**: January 24, 2026

### Changes
- Final repackaging with all v1358 changes verified
- All files confirmed updated (styles.css, index.html, help.js, sw.js)

---

## v1358 - Color Swap & Cultural Page Consolidation
**Date**: January 24, 2026

### Changes
- **Color swap**: Cultural Traditions now blue (#2196f3), Historical Events now orange (#ff9800)
- **Cultural page updated**: Section renamed to "Bank holidays, traditions and historical events"
- All 5 event types consolidated in one unified legend section
- Legend boxes match calendar styling (top bar + subtle glow)
- Updated help.js, styles.css, and index.html for consistency

---

## v1357 - Double Bars Exclusive to Bank Holidays
**Date**: January 24, 2026

### Changes
- Double bar styling now **exclusive to bank holidays only**
- All other event types (cultural, historical, anniversaries, pagan) have single top bar
- Clear visual hierarchy distinguishing official public holidays

---

## v1355 - Prominent Double Red Bars
**Date**: January 24, 2026

### Changes
- Made bottom red bar same 5px thickness as top bar for bank holidays
- Both bars now equally prominent and eye-catching

---

## v1354 - Added Red Bottom Bar
**Date**: January 24, 2026

### Changes
- Public bank holidays now have red bars on BOTH top and bottom
- Enhanced visual prominence for official holidays

---

## v1346 - Complete Polish Holiday Coverage
**Date**: January 23, 2026

### New Fixed Holidays Added
- **Walentynki 💕** (Feb 14) - Valentine's Day / Day of Lovers
- **Dzień Flagi 🇵🇱** (May 2) - Day of the Flag celebrating national colors
- **Dożynki 🌾** (Aug 28) - Modern Christian Harvest Festival
- **Dzień Zwycięskiego Powstania Wielkopolskiego 🦅** (Dec 27) - Greater Poland Uprising Day
- **Sylwester 🎆** (Dec 31) - New Year's Eve celebrations

### New Moveable Holidays Added
- **Wielki Piątek ✝️** (Good Friday) - Easter -2 days
  - Way of the Cross processions, solemn observance
- **Wielka Sobota 🥚** (Holy Saturday) - Easter -1 day
  - Food blessing ceremony (Święconka) with baskets
- **Boże Ciało ✨** (Corpus Christi) - Easter +60 days
  - Spectacular street processions with flower carpets
- **Zielone Świątki 🌿** (Pentecost) - Easter +49 days
  - Enhanced with full description and emoji

### Enhanced Descriptions
- All new holidays have detailed cultural descriptions
- Explains traditions, customs, and significance
- Bilingual support maintained throughout

### Total Holiday Coverage
- **14 National Holidays** (official public holidays)
- **15+ Cultural Observances** (traditions and celebrations)
- **5 Pagan Traditions** (ancient Slavic festivals)
- **33+ Historical Events** (anniversaries and commemorations)

---

## v1345 - Śmigus-Dyngus Name Prominence & Pagan Traditions
**Date**: January 23, 2026

### Changes
- **Śmigus-Dyngus name prominence**: Easter Monday displays as "Śmigus-Dyngus (Lany Poniedziałek) 💧"
- Pagan traditions integrated with green theme
- Dark mode support for all themes

---

## Visual Legend

- 🏛️ **Bronze gradient** = Historical event occurred on this exact date
- 📅 **Purple gradient** = Anniversary of historical event
- 🌿 **Green gradient** = Ancient pagan tradition/festival
- 💧 **Water droplet** = Śmigus-Dyngus (Easter Monday water tradition)
- ✝️ **Cross** = Good Friday solemn observance
- 🥚 **Egg** = Holy Saturday food blessing
- ✨ **Sparkles** = Corpus Christi processions
- 🌾 **Wheat** = Harvest Festival (Dożynki)
- 🇵🇱 **Flag** = National patriotic observances
- 🎆 **Fireworks** = New Year's Eve (Sylwester)

## Complete Polish Calendar System

The app now provides comprehensive coverage of Polish culture:

### Christian Calendar (Moveable)
- Easter cycle with Holy Week observances
- Pentecost and Corpus Christi celebrations
- All major Catholic feast days

### National Holidays
- Independence Day, Constitution Day, Flag Day
- Labor Day, All Saints' Day
- Christmas and New Year celebrations

### Folk Traditions
- Harvest festivals (pagan and Christian)
- Seasonal celebrations
- Family observances (Grandparents, Mother's, Father's Days)

### Pagan Traditions
- Solstices: Kupala Night, Koliada
- Equinoxes: Spring and Autumn celebrations
- Ancestor veneration: Dziady

### Historical Commemorations
- 33+ significant dates in Polish history
- From ancient times to modern independence
- Battles, unions, and cultural milestones

---

## Version History

### v1.4.06 (2026-01-24)
**Complete UI Polish - Final Fixes**

#### ✅ Calendar Page Improvements:
1. **Day Name Phonetics Added** - Phonetic phrase now includes day of week pronunciation (e.g., "poh-nyeh-jah-wek" for Monday)
2. **Font Size Hierarchy Fixed**:
   - Main phrase: 1.2rem (largest)
   - Phonetic: 0.95rem (smaller)
   - English: 0.8rem (smallest)

#### ✅ Culture Page Fixes:
3. **Pagan Traditions Removed from Top** - No longer displays in separate section at top of page
4. **Pagan Tradition Tag Background** - Removed green background from tag, now uses default styling

#### ✅ Navigation Fixes:
5. **Rules Page Back Button** - Now properly floats in top-left corner with !important overrides

#### 📝 Documentation:
6. **Internal Folder Renamed** - Changed from v1400 to v1406 for consistency
7. **README.md Updated** - Added comprehensive changelog

#### Files Changed:
- `components/info-panel.js` - Added day name phonetics to phrase
- `styles/components/info-panel.css` - Fixed font size hierarchy
- `events.js` - Removed pagan traditions top section, fixed tag styling
- `index.html` - Added !important to rules back button positioning
- `README.md` - Added changelog

---

### v1.4.05 (2026-01-24)
**Polish and Formatting Release**

- ✅ Pagan traditions reformatted and moved to bottom
- ✅ Holidays heading updated
- ✅ Help page back button fixed
- ✅ Help page translation fixed
- ✅ Rules page back button positioning added

---

### v1.4.04 (2026-01-24)
**Comprehensive Bug Fix Release**

- ✅ Script paths fixed
- ✅ Name search fixed
- ✅ Pagan traditions scripts loading
- ✅ Help page headers translation
- ✅ Grammar page headers translation

---

### v1.4.00 (2026-01-24)
**Major Reorganization**

- 📁 Created folder structure: `data/`, `utils/`, `pages/`, `components/`
- 📦 Moved 13 files to appropriate folders
- 🔄 Renamed files for clarity
