// -------SETTIMEOUT----------
// setTimeout(function,duration,paramter,..)

// function hello(){
//     console.log("hello")
// }
// const one=setTimeout(hello,2000,"its ap parameter")
// clearTimeout(one)

//------------SET INTERVAL---------

// const interval=setInterval(hello,2000)
// clearInterval(interval)
                                                                                                   
                                                                                                                            

// --------------------------IMPORTANT--------------------
// ----TIMERS AND INTERVALS ARE IMPLEMENTED BY BROWSERS---
//-------DURATION GARATEE MINIMUM DELAY------

// setTimeout(function run(){
//     console.log("hello")
//     setTimeout(run,1000)
// },2000)

   

/////////////CALL BACK////////////////
// ------------synchronous------eg sort map filter-------


// function greet(name){
//     console.log(`hello ${name}`)
// }

// function getName(){
//     const name="hina"
//     return name
// }

// greet(getName())


// -------------asynchronous-------------

// function one1(name){
//     console.log(`${name}`)
// }
// setTimeout(one1, 2000,"ann");


//////////////PROMISE////////////
// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("bring food")
//     },2000)
// })

const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let food=true
        if(food){
            resolve("food is here")
        }
        else{
            reject("unavailable")
        }
    },2000)
})
const fullfill=(result)=>{
    console.log(result)
    console.log("successfull")
}
const rejection=(error)=>{
    console.log(error)
    console.log("failed")
}

p.then(fullfill)//p.then(fullfill,rejection)
p.catch(rejection)

//////PROMISE CHAINING//////////////

////PROMISE-STATIC METHOD///////////
Promise.all()
Promise.allSettled()
Promise.race()
 