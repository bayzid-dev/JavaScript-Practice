//** FIRST CLASS FUNCTION  BY HM NAyEM */


function sayName(name){
    return name;
};


// 1. A FUNCTION CAN BE STORE IN A VARIABLE   *passed

var hello = sayName;

// var fun = sayName('sejan');

// console.log(sayName);
// console.log(fun);

var anotherHello = hello;

console.log(anotherHello('sejan ahmed bayzid'));


// 2. A FUNCTION CAN BE STORE IN AN ARRAY     *passed

var arr = [1, 2 , 3 , anotherHello];

arr.push(sayName);
console.log(arr);



// 3. A FUNCTION CAN BE STORED AS A OBJECT FIELD OR PROPERTIES   *passed

var person = {
    name :'BayZid',
    age : 18,
    sayName : hello, // it's above 
}
console.log(person);




// 4. WE CAN CREATE FUNCTION AS NEEDED

// var sum = 10 + (function(){return 50})();
// sum;

// 5. WE CAN PASS FUNCTION AS AN ARGUMENTS

// 6. WE CAN RETURN FUNCTION FROM ANOTHER FUNCTION
























































































