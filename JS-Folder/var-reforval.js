"use strict"

var a=2 //2 here is primitive type

//string number and boolean are passed by value
//objects are passed by reference
//passed by refernce means

//passed by value means-- if the value inside the function is changed it wont affect the variable thats outside of the scope of the function
function myFn(a){
    if(a){
        result= a * a //inside the function --inner scope
        return result
    }

}
// var foo=3
myFn(a)
console.log(a)

//another example

var name=true

function name1(name){
    name=false
    console.log(name)
}
name1(name)
console.log(name)

//passing by ref

var person={
    talk:true,
    eats:false,
    sleep:true
}
function personFn(a){
a.eats="eats fish" 
}
personFn(person)
console.log(person)


