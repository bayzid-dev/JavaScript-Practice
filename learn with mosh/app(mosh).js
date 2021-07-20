   
                             //  learn with mosh ........

let name='sejan ahmed bayzid';
console.log(name);

// cannot be reserved keyword
// should be meaningful name
// cannot start with a number (1name)
// cannot contain a space or hyphen(-)      
// use the first word lowercase and 2nd first word should be an uppercase.
// let firstName;
// case sensitive.

let rate='0.4';
rate='3';
console.log(rate);  //the value of let/var can change.

/*  const rate='0.4';
  rate='3';
  console.log(rate);*/ //but the value of const doesn't change this sentence is an example.
    


  /* there are two kind of data-types  primitives/value types and reference types */
//   primitives are - number , string , boolean , undefined and null


//  let firstName='nishad'; //string literal - which is wraped by cottation; 
//  let taka=22; //number literal 
//  let manIsMortal=true; // boolean literal
//  let name=undefined;
//  let selectedColor= null; // which i reasign in future 


// language are 2 types static and dynamic.
// static - static language's value doesn't change in future 
// dynamic - dynamic language's value you can change in difference ways.



// reference have - array , objects , function  ... 

     // object 
let person = {
    name:'bayzid',
    class:11,
    age:17,
};

// dot notation
person.name='Nishad';

// bracket notation 
person['name']='jisan';

console.log(person.name);


// array
let selectedColor=['red', 'blue',];   //score bracket means this is an array
selectedColor[2]='2';    // array's 1st value-0, 2nd value-1, will start from 0-1... 
console.log(selectedColor);