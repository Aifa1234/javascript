// let myPoint=3
// function addPoint(){
//   myPoint+=3
// }
// function removePoint(){
//   myPoint-=1
// }
// addPoint()
// addPoint()
// addPoint()
// removePoint()
// removePoint()

// console.log(myPoint)

// console.log("2"+2)//  22
// console.log(11+7)//   18
// console.log(6+"5")//  65
// console.log("mypoints:"+5+9)// mypoints:59



// let array=[0 ,3,"amma",true,5,63]
// // console.log(array[3])
// // console.log(array.length)
// array.push(9)
// console.log(array)
// array.pop()
// console.log(array)


// for(let count=0; count<4; count+=2){
//     console.log(count)
// }

// for(let i=0;i<=100;i+=10){
//     console.log(i)
// }


// let array=[1,2,3,4,5,6,7,5,4,3,2,]
// for(let i=0;i<array.length;i++){
//  console.log(array[i])
// }


// let one=100
// let two=102

// function greater(){
//     if(one>two){
//          return one
//     }
//     else{
//         return two
//     }
// }
// let result=greater()
// console.log(result)



// let age=21

// if(age<=21){
//     console.log("you cannot enter")
// }
// else{
//     console.log("you can enter")
// }




// let getRandomNumber=Math.random()//0 to 0.99999
// console.log(getRandomNumber)

// let floorNumber=Math.floor(3.455)
// console.log(floorNumber)

// let num=Math.floor(Math.random()*6)
// console.log(num+1)

// **************LOGICAL OPERATOR**************
// let hasComplete=true
// let generateCertificate=false

// if(hasComplete && generateCertificate){
//     success()
// }
// function success(){
//     console.log("successfully completed")
// }


// let hasComplete=true
// let generateCertificate=false

// if(hasComplete || generateCertificate){
//     success()
// }
// function success(){
//     console.log("successfully completed")
// }


// ************OBJECT************
// let course={
//     title:"learn css",
//     lesson:16,
//     length:"12hr",
//     level:2,
//     isFree:true,
//     tag:["HTML","css"]
// }
// console.log(course.tag)

// let array=[2,4,5,6,4]
// array.shift()
// console.log(array)
// array.unshift(3)
// console.log(array)


// array=["one","two","three"]
//  function randomNum(){
//     let randomindex=Math.floor(Math.random()*3)
//     return array[randomindex]
//  }
// console.log(randomNum())

// const credit=0
// if(credit>0){
//     console.log("you are eligible")
// }
// else{
//     console.log("not eligible")
// }



// let credit=[]
// // credit=["hello","hi"]
// if(credit){
//     console.log("you are eligible")
// }
// else{
//     console.log("not eligible")
// }



// console.log(Boolean(""))//False
// console.log(Boolean(null))//False
// console.log(Boolean(-0))//False



// function add(a,b){
//     return a+b
// }
// console.log(add(3,4))



// function greet(word1,word2){
//     return `${word1} ${word2}`
// }
// console.log(greet("hello","welcome"))


// function arrayFirst(arr){
//     return arr[0]
// }
// let element=arrayFirst([10,2,4])
// console.log(element)


// const player="Per"
// const opponent="nick"
// const game="Fight"

// let point=0
// let hasWin=false

// point+=10
// hasWin=true

// if(hasWin){
//     console.log(`${player} got ${point} and win against ${opponent}`)
// }
// else{
//     console.log(`${opponent} win and ${player} lost`)
// }



// let course=["one","two","three"]
// function arrayItem(arr){
//     for(let i=0;i<arr.length;i++){
//        console.log(arr[i]) 
//     }
// }
// arrayItem(course)


// localStorage.setItem("credit","100")
// console.log(localStorage.getItem("credit"))
function generate(order,array){
    let str=`the ${array.length} according to ${order} is`
    for(let i=0;i<array.length;i++){
        if (i===array.length-1){
            str+=array[i]
        }
        else{
             str+=array[i]+','
        }
       
    }
    return str
}
console.log(generate("desc",["usa",'india']))