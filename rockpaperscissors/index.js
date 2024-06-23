let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usermarks=document.querySelector("#user-score");
const compmarks=document.querySelector("#comp-score");
const compGame=()=>{
const gencompChoice=["rock","paper","scissors"];
const randindx=Math.floor(Math.random()*3);
return gencompChoice[randindx];
}
const draw=()=>{
 
    msg.innerText="Game was draw!Play again";
    msg.style.backgroundColor="#FFC700";
}

const showwin=(userWin,userChoice,compChoice)=>{
    if(userWin){
    userScore++;
    usermarks.innerText=userScore;
        msg.innerText=`You win!Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compmarks.innerText=compScore;
        msg.innerText=`You lose!Your ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("users choice = "+userChoice); //user choice
    const compChoice=compGame();
    console.log("computers choice = "+compChoice);//computer choice
    if(userChoice===compChoice){
        draw();
    }
   else{
    let userWin=true;
    if(userChoice==="rock"){
//paper,scissor
userWin=compChoice==="paper"?false:true;
    }
    else 
        if(userChoice=="paper"){
            //rock,scissors
            userWin=compChoice==="rock"?false:true;
        }
    
    else{
//scissors
userWin=compChoice==="paper"?false:true;
    }
    showwin(userWin,userChoice,compChoice);
   }

};
choices.forEach((choice)=>{

choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
playGame(userChoice);
});
});