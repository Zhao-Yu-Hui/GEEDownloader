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
  'fileNamePrefix': '%index_%time'
  'time_format': '%Y%m%d'
}
```
- The key in `options` is same as `Export.image.toDrive` except `Image` and `time_format`. See also <https://developers.google.com/earth-engine/apidocs/export-image-todrive>.
- You can include "%time" or "%index" in `fileNamePrefix`, which will be replaced with image time and sequence number.
- `time_format` will be use to control time format if "%time" is included in `fileNamePrefix`. This is all format codes.
  | Directive | Meaning |
  | ---- | ---- |
  | %Y | year |
  | %m | month |
  | %d | day |
  | %H | hour |
  | %M | minute |
  | %S | second |
  | %% | char '%' |

### 3. download
```javascript
lib.downloadImageCollection(
  collection, // your collection, type ee.ImageCollection
  folder, // exported folder in your Google Drive, type string
  options // download options, type object
)
```

## License
MIT

## 
