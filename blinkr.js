var Gpio = require('onoff').Gpio,
    rled = new Gpio(17, 'out'),
    bled = new Gpio(22, 'out'),
    gled = new Gpio(27, 'out');


function blink(led, frequency, duration){
  var iv = setInterval(function(){
    led.writeSync(led.readSync() === 0 ? 1 : 0);
  }, frequency);

  setTimeout(function() {
    clearInterval(iv); // Stop blinking
    led.writeSync(0);  // Turn LED off.
    led.unexport();    // Unexport GPIO and free resources
  }, duration);
}

blink(rled, 250, 20000);
blink(bled, 500, 20000);
blink(gled, 1000, 20000);
