//Autor: Crhistian Vera 200557901
//JavaScript Frameworks Lab 2

const prompt = require('prompt');

prompt.start();

console.log("Enter your choice (ROCK, PAPER, OR SCISSORS): ");

prompt.get(['userChoice'], function (err, result){
    if (err) {
        console.log("imput error."  );
        return;

    }
    let userChoice = result.userChoice.toUpperCase();

    // Check valid option
    if (userChoice !== "ROCK" && userChoice !== "PAPER" && userChoice !== "SCISSORS"){
        console.log("invalid choice! Please enter ROCK, PAPER, OR SCISSORS");
        return;
    }

    //Generate a random  chice for th CP
    let randomNumber = Math.random();
    let computerChoice;

    if (randomNumber < 0.34){
        computerChoice = "ROCK";
    }else if (randomNumber <0.67){
        computerChoice = "PAPER";
    }else {
        computerChoice = "SCISSORS";
    }
    console.log(`User selected: ${userChoice}`);
    console.log(`Computer selected: ${computerChoice}`);

    //Determine winner
    if (userChoice === computerChoice){
        console.log("It is a Tie. Try again!");
    }else if ((userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "PAPER" && computerChoice === "ROCK") ||
    (userChoice === "SCISSORS" && comp[userChoice === "PAPER"])
    ){
        console.log("User wins!")
    }else{
        console.log("Computer wins!");
    }

});