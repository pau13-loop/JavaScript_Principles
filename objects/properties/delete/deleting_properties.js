/**
 * Averigua que situaciones producen un error 
 * en la eliminacion de las variables de un objeto
 * y cuales no, analizando el siguiente codigo. 
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */


var book = {
    "main title": "JavaScript",                 // Property names include spaces,
    'sub-title': "The Definitive Guide",        // and hyphens, so use string literals
    "for": "all audiences",                     // for is a reserved word, so quote
    author: {                                   // The value of this property is
        firstname: "David",                     // itself an object. Note that
        surname: "Flanagan"                     // these property names are unquoted.
    }
};

delete book.author;         //* Access the obj called "book" and access the obj property inside this obj called "author" and delete this obj property from "book"
delete book["main title"];  //* Access the property "main title" of "book" with string literal reference to the obj property


console.log(book.author);           //* This console.log should print undefined since we have deleted the property obj "author" of the obj "book"
console.log(book["main title"]);    //* This console.log also should print undefined

// propiedades owned y heradadas: qué sucede al eliminarlas?

o = { x: 1 };          // o has own property x and inherits property toString
delete o.x;         // Delete x, and return true
delete o.x;         // Do nothing (x doesn't exist), and return true
delete o.toString;  // Do nothing (toString isn't an own property), return true
delete 1;           // Nonsense, but evaluates to true //? Why this no-sense evaluates to true ???