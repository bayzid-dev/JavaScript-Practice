//**** this is all about function *****/
  
//remember that, "we always call the function name getting the ans";
// ------   means another example

//write reusable code with function

function reusableFunction() {
    console.log("hey! I'm Bayzid");
}

reusableFunction();




// passing values to function with argument

function functionWithArg(a,b) {
    console.log(a + b);
}
functionWithArg(10,5);

function functionWithArguments(y,z) {
    console.log(y * z);
}
functionWithArguments(10,10);


function argument (g,h) {
    console.log(g + h);
}
console.log(argument(50,200));

// global scope and function      55:01 minute in class




// local scope and function 

function myLocalScope() {
    var myVar = 40;
    console.log(myVar);
}
myLocalScope();


// console.log(myLocalScope());          another method getting the ans







//Global vs local variable in function     1:03m this class
// global var which is written outside the function 
// local var which is written inside the function


var outerWear = "T-shirt";  //it's a global var

function myOutFit (){
    var outerWear = "sweater";    
    return outerWear;
}
console.log(myOutFit());
console.log(outerWear);




// return a value from a function with return
function timesFive(num){
    return num * 5;
}
console.log(timesFive(6));


function numberOfBook(math){
    return math + 20;
}
console.log(numberOfBook(60));

// ---- another example
function timeNine (nine) {
    return nine - 2;
}
console.log(timeNine(9));

function timeSet(ten){
    return ten - 6;
}
console.log(timeSet(4));


//assignment with a return value  ---------- 1:08m





// stand line  
