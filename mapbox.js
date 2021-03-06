// Hardcode image path, because Leaflet's autodetection
// fails, because mapbox.js is not named leaflet.js
window.L.Icon.Default.imagePath = '//api.tiles.mapbox.com/mapbox.js/' + 'v' +
    require('./package.json').version + '/images';

L.mapbox = module.exports = {
    VERSION: require('./package.json').version,
    geocoder: require('./src/geocoder'),
    marker: require('./src/marker'),
    simplestyle: require('./src/simplestyle'),
    tileLayer: require('./src/tile_layer'),
    infoControl: require('./src/info_control'),
    shareControl: require('./src/share_control'),
    legendControl: require('./src/legend_control'),
    geocoderControl: require('./src/geocoder_control'),
    gridControl: require('./src/grid_control'),
    gridLayer: require('./src/grid_layer'),
    featureLayer: require('./src/feature_layer'),
    map: require('./src/map'),
    config: require('./src/config'),
    sanitize: require('sanitize-caja'),
    template: require('mustache').to_html
};

L.mapbox.markerLayer = L.mapbox.featureLayer;
