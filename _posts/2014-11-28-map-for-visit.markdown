---
layout: post
title:  "Map for Visit"
date:   2014-11-28 01:04:31
categories: maps
---
My brother, his wife and two daughters visited me this summer. It was great having them.

This is a [map] I made for their visit but didn't have the marker icons until afterwards.

I was with them most of the time so the map wasn't really that necessary, but once in a while we'd split up and maybe we used it a couple of times. I can't really remember, but it was fun. I would update the map to show something relevant. For instance, Saturday morning was the Farmer's market and Abby and I went to check that out. I updated the map to zoom in on that location with a marker in case Michael needed to know where we were. :)

{% highlight javascript %}
   L.marker([57.0509, -135.3415]).addTo(map)
   .bindPopup("Farmer's market. 10am - 1pm").openPopup();
{% endhighlight %}

[map]: http://www.joshuahouston.org/maps/sitkavisit
