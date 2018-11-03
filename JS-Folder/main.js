//use strict - whats the purpose
//makes debugging easier
"use strict";
//why string? older browser compatibility
//with strict mode assigning a value without declaring a variable throws reference error and doesnt create a global variable

"use strict";
x = 3.14;   
console.log(x) // without "strict mode" we get 3.14 which means its creating a global variable and most of the time we want to avoid this behavior. it forces you to use variables that have been declared this prevents accidental globals and syntax error problems. additionally, it stops developers to use reserved keywords from future versions as variable names in their applications
function newCode(){
    "use strict"
    //Strict mode

}

//big advantage of using "strict mode is that it wont let you delete a variable or function and arguments to functions"

var name='john'
delete name //SyntaxError when using "strict mode"

function fn(name){

    delete name //not allowed
}
//without strict the var a inside the eval expression leaks out and you get an unexpected value. This behavior can be avoided if we use strict mode
var a=1
eval("var a=100")
console.log(a)