// -------------CALLBACK FUNCTION----------------
// setTimeout(function(){
//     console.log("hello")
// },5000)

// function x(y){
//     console.log("its x")
//     y()
// }

// x( function y(){
//     console.log("its y")
// }) 


// -----------------------------------------------
// ----------------- x is callback function-----------
// ----------------- y is higher order function---------
// function x(){
//     console.log("Namaste")
// }

// function y(x){
//     x();
// }

// ----------------------------FUNCTION------------------------
// const radius=[3,5,4,7]

// var area=function(radius){
//     const out=[]
//     for(let i=0;i<radius.length;i++){
//         out.push(Math.PI*radius[i]*radius[i])
//     }
//     return out
// }
// console.log(area(radius))


// var circum=function(radius){
//     const out1=[]
//     for(let i=0;i<radius.length;i++){
//         out1.push(Math.PI*radius[i]*2)
//     }
//     return out1
// }
// console.log(circum(radius))


// var dia=function(radius){
//     const out2=[]
//     for(let i=0;i<radius.length;i++){
//         out2.push(2*radius[i])
//     }
//     return out2
// }
// console.log(dia(radius))
// -------------------------shorthand----------------------
// const radius=[1,3,5,7]

// const area=function(radius){
//     return Math.PI*radius*radius
// }

// const circum=function(radius){
//     return Math.PI*2*radius
// }

// const dia=function(radius){
//     return 2*radius
// }

// const calculate=function(radius,logic){
//     const out=[]
//     for(let i=0;i<radius.length;i++){
//         out.push(logic(radius[i]))
//     }
//     return out
// }
// console.log(calculate(radius,area))
// console.log(calculate(radius,circum))
// console.log(calculate(radius,dia))

// ------------------------easy udsing map-------------------
// const radius=[1,3,5,7]

// const area=function(radius){
//     return Math.PI*radius*radius
// }

// const circum=function(radius){
//     return Math.PI*2*radius
// }

// const dia=function(radius){
//     return 2*radius
// }

// console.log(radius.map(area))




// -----------------------------------------------------



// const radius=[1,3,5,7]

//  const area=function(radius){
//      return Math.PI*radius*radius
// }

//  const circum=function(radius){
//     return Math.PI*2*radius
// }

// const dia=function(radius){
//     return 2*radius
// }


// Array.prototype.calculate=function(logic){
//      const out=[]
//      for(let i=0;i<this.length;i++){
//          out.push(logic(this[i]))
//      }
//      return out
// }
// console.log(radius.calculate(area))




// ------------------PROTOTYPAL INHERITANCE----------
// let arr=["one","two"]
// let object={
//     name:"hi",
//     age:23,
//     getTo:function(){
//         console.log(this.name+this.age)
//     }
// }
// console.log(object.getTo())

// -------------------------------------------------------

// Function.prototype.bind()=function(){
//     console.log("hello")
// }

// function fun(){

// }

// fun.bind()
// --------------bind has access to all functions--------


// ---------------MAP FUNCTION-------------------
// function double(x){
//     return 2*x
// }

// function binary(x){
//     return x.toString(2)
// }

// arr=[1,3,4,6]
// const out=arr.map(binary)
// console.log(out)



// const output=arr.map(function binary(x){
//     return x.toString(2);
// })
// console.log(output)


// const output2=arr.map((x)=>x.toString(2))
// console.log(output2)


// --------------- FILTER FUNCTION-----------

// const arr=[1,4,3,6,7,8,9,3,2]
// function isOdd(x){
//     return x%2==0
// }
// const value=arr.filter(isOdd)

// console.log(value)

// const out=arr.filter((x)=>x>4)
// console.log(out)

// ---------------REDUCE FUNCTION------------------
// arr=[3,5,6,7,9,0]
// const output=arr.reduce(function(sum,each){
//     sum+=each;
//     return sum
// },0)
// console.log(output)


// const maximum=arr.reduce(function(max,each){
//     if(each>max){
//         max=each
//     }
//     return max
// })
// console.log(maximum)



// --------------EXAMPLE------------------------
const users=[
    {firstname:"aifa",lastname:"thasneem",age:22},
    {firstname:"neha",lastname:"abdul",age:33},
    {firstname:"josna",lastname:"mathew",age:33}
]

const output=users.map((x)=>x.firstname+x.lastname)
console.log(output)


const agelimit=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]+=1
    }
    else{
        acc[curr.age]=1
    }
    return acc
},{})
console.log(agelimit)

const first=users.filter((x)=>x.age<30).map((x)=>x.firstname);
console.log(first)

