
                /* this is all about object  */
// object is like a information box, where we can put the information of any kind of object/person
//the object of javascript has a property : "value";
   //                        name : "rose";
   // object value can have number,string or array or we can add any function
       /// typing a array don't need to wrap the property by double-quotation /* 
       // but in object property should wrapped by quotation mark 
// build javascript object 
 var myDog = {
    " name" : "dogy",
     "legs" : 4,
     "tails" : 2,
    "friends ":[],
 };
 console.log(myDog);



 //Accessing object properties with Dot Notation 

 var testObj = {
    " hat" : "ballcap",
     "shirt" : "jersey",
     "shoes" : "boots"
 };
//    var hatValue = testObj.hat;
//    var shirtValue = testObj.shirt;



 console.log(testObj);


 //Accessing object properties with Bracket notation   1:51m this class  ????????




 ////Accessing object properties with variable  1:53m this class ?????



 // updating object properties


 var myCat = {
    "name" : "WhiteCat",
    "color" : "white",
   " leg ": 4,
   " eye" : 2,
    "friend" : 2,

 };
     myCat.name = "happy WhiteCat";

console.log(myCat);


/// add new properties to an object 

// to add an properties, you can use dot notation or bracket notation 


 
var myCat = {
   
   "color" : "white",
  " leg" : 4,
  " eye" : 2,
   " friend ": 2,

};
   //  myCat.name =  "cuteCat"; //instead of -  
   myCat["name"] =" beautiful Cat";

console.log(myCat);


var myObject = {
  " name" : "jamal",
  " color ": "white",
   "profession" : "business",
}
myObject["father's name"] = "jaHir alaM";

console.log(myObject);

// delete properties from an object
var myFood = {
  " fruits" : "banana, apple , orange",
   "fish ": "pangas , fish",
  " vagitables" : "rice , egg , milk",

};
delete myFood.fish;
console.log(myFood);


// using object for lookups

// function phoneticLookup(val) {
//    var result="";

//    var lookupTest = {
//    Dhaka : "the capital of Bangladesh",
//    chitagong : "the large city",
//    brahmanbria : "famous one",

// };
// result = lookup[val];
// return result;

// }


// console.log(lookupTest());




// /// testing object for properties
// has own property method to find ans need to use "" mark
 var myObj = {
   "brand" : "remix song",
  " director" : "jem com" ,
   "founder" : "tah hil",
};

function checkObj(checkProp) {
   if (myObj.hasOwnProperty(checkProp)) {
      return myObj[checkProp];     
   }
   else {
        return "not found";
      }
}

console.log(checkObj("hello"));







 //******   you have to try another time to solve

// manipulating complex object


// var  myMusic = [
//    {
//    director = "beau carnes",
//    music = "emotional song",
//    title = "music brand",
//    release_year = "2020", // when we put 2 value in arrays name than we have to put under bracket 
//    formats : [
//       CD,
//       DVD,
//       INTERNET,
//       YOUTUBE CHANNEL ,
      
//    ]
// }
// ],

// {
//    director = "beau carnes",
//    music = "emotional song",
//    title = "music brand",
//    release_year = "2020", // when we put 2 value in arrays name than we have to put under bracket 
//    formats : [
//    CD,
//    DVD,
//    INTERNET,
//    YOUTUBE CHANNEL ,
// ]
// }
//    console.log(myMusic);





// accessing nested object        2:1m class 





// access nested arrays


// record collection     - coding challenge


































