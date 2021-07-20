
    //ES6 REST OPERATOR IN JAVASCRIPT


/*  
WHEN we write a(...)operator in the function's parameter
then it'll be a rest operator  
*/

    function naem (a, b){
        console.log(a, b);
    };

   naem(5, 6 ) //OneK gulA arguments set koRbo then problem face koRte hoBe.



// with rest operator/oneK gula argument thaKle

function restOperator(...valueOfArgument){
    console.log(valueOfArgument);
};

restOperator(1, 2, 3, 4, 5, 6, 7, 8, 9)


// abaR

function rstOperator(a, ...arg){
    console.log(a);
    console.log(arg);
};

rstOperator(20, 1 ,2 ,3 ,4 , 5);


// function rstOperator(...arg , a); REST AGEA DILe ABR KAJ KORbe na

// and ek barer besi use kora jai na ekta parameter e