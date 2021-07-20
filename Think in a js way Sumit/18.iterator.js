// konO EKta object jeKhANE Symbol.iterator or iterator achE etaI iterable ortHat jake iterate kora jai

// ar jake diYe iterate kora hoi tai iterator
// we don't have to use iterator in program we can use the generator function instead of it
// ar proti ta element jevabe Access kore sei rule tai iteration

/*
    Different Kinds of Loops
    JavaScript supports different kinds of loops:

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true
 
*/



// normal for loop
// [for (initial , condition , step){....}] 


let array = [ 'sejan' , 'ahmed' , 'bayzid' ,];


for( i = 0; i < array.length ; i++ ){
    console.log(array);
}


// in object

let myObj = {
    name : 'sejan', 
    title : 'ahmed',
    nickName : 'Bayzid',
}

let entries = Object.entries(myObj); // object er vitor soraSori iterate koRa jai na tai Object.entries use korTe hoi

for( i = 0; i<entries.length ; i++){
    console.log(entries);
}


// for of - built in for loop

let myArray = [ 'sejan' , 'ahmed' , 'bayzid' ,];

for(let element of myArray){
    console.log(element);
}


// iterator use 



let anotherArray = [ 'sejan' , 'ahmed' ];

let iterator = anotherArray[Symbol.iterator]();
console.log(iterator.next()); // EKtA EKtA KORe value deKha jai iterator.next() use korAr maDdHome
console.log(iterator.next()); // pause diye diye value ana jai fole onek fruitful ei method ta.
console.log(iterator.next());

// spread operator also work to iterable 


console.log(...'fggdf');


// Our OWN CUSTOM ITERABLE AND ITERATOR MAKE BY ME

function range(start, end , step){
    let current = start;
   return {
       [Symbol.iterator]: function(){
           return{
               next(){
                   let result;
                   if (current < end){
                       result = {
                           done : false ,
                           value : current,
                       };
                       current += step;
                       return result;
                   }
                   return {
                       done : true,
                   }
               }
             }
       }
   }
}

console.log([...range(1 , 300, 2)]);

// 2nd practice
/* 
function range(start , end , step ){
    let current = start;
    return {
        [Symbol.iterator] : function(){
           return{
               next(){
                   let result;
                   if( current < end ){
                    result = {
                        done : false, 
                        value : current,
                    };
                    current += step;
                    return result;
                   }
                   return {
                       done : true,
                   }
               }
           }
        }
    }
}
console.log(...range(1 , 20 ,2)); */