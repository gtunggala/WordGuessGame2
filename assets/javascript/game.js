
//if user presses key:
//if the key is correct- show up on screen
//if wrong- decrease amount of guessing
document.addEventListener("keydown", function(event){
    console.log(event.key);   
}
)
// this is the correct number of guesses initially
let wins = 0;
// word is what user is guessing
let word = "madonna";

// for each letter in the word we want to create a string that creates blanks 
let wordLength = word.length;
let hiddenWord = '';
for(let i = 0; i < wordLength; i++) {
    hiddenWord+='_ ';
}

// as the user guesses the work, for correct letters, disply them
// when user types letter
// grab the letter
// loop over word
// if letter exist
// find the index
// substitute letter for underscore
console.log(hiddenWord);
