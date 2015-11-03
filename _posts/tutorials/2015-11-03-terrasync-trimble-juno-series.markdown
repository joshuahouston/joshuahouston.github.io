---
layout: post
title:  "Guide for Terrasync on Trimble Juno Series Unit"
date:   2015-11-03 11:01:31
categories: tutorial
---
#GPS Data Collection Walkthrough for Trimble Juno Series Unit

###A straight-forward guide to data collection using Terrasync

##Part 1 - In the Field

1.	Open Terrasync
	*Tap on Start
	*Tap on TerraSync
2.	Data Mode
	*In the top left, you will see you are in the ‘Status’ mode, for data acquisition we want to be in ‘Data’ mode.
	*Tap the arrow next to status and select ‘Data’
3.	New file
	*By default, selecting data should bring up ‘Create New Data File’ dialogue and options. If not, click the arrow belonging to the button below ‘Data’ and select ‘New File (T)’
	*A dialogue with options is brought up. Here, the default settings are fine, but it helps to enter a memorable name for the file and to remember the location of where you are saving the file, which is either on the card or on the device (Default / SD-MMC card). A folder can be specified later.
	*Tap ‘Create’
4.	Antenna Height
	*You are prompted to enter the height of the antenna
5.	Type of Geometry – Point, Line, Area
	*Which type of geometry would best represent the feature you are GPS’ing?
	*Once you select, data recording begins.
6.	Recording
	*Data points are being collected now, so either walk if you are representing a line or an area, or stand in place if you are collecting data for a point. For a point, 40 seconds may be required for sufficient accuracy.
7.	Multiple features
	*If you have a single feature to collect you may tap ‘OK’ and then ‘Close’ the file. Otherwise, keep on collecting data for the feature using multiple geometries if needed.
	*Once you have collected enough data, you may tap ‘OK’ and ‘Close’
8.	Multiple Features
	*Once you have acquired data for one feature, another may be created (by selecting again ‘New File) And existing features may be added to (by selecting ‘Existing File’ > choosing the file > selecting ‘Open’)
	
##Part 2 - At the Computer

1.	Open Terrasync
2.	Enter ‘Data’ Mode
3.	File Manager
	*Below ‘Data’ select ‘File Manager’ (same place you’d see ‘Existing’)

4.	Find data
	*“Choose File Type” should be “Data Files”
	*“Location” is where you saved your files to when you were in the field. If you don’t see your data, change it.

5.	Convert data
	*Select one of the files you created
	*Tap on ‘Options’ in the top right and select ’Write data to Shape’
	*The prompt asks for a location of the file, enter a new name and this will create a unique folder for the file*
	*Prompt says, “The folder __ does not exist. Would you like to create it?” Select ‘Yes’
	*Results should read “Shape conversion complete” you may select “Close”
	*Repeat for other files naming new folders each time to avoid overwriting data.

6.	Transferring data
	*Plug in GPS to computer
	*Open folder where data was saved
	*Copy to desktop
	*Open QGIS
	*Drag and drop data folders into QGIS
	*Select Coordinate Reference System (Usually WGS 84 – EPSG: 4326)

#####*The shapefile that is created is given a generic name based on its geometry e.g. ‘Line_gen.shp’. If saving multiple files to one folder, matching geometries will be overwritten. Unique names for each file will subsequently create unique folders and avoid overwriting data.
