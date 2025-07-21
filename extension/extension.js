// function save(){
//     console.log("button clicked")
// }
let myLead=[]
let button=document.getElementById("input-button")
let input=document.getElementById("input-element")
const list=document.getElementById("list-element")

// localStorage.setItem("myNme","per")
// let name=localStorage.getItem("myName")
// console.log(name)
// localStorage.clear()

// let myLead1='["www.welcome.com"]'
// // myLead1=JSON.parse(myLead1)//STRING TO ARRAY
// myLead1=JSON.stringify(myLead1)//ARRAY INTO STRING
// console.log(typeof myLead1)
   

// localStorage.clear()
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLead"))
console.log(leadsFromLocalStorage)


if(leadsFromLocalStorage){
    myLead=leadsFromLocalStorage
    renderLead(myLead)
}


function renderLead(lead){
    // console.log(myLead)
    
    list.innerHTML=""
    for(let i=0;i<lead.length;i++){
       
    //  list.innerHTML+=" <li><a target='_blank' href='#' > "+myLead[i]+"</a></li>"

     list.innerHTML+=`
        <li>
            <a target='_blank' href='${lead[i]}'>
                ${lead[i]}
            </a>
        </li>
        `
    //   const li=document.createElement("li")
    //   li.innerText=myLead[i]
    //   list.append(li)
}
}



const deleteButton=document.getElementById("delete-element")



deleteButton.addEventListener("click",function(){
    console.log("double clicked")
    localStorage.clear()
    myLead=[]
    renderLead(myLead)
})


button.addEventListener("click",function(){
   myLead.push(input.value)

   localStorage.setItem("myLead",JSON.stringify(myLead))
   renderLead(myLead)
}
) 


const tabButton=document.getElementById("tab-element")

// let tabs=[
//     {url:"www.google.com"}
//  ]

tabButton.addEventListener("click",function(){

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        // console.log(tabs)

         myLead.push(tabs[0].url)
         localStorage.setItem("myLead",JSON.stringify(myLead))
         renderLead(myLead)
        // let activeTab=tab[0]
        // let activeTabId=activeTab.id
    })
    // console.log(tab[0].url)
   
})
// let box=document.getElementById("box")
// box.addEventListener("click",function(){
//     console.log("open box")
// })