alert("press next round after each move, You will get 3 seconds for each move and the game is of 1 minute. enjoy!!")


// initialising variables
let userClick = document.querySelectorAll(".hand");
let nextRoundButton = document.querySelector(".next");
let playerScoreArea = document.querySelector(".playerScore")
let computerScoreArea = document.querySelector(".computerScore")
let computerOutputArea = document.querySelector(".computerOutput")
let coolDownTimeArea = document.querySelector(".moveCoolDown")
let gameTimeArea = document.querySelector(".gameTime")
let move = [
    {src : "images/paper.png",move : "paper"},
    {src : "images/stone.png",move : "stone"},
    {src : "images/Scissor.png",move : "scissor"}

]
let quitGameButton = document.querySelector(".quit")
let winnerDeclarationArea = document.querySelector(".whoWon");
var computerInput = []
var userInput = [];
let playOrNot = true;
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

// checking if player is playing or not?
let playTime = 0;


let playtimeCheck = setInterval(function(){
    playTime++
    console.log(playTime);

    coolDownTimeArea.innerHTML = "cooldown : " + playTime + " / 5 seconds"  

    if(playTime >= 5 ){
        endGame()
        clearInterval(playtimeCheck)
        coolDownTimeArea.innerHTML = "cooldown time ended"

        gameTimeArea.classList.add("hide")
    }
},1000);


// checking the input by the user
for (let i = 0; i < userClick.length; i++) {
    userClick[i].addEventListener("click",function userPlay() {

        if(playOrNot === true){

            playTime = 0;

            userInput.push(this.classList[1]);

            console.log(userInput[0]);
            playOrNot = false
    
            console.log(playOrNot);
            userClick[0].classList.add("disabled")
            userClick[1].classList.add("disabled")
            userClick[2].classList.add("disabled")

            computerPlay()
            checkScore()
        }
        
    })

}


// going for next round
nextRoundButton.addEventListener("click",function () {
    computerOutputArea.src = "";
    userInput = []
    computerInput = []
    playOrNot = true;
    console.log(userInput);
    userClick[0].classList.remove("disabled")
    userClick[1].classList.remove("disabled")
    userClick[2].classList.remove("disabled")

    playTime = 0;
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
function endGame(params) {

    if(userScore==compScore){
        winnerDeclarationArea.innerHTML = "The game draws"
    }else if(compScore<userScore){
        winnerDeclarationArea.innerHTML = "You won the game"
    }else{
        winnerDeclarationArea.innerHTML = "computer won the game"
    }


    playOrNot = 1;
    nextRoundButton.classList.add("hide")
    nextRoundButton.classList.remove("Button")
    quitGameButton.classList.add("center")
    quitGameButton.classList.remove("Button")
}
    


// putting game time - 
var seconds = 0


function timer() {
    let timerInterval = setInterval(()=>{
        if(seconds<60){

            seconds++
            console.log(seconds);
            gameTimeArea.innerHTML =  seconds + " / 60 seconds left"

        }else if(seconds >= 60){

            gameTimeArea.innerHTML = "time ended"

            console.log("time ended");
            playOrNot = 1;
            nextRoundButton.classList.add("hide")
            userClick[0].classList.add("disabled")
            userClick[1].classList.add("disabled")
            userClick[2].classList.add("disabled")
            computerOutputArea.classList.add("disabled")
            quitGameButton.classList.add("center")
            quitGameButton.classList.remove("Button")
            endGame()
        }
    },1000)
    

    if(playTime >= 5){
        clearInterval(timerInterval)
    }
}



timer()
