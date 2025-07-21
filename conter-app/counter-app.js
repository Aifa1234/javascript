//document.getElementById("counter-id").innerText=4


// let count=5/2
// console.log(count)



// let first=5
// let second=4

// let count=first+second
// console.log(count)



// HUMANDOG RATIO
// let age=45
// let humandogratio=7
// let dogage=age*humandogratio
// console.log(dogage);



// REASSIGN
// let bonuspoint=50
// bonuspoint=bonuspoint+100
// bonuspoint=bonuspoint-25
// bonuspoint=bonuspoint-70
// console.log(bonuspoint)


// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()
// countdown()



// let lap1=34
// let lap2=33
// let lap3=36
// function lapcount(){
//     console.log(lap1+lap2+lap3)
// }
// lapcount()


// let lapComplete=0
// function incrementlap(){
//    console.log(lapComplete=lapComplete+1) 
// }
// incrementlap()
// incrementlap()


// ---------------STRING--------------
// let username="as per"
// let message="You have a notification"
// console.log(username + message)


// let name=33
// let greeting="hi hello"
// let finalString=name+" "+greeting
// console.log(finalString)

// console.log(4+5)9
// console.log("2"+"4")24
// console.log("5"+1)51


 let countElement=document.getElementById("counter-id")
 let saveElement=document.getElementById("previous-element")
//  console.log(countElement)
 let count=0
 function increment_button(){
   //  console.log("button clicked")
    count=count+1
    countElement.innerHTML=count
   //  console.log(count)
 }
function saveButton(){
   let countString=count+"-"
   saveElement.innerText+=countString
    count=0
   countElement.innerHTML=0
   
   // -----Alternate-----
   // saveElement.textContent+=countString
//   console.log(count)
}        