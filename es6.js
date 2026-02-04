// ES6 JavaScript - Complex to Advanced Features

// 1. Arrow Functions & Lexical 'this'
const greet = (name) => `Hello, ${name}!`;
const person = {
    name: 'Alice',
    greetings: ['Hi', 'Hey'],
    showGreetings() {
        this.greetings.forEach(greeting => {
            console.log(`${greeting}, ${this.name}`);
        });
    }
};

// 2. Template Literals & Destructuring
const { name, greetings } = person;
const message = `Welcome ${name}. Your greetings: ${greetings.join(', ')}`;

// 3. Classes & Inheritance
class Animal {
    constructor(species) {
        this.species = species;
    }
    speak() {
        return `${this.species} makes a sound`;
    }
}

class Dog extends Animal {
    constructor(name) {
        super('Dog');
        this.name = name;
    }
    speak() {
        return `${this.name} barks!`;
    }
}

// 4. Default Parameters & Rest Operator
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
const greetMultiple = (greeting = 'Hello', ...names) => {
    return names.map(n => `${greeting}, ${n}`);
};

// 5. Promises & Async/Await
const fetchData = (url) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Data from ${url}`), 1000);
});

const getData = async () => {
    try {
        const result = await fetchData('/api/users');
        return result;
    } catch (error) {
        console.error(error);
    }
};

// 6. Modules (Export/Import)
export const calculateArea = (radius) => Math.PI * radius ** 2;
export default class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}

// 7. Map & Set Collections
const userMap = new Map([['user1', 'Alice'], ['user2', 'Bob']]);
const uniqueTags = new Set(['javascript', 'es6', 'javascript']);

// 8. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const merged = { ...person, age: 30 };

// 9. for...of Loop
for (const greeting of person.greetings) {
    console.log(greeting);
}

// 10. Symbols & WeakMap for Private Properties
const _secret = Symbol('secret');
class SecureUser {
    constructor(name) {
        this.name = name;
        this[_secret] = 'privateData';
    }
}

// 11. Generators & Iterators
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }

// 12. Proxy for Metaprogramming
const handler = {
    get: (target, prop) => `Getting ${prop}`,
    set: (target, prop, value) => {
        target[prop] = value;
        return true;
    }
};
const proxy = new Proxy({}, handler);

// Usage
console.log(new Dog('Rex').speak());
console.log(sum(1, 2, 3, 4, 5));
console.log(greetMultiple('Hi', 'John', 'Jane'));
getData();