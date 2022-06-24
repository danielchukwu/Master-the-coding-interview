# Python - 3.10
# Topic - White Board Coding Interview
# program - I am going to give you a collection of numbers, and i need you to take this collection of numbers and find a matching pair that is equal to a sum that i am going to give you as well
# Inputs(arrays) and outputs(sum)
# collection 1 : [1, 2, 3, 9] sum = 8
# collection 2 : [1, 2, 4, 4] sum = 8

# Starting the coding interview
# 1st: Step by step through the problem 1-5
# Ans 1: in collection 1 there is no pair of numbers that add up to 8 ✅            - No
# Ans 2: in collection 2 we have a pair in the collection that adds up to 8(4, 4)   - Yes

# How are this numbers given, can i assume that they are in memory? 
# Interviewer = Yes they are in memory, you can go with an array and you can also assume that they are in order

# Can i repeat elements at the same index in my solution?
# Interviewer = No, you are not allowed to they have to be different pairs

# Are the numbers in the array always integers or are they floating point?
# Interviewer = You can assume that they'll always be integers



# ANSWER - 1st Try
# Ans: The simplest solution that comes to mind would be to compare every single possible pair in an array using a double for loop without repeating - and that would leave us with an O(n^2) time complexity, Lol - not very efficient but that would be 1 way to solve it
# Interviewer - True, that would work but very time consuming and costly for the company - so if you could find an algorithm better than a Quadratic time that the collection is sorted in an ascsending order

# ANSWER - 2nd Try
# Ans: we could start with the first element and brinary search the rest of the array for a match and then binary search the next element then binary search the rest for a match and so on
# Interviewer - True, Valid answer but that would still be too costly since you are doing a log n for finding and an n for each iteration --> we would be left with an O(n log n) and that's still too costly

# ANSWER - 3rd Tru
# Okay Let me think - How about at the start of the problem i use 2 pointers(pointing to start and end)
# e.g [1, 2, 3, 9]
#      ^        ^
# and check the sum = if it equals 8 --> and if it does we have found a pair soo we stop the program
# But if it doesn't we check
#    - is sum greater than 8 --> if True we move the lastpointer -1
# e.g [1, 2, 3, 9]
#      ^     ^
#    - now is sum = to 8 --> if True we have found a pair but if false --> is sum greater than or less than 8
#    - if sum less than 8 --> is True we move the firstpointer +1
# e.g [1, 2, 3, 9]
#         ^  ^
# and by doing this we should end up with a Linear Time Complexity O(n)
#
# Interviewer - Okay we could do that, but you explained it in a non working example, how about you do that explanation again but in a working one(hint: using collection2)

# -- PAUSE --
# NOTICE - At this point you are owning the interview - you are the absolute BOSS right now
# -- PLAY --

# Now when our loop starts - we sum the first and the last item in the array and if they are equal = to 8 we found a pair -- program ends✅
# If not
# if less than 8 - we move the firstpointer +1
# and if greater than - we move the lastpointer -1
# repeat step 55 and 56 over and over again until we find a pair that sums up to 8 - but if we don't and 
# if last index and first index become thesame we exit the program - no pair was found
# e.g [1, 2, 4, 4]
#      ^        ^  == 1 + 4 = 5 < 8 --> move 1st pointer +1
# e.g [1, 2, 4, 4]
#         ^     ^  == 2 + 4 = 6 < 8 --> move 1st pointer +1
# e.g [1, 2, 4, 4]
#            ^  ^  == 4 + 4 = 8 == 8  --> MATCH FOUND⭐ - Program Ends with Linear Time Complexity

# INTERVIEWER - GOOD JOB ⭐. So which programming language would you like to use to solve this problem
# Ans - Well i personally would prefer using Python🐍
# INTERVIEWER - Go For It. (she says to herself **I already love him - what a great guy. he has all the skills i am looking for)

# You - I just remembered i don't know how i am supposed to return this. Should it be a yes i found it or the indexes of the pair or the actual pairs
# Interviewer - I would prefer you return if you found it or not. But let's say you were going to return a pair, how could that be a problem returning a pair if there wasn't no pair