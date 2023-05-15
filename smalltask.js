// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";
// Get Array
let lettersArray = Array.from(letters);
// Select Letter container
let letterContainer = document.querySelector(".letters");
// let guesses araay
let guessesArary = [];
//Generate Letters
lettersArray.forEach(letter => {
    
    //create span
    let span = document.createElement("span");

    // create letter text Node
    let theLetter = document.createTextNode(letter);

    // create append the letter to span
    span.appendChild(theLetter);

    // add class to span
    span.className = "letter-box";

    // append span to the letter container
    letterContainer.appendChild(span)
});
// Object of Words + Categories
const Words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["prestige", "Inception", "parasite", "interstellar", "whiplash", "memento", "coco", "up"],
    people: ["Albert Einstein", "Hitchock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
};

// Get Random Property
let allKeys = Object.keys(Words);
// Get random Number from length of object
let randomPropertyNumber = Math.floor(Math.random() * allKeys.length);
// Get random key of object
let randomPropName = allKeys[randomPropertyNumber];
// Get value of random key in object
let randomPropValue = Words[randomPropName];


// Get length of random array value
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// Get random Words
let randomValueName = randomPropValue[randomValueNumber];


// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName //+ ' => ' + randomValueName;


// Select letter Guess Element
let letterGuessContainer = document.querySelector(".letters-guess");

// convert chosen word to array
let lettesAndSpace = Array.from(randomValueName);

// create spans Depend On word
lettesAndSpace.forEach(letter => {

    // create Empty Span
    let emptySpan = document.createElement("span");
    // if letter is space
    if (letter === " ") {
        emptySpan.className = "with-space";
    }

    // append span to Letters Guess container
    letterGuessContainer.appendChild(emptySpan);
});
// select Guess span
let guessSpans = document.querySelectorAll(".letters-guess span");

// set wrong attempts
let wrongAttemps = 0;

// Select the draw Element
let theDraw = document.querySelector(".hangman-draw");


// Handle clicking on letters
document.addEventListener("click", (e) => {

    // set the chose status 
    let theStatus = false;

    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked");
        console.log(guessesArary)
        // GET Clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // the chosen word
        theChosenWord = Array.from(randomValueName.toLowerCase());

        theChosenWord.forEach((wordLetter, wordIndex) => {

            // if the clicked letter = one of the chosen word letter
            if (theClickedLetter === wordLetter) {
                // set satuts to coreect
                theStatus = true;
                // to get all of coreect caracter in arrary guesses
                guessesArary.push(theClickedLetter);
                // loop on all guess span
                guessSpans.forEach((span, spanIndex) => {
                    
                    if (wordIndex === spanIndex) {
                        span.innerHTML = theClickedLetter;
                    }
                });
            }
        });

        // outSide loop

        // if letter is wrong
        if (theStatus !== true) {
            
            // increase the wrong Attemps
            wrongAttemps++;

            // add class wrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttemps}`);

            // play fail sound
            // document.getElementById("fail").play();

            if (wrongAttemps == 8) {
                
                endGame();
                letterContainer.classList.add("finished");
            }
        } else {
            // document.getElementById("success").play();
        }
        if (guessesArary.length === theChosenWord.length) {
            console.log(theChosenWord)
            console.log(guessesArary)
            goodPlay()
        }
    }
});
function endGame() {
    // create pop div
    let div = document.createElement("div");

    // create text
    let divText = document.createTextNode(`Game over , The word Is ${randomValueName}`);

    // append text to div
    div.appendChild(divText);

    // add class on div
    div.className = "popup";
    document.body.appendChild(div);
}
function goodPlay() {
    // create pop div
    let div = document.createElement("div");

    // create text
    let divText = document.createTextNode(`Good Game , you win , you wrong ${wrongAttemps} `);

    // append text to div
    div.appendChild(divText);

    // add class on div
    div.className = "popup";
    document.body.appendChild(div);
}
console.log(randomValueName);