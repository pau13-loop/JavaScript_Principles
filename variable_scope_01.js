/**
 * global vs local
 */

var scope = "global";   // we declare a variable in the global scope  

function checkscope() {
    var scope = "local";    
    //! we declare a new variable with the same name as the variable declared in the global scope
    return scope;           
    // we return the value of the variable declared inside the function, this one has precedence above the global one because it has been declared in the local scope of the function, it will return "local"
}

console.log(checkscope());      // => "local"
/**
 * we make a console.log of what return the function, in this case returns the variable declared in the function body named scope, what we get with the return will be, "local"
 */