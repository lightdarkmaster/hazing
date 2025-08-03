const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) throw new Error("Division by zero is undefined");
    return a / b;
};

const complexMathSolver = (num1, num2) => {
    console.log(`Addition: ${add(num1, num2)}`);
    console.log(`Subtraction: ${subtract(num1, num2)}`);
    console.log(`Multiplication: ${multiply(num1, num2)}`);
    console.log(`Division: ${divide(num1, num2)}`);
};

complexMathSolver(1, 2);
complexMathSolver(1, 12);
