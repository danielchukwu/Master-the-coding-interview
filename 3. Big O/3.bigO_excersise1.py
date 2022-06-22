from operator import truediv


def funChallenge(array):
   a = 10       # O(1)
   a = 50 + 3   # O(1)

   for i in array:   # O(n)
      def anotherFunction(): return a + a
      anotherFunction()   # O(1)
      stranger = True     # O(1)

   return a

funChallenge([1, 2, 3])
