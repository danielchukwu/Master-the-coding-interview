# Python - 3.10
# Topic - An efficient algorithm to find nemo
# program - 

nemo = ['michael', 'dwight', 'jim', 'pam', 'oscar', 'angela', 'toby', 'roy', 'shela', 'daniel']
nemo.sort()
print(nemo)


def findToby(array):
   arraySize = len(array)-1
   newArray = array

   i = 0
   while i < arraySize:
      index = len(newArray) // 2
      if newArray[index] == 'toby':
         print("I found Toby")
         break
      elif newArray[index] < 'toby':
         newArray = newArray[index+1:]
      elif newArray[index] > 'toby':
         newArray = newArray[:index]
      
      print(i)
      i+= 1
   print("Done!")

findToby(nemo)

# Answer
# ['angela', 'daniel', 'dwight', 'jim', 'michael', 'oscar', 'pam', 'roy', 'shela', 'toby']
# ['oscar', 'pam', 'roy', 'shela', 'toby']
# ['shela', 'toby'] Found