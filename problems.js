    // -------problem 01-----------------
    // solve the provlem with javascript to find the maximum between two numbers

    let number = max ( 111, 3400);

    console.log(number);

    function max(number1, number2) {
        if   (number1 > number2)
        return number1;
        return number2;
    }
    


    //----------problem 02------------------
    // solve the problem with Javascript  to find a maximum between three numbers

    var a = 10;
    var b = 20;
    var c = 2;

    var x = Math.max(a,b,c);
    console.log (`${a}, ${b}, ${c} : largest = ${x}`);

    



    //---------------problem 03----------------------
    // solve the problem with Javascript  to check whether a number is negative, positive or zero

    let checknumber = (-2) 

    if ( checknumber > 0){
        console.log("this is a positive value");
    } else if ( checknumber < 0 ) {
        console.log("this is a negative value");
    } else {
        console.log("this number is zero")
    }

    // } else (checknumber = 0) {  {{ei taw kaje lagte pare,}}
    //     "this number is zero"
    // }
    




    //-----------problem 04------------------
    // solve the provlem with javascript to check whether a number is divisible by 10 or not

    var divisionNumber = 18; 

    if(divisionNumber % 10 == 0) {
        console.log("the number is divisable by 10")
    }

    if(divisionNumber % 10 !== 0) {
        console.log("the number is not divisable by 10")
    }


    //------------------problem 05--------------
    //solve the problem with Javascript to check whether a number is even or odd.

     var findNumber = 32;

     if(findNumber % 2 == 0) {
        console.log("this number is even")
     }

     if(findNumber % 2 !== 0) {
        console.log("this number is odd")
     }

    // problem 06
    //solve the problem with Javascript to check whether a character is in the alphabet or not.    [solve hoyni, baki ase]

    function alphanumeric(inputtxt)
    { 
    var letters = /^[0-9a-zA-Z]+$/;
    if(inputtxt.value.match(letters)){
        console.log("this is a letter")
    }else {
        console.log("this is not an Alphabet")
    }
    }









    

    //------------------problem 07----------------
    // solve the provlem with javascript to check weather the temperature hot, normal or cold

    //temp > 30  == hot 
    //temp < 30  == normal 
    //temp <= 25  == cold 


    var temp = 26;

    if ( temp > 30) {
        console.log("the weather is hot");
    } else if (temp <=25) {
        console.log ("the weather is cold");
    } else {
        console.log ("the weather is normal");
    }


    // // -------------problem 08----------------

    let math = 90;
    let english = 65;
    let science = 85;

    let totalMarks = math + english + science;

    console.log(totalMarks);

    if (totalMarks >= 270) {
        console.log("You Got A+");
    } else if(totalMarks >= 250) {
        console.log("You Got B+");
    } else if(totalMarks >= 230) {
        console.log("You Got C");
    } else  {
        console.log("You Are FAIL");
    }


    // ----------------problem 09-------------------------
    // find a random number between 1 and 10

    let random = Math.floor(Math.random() * 10 + 1);
    console.log(random)


    // ---------------problem 10--------------
    // Create 3 meaningful arrays and  3 objects

    const bike = {
        brand: "kawasaki",
        model: "2019",
        buildIn: "Japan",
    }
    const fruit = {
        fruitName: "apple",
        growthYear: "april",
        import: "africa",
    }
    const bollywood = {
        heroes: "jottogula",
        heroine: "tawOnekGula",
        movies: "onkeMovieKoreVai",
    }

    // console.log(bike, fruit, bollywood); 

    console.log(bike.brand, fruit, bollywood.movies); 