
// SPREAD OPERATOR IN JAVASCRIPT



var numbers = [1 , 2 , 3, 4];

 var newNumbers = [...numbers,5,6,7];

 console.log(newNumbers);



 // when i want to work with a copy something


 var number = [10 , 20 , 30];

 var a = [...number]; // exact copy number / eta change hoiNi

  number.push(1000,2000);

  console.log(a);
 console.log(number); 


 // spread operator is very important in advance work




 var digit = [2, 4, 6, 8];
 var newDigit = [ 3, 5 ,7, 9];

var anotherDigit = [...digit, ...newDigit]; // eta concat diYeo koRa jaBe


console.log(anotherDigit);


// OBJECT ER KHEttREO ETA EvaBEI KAJ KOrE
