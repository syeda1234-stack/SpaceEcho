# SpaceEcho — Sources & attribution

## Challenge and archive scope
- NASA Space Apps Challenge 2026, “Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars.” Challenge text and Resources list supplied by the participant in this conversation.
- NASA Space Science Data Coordinated Archive (NSSDCA): https://nssdc.gsfc.nasa.gov/
- NASA Planetary Data System, Apollo Passive Seismic Experiment Expanded Event Catalog bundle, Renee C. Weber (2019), DOI: https://doi.org/10.17189/1520573
- PDS bundle record: https://pds.nasa.gov/ds-view/pds/viewBundle.jsp?identifier=urn%3Anasa%3Apds%3Aapollo_seismic_event_catalog&version=1.0

## Data files used
- `levent.1008weber(1).csv` — supplied by the participant; main expanded event catalog. Preserved in `data/raw/` and transformed into `data/main_catalog.json` for browser use.
- `gagnepian_2006_catalog(1).csv` — supplied by the participant; coordinate catalog used for the lunar event-source plot. Preserved in `data/raw/`.
- `lognonne_2003_catalog(1).csv` — supplied by the participant; preserved in `data/raw/` for provenance, not used as the primary plotted dataset.
- `collection_data_inventory(1).csv` — supplied by the participant; preserved in `data/raw/`.
- `data/summary.json` is a derived count summary generated from the supplied main catalog. No measurements are fabricated.

## Mission references
- Apollo 11 Lunar Module: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C
- Apollo Lunar Roving Vehicle: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C
- Apollo 12 / ALSEP: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C
- Surveyor 3: https://science.nasa.gov/mission/surveyor-3/
- Mars Pathfinder / Sojourner: https://science.nasa.gov/mission/mars-pathfinder/
- Spirit & Opportunity: https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/
- Viking 1: https://science.nasa.gov/mission/viking-1/
- InSight: https://science.nasa.gov/mission/insight/
- Phoenix: https://science.nasa.gov/mission/phoenix/
- Ingenuity: https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/
- Dawn: https://science.nasa.gov/mission/dawn/
- NEAR Shoemaker: https://science.nasa.gov/mission/near-shoemaker/
- Pioneer 10: https://science.nasa.gov/mission/pioneer-10/
- Pioneer 11: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1973-019A
- Kepler: https://science.nasa.gov/mission/kepler/

## Image and branding policy
The project contains a mixture of locally bundled NASA photographs, NASA-hosted images loaded online, NASA artist concepts and model imagery, an infographic, and AI-generated illustrations. Each asset is classified with its caption, image ID where available, and source in `assets/IMAGE_CREDITS.md`. No NASA logo is used. The site identifies itself as an independent project and does not imply NASA endorsement.

## Optional NASA photo references for future image expansion
- Opportunity rover, “Opportunity’s View on Sol 354 (Vertical),” PIA07326, NASA/JPL: https://science.nasa.gov/photojournal/opportunitys-view-on-sol-354-vertical/
- Opportunity’s final Mars panorama, NASA/JPL-Caltech/Cornell/ASU: https://science.nasa.gov/resource/opportunity-rovers-final-mars-images/
- InSight’s first image from Mars, NASA/JPL-Caltech: https://science.nasa.gov/resource/insights-first-image-from-mars/
- Apollo 11 lunar surface photograph (AS11-40-5868), NASA Image and Video Library: https://images.nasa.gov/details/as11-40-5868

The current website uses custom CSS artwork for its cards and solar-system scene. These NASA image pages are linked here as verified image references; they are not embedded as local photo assets in this build.


## Interactive surface mapping portals

- NASA/JPL Moon Trek — https://trek.nasa.gov/moon/ (LRO WAC global mosaic and lunar map layers).
- NASA/JPL Mars Trek — https://trek.nasa.gov/mars/ (Mars global imagery and map layers).
- NASA/JPL Vesta Trek — https://trek.nasa.gov/vesta/ (Dawn mission target visualization).
- NASA/JPL description of Mars Trek — https://trek.nasa.gov/mars/jpl/config/textAbout.html.
- NASA/JPL Global CTX Mars mosaic background — https://www.jpl.nasa.gov/news/new-interactive-mosaic-uses-nasa-imagery-to-show-mars-in-vivid-detail/ (April 5, 2023; NASA/JPL-Caltech/MSSS).

The Moon and Mars overview backgrounds are AI-generated full-globe illustrations bundled locally as `assets/images/moon-global-generated.png` and `assets/images/mars-global-generated.png`. They are not NASA imagery, scientific basemaps or georeferenced maps. The story pins are illustrative navigation points, not plotted landing-site coordinates. Actual NASA mission photographs are displayed only in the matching mission detail panel and are separately captioned in `assets/IMAGE_CREDITS.md`. The pan/zoom viewer uses native browser interactions; no external map library or tile service is required.


## Mission imagery included in the website

The local image inventory and online NASA-hosted image references are listed separately in [`assets/IMAGE_CREDITS.md`](assets/IMAGE_CREDITS.md). The local NASA imagery includes Spirit (PIA05117), Opportunity (PIA05755), InSight SEIS (PIA22956), Ingenuity (PIA24541), Mars Pathfinder/Sojourner (PIA04315), Apollo 12/Surveyor 3 (AS12-48-7134), Apollo 14 ALSEP (AS14-67-9361), Phoenix images (PIA10701 and PIA10735), and Pioneer archival imagery. Seven additional NASA image files are referenced online but are not present in `assets/images/nasa/` in this ZIP.


## Map marker coordinate sources

