---
layout: post
title:  "Map for Visit"
date:   2014-11-28 01:04:31
categories: maps
---
My brother, his wife and two daughters visited me this summer. It was great having them.

This is the map I made for their visit but I didn't have the stylization of the marker icons working until a while after they left.

[![map](https://farm8.staticflickr.com/7463/15979417611_fe4e25ce3d_c.jpg "Sitka Visit Map")](/maps/sitkavisit)

I was with them most of the time so the map wasn't really that necessary, but once in a while we'd split up and maybe we used it a couple of times. I can't really remember, but it was fun. I enjoyed updating the map to show something relevant. For instance, Saturday morning was the Farmer's market and Abby and I went to check that out. I updated the map to zoom in on that location with a marker in case Michael needed to know where we were. :)

You can specify the spot you want the map to zoom in on and you pick the level of zoom.
{% highlight javascript %}
var map = L.map('map', {
	center: [57.049, -135.322],
	zoom: 16,
	layers: [streets, playgrounds, walks], // layers that will be on when the map loads
	detectRetina: true // changes size of symbols if the map loads on a mobile or tablet
	});
{% endhighlight %}

Adding the marker for the Farmer's market with a message about the time it's open takes just two lines:

{% highlight javascript %}
L.marker([57.0509, -135.3415]).addTo(map)
.bindPopup("Farmer's market. 10am - 1pm").openPopup();
{% endhighlight %}

It looked like this

![Farmer's Market]({{ site.url }}/assets/farmersMarket.jpg)
