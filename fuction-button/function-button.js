function outer(){
    count=0
    let Button=document.getElementById("button-id").addEventListener("click",
    function xyz(){
        console.log("button clicked",count++)
    }
   )
}
outer()
     