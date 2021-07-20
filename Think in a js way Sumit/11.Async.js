// This is all about javascript async(callback,promises,)


function async(){
    console.log('this is 2nd');

    setTimeout(()=> {
        console.log('this is last item will start after 3 seconds');
    },3000)

    console.log('this is 3rd');

}

 console.log('this is first');

 async();
 console.log('this is 4th'); 




// 2nd practice 




// function customerOrder(){
//     console.log(`processing order for customer 1`);

//    setTimeout(()=>{
//        console.log('cooking completed');
//    }, 3000)

//    console.log('ordered processed for customer 1');
// } 

// console.log(`take order for customer customer 1 `);
// customerOrder();
// console.log('completed order for customer 1');



// 2nd example of above     ( CallBack function)

const takeOrder = function (customer,callback){
    console.log(`take order for ${customer} `);
    callback(customer);
}


const processedOrder = (customer,callback) => {
    console.log(`processing order for ${customer}`);

    setTimeout(()=>{
        console.log('cooking completed');
         console.log(`ordered processed for ${customer}`);
         callback(customer);
    }, 3000)

    } 
    
    const completeOrder = (customer) =>{
        console.log(`completed order for ${customer}`);
    }

takeOrder('customer 1',(customer)=> {
    processedOrder(customer,(customer)=> {
        completeOrder(customer);
    })
})

// to make it readable we can use promise instead callback


/***
  promise looks like :-
  
   const promise = new Promise((resolve, reject) => |{
       // put stuff
  });
 its accept two parameter resolve and reject


 * While a Promise object is "pending" (working), the result is undefined.

 * When a Promise object is "fulfilled", the result is a value.

 * When a Promise object is "rejected", the result is an error object.
  
 *****/

 // promise example

 let promise = new Promise((resolve , reject) => {
    let sum = 2 + 3;

    if( sum == 5){
        resolve ('success');
    }
    else{
        reject('failed')
    }
 })

promise.then((message) => {
    console.log('this is in the than ' + message);
})

promise.catch((message) => {
    console.log('this is in the catch' + message);
})



























