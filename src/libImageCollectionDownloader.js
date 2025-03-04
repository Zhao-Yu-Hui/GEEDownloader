var libParamInspector = require('users/zhaoyuhui012/libs:libParamInspector');
var libTimeConversion = require('users/zhaoyuhui012/libs:libTimeConversion');
var libObjectUpdate = require('users/zhaoyuhui012/libs:libObjectUpdate')

var default_options = {
    fileNamePrefix: "%index",
    fileFormat: 'GeoTIFF',
    maxPixels: 1e13,
    crs: null
}


function downloadImageCollection(collection, folder, options) {
    var collection_info = collection.getInfo();
    
    libParamInspector.checkEEParam(collection_info, 'collection', 'ImageCollection', true);
    libParamInspector.checkParam(folder, 'folder', 'string');
    
    var img_features = collection_info["features"];
    libObjectUpdate.updateObject(options, [default_options])
    var has_time = options['fileNamePrefix'].indexOf('%time') != -1;
    var has_index = options['fileNamePrefix'].indexOf('%index') != -1
    
    var total = img_features.length;
    var imgs = collection.toList(total);
    for (var i = 0; i < total; i++) {
        var img = ee.Image(imgs.get(i));
        
        var params = {
            image: img.toFloat(),
            folder: folder,
          };
        libObjectUpdate.updateObject(params, [options]);
      
        if (has_time) {
            var img_time_start = img_features[i]['properties']['system:time_start'];
            params['fileNamePrefix'] = params['fileNamePrefix'].replace(
                '%time', 
                libTimeConversion.convertTimestamp2Str(img_time_start, params['time_format'])
            )
        }
        
        if (has_index) {
            var img_index = img_features[i]['properties']['system:index'];
            params['fileNamePrefix'] = params['fileNamePrefix'].replace('%index', img_index)
        }
        
        params['description'] = img_features[i]['properties']['system:index'];
      
        Export.image.toDrive(params);
    }
}
exports.downloadImageCollection = downloadImageCollection;

/*
// Test
var roi = ee.Geometry.Polygon([[
    [114-1, 25-1],
    [114-1, 25+1],
    [114+1, 25+1],
    [114+1, 25-1]
]])

function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}

var dataset = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
    .filterBounds(roi)
    .filterDate('2020-01-05', '2020-01-06')
    .map(maskS2clouds);
print(dataset)
downloadImageCollection(dataset, 'test', {
    region: roi
})
var visualization = {
  min: 0.0,
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};

Map.setCenter(114, 25, 8);

Map.addLayer(roi)
Map.addLayer(dataset.mean(), visualization, 'RGB');
*/
