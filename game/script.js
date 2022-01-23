alert("press next round after each move")


// initialising variables
let userClick = document.querySelectorAll(".hand");
let nextRoundButton = document.querySelector(".next");
let endGameButton = document.querySelector(".end")
let playerScoreArea = document.querySelector(".playerScore")
let computerScoreArea = document.querySelector(".computerScore")
let computerOutputArea = document.querySelector(".computerOutput")
let move = [{src : "images/paper.png",move : "paper"},
            {src : "images/stone.png",move : "stone"},
            {src : "images/Scissor.png",move : "scissor"}

        ]
let winnerDeclarationArea = document.querySelector(".whoWon");
var computerInput = []
var userInput = [];
let playOrNot = 0;
let compScore = 0;
let userScore = 0;

// order of moves = paper, stone, scissor


// making function for generating random output by computer.
function computerPlay(params) {
    let randomNumber = Math.trunc(Math.random()*3)
    computerOutputArea.src = (move[randomNumber].src)
    computerInput.push(move[randomNumber].move)
    console.log(computerInput);
}


// checking the input by the user
for (let i = 0; i < userClick.length; i++) {
    userClick[i].addEventListener("click",function userPlay() {
        
        if(playOrNot === 0){

            userInput.push(this.classList[1]);
    
            
            console.log(userInput[0]);
            playOrNot++
    
            console.log(playOrNot);
            userClick[0].classList.add("disabled")
            userClick[1].classList.add("disabled")
            userClick[2].classList.add("disabled")

            computerPlay()
            checkScore()
        }
        
    })

}

// the play function{

// checking if a round is completed


// going for next round
nextRoundButton.addEventListener("click",function () {
    computerOutputArea.src = "";
    userInput = []
    computerInput = []
    playOrNot = 0;
    console.log(userInput);
    userClick[0].classList.remove("disabled")
    userClick[1].classList.remove("disabled")
    userClick[2].classList.remove("disabled")
});


// checking score


function checkScore(){
    
    if(userInput[0] == "stone"){


        if(computerInput[0] == "stone"){
            compScore = compScore+0
        }else if(computerInput[0] == "paper"){
            compScore++
            computerScoreArea.innerHTML = compScore
        }else if(computerInput[0] == "scissor"){
            userScore++
            playerScoreArea.innerHTML = userScore
        }


    }else if(userInput[0] == "scissor"){


        if(computerInput[0] == "stone"){
            compScore++
            computerScoreArea.innerHTML = compScore
        }else if(computerInput[0] == "paper"){
            userScore++
            playerScoreArea.innerHTML = userScore 
        }else if(computerInput[0] == "scissor"){
            userScore+0
            playerScoreArea.innerHTML = userScore
        }


    }else if(userInput[0] == "paper"){


        if(computerInput[0] == "stone"){
            userScore++
            playerScoreArea.innerHTML = userScore
        }else if(computerInput[0] == "paper"){
            userScore = userScore+0
            playerScoreArea.innerHTML = userScore 
        }else if(computerInput[0] == "scissor"){
            compScore++
            computerScoreArea.innerHTML = compScore
        }


    }


}
// telling results when the game ends - 
endGameButton.addEventListener("click",function (params) {
    if(userScore==compScore){
        winnerDeclarationArea.innerHTML = "The game draws"
    }else if(compScore<userScore){
        winnerDeclarationArea.innerHTML = "You won the game"
    }else{
        winnerDeclarationArea.innerHTML = "computer won the game"
    }
})

function whenGameEnds() {
    
}
