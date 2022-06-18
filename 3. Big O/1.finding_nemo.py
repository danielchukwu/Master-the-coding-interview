# Python - 3.10
# Topic - DS & Algorithm
# program - A simple function that finds nemo
import time 

names1 = ['nemo']
names100 = ['nemo'] * 100
names1000 = ['nemo'] * 1000
names10000 = ['nemo'] * 10000
names100000 = ['nemo'] * 100000

# print(names)
def findNemo(array):
   start = time.time()
   for i in array:
      if i == "nemo":
         print("Found Nemo!")
   end = time.time()
   print(f'findNemo function took {end-start} ms')

findNemo(names10000)