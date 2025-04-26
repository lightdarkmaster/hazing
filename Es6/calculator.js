console.log("Calculator: ");

const addNumbers = (num1, num2) => {
    let sum = num1 + num2;
    console.log("Sum of the two number is : " + sum);
}

const subtractNumbers = (num1, num2) => {
    let difference = num1 - num2;
    console.log("Difference of the two number is : " + difference);
}

const productNumbers = (num1, num2) => {
    let product = num1 * num2;
    console.log("Product of the two number is : " + product);
}

const divideNumbers = (num1, num2) => {
    let division = num1 / num2;
    console.log("Division of the two number is : " + division);
}

const getInput = (num1, num2, operation) => {

    if (operation === addNumbers) {
        addNumbers(num1, num2);
    } else if (operation === subtractNumbers) {
        subtractNumbers(num1, num2);
    } else if (operation === productNumbers) {
        productNumbers(num1, num2);
    } else if (operation === divideNumbers) {
        divideNumbers(num1, num2);
    } else {
        console.log("invalid input");
    }
}

//console.log(addNumbers(10, 5));
//console.log(subtractNumbers(100, 10));
//console.log(productNumbers(5, 67));
//console.log(divideNumbers(100, 4));
console.log(getInput(900, 100, subtractNumbers));


const q1 = ["January", "February", "March"];
const q2 = ["April", "May", "June"];
const q3 = ["July", "August", "September"];
const q4 = ["October", "November", "December"];

const months = [q1, q2, q3, q4];
console.log(months);
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year[8]);