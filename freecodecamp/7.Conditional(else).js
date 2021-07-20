
//********** THIS IS ALL ABOUT ELSE STATEMENT */

//// function with else if statement
/****** shift + Alt + A ****/


function returnFValue (val) {
    if (val > 50) {
        return "value is greater than 50";
    }
    else if (val < 20) {
        return "the value is smaller than 20";
    }
    else {
        return "between 50 and 20";
    }
} 

console.log(returnFValue(1000));

//showing the ans click the >
function functionValue (math) {
   if (math > 100) {
       return 'This is huge number';
   }
   else if (math < 50) {
       return 'This is middle number';
   }
   else {
       return 'Between 100 and 50';
   }
}

 console.log(functionValue(20))


// logical order in if else statement  // chuto maan agea than boro man nahole result show korbe na

function returnLogicalValue (val) {       // 1:20m
    if (val < 5) {
        return "less than 5";
    }
    else if (val < 10) {
        return "less than 10";
    }
    else {
        return "greater than 10 equal";
    }
} 

console.log(returnLogicalValue(2));




// chaining if else statement 


function testNumber (num) {
    if (num < 5) {
        return "tiny";
    }
    else if (num < 10) {
        return "small";
    }
    else if (num < 15) {
        return "medium";
    }
    else if (num < 20) {
        return "large";
    }
    else {
        return "huge";
    }

}
console.log(testNumber(50));


function costOfCloth(cost) {
    if ( cost < 200) {
        return 'this price is eligible for everyone.';
    }
    else if (cost < 500) {
        return "this price is in middle and cheaper.";
    }
    else if ( cost < 1000) {
        return "this price isn't eligible for every person." ;
    }
    else {
        return "this is huge price & not for poor person.";
    }
}
console.log(costOfCloth(12000));


// golf gold           1:28m I don't understand that











/*
 else if (val === 7){
    answer = "this is an ans"
}
instead of 
case 7:
    ans = "this is an ans";
    break;

 */

// switch statement  // instead of using else if statement, u can use switch statement
// inside the switch, break is more important to find out the answer
 // return answer; have to use to find the ans.

function caseInSwitch (val) {
    var answer = "";    
    switch(val) {
        case 1: 
      answer = "alpha";
      break;
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
     case 4:
         answer = "delta";
         break;

    }
    return answer;
    

}

console.log(caseInSwitch(2));



// default option in switch statements



function swchStatement (ans) {
    var answer = "";
    switch(ans) {
        case "a": 
      answer = "apple";
      break;
    case "b":
        answer = "orange";
        break;    
    case "c":
        answer = "mango";
        break;
         default:
         answer = "stuff";
        break;
    }
    return answer;
    

}

console.log(swchStatement(2));



// multiple identical option in switch statement

function checkNumber (val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer ="low";
            break;
        case 4:
        case 5:
        case 6:
            answer ="mid";
            break;
        case 6:
        case 7:
        case 8:
            answer ="high";
            break;
    }
    return answer;
} 
console.log(checkNumber(2));





