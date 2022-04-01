//Number Guessing Game

//Welcome and How to Play
// // a. Setup Game : use random number method
//Ask user to input a number
//Evaluate the number
//Give feedback
//Repeat until correct
//End the game

alert("Welcome to the game! Here you shall attempt to guess the allusive number!\n\n To play, select a number between 1 and 100.\n\n Hit Enter to continue.")


//GAME VALUES
let answer = Math.floor(Math.random() * 100 + 1);//1 -100
let guess;

alert("Welcome to the game! Here you shall attempt to guess the allusive number!\n\n To play, select a number between 1 and 100.\n\n Hit Enter to continue.")
//Game Play
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