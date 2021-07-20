
// THIS NOTE IS COLLECDTED FROM W3SHOOL 



// 1. Avoid Global Variables -> Always Declare Local Variables 

// GLOBAL VARIABLE 

var a = 5;

function myFunc(){
    console.log(a);
}
myFunc();

// LOCAL VARIABLE   => ALWAYS TRY TO USE IT WHEN WRITE A FUNCTION

function myFunc() {
    var a = 5;
    console.log(a)
}
myFunc();



// 2. Declarations on Top
/* 
It is a good coding practice to put all declarations at the top 
of each script or function.

Give cleaner code 
*/


// Declare at the beginning



// 3. Never Declare Number, String, or Boolean Objects


var x = "John";             
var y = new String("John");
(x === y) // is false because x is a string and y is an object.


// 4.  Don't Use new Object()

/* 
Use {} instead of new Object()
Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use [] instead of new Array()
Use function (){} instead of new Function()
 */


// 5. Use ( === ) Comparison instead  (==)  operator









































































































































































