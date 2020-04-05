var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://192.168.1.24');
var topicChannel = 'topic/bot';

client.on('connect', function () {
  console.log('** connection');
  client.subscribe('topic/bot', function (err) {
    if (!err) {
      console.log('** topic/bot connected');
    }
  });
});

module.exports.botServiceImplementation = class BotServiceTestImplementation {
  forward() {
    client.publish(topicChannel, 'forward');
    return 'forward sent';
  }

  back() {
    client.publish(topicChannel, 'back');
    return 'back sent';
  }

  left() {
    client.publish(topicChannel, 'left');
    return 'left sent';
  }

  right() {
    client.publish(topicChannel, 'right');
    return 'right sent';
  }

  stop() {
    client.publish(topicChannel, 'stop');
    return 'stop sent';
  }
};
