var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var five = require("johnny-five");

var board = new five.Board();
var myMotion = false;

board.on("ready", function() {
    console.log('Arduino connected');
    led = new five.Led(13);
    motion = new five.Motion(12);

    motion.on("calibrated", function() {
      console.log("calibrated");
    });

    motion.on("motionstart", function(data) {
        console.log(data.detectedMotion);
        myMotion = data.detectedMotion;
        if (myMotion === true) {
          console.log('motionstart', data.detectedMotion);
          myMotion = data.detectedMotion;
          io.emit('motionstart', 'robot coming');
        }
    });
    motion.on("motionend", function() {
      console.log("motionend");
    });

    io.on('connection', function(socket){
      socket.on('chat message', function(msg){
        io.emit('chat message', msg);
      });
      socket.on('led:on', function (data) {
          led.on();
          console.log('LED ON RECEIVED');
      });
      socket.on('led:off', function (data) {
          led.stop().off()
          console.log('LED OFF RECEIVED');
      });
      socket.on('led:blink', function (data) {
          led.blink(1000);
          console.log('LED BLINK RECEIVED');
      });

    });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//Socket connection handler
io.on('connection', function (socket) {
        console.log(socket.id);
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
