// for post in blog with map
var loadMap = function(options){
    var map = mapbox.map(options.map);
        map.addLayer(mapbox.layer().id(options.layer));
        map.ui.zoomer.add();
        map.centerzoom({
            lat:options.lat,
            lon:options.lon
        },options.zoom);
        map.setZoomRange(options.zoom,options.range);
        map.interaction.auto();
}