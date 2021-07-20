

//  Important Method an Object
 
 // object's property is called =>  key : value
var myObj = {
    name : ' JavaScript',
    founder : ' Brendan Eich',
    estd :  1995 ,
    ranking : 1,
}

// if i work only keys how can i get it.

var keys = Object.keys(myObj);
console.log(keys);

// if if work with just value
var value = Object.values(myObj);
console.log(value);

// if i work two element -> keys and value
var entries = Object.entries(myObj);
console.log(entries); // it convert the object to an array and give me two element
