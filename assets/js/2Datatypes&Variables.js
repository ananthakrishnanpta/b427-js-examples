// Variables

// Variables are references to values stored in memory locations.
    // They are like placeholders for values.

// Just like in maths, we can use variables in js as follows;

    // x = 10;
    // y = 20;
    // x = 30;
    // console.log(x + y);

// In modern JS, we use some keywords to define and declare variables.

// 1. For declaring constant values to be used in the program, 
    // we use the `const` keyword.
    // syntax: > const <variable_name> = <value>;
    // eg :  
    const pi = 3.14;
    // pi = 2; -> This will throw error.
    // JS doesn't allow variables declared with `const` keyword to be re-assigned.

// 2. For declaring variables to be used in the given scope,
    // We use, `let` keyword.
    // {
    //     // In JS, scope is defined using curly braces
    //     let president = 'Swathi';
    //     console.log(president);
    // }
    // console.log(president); // This throws error
    // Each scope can be called a block of code / code-block
    // From above example, we can say that
    // `let` creates `block-scoped` variables.

// 3. `var` - For declaring variables in function scope.
    // Functions - Re-usable blocks of code
    // Since JS scripts run their entire code like a `main` method of 
    // other programming languages, `var` variables behave like they belong to  
    // global scope.

// -----
// Datatypes =>
    // 1. Primitive
        // -> boolean
        // -> number
        // -> string
        // -> undefined
        // -> null -> empty value
        // -> bigint
        // -> Symbol -> used for creating unique identifiers 
                        // for keys of objects with same names but different purposes.


    // 2. Non-primitive
        // -> Object -> Example, Array, JSObject, Document, window, console, etc....

    // let i = Symbol("hello");
    // let j = Symbol("hello");
    // console.log(i);
    // console.log(j);
    // console.log(i == j);
    // console.log(typeof i);

    // let x = "hello";
    // let y = "hello";
    // console.log(x == y);

// Operations : 

// Arithmetic operations

// let x = 10;
// let y = 20;
// let result;

    // // Addition
    // result = x + y;
    // console.log("Result of adding "+ x +" and " + y + " is " +result);

    //     // Subtraction
    // result = x - y;
    // console.log(`Result of subtraction ${y} from ${x} is ${result}.`);
    // // This way of interpolating variables within strings => String interpolation
    // // Supports multi-line strings too.
    // // Such strings which contains interpolation, can be called `template strings`

    //     // Multiplication
    // result = x * y;
    // console.log(result);

    //     // Division
    // result = x / y;
    // console.log(result);

    //     // Modulus
    // result = x % y;
    // console.log(result);

    //     // Exponentiation
    // result = x ** y;
    // console.log(result)

    // x = 13;
    // y = 6;
    // console.log(`
    //     If I divide ${x} by ${y},
    //     I'll get ${parseInt(x / y)} as Quotient and ${x % y} as remainder.
    //     `);

    // Increment/Decrement operations

        // let count = 0;
        // console.log(`Current value of count : ${count}`);

        // count = count + 1; // This is an increment => a variable increasing value by 1 
        // // This has a shorthand method
        // console.log(`Current value of count : ${count}`);

        // count += 1;
        // console.log(`Current value of count : ${count}`);

        // // An increment operator is also present to do this in a statement.
        // count++; // ++ addes currentValue + 1
        // console.log(`Current value of count : ${count}`);

        // // similarly 
        // count--; // subtracts 1 from current value
        // console.log(`Current value of count : ${count}`);

        

// Comparison Operators

    // let a = '123';
    // let b = 123;

    // // 1. Equality
    // console.log(`Equality comparison between ${a} and ${b} 
    //                 gives result : ${a == b}`);
    //     // In the above example, JS gives true as the result.
    //     // This is because, JS performs an implicit type casting(type conversion)


    // // 2. Strong Equality (value and type evaluation)
    // console.log(`Strong quality comparison between ${a} and ${b} 
    //                 gives result : ${a === b}`);
    //                 // This checks without converting.
    // let v1 = 20, v2 = 30;
    // console.log(`${v1} != ${v2} : ${v1 != v2}`);
    // console.log(`${v1} !== ${v2} : ${v1 !== v2}`); // Strong Inequality
    // console.log(`${v1} > ${v2} : ${v1 > v2}`);
    // console.log(`${v1} >= ${v2} : ${v1 >= v2}`);

// Note :  Comparison operators are mostly used to create `conditions`

// Logical Operators => Used for combining multiple `conditions`

// let's talk about taking a job.
// Everyone has some conditions.

let salaryExpectation = 30000;

let salary = 40000;
let workCulture = 'toxic';
let company = 'google';

let result = (
    ((salary >= salaryExpectation) && (workCulture != 'toxic')) 
        ||
    (company == 'google')
);
console.log(`Expectation Matched ? => ${result}`);
console.log(`Not taking the job: ${!(result)}`);


// Nullish Coalescing Operator ....
let active_user = null;

console.log(`Hi ${active_user ?? "Guest"}!`)

// Ternary Operator
// Deciding between 2 values for a single variable based on a condition.

let marks = 20;
let pass_marks = 80;
let message = marks >= pass_marks ? "You have passed" : "You have not passed";
// syntax  :
// let <variable> = condition ? expr1 : expr2;
// expr1 runs if condition evaluates True and expr2 runs if condition evaluates False
console.log(message);

let age = 16;
const AGE_LIMIT = 18;
let hasLicense = false;

message = age >= AGE_LIMIT ? 
            hasLicense ?
                "Congrats! You can drive." : "You can join driving school."
    : `Come back for license test after ${AGE_LIMIT - age} ${AGE_LIMIT - age != 1 ? "years" : "year"}`

console.log(message);