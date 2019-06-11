
// //if user presses key:
// //if the key is correct- show up on screen
// //if wrong- decrease amount of guessing
// document.addEventListener("keydown", function(event){
//     console.log(event.key);   
// }
// )
// // this is the correct number of guesses initially
// let wins = 0;
// // word is what user is guessing
// let word = "madonna";

// // for each letter in the word we want to create a string that creates blanks 
// let wordLength = word.length;
// let hiddenWord = '';
// for(let i = 0; i < wordLength; i++) {
//     hiddenWord+='_ ';
// }
// console.log(hiddenWord.split(' '))
// // as the user guesses the word, for correct letters, display them
// // when user types letter
// // grab the letter
// // loop over word
// // if letter exist
// // find the index
// // substitute letter for underscore
// console.log(hiddenWord);


//if user presses key:
//if the key is correct- show up on screen
//if wrong- decrease amount of guessing


// entire object that contains all of the logic and variables
var artistGuessGame = {

    // object of all the artists/words that can be guessed along with the picture

    artistToPick: {
        ['andy warhol']: {
            artist: "andy warhol",
            picture: "assets/images/andy-warhol.jpg"
        },
        ['claude monet']: {
            artist: "claude monet",
            picture: "claude-monet.jpg"
        },
        ['edgar degas']: {
            artist: "edgar degas",
            picture: "edgar-degas.jpg"
        },
        ['edouard manet']: {
            artist: "edouard manet",
            picture: "edouard-manet.jpg"
        },
        ['edward hopper']: {
            artist: "edward hopper",
            picture: "edward-hopper.jpg"
        },
        ['frida kahlo']: {
            artist: "frida kahlo",
            picture: "frida-kahlo.jpg"
        },
        ['henri matisse']: {
            artist: "henri matisse",
            picture: "henri-matisse.jpg"
        },
        ['mary cassatt']: {
            artist: "mary cassatt",
            picture: "mary-cassatt.jpg"
        },
        ['pablo picasso']: {
            artist: "pablo picasso",
            picture: "pablo-picasso.jpg"
        },
        ['salvador dali']: {
            artist: "salvador dali",
            picture: "salvador-dali.jpg"
        },
        ['yayoi kusama']: {
            artist: "yayoi kusama",
            picture: "yayoi-kusama.jpg"
        }

        // artistToPick.replace(/ /g,"-")

        // artistToPick.trim()
        // console.log(artistToPick);

    },

    // variables that set the initial state of game
    artistInPlay: null,
    lettersOfTheArtist: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,

    // using the setupGame method for when the page first loads
    setupGame: function() {
        // random artist is chosen
        var objKeys = Object.keys(this.artistToPick);
        this.artistInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

        // split the chosen artist up into its individual letters.
        this.lettersOfTheArtist = this.artistInPlay.split("");
        console.log(artistGuessGame);
        
        // Builds the representation of the word we are trying to guess and displays it on the page.
        // At the start it will be all underscores since we haven't guessed any letters ("_ _ _ _").
        this.rebuildArtistView();
        // This function sets the number of guesses the user gets, and renders it to the HTML.
        this.processUpdateTotalGuesses();
    },

     // This function is run whenever the user guesses a letter..
    updatePage: function(letter) {
    // If the user has no guesses left, restart the game.
    if (this.guessesLeft === 0) {
      this.restartGame();
    }

    else {
      // Check for and handle incorrect guesses
      this.updateGuesses(letter);

      // Check for and handle correct guesses
      this.updateMatchedLetters(letter);

      // Rebuild the view of the artist name. Guessed letters are revealed, non-guessed letters have a "_".
      this.rebuildArtistView();

      // If the user wins, restart the game.
      if (this.updateWins() === true) {
        this.restartGame();
      }
    }
},

  // This function governs what happens when the user makes an incorrect guess (that they haven't guessed before).
  updateGuesses: function(letter) {
    // If the letter is not in the guessedLetters array, and the letter is not in the lettersOfTheArtist array..
    if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheArtist.indexOf(letter) === -1)) {

      // Add the letter to the guessedLetters array.
      this.guessedLetters.push(letter);

      // Decrease guesses by one.
      this.guessesLeft--;

      // Update guesses remaining and guesses letters on the page.
      document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
      document.querySelector("#guessed-letters").innerHTML =
      this.guessedLetters.join(", ");
    }
  },

   // This function sets the initial guesses the user gets.
   processUpdateTotalGuesses: function() {
    // The user will get more guesses the longer the artist name is.
    this.totalGuesses = this.lettersOfTheArtist.length + 3;
    this.guessesLeft = this.totalGuesses;

    // Render the guesses left to the page.
    document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
    },

  // This function governs what happens if the user makes a successful guess.
  updateMatchedLetters: function(letter) {
    // Loop through the letters of the "solution".
    for (var i = 0; i < this.lettersOfTheArtist.length; i++) {
      // If the guessed letter is in the solution, and we haven't guessed it already..
      if ((letter === this.lettersOfTheArtist[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
        // Push the newly guessed letter into the matchedLetters array.
        this.matchedLetters.push(letter);
        }
      }
    },

    // This function builds the display of the word that is currently being guessed.
    rebuildArtistView: function() {
    // We start with an empty string.
    var artistView = "";

    // Loop through the letters of the word we are trying to guess..
    for (var i = 0; i < this.lettersOfTheArtist.length; i++) {
      // If the current letter has been guessed, display that letter.
      if (this.matchedLetters.indexOf(this.lettersOfTheArtist[i]) !== -1) {
        artistView += this.lettersOfTheArtist[i];
      }
      // If it hasn't been guessed, display a "_" instead.
      else {
        artistView += "&nbsp;_&nbsp;";
      }
    }

    // Update the page with the new string we built.
    document.querySelector("#current-artist").innerHTML = artistView;
  },

  // Function that "restarts" the game by resetting all of the variables.
  restartGame: function() {
    document.querySelector("#guessed-letters").innerHTML = "";
    this.artistInPlay = null;
    this.lettersOfTheArtist = [];
    this.matchedLetters = [];
    this.guessedLetters = [];
    this.guessesLeft = 0;
    this.totalGuesses = 0;
    this.letterGuessed = null;
    this.setupGame();
    this.rebuildArtistView();
  },

  // Function that checks to see if the user has won.
  updateWins: function() {
    var win;

    // this won't work for words with double or triple letters
    // var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
    // this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')

    // If you haven't correctly guessed a letter in the word yet, we set win to false.
    if (this.matchedLetters.length === 0) {
      win = false;
    }
    // Otherwise, we set win to true.
    else {
      win = true;
    }

    // If a letter appears in the lettersOfTheWord array, but not in the matchedLetters array, set win to false.
    // In English, if you haven't yet guessed all the letters in the word, you don't win yet.
    for (var i = 0; i < this.lettersOfTheArtist.length; i++) {
      if (this.matchedLetters.indexOf(this.lettersOfTheArtist[i]) === -1) {
        win = false;
      }
    }

    // If win is true...
    if (win) {

      // Increment wins.
      this.wins = this.wins + 1;

      // Update wins on the page.
      document.querySelector("#wins").innerHTML = this.wins;

    //   Update the song title and band on the page.
    //   Update the artist name on the page.
      document.querySelector("#music").innerHTML = this.artistToPick[this.artistInPlay].song +
      " By " + this.wordInPlay;

    //   Update the image of the band on the page.
      document.querySelector("#band-div").innerHTML =
        "<img class='band-image' src='../images/" +
        this.artistToPick[this.artistInPlay].picture + "' alt='" +
        this.artistToPick[this.artistInPlay].song + "'>";

      // return true, which will trigger the restart of our game in the updatePage function.
      return true;
    }
    // If win is false, return false to the updatePage function. The game goes on!
    return false;
  }
};

// Initialize the game when the page loads.
artistGuessGame.setupGame();

// When a key is pressed..
document.onkeyup = function(event) {
  // Check if the key pressed is a letter.
  if (event.keyCode >= 49 && event.keyCode <= 90) {
    // Capture pressed key and make it lowercase.
    artistGuessGame.letterGuessed = event.key.toLowerCase();
    // Pass the guessed letter into our updatePage function to run the game logic.
    artistGuessGame.updatePage(artistGuessGame.letterGuessed);
  }


}