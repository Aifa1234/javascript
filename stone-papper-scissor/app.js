let userScore=0
let comScore=0

const choices=document.querySelectorAll(".choice-item")
const msg=document.querySelector("#message")
const user=document.querySelector("#user")
const com=document.querySelector("#com")


const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        console.log("you win");
        msg.innerText=`User win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        user.innerHTML=userScore;
    }
    else{
        console.log("you lose")
        msg.innerText=`You lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        comScore++;
        com.innerHTML=comScore;
    }
    
}         

const drawGame=()=>{
    console.log("its a draw")
    msg.innerText="its a draw"
}

const genComChoice=()=>{
    const option=["rock","paper","scissors"]
    let index=Math.floor(Math.random()*3)
    return option[index]
}

const playGame=(userChoice)=>{
    computerChoice=genComChoice()
    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        let userWin=true
        if(userChoice==="rock"){
            if(computerChoice=="paper"){
                    userWin=false
                }
            else if(computerChoice=="scissors"){
                    userWin=true
                }
            
        }
        else if(userChoice=="paper"){
            if(computerChoice==="rock"){
                userWin=true
            }
            else if(computerChoice==="scissors"){
                userWin=false
            }
        }
        else if(userChoice==="scissors"){
            if(computerChoice==="rock"){
                userWin=false
            }
            else if(computerChoice==="paper"){
                userWin=true
            }  
        }
        console.log(userChoice)
        console.log(computerChoice)
        showWinner(userWin,userChoice,computerChoice)
    }
    
}


choices.forEach((each)=>{
    each.addEventListener("click",()=>{
        const userChoice=each.getAttribute("id")
        playGame(userChoice)
    })
})   