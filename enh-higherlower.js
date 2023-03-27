// generate a random number between 1 & 20.
let maxGuess = (Number(prompt('How high should we guess?')));
maxGuess = Math.round(maxGuess);
//Validate the guess is a positive number & round it to the nearest whole number
while(maxGuess <=0 || isNaN(maxGuess)){
    maxGuess = Number(prompt('Please input a valid positive number.'))
}
maxGuess = Math.round(maxGuess);
console.log(maxGuess);
//Change the heading to prompt the user to guess between 1 and their desired maximum guess
let guessMessage = document.getElementById('userChoice');
guessMessage.innerHTML = "Please guess a number between 1 and " + maxGuess;

//Generate a random number between 1 and the user's maximum guess & log it
let num = Math.floor(Math.random()* (maxGuess)) +1;
console.log('The generated number is ' +num);


//Function that checks for duplicate answers in the array
function duplicateCheck (guess){
    i = guessTracker.indexOf(guess)
    if (i === -1) {
        return false
    }
    else {
        alert( "You've guessed this number already!")
        return true
    }
}

//Check if the user's guess is correct or incorrect, and if incorrect tells them where they need to guess higher or lower
let guessTracker = []
function do_guess(){
    let guess = Number(document.getElementById('guess').value);
    let message = document.getElementById('message');
    
    if (duplicateCheck(guess) == true){
        return
    }

    if(guess == num){
        guessTracker.push(guess)
        message.innerHTML = "You got it! It took you " +guessTracker.length+ " tries and your guesses were " +guessTracker.join(', ')+"."
        console.log(guessTracker)
        
    }
    else if (guess > num && guess < maxGuess){
        message.innerHTML = 'You guessed incorrectly. Try a lower number.'
        guessTracker.push(guess)
        console.log(guessTracker)
    }
    else if (guess < num && guess >=1){
        message.innerHTML = 'You guessed incorrectly. Try a higher number.'
        guessTracker.push(guess)
        console.log(guessTracker)
    }
    else if (isNaN(guess)){
        alert('That is not a number!')
    }
    else if (guess <1 || guess > maxGuess){
        alert('That number is not in range, try again.')
    }
} 
