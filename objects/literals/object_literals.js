/**
 * JavaScript. the Definitive Guide. David Flanagan.
 */

var empty = {};     // An object with no properties

var point = { x: 0, y: 0 };       // Two properties

var point2 = { x: point.x, y: point.y + 1 };        // More complex values

console.log('point2_x: ', point2.x, ' point2_y: ', point2.y);   //* Print values of var point2

point.x = 3;    //* Change values of properties of obj "point"
point.y = 5;

console.log('point2_x: ', point2.x, ' point2_y: ', point2.y);   //* Print values of var point2. The value of var ofobj point2 has not changed 

var book = {
    "main title": "JavaScript",                 // Property names include spaces,
    'sub-title': "The Definitive Guide",        // and hyphens, so use string literals
    "for": "all audiences",                     // for is a reserved word, so quote
    author: {                                   // The value of this property is
        firstname: "David",                     // itself an object. Note that
        surname: "Flanagan"                     // these property names are unquoted.
    }
};