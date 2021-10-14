/**
 * @dfleta
 * 
 * global vs local
 * var to declare local variables
 * 
 * Although you can get away with not using the var statement 
 * when you write code in the global scope, 
 * you must always use var to declare local variables.
 * 
 * Javascript, the Definitive Guide. David Flanagan.
 */

scope = "global"; // declaration of a variable called scope in the global scope

function checkscope2() {

    scope = "local";    
    // overwrite of the value of the variable scope declared above, outside the function body
    myscope = "local";
    // declaration of a new variable in the global scope since we do not indicate the type of the variable (var, const, let)
    //! variable myscope
    //? why when we do not indicate the type of the variable it goes to the global scope and when we indicate the type we can not acces to it's value from outside of the function body ?

    return [scope, myscope];
    // return of the two global variables in an array, scope with it's value overwrite and the variable myscope declared inside the funciton body
}

console.log(checkscope2()); // return the result of the function, ["local", "local"]

console.log(scope);         
// console log of the overwrite value of the variable called scope, "local"
console.log(myscope);           
// console log of the value of the global variable called myscope, "local"