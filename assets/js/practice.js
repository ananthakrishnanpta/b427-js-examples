// // // printing 1 to 10

// // for (let count = 1; count <= 10; count++){
// //     console.log(count);
// // }

// // //printing odd numbers

// // for (let count = 1; count <= 10; count++){
// //     if (count % 2 != 0)
// //     {
// //         console.log(count);
// //     }
// // }

// // // method 2
// // for (let count = 1; count <= 10; count +=2){
// //     console.log(count);
// // }

// // let count = 1;
// // while(count <= 10){
// //     console.log(count);
// //     count+=2;
// // }

// // sum of first n natural numbers
// let n = 10;
// let result = 0; // using additive identity
// for (let number = 1; number <= n; number++){
//     result += number;
// }
// console.log(`Sum of numbers from 1 to ${n} is ${result}.`)

// result = 0;
// // using while loop
// let count = 1;
// while(count <= 10){
//     result += count;
//     count++;
// }
// console.log(result);

// // factorial of n
// n = 10;
// result = 1; // choosing to use multiplicative identity
// for (let number = 1; number <= n; number++){
//     result *= number;
// }
// console.log(`Factorial of ${n} is ${result}.`)

// // using while loop
// result = 1;
// count = 1;
// while(count <= 10){
//     result *= count;
//     count++;
// }
// console.log(result);

// ---
// function practice 

// Write a function to print n sumNumbers;

function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// printNumbers(5);

// Write a function to print a triangle star pattern as follows
// *
// * *
// * * * 
// * * * * 
// * * * * * 
// Let `n` be the number of stars 

function printTriangle(n) {
    for (let stars = 1; stars <= n; stars++) {
        console.log("* ".repeat(stars));
    }
}
// printTriangle(5);

// pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern(n) {
    for (let row = 1; row <= n; row++) {
        let line = "";
        for (let col = 1; col <= row; col++) {
            // console.log(col);
            line += `${col} `; // String concatenation
        }
        console.log(line);
    }
}
// pattern(5);

// 1

// 2   3

// 4   5   6

// 7   8   9   10

// 11  12  13  14  15


function pat(n) {
    let curr_no = 0;
    for (let row = 1; row <= n; row++) {
        let line = "";

        for (let col = 1; col <= row; col++) {
            line += `${++curr_no}\t`;
        }

        console.log(line + '\n');
    }
}

// pat(7);

//                 15

//             14  13

//         12  11  10

//     9   8   7   6

// 5   4   3   2   1

function is_armstrong(number){
    let copy_number = number;
    // finding the no. of digits in the number
    // divide repeatedly by 10 and count the no. of times it is possible.
    let length = 0;
    while (copy_number > 0){
        copy_number = parseInt(copy_number / 10);
        length++;
    }
    let sum = 0;
    // Looping through each digit of the number and raising it to the length.
    // This value will be added to the sum variable.
    copy_number = number;
    for (let i = 1; i<= length; i++){
        let digit = copy_number % 10;
        copy_number = parseInt(copy_number / 10);
        sum += digit ** length;
    }

    return sum == number;
}

// console.log(is_armstrong(2990));

// suppose we need to print out all armstrong numbers from 1 to 1000

    // for(let i = 1; i <= 1000; i++){
    //     if(is_armstrong(i)){
    //         console.log(i);
    //     }
    // }
    // Shortcut for finding length of numbers
        // let n = 3423423;
        // console.log(String(n).length); 

// Function to find if string is palindrome.

function isPalindrome(text){
    let reversed_string = "";

    for (let index = text.length - 1; index >= 0; index-- )
    {
        reversed_string += (text[index]);
    }
    return text.toLowerCase() == reversed_string.toLowerCase();
}

// console.log(isPalindrome('Malayalam'));

// shortcut for the above problem

function isPalindromeV2(text){

    return text.toLowerCase() == text.toLowerCase().split('').reverse().join('');
}

// console.log(isPalindromeV2("malayalaM"));


const numbers = [1,2,3,4,5];

const doubled = numbers.map( num => num * 2);
console.log(doubled)