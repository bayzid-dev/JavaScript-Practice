
        // For loop, for in , for of
        
        
// for(initialization ; condition checking ; increment/decrement)


for(let i = 1 ; i <= 5 ; i++ ){
    console.log(i);
};

// 2nd type

var i = 0;

for ( ; ;i++){
    if(i <= 5){
        console.log(i);
    } 
    else {
        break;
    }
};


                // FOR IN  


// its used to iterate the object property

var object = {
    name : 'JavaScript',
    estd : 1995,
    founder : 'Brendan Eich',
};


for(property in object){
    console.log(property);
}


                    //  FOR OF

                    // FOR OF -> OBJECT, STRING , ARRAY OR ANY KIND OF ITERABLE OBJECT IT'S USED


  var myArray = [ 1, 2, 3, 4, 5];
  
  for (element of myArray){
      console.log(element);
  }

//   STRING 

var myString = 'SeJan AhMed BayZid';

for(element of myString){
    console.log(element); // it give me all the element of my String
}

