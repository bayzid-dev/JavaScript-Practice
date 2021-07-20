
           // ARRAY.PROTOTYPE.REDUCE

    var myArray = [ 1, 2, 3, 4, 5, 6, 7];

    var result = myArray.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    });


    console.log(result);


// the most important topic of array method 

// এটা parameter হিসেবে previousValue, currentValue , currentIndex , array কে receive koRe
// এবং মেইন আর‍্যা কে পরিবর্তন করে না। 


