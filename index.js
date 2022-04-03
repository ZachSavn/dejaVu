//Number Guessing Game

function startGame(){
    //Intro to game
alert("Welcome to the Guesing Game! Here you shall attempt to guess the illusive number!\n\n To play, you have to use your wits and correctly guess the number.\n\n Hit Enter to continue.")
//GAME VALUES
let answer;
let difficulty = difficultyLevel();
let minNum = 1;
let maxNum;

//Set up difficulty
if (difficulty == "easy"){
    maxNum = 10;
}   else if (difficulty == "medium"){a
    maxNum = 100;
}        else {
    maxNum = 1000;
}
}
//Determine Difficulty
function difficultyLevel(){
    let difficulty = prompt("Please type your level of difficulty:\n\n easy\nmedium\nhard\n\n Hit Enter to continue.").toLowerCase();
    
    let difficultyPresets = ["easy", "medium", "hard"];
    
    if (difficultyPresets.includes(difficulty)) {
        return difficulty;
    } else {
        difficultyLevel();
        alert("Please enter a valid difficulty.Select again.")
    }
}
//set range of numbers for game difficulty
function randNumInt(min, max){
    return Math.floor(Math.random() = (max - min)) + min + 1;
}
console.log(answer, difficulty)

function playGame(){}
function endGame(){}
startGame()

