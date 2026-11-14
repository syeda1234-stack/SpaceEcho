# SpaceEcho — Interactive Planetary Archive

SpaceEcho is an educational, child-friendly archive about space hardware and mission legacies across the Moon, Mars, asteroids and deep space.

## Run locally

This project uses plain HTML, CSS and JavaScript. No npm install or build step is required.

1. Extract the ZIP file.
2. Open a terminal in the `SpaceEcho` folder.
3. Run:

   ```bash
   python3 -m http.server 8000
   ```

4. Open `http://localhost:8000` in Chrome.
5. Keep the terminal running while you use the site. Press `Ctrl+C` to stop the server.

Do not open `index.html` directly as a `file://` URL: the local NASA dataset is loaded with `fetch()` and needs a local web server.

## Main experience

- Choose **The Moon**, **Mars**, or **Beyond**.
- The Moon and Mars begin as full-globe overview illustrations.
- Scroll or use the `+` / `−` controls to zoom. Drag to pan.
- Mission labels appear as the view zooms in. Select a glowing pin to open its mission panel. The Moon includes Apollo 11 and the Apollo 12, 14, 15, 16 and 17 object catalogues, Surveyor 3, ALSEP and the Lunar Roving Vehicles; Mars includes Sojourner, Spirit, Opportunity, Viking 1 and 2, Phoenix, InSight and Ingenuity.
- The marker layer is constrained to the actual displayed globe image, so pins do not float in the surrounding space. Landing-site coordinates are included in the detail panels where available.
- The mission panel is hidden until a pin is selected. It shows only the selected mission's story, status, source and any matching mission photograph included in the archive.
- Selecting another world closes the previous mission panel.
- Beyond is a separate asteroid/deep-space story field; it does not imply that every featured spacecraft is located on one asteroid. It includes Dawn at Vesta and Ceres, NEAR Shoemaker at Eros, Pioneer 10, Pioneer 11 and the Kepler Space Telescope.

## Image and location accuracy

The full-globe Moon and Mars overview images are AI-generated illustrations. They are visual orientation aids, not NASA imagery or scientific basemaps. Pins are kept on the visible globe and arranged to reflect the relative landing-site distribution, but they are not a substitute for a cartographic coordinate projection. Where known, exact landing-site coordinates are written in the mission panel.

The archive contains a mixture of locally bundled NASA mission photographs, NASA-hosted photographs loaded online, NASA artist concepts/models, an infographic, and AI-generated illustrations. The exact provenance and classification of each visual is listed in `assets/IMAGE_CREDITS.md`. The seven optional NASA image files listed in `assets/images/nasa/DOWNLOAD_THESE.md` are not currently bundled in that folder; the site attempts to load their official NASA-hosted copies online. The Dawn-at-Ceres panel uses two different NASA images of the same dwarf planet: PIA21906 (high-resolution Occator Crater view) and PIA19167 (an earlier approach image). If a Dawn image cannot load, a clearly labelled AI-generated fallback illustration is used. AI-generated artwork is not presented as NASA imagery or a mission photograph.

## NASA dataset

The project includes the expanded Apollo seismic event catalog in `data/main_catalog.json`, plus supporting summary and lunar-location files. See `DATA_README.md` and `SOURCES.md` for dataset provenance and field notes. The site loads these local files for the Apollo catalog visualizations retained in the project source.

## Project files

- `index.html` — page structure
- `styles.css` — responsive layout and visual styling
- `app.js` — world switching, pan/zoom, mission pins, mission details and data interactions
- `solar.js` — solar-system scene interactions
- `guide.js` — first-time explorer guide
- `fx.js` — visual effects and interface enhancements
- `assets/images/` — overview illustrations and mission photographs
- `assets/IMAGE_CREDITS.md` — image descriptions and credits
- `data/` — NASA-derived Apollo catalog data and supporting files
- `SOURCES.md` — references and source notes

