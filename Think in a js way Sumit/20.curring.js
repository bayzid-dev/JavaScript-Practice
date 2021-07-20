/// Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in otherlanguages as well.

// normal function with arguments 

function notCurry(a, b , c){
    return a * b * c;
};

console.log(notCurry(2 , 3 , 4));



// currying function

function curring(x){
    return function(y){
        return function(z){
            return x * y * z;
        }
    }
};

// var step1 = curring(2);
// var step2 = step1(3);
// var step3 = step2(4);

// console.log(step3);


console.log(curring(2)(3)(4));



// customer parches stuff and discount schedule


function customerDisc(discount){
    return (price) => { 
        price - price * discount;
    };
};

var tenPercentDisc = customerDisc(.1);
var customer1 = tenPercentDisc(800);
var customer2 = tenPercentDisc(900);
var customer2 = tenPercentDisc(800);


console.log(customer1);




