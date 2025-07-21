// ---------------PROTOTYPE--------------------

// function Person(name,age){
//     this.name=name
//     this.age=age
// }
// const p1=new Person("aifa",23)
// const p2=new Person("appu",34)

// Person.prototype.getName=function(){
//     console.log(`${this.name} ${this.age}`)
// }

// p1.getName()
// p2.getName()




// ------------PROTOTYPAL INHERITANCE--------------

// function Person(name,age){
//     this.name=name;
//     this.age=age
// }

// function Place(city,name,age){
//     Person.call(this,name,age)
//     this.city=city
// }


// Place.prototype=Object.create(Person.prototype)
// Place.prototype.constructor=Place

// Place.prototype.getPlace=function(){
//   console.log("hello")  
// } 

// const place1=new Place("wayanad","234","344")
// place1.getPlace()



// -------------------CLASS--------------------------

// class Person{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
//   myName(){
//     return this.name+" "+this.age
//   }
// }
// const p1=new Person("aifa",23)
// console.log(p1.myName())

// class Place extends Person{
//   constructor(name,age,place){
//     super(name,age)
//     this.place=place
//   }
//   getPlace(){
//     return this.place
//   }
// }

// const place1=new Place("appu",23,"wayanad")
// console.log(place1.getPlace())
// console.log(place1.myName())


// ---------ITERABLE AND ITERATORS------------------
// ---an object which implement iterable protocol is iterable---
// ---for an object to be an iterable it must implement a method at the key---[Symbol.iterator]
// ---that metod should not accept any argument and should return an object which conform to iterator protocol---
// ---object have a next()method and return two properties
// --1 value: which gives current element
// --2 done: which is boolean value indicating whethwer or not there are any more elements that could be iterated upon--


// const obj={
//   [Symbol.iterator]:function(){
//     let step=0
//     const iterator={
//       next:function(){
//         step++
//         if(step===1){
//           return{value:"hello",done:false}
//         }
//         else if(step===2){
//           return{value:"world",done:false}
//         }
//         return {value:undefined,done:true}
//       },
//     }
//     return iterator
//   },
// }
// for(const word of obj){
//   console.log(word)
// }


// ---------------------GENERATORS-------------------

function* generatorFunction(){
  yield 'hello'
  yield 'world'
}
const generatorObject=generatorFunction()
for(const word of generatorObject){
  console.log(word)
}