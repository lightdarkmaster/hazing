console.log();
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
console.log('\n',task1());

console.log();
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
console.log("Ascending Order: ");
console.log(sort(null, 'ascending')); // padako tipa ubos
console.log("Descending Order: ");
console.log(sort(null, 'descending')); //pa guti tipa ubos..


console.log('\n',"3. Given this object , create a function that will return the expected output");


const convertToObject = (arr) => {
    const result = {};
    arr.forEach(([key, value]) => {
        result[key] = value;
    });
    return result;
};

const input = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5],
];

console.log('\n',convertToObject(input));


console.log('\n',"4. Given the pets object, create a function that return the expected output");

const taskIV = () => {
    const pets = {
        dog: {
            name: "Buddy",
            breed: "Golden Retriever",
            age: 3,
            color: "Golden",
            favoriteToy: "Tennis ball"
        },
        cat: {
            name: "Whiskers",
            breed: "Siamese",
            age: 2,
            color: "Cream and Brown",
            favoriteToy: "Feather wand"
        },
        fish: {
            name: "Splash",
            type: "Goldfish",
            age: 1,
            color: "Orange",
            tankSize: "10 gallons"
        },
        hamster: {
            name: "Nibbles",
            breed: "Syrian",
            age: 1,
            color: "Brown",
            wheelColor: "Blue"
        }
    };
    const dog = pets.dog;
    console.log('\n',    
    ` "My pet's name is ${dog.name}. ${dog.name} is ${dog.age} years old ${dog.breed}, and ${dog.name}'s color is ${dog.color}, and he loves to play ${dog.favoriteToy}".`
    );
}
taskIV();





console.log('\n',"5. Create a function that will calculate Nikka’s average grade.");

const calculateAverage = () => {
    nicasGrades = {
        math: 90,
        science: 85,
        history: 75,
        english: 88
    };
    const sum = Object.values(nicasGrades).reduce((acc, grade) => acc + grade, 0);
    const average = sum / Object.values(nicasGrades).length;
    console.log('\n',`Nikka's average grade is ${average}`);
}


const calAve=()=>{
    return calculateAverage();
}

// console.log('\n',calculateAverage());
//calculate the average