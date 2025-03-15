使用其他语言阅读：[English](README.md)

# GEEDownloader

一个从Google Earth Engine下载ImageCollection类型遥感影像的库

## 优点

使用了更少的`getInfo`，从而拥有更快的运行速度，避免了浏览器崩溃

## 快速开始

### 1. 导入库

```javascript
var lib = require('users/zhaoyuhui012/libs:libImageCollectionDownloader')
```

### 2. 设置下载可选参数

```javascript
options = {
  'fileNamePrefix': '%index_%time',
  'time_format': '%Y%m%d'
}
```

**参数说明**

- 可选参数

  > 除`time_format`和`folder`外，所有可选参数与官方`Export.image.toDrive` API相同。参见：<https://developers.google.com/earth-engine/apidocs/export-image-todrive>。包括：
  >
  > ```javascript
  > description, dimensions, crs, crsTransform, shardSize, fileDimensions, skipEmptyTiles...  
  > ```

- 特殊占位符说明

  > `fileNamePrefix` 支持两种占位符:

  | Placeholder | Replacement Content    | Example Value         |
  | ----------- | ---------------------- | --------------------- |
  | %time       | Image acquisition time | 20230615              |
  | %index      | System-generated index | 20230615T030729_60UXU |

  - Time Format Syntax
  > `time_format` 是一个用于控制`%time`的字符串，可使用以下占位符：

  | Directive | Meaning             | Example |
  | --------- | ------------------- | ------- |
  | %Y        | year                | 2025    |
  | %m        | month               | 03      |
  | %d        | day                 | 05      |
  | %H        | hour                | 08      |
  | %M        | minute              | 05      |
  | %S        | second              | 30      |
  | %%        | Escaped % character | %       |

### 3. 下载

```javascript
lib.downloadImageCollection(
  collection, // your collection, type ee.ImageCollection
  folder, // exported folder in your Google Drive, type string
  options // download options, type object
)
```

## 开源协议
MIT License (c) 2025 Zhao Yuhui
