L.mapbox.accessToken = 'pk.eyJ1IjoiamZhY3RvcnkiLCJhIjoiZXdJam1yZyJ9.-AOTWD0gk1_3wuciI3DbsQ';
// In this case, we just hardcode data into the file. This could be dynamic.
// The important part about this data is that the 'id' property matches
// the HTML above - that's how we figure out how to link up the
// map and the data.
var places = { type: 'FeatureCollection', features: [
{ geometry: { type: "Point", coordinates: [-28.5, 31.2] },
  properties: { id: "cover", zoom: 6 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-28.5, 31.2] },
  properties: { id: "sol67", zoom: 10 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-28.5, 31.17] },
  properties: { id: "sol69", zoom: 14 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-29.6, 28.9] },
  properties: { id: "sol73", zoom: 5 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-29.85, 27.17] },
  properties: { id: "sol74", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-30.73, 24.54] },
  properties: { id: "sol76", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-31.86, 22.86] },
  properties: { id: "sol78", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-32.44, 20.76] },
  properties: { id: "sol80", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-33.33, 19.52] },
  properties: { id: "sol82", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-28.5, 31.2] },
  properties: { id: "sol92", zoom: 5 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-28.5, 31.2] },
  properties: { id: "sol94", zoom: 6 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-28.5, 31.2] },
  properties: { id: "sol449", zoom: 6 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-16.8, 22.4] },
  properties: { id: "sol462", zoom: 6 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-12.7, 18.9] },
  properties: { id: "sol466", zoom: 7 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-8.36, 16.84] },
  properties: { id: "triangle", zoom: 6 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-4.14, 13.82] },
  properties: { id: "marth", zoom: 7 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-4.4, 13.1] },
  properties: { id: "storm", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-4.21, 12.4] },
  properties: { id: "sol478", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-4.14, 13.82] },
  properties: { id: "sol479", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-3.2, 2.4] },
  properties: { id: "sol487", zoom: 6 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [14.14, -0.55] },
  properties: { id: "sol498", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [15.3, -3.2] },
  properties: { id: "mav", zoom: 7 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [15.3, -3.2] },
	properties: { id: "hermes", zoom: 1 }, type: 'Feature' }
]};

var map = L.mapbox.map('map', 'jfactory.e2c0a79a', {
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
            map.setView(layer.getLatLng(), layer.feature.properties.zoom || 8);
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