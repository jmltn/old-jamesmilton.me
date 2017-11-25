---
layout: post
title: Adapting Diamond CAD model to work with Unity
---

**Progress Update**

As well as writing up my 'Survey and Analysis Stage' for my dissertation, I have started on the first steps of implementing the system. With help from Rob Stacey, Teaching Technician for the Virtual and Augmented Reality Lab at the University of Sheffield, I have adapted the CAD model left by contractors who built the Diamond, to work with the Unity game engine. Along with that, I implemented camera and keyboard movement control functionality within Unity.

As well, I have reduced the CAD model down from the whole building, to just one room - Workroom 3 and implemented some methods to reduce the amount of graphics processing, such as [Occlusion Culling](https://docs.unity3d.com/Manual/OcclusionCulling.html){:target="_blank"}, whereby objects in the scene which are not visible to the camera, are not unnecessarily rendered.

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/nUENDdgkKSM?autoplay=1&loop=1' frameborder='0' allowfullscreen></iframe></div>

