/**
 * 
 * The arrow comes after the list of parameters 
 * and is followed by the function’s body. 
 * It expresses something like “this input (the parameters) 
 * produces this result (the body)”.
 * 
 * Eloquent JavaScript. Marijn Haverbeke.
 */


const power = (base, exponent) => {

    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 3));


// When there is only one parameter name, 
// you can omit the parentheses around the parameter list.
// If the body is a single expression, rather than a block in braces, 
// that expression will be returned from the function.

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

console.log(square1(3));
console.log(square2(3));

/**
 * TODO
 * Add a function two times with just a single parameter and the first one adding the respective curly braces and in the second one avoid the curly braces
 */

const withCurlyBraces = (x) => { return x * x / 2; };
const withOutCurlyBraces = x => x * x / 2;

console.log(withCurlyBraces(10));
console.log(withOutCurlyBraces(10));