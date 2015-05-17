---
layout: post
title:  "GeoJson Landslide"
date:   2015-05-16 19:11:31
categories: code
---
#GeoJson
I'm learning how to add an external geojson file to a map. Well, I've managed to do that, I can add markers, I can add a polygon, and I can add a line. However, if I add them all from one file, the markers aren't clickable or stylized. I don't know how to style specific geometries from one file.

Here is the map I'm testing out:

<iframe src="http://jfact0ry.com/maps/geojson/test1.html" frameborder="0" width="100%" height="250">Here is where the map should be</iframe>

You can't click on the markers. I can add them this way:
{% highlight javascript %}
$.getJSON('markers.json', function(data) {
    var geojson = L.geoJson(data, {
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng)
		});
    geojson.addTo(map);
  });
{% endhighlight %}
Maybe... Let me test that, actually. Nope, that didn't work.