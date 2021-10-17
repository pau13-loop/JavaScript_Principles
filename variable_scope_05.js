/** 
 * @dfleta
 * 
 * global vs local
 * function scope and hoisting
 * 
 * JavaScript’s function scope means that all variables 
 * declared within a function are visible throughout 
 * the body of the function. 
 * Curiously, this means that variables are even visible 
 * before they are declared. 
 * This feature of JavaScript is informally known as hoisting: 
 * JavaScript code behaves as if all variable declarations 
 * in a function (but not any associated assignments) are “hoisted” 
 * to the top of the function. Consider the following code.
 *  
 * Javascript, the Definitive Guide. David Flanagan.
 */


var scope = "global";
// variable declared in the global scope, can be accessed from anywhere

function f() {

    console.log(scope);             // WTF !!
    //! prints undefined
    //? the variable can be found but hasn't got any value associated yet, because of thsi prints undefiend. The variable is visible, hoisiting

    var scope = "local";
    // declare a new variable with the same new as the variable declared in the global scope and assign a value initializing the variable

    console.log(scope);             // Prints "local"
    // look vor a variable called "scope" in the global scope, if it can be found it will print it the value of the variable, if it can not be found it will go to look in the global scope and if can not be located there it will throw ReferenceError
}

f();

console.log(scope);                 // Prints "global"
// print the value of the variable declared in the global scope, it goes to look directly on the glocal scope because the console log has not been executed from inside the body of any funciton