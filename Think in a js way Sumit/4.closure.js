// this is about closure

/***
 * A closure is the combination of a function bundled together 
 * which gives you access to an outer 
 * function’s scope from an inner function
 * 
 *  আমরা scope er বাইরে থেকে যদি কোনো Data Access করি ঐ Data tai closure
 ***/


// example 1

var nam = 'SEJAn AHmed BayZid';

function myName (){
    console.log('hello', + nam);
}
myName();

// example => 2

var num1 = 2;


var adding = function(){
    var num2 = 5;
    return function () {
       num1 + num2; 
    } ;
    // it can access from global var so it is a closure
    
};

var myFunc = adding();

console.dir(myFunc);


// example => 3


function bankBalance (initialValue){
    var balance = initialValue;
    return function(){
        return balance;
    }
}
var account = bankBalance(1000);

console.dir(account);

















































































































































































































































































































































































































































































































































































