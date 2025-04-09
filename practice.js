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