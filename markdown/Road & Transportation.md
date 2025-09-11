---
title: Road & Transportation
has_children: false
parent: Catalist
nav_order: 11
---

# Road & Transportation

| Name                                                                                                | Provider                 | Licensing | Data link 1                                                                                                    | Data link 2                                                                                                                       | Docs link                                                                                                                           |
| --------------------------------------------------------------------------------------------------- | ------------------------ | --------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [Overture Maps Foundation - Transporting Layer](#overture-maps-foundation---transporting-layer)     | Overture Maps Foundation | Open      | [Data link 1](https://docs.overturemaps.org/getting-data/)                                                     | [Data link 2]()                                                                                                                   | [Docs link](https://docs.overturemaps.org/guides/transportation/)                                                                   |
| [OS NGD Transport](#os-ngd-transport)                                                               | Ordance Survey           | Premium   | [Data link 1](https://www.ordnancesurvey.co.uk/products/os-ngd-api-features#get)                               | [Data link 2]()                                                                                                                   | [Docs link](https://docs.os.uk/osngd/data-structure/transport)                                                                      |
| [Network Rail Data Feeds](#network-rail-data-feeds)                                                 | Network Rail             | Open      | [Data link 1](https://www.rspaccreditation.org/publicDocumentation.php#RSPS5xxx)                               | [Data link 2]()                                                                                                                   | [Docs link](https://publicdatafeeds.networkrail.co.uk/ntrod/account/profile)                                                        |
| [Road Collisions](#road-collisions)                                                                 | Department for Transport | Open      | [Data link 1](https://www.data.gov.uk/dataset/cb7ae6f0-4be6-4935-9277-47e5ce24a11f/road-accidents-safety-data) | [Data link 2](https://cran.r-project.org/web/packages/stats19/index.html)                                                         | [Docs link](https://www.gov.uk/guidance/road-accident-and-safety-statistics-guidance)                                               |
| [Real-Time Location Estimates](#real-time-location-estimates)                                       | BT                       | Premium   | [Data link 1](https://business.bt.com/iot/active-intelligence/location-insights/#getintouch)                   | [Data link 2]()                                                                                                                   | [Docs link](https://developer.bt.com/products/real-time-location-insights)                                                          |
| [Rail Insights](#rail-insights)                                                                     | BT                       | Premium   | [Data link 1](https://business.bt.com/iot/active-intelligence/journey-insights/#getintouch)                    | [Data link 2]()                                                                                                                   | [Docs link](https://developer.bt.com/products/rail-network-api)                                                                     |
| [Bus Open Data Service](#bus-open-data-service)                                                     | Department for Transport | Open      | [Data link 1](https://data.bus-data.dft.gov.uk/downloads/)                                                     | [Data link 2]()                                                                                                                   | [Docs link](https://data.bus-data.dft.gov.uk/guidance/requirements/)                                                                |
| [HERE Traffic Flow & Incidents](#here-traffic-flow-&-incidents)                                     | HERE Technologies        | Premium   | [Data link 1](https://www.here.com/docs/bundle/traffic-api-v7-api-reference/page/index.html)                   | [Data link 2]()                                                                                                                   | [Docs link](https://www.here.com/docs/bundle/traffic-api-developer-guide-v7/page/README.html)                                       |
| [OS Open Roads](#os-open-roads)                                                                     | Ordnance Survey          | Open      | [Data link 1](https://osdatahub.os.uk/downloads/open/OpenRoads)                                                | [Data link 2](https://docs.os.uk/os-apis/accessing-os-apis/os-downloads-api/technical-specification/download-an-opendata-product) | [Docs link](https://docs.os.uk/os-downloads/networks/os-open-roads)                                                                 |
| [National Public Transport Access Nodes (NaPTAN)](#national-public-transport-access-nodes-(naptan)) | Department for Transport | Open      | [Data link 1](https://beta-naptan.dft.gov.uk/download)                                                         | [Data link 2]()                                                                                                                   | [Docs link](https://www.gov.uk/government/publications/national-public-transport-access-node-schema/naptan-guide-for-data-managers) |

## Overture Maps Foundation - Transporting Layer

LineString and Point data representing transport nodes and links. Covers rail, road, water, and active travel. Data is sourced primarily from OpenStreetMap, and supplemented by TomTom.

- **Category:** Road & Transportation
- **Secondary Category:** 
- **Provider:** Overture Maps Foundation
- **Licensing:** Open
- **Data link 1:** [Data link 1](https://docs.overturemaps.org/getting-data/)
- **Data link 2:** [Data link 2]()
- **Docs link:** [Docs link](https://docs.overturemaps.org/guides/transportation/)



## OS NGD Transport

The OS NGD Transport Features Collection provides the most detailed topographic data available of the physical transport environment of Great Britain. The collection is made up of individual real-world topographic transport features, including roads, railway lines, tracks, and paths. Also includes streetlights.

- **Category:** Road & Transportation
- **Secondary Category:** 
- **Provider:** Ordance Survey
- **Licensing:** Premium
- **Data link 1:** [Data link 1](https://www.ordnancesurvey.co.uk/products/os-ngd-api-features#get)
- **Data link 2:** [Data link 2]()
- **Docs link:** [Docs link](https://docs.os.uk/osngd/data-structure/transport)



## Network Rail Data Feeds

Real-time arrival and departure predictions, platform numbers, delay estimates, schedule changes and cancellations.

- **Category:** Road & Transportation
- **Secondary Category:** 
- **Provider:** Network Rail
- **Licensing:** Open
- **Data link 1:** [Data link 1](https://www.rspaccreditation.org/publicDocumentation.php#RSPS5xxx)
- **Data link 2:** [Data link 2]()
- **Docs link:** [Docs link](https://publicdatafeeds.networkrail.co.uk/ntrod/account/profile)



## Road Collisions

Details about road collisions, including location, severity, date and time, and various details about the road and pedestrian infrastructure and conditions surrounding the incident. Two separate tables provide details about the casualties and vehicles respectively. Files are split by year, and can be accessed programmatically using an R Package. 

- **Category:** Road & Transportation
- **Secondary Category:** 
- **Provider:** Department for Transport
- **Licensing:** Open
- **Data link 1:** [Data link 1](https://www.data.gov.uk/dataset/cb7ae6f0-4be6-4935-9277-47e5ce24a11f/road-accidents-safety-data)
- **Data link 2:** [Data link 2](https://cran.r-project.org/web/packages/stats19/index.html)
- **Docs link:** [Docs link](https://www.gov.uk/guidance/road-accident-and-safety-statistics-guidance)



## Real-Time Location Estimates

Near-real-time population count estimates, broken down by age, gender, home & work, international visitors and percentage of the dwelling population compared to the moving population. Data updated every 15 minutes. Figures aggregated to H3 grid size 10 (each hex is ~1.5% of a square kilometer), or to LSOA. BT supplies related products for footfall to/from specific locations of interest. Other mobile network providers offer similar products:
O2 - https://www.o2.co.uk/business/solutions/mobile/data-mobile/o2-motion
Vodafone - https://developer.vodafone.com/api-catalogue/vodafone-analytics-realtime-footfall/overview

- **Category:** Demographics
- **Secondary Category:** Road & Transportation
- **Provider:** BT
- **Licensing:** Premium
- **Data link 1:** [Data link 1](https://business.bt.com/iot/active-intelligence/location-insights/#getintouch)
- **Data link 2:** [Data link 2]()
- **Docs link:** [Docs link](https://developer.bt.com/products/real-time-location-insights)



## Rail Insights

Various insights into rail demographics and statistics: passenger volumes, station catchments, origin/destination, onboarders/alighters, rail-vs-road proportions.

- **Category:** Road & Transportation
- **Secondary Category:** Demographics
- **Provider:** BT
- **Licensing:** Premium
- **Data link 1:** [Data link 1](https://business.bt.com/iot/active-intelligence/journey-insights/#getintouch)
- **Data link 2:** [Data link 2]()
- **Docs link:** [Docs link](https://developer.bt.com/products/rail-network-api)



## Bus Open Data Service

Engish bus data updated every 14 hours including timetabling, routes, fares, and live location. Live location data is updated every 10 seconds. There is also limited disruption data, updated every minute, and coach data updated once a week. Data is supplied as XML. Because the data is compiled from various bus services, the data standardisation, completeness, and quality is inconsistent. Real-time data coverage is also incomplete.

- **Category:** Road & Transportation
- **Secondary Category:** 
- **Provider:** Department for Transport
- **Licensing:** Open
- **Data link 1:** [Data link 1](https://data.bus-data.dft.gov.uk/downloads/)
- **Data link 2:** [Data link 2]()
- **Docs link:** [Docs link](https://data.bus-data.dft.gov.uk/guidance/requirements/)



## HERE Traffic Flow & Incidents

Real-time traffic flow and incident data, compiled from various datasets including connected car probes, roadway sensors, and live operations centers. Flow/conjestion data is updated every minute and incident data every two minutes. Covers 70 countries besides the UK. Flow/congestion data includes jam ratings, expected speed (with confidence ratings depending on data availability), jam tendancy (whether conjestion is increasing or decreasing junction closure), and sometimes lane-specific information. Incident data is detailed and categorised with causes, times, criticality, junction transversability, and free-text descriptions. Restrictions are also included, including the vehicle type(s) and the restriction type (eg. emissions, weight, height, fuel type).

- **Category:** Road & Transportation
- **Secondary Category:** 
- **Provider:** HERE Technologies
- **Licensing:** Premium
- **Data link 1:** [Data link 1](https://www.here.com/docs/bundle/traffic-api-v7-api-reference/page/index.html)
- **Data link 2:** [Data link 2]()
- **Docs link:** [Docs link](https://www.here.com/docs/bundle/traffic-api-developer-guide-v7/page/README.html)



## OS Open Roads

High-level view of the road network in Great Britain, including motorways and country lanes. Includes road classification (motorway, B-road etc.) and road form-of-way (eg. sliproad, single carriageway, roundabout). Upcdated every six months.

- **Category:** Road & Transportation
- **Secondary Category:** 
- **Provider:** Ordnance Survey
- **Licensing:** Open
- **Data link 1:** [Data link 1](https://osdatahub.os.uk/downloads/open/OpenRoads)
- **Data link 2:** [Data link 2](https://docs.os.uk/os-apis/accessing-os-apis/os-downloads-api/technical-specification/download-an-opendata-product)
- **Docs link:** [Docs link](https://docs.os.uk/os-downloads/networks/os-open-roads)



## National Public Transport Access Nodes (NaPTAN)

All bus, rail, tram, metro, underground, air and ferry public transport access points in Great Britain. Includes stop names and indicators/disambiguators, as well as bearings for bus stops to indicate direction.

- **Category:** Road & Transportation
- **Secondary Category:** 
- **Provider:** Department for Transport
- **Licensing:** Open
- **Data link 1:** [Data link 1](https://beta-naptan.dft.gov.uk/download)
- **Data link 2:** [Data link 2]()
- **Docs link:** [Docs link](https://www.gov.uk/government/publications/national-public-transport-access-node-schema/naptan-guide-for-data-managers)