## Important note

SpaceEcho is an independent educational project and is not affiliated with or endorsed by NASA. NASA mission names, public information and source imagery are referenced for educational purposes; image rights and terms remain with their respective owners.

## Immersive explorer update
The primary experience is the full-screen planetary explorer. Select Moon, Mars or Beyond, zoom to reveal story pins, and select a pin to open one mission at a time in the light detail panel. A small star button opens a three-question quiz for the currently selected world. Beyond uses a destination gallery for Vesta, Ceres, Eros and deep-space missions instead of pretending they all occupy one surface map. Dawn at Ceres displays two different views of Ceres. All mission imagery is captioned and credited; artist concepts are clearly distinguished from NASA photographs.


## First-time explorer guide

On first visit, SpaceEcho opens a short five-step guide explaining world selection, zooming, mission pins, mission story panels and the junior explorer quiz. Use the **? How to explore** control above the globe to reopen it at any time.

The Moon and Mars are displayed as large, centered globe illustrations on entry. Use the mouse wheel/trackpad or +/− controls to zoom, drag to pan, and the home control to reset the view.

## Expanded Apollo, Viking and Phoenix archive
The mission detail panel includes an Apollo object record for Apollo 11, 12, 14, 15, 16 and 17, based on NASA's 2012 *Catalogue of Manmade Material on the Moon*. The NASA catalogue PDF was downloaded separately and is kept in the project creator’s Downloads folder; it is not included in this ZIP or repository. The public NASA source link is listed in `SOURCES.md`.

ALSEP has a separate real Apollo 14 deployment photograph (AS14-67-9361). Apollo 12 includes a real photograph of Pete Conrad examining Surveyor 3. Viking's detail gallery separates Viking 1 and Viking 2 surface photographs from spacecraft artist concepts and a lander model. Phoenix includes two distinct NASA images: the orbiter view (PIA10701) and the lander's surface panorama (PIA10735).

Mission stories are written in short, plain-language paragraphs, followed by an “In simple words” explanation and a source link. The mission location text uses the coordinates listed in NASA's 2012 lunar catalogue where available. Globe pins remain illustrative navigation points because the globe artwork is not a georeferenced map; the coordinate text is the location reference.

### Newly added Beyond record: Pioneer 11
The Beyond destination archive includes a separate Pioneer 11 entry, rather than folding it into Pioneer 10. Its story covers the 1973 launch, Jupiter and Saturn flybys, the 1990 Neptune-orbit crossing, the last contact in September 1995 and final engineering data received in November 1995. The panel includes NASA/Ames archival plaque imagery and an actual Pioneer 11 photograph of Saturn from the 1979 flyby. The plaque is correctly identified as a message carried by both Pioneer 10 and Pioneer 11.


## Complete integrated build
This ZIP combines the full SpaceEcho archive, the interactive full-globe explorer, the expanded Apollo and Mars mission records, the Apollo seismic dataset and the Pioneer 11 Beyond entry with its supplied NASA/Ames imagery. JavaScript syntax and local data-file structure were checked during preparation. A complete live browser check of every mission panel, external image fallback and interaction remains to be performed on the project owner’s device.


## Cleanup notes (latest build)
Removed the unused 4 MB concept image, the bundled 5 MB NASA PDF and the internal build/checklist notes; recompressed images (project went from 34 MB to about 14 MB); stripped empty fields from `data/main_catalog.json` (same records, smaller file). Restored the NASA seismic data section, which an old CSS rule was hiding, and removed the duplicate artifact grid, stories, timeline and quiz sections that repeated the explorer.


## Apollo "Left behind" lists
Each Apollo panel (11, 12, 14, 15, 16, 17) includes a "Left behind on the Moon" list built from NASA's 2012 *Catalogue of Manmade Material on the Moon* (NASA History Program Office). It is a selection of items, with counts as the catalogue lists them. Exact positions are not shown.
