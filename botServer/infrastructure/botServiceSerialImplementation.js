const SerialPort = require('serialport');

// port config 
const portName = "/dev/thing";

const port = new SerialPort(portName);
module.exports.botServiceImplementation = class BotServiceTestImplementation{

  forward(){
    port.write("forward\n");    
    return "forward sent";
  }

  back(){
    port.write("back\n");
    return "back sent";
  }

  left(){
    port.write("left\n");
    return "left sent";
  }

  right(){
    port.write("right\n");
    return "right sent";
  }
}