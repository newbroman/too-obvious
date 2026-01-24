# Version History

## Current Version: 1.4.03

### Version Numbering System
- **Major** (1.x.x): Major feature additions or breaking changes
- **Minor** (x.4.x): New features, reorganizations, significant improvements  
- **Patch** (x.x.03): Bug fixes, minor tweaks, import path fixes

---

## v1.4.03 (2026-01-24)
**Critical Bug Fix Release - Script Paths & Exports**

### Bug Fixes:
- ✅ Fixed pagan.js export from CommonJS to ES6 module
- ✅ Fixed index.html script paths: `namedays.js` → `data/namedays.js`
- ✅ Fixed index.html script paths: `pagan-traditions.js` → `data/pagan.js`
- ✅ Started grammar page header translation (partial)
- ✅ Service worker cache: `pl-date-v1403`

### Issues Resolved:
- Name search should now work (namedays.js loads correctly)
- Pagan traditions should now display (proper ES6 export)
- Grammar page headers now partially translate

### Known Issues:
- Culture page headers may need verification
- Grammar page needs complete translation coverage
- Rules page back button floating needs testing

---

## v1.4.02 (2026-01-24)
**Bug Fix Release - Missing Imports**

### Bug Fixes:
- ✅ Added missing pagan traditions import to events.js
- ✅ Fixed help page dynamic import path: `./help.js` → `./pages/help.js`
- ✅ Service worker cache: `pl-date-v1402`

### Issues Resolved:
- Pagan traditions now display on calendar
- Help page language toggle now works correctly

---

## v1.4.01 (2026-01-24)
**Reorganization Release - Fixed Import Paths**

### Changes:
- ✅ Fixed relative import paths in subfolders (components/, utils/, pages/)
- ✅ `components/info-panel.js`: Changed `./utils/` → `../utils/`
- ✅ `utils/numbers.js`: Changed `./data/` → `../data/`
- ✅ `pages/grammar.js`: Changed `./utils/` → `../utils/`
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
