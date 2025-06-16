//fib

let num1 = 0;
let num2 = 1;
let nextNumber;
let length = 10;

for(let i = 0; i<=length; i++){
    console.log(num1 + " ");
    nextNumber = num1 + num2;
    num1 = num2;
    num2 = nextNumber;
}