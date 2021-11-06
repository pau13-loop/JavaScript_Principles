/**
 * JavaScript objects can be thought of as sets of properties, 
 * and it is often useful to be able to test for membership
 * in the set to check whether an object has a property with
 * a given name. 
 * You can do this with the in operator, with the hasOwnProperty() 
 * and propertyIsEnumerable() methods, or simply by querying the property.
 */


var o = { x: 1 };
console.log("x es propiedad de o:", "x" in o);                // true: o has an own property "x"
console.log("y no es propiedad de o:", "y" in o);                // false: o doesn't have a property "y"
console.log("toString se hereda y esta en o:", "toString" in o);         // true: o inherits a toString property

//* Check the obj is got the specified property in it and the specified methos inherit for objs

/**
 * The hasOwnProperty() method of an object tests whether
 * that object has an own property with the given name. 
 * It returns false for inherited properties.
 */

var o = { x: 1 };
console.log("x es propiedad de o: " + o.hasOwnProperty("x"));                  // true: o has an own property x
console.log("y no existe en o: " + o.hasOwnProperty("y"));                  // false: o doesn't have a property y
console.log("toString se hereda, no es propiedad de o: " + o.hasOwnProperty("toString"));           // false: toString is an inherited property
//* This returns false bcs is an inherited property and it's just checking for the own properties of the obj leaving o the side the inherited properties