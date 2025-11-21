// Control Statements

    // Conditional Statements

// 1. if conditions

// Deciding to execute a code block on the basis of a condition.
// syntax : 
        // if (condition) {
        //     // code block
        // }
    // let hasLicense = true;

    // if (hasLicense){
    //     console.log("Please drive carefully!");
    //     console.log("Be patient...");
    // }

    // // if - else
    //     hasLicense = false;
    // if (hasLicense){
    //     console.log("Please drive carefully!");
    //     console.log("Be patient...");
    // } else {
    //     console.log("You should really try to get a driver's license...");
    // }

// Do the same example with ternary, if else and switch statement -> take user input and do

// Let's take a menu selection as example.

/*
Options are available in a menu for a user to select.
1. Login
2. Register
3. Exit
*/

// let user_input = parseInt(prompt(`Enter choice : 
//         1. Login
//         2. Register
//         3. Exit`));

// Based on the given input, a message must be sent to the user as an alert.

// method 1
// ternary operator

// let message;

    // message = user_input == 1 ? 
    //             "Logging in..." :
    //             user_input == 2 ?
    //                 "Registering..." :
    //                 user_input == 3 ?
    //                     "Exiting..." : 
    //                         "Please check your input!!!";
    // alert(message);

    // if(user_input == 1)
    //     {
    //         message = "Logging in...";
    //     } 
    //     else if (user_input == 2)
    //     {
    //         message = "Registering...";
    //     } 
    //     else if (user_input == 3) 
    //     {
    //         message = "Exiting...";
    //     } 
    //     else 
    //     {
    //         message = "Please check your input!!!";
    //     }

    // alert(message);

        // console.log(typeof user_input);
        // switch (user_input){
        //     case 1:
        //         message = "Logging in...";
        //         break;
        //     case 2:
        //         message = "Registering...";
        //         break;
        //     case 3:
        //         message = "Exiting";
        //         break;
        //     default:
        //         message = "Please check your input!!!";
        // }
        // alert(message);
// ----

    // let number = 8;

    // switch (number){
    //     case 10:
    //         console.log(10);
    //     case 9:
    //         console.log(9);
    //     case 8:
    //         console.log(8);
    //     case 7:
    //         console.log(7);
    //     case 6:
    //         console.log(6);
    //     case 5:
    //         console.log(5);
    //     case 4:
    //         console.log(4);
    //     case 3:
    //         console.log(3);
    //     case 2:
    //         console.log(2);
    //     case 1:
    //         console.log(1);
    //         break;
    //     default:
    //         console.log("Wrong input!!!")
    // }

    // Loops

// 1. For loop <-> 2. While loop
    // i
        // let i;
        // for (i = 0; i <= 10; i++){
        //     console.log(i);
        // }
    // console.log(i);

    // Example : star pattern
    // let n = 5;
    // for (let stars = 1; stars <= n; stars++){
    //     console.log(("  ".repeat(n - stars)+ ("* ".repeat(stars))));
    // }

    //     let n = 4;
    // for (let row = 1; row <= (n * 2) - 1; row++){
    //     if (row <= n){
    //         console.log(" ".repeat(n - row) + "* ".repeat(row));
    //     }
    //     else{
    //         console.log(" ".repeat(row - n) + "* ".repeat(n - (row - n)));
    //     }
    // }

//             let n = 4;
//     for (let row = 1; row <= (n * 2) - 1; row++){
//         row <= n ?
//             console.log(" ".repeat(n - row) + "* ".repeat(row)):
//             console.log(" ".repeat(row - n) + "* ".repeat(n - (row - n)));
//     }


// To learn further about loops, we need to learn about an iterable datatype
// which is used in JS. 


// Arrays - JS arrays are objects with numbered index. 
// Unlike usual arrays which are homogenous and fixed-length sequence of items,
// JS arrays are heterogenous, dynamic length, sequence of items.

    // let students = ['Ramya', 'Rahul','Joel']

    //     // // indexing
    //     // console.log(students[0]);

    //     // // negative indexing > not possible with [] notation
    //     // console.log(students.at(-1));

    // // Now let's iterate through all students of the array

    // for (let index = 0; index < students.length; index++){
    //     console.log(students[index]);
    // }

    // // 2. for (index in iterable)
    // for (let index in students){
    //     // here, in each iteration, the variable `index` 
    //     // carries the very next index of the iterable.
    //     console.log(students.at(index));
    // }

    // // 3. for (item of iterable)
    // for (let item of students){
    //     // here, in each iteration, the variable `item` is 
    //     // each item of the iterable in sequence.
    //     console.log(item);
    // }

    // // while loop

    // // syntax : 
    //     // while (condition){
    //     //     statement1;
    //     //     statement2;
    //     //     .
    //     //     .
    //     //     .
    //     // }

    // let index = 0;
    // while (index < students.length){
    //     console.log(students[index++]);
    // };

    // index = 0;
    // console.log(index);
    // do {
    //     console.log(students[index++])
    // }
    // while(index < students.length)

    
// Exception handling

let num1 = 'ten';
let num2 = 'two';

// console.log(num / num1);

try{
    // code block which has chance of throwing error
    console.log(num / num1);
}
catch(error) {
    // error handling code; only runs in the event of an error occuring
    console.error(`The error is : ${error}`);
}
finally{
    // this code block will run regardless; used for cleanup functionalities
    console.log("done...");
    // this block is optional
}

console.log("Hello");