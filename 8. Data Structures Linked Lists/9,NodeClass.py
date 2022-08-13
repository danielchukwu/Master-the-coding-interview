# Python - 3.10
# Topic - Build a Data Structure
# program - Exercise - go ahead and create a Linked List Data Structure

class Node:
   def __init__(self, value) -> None:
      self.value = value
      self.next = None

class LinkedList:
   def __init__(self, value) -> None:
      self.head = Node(value)
      self.tail = self.head
      self.length = 1

   def append(self, value):
      newNode = Node(value)
      self.tail.next = newNode
      self.tail = newNode
      self.length+=1
      return self

   def prepend(self, value):
      newNode = Node(value)
      newNode.next = self.head
      self.head = newNode
      self.length+=1
      return self

   def printList(self):
      currentNode = self.head
      nodesArray = []

      while(currentNode):
         nodesArray.append(str(currentNode.value))
         currentNode = currentNode.next
      
      nodesArray = "-->".join(nodesArray)
      print(nodesArray)
      return self


myLinkedList = LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.prepend(4)
myLinkedList.append(44)
myLinkedList.printList()

# print(myLinkedList.)