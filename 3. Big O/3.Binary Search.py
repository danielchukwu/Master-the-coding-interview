# Python - 3.10
# Topic - 
# program - 

import enum
import time

nemo = ['michael', 'dwight', 'jim', 'pam', 'oscar', 'angela', 'toby', 'roy', 'shela', 'daniel'] 
nemo2 = ["jake"]
nemo2.append('toby')

# nemo2.sort()

print(nemo2)

def binarySearch(list, find):
   start = time.time()
   newList = list
   i = 0
   while (i < len(list)):
      mid_index = len(newList) // 2
      if newList[mid_index] == find:
         print(f"{find} found at iteration {i}")
         break
      elif newList[mid_index] > find: # left
         newList = newList[:mid_index]
      else: # right
         newList = newList[mid_index+1:]

      # print(f"iteration {i}")
      i+=1
   end = time.time()
   print(f"Runtime: {end-start}")


def linearSearch(list, find):
   start = time.time()
   for i, each in enumerate(list):
      if each == find:
         print(f"{find} found at iteration {i}")
         break
      # else:
         # print(f"iteration {i}")
   end = time.time()
   print(f"Runtime: {end-start}")


binarySearch(nemo2, 'toby')
linearSearch(nemo2, 'toby')