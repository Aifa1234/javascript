let fruit=["orange","apple","orange"]
let apple=document.getElementById("apple-shelf")
let orange=document.getElementById("orange-shelf")

function sortFruit(){
  for(let i=0;i<fruit.length;i++){
    if (fruit[i]=="apple"){
        apple.innerText+="apple"
    }
    else{
        orange.innerText+="orange"
    }
  }  
}
sortFruit()