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