---
layout: post
title:  "GeoJson Landslide"
date:   2015-05-16 19:11:31
categories: code
---
#GeoJson
I'm learning how to add an external geojson file to a map. Well, I've managed to do that, I can add markers, I can add a polygon, and I can add a line. However, if I add them all from one file, the markers aren't clickable or stylized. I don't know how to style specific geometries from one file.

Here is the map I'm testing out:

<iframe src="http://jfact0ry.com/maps/geojson/index.html" frameborder="0" width="100%" height="320">Here is where the map should be</iframe>

You can't click on the markers. I can add them this way:
{% highlight javascript %}
$.getJSON('landslide.json', function(data) {
    var geojson = L.geoJson(data, {
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {icon: L.mapbox.marker.icon({
    'marker-size': 'small',
    'marker-color': '#2f4f4f',
    'marker-symbol': 'camera'
  })})
		},
      onEachFeature: function (feature, layer) {
		  layer.bindPopup('\<h6\>' + feature.properties.name + '\</h6\>\<p\>' + feature.properties.desc + '\</p\>', {
			  maxWidth: 420
		  });
      }
    });
    geojson.addTo(map);
  });
{% endhighlight %}
Okay, so at this point I've managed to make the markers to clickable. Next, I'll see if I can figure out how to style the polygon.