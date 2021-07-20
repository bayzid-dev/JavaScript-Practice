
// the difference between var and let keywords  2:35m this class



// compare scopes of the var and let keywords 2:39m this class



// mutate an array declare with const  2:43m this class

const s = [2, 4 , 6];

function editPlace() {
    s[0] = 8;  
    s[1] = 6;  // const value can change by using bracket notation
    s[2] = 4;
}
 editPlace();
console.log(s);


// prevent object mutation  2:44m this class









// use arrow function to write concise anonymous functions        2:46m this class
 
var magic = function(){
    return new Date()           //this function is called anonymous function 
}
// but u can convert it arrow function which is very short writing/to write

// const magic = () => new Date() ;  // => shortcut of function and return











// write arrow function with the parameters           2:48m this class






// write higher order arrow functions   2:54m this class








//use the spread operator to evaluate arrays in-place          2:56m








//use the destructuring assignment to assign variable to an object    2:58m









///use the destructuring assignment to assign variable from an arrays  3:2m this class










//use the destructuring assignment with the rest operator 
















/////// create strings using template literal

var person = {
    name : "zulkar naim jidan",
    age : 25,
}

const greeting = `Hello, My name is ${person.name} 
    I'm ${person.age} years old.`;    //showing var property must use the dollar($) sign
    console.log(greeting);




// write concise object literal declaration using simple fields

/*/
const createPerson = ( name , age , gender) => ( {name , age , gender} );
console.log(createPerson("bayzid" , 17 , male));

/*/






//write concise declarative function     3:10m this class








// use getters and setters to control to an object   3:16m this class













/// understand the differences between import and require

/*
import { literal } from "./String_function";
const cap= literal("hello");
console.log(cap);

*** /



//use export to reuse a code block


































