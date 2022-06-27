# Python - 3.10
# Topic - Classes in Python

class Player:

   def __init__(this, name, position) -> None:
      this.name = name
      this.position = position

   def introduction(this):
      print(f"Hi I am {this.name}, a {this.position}")

# player1 = Player("daniel", "warlord")
# player1.name = "Nonso"
# player1.introduction()

# The Below Child Class of Player - by only adding pass inside --> it inherits every property and method from Player
class SoccerPlayer(Player):
   pass

# soccerPlayer1 = SoccerPlayer("sterling", "right-winger")
# print(soccerPlayer1.name)
# soccerPlayer1.introduction()

# The Below Child Class of Player - by adding the __init__ (pythons constructor). we overwrite the parents --> so in other to still maintain the inheritance of the Parents propertise and methods we use the super() function

class BasketballPlayer(Player):

   def __init__(self, name, position, can_dunk, mvp_count):
      self.can_dunk = can_dunk
      self.mvp_count = mvp_count
      super().__init__(name, position)
      # Player.__init__(self, name, position)  # Another option for inheriting Players Propertise and Method 
   
   def highlight(self):
      print(f"{self.name} just won the Dunk Contest!!!")

baller = BasketballPlayer("Russel Westbrook", "point-guard", True, 3)
# baller.introduction()
# baller.highlight()

arr1 = [1, 2, 3]
print(arr1)
del arr1[-1]
print(arr1)
