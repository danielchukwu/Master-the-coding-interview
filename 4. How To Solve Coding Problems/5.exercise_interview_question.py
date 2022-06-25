# Python - 3.10
# Topic - coding interview

# Problem:
#    Given 2 Arrays, create a functon that let's a user know (true/false) whether these two arrays contain any common items
# E.g 
# const array1 = ['a', 'b', 'c', 'x']   |  const array1 = ['a', 'b', 'c', 'x']
# const array2 - ['z', 'y', 'i']        |  const array2 - ['z', 'y', 'x'] 
# should return False                   |  should return True

# Starting the coding interview -->

# inputs: 2 parameters | arrays
# output: return true or false

# You - is our goal here to be as efficient as possible with our function. Which is more important to us here, is it Time Complexity or Space Complexity
# or  - how large are our arrays(inputs) going to get **if the interviewer says just 5  - then maybe time complexity isn't whats the most important to us here --> maybe our priority would be space

# You - Are the elements in the array always going to be strings or could they also be integers or floats or dictionaries e.t.c
# Interviewer - No let's say in this case they are only allowed to be either numbers or strings

# You - Is an array allowed to have repeating elements e.g array1 having  repeating b's : array1 = ['a', 'b', 'b', 'c', 'x']
# Interviewer - no it isn't allowed

# ANSWER - 1
# My first approach to solving this problem would be using a nested for loop to iterate through each array checking if there is match - if there is return true else after iteration and no match was found, then return False. That function would have a Big O of O(n^2). But if we considered different terms for different inputs the Big O would be O(a*b).

# interviewer - well that would be 1 way to solve this problem. but how about a more efficient function with a better Time Complexity

# ANSWER - 2
# Well i could add both arrays together at the start of the Algorithm to form a new array (in python addition i think is Constant Time). Am i allowed to do that?
# interviewer: well i guess you are
# You continue: so if i do that, i will go ahead to iterate through this new array and i would store each element i come across in a hash table(with a Constant Time lookup and insertion) and before storing them i would first ask is the current element i am iterating over in our hash table --> if it is then we return True --> else: we continue till we've exhausted the new array and then we return False
# interviewer: Wow. I love it --> So how would you like to code this
# You: using Python for sure

# Okay: Let's get Coding

def hasCommonItem(arr1, arr2):
   full_arr = arr1 + arr2
   common = set()
   
   for item in full_arr:
      if item in common:
         return True
      common.add(item)

   return False

result = hasCommonItem(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])
print(f"Common: {result}")