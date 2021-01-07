---
layout: default

---
## RDL Schema

The library schema is designed specifically for describing risk data in a consistent and accessible manner. It creates a structure for hazard, exposure, vulnerability and modelled loss datasets that make them easier to locate, understand and work with.

### Benefits

Designed to address the challenges of managing risk data

#### Common structure

The schema establishes a shared syntax across hazard, exposure, vulnerability and modelled loss data. This common foundation makes all schema-formatted datasets highly interoperable within and between data types.

#### Comprehensive detail

The lexicon of the RDL schema describes risk data at multiple levels of scale. For example, aggregarted national level or asset level. Giving risk experts a single language they can rely on, regardless of the level of data they are working with.

#### Machine and human-readable

The schema is designed to be easily comprehensible on its own, without the need for additional guides or references, which enables risk experts to quickly grasp and edit the contents of datasets they are working with. This also makes schema-formatted datasets readily machine-readable, supporting a wide range of applications.

#### Self-contained custom metadata

In addition to describing risk data, the schema also contains important metadata describing the nature and contents of risk datasets themselves. These metadata attributes have been specifically selected to help risk experts quickly locate and identify the datasets they need for a particular assessment. And because this metadata is included in the schema itself, it cannot become separated from the data it describes.

#### Linked datasets

Datasets can be connected to one another via the modeled loss dataset. This means you can retrieve a modeled loss dataset and immediately be provided with the exposure data, hazard data and vulnerability data used to generate those losses.

#### Comprehensive hazard datasets

The schema defines hazard data by not only the general hazard type, but allows definition of process type, of which there can be more than one for some hazards. For example the hazard type ‘earthquake’ includes ground shaking, ground deformation and liquefaction process types. Each process type has one or more associated intensity units, enabling flexibility to store data in original units.