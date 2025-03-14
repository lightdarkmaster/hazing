console.log("");
console.log("");
console.log("");
console.log("Task I: Create a function that filters an array of strings based on the length of each string, returning only strings longer than a specified length.");

const test1 = (array, length) => {

    const result = array.filter((array) => array.length > length);
    return result;
}

console.log(test1(["Apple", "Banana", "Peaches", "Mangoes", "Absdedede", "Apt"], 6));
console.log("");
console.log("");
console.log("");

console.log("Task II: Implement a function that squares each number in an array, returning a new array with the squared values.");
const test2 = (array) => {
    return array.map(function(x) {
        return x * x;
    });

}
console.log(test2([1, 2, 3, 4, 5, 6]));
console.log("");
console.log("");
console.log("");

console.log("Task III: Write a function that logs each element of an array along with its index in a specified format.");
const animals = ["Dog", "Cat", "Rabbit", "Lion", "Tiger", "Elephant"];
const a = animals.entries();

for (let i of a) {
    console.log(i)
}

console.log("");
console.log("");
console.log("");
console.log("Task IV: Create logic to meet the expected output:");

const myFunction = () => {
    const person = {
        firstName: "John",
        lastName: "Doe",
        address: {
            hometown: "Tacloban, City",
            province: "Leyte"
        },
        height: {
            feet: 6,
            inches: 9
        }
    }
    const d = {...person };
    console.log(d);
};

console.log(myFunction());

console.log("");
console.log("");
console.log("");
console.log("Taask V: Create logic to meet the output below");


const taskV = () => {
    const people = {
        names: ["Alex", "James", "John"],
        professions: {
            Alex: "Software Engineer",
            James: "Wordpress Developer",
            John: "Blockchain Developer"
        },
        companies: {
            Alex: "GAPLabs",
            James: "Symphonics Co. Ltd.",
            John: "Scibiz Informatics"
        }
    };

    const arrayPeople = people.names.map(user => {
        return {
            name: user,
            profession: people.professions[user],
            company: people.companies[user],
        };
    });

    return arrayPeople;
};

console.log(taskV());