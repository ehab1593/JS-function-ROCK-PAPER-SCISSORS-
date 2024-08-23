//**A ROCK, PAPER and SCISSORS game implementation with the use of JS functions */

//Getting user input for the choice of Rock , paper OR Scissors

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  return userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
    ? userInput
    : console.log("Error, enter the correct choice");
};

//Getting computer choice at random for the game using Math.random

const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

//Logic to decide the winner based on each of user and computer choices

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won";
    } else {
      return "User won";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won";
    } else {
      return "User won";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won";
    } else {
      return "User won";
    }
  } else if (userChoice === "bomb") {
    return "User won";
  }
};

//Logging the choices and winner to the console

const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log(`User threw: ${userChoice}`);
  console.log(`Computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
