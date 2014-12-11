---
layout: post
title:  "New Cross Trail"
date:   2014-12-10 16:19:31
categories: maps
---
#Cross Trail Map
There's a new trail going in between Yaw Drive and Gavan Hill trail. It is just north of the old trail that cuts through some muskeg and has quite a few rough spots. The new trail continues the wide-lane and fine gravel surface that the cross trail has seen with the recent extensions. I made a little map over the Thanksgiving holiday to say I was thankful for Sitka's trails. I run on them a lot and almost always am GPS-tracing my running. So with a lot of GPS traces together in QGIS, I trace a line at roughly a happy median. Haha, get it?

This is how the GPS traces look in QGIS. Really pretty I think! I want to make an interactive map that looks like this. I hope the black background of the picture on the white background of this webpage looks okay.

![GPS Traces in QGIS][qgis]

##Embedded ArcGIS map
Below is a map embedded in this post which is a test. I'm seeing how this post will look on desk/lap-top vs. mobile browsers. I know the Leaflet and Mapbox maps use a `<div>` element but the ArcGIS map below uses an `<iframe>` tag so I'm not sure if they'll all work the same. Initiate experiment.

<iframe width="720" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://www.arcgis.com/home/webmap/templates/OnePane/basicviewer/embed.html?webmap=6ab8d722b1f84ffab1bb379ea600b946&amp;gcsextent=-135.3278,57.0582,-135.3082,57.0648&amp;home=true&amp;displayslider=true&amp;displaylegend=true"></iframe><br /><small><a href="/maps/arcgis/newtrail" style="color:#0000FF;text-align:left" target="_blank">Full screen map</a></small>

In the ArcGIS map, I think the legend in the sidebar and the background map look really pretty. The thing I like about the Leaflet and Mapbox maps, however, is that you can change any wrong data . I cannot edit the baselayer maps of ArcGIS, while the other maps use OpenStreetMap which is like the Wikipedia of maps. Some of the errors in the ArcGIS map are that Yaw Drive does not come up high enough. You'll see the old and new trails terminate for what looks like no reason but actually there is a road there.  Additionally, if you pan the map to the north you will see Gavan Hill is called Gayan Hills.  These are just a few of the reasons I like editing and using OpenStreetMap.

[full screen map]: /maps/arcgis/newtrail
[qgis]: https://farm8.staticflickr.com/7559/15808429527_0a6b9a4fd0_c.jpg "QGIS"