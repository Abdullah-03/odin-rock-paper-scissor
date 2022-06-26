function computerPlay(){
    let random = Math.floor(Math.random() * 3);
    if(random == 0){
        return "rock";
    } else if(random == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(computerPlay, playerSelection){
    if(computerPlay == playerSelection){
        return "It's a tie!";
    } else if(computerPlay == "rock"){
        if(playerSelection == "paper"){
            return "You win!";
        } else {
            return "You lose!";
        }
    } else if(computerPlay == "paper"){
        if(playerSelection == "scissors"){
            return "You win!";
        } else {
            return "You lose!";
        }
    } else if(computerPlay == "scissors"){
        if(playerSelection == "rock"){
            return "You win!";
        } else {
            return "You lose!";
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let playerInput = prompt("Enter your choice");
        console.log(playRound(computerPlay(), playerInput));
    }
}

playGame();