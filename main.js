
const choices = ['rock', 'paper', 'scissors']

function game() {
  playRound()
}

function playRound() {
  const playerSelection = playerChoice()
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection)
}

function playerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
    );
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)] 
  
}

function validateInput(choice) {
  return choices.includes(choice)
 
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC){
    return "Tie"
  } else if ((choiceP === 'rock' && choiceC =='scissors') || (choiceP === 'scissors' && choiceC =='paper') || (choiceP === 'paper' && choiceC =='rock') ){
    return 'You win'
  } else {
    return 'You lose'
  }
    
  
}

game();