- Apollo landing and ALSEP coordinates (DE421 lunar reference frame): NASA NSSDCA, https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html and https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloland.html .
- Surveyor 3 landing-site coordinates: NASA LRO/LROC anthropogenic-features catalog (Wagner et al., 2017), https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_artifact_impacts.html .
- Spirit and Opportunity landing-site cartographic triangulation coordinates; Pathfinder and Viking landing sites: Washington University PDS Geosciences Node, https://ode.rsl.wustl.edu/mars/pagehelp/Content/Missions_Instruments/Landing_Sites.htm .
- InSight landing-site center (approximate): NASA/JPL InSight landing site page, https://www.jpl.nasa.gov/news/press_kits/insight/landing/mission/landing-site/ .

Markers represent published landing/station sites, not a surveyed coordinate for every individual object. No precise marker is shown for individual Lunar Roving Vehicles or Ingenuity in this build.

## Visual overview images
The full-globe Moon and Mars overview images in `assets/images/` are AI-generated illustrations made for this project. They are not NASA imagery, scientific maps, or evidence of precise surface locations. The mission detail photographs are the separately credited NASA/JPL images listed in `assets/IMAGE_CREDITS.md`.

### Additional mission photographs added to the interactive mission panels
- Apollo 11 EASEP deployment beside the Eagle descent stage, NASA/JSC, AS11-40-5927: https://science.nasa.gov/resource/view-apollo-11-lunar-module-as-it-rested-on-lunar-surface/
- Apollo 15 Lunar Roving Vehicle and ALSEP scene, NASA/JSC, AS15-85-11471: https://science.nasa.gov/resource/apollo-15-mission-image-view-of-the-apollo-lunar-surface-experiments-package-alsep/
- Viking 1 first Mars surface photograph, NASA/JPL, PIA00381: https://photojournal.jpl.nasa.gov/catalog/PIA00381
- Phoenix lander on Mars, NASA/JPL-Caltech/University of Arizona, PIA10701: https://photojournal.jpl.nasa.gov/catalog/PIA10701
- Dawn high-resolution view of Ceres, NASA/JPL-Caltech/UCLA/MPS/DLR/IDA, PIA21906: https://science.nasa.gov/photojournal/high-resolution-ceres-view/
- Dawn approach image of Ceres, NASA/JPL-Caltech/UCLA/MPS/DLR/IDA, PIA19167: https://science.nasa.gov/photojournal/ceres-from-dawn-processed/
- Dawn surface view of Vesta, NASA/JPL-Caltech/UCLA/MPS/DLR/IDA, PIA15384: https://science.nasa.gov/photojournal/dawn-on-vesta/

The Ceres panel uses two different Dawn images of the same dwarf planet: one detailed Occator Crater view and one earlier approach image. The local Ceres fallback visuals are AI-generated and are labelled as such. Beyond destination tiles use artist concepts where no mission photograph is included.

## Added source material
- NASA, *Catalogue of Manmade Material on the Moon* (2012). A copy was downloaded separately and is kept in the project creator’s Downloads folder; it is not included in this ZIP or repository. The public source PDF is https://www.nasa.gov/wp-content/uploads/2024/02/final-catalogue-of-manmade-material-on-the-moon.pdf. It is used for Apollo object lists and recorded landing-site information. Catalogue entries with unknown or uncertain positions are not assigned invented coordinates.
- NASA Viking mission resources: https://science.nasa.gov/mars/resources/viking-mission-resources/ — Viking 1 and 2 lander/orbiter images, mission background, and clear distinction between photographs, models and artist concepts.
- NASA Viking 1 mission record: https://science.nasa.gov/mission/viking-1/ — landing site, landing date and mission details.
- NASA Phoenix PIA10701: https://science.nasa.gov/photojournal/color-image-of-phoenix-lander-on-mars-surface/ — HiRISE image of the lander from orbit.
- NASA Phoenix PIA10735: https://science.nasa.gov/photojournal/phoenix-site-panorama/ — Phoenix surface panorama showing parachute, backshell, heat shield and impact site.
- Apollo 14 AS14-67-9361: https://www.dvidshub.net/image/857870/apollo-14-mission-image-view-alsep-station (NASA courtesy image with NASA identifier); the Apollo 14 frame index is https://www.apollojournals.org/alsj/a14/images14.html.

## Pioneer 11 (Beyond archive)
- NASA Science, Pioneer mission overview and history: https://science.nasa.gov/mission/pioneer-10/
- NASA NSSDCA, Pioneer 11 spacecraft record (1973-019A): https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1973-019A
- NASA NSSDCA, Pioneer 10/11 project information, experiment and data-set links: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1973-019A
- NASA NSSDCA, Pioneer plaque image: https://nssdc.gsfc.nasa.gov/image/spacecraft/pioneer_plaque.jpg
- NASA NSSDCA, Pioneer 11 ends operations (September 29, 1995): https://nssdc.gsfc.nasa.gov/planetary/text/pioneer-11_endops.txt
- NASA NSSDCA, Pioneer 10/11 data and position resources: https://cohoweb.gsfc.nasa.gov/

The Pioneer 11 panel distinguishes the last contact date (September 30, 1995) from the receipt of a final short period of engineering data (November 24, 1995). The plaque is described as shared by Pioneer 10 and Pioneer 11. The Saturn, rings and Titan image used in the Pioneer 11 gallery is an actual image taken by Pioneer 11 during its September 1, 1979 flyby: https://science.nasa.gov/image-detail/amf-cf2ae57d-b5f0-42ea-b5e3-c955208bc278/.
