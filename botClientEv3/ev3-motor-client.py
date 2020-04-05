from ev3dev2.motor import LargeMotor, MediumMotor, OUTPUT_A, OUTPUT_B, SpeedPercent, MoveTank
from ev3dev2.sensor import INPUT_1
from ev3dev2.sensor.lego import TouchSensor
from ev3dev2.led import Leds

import time
import termios
import tty
import sys
import paho.mqtt.client as mqtt

motor_left = LargeMotor('outB')
motor_right = LargeMotor('outC')
#motor_a = MediumMotor('outA')

#==============================================

def getch():
   fd = sys.stdin.fileno()
   old_settings = termios.tcgetattr(fd)
   try:
      tty.setraw(fd)
      ch = sys.stdin.read(1)
   finally:
      termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
   
   return ch

#==============================================

#def fire():
#   motor_a.run_timed(time_sp=3000, duty_cycle_sp=100)

#==============================================

def forward():
   motor_left.run_direct(duty_cycle_sp=75)
   motor_right.run_direct(duty_cycle_sp=75)

#==============================================

def back():
   motor_left.run_direct(duty_cycle_sp=-75)
   motor_right.run_direct(duty_cycle_sp=-75)

#==============================================

def left():
   motor_left.run_direct( duty_cycle_sp=-75)
   motor_right.run_direct( duty_cycle_sp=75)

#==============================================

def right():
   motor_left.run_direct( duty_cycle_sp=75)
   motor_right.run_direct( duty_cycle_sp=-75)

#==============================================

def stop():
   motor_left.run_direct( duty_cycle_sp=0)
   motor_right.run_direct( duty_cycle_sp=-0)

#==============================================

# This is the Subscriber
def on_connect(client, userdata, flags, rc):
  print("Connected with result code "+str(rc))
  client.subscribe("topic/bot")

def on_message(client, userdata, msg):
  k = msg.payload.decode()
  print(k)
  if k == 'forward':
    forward()
    time.sleep(2)
    stop()

  if k == 'back':
    back()
    time.sleep(2)
    stop()

  if k == 'left':
    left()
    time.sleep(2)
    stop()

  if k == 'right':
    right()
    time.sleep(2)
    stop()

  if k == 'stop':
    stop()

  if k == 'quit':
    exit()
    
client = mqtt.Client()
client.connect("test.mosquitto.org",1883,60)
client.on_connect = on_connect
client.on_message = on_message
client.loop_forever()


