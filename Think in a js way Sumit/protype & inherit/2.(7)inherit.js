
// PROTOTYPE in javascript 
// learn with suMit prototype and inheritance video
// when write a constructor the name 1st ltr should upper
// to see output use the browser
/**
     THIS PATTERN IS WRITTEN IN CLASSES.JS 
    THAT IS THE REAL TYPE OF WRITING JS
    BUT IN PROTOTYPE U SHOULD UNDERSTAND BEFORE CLASS WRITING 
*/

/**
 *       THE DEFINITION OF PROTOTYPE
 * 
 The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

 Every function includes prototype object by default.

prototype হলো javascript er যেকোনো FUNCTION 
আমি লিখি না কেনো সেটার একটা PROPERTY
 যেটা OBJECT কে REFER করে

 every function is itself an object, remember that.
 */




// bad way to crate an object/constructor function

function person (name,age){
    this.name = name;
    this.age = age;
    this.eat = function (){
        console.log(`${this.name} is eating rice.`);
    };
  
}         

const sakib = new person("sakib",18);
sakib.eat()



// proper way to create an object/constructor function

function Person (name , age){
    this.name = name ;
    this.age = age ;
 
    // this.playing = function (){   
    //     console.log(`${this.name} is plying cricket`);
    // }  //inside the browser
    
}
 Person.prototype = {
    playing : function () {
        console.log(`${this.name} is plying cricket`);
    }
}


const bayzid = new Person('bayzid', 18);
console.log(bayzid);
const sejan = new Person('sejan', 20);
console.log(sejan);

// sejan.playing(); output = bayzid is plying cricket
// bayzid.playing();  = sejan is plying cricket

// when i called the function inside the it's taking many space in this object but when write in the proto then it has been separate and take sufficient space so i use the prototype methods if u don't understand see suMit video 5m : 5 s






/// inheritance 22m in sumIt tutorial

//parent
function Person (name , age){
    this.name = name ;
    this.age = age ;
  
}
//sub-parent
function Cricketer(name, age, type , country){
    person.call(this); // inheritance/connection with parent(person)
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

 Person.prototype = {
    walk : function () {
        console.log(`${this.name} is walking on the street`);
  },
};

 Cricketer.prototype = Object.create(person.prototype);
 Cricketer.prototype.constructor = Cricketer;

 const mashrafi = new Person('mashrafi', 19, 'ALL Rounder' , 'bangladesh');

 

 console.log(mashrafi.type);
        
                   
                           


                            























// var a = {
//     color : 'blue'
// }

// var c = Object.create(a);













































































































