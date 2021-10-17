/**
 * @dfleta
 * 
 * global vs local
 * function scope and hoisting
 * 
 * The local variable is defined throughout the body of the function, 
 * which means the global variable by the same name
 * is hidden throughout the function. 
 * Although the local variable is defined throughout, 
 * it is not actually initialized until the var statement
 * is executed.
 * 
 * Javascript, the Definitive Guide. David Flanagan.
 */

var scope = "global";
// declaration and initialization of a global variable

function f() {

    var scope;
    // create a variable with the same name as the global variable but without its initialization

    console.log(scope);
    // acces the variable that has been declared inside the function body but how has not been initialized it prints, undefiend

    scope = "local";
    // assign a new value to the global variable locally, the variable will hange its value inside the function body

    console.log(scope);
    // prints the new value assigned locally inside the function body
}

f();

console.log(scope);
// prints the value of the global variable assigned globally