
module.exports.botServiceImplementation = class BotServiceTestImplementation{

  forward(){
    console.log("forward");    
    return "forward sent";
  }

  back(){
    console.log("back");
    return "back sent";
  }

  left(){
    console.log("left");
    return "left sent";
  }

  right(){
    console.log("right");
    return "right sent";
  }

}