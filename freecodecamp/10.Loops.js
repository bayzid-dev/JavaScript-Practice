
//************** THIS IS ALL ABOUT LOOPS **********//
// empty string is must used.neither ans shouldn't show.
/*
 Different Kinds of Loops
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

 */



//iterate while loop
var myArray = [];
var i = 0;
    while (i < 5) {
        myArray.push(i);
        i++;
    }

    console.log(myArray);
// 2nd
   var checkIPlusOperator = [];
   var i  = 1;
   while (i < 7) {
       checkIPlusOperator.push(i);
       i++;
   }
   console.log(checkIPlusOperator);

// third

var thArray = [];
var i = 0;
while (i < 10) {
    thArray.push(i);
    i++;
}
console.log(thArray);



// iterate with for loops


var myArray = [];

for (var i = 1 ; i < 5; i++) {
    myArray.push(i);
    
}
console.log(myArray);


var etaEktaArray = [];

for (var i = 1; i <= 100 ; i++){
    etaEktaArray.push(i);
}
console.log(etaEktaArray);

//2nd

var forLoops = [];

for(i = 0; i < 11 ; i++){
    forLoops.push(i);
}
console.log(forLoops);

// iterate odd/(biJur) numbers with a for loop

var ourArray = [];
for(var i = 1; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);

//2nd
var myArray = [];
for( i = 1; i < 10 ; i += 4){
    myArray.push(i);
}
console.log(myArray);

// count backwards with for loop
var ourArray = [];
for (var i = 10; i > 0 ; i -= 3) {
    ourArray.push(i);
}
console.log(ourArray);



// iterate through an array with for loop   2:17m this class
var ourArr = [10, 12, 8];
var total = 1;     // total +=  means -- ```total= total+(something)```.

for (var i = 0 ; i < ourArr.length ; i++) {
    total = ourArr[i];   
}
console.log(total);



// 2nd 
var ourArray = [3 , 7 , 10 , 20];
var ourTotal = 50;

for (var i = 0 ; i < ourArray.length ; i++){
    ourTotal -= ourArray[i];
}
console.log(ourTotal);


// nesting for loop    2:20m this class





// while loop check firstly check the condition then execute the code /* in do while loop it's check the code first then check the condition 


// iterate with do while loops
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)
console.log(i , myArray);

// profile lookups  2:24m this class   will try to get it