/**
 * 2D cartesian point
 * Polar coordinates of the point
 * 
 * Properties defined by getters and setters 
 * are sometimes known as accessor properties 
 * to distinguish them from data properties 
 * that have a simple value.
 * 
 * Accessor properties do not have a writable attribute
 * as data properties do. 
 ** - If a property has both a getter and a setter method, it is a read/write property. 
 ** - If it has only a getter method, it is a read-only property. 
 ** - If it has only a setter method, it is a write-only property 
 * (something that is not possible with data properties) 
 * and attempts to read it always evaluate to undefined.
 * 
 * Usarlas para sanity check o para modificar el valor
 * de una propiedad cada vez que es leida (examen lyft)
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */


var p = {
    // x and y are regular read-write data properties.
    x: 1.0,
    y: 1.0,
    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    /**
     * TODO
     * The properties of p are accessible to be read or write by default. And even inside a JS obj we could define methods, most known as accessor properties, to access, change or operate with the properties that own the obj. The accessor properties (methods) are not allowed to be overwrited once they've been declared like a property of an obj
     */

    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newvalue / oldvalue;
        this.x *= ratio;        // this refers to the point object
        this.y *= ratio;
    },

    // theta is a read-only accessor property with getter only.
    get theta() { return Math.atan2(this.y, this.x); }
};

/**
 * TODO 
 * If an accessor property is defined with the same name like a setter and getter will be a read and write property of the obj, otherwise won't be both. A getter will be just a read accessor property and a setter just a write accessor property
 */

console.log("actual r = " + p.r);
p.r = 2; 
console.log("new r = " + p.r);
console.log("actual x is not 1: " + p.x);
console.log("theta : " + p.theta);

/**
 * TODO 
 * If we just call "p.r" we will access the getter of the obj and execute it. But if we call "p.r" and we attribute a new value, we will be executing the setter of the obj
 * 
 */