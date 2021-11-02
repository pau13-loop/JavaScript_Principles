/**
 *  Eloquent JavaScript. Marijn Haverbeke.
 */


const hummus = function (factor) { 
    // Assign a constant to the function reference to make sure this constant never will change its value

    const ingredient = function (amount, unit, name) {
        // Same as before, but this time the function require three arguments to be able to call it

        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);   // template literal syntax ES6 
    };

    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(1);
/**
 * TODO
 * We call the function "humus" and once inside we execute the function "ingredients" as many times as need it.
 */