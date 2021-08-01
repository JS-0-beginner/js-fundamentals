// Array declaratiion in JS 

var names = ['John','Steve','Roman','Max','Ariana','Natasha','Bob'];

console.log(names);

// Array length in JS

console.log(names.length);

// Array index in JS

var namesIndex = names.indexOf('John');
console.log(namesIndex);

var namesIndex = names.indexOf('Steve');
console.log(namesIndex);

var namesIndex = names.indexOf('Roman');
console.log(namesIndex);

var namesIndex = names.indexOf('Max');
console.log(namesIndex);

// Array index position (-1) in JS

var namesIndex = names.indexOf('Senorita');
console.log(namesIndex);

// Array showing elements from Index

var indexItem = names[5];
console.log(indexItem);

var indexItem = names[6];
console.log(indexItem);

var indexItem = names[0];
console.log(indexItem);

// Array showing undefined elements from Index

var indexItem = names[7];
console.log(indexItem);

// Array changing any index value

names[2] = 'Chris';
console.log(names);

names[2] = '24';
console.log(names);

names[2] = 24;
console.log(names);

// Array(Push) adding elements in last in JS

names.push('Sam');
console.log(names);

// Array(Pop) removing elements in last in JS

names.pop();
console.log(names);

// Array saving popped element from array

var saveThatLastboy = names.pop();
console.log(names);
console.log(saveThatLastboy);


// Array(Shift) removing elements in first in JS

names.shift();
console.log(names);

// Array saving shifted element from array

var saveThatFirstboy = names.shift();
console.log(names);
console.log(saveThatFirstboy);


// Array(Unshift) adding elements in first in JS

names.unshift('John');
console.log(names);

names.unshift('Bill');
console.log(names);

