console.log("");
console.log("");
console.log("");
console.log("1. Given these group of people. make it filtered of all the people who are old enough to see a R-18 movie.");
const task1 = () => {
    const persons = [
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Zirol", age: 100 },
    ];
    const result = persons.filter((persons) => persons.age >= 18);
    return result;

}
console.log(task1());

console.log("");
console.log("");
console.log("");
console.log("2. Create a sort function that will sort the order base on the libraryID , the function will accept two parameters, first parameter would be the object, second parameter would be the order (ascending, descending)");

const sort = (object, order) => {
    const books = [
        { name: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
        { name: "Steve Jobs", title: "Walter Isaacson'", libraryID: 4264 },
        { name: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", libraryID: 3245 },
        { name: "J.K. Rowling", title: "Harry Potter and the Sorcerer's Stone", libraryID: 7890 },
        { name: "George Orwell", title: "1984", libraryID: 5678 },
        { name: "Harper Lee", title: "To Kill a Mockingbird", libraryID: 1239 },
    ];

    const result = books.sort((a, b) => {
        if (order === 'ascending') {
            return a.libraryID - b.libraryID;
        } else if (order === 'descending') {
            return b.libraryID - a.libraryID;
        }
    });

    return result;
}

console.log(sort(null, 'ascending'));
console.log(sort(null, 'descending'));


console.log("");
console.log("");
console.log("");
console.log("3. Given this object , create a function that will return the expected output");





console.log("");
console.log("");
console.log("");
console.log("4. Given the pets object, create a function that return the expected output");






console.log("");
console.log("");
console.log("");
console.log("5. Create a function that will calculate Nikka’s average grade.");