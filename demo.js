
function moveMapToVinnitsa(map){
  map.setCenter({lat:49.234969028726894, lng:28.469772388440028}); 
  map.setZoom(14);
}

var platform = new H.service.Platform({
  apikey: 'cdBW74wQFSBbsPRnt63XXZh5ZDqbT579xUgOOekpmM4'
});
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});

window.addEventListener('resize', () => map.getViewPort().resize());


var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers);

window.onload = function () {
  moveMapToVinnitsa(map);
}