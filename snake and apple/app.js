const gameBoard=document.querySelector(".game-board")
const ctx=gameBoard.getContext("2d")
const scoreText=document.querySelector("#score-text")
const resetButton=document.querySelector("#reset-button")
const gameWidth=gameBoard.width
const gameHeight=gameBoard.height 
const backgroundcolor="white"
const snakeColor="green"
const snakeBorder="white"
const foodColor="red"

let running=false
const unitSize=25

let xVelocity=unitSize
let yVelocity=0

let foodX;
let foodY;

let score=0;  
      
let snake=[
    {x:unitSize*4,y:0},//each object is a body part
    {x:unitSize*3,y:0},
    {x:unitSize*2,y:0},
    {x:unitSize*1,y:0},
    {x:0,y:0}
]

window.addEventListener("keydown",chageDirection)
resetButton.addEventListener("click",resetGame)
   
function gameStart(){
    running=true
    scoreText.textContent=score
     createFood() 
     drawFood()
     nextTick()
} 
                                    
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard()
            drawFood()
            drawSnake()
            moveSnake()
            
            checkGameOver()
            nextTick()
        },100)
    }
}

function clearBoard(){
    ctx.fillStyle=backgroundcolor
    ctx.fillRect(0,0,gameWidth,gameHeight)
}
function createFood(){
    function randomFood(min,max){
      const randNum=Math.round((Math.floor(Math.random()*(max-min)+min)/unitSize))*unitSize
      return randNum
    }
    foodX=randomFood(0,gameWidth-unitSize)
    foodY=randomFood(0,gameWidth-unitSize)
}
function drawFood(){
    ctx.fillStyle=foodColor
    ctx.fillRect(foodX,foodY,unitSize,unitSize)
}

function drawSnake(){
    ctx.fillStyle=snakeColor  
    ctx.strokeStyle=snakeBorder
    snake.forEach((part)=>{
        ctx.fillRect(part.x,part.y,unitSize,unitSize)
        ctx.strokeRect(part.x,part.y,unitSize,unitSize)
    })
}
      

function moveSnake(){
    const head={x:snake[0].x+xVelocity,
                y:snake[0].y+yVelocity
    }
    snake.unshift(head)
    if(snake[0].x===foodX && snake[0].y==foodY){
        score+=1
        scoreText.textContent=score
        createFood()
    }
    else{
        snake.pop()
    }
}                       

function chageDirection(event){
    const keyPressed=event.keyCode
    const left=37
    const right=39
    const up=38
    const down=40

    const goingUp=(yVelocity==-unitSize)
    const goingDown=(yVelocity==unitSize)
    const goingLeft=(xVelocity==-unitSize)
    const goingRight=(xVelocity==unitSize)

    switch(true){
        case(keyPressed===left &&!goingRight):
            xVelocity=-unitSize;
            yVelocity=0;
            break;
        
        case(keyPressed===right && !goingLeft):
            xVelocity=unitSize;
            yVelocity=0;
            break;

        case(keyPressed===up && !goingDown):
             yVelocity=-unitSize;
             xVelocity=0;
             break;

        case (keyPressed==down && !goingUp):
            yVelocity=unitSize
            xVelocity=0
            break
    }
}

// function resetGame(){}
function checkGameOver(){
    switch(true){
        case(snake[0].x<0):
            running=false
            displayGameOver()
            break

        case(snake[0].x>=gameWidth):
            running=false
            displayGameOver()
            break
        
        case(snake[0].y<0):
            running=false
            displayGameOver()
            break

        case(snake[0].y>=gameHeight):
            running=false
            displayGameOver()
            break  

    }
    for (let i=1;i<snake.length;i++){
        if (snake[0].x==snake[i].x && snake[0].y==snake[i].y){
            running=false
             displayGameOver()
            break
        }
    }
    
    
}
function displayGameOver(){
    ctx.font="50px MV Boli";
    ctx.fillStyle="black";
    ctx.textAlign="center";
    ctx.fillText("GAME OVER",gameWidth/2,gameHeight/2)
    running=false
}
    
function resetGame(){
    score=0
    xVelocity=unitSize
    yVelocity=0
    snake=[
        {x:unitSize*4,y:0},
        {x:unitSize*3,y:0},
        {x:unitSize*2,y:0},
        {x:unitSize*1,y:0},
        {x:0,y:0}
    ]
    gameStart()
}

gameStart()  
