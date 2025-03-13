console.log("Test II: Implement a function that squares each number in an array, returning a new array with the squared values.");
const test2 = (array) => {
    return array.map(function(x) {
        return Math.pow(x, 2);
    });

}
console.log("First Way: ");
console.log(test2([1, 2, 3, 4, 5, 6]));


const ktest = (array) => {
    return array.map(function(x) {
        let res = 0;
        for (let i = 0; i < x; i++) {
            res += x;
        }
        return res;
    })
}
console.log("Second Way: ");
console.log(ktest([1, 4, 6, 8, 9, 9]));