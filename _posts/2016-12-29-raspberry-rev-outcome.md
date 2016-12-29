---
layout: post
title: RaspberryRev Outcome
image: /images/raspberry-rev/Lego Holes 2-min.jpg
---

*The content below show the vague process of how the car was developed. If you want to know more about this project, checkout the embedded pdf below of my project submission.*

Going back to my Product Design A-Level, I wanted to make a iPhone controlled remote controlled car which could be built with Lego. 

I designed and made a chassis which holds the Raspberry Pi, motor controller unit, rechargeable battery for Raspberry Pi, and 9v battery for motors. As well as this, on the underside of the chassis is lego surface, which allows you to stick lego items onto the underside.

![]({{ site.baseurl }}/images/raspberry-rev/Lego Holes 2-min.jpg)

![]({{ site.baseurl }}/images/raspberry-rev/Lego Holes 2-min.png)

![]({{ site.baseurl }}/images/raspberry-rev/Photo 07-03-2014 18 23 21-min.jpg)

![]({{ site.baseurl }}/images/raspberry-rev/Photo 16-03-2014 17 00 29 min.jpg)

![]({{ site.baseurl }}/images/raspberry-rev/Photo 16-03-2014 17 00 51-min.jpg)

![]({{ site.baseurl }}/images/raspberry-rev/IMG_134-min.JPG)

![]({{ site.baseurl }}/images/raspberry-rev/IMG_1337-min.JPG)

##### The technical setup consisted of the following.

1. Raspberry Pi Model B
2. [Dual Bridge L298N Stepper Motor Driver Controller Board Module](http://www.ebay.co.uk/sch/items/?_nkw=l298n&_sacat=&_ex_kw=&_mPrRngCbx=1&_udlo=&_udhi=&_sop=12&_fpos=&_fspt=1&_sadis=&LH_CAds=&clk_rvr_id=1146263434105&rmvSB=true)
    - A pair of inputs that can be controlled by TTL logic levels (like the Raspberry Pi uses).
    - Connections for a 9 Volt battery.
    - A pair of outputs to connect to the DC motors.
3. 2 x 9v motors
	- One motor will control the steering.
	- The other for the forward and backward drive.
	- I used [LEGO 9V Technic Motors](http://www.philohome.com/motors/motorcomp.htm).
4. 9v Battery
	- Connects to the L298N Stepper Motor Driver which then powers the 2 motors in parallel.
5. Rechargeable Power Bank
	- 100-240v input, 5.1v output.
	- Commonly used for recharging mobile phones.

Below is example code which demonstrates control of the motors. The python code is executed from my computer which is connected to the Raspberry Pi over wifi using SSH.

<pre><code>
#These are the keyboard mappings
#q = Go forward
#a = Stop going forward or back
#z = Go back
#i= Go left
#o = Stop steering
#p = Go right

#Get the GPIO module
import RPi.GPIO as GPIO

#Get the time module
import time

#A routine to control a pair of pins
def ControlAPairOfPins(FirstPin,
  FirstState,SecondPin,SecondState):
  print "Controlling them pins"
  if FirstState == "1":
    GPIO.output(int(FirstPin),True)
  else:
    GPIO.output(int(FirstPin),False)

  if SecondState == "1":
    GPIO.output(int(SecondPin),True)
  else:
    GPIO.output(int(SecondPin),False)
  #Just retur
  return

####Main body of code

#Get rid of warnings
GPIO.setwarnings(False)

#Set the GPIO mode
GPIO.setmode(GPIO.BOARD)
#Set the pins to be outputs
GPIO.setup(11,GPIO.OUT)
GPIO.setup(13,GPIO.OUT)
GPIO.setup(19,GPIO.OUT)
GPIO.setup(21,GPIO.OUT)

while True:
  MyChar = raw_input("Press a character:")
  print "You pressed: " + MyChar
  if MyChar == "q":
    ControlAPairOfPins("19","1","21","0")
    print "Forward"
  elif MyChar == "a":
    ControlAPairOfPins("19","0","21","0")
    print "Stop"
  elif MyChar == "z":
    ControlAPairOfPins("19","0","21","1")
    print ("Back")
  elif MyChar == "i":
    ControlAPairOfPins("11","1","13","0")
    print "Left"
  elif MyChar == "o":
    ControlAPairOfPins("11","0","13","0")
    print "Stop steering"
  elif MyChar == "p":
    ControlAPairOfPins("11","0","13","1")
    print "Right"
  else:
    print "Not a command"
</code></pre>



*Please note that this pdf was converted from a PowerPoint presentation. Because of this, embeded videos which were once on the PowerPoint are not present on this pdf.*

<iframe src="https://docs.google.com/viewer?srcid=0BxnFEsoXA64PY004UkdzOFNuRjA&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="100%" height="700"></iframe>


I also created a website which is an online instruction manual on how to assemble the lego parts. It can be found at [jamesmilton.me/raspberryrev/]({{ site.baseurl }}/raspberryrev/).


If you're interested  in seeing how I designed the licence plate logo, visit [this post]({{ site.baseurl }}/raspberry-rev-design/).