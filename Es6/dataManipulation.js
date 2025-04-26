const data = [
    {
        name: "Chan",
        age: 22,
        hobbies: ["swimming", "hiking", "reading"],
        address: "Leyte",
        isStundent: true,
    },
    {
        name: "Igris",
        age: 20,
        hobbies: ["swimming", "hiking", "reading"],
        address: "Leyte",
        isStundent: true,
    },
    {
        name: "Bellion",
        age: 16,
        hobbies: ["swimming", "hiking", "reading"],
        address: "Leyte",
        isStundent: true,
    },
    {
        name: "Beru",
        age: 17,
        hobbies: ["swimming", "hiking", "reading"],
        address: "Leyte",
        isStundent: true,
    },
    {
        name: "Jinwoo",
        age: 18,
        hobbies: ["swimming", "hiking", "reading"],
        address: "Leyte",
        isStundent: true,
    },
    {
        name: "Iron",
        age: 19,
        hobbies: ["swimming", "hiking", "reading"],
        address: "Leyte",
        isStundent: true,
    }
]


const dataManipulation = (data)=>{
    const dataManipulation = data.map((item) => {
        return {
            name: item.name,
            age: item.age,
            hobbies: item.hobbies,
            address: item.address,
            isStundent: item.isStundent,
        };
    });
    return dataManipulation;
}

// console.log(dataManipulation(data));

const changeAge = (item)=>{
    return {
        item,
        age: item.age + 1,
    }
}

const sampleData = data.map(changeAge);
console.log(sampleData);