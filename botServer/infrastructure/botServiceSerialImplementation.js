var serialport = require('serialport');

// port config 
const portName = "/dev/thing";
const baudRate = 9600;

var port = new serialPort.SerialPort(portName, baudRate);
module.exports.botServiceImplementation = class BotServiceTestImplementation{

  forward(){
    port.write("forward");    
    return "forward sent";
  }

  back(){
    port.write("back");
    return "back sent";
  }

  left(){
    port.write("left");
    return "left sent";
  }

  right(){
    port.write("right");
    return "right sent";
  }

}