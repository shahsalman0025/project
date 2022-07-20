from typing import Hashable
import pyautogui as huzi,time

from zmq import HELLO_MSG
limit=input("enter no of text  :")
msg=input("you msg  :")
i=1
time.sleep(5)
while i<=int(limit):
    huzi.typewrite(msg)
    huzi.press("Enter")
    print(i)
    i+=1
