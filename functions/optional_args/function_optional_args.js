/**
 * When a function is invoked with fewer arguments than declared parameters, 
 * the additional parameters are set to the undefined value. 
 * Uou must be able to assign a reasonable default value to parameters 
 * that are omitted.
 * 
//! Put the optional ones at the end of the arguments list.
 * 
//! Use the comment optional to emphasize.
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */


// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.


function getPropertyNames(o, /* optional */ a) {
    a = a || [];                                 // If undefined, use a new array
    for (var property in o) a.push(property);
    return a;
}
/**
 * TODO 
 * Declare the function and at the end of the execution return the value of the obj "a" 
 */

// This function can be invoked with 1 or 2 arguments:

var o = {
    una: "una",
    dos: "dos",
    tres: "tres"
};
/**
 * TODO
 * Declare the obj "o" and assiign the desired properties
 */

var a = getPropertyNames(o);        // Get o's properties into a new array

/**
 * TODO 
 * Declare the obj "a" that contains a reference to the function and pass the obj "o" to the function. Every time "a" will be called, the function will be executed and the return value will be assigned to the obj "a". The value of the obj "a" will be ---> ["una", "dos", "tres"];
 */

console.log(a);
/**
 * TODO
 * Print the value of the obj "a"
 */


var p = {
    cuatro: "cuatro",
    cinco: "cinco"
}
/**
 * TODO
 * Declare the obj "p" and assign the desired properties
 */

var b = getPropertyNames(p, a);     // append p's properties to that array
/**
 * TODO
 * Delcare the obj "b" that contains a function reference calling this function with the obj "p" and "a". The returned value will be assigned to the obj "b". The value of the obj "b" will be the value of the properties of "p" plus the values that already has being assigned to the obj "a" in its previous call. 
 */

console.log(b);
/**
 * TODO 
 * Print the value of the obj "b". The value of "b" will be ---> ["una", "dos", "tres", "cuatro", "cinco"];
 */