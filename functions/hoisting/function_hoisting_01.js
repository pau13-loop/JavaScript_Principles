/**
 * Nada nuevo: hoisting de variables
 * 
 * Programming JavaScript Applications. Eric Elliott.
 */

var x = 1;  // Define var "x" and initialize the var assigning a value to it. Var declared in the global scope

function f() {  // Declaration of a function called "f"
    console.log(x); 
    // Print the value of var "x". We get "undefined" because the var declared in the functin scope it's making hoisting of the "var" declared in the global scope
    var x = 2;  
    // Declare a new var in the function scope with a value. The name of the var is the same one than the var declared in the global scope, but with a different value
    console.log(x);
    // Print the value of the "var" decalred in the function scope
}

console.log(x);
// Print the value of the var declared in the global scope

f();