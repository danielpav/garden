var fs = require('fs');
var gjs = require('geojson')

exports.features = function(req, res, next){
  var map = JSON.parse(fs.readFileSync('map.json', 'utf8'));
  res.json(map);
}

exports.feature = function(req, res, next){
  res.json({});


}

exports.measurements = function(req, res, next){
  res.json({});
}

exports.measure = function(req, res, next){
//  Read json
//  Add measurement(s)
// Write json
  res.json({});
}
