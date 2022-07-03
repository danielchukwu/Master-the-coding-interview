# Python - 3.10
# Topic - Interview Question - Data Structures and Algorithms
# program - Write a function that reverses a string


# You - So let's say our test input is "abcdefg" and our result should be "gfedcba". would that be a good representation of the input and output of our program
# Interviewer - Ya. That works for sure

# You - Do i have Time and Space
# Interviewer - Ya but nothing more than a space complexity of O(n)

# ANSWER 1
# My first solution for this would be to first of create a function that takes in 1 parameter which is the string and then convert the string into a list. using a while loop i want to iterate through the splited string backwards and then just concatenate the string in that form and then return it once my loops done. leaving us with a Time Complexity of O(2n) --> O(n) and a Space Complexity of O(n + 1) --> O(n)

# Interviewer: Okay i think we can work with that. So what language would you like to use to code this
# You: Python


def reverse(string):
   strList = list(string)
   length = len(strList) - 1

   rString = ""
   while length >= 0:
      rString += strList[length]
      length -= 1

   return rString

string1 = "abcdefg"
reverse_string = reverse(string1)  # O(n)
print(reverse_string)