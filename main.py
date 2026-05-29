import random
words = ["python", "developer", "internship", "computer", "programming","python","laptop","mobile","keyboard","monitor","internet","computer","developer","software","programming"]
chosen_word = random.choice(words)
display = ["_"] * len(chosen_word)
guessed_letters = []
attempts = 6
print("🎮 Welcome to Hangman Game!")
while attempts > 0 and "_" in display:

    print("\nWord:", " ".join(display))
    print("Guessed Letters:", guessed_letters)
    print("Remaining Attempts:", attempts)

    guess = input("Enter a letter: ").lower()

    if guess in guessed_letters:
        print("⚠️ You already guessed that letter.")
        continue

    guessed_letters.append(guess)

    if guess in chosen_word:
        print("✅ Correct Guess!")

        for i in range(len(chosen_word)):
            if chosen_word[i] == guess:
                display[i] = guess
    else:
        print("❌ Wrong Guess!")
        attempts -= 1

if "_" not in display:
    print("\n🎉 Congratulations! You guessed the word:", chosen_word)
else:
    print("\n💀 Game Over!")
    print("The word was:", chosen_word)