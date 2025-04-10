// Importing module
// import { add, subtract } from './mathUtils.js';

// Variables: let & const
const PI = 3.14159;
let radius = 5;

// Template Literals
console.log(`The area of a circle with radius ${radius} is ${PI * radius * radius}`);

// Arrow Functions
const square = (num) => num * num;
console.log(`Square of 4: ${square(4)}`);

// Destructuring
const user = { firstName: "Alice", age: 25, country: "USA" };
const { firstName, age } = user;
console.log(`User: ${firstName}, Age: ${age}`);

// Spread Operator
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers);

// Rest Operator
const sum = (...args) => args.reduce((total, num) => total + num, 0);
console.log(`Sum: ${sum(10, 20, 30)}`);

// Class and Inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying.`);
  }
}

const student1 = new Student("Bob", 16, "10th Grade");
student1.greet();
student1.study();

// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
};

fetchData().then((data) => console.log(data)).catch((error) => console.log(error));

// Async/Await
const getData = async () => {
  try {
    let response = await fetchData();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

getData();
