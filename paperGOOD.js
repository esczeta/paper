

console.log("game starting...");


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
      });
    });




let r= "rock";
let p= "paper";
let s= "scissors";

let myArray = [
    "rock", 
    "paper", 
    "scissors"
];

//returns a random r/p/s played by computer 




// function computerPlay(){
//     let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
//         return randomItem;
// }

//arrow function 
const computerPlay = () => {
    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem;

}




//this function takes two arguments:playerSelection and computerSelection and returns 
//the result. It returns the following:
// computer -> if computer wins
// you -> if human wins
// tie -> if tie

function playRound(playerSelection, computerSelection){
    
        
    console.log("player selection:",  playerSelection);
    console.log("computer selection:",  computerSelection);
    
    if(playerSelection == computerSelection){
        return "tie"
    }

    if (playerSelection == r){
        if (computerSelection == s) {
            console.log("rock smashes scissor, you win")
            return 'you'
        } else {
            console.log("you lose")
            return "computer"
        }
    }

    if (playerSelection == p){
        if (computerSelection == r) {
            console.log("paper beats rock, you win")
            return'you'
        } else {
            console.log("you lose")
            return 'computer'
        }
    }

    if (playerSelection == s){
        if (computerSelection == p) {
            console.log("scissors beat paper, you win")
            return 'you'
        } else {
            console.log("you lose")
            return 'computer'
        }
    }

    // if(
    //     (playerSelection == r && computerSelection == s) ||
    //     (playerSelection == s && computerSelection == p) ||
    //     (playerSelection == p && computerSelection == r)){
    //             console.log('you win! ' + playerSelection + ' beats' + computerSelection);
    //             result = 'you';;
    // }
    // if (
    //     (computerSelection == r && playerSelection == s) ||
    //     (computerSelection == s && playerSelection == p) ||
    //     (computerSelection == p && playerSelection == r)){
    //     console.log('you lose! ' + computerSelection + ' beats ' + playerSelection);
    //     result = 'computer';
    // } 

}

// function playRound(){
   
//     let roundResult = playRound(playerSelection, computerSelection); 
//     console.log("round score: ",roundResult);
//     console.log("your score is " + playerScore);
//     console.log("computer score is " + computerScore);

//     if (playerScore ==5 || computerScore == 5){
        
//     } 
//     return result;

// }

function game(){

    let playerScore = 0;
    let computerScore=0;
    let draw=0;



    for (let i = 0; i < 5; i++) {
        let playerChoose = prompt("input rock, paper, or scissor");
        let csel = computerPlay();
        let roundResults = playRound(playerChoose, csel);
  


        if (!myArray.includes(playerChoose)) {
            
            alert ("unknown value");
            console.log ("unknown value");
            throw new Error("unknown value, exiting");
        }

        if (roundResults == "tie"){
            draw++;
        }
        if (roundResults == "you"){
            playerScore++;
        }
        if (roundResults == "computer"){
            computerScore++;
        }

        console.log(roundResults);
        console.log("Round scores:----")
        console.log("You : ", playerScore)
        console.log("Computer : ", computerScore)
        console.log("Tie : ", draw)
        console.log("-----------------")
     }

     console.log("final result : ======")

     if (computerScore > playerScore){
        console.log ("you lose");
    }
    
    else if(computerScore < playerScore){
        console.log ("you win");
    }

    else {
        console.log ("it's a tie");
    }


}



game()




