var o = {x:1, y:2};             //* Define obj "o" with two properties

var o1 = Object.create(o);      // o1 inherits properties x and y.
console.log(o1.x);              //* this should print "1", the value for the inihertied property "x" from the obj "o"
console.log(toString);          //* will print the function toStrin --> "f toString()"

var o2 = Object.create(null);   //* Create obj "o2" without inherit from any other obj any property
console.log(o2.toString);       //* print undefined the obj "o2", we just created the obj but we didn't assigned to it any property or constructor 