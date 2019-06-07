---
layout: post
title: "OpenStreetMap Diary Entry"
date: 2019-06-07 13:00:21
categories: maps
---
# THIS IS A WORK IN PROGRESS. JUST LETTING A FRIEND READ IT BEFORE I HAVE MORE TIME TO FINISH IT

# Southeast Alaska Hydrography

## Getting National Hydrography Data - NHD - into OpenStreetMap

The current coastline in OpenStreetMap is lacking in detail for much of Alaska, particularly the very coastal, Southeast Alaska.
!picture(https://www.openstreetmap.org/#map=14/57.6344/-136.2069)

The [Alaska Hydrography Technical Working Group](http://akhydro.uaa.alaska.edu/) has taken initiative to streamline updating the data for Alaska and making it easily accessible. This diary entry will cover my goal of getting that data into OpenStreetMap for the Southeast Alaska area and the way around the obtacles that lie therein. I hope by documenting this, I may inspire support with this project, otherwise it could take [forever](https://twitter.com/eigenbom/status/1129950932718854144).

I took some steps to see if this undertaking is viable and I believe it is and also not too difficult.  

This is a map showing what could be as far as hydrography data in OpenStreetMap in the Southeast Alaska area, or even the entirety of Alaska, if you so desire.



When I first started editing the map, the coastline was one of the first things I wanted to work on. Immediately, I set out to improve the coastline along the road system of Sitka.

![Before/after of coastline around Sitka area](https://live.staticflickr.com/445/19083715519_7e1b4034d0_z.jpg) 

Eventually, I cleaned up the coastline of many surrounding islands and nearly the entirety of [Baranof Island](https://en.wikipedia.org/wiki/List_of_islands_by_area#Islands_2,500%E2%80%934,999_km2_(965%E2%80%931,930_sq_mi)). But my eyes were bigger than my stomach (or something), and I started wondering about a way to lessen the amount of work. As time went on, I learned more about the inaccuracy of editing the coastline with satellite or aerial images and even the inaccuracy of IFSAR data that I at [one time thought I could use](https://forum.openstreetmap.org/viewtopic.php?pid=559717#p559717).

Fast forward a few years, I rarely touch the coastline anymore but think of it often, and now there has been a huge initiative by "the pros" to map the waters of Alaska. The University of Alaska Anchorage and the Alaska Center for Conservation Science have made available the work they have been doing. Alaska's Hydrography Database is available to the public. 

[http://akhydro.uaa.alaska.edu/](http://akhydro.uaa.alaska.edu/)

The data would require a bit of work before importing it into OpenStreetMap, but thankfully this isn't my [first rodeo](https://wiki.openstreetmap.org/wiki/Sitka,_AK/Buildings_Import). 🤠

My first trial run at using this dataset to update OpenStreetMap's coastline was for the Kasiana Islands. The AK Hydro Database was a big improvement over the existing coastline. 

!picture

Part of the process involved using the [replace geometry tool](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/utilsplugin2#Replace_geometry_.28Ctrl.2BShift.2BG.29) so that object IDs and history were preserved. This alone will make this task a time-consuming one. For all of Southeast Alaska and the Alexander Archipelago, I will not be able to do this alone. I will try to cover the ABC islands (Admiralty, Baranof, and Chichagof) and Kuiu Island :heart: but by that time I hope someone else has joined in. My idea of heaven is mapping the [infinite coastline](https://en.wikipedia.org/wiki/Coastline_paradox) so it really won't dishearten me if I have to do it alone *however* I'd rather it be done by humans than for AI to beat us to it. That's not the worst-case scenario though, the worst-case scenario would be that due to sea-level rise and humanity's inability to change its destructive course, that the effort I put into mapping the coastline is all for naught. But then again, all our maps will be destroyed by the heat death of the universe, so why not die doing what we love?

This project will get the most bang for the buck when it comes to streams. Hardly any streams have been mapped in the greater Southeast Alaska. There is no obstacle unique to the streams layer other than maybe checking flow direction.

The remaining layer is lakes. This one is not so cut and dry, but luckily, I have a plan. The issue is that some areas which are designated as lakes in the National Hydrography Database are actually covered by snow or ice. The IFSAR DEMs are a good way to [extract lakes](https://gis.stackexchange.com/questions/231211/what-is-the-syntax-for-gdal-calc-py-to-return-a-certain-value) that are, in fact, surface water. This data can be used as a background to cross-check which NHD lakes should be included and which should be filtered out. I thought at one moment in time that lakes from the IFSAR DEMs could be imported into OpenStreetMap but they show blockiness that comes from having them converted from a raster to a vector; so the NHD lakes are superior.

2019-06-07-osm-diary-wip.markdown
