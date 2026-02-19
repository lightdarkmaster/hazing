/**
 * Prints out the Fibonacci sequence up to the given length
 * @param {number} length The number of elements in the sequence to generate
 */
const fib = (length) => {
    let num1 = 0;
    let num2 = 1;
    let nextNumber;

    for (let i = 1; i <= length; i++) {
        console.log(num1);
        nextNumber = num1 + num2;
        num1 = num2;
        num2 = nextNumber;
    }
}

const getDate = () => new Date().toString().slice(0, 10);
console.log(getDate());

const currentYear = new Date().getFullYear();
console.log(currentYear.toString());

const getCurrentMonth = new Date().getMonth().toString();
console.log(getCurrentMonth);
console.log(fib(9));