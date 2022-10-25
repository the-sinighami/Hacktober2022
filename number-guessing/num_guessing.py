import random
r = int(input("Enter the limit : ")) #to set the limit till where the number will be randomly generated
n = random.randrange(1, r)
guess = int(input("Enter any number: "))
while n!= guess:
    if guess < n:
        print("Too low")
        guess = int(input("Enter number again: "))
    elif guess > n:
        print("Too high!")
        guess = int(input("Enter number again: "))
    else:
      break
print("you guessed it right!!")