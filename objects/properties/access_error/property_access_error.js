/**
 * Averigua que situaciones producen un error 
 * en el acceso a las variables de un objeto
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


console.log(book.subtitle);     //* will return undefined since the property "subtitle" can not be located inside the obj "book"

//TODO ¡¡¡ ATENTION, YOU'RE WRONG, REMEMBER THSI SCENARIO PLEASE !!!
//! Obviously this produce an error bcs the prop "subtitle" inside the obj "book" will be never found bcs is not declared 

var len = book.subtitle.lenght; //* This will return an error since can not get the length of a property inside an objthat has not been declared os it's declared like undefined

//TODO ¡¡¡ ATENTION, YOU'RE WRONG, REMEMBER THSI SCENARIO PLEASE !!!
//* This will return undefined or 0 since the prop "subtitle" isnide the obj. "book" can not be found