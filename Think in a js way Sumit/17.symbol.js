// THE NEW PRIMITiVE TYPES OF JAVASCRIPT IS SYMBOLS

/* 
 STRING
 NUMBER 
 BOOLEAN
 COMPLEX TYPE => OBJECT FUNCTION

 symbol => A unique identifier,uniquely generated value
*/

//CHECKING THE SYMBOL TYPES 
var a = 25;
var b = 25;
console.log(a === b); // true

// if i use the symbol it make it unique
var a = Symbol(25);
var b = Symbol(25);
console.log(a === b); // false

// BY USING FOR before sym it will be similar

var a = Symbol.for(25);
var b = Symbol.for(25);
console.log(a === b); // true



var sym1 = Symbol("this is a Symbol"); // SYMBOL WITH DESCRIPTION

console.log(sym1);
// symbol doesn't accept new keyword,by new can make string,number,boolean 





// symbol ke amRa object er property r value hiSebE use koRte paRbo

var sym1 = Symbol("this is a Symbol"); 

var object = {
    name : 'sejan ahmed bayzid',
    [sym1]: 'it is used as a property of an object',
}

console.log(object);




// Why do we need SYMBOLS ?


var myObj = {};

myObj.name = 'javascript';
myObj.estd = '1995';

myObj[Symbol("founder")] = 'Brendan EicH'; // its hidden from looping/iteration for that it has come to the es6


for(let key in myObj){
    console.log(key);
}




// my created include function\


var includes = Symbol('My Own Array Includes method');

Array.prototype[includes] = () => {
    console.log('This is my array includes function');
}

var myArray = [ 1, 2 , 3 ];


// console.log(myArray.includes(3));
// console.log(myArray["includes"](3));


myArray[includes](7);







































































