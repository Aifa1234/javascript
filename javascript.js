//   console.log(x)
//  var x=7
// //  getName()

//  var getName2=function(){}
// var getName=()=>{
//     console.log("hello ")
//  }

// function get(){}
//  console.log(getName)  


// var c=1
// a();
// b();
// console.log(c)

// function a(){
//     var c=10
//     console.log(c)
// }

// function b(){
//     var c=100
//     console.log(c)
// }      

// var num;
// console.log(num)
// if (num===undefined){
//     console.log("not defined yet")
// }

// num=1
// console.log(num)

// num='hello world'
// console.log
// (num)

// function a(){
//     b=10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
 
// a();


//  let a=10
//  let a=45
// var a=10
// var a=100
// console.log(a)
// var a=20
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)
// console.log(b)
// console.log(c)


// function x(){
//     var a=10;
//     function y(){

//         console.log(a)
//     }
//     y();
// }
// x();

// ----------PASS FUNCTION AS ARGUMENT-----------

// x(function y(){
//     console.log("hello")
// });
// x();

// --------------RETURN FUNCTION----------

// function x(){
//     var a=20
//     return function y(){
//         console.log(a)
//     }
   
// }
// var element=x()
// console.log(element)
// element()


//  function x(){
//     var a=10;
//   function y(){
//          console.log(a)
//    }
//     a=1000
//    return y()
//  }
// x()

// ----------SCOPE CLOSURE---------
// function z()
// {
//     var b=10;
//     function y()
//     {
//         a=5
//         function x()
//         {
//             console.log(a,b)
//         }
//         x()
//     }
//     y()
// }
// z() 

// --------SETTIMEOUT--------

// function x(){
//     var i=10
//     setTimeout(function(){
//         console.log(i);
//     },2000)
//     console.log("hello")
// }
// x()

// -----------USING LET--------
// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },(i+1)*1000);
//     }
//     console.log("hello");
// }
// x();


// ----------------ALTERNATE-------------
// function x(){
//    for(var i=1;i<=5;i++){
//     function close(y){
//         setTimeout(function(){
//             console.log(y)
//         },y*1000)
//     }
//     close(i)
//    } 
// }
// x()
// ----------------EXAMPLE CLOSRE-------------
// function outer(){
//     let a=10
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }
// outer()()

// ----------------------------------------------

// function outest(k){
//     var c=20
//     function outer(b){
//         function inner()
//         {
//             console.log(c,b,k)
//         }
//         return inner
//     }
//     return outer
// }
// outest(1000)("hello")()

// ------------DATA ENCAPSULATION------------------

// function counter(){
//     let count=0;
//     function increment(){
//         count++
//         console.log(count)
//     }
//     return increment
// }
// var value=counter()
// value()
// value()
// value()

// var another=counter()
// another()

// --------------------CONSTRUCTOR FUNCTION--------------
// function Counter(){
//     var count=0
//     this.increment=function(){
//         count++
//         console.log(count)
//     }
//     this.decrement=function(){
//         count--
//         console.log(count)
//     }
// }

// var counter1 = new Counter()
// counter1.increment()
// counter1.decrement()

// ---------------GARBAGE COLLECTOR------------------
// function one(){
//     x=0,z=10
//     function two(){
//         console.log(x)
//     }
//     return two()
// }
// var a=one()
// var a=one()
// ----------z is collected by garbage collector---------



// --------------SET TIME OUT-------------
// console.log("start")

// setTimeout(function(){
//     console.log("call back")
//   },5000)
// console.log("end")

// let start=new Date().getTime()
// let end=start
// while(end< start + 1000){
//     end=new Date().getTime()
// }
// console.log("while end")


// ------------------------------------------
console.log("start")

setTimeout(function(){
    console.log("hello")
},0)
console.log("end")