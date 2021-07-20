/****    this is all about arrays     *******/

//store multiple values with arrays
var ourArrays = ["sejan", 17];
console.log(ourArrays);

//nested arrays -if double element store in one arrays is called nested array
var ourArrays = [["I am sejan ahmed", 17],["this is nayem", 18]];
console.log(ourArrays);



// access/(enter) array data with index // checking the value number
var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData);



var myArr = [70,80,90];
var myData = myArr[1];
console.log(myData);

// modify data with indexes //how to change a value of array

var ourAry = [70,80,90];
ourAry[2] = 15;
console.log(ourAry);

var myAry = [100,200,300];
myAry [1] = 700;
console.log(myAry);

// access multi-dimensional arrays with indexes

var ourArray = [[1,2,3], [2,3,4], [1000,30000,700],[[7,8,9],[4,5,6],[7,8,9]] ]
var myData = ourArray[2][1];
console.log(myData);





/************
* push() to add any value inside the array
* unshift() to add some value in first    
              // push add the value first  - unshift add the value last 
             // push and unshift they two are same

* shift() to remove the first item of array
* pop() to remove last item of array

**********/

// multiple arrays with push()
var myAry = ["you are", "so "];
 myAry.push(["lucky person"]);      //you can do that by (+=) this operator
 
 console.log(myAry);
 
// += operator

 var hisArray = [ 'bangladesh is very',];
 hisArray += [" beautiful country."];
 console.log(hisArray);

 // manipulate arrays with pop() 

 var ourArray = [["bayzid",17],["sejan",20],["jesan",23]];
 var removeOurArray = ourArray.pop();  // amra jokhon kichu add/result korbo again var use kore = er por 1st value dite hobe

 console.log(ourArray);


 var myAry = [["bayzid"], [ "labib"], ["sanim"]];
 var removeMyArray = myAry.pop();
 console.log(myAry);




 // manipulate arrays with shift()
 var ourArray = [["kamal",15],["nayem",20],["shihan",23]];
 var removeOurArray = ourArray.shift(); 

 console.log(ourArray);




 // manipulate arrays with unshift()
 var ourArray = [["hafan",21],["lijan",29]];
 var removeOurArray = ourArray.unshift("omana",28);  
 console.log(ourArray);

 var ourArray = [["jamal",21],["kaMal",29]];
 var removeOurArray = ourArray.unshift("naHid",28);  
 console.log(ourArray);

 // shopping list

 var ourArray = [["cereal",3],["milk",4],["juice",2],["bananas",20],["eggs",12]]

 console.log(ourArray);