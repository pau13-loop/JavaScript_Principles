var scope = "global scope";         // A global variable

function checkscope() {
    let scope = "local scope";      // A local variable
    function f() { 
        return scope;               // Return the value in scope here
    }
    return f;                   
}

console.log(checkscope()());        // What does this return?
/**
 * TODO 
 * It returns again the variable declared int he local scope called "scope" with the value "local scope", because the first call executes the function and the second call return the referenced function, and this one returns the value of the var called scope decalred in the local scope
 */