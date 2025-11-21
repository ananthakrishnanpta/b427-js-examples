// Function :  Re-usable code block

// 1. Regular functions
syntax : 

// Function definition
    // function <function_name>( parameter1, parameter2){
    //     statement 1;
    //     statement 2;
    //     statement 3;

    //     return <return_output_value>;
    // }

// Function call 

    // <function_name>(argument1, argument2);

// Please note : Nothin runs in a function until the function is called by its name

// Example : 

// function without parameters; no return value 

function printHello(){
    console.log("Hello, how are you?");
}

printHello();

// function with parameters; no return value
function sumNumbers(num1, num2){
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
}

sumNumbers(12, 20); // calling functions with positional arguments

// function without parameters; with return value

function sumNumbers1to10(){
    let sum = 0;
    for (let i=1; i <= 10; i++){
        sum += i;
    }
    return sum;
}

let result = sumNumbers1to10();
console.log(result);

// function with parameters and return value

function sumNum(num1, num2){
    return num1 + num2;
}

result = sumNum(10,22);
console.log(result);


