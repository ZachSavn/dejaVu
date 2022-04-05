//Number Guessing Game

function startGame() {
  //Intro to game
  alert(
    "Welcome to the test of intuition.\nYou'll be attempting to guess the number on hand.\nAre you ready for the challenge? Press the Enter key"
  );
  //Set up and determine difficulty level
  let difficulty = difficultyLevel();
  let minNum = 1;
  let maxNum;
  if (difficulty == "easy") {
    maxNum = 10;
  } else if (difficulty == "medium") {
    maxNum = 100;
  } else {
    maxNum = 1000;
  }
  //Generate Answer
  let answer = randNumRange(minNum, maxNum);

  console.log(answer, difficulty);  

}
function difficultyLevel() {
  let difficulty = prompt(
    "Type in which difficulty you would like.\n\neasy\nmedium\nhard\n\n [Enter] to continue."
  ).toLowerCase();
  let difficultyPresets = ["easy", "medium", "hard"];

  if (difficultyPresets.includes(difficulty)) {
    return difficulty;
  } else {
    alert("You failed to give a valid difficulty. Try again.");
    return difficultyLevel();
  }
}
//generate random number in a range
function randNumRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//Game Play
 playGame(answer);
//Access answer outside of scope
function playGame(answer) {
  let guess = prompt(
    `Type a number between ${minNum} and ${maxNum}, if you dare.\n\n [Enter] to continue`
  );
  if (guess =="quit") {
      alert("Perhaps you'll feel more lucky later. Thank you for attempting this game.")
  } else {
      guess = parseInt(guess)
    }
      //Check to make sure input is valid
      if (isNaN(guess)) {
          alert(`${guess} is not valid. Enter a positive numerical value to continue.`)
          } else {
              //Evaluate valid number
          evalGuess (guess, answer)
      }
      //Continue game until correct answer is reached
      if (guess !== answer) {
          playGame(answer, minNum, maxNum)
      }
  }
function evalGuess(guess, answer) {
    if (guess < answer) {
        alert(`${guess} is not high enough, please shoot higher into the heavens`)
    } else if (guess > answer) {
        alert(`${guess} is too high, please set your expectations lower.`)
    } else {
        alert("You got stuck the jackpot, congratulations!")
    }
}
startGame()