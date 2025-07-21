
let hasBlackJack=false
let isAlive=true
let message=""
let card=[]

let sum=0
let messageElement=document.getElementById("message-element")
// let sumElement=document.getElementById("sum-element")

let sumElement=document.querySelector("#sum-element")
let cardElement=document.getElementById("card-element")

let player={
    name:"Per",
    chip:145
}

let playerElement=document.getElementById("player-element")
playerElement.innerText=player.name+":$"+player.chip


function getRandomNumber(){

    let randomNum= Math.floor(Math.random()*13)+1
    if(randomNum==1){
        return 11
    }
    else if(randomNum>10){
        return 10
    }
    else{
        return randomNum
    }
}


function startGame(){
    isAlive=true
    let firstCard=getRandomNumber()
    let secondCard=getRandomNumber()
    card=[firstCard,secondCard]
    sum=card[0]+card[1]

    renderGame()
}


function renderGame(){
    cardElement.innerText="Card: "
    
    for(let i=0;i<card.length;i++){
        cardElement.textContent+=card[i]+ " "
    }

    sumElement.innerText="Sum:"+sum

    if (sum>21){
        message="Do yo want to draw a new card"
    }
    else if(sum===21){
        message="you win"
        hasBlackJack=true
    }
    else{
        message="you lose"
        isAlive=false
    }
    messageElement.innerText=message

}
function newGame(){
    // if(isAlive===true && hasBlackJack===false){
        console.log("Drawing a new card")

        let cardOne=getRandomNumber()
        sum+=cardOne

        card.push(cardOne)
        
        renderGame()
    // }
}  



