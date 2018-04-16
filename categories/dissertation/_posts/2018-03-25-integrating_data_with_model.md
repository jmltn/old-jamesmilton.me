---
layout: post
title: Integrating BMS data with the Unity Model
---

I have now successfully integrating temperature, CO2 and air-conditioning data from the building’s BMS database with the Unity model.

As displayed in the video below, this particular room in the Diamond has two sensors placed at either end of the room. Therefore, we will have two readings of the room’s temperature and CO2 and this system needs to effectively visualise the differences in the readings.

The temperature of the room is represented by the linear colour gradient on the walls in the room. If one side of the room is a darker red than the other, that side of the room is therefore warmer. 

With the CO2, the density of CO2 is represented by a square grid on the ceiling. If one half of the ceiling has a denser grid than the other, that that half of the room has a higher concentration of CO2. 

For the air-conditioning, if the vents are switched on, then smoke will be released. The colour of the smoke is dependant on the output temperature of the vents, whereby warm colours such as red will mean the heating is on and colder colours like blue will mean cooling is on. 

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/yzIWKSmEzgQ?autoplay=1&loop=1' frameborder='0' allowfullscreen></iframe></div>

