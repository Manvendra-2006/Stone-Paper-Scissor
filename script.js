let userScore = 0;
let computerScore = 0;
let draw = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const humanScorepara = document.querySelector("#human-score");
const compScorepara = document.querySelector("#computer-score");
const drawScorepara = document.querySelector("#draw-score");
const gameComputer = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        humanScorepara.innerText = userScore;
        //console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        compScorepara.innerText = computerScore;
        //console.log("You Loss!");
        msg.innerText = `You Loss!  ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    const compChoice = gameComputer();
    console.log("compChoice = ", compChoice);
    if (compChoice === userChoice) {
        draw++;
        drawScorepara.innerText = draw;
        //console.log("game was  a draw");    
        msg.innerText = "Game was draw .Play Again";
        msg.style.backgroundColor = "black";
        msg.style.color = "white";
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        }
        else if (userChoice === "scissor") {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    console.log(choice);
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        //console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
});
