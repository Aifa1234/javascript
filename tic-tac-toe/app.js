let box=document.querySelectorAll(".button-element")
let reset=document.querySelector("#reset")
let newButton=document.querySelector(".new-button")
let messageContainer=document.querySelector(".winner-message")
let message=document.querySelector(".message")

let turn0=true


let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
box.forEach((box)=>{
        box.addEventListener("click",()=>{
             console.log("button clicked")
             if(turn0){
                box.innerHTML="O"
                turn0=false
             }
             else{
                box.innerHTML="X"
                turn0=true
             }
             box.disabled=true
             checkWinner();
        });
});

checkWinner=() =>{
    for(let one of win){
        // console.log(one[0],one[1],one[2])
        // console.log(
        //     box[one[0]].innerText,
        //     box[one[1]].innerText,
        //     box[one[2]].innerText
        // );
        let pos1=box[one[0]].innerText
        let pos2=box[one[1]].innerText
        let pos3=box[one[2]].innerText

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1)
            disableButton();
            showWinner(pos1)
        }
        }
    }
}

showWinner=(pos1) =>{
   message.innerText=`Congratulations ${pos1} is winner`;
   messageContainer.style.display="block"
}

disableButton=()=>{
    for(let i of box){
        i.disabled=true
    }
}

enableButton=()=>{
    for(let i of box){
        i.disabled=false
        i.innerText=""
    }
}

newButton.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)

function resetGame(){
    turn0=true
    enableButton();
     messageContainer.style.display="none"
}



// --------------CAN ADD CLASS-------------------
// winner-message.classList.add("hide")
// winner-message.classList.remove("hide")