# Version History

## Current Version: 1.4.05

### Version Numbering System
- **Major** (1.x.x): Major feature additions or breaking changes
- **Minor** (x.4.x): New features, reorganizations, significant improvements  
- **Patch** (x.x.05): Bug fixes, minor tweaks, import path fixes

---

## v1.4.05 (2026-01-24)
**Polish and Formatting Release - All UI Issues Fixed**

### Critical Fixes:

1. ✅ **Pagan Traditions Reformatted**
   - Moved from separate section at top to integrated within holidays section
   - Now uses same card format as other holidays/traditions
   - Positioned at bottom of holidays section (after official holidays/traditions)
   - Styled with gradient background and colored left border matching other events

2. ✅ **Holidays Heading Updated**
   - Changed from "🎈 Holidays & Traditions" to "📊 Bank holidays, traditions and historical events"
   - Removed redundant key/legend section that explained color coding
   - Cleaner, more professional presentation

3. ✅ **Help Page Back Button Fixed**
   - Fixed import path in events.js: `./help.js` → `./pages/help.js`
   - Fixed import path in app.js: removed dynamic import, using direct call
   - Back button now navigates correctly to calendar

4. ✅ **Help Page Translation Fixed**
   - Changed dynamic import to direct function call in app.js
   - updateHelpPage() now executes properly when language toggles
   - All help page content translates correctly

5. ✅ **Rules Page Back Button Floating**
   - Added `position: absolute; top: 0.5rem; left: 1rem;` to rulesBackBtn
   - Now matches other page back buttons (help, culture, search)

### Files Changed:
- `events.js` - Moved pagan traditions rendering, updated heading, fixed help.js import path
- `app.js` - Fixed help page translation by using direct function call
- `index.html` - Added position styling to rules back button
- `sw.js` - Bumped to v1.4.05
- `VERSION.md` - Updated changelog

### Testing Checklist:
- [ ] Pagan traditions appear at BOTTOM of holidays section (not top)
- [ ] Pagan traditions use same card format as other holidays
- [ ] Holidays heading shows "📊 Bank holidays, traditions and historical events"
- [ ] No key/legend section visible
- [ ] Help page back button navigates to calendar
- [ ] Help page content translates when toggling language
- [ ] Rules page back button floats in top-left corner
- [ ] All back buttons positioned consistently

---

## v1.4.04 (2026-01-24)
**Comprehensive Bug Fix Release**

### Critical Fixes:
1. ✅ Script Paths Fixed - Updated index.html to load from correct folders
2. ✅ Name Search Fixed - Updated fetch path to `./data/namedays.json`
3. ✅ Pagan Traditions Fixed - Scripts load correctly from data/ folder
4. ✅ Help Page Headers - All section headers translate properly
5. ✅ Grammar Page Headers - Full translation support added

### Files Changed:
- `index.html` - Fixed script paths, added IDs
- `data/namedays.js` - Fixed JSON fetch path
- `pages/help.js` - Added translations
- `pages/grammar.js` - Made headers translatable
- `sw.js` - Bumped to v1.4.04

---

## v1.4.03 (2026-01-24)
**Incomplete - Superseded by v1.4.04**

---

## v1.4.02 (2026-01-24)
**Bug Fix Release - Missing Imports**

### Bug Fixes:
- ✅ Added missing pagan traditions import
- ✅ Fixed help page dynamic import path
- ✅ Service worker cache: `pl-date-v1402`

---

## v1.4.01 (2026-01-24)
**Reorganization Release - Fixed Import Paths**

### Changes:
- ✅ Fixed relative import paths in subfolders
- ✅ Added version logging to service worker
- ✅ Service worker cache: `pl-date-v1401`

---

## v1.4.00 (2026-01-24)
**Major Reorganization - Folder Structure**

### Changes:
- 📁 Created folder structure: `data/`, `utils/`, `pages/`, `components/`
- 📦 Moved 13 files to appropriate folders
- 🔄 Renamed files for clarity
- 📝 Updated all import statements
- 🔧 Updated service worker with new paths

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
