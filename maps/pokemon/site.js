map.on('load', function() {

  mapboxgl.util.getJSON(url, function(err, data) {
    document.body.classList.remove('loading');
    if (err) return console.warn(err);

    // From the requested source we'll need to do a bit of
    // data processing to get it into a format for our needs.
    // The finished output looks like GeoJSON
    var geojson = {
      type: 'FeatureCollection',
      features: []
    };

    data.feed.entry.forEach(function(d) {
      var fields = d.content.$t.split(', ');
      var lng = parseFloat(fields[2].split(': ')[1]);
      var lat = parseFloat(fields[1].split(': ')[1]);
      var category = fields[0].split(': ')[1];
//      var pokemon = parseInt(fields[3].split(': ')[1], 10);

      geojson.features.push({
        type: 'Feature',
        properties: {
          name: d.title.$t,
          category: category
//          pokemon: pokemon
        },
        geometry: {
          type: 'Point',
          coordinates: [lng, lat]
        }
      });
    });

    // Add reponse data as a new source on the map
    map.addSource('data', {
      type: 'geojson',
      data: geojson
    });

    map.addLayer({
      id: 'point',
      type: 'symbol',
      source: 'data',
      layout: {
        'icon-image': 'monument-15'}
    });

    // Point popup to display Graffiti count
    map.on('mousemove', function(e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ['point']
      });

      map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

      if (!features.length) {
          popup.remove();
          return;
      }

      var feature = features[0];

      var contents = document.createElement('div');

      var title = document.createElement('strong');
      title.textContent = feature.properties.name;
      var category = document.createElement('p');
      category.textContent = feature.properties.category;
/*
      var plots = document.createElement('span');
      plots.className = 'block';
      plots.textContent = feature.properties.plots + ' plots';
*/
      contents.appendChild(title);
      contents.appendChild(category);
 //     contents.appendChild(plots);

      popup.setLngLat(feature.geometry.coordinates)
        .setHTML(contents.innerHTML)
        .addTo(map);
    }); 
  });
});