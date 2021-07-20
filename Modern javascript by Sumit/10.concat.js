// ARRAY.PROTOTYPE.CONCAT

var array1 = [1 , 2, 3, 4 ,5];
var array2 = [6 , 7, 8, 9 ,10];

var concatenating = array1.concat(array2);

console.log(concatenating);

console.log(array1); // it doesn't change the main array


// it's connect the two value




var myName = 'SeJan';
var antherName = ' ahmed BayZid ';


var concatenate = myName.concat(antherName);
console.log(concatenate);

// if there are multiple array when how can i concat



var numbers = [ 1, 2, 3 ,4, 5,]
var numbers1 = [ 1, 2, 3 ,4, 5,]
var numbers2 = [ 1, 2, 3 ,4, 5,]
var numbers3 = [ 1, 2, 3 ,4, 5,]
var numbers4 = [ 1, 2, 3 ,4, 5,]

var result = numbers.concat(numbers1, numbers2, numbers3, numbers4);

console.log(result);