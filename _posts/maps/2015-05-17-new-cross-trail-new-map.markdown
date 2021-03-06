---
layout: post
title:  "New Cross Trail, New Map"
date:   2015-05-17 12:55:31
categories: code
---
#New Map
The last time I mapped Sitka's new Cross Trail I didn't know how to add a line, polygon, and markers to a map from an external file, I had only done that through hard-coding it in to the html. Since my recent GeoJson post, I've realized I can redo my Cross Trail map using Leaflet and adding the GeoJson efficiently through an external file.

In the time that has passed, Sitka's Parks and Recreation have added a new path along Yaw Drive and are now working on a new path from the Old City Cemetery and the Moose Cemetery that will connect along the base of Gavan, bypassing the muskeg area.

As always, I GPS'd the new trails and admired the beauty of mapping in QGIS.

![GPS Traces in QGIS][qgis]

My original intention of this map was to show some photos of the nice improvements of the new trail, document the conditions of the old trail, and show how they relate to the surrounding muskeg spots. The old map I made with ArcGIS required me uploading shp files of the muskeg boundaries. Using OpenStreetMap allows me to add the data to the map and then their rendered tiles as my background, there is no uploading required.

<iframe src="http://jfact0ry.com/maps/crosstrail/index.html" frameborder="0" width="100%" height="480">Old and new cross trail map</iframe>
[View in full screen]

If you compare this map to the [old] one you'll see that it loads much faster and it looks nice too. I'm going to miss the parts of the trail that cut through the muskeg.

[qgis]: https://c1.staticflickr.com/9/8871/17599401568_25b549f745_c.jpg "New trails in QGIS"
[old]: /maps/2014/12/10/new-cross-trail.html "New Cross Trail post"
[View in full screen]: /maps/crosstrail/ "View Full Screen"