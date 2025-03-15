Read this in other languages: [中文](README_zh_CN.md)

# GEEDownloader
A library for downloading ImageCollection from Google Earth Engine

## Advantage
Less `getinfo`, faster task creation and less browser crash

## Quick Start
### 1. import library
```javascript
var lib = require('users/zhaoyuhui012/libs:libImageCollectionDownloader')
```

### 2. set download options
```javascript
options = {
  'fileNamePrefix': '%index_%time',
  'time_format': '%Y%m%d'
}
```
**Parameter Details**
- Compatibility Parameters
> All parameters except `time_format` and `folder` align with the official `Export.image.toDrive` API.
> See also <https://developers.google.com/earth-engine/apidocs/export-image-todrive>.
> including:
```javascript
description, dimensions, crs, crsTransform, shardSize, fileDimensions, skipEmptyTiles...  
```

- Dynamic Naming Rules
> `fileNamePrefix` supports two placeholders:

| Placeholder | Replacement Content | Example Value |
| ---- | ---- | ---- |
| %time |	Image acquisition time | 20230615 |
| %index | System-generated index | 20230615T030729_60UXU |

- Time Format Syntax
> `time_format` controls the display format of %time, supporting these directives: 

| Directive | Meaning | Example |
| ---- | ---- | --- |
| %Y | year | 2025 |
| %m | month | 03 |
| %d | day | 05 |
| %H | hour | 08 |
| %M | minute | 05 |
| %S | second | 30 |
| %% | Escaped % character | % |

### 3. download
```javascript
lib.downloadImageCollection(
  collection, // your collection, type ee.ImageCollection
  folder, // exported folder in your Google Drive, type string
  options // download options, type object
)
```

## License
MIT License (c) 2025 Zhao Yuhui
