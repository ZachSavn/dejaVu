//Number Guessing Game

function startGame(){
    //Intro to game
    alert("Welcome to the test of intuition.\nYou'll be attempting to guess the number on hand.\nAre you ready for the challenge? Press the Enter key");
    //Set up and determine difficulty level
    let difficulty = difficultyLevel();
    let minNum = 1;
    let maxNum;
    if (difficulty == "easy"){
        maxNum = 10;
    } else if (difficulty == "medium"){
        maxNum = 100;
    } else {
        maxNum = 1000;
    }
    //Generate Answer
    let answer = randNumRange(minNum, maxNum);

    console.log(answer, difficulty);
}


function difficultyLevel() {
    let difficulty = prompt("Type in which difficulty you would like.\n\neasy\nmedium\nhard\n\n [Enter] to continue.").toLowerCase();
    let difficultyPresets = ["easy", "medium", "hard"];
    
    if (difficultyPresets.includes(difficulty)) {
        return difficulty;
    } else {
        alert ("You failed to give a valid difficulty. Try again.")
       return difficultyLevel();
    }
}


//generate random number in a range
function randNumRange(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
startGame();