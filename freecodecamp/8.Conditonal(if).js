
/****   THIS IS ALL ABOUT CONDITIONALS (IF - ELSE)     *******/

// change the value and check it.
// console.log er vitore value er man ta bosabo.
 // use conditional logic if statement.

function trueOrFalse(wasThatTrue){
    if (wasThatTrue) {
        return "yes,That was true";        
    }
    return "That was false";
}
console.log(trueOrFalse());

// comparison with the strict equality operator

function testEqual (num) {
    if (num == 12) {
        return "equal";
    }
    return "not equal";
}
console.log(testEqual("12"));  


// comparison with the strict equality operator

function testStrict (num) {
    if (num === "12") {             // === matching the exact result
        return "equal";
    }
    return "that was not equal";
}
console.log(testStrict(12));

/**  
 7 === 7 equal
 7 === "7" not equal // bcz it's a string
 **/

 //practice comparing different value
 function compareEquality (a , b) {
     if (a === b) {
         return "it's equal";
     }
     return "not equal";
 }
 console.log(compareEquality(10,"10")); // change the value and check it


 //comparison with the inequality operator   (!=)

 function testNonEquality (val){
    if (val != 30) {
        return "not equal";
    }
    return "equal";
}
console.log(testNonEquality(30)); // change the value and check it


/*  
////// remember the most important part -----
greater than/greater equal er somoy boro digit theke start hobe;

ar less than/less equal er somoy chuto digit first theke start hobe;
*/


// greater than value with if statement     wow! whats a program

function testGreater (val){
    if (val > 100)
    return "over 100";
    if (val > 10)
    return "over 10"

    return "10 or under"
}
    console.log(testGreater(20));



//comparison with the greater than operator or equal to operator
// what's a amazing/nice program     just wow!!!!


function greaterOrEqualTo (result) {
    if (result >= 60) {
        return "60 or over";
    }
    if (result >= 30) {
        return "20 or over";
    }
    return "under 30"
}

console.log(greaterOrEqualTo(30));


// comparison with the less than operator




function lessThan (result) {

     if (result < 20) {
        return "under 20";
    }
    if (result < 60) {
        return "under 60";
    }
   return "over 60";
}

console.log(lessThan(13));






// comparison with the less than or equal to operator

function lessOrEqual (val){
     if (val <= 6)
    return "smaller than 6 or equal";

    if (val <= 12)
    return "smaller than 12 or equal";

    return "greater than 12";
}
    console.log(lessOrEqual(2));


// comparison with the logical or operator   1:20m in class























































































































































































































































































































































































































































































































































































































































