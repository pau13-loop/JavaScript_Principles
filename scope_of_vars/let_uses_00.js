/**
 * Variables declaradas por let tienen por alcance el bloque
 * en el que se han definido, así mismo, como en cualquier bloque interno. 
 * De esta manera, let trabaja muy parecido a var. 
 * La más notable diferencia es que el alcance de una variable var es la función contenedora.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 */


function varTest() {

    var x = 31;

    if (true) {
        var x = 71;             // we asign a nwe value for x, now the value of x is 71
        console.log(x);         // 71
    }

    console.log(x);             // 71
                                // the conditional always is executed, the value of x will be 71 since the console.log is inside the scope of the function
}

/**
 * EXPLANATION with debugg
 * The var x is declared
 * After the conditional is executed, x got asigned a new value, and it persist in the scope of the function because it has been declared like a var
 */


function letTest() {

    var x = 31;

    if (true) {
        let x = 71;                // we asign a new value for x, now the value of x is 71
        console.log(x);           // 71
    }
    console.log(x);             // 31
                                // the value of x should be 71, since the conditional is always executed and the console.log is inside the scope of the function
}

/**
 * EXPLANATION with debugg
 * The var x is initialized in the scope of the function
 * Once the conditional is executed is creates a variable declared like let that just exists in the scope of the conditional, once is exited from this one the 
 * value of let x will dissapear
 * Finally the console log print the val that persist in the scope of the function, the var x with the value 31
 */

function hoistingTest() {

    console.log(w);
    // console.log(z);               // ReferenceError
                                    // the var z is not declared yet, the program can not allocated, 
                                    //? but what happens with the hoisting, it should work in this case and bring up the declaration of z ?

    var x = 31;
    let y = 91;
    u = 1;                          // we didn't specify wich type of var is u

    if (true) {
        let x = 71;
        console.log(x);           // 71
        console.log(y);           // 91
        let z = 101;
        var w = 1001;
    }

    console.log(x);               // 31
    // console.log(z);             // ReferenceError  
                                    //! the var z just exists inside the scope of the conditional, once is exited z can not be found because of that it throws back a ReferenceError
    console.log(w);               // 1001
}

/**
 * EXPLANATION with debugg
//? The console.log trying to print the variable called w, find the declaration but can see that is not initialized yet, then it throw an undefined value ?
 * initialize the value for x, y and u. The variables x and y will exists in the scope of the function but how u has not been indicated wich type of var will be is initialized as a global variable //? and can be accessed from anywhere of the scope of the program ? 
 * 
 * Inside the conditional is assigned a new value for x inside the scope of the conditional, and the new value of x and the value of y are printed. 
 * The variable z is initialized but how is declared like let just will exists inside the scope of the conditional because os that when tries to print it outside the scope of the conditional it get a Reference Error. And w is initialized and it exists in the scope of the function because is declared like var
 */

varTest();

letTest();

hoistingTest();

console.log(u);