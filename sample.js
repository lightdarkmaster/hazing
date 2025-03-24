const taskV = () => {
    const users = [
        { name: "Alex", profession: "Software Engineer", company: "GAPLabs" },
        { name: "James", profession: "Wordpress Developer", company: "Symphonics Co. Ltd" },
        { name: "John", profession: "Blockchain Developer", company: "Scibiz Informatics" },
    ];

    const reformattedArray = users.map(({ name, profession, company }) => {
        return ({
            [name]: profession,
            name,
            profession,
            company
        });
    });

    console.log(reformattedArray);
    //console.log(users);
};



const taskIV = () => {
    const pets = {
        dog: {
            name: "Buddy",
            breed: "Golden Retriever",
            age: 3,
            color: "Golden",
            favoriteToy: "Tennis ball",
        },
        cat: {
            name: "Whiskers",
            breed: "Siamese",
            age: 2,
            color: "Cream and Brown",
            favoriteToy: "Feather wand",
        },
        fish: {
            name: "Splash",
            type: "Goldfish",
            age: 1,
            color: "Orange",
            tankSize: "10 gallons",
        },
        hamster: {
            name: "Nibbles",
            breed: "Syrian",
            age: 1,
            color: "Brown",
            wheelColor: "Blue",
        },
    };

    const dog = pets.dog; // Destructure the dog object for easier access

    console.log(
        `My pet's name is ${dog.name} and is ${dog.age} years old. ${dog.name} is a ${dog.breed} with ${dog.color} fur, and he loves to play with a ${dog.favoriteToy}.`
    );
};

console.log(taskIV());