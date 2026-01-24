# v1400 - Project Reorganization

## What Changed

The app has been reorganized into a clear folder structure for better maintainability and easier collaboration.

## New Structure

```
polish-calendar-app/
├── index.html              # Main HTML file
├── app.js                  # Main application orchestrator
├── events.js               # Event handlers (to be split further)
├── sw.js                   # Service worker
│
├── data/                   # Pure data exports
│   ├── cultural.js         # Month/day names and derivations
│   ├── holidays.js         # Holiday dates and explanations
│   ├── namedays.js         # Name day mappings
│   ├── namedays.json       # Name day data
│   ├── historical.js       # Historical events
│   ├── pagan.js            # Pagan traditions
│   └── phonetics.js        # Phonetic data
│
├── utils/                  # Pure utility functions
│   ├── numbers.js          # Number/date formatting
│   ├── colors.js           # Text colorization
│   ├── audio.js            # Speech synthesis
│   └── dates.js            # Date utilities
│
├── pages/                  # Page content generators
│   ├── help.js             # Help page content
│   └── grammar.js          # Grammar rules page
│
├── components/             # Reusable UI components
│   └── info-panel.js       # Date info display panel
│
└── styles/                 # CSS files (created but not yet used)
    ├── variables.css
    ├── base.css
    ├── layout.css
    ├── responsive.css
    ├── components/
    │   ├── buttons.css
    │   ├── calendar.css
    │   ├── info-panel.css
    │   └── navigation.css
    └── themes/
        └── dark-mode.css
```

## Import Path Changes

### Before (v1361):
```javascript
import holidayData from './holiday.js';
import culturalData from './cultural.js';
import { getWrittenDay } from './numbers.js';
```

### After (v1400):
```javascript
import holidayData from './data/holidays.js';
import culturalData from './data/cultural.js';
import { getWrittenDay } from './utils/numbers.js';
```

## Files Moved

| Old Location | New Location |
|--------------|--------------|
| `cultural.js` | `data/cultural.js` |
| `holiday.js` | `data/holidays.js` |
| `namedays.js` | `data/namedays.js` |
| `historical-events.js` | `data/historical.js` |
| `pagan-traditions.js` | `data/pagan.js` |
| `phonetics.js` | `data/phonetics.js` |
| `numbers.js` | `utils/numbers.js` |
| `color-utils.js` | `utils/colors.js` |
| `audio.js` | `utils/audio.js` |
| `year-utils.js` | `utils/dates.js` |
| `help.js` | `pages/help.js` |
| `rules.js` | `pages/grammar.js` |
| `ui-renderer.js` | `components/info-panel.js` |

## Benefits

✅ **Clear organization** - Easy to find files  
✅ **Logical grouping** - Related files together  
✅ **Better for collaboration** - Clear ownership  
✅ **AI-friendly** - Predictable patterns  
✅ **Scalable** - Easy to add new features  

## Next Steps (Future Versions)

1. Extract calendar rendering from events.js → pages/calendar.js
2. Extract cultural page from events.js → pages/cultural.js
3. Extract search page from events.js → pages/search.js
4. Split CSS into modular files (structure already created)
5. Simplify app.js to just orchestration

## Testing

After reorganization:
- [x] All imports updated
- [x] Service worker updated with new paths
- [ ] Local testing needed
- [ ] GitHub Pages deployment test

## Rollback

If issues arise, revert to v1361:
```bash
git checkout v1361
```
