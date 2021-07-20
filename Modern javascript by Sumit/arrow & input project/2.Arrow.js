/****  FAT ARROW FUNCTION ****/

/**
 
function name () {
    return 100;
}
console.log(name());

*/


let name = () => 35;
console.log(name());

//converted form of arrow function

let math = () => 30;
console.log(math());

// if there are two parameters

let addition = (a , b) => a + b ;

console.log(addition(30 , 50))

//if there is a console inside the function then-->

let digit = () => console.log(50);

digit();




// THIS CONFUSION IN ARROW FUNCTION and easy to solve problem 


let javascript = {
    name : 'javascript',
    libraries : ['React' , 'Angular' , 'Vue'],
     
    printLibraries : function(){
       console.log(this);
        this.libraries.forEach((a) => console.log(` ${this.name} loves ${a} `))
    }
};


javascript.printLibraries();























































































































