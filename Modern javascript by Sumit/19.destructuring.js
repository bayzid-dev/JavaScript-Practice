  /// Destructuring


const user = {
  id : 123, 
  name : 'kaRim MuLLah',
  age : 34,
};


//* এখান থেকে আমি name property টাকে বের করে নিয়ে আসতে চাই যাতে এটা আবার আমি অন্য আরেক টা জায়গায় ইউজ করতে পারি।
// old way

// var copyName = user["name"]; 
// console.log(name)


// es6 by destructuring
const {name : title} = user;   //দুই পাশে object thaKte hobE / Name take jodi ami onno kono name diye assign korte cai tahole just name er por : diye right side e tar nam ta dibo.
console.log(title);






// if there is a nested array, then how can i solve it.  okay

const userDetails = {
  id : 123, 
  name : 'kaRim MuLLah',
  age : 34,
  education : {
    degree : 'Hons Graduate',
  }
};

const {education : {degree}} = userDetails;

console.log(degree);





/// ARRAY DESTRUCTURING

var arrayNumber = [1, 2, 3, 4, 5, 6];

var [,a,,,b] = arrayNumber;

// console.log(a, b); 1 2

console.log(a,b);



/// nested array er khettre

var newAry = [1,2,[30, 40, 50], 3, 4, 5];

var [,,[a,,b]]= newAry; // how beautiful, alhamdulliah
console.log(a,b);