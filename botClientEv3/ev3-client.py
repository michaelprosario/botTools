#!/usr/bin/env python3

import paho.mqtt.client as mqtt

# This is the Subscriber

def on_connect(client, userdata, flags, rc):
  print("Connected with result code "+str(rc))
  client.subscribe("topic/bot")

def on_disconnect(client, userdata, rc):
    print("Disconnect, reason: " + str(rc))
    print("Disconnect, reason: " + str(client))

def on_message(client, userdata, msg):
  print(msg.payload.decode())
    
client = mqtt.Client()
client.connect("test.mosquitto.org",1883,60)

client.on_connect = on_connect
client.on_message = on_message
client.on_disconnect = on_disconnect

client.loop_forever()