let number1= 2
let number2= 4

document.getElementById("num1").innerText=number1
document.getElementById("num2").innerText=number2

let answer=document.getElementById("result")


function sum(){
  let resultant=number1+number2
  answer.innerText=resultant
}
function difference(){
    let resultant=number1-number2
    answer.innerText=resultant
}
function product(){
    let resultant=number1*number2
    answer.innerText=resultant
}
function quo(){
    let resultant=number1/number2
    answer.innerText=resultant
}
