setTimeout(()=>{
    console.log("First")
},0)
const promise=new Promise((resolve,reject)=>{
    resolve("successful")
})
promise.then((value)=>{              
    console.log(value)
})

for(let i=0;i<10000000;i++){

}                              
console.log("second")                                                                                                                                                                                                    

////OUTPUT////           
second 
successful
First           

                                                                                                                                                                                                                                                                                                                                                                            