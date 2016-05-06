mapboxgl.accessToken = 'pk.eyJ1IjoiamZhY3RvcnkiLCJhIjoiZXdJam1yZyJ9.-AOTWD0gk1_3wuciI3DbsQ';
var start = [-134.3570,57.8419];
var startZoom = 10;
var startPitch = 52;
var startBearing = -10;
var speed = 2.4;
var next = [
  {
    name: "Sitka",
    place: [-135.33,57],
    zoom: 11.87,
    speed: speed,
    bearing: 10,
    pitch: startPitch
  },
  {
    name: "Barrow",
    place: [-156.8,71.3],
    zoom: 13.09,
    speed: speed,
    bearing: 20,
    pitch: startPitch
  },
  {
    name: "Anchorage",
    place: [-149.9,61.22],
    zoom: 12.1,
    speed: speed,
    bearing: 60,
    pitch: startPitch
  },
  {
    name: "Fairbanks",
    place: [-147.7,64.8],
    zoom: 13.16,
    speed: speed,
    bearing: 0,
    pitch: startPitch
  },
  {
    name: "Denali",
    place: [-150.3116,63.431],
    zoom: 12.18,
    speed: speed,
    bearing: 0,
    pitch: startPitch
  },
  {
    name: "Unalaska - Dutch Harbor",
    place: [-166.5564,53.8741],
    zoom: 13.02,
    speed: speed,
    bearing: 0,
    pitch: startPitch
  },
  {
    name: "Yakutat",
    place: [-139.7267,59.5475],
    zoom: 12.43,
    speed: 3,
    bearing: 0,
    pitch: startPitch
  },
  {
    name: "Juneau",
    place: [-134.4208,58.3015],
    zoom: 12.25,
    speed: speed,
    bearing: 0,
    pitch: startPitch
  },
  {
    name: "St. Paul",
    place: [-170.2802,57.1217],
    zoom: 13.35,
    speed: speed,
    bearing: 0,
    pitch: startPitch
  },
  {
    name: "Petersburg",
    place: [-132.9561,56.8124],
    zoom: 13.05,
    speed: speed,
    bearing: 0,
    pitch: startPitch
  }
];

var geocoder = new mapboxgl.Geocoder({
    container: 'geocoder-container' // Optional. Specify a unique container for the control to be added to.
});

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/emerald-v8',
  center: start,
  zoom: startZoom,
  pitch: startPitch,
  bearingSnap: startBearing,
  hash: true
});

if (window.location.hash) {
  map.setZoom(startZoom);
  map.setPitch(startPitch);
  map.easeTo({
      zoom: map.getZoom()+4,
      duration: 3000,
      bearing: map.getBearing()-30
    }),
    nowSway(map);
  } else {
    map.once('load', function () {
      map.easeTo({
        zoom: map.getZoom()+4,
        duration: 6000,
        bearing: map.getBearing()-30
      }),
      nowSway(map);
    });
}

//map.addControl(new mapboxgl.Navigation({position: 'top-left'}));
map.addControl(geocoder);

var isAtStart = true;
var go = 0;
var speed = 1.5;
var slope;

function resetView(e) {
  map.setBearing(newBearing);
  map.setPitch(newPitch);
}


// button animation

function fly(e) {
  var target = isAtStart ? next : start;
  var newZoom;
  isAtStart = !isAtStart;
  slope = e;
  if (slope=='key') {
    target = next[0].place;
    newZoom = next[0].zoom;
    newSpeed = next[0].speed;
    newBearing = next[0].bearing;
    newPitch = next[0].pitch;
  } else if (slope=='aft') {
    target = next[1].place;
    newZoom = next[1].zoom;
    newSpeed = next[1].speed;
    newBearing = next[1].bearing;
    newPitch = next[1].pitch;
  } else if (slope=='mtb') {
    target = next[2].place;
    newZoom = next[2].zoom;
    newSpeed = next[2].speed;
    newBearing = next[2].bearing;
    newPitch = next[2].pitch;
  } else if (slope=='ara') {
    target = next[3].place;
    newZoom = next[3].zoom;
    newSpeed = next[3].speed;
    newBearing = next[3].bearing;
    newPitch = next[3].pitch;
  } else if (slope=='hea') {
    target = next[4].place;
    newZoom = next[4].zoom;
    newSpeed = next[4].speed;
    newBearing = next[4].bearing;
    newPitch = next[4].pitch;
  } else if (slope=='whi') {
    target = next[5].place;
    newZoom = next[5].zoom;
    newSpeed = next[5].speed;
    newBearing = next[5].bearing;
    newPitch = next[5].pitch;
  } else if (slope=='bre') {
    target = next[6].place;
    newZoom = next[6].zoom;
    newSpeed = next[6].speed;
    newBearing = next[6].bearing;
    newPitch = next[6].pitch;
  } else if (slope=='han') {
    target = next[7].place;
    newZoom = next[7].zoom;
    newSpeed = next[7].speed;
    newBearing = next[7].bearing;
    newPitch = next[7].pitch;
  } else if (slope=='bir') {
    target = next[8].place;
    newZoom = next[8].zoom;
    newSpeed = next[8].speed;
    newBearing = next[8].bearing;
    newPitch = next[8].pitch;
  } else if (slope=='war') {
    target = next[9].place;
    newZoom = next[9].zoom;
    newSpeed = next[9].speed;
    newBearing = next[9].bearing;
    newPitch = next[9].pitch;
  }
  map.setCenter([target[0],target[1]]);
  map.setZoom(startZoom);
  nowMove(map);
  console.log(map.getCenter());
}

function nowMove(map) {
  map.flyTo({
    //center: target,
    zoom: 10,
    speed: newSpeed, // make the flying slow
    curve: 0.8, // change the speed at which it zooms out
    easing: function (t) {
      return t;
    }
  },
  map.jumpTo({
      pitch: startPitch,
      bearing: newBearing
    })
  )
  nowSway(map);
}

var swapBearing = map.getBearing() - 50;
var swapped = false;

function nowSway(map) {
  if (swapped) {
    swapBearing = map.getBearing() - 50;
    swapped = false;
  } else {
    swapBearing = map.getBearing() + 50;
    swapped = true;
  }
  map.easeTo({
    zoom: map.getZoom()+5,
    duration: 6000,
    bearing: swapBearing
  })
}


