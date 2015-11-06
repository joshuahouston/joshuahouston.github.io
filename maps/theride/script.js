L.mapbox.accessToken = 'pk.eyJ1IjoiamZhY3RvcnkiLCJhIjoiZXdJam1yZyJ9.-AOTWD0gk1_3wuciI3DbsQ';
var map = L.mapbox.map('map', 'jfactory.l0diaa22').setView([57.049, -135.328], 13);
var path = function (route) {
var geojson = { type: 'LineString', coordinates: route };
var start = [-135.332398, 57.050407];
var momentum = [0, 0];

for (var i = 0; i < 300; i++) {
    start[0] += momentum[0];
    start[1] += momentum[1];
    if (start[1] > 0 || start[1] < 0) momentum[1] *= -1;
    if (start[0] > 0 || start[0] < 0) momentum[0] *= -1;
    geojson.coordinates.push(start.slice());
}

// Add this generated geojson object to the map.
L.geoJson(geojson, {
    color: '#ce2d18',
    opacity: 0.5
}).addTo(map);

// Create a counter with a value of 0.
var j = 0;

// Create a marker and add it to the map.
var marker = L.marker([0, 0], {
  icon: L.mapbox.marker.icon({
    'marker-color': '#f86767',
	'marker-size': 'small'
  })
}).addTo(map);

tick();
function tick() {
    // Set the marker to be at the same point as one
    // of the segments or the line.
    marker.setLatLng(L.latLng(
        geojson.coordinates[j][1],
        geojson.coordinates[j][0]));

    // Move to the next point of the line
    // until `j` reaches the length of the array.
    if (++j < geojson.coordinates.length) setTimeout(tick, 300);
}
};
path(redline);
path(greenline);
path(blueline);