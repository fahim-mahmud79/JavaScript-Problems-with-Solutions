    // ------------problem 18------------
    // splice = adding new items to an array
    // slice = removing items from an Array
    // splice and a given array - remove two items and adding two new elements

    let cars = ["audi", "farrari", "marcedes", "toyota", "volvo"];

    let splice = cars.splice(2, 0, "RollsRoyes", "Tesla")
    console.log(cars);

    let players = ["tamim", "shakib", "riad", "rubel"];

    let slice = players.slice(2);
    console.log(slice);




    //----------------problem 19-------------
    //Reverse and sort an array where arr = [2,45,4,55,12,42,34,78]

    let newNumbers = [2,45,4,55,12,42,34,78];

    console.log(newNumbers.sort(function(x, y){return x - y}));
    // console.log(newNumbers.reverse(function(x, y){return x - y}));  //comment-out this one to see the answers for Reverse Array

 


    //----------------problem 20-------------
    //Create an object with car and add two function in there (called methods as well) and print out the result calling two functions using this keyword as well



    //----------------problem 21-------------
    //Reverse a given string. Where, - let text = “I love coding” - after reverse a string output will be - ‘gnidoc evol i’

    const text = "I love coding";

    let newText = "";
    for(let i = text.length - 1; i >= 0; i--) {
        newText += text[i];
    }

    console.log(newText);



    //----------------problem 22-------------
    //Create an array with list of items. Iterate the array to view the list of the items in the console using for loop. 

    let managers = ["karim", "rahim", "abdal", "rasel", "rajon", "charles", "Fahim"];

    for (let i=0; i <= managers.length; i++) {
        console.log(managers[i]);
    }



