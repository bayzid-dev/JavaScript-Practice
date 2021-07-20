
/**
  The prototype is an object that is associated with every functions and objects 
  by default in JavaScript, where function's prototype property is accessible and modifiable 
  and object's prototype property (aka attribute) is not visible.
  
Every function includes prototype object by default.

prototype হলো javascript er যেকোনো FUNCTION 
আমি লিখি না কেনো সেটার একটা PROPERTY
 যেটা OBJECT কে REFER করে

 every function is itself an object, remember that.

 */

function person (name , age ){
  this.name = name;
  this.age = age;
  this.hello = function(){
    console.log(`hello, ${this.name}`);
  }
}



var p1 = new person('sejan ahmed', 12)

p1.hello();


















// function person(name , age) {
//   this.name;
//   this.age;
//   // this.hello = function () {
//   //   console.log('hello, '+ this.name);
//   // }
// }

// var p1 = new person('SejAn AhMed BayZid',18)
// var p2 = new person('NiSHad AhMed JidAn',24)

// console.log(p1);
// console.log(p2);

































