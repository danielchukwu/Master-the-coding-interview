# Python - 3.10
# Topic - coding interview
# program - using binary search to solve and find the answer to the collection

# Algorithm


collection1 = [1, 2, 3, 9]
collection2 = [1, 2, 4, 4]

# output = 8

def helpFindPair(first, second, search_collection):
   temp_collection = search_collection
   mid = len(temp_collection) // 2
   i = 0
   while i < len(temp_collection):
      # sanity check:
      if len(temp_collection) < 1:
         return None
      
      if (temp_collection[mid] == second):
         return f"Second Match Found: {first},{temp_collection[mid]}"

      elif (temp_collection[mid] > second): # left of array search
         temp_collection = temp_collection[:mid]
      else: # right of array search
         temp_collection = temp_collection[mid+1:]
      i+=1

def findPairThatSumsToEight(collection):
   # sanity check
   if type(collection) != list or len(collection) < 2:
      print(f"There is no pair in this collection: {collection}")
      return
   
   len_of_col = len(collection)
   i = 0
   while i < len_of_col:
      first = collection[i]
      search_collection = collection[i+1:]
      second = 8 - first

      print(f"first: {first} | second: {second}")
      # Function Call - Binary Search on the rest of the array for the right pair partner
      result = helpFindPair(first, second, search_collection)
      if result != None:
         print(result)
         break
      
      i += 1
      if i == len_of_col: print("Matching Pair That Sums To Eight could not be FOUND!")

findPairThatSumsToEight(False) # O(n^2)