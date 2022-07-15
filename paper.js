let choose = prompt("input rock, paper, or scissor");
let r= "rock";
let p= "paper";
let s= "scissor";

let myArray = [
    "rock", 
    "paper", 
    "scissors"
];

// let x = computerPlay();
// console.log(x);

function computerPlay(){
    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];

    if (choose == "rock" || choose == "paper" || choose == "scissor"){
        return randomItem;
    }
}

// let playerSelection = choose;
let csel = computerPlay();
console.log(playRound(choose, csel));

function playRound(playerSelection, computerSelection){
    console.log("computer selection:",  computerSelection);
    console.log("player selection:",  playerSelection);

    if(playerSelection == computerSelection){
        result = ("tie");
    }else if(
        (playerSelection == r && computerSelection == s) ||
        (playerSelection == s && computerSelection == p) ||
        (playerSelection == p && computerSelection == r)){
                result = ('you win! ' + playerSelection + ' beats' + computerSelection)
    }else{
        result = 'you lose! ' + computerSelection + ' beats ' + playerSelection
    }

    return result;
}



function game(){
    let playerScore = 0;
    let computerScore=0;
    let draw=0;

    function playRound(){
        for (let i=0; i<5; i++){
            let roundResult = playRound(playerSelection, computerSelection); 
            console.log("round score: "roundResult);
            console.log("your score is " + playerScore);
            console.log("computer score is " + computerScore);

        if (playerScore ==5 || computerScore == 5){
            break;
        }

        }
    }
return result;

}