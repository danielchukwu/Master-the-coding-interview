# Python - 3.10
# Topic - Build a Data Structure
# program - Exercise - go ahead and create a Linked List Data Structure

class Node:
   def __init__(self, value) -> None:
      self.value = value
      self.next = None

newNode = Node(10)
print(newNode.next)
