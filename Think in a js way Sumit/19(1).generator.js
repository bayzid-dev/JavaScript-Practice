// instead of using Iterator/Symbol have to use generator
// generator is the highly uses types in javaScript and standard way writing code
// generator is also a iterator but it is a special type of iterator


//previous iterator class 

var array = [1,2];
var iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// generator function -> function* generator(){yield 1......}
// the generator func produce the value,
// yield produce the value   but   return stop the value


function* generator() {
    yield 10;
    yield 20;
    return "i'm finished"; //for return the func is stop now
    yield 30;
    yield 40;
  }
  
  const gen = generator(); // "Generator { }"
  
  console.log(gen.next().value); // 10
  console.log(gen.next().value); // 20
  console.log(gen.next().value); // i'm finished 
  console.log(gen.next().value); // undefined
  console.log(gen.next().value); // undefined



      //**** Syntaxes of generator functio    
      
    //   all the uses and its proper syntax





 // how many type a generator function can write

 /* 
function* generator(){.......};
           //or 
function * generator(){......};
           //or 
function *generator(){......};

 */



// as a generator method

/* 
const generator = function* (){};
 
*/


// can't support a arrow function

/* 
let generator = ()* => {};

 */



 // inside the class

/*
class myClass(){
    *myGenerator(){};
};

*/


// inside a object literal
/* 
var myObject = {
    *myGenerator(){}
}
 */



//  now make a object iterable though it's not a iterable but we'll make it.


