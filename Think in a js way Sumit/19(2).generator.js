// here the example of generator


let object = {
    value1 : 1,
    value2 : 2,
    value3 : 3,
    value4 : 4,

};


// console.log({...object});  evabe access kora jai but eta iterator er spread noi

// console.log({...object}); 2nd bracket use korLe buJHA JAbe iterable kiNa
// console.log(Object.entries(object)); // converted object to an array


// using iterable to make it an object
Object.prototype[Symbol.iterator]= function(){
    const entries = Object.entries(this); // to make that array
    let count = entries.length;
    let index = 0;
    return{
        next(){
            if(count > 0){
                let result = {done : false , value : entries[index][1]};
                count--;
                index++;
                return result;
            }
            return {done: true};
        }
    }
}

// checking output

for(let value of object){
    console.log(value);
}

console.log(...object);


// using generator to make it an object
/* 
let object = {
    value1 : 1,
    value2 : 2,
    value3 : 3,
    value4 : 4,

};


function* generator(){
    const entries = Object.entries(obj);
    for(let element of entries){
          yield  element[1];
    }
}

const iterator = generator();

console.log(iterator.next());

 */



// iterable function example convert with generator

function* range(start , end , step){
    let current = start;

    while(current < end){
        yield current;
        current += step;
    }
}

var iterator = range( 1 , 320 , 2);

console.log(...range( 1 , 320 , 2));

console.log(iterator.next());



//  generator control flow

function* generator(a, b){
    let k = yield a + b;
    let m = yield a + b + k;

    yield a + b + k + m;

};

var gen = generator(2 , 4);

console.log(gen.next());
console.log(gen.next(10));
console.log(gen.next(4));











