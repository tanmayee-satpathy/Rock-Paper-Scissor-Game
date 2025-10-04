let userScore  = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usersc = document.querySelector("#user_score");
const compsc = document.querySelector("#comp_score");


const genCompChoice = () =>{
     const options =["Rock","Paper","Scissor"];
     const idx = Math.floor(Math.random()*3);
     return options[idx];
}

const drawGame = () =>{
     console.log("Game was draw");
     msg.innerText ="Game was draw";
     msg.style.backgroundColor ="blue";
};

const showWinner = (userWin,choiceid,compChoice) =>{
    if(userWin){
        userScore++;
        usersc.innerText =userScore;
        console.log("Congrats!!You win!");
        msg.innerText = `Congrats!Your ${choiceid} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compsc.innerText=compScore;
        console.log("Oops!!You lose!");
        msg.innerText = `Oops! ${compChoice} beats your ${choiceid}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame =(choiceid) =>{
    console.log(`user choice = ${choiceid}`);
    //  Generate computer choice
    const compChoice = genCompChoice();
    console.log(`computer choice = ${compChoice}`);

    if(choiceid === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(choiceid === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }else if(choiceid === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }else{
            userWin = compChoice === "Rock" ? false:true;
        }
        showWinner(userWin,choiceid,compChoice);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
    const choiceid = choice.getAttribute("id");
    playGame(choiceid);
    });
});