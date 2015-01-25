L.mapbox.accessToken = 'pk.eyJ1IjoiamZhY3RvcnkiLCJhIjoiZXdJam1yZyJ9.-AOTWD0gk1_3wuciI3DbsQ';
var map = L.mapbox.map('map', 'examples.map-i87786ca').setView([57.0487, -135.322], 13);

// Generate a GeoJSON line. You could also load GeoJSON via AJAX
// or generate it some other way.
// Enter seakayak or seawalk
var geojson = { type: 'LineString', coordinates: seawalk };
var start = [1, 1];
var momentum = [1, 1];

for (var i = 0; i < 300; i++) {
    start[0] += momentum[0];
    start[1] += momentum[1];
    if (start[1] > 60 || start[1] < -60) momentum[1] *= -1;
    if (start[0] > 170 || start[0] < -170) momentum[0] *= -1;
    geojson.coordinates.push(start.slice());
}

// Add this generated invisible geojson object to the map.
L.geoJson(geojson, {
	//invisible? or no
    opacity: 0.5
}).addTo(map);

// Create a counter with a value of 0.
var j = 0;

// Create a marker and add it to the map.
var marker = L.marker([57.05170393, -135.35179074], {
  icon: L.mapbox.marker.icon({
    'marker-color': '#f86767'
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
    if (++j < geojson.coordinates.length) setTimeout(tick, 600);
};

//2nd path
var geojsonTwo = { type: 'LineString', coordinates: seakayak };
var debut = [1, 1];
var elan = [1, 1];

for (var i = 0; i < 300; i++) {
    debut[0] += elan[0];
    debut[1] += elan[1];
    if (debut[1] > 60 || debut[1] < -60) elan[1] *= -1;
    if (debut[0] > 170 || debut[0] < -170) elan[0] *= -1;
    geojsonTwo.coordinates.push(debut.slice());
}

// Add this generated invisible geojson object to the map.
L.geoJson(geojsonTwo, {
	opacity: 0.5
}).addTo(map);

// Create a counter with a value of 0.
var r = 0;

// Create a marker and add it to the map.
var ellen = L.marker([57.04875, -135.32422], {
  icon: L.mapbox.marker.icon({
    'marker-color': '#f86767'
  })
}).addTo(map);

tock();
function tock() {
    // Set the marker to be at the same point as one
    // of the segments or the line.
    ellen.setLatLng(L.latLng(
        geojsonTwo.coordinates[r][1],
        geojsonTwo.coordinates[r][0]));

    // Move to the next point of the line
    // until `j` reaches the length of the array.
    if (++r < geojsonTwo.coordinates.length) setTimeout(tock, 5);
};
