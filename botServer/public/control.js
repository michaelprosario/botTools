
function executeAction(action)
{
  $.ajax({url: action, success: function(result){
    console.log(result);
  }});
}

function forward(){
  executeAction("forward");
}

function back(){
  executeAction("back");
}

function stop(){
  executeAction("stop");
}

function left(){
  executeAction("left");
}

function right(){
  executeAction("right");
}