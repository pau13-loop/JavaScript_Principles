/**
 * @dfleta
 * 
 * global vs local
 * nested scopes
 * 
 * Function definitions can be nested. 
 * Each function has its own local scope, so it is possible 
 * to have several nested layers of local scope.
 * 
 * Javascript, the Definitive Guide. David Flanagan.
 */

var scope = "global scope"; // declaration and initialization of a variable in the global scope

function checkscope() {

    var scope = "local scope";  
    // declaration and initialization of a new variable with the same name as the variable declared above in the global scope 

    function nested() { 
        // nested function, function inside another function

        var scope = "nested scope";
        // declaration and initialization of a new variable with the same name as the other two variables declared above, one inside the function where this function is nested and the other one that has been declared previously in the global scope 
        
        return scope; 
        // return the value of the variable in the local scope, "nested scope"
    }

    return nested();
    // return the value of the nested function, we will get the value of the variable scope declared locally inside the function called nested, we will get, "nested scope"
}

console.log(checkscope());              // => "nested scope"
// console log of the function called chcekscope and how this one return the value of the function that has nested we will be able to see in our terminal, "nested scope"

console.log(scope);                     // => "global scope"
// console log of the global variable called scope, since this console log is not allocated inside the function body, we will be able to see in out terminal, "scope"