
    //   ARRAY.PROTOTYPE.MAP

    var number = [1 , 2, 3, 4 ,5 ,6];

    var result = number.map((digit)=> {
        return 2 * digit; // iterate all te digit by map
    });

    console.log(number);
    console.log(result);


    // 2nd practice

    var digit  = [10, 20, 30];

    var secondResult = digit.map((number) => {
        return number - 5;
    });

    console.log(secondResult);

    console.log();


    var sonKha = []