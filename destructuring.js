const person ={
    firstName: "Jackie",
    lastName : "Chan",
    age : 22
}

let personData = {firstName, lastName} = person

console.log(person)
// console.log(personData);


const animals ={
    land: "Lion",
    status: "Wild",
    nickname: "The King"
}

const animalsData = {land, status, nickname} = animals

console.log(animalsData);
