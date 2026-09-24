console.log("Test Credentials");

const username = "testuser";
const password = "testpassword";




if (username === "testuser" && password === "testpassword") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

function getPassword(){
    const password = "testpassword";
    console.log(password);
}

function getUsername(){
    const username = "testuser";
    console.log(username);
}

function people(){
    getUsername();
    getPassword();
}
function pythagoreanTheorem(a, b) {
    const c = Math.sqrt(a * a + b * b);
    return c;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


function fibonacciSequence(){
    const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];
    console.log(sequence);

    if (sequence.length > 0) {
        console.log("The sequence is not empty");
    } else {
        console.log("The sequence is empty");
    }

    const sum = sequence.reduce((total, num) => total + num, 0);
    console.log(`The sum of the sequence is: ${sum}`);

    const product = sequence.reduce((total, num) => total * num, 1);
    console.log(`The product of the sequence is: ${product}`);
}

function pyramid(){
    const rows = 5;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += "* ";
        }
        console.log(line);
    }
}

function getRelatedList(){
    const getRelatedListData = 456565;
    console.log(getRelatedListData);
}

pythagoreanTheorem(3, 4);
fibonacciSequence();
pyramid();
people();