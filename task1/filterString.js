console.log("Test I: Create a function that filters an array of strings based on the length of each string, returning only strings longer than a specified length.");

const test1 = (array, length) => {

    const result = array.filter((array) => array.length > length);
    return result;
}

console.log(test1(["Apple", "Banana", "Peaches", "Mangoes", "Absdedede", "Apt"], 6));