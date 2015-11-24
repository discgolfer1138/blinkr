var Gpio = require('onoff').Gpio,
    prompt = require('prompt');

prompt.start();

prompt.get(['pin'], function(err, result){
    led = new Gpio(parseInt(result.pin), 'out');

    var iv = setInterval(function(){
      led.writeSync(led.readSync() === 0 ? 1 : 0);
    }, 500);

    // Stop blinking the LEDs and turn them off after 5 seconds.
    setTimeout(function() {
      clearInterval(iv); // Stop blinking
      led.writeSync(0);  // Turn LED off.
      led.unexport();    // Unexport GPIO and free resources
    }, 1000);
});
