L.mapbox.accessToken = 'pk.eyJ1IjoiamZhY3RvcnkiLCJhIjoiZXdJam1yZyJ9.-AOTWD0gk1_3wuciI3DbsQ';
// In this case, we just hardcode data into the file. This could be dynamic.
// The important part about this data is that the 'id' property matches
// the HTML above - that's how we figure out how to link up the
// map and the data.
var places = { type: 'FeatureCollection', features: [
{ geometry: { type: "Point", coordinates: [-139.644084, 59.5008] },
  properties: { id: "cover", zoom: 9 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-139.375176, 59.59879] },
  properties: { id: "portage", zoom: 15 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-139.26559, 59.666921] },
  properties: { id: "night1" }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-139.31807, 59.85517] },
  properties: { id: "night2" }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-139.45224, 59.97916] },
 properties: { id: "night3", zoom: 14 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-139.46664, 59.98678] },
 properties: { id: "glacier", zoom: 15 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-139.25067, 59.86049] },
  properties: { id: "night4" }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-139.281, 59.82794] },
  properties: { id: "night5" }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-139.360736, 59.598257] },
  properties: { id: "night6" }, type: 'Feature' }
]};

var map = L.mapbox.map('map', 'jfactory.b075256a', {
    zoomControl: false
});

var placesLayer = L.mapbox.featureLayer(places)
    .addTo(map);

// Ahead of time, select the elements we'll need -
// the narrative container and the individual sections
var narrative = document.getElementById('narrative'),
    sections = narrative.getElementsByTagName('section'),
    currentId = '';

setId('cover');

function setId(newId) {
    // If the ID hasn't actually changed, don't do anything
    if (newId === currentId) return;
    // Otherwise, iterate through layers, setting the current
    // marker to a different color and zooming to it.
    placesLayer.eachLayer(function(layer) {
        if (layer.feature.properties.id === newId) {
            map.setView(layer.getLatLng(), layer.feature.properties.zoom || 12);
            layer.setIcon(L.mapbox.marker.icon({
                'marker-color': '#a8f'
            }));
        } else {
            layer.setIcon(L.mapbox.marker.icon({
                'marker-color': '#404040',
                'marker-size': 'small'
            }));
        }
    });
    // highlight the current section
    for (var i = 0; i < sections.length; i++) {
        sections[i].className = sections[i].id === newId ? 'active' : '';
    }
    // And then set the new id as the current one,
    // so that we know to do nothing at the beginning
    // of this function if it hasn't changed between calls
    currentId = newId;
}

// If you were to do this for real, you would want to use
// something like underscore's _.debounce function to prevent this
// call from firing constantly.
narrative.onscroll = function(e) {
    var narrativeHeight = narrative.offsetHeight;
    var newId = currentId;
    // Find the section that's currently scrolled-to.
    // We iterate backwards here so that we find the topmost one.
    for (var i = sections.length - 1; i >= 0; i--) {
        var rect = sections[i].getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= narrativeHeight) {
            newId = sections[i].id;
        }
    };
    setId(newId);
};
