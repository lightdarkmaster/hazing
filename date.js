const getDate = () => new Date().toISOString().slice(0, 10);

console.log(getDate());

const currentYear = new Date().getFullYear();
console.log(currentYear.toString());

const getCurrentMonth = new Date().getMonth().toString();
console.log(getCurrentMonth);

const getDateSum = (string) =>{
    console.log(string);
}


console.log(getDateSum(20240610));