# Python - 3.10
# Topic - 
# program - Given 2 arrays that are sorted, merge this two arrays into one big one
# Input  = [0, 3, 4, 31], [4, 6, 30]
# Output = [0, 3, 4, 4, 6, 30, 31]


# SOLUTION 1
# we could use two pointers to iterate through both arrays and just add them in order inside a while loop and increment a pointer as u go on -> once an array is exhausted we can go ahead and add the rest of the elements in the one yet to be exhausted
# interviewer - okay, that sounds okay go ahead and code it let's see

def mergeArrays(arr1, arr2):
   # check param: length, empty
   if len(arr1) == 0: return arr2
   elif len(arr2) == 0: return arr1

   mergedArray = []
   i = 0  # index for arr1
   j = 0  # index for arr 2

   # iterate through both arrays and add elements 
   # from both in order
   while (i != len(arr1)) and (j != len(arr2)):
      if (arr1[i] <= arr2[j]):
         mergedArray.append(arr1[i])
         i+=1
      else:
         mergedArray
         mergedArray.append(arr2[j])
         j+=1

   # check if there exists any element in an 
   # array that hasn't been added
   if (i == len(arr1)):
      # add arr2
      mergedArray += arr2[j:]
   elif (j == len(arr2)):
      # add arr1
      mergedArray += arr1[i:]

   print(mergedArray)
   return mergedArray


obj = mergeArrays([0, 3, 4, 31], [4, 6, 30])