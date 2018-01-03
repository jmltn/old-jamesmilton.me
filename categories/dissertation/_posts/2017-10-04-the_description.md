---
layout: post
title: The Description
---


**Current title:** Virtual and/or Augmented Reality Views on a Building   
**New tittle?** Displaying real-time Smart Building information interactively through Virtual Reality   
**Author:** James Milton    
**Supervisor:** Dr. Ramsay Taylor   
**Module code:** COM3610  

**Background**    
The term ‘Smart Building’ is being used increasingly more in todays society. With the ‘Internet of Things’ (herein IoT) being introduced to everything from refrigerators to cars, this new way of living is now being adopted by the way smart buildings are being constructed.
Smart Buildings are just like ordinary buildings, but incorporates IoT devices throughout them to make them intelligent. Information obtained from a wide range of sources is used to allow the building to adapt and consequently control itself appropriately, with the aim to improve energy efficiency, longevity and comfort [1].

**Description**   
The University of Sheffield’s Diamond building boasts the reputation of being a Smart Building. Costing £81 million to construct, the Diamond was built with approximately 3000 sensors throughout [2]. The information provided by these sensors contain room temperature, humidity, CO2 levels, seat occupancy, lighting, heating status and much more. Currently, this information is recorded in real-time to a Building Management Systems (herein BMS) database [4].

The BMS database records sensor data between every 3 to 10 minutes, so there is a constant flow of real-time data. When requesting data from the BMS using a query, data will be received in JSON format [4]. Although there is large amount of data available, there is a lack of autonomous control within the Diamond. An intermittent system is in place, where the heating system will be reduced or the windows will open when a room temperature rises above a certain amount, but the system in place is way below the Diamond’s potential. In the Diamond’s current state, can it really be considered a smart building?

**Problems to be solve**    
In order for the Diamond to perform more efficiently and hone the title of being a smart building, we have to learn from the recorded data in the BMS and identify what conditions work best. Currently, the only service provided to do this is a
website [4] where presentations of figures like temperature and CO2 levels for each room are displayed in a table. It’s not very intuitive to use and consequently makes it harder for an individual to identify trends or abnormalities in the data.
Moreover, this data would be advantageous for the Diamond’s building management team, as abnormalities in the data could signify potential faults in the system which need immediate attention. However, this service is not sufficiently user-friendly.

**Solution**
When the Diamond was built, the constructors produced a Building Information Model (herein BIM), a large collection of accurate 3D models of the Diamond, inside and out. These models are ideal to visualise what the building looks like, without being physically in front or inside of it.

The aim of this project is to adapt the 3D BIMs and create a system where a user puts on a pair of Virtual Reality Headsets and virtually enter the Diamond. Once entered, the user can visualise the respective real-time data of the individual rooms they are virtually standing in. The way the data is visualised will depend on the type; rather than having the temperature of a particular room presented as a number, the walls of said room will change colour relative to a colour/temperature scale; rather than presenting the room occupancy as a number, 3D figures representing people will be randomly dispersed across the room in the same frequency as the occupancy. The user will also be able to filter out any unwanted visual data feeds.

Additionally, every piece of data logged in the database has a timestamp associated with it. Therefore, it would be possible for the user to select specific time and day, and visualise the conditions of the Diamond at that very point in time.
With this service, it will be a lot easier to recognise faults within the system for the Diamond’s building management team. Additionally, it will be easier to visualise trends with the data and identify what building settings are most efficient and comfortable.

**Tools to be used**    
Unity 3D game engine will be used as the foundation for combining the data from the database and the 3D BIM models, to create the scenes that the user will experience through the virtual reality headset.
Unity 3D is the most ideal platform to build this system with, as it supports 3D graphics, drag and drop functionality and C** scripting. It is also cross-platform compatible, meaning any scene created within Unity can be exported to work on many platforms like iOS, Android and most importantly, Virtual Reality platforms like the Oculus Rift [3].

<img src="{{ site.baseurl }}/images/2017/10/simpleflow.png" alt="simple flow diagram" style="width: 50%;"/>

Figure (1.1): A simple diagram demonstrating the foundation of this project as to how the information is going to flow from start to finish.

**Moving forward**    
I have created Gantt outlining a daily plan for this project, this will be adapted as time goes on: (embedded below). Between October and late November, I plan to continue researching the area of Smart Buildings along with Virtual Reality and Unity 3D; start conducting my survey and analysis; and discuss the potentials of this project with the end users, such as the Diamond’s building management staff. After that I would like to make any needed adaptations to the 3D models provided by the BIMs and implement a demonstrator version of the system. After late November, I plan to actively start implementing the system.

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSHYt4oK35rcdJhr972O_FnCe8QzCwkP_cpv45gnzt90EaSSB02yCheShfuxOay3sDovaiQfekHnemB/pubhtml?widget=true&amp;headers=false" width="100%" height="500"></iframe>   



**Bibliography**    
[1] A.H. Buckman, M. Mayfield, Stephen B.M. Beck, (2014) “What is a Smart Building?”, Smart and Sustainable Built Environment, Vol. 3 Issue: 2, pp.92- 109    
[2] Sheffield, U. (2017). History of The Diamond - The Diamond - The University of Sheffield. [online] Sheffield.ac.uk. Available at: https://www.sheffield.ac.uk/diamond/history [Accessed 5 Oct. 2017].   
[3] Unity. (2017). Unity - Fast Facts. [online] Available at: https://unity3d.com/public-relations [Accessed 5 Oct. 2017].    
[4] Anon, (2017). [online] Available at: http://smartbms01.shef.ac.uk [Accessed 5 Oct. 2017].   
