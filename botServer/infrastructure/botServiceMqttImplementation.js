var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function() {
  console.log('** connection');
  client.subscribe('topic/bot', function(err) {
    if (!err) {
      console.log('** topic/bot connected');
    }
  });
});

module.exports.botServiceImplementation = class BotServiceTestImplementation {
  forward() {
    client.publish('topic/bot', 'forward');
    return 'forward sent';
  }

  back() {
    client.publish('topic/bot', 'back');
    return 'back sent';
  }

  left() {
    client.publish('topic/bot', 'left');
    return 'left sent';
  }

  right() {
    client.publish('topic/bot', 'right');
    return 'right sent';
  }
};
