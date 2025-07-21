let welcomeElement=document.getElementById("welcome-id")

// let name="aifa"
// let greeting=" hello welcome back"
// welcomeElement.innerText=name+greeting

// welcomeElement.innerText+=" its okay"
function greetUser(greeting,name){
     welcomeElement.textContent = `${greeting} ${name}`;
}
greetUser("hello","aifa")