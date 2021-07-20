
// SPLICE.PROTOTYPE.JS



var array = [1 , 2, 3, 4, 5];

var result = array.splice(1, 2 , 200, 300, 400, 500);

// it change the main array 
// first value kup dei, 2nd value koiTe value ami remove korTe cai list theKe seta , 3rd value gula main function e add hoi

console.log(array);

// very beautiful method

var numbers = [1 , 2, 3];

var result = numbers.splice(-1, 2 , 50, 60, 70);
console.log(numbers);
