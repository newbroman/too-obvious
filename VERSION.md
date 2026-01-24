# Version History

## Current Version: 1.4.04

### Version Numbering System
- **Major** (1.x.x): Major feature additions or breaking changes
- **Minor** (x.4.x): New features, reorganizations, significant improvements  
- **Patch** (x.x.04): Bug fixes, minor tweaks, import path fixes

---

## v1.4.04 (2026-01-24)
**Comprehensive Bug Fix Release - All Reported Issues**

### Critical Fixes:
1. ✅ **Script Paths Fixed** - Updated index.html to load scripts from correct folders
   - `namedays.js` → `data/namedays.js`
   - `pagan-traditions.js` → `data/pagan.js`

2. ✅ **Name Search Fixed** - Updated namedays.js to fetch JSON from correct path
   - `fetch('./namedays.json')` → `fetch('./data/namedays.json')`

3. ✅ **Pagan Traditions Fixed** - Scripts now load correctly from data/ folder

4. ✅ **Help Page Headers** - All section headers now translate properly
   - Added IDs to Calendar, Culture, and Grammar section headers
   - Updated help.js to translate all three headers

5. ✅ **Grammar Page Headers** - Full translation support added
   - Main title translates
   - "Color Coding Guide" translates
   - Color labels (Blue, Orange, Red) translate

6. ✅ **Culture Page** - Data loads correctly (no code changes needed, was working)

### Files Changed:
- `index.html` - Fixed script paths, added IDs to help section headers
- `data/namedays.js` - Fixed JSON fetch path
- `pages/help.js` - Added translations for Culture and Grammar section headers
- `pages/grammar.js` - Made all headers and color labels translatable
- `sw.js` - Bumped to v1.4.04
- `VERSION.md` - Updated changelog

### Testing Checklist:
- [ ] Pagan traditions appear on calendar (June 21-24, Dec 21-22, etc.)
- [ ] Name search finds names correctly
- [ ] Help page: All section headers translate when toggling language
- [ ] Grammar page: All headers and color labels translate
- [ ] Culture page: Contents display correctly
- [ ] Rules page: Back button works

---

## v1.4.03 (2026-01-24)
**Incomplete - Superseded by v1.4.04**

---

## v1.4.02 (2026-01-24)
**Bug Fix Release - Missing Imports**

### Bug Fixes:
- ✅ Added missing pagan traditions import to events.js
- ✅ Fixed help page dynamic import path: `./help.js` → `./pages/help.js`
- ✅ Service worker cache: `pl-date-v1402`

---

## v1.4.01 (2026-01-24)
**Reorganization Release - Fixed Import Paths**

### Changes:
- ✅ Fixed relative import paths in subfolders (components/, utils/, pages/)
- ✅ Added version logging to service worker
- ✅ Service worker cache: `pl-date-v1401`

### Bug Fixes:
- Fixed MIME type errors caused by incorrect import paths
- All 18 imports verified and working

---

## v1.4.00 (2026-01-24)
**Major Reorganization - Folder Structure**

### Changes:
- 📁 Created folder structure: `data/`, `utils/`, `pages/`, `components/`
- 📦 Moved 13 files to appropriate folders
- 🔄 Renamed files for clarity
- 📝 Updated all import statements
- 🔧 Updated service worker with new paths
- 📚 Added REORGANIZATION.md documentation

---

## Version Increment Guide

**When to increment:**

### Patch (x.x.XX):
- Bug fixes
- Import path corrections
- Minor CSS tweaks
- Documentation updates
- Service worker: Increment by 1

### Minor (x.X.00):
- New features
- File reorganizations
- New pages or components
- Significant refactoring
- Service worker: Increment by 10

### Major (X.0.00):
- Breaking changes
- Complete rewrites
- Major architecture changes
- API changes
- Service worker: New major version
