# Python - 3.10
# Topic - Interview Question - Data Structures and Algorithms
# program - Given 2 arrays that are sorted, merge this two arrays into one big one

# Input
# [0, 3, 4, 31], [4, 6, 30]
# Output
# [0, 3, 4, 4, 6, 30, 31]


# Starting Interview

# You - So does my result have to be sorted
# interviewer - Ya, it has to be

# 1ST APPROACH
# My first approach would be to create a new list in my function as well as an i,j = 0; variables that i will use in a while loop to check and compare each item in both arrays, if both items are equal to i want to add both and increment i, j, if one is less than the other i want to add the lesser one and increment it's index for the next comparison. At the point where we have exhausted any of our array we want to simply add the remainder of the other array and then break out of the loop

# interviewer: i love that. let's see that in code


def mergeSortedArrays(arr1, arr2):
   # Input Validation
   if (len(arr1) == 0 or len(arr2) == 0): return arr1 + arr2
   bigList = []
   i = 0
   j = 0

   # [0, 3, 4, 31]   | len = 4
   # [4, 6, 30]  | len = 3
   while True:
      # check if we've exhausted any array, add the other array remaining and break out of loop
      if (i == len(arr1) and j == len(arr2)): 
         break
      elif (i == len(arr1)):
         bigList += arr2[j:]
         break
      elif (j == len(arr2)):
         bigList += arr1[i:]
         break

      if (arr1[i] == arr2[j]):
         bigList.append(arr1[i])
         bigList.append(arr2[j])
         i += 1
         j += 1
      elif (arr1[i] < arr2[j]):
         bigList.append(arr1[i])
         i += 1
      elif (arr1[i] > arr2[j]):
         bigList.append(arr2[j])
         j += 1

   # print(f"i: {i} | j: {j}")   
   print(bigList)
   return bigList


arr1, arr2 = [0, 3, 4, 31], [4, 6, 30]

mergeSortedArrays(arr1, arr2)


# Interviewer - That's an absoultely great solution. How would you make this code more readable and cleaner