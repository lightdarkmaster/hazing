const getUser=()=>{
    const people = {
        user1:  {
            name: "Alex",
            age: 20,
            address: "Tacloban City"
        },
        user2: {
            name: "Christian",
            age: 23,
            address: "Sta. Fe, Leyte"
        },
        user3: {
            name: "Leo",
            age: 24,
            address: "Alangalang Leyte"
        }
    }
}

const solveForSquare = (num) => {
    let result = '';

    for (let i = 1, j = 1; i <= num && j <= num; i++, j++) {
        if (j % 2 === 0) {
            j++;
        }
        console.log(i, j);
    }
};
console.log(solveForSquare(10));