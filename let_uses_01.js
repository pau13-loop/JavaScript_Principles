/**
 * Ejemplos de uso de Let:
 * - Reemplazar var en bucles for
 * - Definicion de variables en un bloque:
 *   block vs lexical scope
 */

function oddsums(n) {

    let total = 0, result = [];

    for (let x = 1; x <= n; x++) {
        let odd = 2 * x - 1;
        total += odd;
        result.push(total);
    }

    // console.log(x);              // que sucede y por que?

    /**
     * x is initialized like a counter, and the loop will keep runing while the value of x is minor or equal than the value of n, every time the loop makes one cycle the value of x is incremented by plus one.
    //! Finally if we try to print x outside the loop we will get a ReferenceError
     */

    // console.log(odd);            // que sucede y por que?

    /**
     * odd is declared like a local variable that just exists inside the for loop. Each cycle of the loop odd change his value by a mathematic operation, two time the value of x less one to the value.
    //! Finally if we try to make a console.log of odd outisde the loop we will get a ReferenceError
     */

    console.log(total);          // que sucede y por que?

    /**
     * The total is declared and initialized at beggining of the function but how is declared like let just exists inside the scope of the funciton. Every cycle of the loop the total change his value, it becomes his previous value plus the new value of odd. And how it's been declared outside the scope of the loop will be possible make a conosole.log inside the function of total because it belongs to this scope.
     */

    return result;

    /**
     * Each cycle of the loop push the actual value of the variable total to the array called result. How has been initialized in the same line as total is declared like let and just exists inside the scope of the function.
     */
}

console.log(oddsums(5));            // Returns [1,4,9,16,25]