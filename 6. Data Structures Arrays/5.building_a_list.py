# Python - 3.10.0
# Lecture - Building an Array from scratch
# Tip: In javascript Arrays are simply just objects with keys acting as indexes
# methods to create: get, append, pop, delete

class MyArray:

   def __init__(this):
      this.length = 0
      this.data = {}
   
   def get(self, index):
      return self.data[index]

   def append(self, item):
      self.data[self.length] = item
      self.length += 1
      return self.data

   def pop(self):
      item = self.data[self.length-1]
      del self.data[self.length-1]
      self.length -= 1
      return item

   def delete(self, index):
      self.shiftIndex(index)
      return

   def shiftIndex(self, index):
      # [1, 2, 3, 4]
      i = index
      while i < len(self.data) - 1:
         self.data[i] = self.data[i+1]
         i+=1
      del self.data[self.length-1]


myList = MyArray()
for name in ["tobi", "gabriel", "grateman", "nelson", "wisdom", "emma"]: myList.append(name)

# myList.pop()
myList.delete(2)
print(myList.data)
