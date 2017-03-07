# LED Hello World Motion Sensor ChatRoom#
## ChatRoom controlled LED Blink with Motion Sensor reporting ##


This is a LED Hello World using modified source code for a very simple chat example used for the [Getting Started](http://socket.io/get-started/chat/) guide of the Socket.IO website.

A motion sensor will chat if movement is detected.
I used this one from Parallax: http://www.jameco.com/z/555-28027-Parallax-PIR-Sensor-Rev-B-_2082927.html

This uses Socket.IO, Johnny-Five, and an Arduino. It can be run from any computer, including a Raspberry PI.


###  Electronics ##
* Connect the Arduino to your computer via USB
* Connect LED positive to Arduino port 13
* Connect Motion Sensor positive to Arduino port 12

###  Install Dependencies
* git clone https://github.com/zoobot/ChatRoom-controlled-LED-Blink.git
* npm install


###  Run the Server ##
* Run node server.js
* Open a browser on http://localhost:3000


###  LED Control Commands ##
* Type on, off, or blink to get the LED to blink

