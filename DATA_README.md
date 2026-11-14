# Included dataset inventory

The raw source CSVs supplied for this build are in `data/raw/`.

- `levent.1008weber(1).csv`: main expanded event catalog (13,057 rows, 38 columns).
- `gagnepian_2006_catalog(1).csv`: location catalog used for coordinate plot (58 rows).
- `lognonne_2003_catalog(1).csv`: related catalog preserved for traceability (59 rows).
- `collection_data_inventory(1).csv`: PDS inventory list.

The website transforms the main catalog and Gagnepian location catalog to JSON for local browser loading. Original CSV files remain unchanged in `data/raw/`.

## Additional NASA catalogue source
The NASA *Catalogue of Manmade Material on the Moon* (2012) is the source for Apollo landing-site object information and catalogue location values. It is not bundled; see `SOURCES.md` for the link.
