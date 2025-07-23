// --------------------SCOPE-------------------
// let a=10
// function one(){
//     let b=20
//     function two(){
//         let c=30
//         console.log(a,b,c)
//     }
//     two()
// }
// one()

// ---------------------CLOSURE--------------------
// function outer(){
//     let count=0
//     function inner(){
//         count++
//         console.log(count)
//     }
//     return inner
// }
// const one=outer()
// one()
// one()
// one()


// --------------FUNCTION CURRYING-------------------
//  function sum(a,b,c){
//      return a+b+c
//  }
//  console.log(sum(2,4,5))
// -----------------alternate------------------------
// function one(funct){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return funct(a,b,c)
//             }

//         }
//     }
// }
// const result=one(sum)
// console.log(result(2)(3)(4)) 
            
// --------------------alternate-----------------------

// const result1=one(sum)
// const add2=result1(4)
// const add4=add2(10) 
// const add5=add4(4)
  
// console.log(add5)
    
// -----------------THIS KEYWORD---------------------
// ------used in a function refers to object it belong to----
// ------it makes function reusable by letting you decide the object value----
// ------this value is determined entirely by how a function is called----- 
// -------------------HOW TO DETERMINE this ------------


// -------------------IMPLICIT BINDING------------------
// const person={
//     name:"aifa",
//     sayName:function(){
//         console.log(`my name is ${this.name}`)
//     }
// }
// person.sayName()

// // --------------------EXPLICIT BINDING-------------------
// function sayName(){
//     console.log(`my name is ${this.name}`)
// }
// sayName.call(person)





// ------------------NEW BINDING-----------------------

// function person1(name){

//     // --------------IMPORTANT------------------------
//     // ---this={} internally create when by new keyword-----
//     this.name=name;    
// }

// const p1=new person1("aifa")
// const p2=new person1("thasneem")

// console.log(p1.name,p2.name)




// ---------------DEFAULT BINDING------------------
// const name="hello"

globalThis.name="hello"
function sayName(){
     console.log(`my name is ${this.name}`)
 }
 sayName()

//  -----------------ORDER OF PRECEDENCE------------
// --New binding
// --Explicit binding
// --Implicit binding
// --Default binding
