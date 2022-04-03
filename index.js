//Number Guessing Game

function startGame(){
    //Intro to game
alert("Welcome to the Guesing Game! Here you shall attempt to guess the allusive number!\n\n To play, select a number between 1 and 100.\n\n Hit Enter to continue.")
//GAME VALUES
let guess;
let answer = randNumInt(minNum, maxNum);
let difficulty = diffiultyLevel();
let minNum = 1
let maxNum;

if (difficulty == "easy"){
    maxNum = 10;
} else if (difficulty == "medium"){
    maxNum = 100;
} else {
    maxNum = 1000;
}
}
//Determine Difficulty
function diffiultyLevel(){
    let difficulty = prompt("Please type your level of difficulty:\n\n easy\nmedium\nhard\n\n Hit Enter to continue.").toLowerCase();

    let difficultyPresets = ["easy", "medium", "hard"];

    if (difficultyPresets.includes(difficulty)) {
        return difficulty;
    } else {
         diffiultyLevel();
    }
}
//set range of numbers for game difficulty
function randNumInt(min, max){
    return Math.floor(Math.random() = (max - min) + (min + 1));
}

//Game Play

function playGame(){ 
    do{
    //Ask for a number
   guess = parseInt(prompt("What number are you feeling lucky about?"))//make sure it's a number

   if (isNaN(guess)){
       alert("There was no valid number inputted. Please try again")
   }else{
       evalAns();
   }
}while(answer != guess)

function evalAns(){
    if(guess < answer){
        alert(`Looks like you undershot the answer ${guess}, try higher higher`)
     } else if (guess > answer){
         alert(`Looks like you overshot the answer with ${guess}, go lower`)
     }else{
         alert("You aced the game!!")
     }
}
}
function endGame(){}

startGame();