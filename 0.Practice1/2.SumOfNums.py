# Python - 3.10
# Topic - Coding Interview
# Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that 
# they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.
# Example 1:

# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
# Example 2:

# Input: nums = [3,2,4], target = 6
# Output: [1,2]
# Example 3:

# Input: nums = [3,3], target = 6
# Output: [0,1]


# SOLUTION 1
# would be to use a double for loop to check and sum the items checking on each iteration if the sum equals the target - if it does return the indices of both elements else continue iteration

def findSum1(arr, target):
   for i, each in enumerate(arr):
      for j, item in enumerate(arr):
         if (i == j): continue   # don't use the same element twice
         if (arr[i] + arr[j] == target):
            print(f"{i, j} - {each} + {item} = {target}")
            return i, j

# findSum1([2,7,11,15], 9)  # Time O(n^2) |Space O(1)


# SOLUTION 2
# We could use two pointers - one at the start of the array (i), the other at the end of the array (j). Provided that the array is ordered - we can check if sum of first and last items in the array is less, greater or equal to the target. whichever result we get we either adjust any of the pointers or return our result


def findSum2(arr, target):
   # check params: length,
   if (len(arr) < 2): return "no result found"
   start = 0           # index of start
   end = len(arr)-1   # end of array

   # iterate through array and find sum then
   # return indices
   while (start < end):
      sum = arr[start] + arr[end]
      if (sum == target):
         print(f"sum found: {start, end}")
         return start, end
      elif (sum < target):
         # move start +1
         start+=1
      else:
         # move end -1
         end-=1

   return f"no indices sum to {target}"


# findSum2([2,7,11,15], 13) # Time O(n) and Space O(n)
# def findSum(arr, target):


# interviewer: okay i like that solution but what if the array wasn't ordered - how would you go about solving this problem

# SOLUTION 3
# first off i want to make use of a HashTable data sturcuture (thanks to it's constant time lookup and insertion that will help us in the future) then we want to simply iterate through the array using a for loop and on each iteration we want to check if the current iteration elements compliment is in our hash table data structure -> if it is then we have found our pairs - if not we add the current iteration elements compliment and continue to the next iteration

def findSum3(arr, target):
   hashTable = {}

   # iterate through array with i=index and 
   # item = current iter element
   for i, item in enumerate(arr):
      compliment = str(target - item)

      # print(item, " in ", hashTable)
      # check if compliment of pair that
      # adds up to given target is in our hash table
      if (str(item) in hashTable):
         return (i, hashTable[str(item)])
      else:
         hashTable[compliment] = i
   
   return "sum could not be found"

result = findSum3([2,7,11,15], 9) # Time O(n) and Space O(n)
print(result)