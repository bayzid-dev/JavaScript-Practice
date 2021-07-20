
// datatype mainly 8 prokar :-( Number , STRING , BOOLEAN ,  
//                                undefined , null 
//                                   Array , Object , Function ARE ALSO datatype, BUT THESE ARE OBJECT TYPE.                 )
  
//     String:- "" or ''- cottation er vitore jeta wrap koranu hoi..,..,.,.,.   
//     BOOLEAN:- true and false)


// undefined mane ami kuno kichu defined ee kori ni 
//  ar null mane ami var ta likesi but ami object ta ki sothik jani na future a resign korbo
 







var name ='sejan ahmed bayzid';  //string)
var age= 22;    //number
var skills=[ 'java', 'javascript', 'react.js'];  //array


 console.log(name);

 console.log(typeof skills);
 console.log(typeof age);
 console.log(typeof name);

 var something;
 var anything=null;


// Boolean

 console.log(undefined==null); true
 console.log(undefined===null);

console.log(100==='100');

// if else

 var age=10;  //  for example eta amar boyosh
 
 // for example, eta vut deaoar upojukto time
 if (age >=18) {
    console.log('yes, i am eligible');
 } else {
     console.log('no');
 }


//  for loop
var name='bayzid';
 for(i=0; i<10; i++){
     console.log('hello,' +name);
 }

// array
var names=[];
names[0]='arabic';
names[1]='english';
names[2]='bangla';
console.log(names);

for ( i=0; i<names.length; i++){
    console.log('language name,'+ names[i].toUpperCase());
}
// function declaration.........
 function add( a, b ) {
    return a+b;
}
 console.log(add(10,30));
 
// function expression......

var add=function( a,b ) {
    return a+b;
}
var additional=add;

console.log(add(120,30));
  console.log(additional(30,10));
