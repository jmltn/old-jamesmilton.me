---
layout: post
title: Initial thoughts
---

Before being offered the project, Dr Ramsay Taylor asked me to give a rough description to how I might approach the project. Here was my response:

1. Break down the BIM of the Diamond into a more manageable model without unnecessary components such as plumbing pipes and light fixtures but keeping components that are important to the BMS like the main air conditioning vents.

2. Convert the BIM into a build which is compatible and importable with Unity.

3. As this platform will be used by people who need quick and easy access to the information, this virtual reality system needs to run quickly and efficiently. Therefore either of the following will need to be done:
	* Further breakdown the BIM so that each room within the Diamond has its own CAD model. This will mean that the whole building will not need to be loaded when looking at the status of one particular room.
	* (More ideal option) Take advantage of Unity’s ‘Occlusion Culling’ whereby Unity will disable the rendering of objects when they are not currently seen by the camera because they are occluded by other objects. The inclusion of this feature will mean that we can load the Diamond model as a whole and place checkpoints in certain areas to represent each room/lab/lecture theatre. Entering and loading a certain area should be quick because only what is in sight will be rendered.
	
4. Write C# scripts which will be responsible for obtaining the near live data from the BMS. This data will then be linked to the appropriate area within the model.

5. Obtain data from sources outside the BMS to obtain a wider field of information, such as:
	* Lecture timetabling information and number of students enrolled on the course for that lecture.
	* Number of students attending a lab session where they have implemented uCard swipe sign in to monitor attendance.
	* The rough number of students occupying the communal study areas could be calculated from the uCard swipe entrance gates. The total number students could be spread evenly across all communal areas.
	* Potentially include a feature which allows building services to easily add more data feeds as and when they are implemented.
	
6. With all the data obtained from the BMS and outside sources, this data will then be visually represented within each appropriate area, for example:
	* Lecture theatre and lab room seats coloured either red or green depending on the expected attendance.
	* Communal study area desks could also be coloured red or green depending on the total uCard swipes from the entrance gates.
	* Airflow animation from the air conditioning vents. Concentrations of airflow dependant on whether the air ducts are open closed or have a variable valve.
	* Colour of walls change depending on temperature of the room drawn from data from the sensors placed on the wall. The temperatures will be sensitive to the position of the sensors. This will take into consideration different heights and different temperatures that come with that.
	* CO2 levels could be represented by a colour scale on the wall as well or a variable greyscale effect on the users views.
	
7. As a starting point, the Unity Web Player will be a good platform to visualise the VR system as It could be embedded into a simple website where it could provide:
	* Links to other areas within the diamond to enable quick navigation.
	* A filtering system so that certain bits of visual data are present.
	* A time and date option. As each bit of data will have a timestamp associated with it, it will be possible to visualise the conditions within an area at any given point of time. This will be useful for the building services to observe trends and anomalies at certain times.


