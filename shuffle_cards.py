# Intervirw q

cards = ["B2","B1313132","SDDSA","A2123"]

from random import randint

def shuffle(cards):

  for i in range(len(cards)):
    b = randint(0,len(cards)-1)
    s = cards[b]
    cards[b] = cards[i]
    cards[i] = s

  print(cards)
  return cards

shuffle(cards)
shuffle(cards)
  