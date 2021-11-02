/**
 * Function DECLARATION Hoisting
 * 
 * used to describe the illusion that all variable declarations
 * are “hoisted” to the top of the containing function. 
 * JavaScript builds its execution environment in two passes. 
 * The declaration pass sets up the runtime environment, 
 * where it scans for all variable and function declarations and
 * creates the identifiers. The second pass is the execution pass. 
 * After the first pass, all declared functions are available, 
 * but variables still undefined.
 * 
 * Programming JavaScript Applications. Eric Elliott.
 */


function number() {
    return 1;
}

function f() {
    console.log(number());      //, 2, 'Inner scope wins.
    function number() {         // the identifier and the body are hoisted
        return 2;
    }
}

f();
console.log((number()));         // 1, 'Outer scope still works.

/**
 * TODO
 * Declare a function called "number" in the global scope. This function return the numeric value "1". Declare a second function called "f" in the global scope and make a console.log of the function called "number". The function "f" has in his scope another function with the same name as the global one called, "nubmer". How function declarations are identified in the compile pass always first will look inside the function scope for a function with this name refrence before go and look in the upper scope, in this case the global scope. How inside the function delcaratino can find a functino with this name, will hoist this functin and will execute it and make a console log of the result. When we try to print the function result in the global scope, straight awayt look in this scope to get the functin mathcing the reference
 */