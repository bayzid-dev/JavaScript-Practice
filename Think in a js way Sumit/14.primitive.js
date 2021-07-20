
/// Primitive VS Reference Type in javascript

/*******  primitive Value 
 * 1.  NUMBER  
 * 2.  STRING 
 * 3.  BOOLEAN
 * 4.  UNDEFINED
 * 5.  NULL
 * 6.  SYMBOL (New type of ESC6)
 * 
 * ** primitive values are data that are stored in the stack
 * ** primitive value is stored directly in the location that the variable
 */

/*****$   Reference Value/Object Value
 * 
 *    ***  MASTER OBJECT **
 * 1.  ARRAY
 * 2.  OBJECT
 * 3.  FUNCTION
 * 4.  DATE
 * 5..
 * 6.......
 * 
 * 
 * ** reference values are objects that are stored in the heap
 * ** reference value stored in the variable location is a pointer to a location in memory where the object is stored 
 * 
 * REFERENCE TYPE -এ যা কিছু আছে সব গুলুই একটা master object থেকে তৈরী।
 * 
 */


//  2. The Art of Thinking Clearly
//  3. How to Win Friends and Influence People



/// reference value 

var a = ["Sakib"," Tamim"];

var b = a;


// a.push('Mahmudullah'); //   change / mutate koRecHi

a = [];  // assignment


console.log(a);
console.log(b);



// another example




var language = {
    name : 'javaScript',
    estd : 1995,
    libraries : ['react', 'Vue', 'jquery']
};

var language2 = {...language}; // immutably

language.libraries.push('angular')

console.log(language);
console.log(language2);



/// primitive type 


















































































