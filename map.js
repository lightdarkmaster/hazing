const numbers = [1,2,3,4,5,6];

const cube =(element)=>{
    return Math.pow(element, 3);
}

const cubes = numbers.map(cube);
console.log(cubes);



//Uppercase
const students = ["Chan", "Jackie", "Policarpio","Thomas", "Anna"];
const upperCase=(element)=>{
    return element.toUpperCase();
}
const loweCase =(element)=>{
    return element.toLowerCase();
}

const newStudents = students.map(upperCase);
console.log(newStudents);

const lowerCaseStudents  = students.map(loweCase);
console.log(lowerCaseStudents);


//Dates
const dates = ["2024-1-10", "2025-4-11", "2026-5-9", "2020-10-5", "2001-22-5"];

const formatDates =(element)=>{
    const segments = element.split("-");
    return `${segments[1]}/${segments[2]}/${segments[0]}`
}

const newFormat = dates.map(formatDates);
console.log(newFormat);


const price = [2,5,8,9,10,22];

const discount=(element)=>{ 
    return element * .5;
}

const discountedPrice = price.map(discount);
console.log(discountedPrice);

const discountedPrices = price.map((prices)=> {
    return prices * .5;
})

console.log("Direct exe " + discountedPrices);


const clientFirstName = ["John", "Jane", "Alex", "Emily", "Chris", "Sarah", "Michael", "Laura", "David", "Emma"];
const clientLastName = ["Smith", "Johnson", "Brown", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin"];

const generateRandomName = () => {
  const first = clientFirstName[Math.floor(Math.random() * clientFirstName.length)];
  const last = clientLastName[Math.floor(Math.random() * clientLastName.length)];
  return `${first} ${last}`;
};

const getCient = Array.from({ length: 100 }, generateRandomName);

console.log(getCient);



const address = ["Zone-4-Santafe","Zone-3-Santafe","Zone-2-Santafe","Zone-1-Santafe"];

const arrange=(element)=>{
    const separate = element.split("-");
    return `${separate[2]}-${separate[0]}-${separate[1]}`
}
const upperCaseAddress=(element)=>{
    return element.toUpperCase();
}



const newData = address.map(arrange);
const appliedFunc = newData.map(upperCase);
console.log(appliedFunc);

const newData2 = appliedFunc.map((appliedFunc)=>{
    return appliedFunc.toLowerCase();
})
console.log(newData2);