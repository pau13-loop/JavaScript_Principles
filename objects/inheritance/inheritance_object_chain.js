// inherit() returns a newly created object that inherits properties from the
// prototype object p.  It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.

function inherit(p) {
    if (p == null) throw TypeError();   // p must be a non-null object      //! Otherwise will throw a TypeError
    if (Object.create)                  // If Object.create() is defined... //? Anyway won't be always defined ???
        return Object.create(p);        //    then just use it.
    var t = typeof p;                   // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();              //! Chack that "t" is an object or a function, otherwise throw a TypeError
    function f() { };                    // Define a dummy constructor function.
    f.prototype = p;                    // Set its prototype property to p.
    return new f();                     // Use f() to create an "heir" of p.
}


/**
 * Como funciona la resolucion de nombre en la cadena de objetos
 * del siguiente codigo?
 */

var o = {};                 // o inherits object methods from Object.prototype
o.x = 1;                    // and has an own property x.

var p = inherit(o);         // p inherits properties from o and Object.prototype
p.y = 2;                    // and has an own property y.

console.log(p.x);           //* "p" has inhertied the property "x" from the obj "o" with it's value

var q = inherit(p);         // q inherits properties from p, o, and Object.prototype
q.z = 3;                    // and has an own property z.

                            //* Now the obj "q" has the props (x, y and z)
console.log(q.toString());  //* This method will print "[object Object]"
                            //? Why the first letter will we in lower case and the second one start with a capital letter ???
/**
 * TODO 
 * That's because the constructor function is called Object (with a capital "O"), and the term "object" (with small "o") refers to the structural nature of the thingy. [object Object] is a string    version of an object instance. This value is returned by a JavaScript program if you try to print out an object without first formatting the object as a string.
 */

var s = q.toString();       // toString is inherited from Object.prototype
console.log(q.x + q.y);     // => 3: x and y are inherited from o and p+
console.log(s)              //* This should print "[object, Object]", is a representation of the obj "q.toString()" saved inside the var "s"

/** 
 * Inheritance occurs when querying properties 
 * but not when setting them
 * It's a key feature of JavaScript
 * 
 * Explica el comportamiento de la herencia
 * respecto a la variable r
 */

var unitcircle = { r: 1 };       // An object to inherit from
var c = inherit(unitcircle);    // c inherits the property r

c.x = 1; c.y = 1;               // c defines two properties of its own
c.r = 2;                        // c overrides its inherited property
console.log(unitcircle.r);      // => 1: the prototype object is not affected

/**
 * TODO
 * "c.r = 2" overrides the property related to the obj "c" but how the properties has been inhertied the prop of the obj "unitcircle.r = 1" still unthouched
 */