# Catalist

This repository holds a categorised metadata catalogue of data providers that would be of interest to the PropTech and GeoTech sectors. This is held in a machine readable CSV file that can be processed into static HTML (or alternative) to provide an easy to use lookup.

## Fields

For each data source we record the folllowing fields:

| Field                   | Entry                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| Dataset Name            | The product name or closest descriptive name                                              |
| Provider                | The organisation providing the data service                                               |
| Category                | A primary category for the data - see [categories](#categories)                           |
| Secondary Category      | A secondary category for the data - see [categories](#categories)                         |
| Access Method           | How the data is accessed/provided such as format - see [access methods](#access-methods]) |
| Secondary Access Method | A secondary option for accessing the data - see [access methods](#access-methods])        |
| Licensing               | A top level description of the licensing: either Open or Premium                          |
| Description             | A brief description for the data source                                                   |
| Data Link               | A link to the data                                                                        |
| Docs Link               | A link to docs for the data                                                               |

## Example entry

| Field                   | Example                                                                                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dataset Name            | OS NGD Buildings                                                                                                                                                                                                                                                   |
| Provider                | Ordnance Survey                                                                                                                                                                                                                                                    |
| Category                | Buildings                                                                                                                                                                                                                                                          |
| Secondary Category      |                                                                                                                                                                                                                                                                    |
| Access Method           | OGC features                                                                                                                                                                                                                                                       |
| Secondary Access Method | Geopackage                                                                                                                                                                                                                                                         |
| Licensing               | Premium                                                                                                                                                                                                                                                            |
| Description             | The OS NGD Building Features Collection gives you access to the most current and comprehensive buildings data captured by Ordnance Survey as a standalone collection. Within this collection, there is the Building Line, Building Part and Building Feature type. |
| Data Link               | https://osdatahub.os.uk/                                                                                                                                                                                                                                           |
| Docs Link               | https://docs.os.uk/osngd/data-structure/buildings                                                                                                                                                                                                                  |

### Access methods

- Cloud Services
- CSV
- Geotiff
- OGC features
- Rest API
- Spatial Geometry File

### Categories

- Addressing
- Administrative Boundaries
- Buildings
- Climate & Weather
- Demographics
- Energy & Infrastructure
- History
- Land & Land Use
- Places & Points-of-Interest
- Retail
- Road & Transportation
- Satellite & Aerial Imagery
- Soil
- Terrain
- Vegetation
- Water & Hydrology

## Contributing

We invite contributions from the sector for any missing data sources - these could be ones that they offer themselves or just know about. We also welcome edits to the data if you believe it is innacurate.

If you would like to make any changes to the data please submit a pull request that includes your changes. This should be to the [catalist.csv](./data/catalist.csv) data file.

If you need guidance on submitting changes to a GitHub project see the [contributing to a project](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project) docs.

On submitting a PR it will be reviewed and assuming all looks reasonable it will be merged in.

## Licence

This Catalist data is made available under the [Open Database License](http://opendatacommons.org/licenses/odbl/1.0/). Any rights in individual contents of the database are licensed under the [Database Contents License](http://opendatacommons.org/licenses/dbcl/1.0/)
