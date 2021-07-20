

// outer/global function means outside the function this fcn can call anywhere
function outer(){
    
    function inner(){   //this called inner, u have to declare value inside the outer/global func
        console.log("I'm a inner function.");
    }
    inner();

    console.log('I am outer function.');
};


outer();



function myFunction(a,b){

    function sum(){
        console.log(a+b);
    }
 

    function sum(){
        console.log(a - b);
    }
    
}
myFunction(30,20);