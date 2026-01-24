# Version History

## Current Version: 1.4.01

### Version Numbering System
- **Major** (1.x.x): Major feature additions or breaking changes
- **Minor** (x.4.x): New features, reorganizations, significant improvements
- **Patch** (x.x.01): Bug fixes, minor tweaks, import path fixes

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
- 🔄 Renamed files for clarity:
  - `holiday.js` → `data/holidays.js`
  - `color-utils.js` → `utils/colors.js`
  - `rules.js` → `pages/grammar.js`
  - `ui-renderer.js` → `components/info-panel.js`
- 📝 Updated all import statements
- 🔧 Updated service worker with new paths
- 📚 Added REORGANIZATION.md documentation

### Benefits:
- Clear organization by concern
- Easier to find and edit files
- Better for collaboration
- AI-friendly structure
- Scalable for future features

---

## v1.3.61 (Previous)
**Last Flat Structure Version**

- All files at root level
- 17 JavaScript files
- No folder organization
- Working version (backed up)

---

## v1.3.46 (Changelog Reference)
**Comprehensive Polish Calendar Coverage**

- Complete holiday coverage (29 holidays)
- Enhanced descriptions for all holidays
- Pagan traditions with historical context
- Fixed navigation icons
- Improved UI

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

---

## Next Version Targets

### v1.4.02 (Patch)
- Any bug fixes found after deployment
- Minor adjustments

### v1.5.00 (Minor)
- Extract calendar rendering → `pages/calendar.js`
- Extract cultural page → `pages/cultural.js`
- Extract search page → `pages/search.js`
- Split CSS into modular files

### v2.0.00 (Major)
- Widget implementation
- Mobile-first redesign
- Potential PWA enhancements
