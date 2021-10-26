/**
 * @dfleta
 * 
 * global vs local
 * function scope and hoisting
 * 
 * In the following code, the variables i, j, and k 
 * are declared in different spots, but all have the same
 * scope. All three are defined throughout the body of the function.
 * 
 *  Javascript, the Definitive Guide. David Flanagan.
 */


function test(o) {

    var i = 0;
    // declared and initialized variable named i with the value 0, in the scope of the function

    if (typeof o == "object") {

        var j = 0;
        // declared and initialized variable named j with the value 0, how is declared like var it can be accessed from anywhere inside the function body, otherwise if it was declared like let just could have be accessed from the scope of the conditional

        for (var k = 0; k < 10; k++) {
            console.log(k);             // print numbers 0 through 9
            // makes a console log for each cycle of the loop, and the loop will be executed while k is minor than 10, this means will make a console log from 0 to 9
        }

        console.log(k);                 // prints 10
        // prints the last value assigned to k, this one is 10, the requested value to exit the loop
    }

    console.log(j);                     // j is defined, but may not be initialized
    // j was declared inside the scope of the conditional, but how has been declared like var can be accessed from anywhere inside the function body
}

o = {};
test(o);