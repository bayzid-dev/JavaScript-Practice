// about let , var , const 


// var itself a global variable for example 
if (true) {
    var varVariable = 'this is a var ';
}
console.log(varVariable);


if(true){
    var vari = 'this is an local';
}
console.log(vari);

// let itself a block scope/variable
/**
 block scope means let doesn't work outside the function
 only it will work inside his duniya(scope).
 */

if (true) {
    var letVariable = 'this is a let';
 
}
   console.log(letVariable);

// so , global and block scope are the major difference between var and let
// in the var you can redefine it thousand but let can't work then but can change


const constantValue = 'this is const';

constantValue = 'this is the changed form of const';
console.log(constantValue);

// it doesn't work


// function also a block scope 



