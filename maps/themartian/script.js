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
{ geometry: { type: "Point", coordinates: [-8.38, 15.56] },
  properties: { id: "sol473", zoom: 6 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-4.32, 13.49] },
  properties: { id: "sol475", zoom: 7 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-4.33, 12.76] },
  properties: { id: "sol477", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-4.28, 12.0] },
  properties: { id: "sol478", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-4.32, 13.49] },
  properties: { id: "sol479", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [-3.2, 2.4] },
  properties: { id: "sol487", zoom: 6 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [14.14, -0.55] },
  properties: { id: "sol498", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [15.3, -3.2] },
  properties: { id: "sol505", zoom: 8 }, type: 'Feature' },
{ geometry: { type: "Point", coordinates: [15.3, -3.2] },
  properties: { id: "sol549", zoom: 2 }, type: 'Feature' }
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

var tracks = [{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"title":"To Ares 4","description":"","marker-color":"","marker-size":"","marker-symbol":"","stroke":"#ffffff","stroke-width":3,"stroke-opacity":0.3,"fill":"","fill-opacity":"","name":"To Ares 4","type":"path"},"geometry":{"type":"LineString","coordinates":[[-28.5,31.2],[-25.213623,29.142566],[-21.939697,27.196014],[-19.14917,26.135714],[-18.566895,25.542441],[-18.407593,25.160201],[-18.4021,24.796708],[-18.544922,23.342256],[-18.522949,23.049407],[-18.369141,22.776182],[-17.995605,22.57851],[-17.484741,22.512557],[-17.127686,22.471955],[-16.347656,22.319589],[-15.501709,22.156883],[-15.419312,22.09582],[-15.227051,21.708473],[-15.078735,21.304728],[-14.820557,20.863945],[-14.633789,20.045611],[-14.28772,19.689142],[-13.864746,19.497664],[-13.331909,19.129599],[-12.788086,18.937464],[-11.623535,18.020528],[-10.2392578125,16.3833911236084],[-8.41552734375,15.623036831528264],[-7.14111328125,14.806749372133767],[-5.9765625,13.944729974920167],[-5.38330078125,13.784736549340208],[-4.74609375,13.76339577962447],[-4.33135986328125,13.509826058240751],[-4.3341064453125,12.771625082365382],[-4.290161132812499,12.007084584179259],[-3.9797973632812496,11.668375810026845],[-3.548583984375,11.401956477722216],[-3.339844,10.444598],[-3.317871,8.124491],[-3.131104,6.566389],[-3.032227,5.293357],[-3.22998,2.043024],[-2.702637,1.318243],[-2.109375,0.79099],[3.180542,0],[5.575562,-0.20874],[7.46521,-0.560294],[8.865967,-0.730571],[11.414795,-0.269164],[12.34314,-0.236205],[13.699951,-0.274657],[14.161377,-0.549308],[14.444275,-0.722332],[14.710693,-1.021674],[15.095215,-2.163792],[15.3,-3.2]]}},{"type":"Feature","properties":{"title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","stroke":"#ffffff","stroke-width":3,"stroke-opacity":0.3,"fill":"","fill-opacity":"","name":"Sirius 4","type":"path"},"geometry":{"type":"LineString","coordinates":[[-33.266602,19.57273],[-33.027649,19.831309],[-32.955992,20.079622],[-32.857361,20.334326],[-32.643127,20.514499],[-32.437134,20.786931],[-32.310791,21.294493],[-32.074585,22.116177],[-31.868702,22.883123],[-31.506042,23.642008],[-30.955395,24.362425],[-30.415873,24.883769],[-30.025635,25.61181],[-29.987975,25.703067],[-29.768829,28.666491],[-29.76059,28.733947],[-29.718018,28.794139],[-29.600086,28.900218],[-28.5,31.2]]}}]}];

L.geoJson(tracks, {
	color: "#ffffff",
	opacity: 0.1,
	stroke: 5
}).addTo(map);