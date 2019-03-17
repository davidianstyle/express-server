var _ = require('underscore');

var letterArray1 = ['a','b','c'];
var letterArray2 = ['b','c','d'];

console.log("Perform 'console.log' function on each element in letterArray1");
_.each(letterArray1, console.log);

console.log("Find the intersection between letterArray1 and letterArray2");
console.log(_.intersection(letterArray1, letterArray2));

console.log("Find the difference between letterArray1 and letterArray2");
console.log(_.difference(letterArray1, letterArray2));

console.log("Union the values of letterArray1 and letterArray2 and find unique values");
console.log(_.uniq(_.union(letterArray1, letterArray2)));
