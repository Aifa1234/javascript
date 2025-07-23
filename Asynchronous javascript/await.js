//////////////ASYNC////////////////////
// ---async functions are functions that are instances of AsyncFunction constructor
//--always return promise


// function hello(){
//     return "hello its tuesday"
// }
// console.log(hello())



// async function hello1(){
//     return "hello its monday"//promise
// }

// console.log(hello1())

////////////AWAIT///////////////
//--await keyword can be put infront of any async promise based function to
//--to pause code untill that promise settles and returns its result
//--await only work inside async function



// async function greet(){
//     console.log("start")

//     let pro1=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("Hello one"),5000)
//     })
//     let result1=await pro1;
//     console.log(result1)


//     let pro2=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("Hello two"),10000)
//     })
//     let result2=await pro2;
//     console.log(result2)


//     console.log("end")
// }
// greet()




// -----sequential vs concurrent vs parallel---
function resolveHello(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello")
        },2000)
    })
}

function resolveWorld(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("World")
        },3000)
    })
}

// async function sequential(){
//     const h1=await resolveHello()
//     console.log(h1)

//     const w1=await resolveWorld()
//     console.log(w1)
// }
// sequential()

// async function concurrent(){
//     const h2=await resolveHello()
//     const w2=await resolveWorld()

//     console.log(h2)
//     console.log(w2)
// }
// concurrent()

async function parallel(){
    Promise.all([
        (async()=>console.log(await resolveHello()))(),//after 2s
        (async()=>console.log(await resolveWorld()))()//after 3s
    ])
}
parallel()