let userScore = 0;
let computerScore = 0;
const msg =document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const gameComputer = ()=>{
    const options = ["rock","paper","scissor"];
   const randomIdx = Math.floor(Math.random() *3);
   return options[randomIdx] ;
}
const showWinner = (userWin) =>{
    if(userWin){
        console.log("You Win!");
        msg.innerText = "You Win!"
    }
    else{
        console.log("You Loss!");
        msg.innerText = "You Loss!";
    }
}
const playGame =(userChoice)=>{
    console.log ( "userChoice = ",userChoice);
    const  compChoice = gameComputer();
    console.log("compChoice = ",compChoice);
    if(compChoice === userChoice){
        console.log("game was  a draw");    
        msg.innerText = "Game was draw .Play Again";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ?true : false;
        }
        else if (userChoice === "scissor"){
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) =>{
    console.log(choice);
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
});
