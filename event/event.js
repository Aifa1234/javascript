let data=[
    {
        player:"jack",
        score: 45
    },
    {
        player:"jane",
        score:23
    }
]
const scoreButton=document.getElementById("score")
scoreButton.addEventListener("click",function(){
    scoreButton.innerText=data[0].score
})