/// HOW to code with maintain standard in js



// ১। Variable naming টা অবশ্যয় meaningful হতে হবে

// bad practice 
let nameSht = 'bayzid';
let clr = 'red';

// good practice 
let name = 'bayzid';
let color = 'red';


// ২। variable naming avoid unnecessary word

//bad practice
let nameValue;
let theProduct;

// good practice 
let name ;
let product;


/// ৩। এমন ভাবে variable এর নাম দিন যেনো Purpose মনে রাখা না লাগে


// ৪। unnecessary context add করার ও কোনো প্রয়োজন নাই যেমন ঃ-


// bad practice
 const product = {
    productId = '',
    productBrand = '',
    productName = '',
    productPrice = '',

 }

 // good practice

 const product = {
    Id = '',
    Brand = '',
    Name = '',
    Price = '',

 } // যেহেতো আমি product name দিয়েই object create করছি তাই অতিরিক্ত শব্দ দরকার নেই।


// / ৫। function এর নাম বড় ও বোধগম্য দেওয়ার চেষ্টা করুন

//bad practice                                                                                                                                         
                                                                                   

function email (){                                                                   
    //implementation                                                               
};                                                                     

//good practice

function sendEmailToReceiver (){
    //implementation 
};                                                        



// ৬। function-এ অনেক গুলা argument দেওয়া avoid করুন

//BAD
function name( time,date,name,user ) {
    // write the function with short of argument
};
 
// GOOD
function name( {time,date,name,user} ) {
    // write the function with short of argument
};



