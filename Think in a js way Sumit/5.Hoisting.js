/**
 * HOISTING
 * VAR VS LET VS(CONST)
 * FUNCTION
 */




/*****
  Hoisting is JavaScript's default behavior of moving all declarations 
  to the top of the current scope 
  (to the top of the current script or the current function).
 
জাভাস্ক্রিপ্ট যাবতীয় ডিক্লেয়ারেশনগুলোকে সব সময় সবকিছুর আগে নিয়ে যায়, এটাই মূলত হোইস্টিং।
  scope and hoisting are similar each other
*/

// var a = 'Bangladesh'; 

    console.log(a);

    var a = 'Bangladesh'; // if i assign var to the below of the log will give me (undefined)
        


// console.log(b);

// let b = 'singapore'; //if i assign let to the below the log it'll give me (referenceError)







// using var ans does not match with expectation


var LANGUAGE = 'JAVA';
var language = 'Javascript';

function getLanguage(){
    if(!language){
        var language = LANGUAGE;
    }
    return language;
}

console.log(`i Love ${getLanguage()}`); 

// var anotherLsn = 'c++';
// var secondLsng = 'python';

// function accessLanguage(){
//     if(!anotherLsn){
//         var secondLsng = anotherLsn;
//     }
//     return secondLsng;
// }

// console.log(`i like ${accessLanguage()}`);


// using let ans does not match with expectation

let PROGRAMMING = 'JAVA';
let programming = 'Javascript';

function getProgramme(){
    if(!programming){
        let programming = PROGRAMMING;
    }
    return programming;
}

console.log(`i Love ${getProgramme()}`); 








// function hoisting 

myFunc() //এখানেও hoisting হচ্ছে

function myFunc() {
    console.log('my favorite code is javascript');
}











































//Using a let variable before it is declared will result in a ReferenceError


//Using a const variable before it is declared, is a syntax error, so the code will simply not run.


//Using a var variable before it is declared,is a undefined,but code run.



































