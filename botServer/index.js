const express = require('express');
const app = express();
const botService = require('./core/services/botService.js');
const botServiceImplementation = require('./infrastructure/botServiceMqttImplementation');

const implementation = new botServiceImplementation.botServiceImplementation();
const service = new botService.BotService(implementation);

app.get('/forward', (req, res) => {
  res.send(service.forward());
});

app.get('/back', (req, res) => {
  res.send(service.back());
});

app.get('/left', (req, res) => {
  res.send(service.left());
});

app.get('/right', (req, res) => {
  res.send(service.right());
});

app.listen(8000, () => {
  console.log('Bot server listening on port 8000!');
});
