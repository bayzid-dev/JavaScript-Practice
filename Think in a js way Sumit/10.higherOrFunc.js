
/// Higher Order Function

/***
 *  simple definition of functional js -> যেখানে আমরা একটা Function এর ভিতর আরেকটা function পেরামিটার হিসাবে অথবা return এর ভ্যালু হিসাবে pass করতে পারি তাই।
 *  oop language a আমরা সবকিছুকে object or class আকারে চিন্তা করি।
 *  কিন্তু js e আমরা সবকিছুকে function er আকারে চিন্তা করি। 
 * 
 * functional programming lang এ function e ekTa object
 * 
 * 
 * higher order function means ->একটা function অন্য একটা function ke parameter or return hiSabE neBe or duiTai ekSatHe accept korTe pare!!!
***/

// Higher Order function look like that

function higherOrderFunc(){
    return function js(){
        console.log('This is the example of higher order function');        
    } 
}
    
higherOrderFunc()();  


   
               // উদাহারণ -> ১ 
  

// 1st (without higher order function).  

var number = [1 ,2 ,3]; 

var print = [];

for(let i = 0; i < number.length ; i++){
    print.push(number[i] * 2)
}

console.log(print);


//  2nd  (with Higher Order Function) 

var numbers = [1 , 2 , 3];

// var result = numbers.map(function(AboveNumber){
//     return   AboveNumber * 2;
// });
var result = numbers.map((AboveNumber) => AboveNumber * 2);
   


console.log(result);
  

                //  উদাহারণ -> ২ 
                      

var players = [
    {
        name : 'SakIb',
        avg : 43.7
    },
    {
        name : 'MashRafI',
        avg : 39.6
    },
    {
        name : 'TamIm',
        avg : 45.9
    },
    {
        name : 'MahMuDUllAh',
        avg : 38.2
    }
];


// Without Higher Order Function

var playerWithAvgRun = [];

for(let i = 0; i < players.length ; i++){
    if (players[i].avg >= 40){
        playerWithAvgRun.push(players[i]);
    }
}
console.log(playerWithAvgRun);


// With Higher Order Function

var playerWithAvgRun = players.filter((avgRun) => avgRun.avg >= 40);
console.log(playerWithAvgRun);


              //  উদাহারণ -> ৩
              
            //   (make function creation)
                      


 






































































































