
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

    // object of all the artists/words that can be guessed along with the painting

    artistToPick: {
        andyWarhol: {
            artist: "andy warhol",
            picture: "assets/images/andy-warhol.jpg"
        },
        claudeMonet: {
            artist: "claude monet",
            picture: "claude-monet.jpg"
        },
        edgarDegas: {
            artist: "edgar degas",
            picture: "edgar-degas.jpg"
        },
        edouardManet: {
            artist: "edouard manet",
            picture: "edouard-manet.jpg"
        },
        edwardHopper: {
            artist: "edward hopper",
            picture: "edward-hopper.jpg"
        },
        fridaKahlo: {
            artist: "frida kahlo",
            picture: "frida-kahlo.jpg"
        },
        henriMatisse: {
            artist: "henri matisse",
            picture: "henri-matisse.jpg"
        },
        maryCassatt: {
            artist: "mary cassatt",
            picture: "mary-cassatt.jpg"
        },
        pabloPicasso: {
            artist: "pablo picasso",
            picture: "pablo-picasso.jpg"
        },
        salvadorDali: {
            artist: "salvador dali",
            picture: "salvador-dali.jpg"
        },
        yayoiKusama: {
            artist: "yayoi kusama",
            picture: "yayoi-kusama.jpg"
        }
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

        // Split the chosen artist up into its individual letters.
        this.lettersOfTheArtist = this.artistInPlay.split("");
        console.log(artistGuessGame);
        
    }
}