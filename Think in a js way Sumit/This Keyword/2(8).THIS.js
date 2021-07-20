
// 2. explicit binding

// call , apply & bind method method 


let about = function () {  // outside the main var
     console.log(this.name);
};

let nice = {
    name : 'bayZid',
    grade : 11, 
};

about.call(nice)  
// call মানে কোন OBJECT ER CONTEXT এ আমি call করতে চাচ্ছি সেটা


// 2nd practice of explicit binding

let mySelf = function ( b1 , b2 , b3) {
    console.log(`${this.name} is ${b1} ${b2} & ${b3} in his study`);
};

let bayzid = {
    name : 'sejan',
    age : 18,
};

b1 = 'handsome';
b2 = 'attentive';
b3 = 'brilliant';

let aboutSejan = [b1,b2,b3];

mySelf.apply(bayzid,aboutSejan); 


// The call() method takes arguments separately.
// The apply() method takes arguments as an array.



// BIND ()
//The bind() method returns a new function, when invoked, has its this sets to a specific value

let newFunc = function () {  // outside the main var
    console.log(this.name);
};

let myName = {
   name : 'bayZid this name is called by bind',
   grade : 11, 
};

var newStorage = newFunc.bind(myName);
// store the new function that the dif btwN bind & call 
newStorage();











// alt up/down arrow to change line up down 















































































