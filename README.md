# Say the date in Polish

A calendar-based Polish learning app: pick any date and see and hear how to say it in Polish, with phonetics, name days, holidays and historical events.

**Live app:** https://newbroman.github.io/too-obvious/

## Features

- Month calendar with month selector, year input (-1000 to 3000), previous/next buttons and swipe navigation on touch screens.
- Selecting a date shows the Polish phrase, a phonetic rendering and the English translation, with a Listen button that speaks the Polish using the browser's speech synthesis.
- Two phrasing modes, toggled from the header: "Today is" (nominative, for answering "what day is it?") and "It's on" (genitive, the written form used for appointments).
- A YEAR ON/OFF toggle to include or leave out the year in the spoken date.
- Grammar-based colour coding of the words in the Polish phrase, explained on the Grammar page.
- English/Polish interface toggle (EN/PL), including the help and grammar pages.
- Calendar markers for event types, each with its own colour bar: bank holidays (red, double bar), cultural traditions (blue), historical events (orange), anniversaries (purple) and pagan traditions (green). A legend is shown on the Culture page.
- Culture page: month name derivations, bank holidays, traditions and historical events, and a name-day section (Imieniny).
- Name Day Search: look up a name to find the dates it is celebrated, then click a result to practise that date.
- Grammar page covering ordinal numbers and written (genitive) versus spoken (nominative) dates.
- Help page, light/dark theme following the system setting, and a seasonal colour theme that follows the month shown.
- Moveable holidays are calculated from Easter (for example Good Friday, Corpus Christi and Pentecost).

## Using it

Open the live app in a modern browser. On a phone or tablet, use "Add to Home Screen" (or the browser's install option) to install it as a PWA; it has a web manifest and a service worker.

Audio uses the Web Speech API. For proper Polish pronunciation your device needs a Polish (pl-PL) voice installed. If none is found the app falls back to the first available voice, which will sound wrong. On mobile the first tap unlocks audio.

The service worker precaches the main files, so the app is intended to work offline. See the Notes about its asset paths.

## Project structure

| Path | Purpose |
|------|---------|
| `index.html` | Page markup for all views (calendar, culture, grammar, help, name search) |
| `app.js` | Entry point: state, calendar rendering, language and mode toggles, service worker registration |
| `events.js` | Event handlers, culture page and name search rendering, swipe navigation |
| `data/` | Data modules: month/day names, holidays, name days (`namedays.json`), historical events, pagan traditions, phonetics |
| `utils/` | Number and year-to-Polish conversion, date/era helpers, phrase colouring, speech synthesis |
| `pages/` | Help page (`help.js`) and grammar page (`grammar.js`) content |
| `components/info-panel.js` | The phrase, phonetics and English panel at the foot of the page |
| `styles.css` | The stylesheet the app loads |
| `debug-button.css` | Button overrides; listed in `sw.js` but not linked from `index.html` |
| `styles/` | Split-out CSS from the v1.4.00 reorganisation; not linked from `index.html` |
| `sw.js`, `manifest.json`, icons | Service worker, PWA manifest and app icons (PNG and WebP) |
| `VERSION.md`, `COMPREHENSIVE_CHANGELOG.md`, `REORGANIZATION.md` | Version history, v1346 holiday coverage changelog, and the v1.4.00 folder reorganisation notes |

## Development

There is no build step. Serve the folder with any static server and open the page:

```
python3 -m http.server
```

then open http://localhost:8000.

`sw.js` uses a versioned cache (`CACHE_NAME`, currently `pl-date-v1448`, with a matching `VERSION` string). Bump both whenever you change any cached file, otherwise returning visitors keep the old copy.

## Notes

- `sw.js` lists its assets with leading-slash paths (`/index.html`, `/app.js` and so on). That works when the app is served from a domain root, as in the local server above, but on the GitHub Pages project URL (`/too-obvious/`) those resolve to the wrong place. Relative paths would be more reliable there. The list also omits some modules the app imports (`utils/numbers.js`, `utils/dates.js`, `utils/colors.js`, `data/phonetics.js`, `pages/grammar.js`), so offline use may be incomplete.
- This is the current version of the app; the earlier "obvious" repository is superseded.
- Events are stored as data in `data/`. Holiday coverage as of v1346 is about 14 national holidays, 15+ cultural observances, 5 pagan traditions and 33+ historical events; see `COMPREHENSIVE_CHANGELOG.md`.

### Recent version history

Earlier notes are in `VERSION.md` (1.4.00 to 1.4.05). The cache version in `sw.js` is now 1.4.48.

- **v1.4.06 (2026-01-24):** day-name phonetics added to the phrase (for example "poh-nyeh-jah-wek" for Monday); phrase font hierarchy fixed (main 1.2rem, phonetic 0.95rem, English 0.8rem); pagan traditions removed from the top of the Culture page and their tag background removed; Rules page back button fixed in the top-left corner.
- **v1361:** legend added to the Culture page showing all five event types, bilingual.
- **v1358 to v1360:** colour swap (cultural traditions blue `#2196f3`, historical events orange `#ff9800`) applied across calendar, detail pages, help text and legends; Culture section renamed "Bank holidays, traditions and historical events".
- **v1354 to v1357:** bank holidays given red bars on both top and bottom (5px each); double bars reserved for bank holidays, with a single top bar for all other types.
- **v1346:** complete Polish holiday coverage: Walentynki, Dzień Flagi, Dożynki, Wielkopolska Uprising Day, Sylwester, Wielki Piątek, Wielka Sobota, Boże Ciało and Zielone Świątki, all with bilingual descriptions.
- **v1345:** Easter Monday shown as "Śmigus-Dyngus (Lany Poniedziałek)"; pagan traditions integrated with a green theme and dark mode support.

Built by Martin Hollingham.
