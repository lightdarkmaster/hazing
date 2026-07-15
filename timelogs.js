const targetLogsPerDay = 7.5;
const currentlogs = 3.6333;
const allocatedHours = 3;


const remainingLogs = targetLogsPerDay - currentlogs;
// console.log(`Remaining logs to reach the target: ${remainingLogs}`);

// for (let i = 0; i < 5; i++){
//     console.log(" ");
//     for (let j = i; j < 5; j++){
//         console.log("*");
//     }
// }


let rows = 5;

for (let i = 1; i <= rows; i++) {
    let rowStr = "";
    for (let j = 1; j <= i; j++) {
        rowStr += "*";
    }
    console.log(rowStr);
}