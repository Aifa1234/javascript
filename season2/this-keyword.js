///////////////////GLOBAL SPACE///////////////

// "use strict";

// console.log(this)//RETURN GLOBAL OBJECT ACCORDING TO WHERE YOU ARE RUNNING JS

// function x(){
//     ///value depend on strict or non strict mode/////
//     console.log(this)
// }      
// x()

// window.x()

///RETURN UNDEFINED IN STRICT MODE//////////
                                                        

// ----this inside non-stricct mode--(this substitution)---
// --if value of this keyword is undefined or null,it will replace by global object----
// ---only in non-strict mode--------



// -----------VALUE OF THIS DEPEND ON HOW FUNCTION CALLED--



///--------this INSIDE A OBJECT'S METHOD-----------

const student1={
    name:"aifa",
    getName:function(){
        console.log(this.name)//RETURN OBJECT
    }
}
student1.getName()

const student2={
    name:"appu"
}
student1.getName.call(student2)


//-----CALL APPLY BIND---------------

// -------Bind----------
//-------pass list of argument------
const employee={
    name:"arun",
    getDetail:function(){
       console.log(this.name)
    }
}
const employee2={
    name:"arjun"
}
const one=employee.getDetail
one()//undefined

const two=employee.getDetail.bind(employee2)
two()


// ---------apply--------------
// ---can pass array of argument---

function getDetailPlace(place,visiter){
    console.log(`hello ${this.name} from ${place} to meet ${visiter}`)
}

const person={
    name:"ann"
}
getDetailPlace.apply(person,["wayanad","siva"])


// -------------ARROW FUNCTION----------
const one1={
    a:10,
    b:()=>{
        console.log(this)
    }
}
one1.b()//refer to global object
//LEXICAL CONTEXT

const one3={
    b:20,
    x:function(){
        //enclosing lexical context
        const y=()=>{
            console.log(this)
        }
        y()
    }
}
one3.x()



// -----------------DOM--------------                          
//--reference to html element--------                   

   


