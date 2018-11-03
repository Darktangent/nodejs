//where the variable is visible
"use strict"

var name="Sally"
//when we declare a variable in global scope it becomes a property of the window object

//local scope

function myFunction(){

    var name="Nelly"
}
console.log(name) // will output Sally


//variable hoisting
console.log(a)
var a =1
//it is hoisting of variable to top of scope its declared
//for example
function name(){
    var x
    console.log(x)
    x=1
    return x
}
name()

//scope chain

function name(){
    console.log(var1)
}
function lastName(){
    var var1='Mary'
    name();
}
lastName() // this is an error- because var1 is not defined
//variables are resolved in the order the code is written on the page