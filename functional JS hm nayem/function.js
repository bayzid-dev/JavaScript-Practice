// 1.function declaration 
// 2.local variables
// 3.global variables
// 4.parameters and it's evlution 
// 5.return function 
// 6.naming function (get , set , calc , create , check)
// 7.immidietely invokable function expression - IiFE




//function declaration 


function adder (a, b) {
    console.log(a + b);
}
adder(20,30)


//local variables

function Name () {
    let userName = 'john abaRahAm';
    console.log(userName);
};
Name();

// console.log(userName); 

/**
if i want to get output outside the function then it will show error 
   because it can't work outside the function 
       that is why it's called a local function
 */



//global variables

let anotherName = 'sejAn ahMEd baYziD';

 function defaultName (){
    console.log('Hello,',anotherName);
 }

 defaultName();


 console.log(anotherName);

/**
in global f -> if i want to get output outside the function then it will show the ans 
   because it can work outside the function 
       that is why it's called a global function
 */



//parameters and it's evlution 

function test (a,b) {
    console.log(a + b);
}

test('SeJan', ' NiShad');


//return function 


function square(x){
    return (x*x);
};

// square(10);

let squareResult = square(10);
console.log(squareResult);



// naming function (get , set , calc , create , check)
/**

getValue
setValue
calcSquare
createElement
checkValue

 */


// immidietely invokable function expression - IiFE

(function(name){
    console.log(name);
})('kamal hossen');