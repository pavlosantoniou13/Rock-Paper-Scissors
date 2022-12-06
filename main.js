
    const playerText = document.querySelector("#playerText");
    const computerText = document.querySelector("#computerText");
    const resultText = document.querySelector("#resultText");
    const choiceBtns = document.querySelectorAll(".choiceBtn");
    let player;
    let computer;
    let result;
    let score = 0;
    let scoreContainer, buttonContainer;
    
    choiceBtns.forEach(button => button.addEventListener("click", () => {
    
        player = button.textContent;
        computerTurn();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
    }));
    
    function computerTurn(){
    
        const randNum = Math.floor(Math.random() * 3) + 1;
    
        switch(randNum){
          case 1:
            computer = "ROCK";
            break;
          case 2:
            computer = "PAPER";
            break;
          case 3:
            computer = "SCISSORS";
            break;
        }
    }
    function checkWinner(){
        if(player == computer){
          return "Draw!";
        }
        else if(computer == "ROCK"){
          return (player == "PAPER") ? "You Win!" : "You Lose!"
        }
        else if(computer == "PAPER"){
          return (player == "SCISSORS") ? "You Win!" : "You Lose!"
        }
        else if(computer == "SCISSORS"){
          return (player == "ROCK") ? "You Win!" : "You Lose!"
        }
    }
    for (let i = 0; i < 5; i++) {

    }

    const updateScore = newScore => {
        if(isNaN(newScore)) return;
        score = newScore;
        scoreContainer.innerHTML = score;
    }
    const incrementScore = () => {
        updateScore(score + 1);
    }
      
      /* Function that submits the score */
      
      const submitScore = () => alert("Submitting Score: "+score);
      
      /* Function that ends the game */
      
      const gameOver = () => submitScore();
      
      /* Function that starts/resets the game */
      
      const newGame = () => {
        updateScore(0);
    }
      
      /* Init function, selects elements and sets up the game */
      
      const init = () => {
        scoreContainer = document.getElementById("js-score");
        newGame();
    }
      
      /* Calls the init function */
      
      init();