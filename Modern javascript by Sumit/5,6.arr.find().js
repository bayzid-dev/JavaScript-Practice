
// array.prototype.find()

var ourArray = [1 ,2 , 3 , 4, 5];

// function er parameter e currentValue, currentIndex & main Array takeO se pai
 var result = ourArray.find(function(currentValue) {
     return currentValue > 3; // এই এর‍্যা থেকে আমাকে প্রথম তিন টা ভ্যালো এর পরের গুলু দাও।তখন e find method
 })

console.log(result); // it does not change the main array



// it's also receive "this";

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }

    test(){
        console.log('Hello');
    }
    exampleFunction(){
        let myArray = [1, 2, 3];
        myArray.find(function(){
            this.test();
        }, this)

    };  

};

let student = new Student('SEJan AhmED BayZid' , 18);

// exampleFunction(); as it's o object property, have to use object name.functionName to access the property
student.exampleFunction();




// find Index in array method 
// find & find index are similar

var anArray = [ 1, 2, 3, 4, 5, 6, 7, 8];

var indexResult = anArray.findIndex(function(currentIndex){
    return currentIndex > 4; // 3 ke output dicChe Index will count from 0
}); // etaO this accept koRe

console.log(indexResult);

// find index value na pele output -1 dei