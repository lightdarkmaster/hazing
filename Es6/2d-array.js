const data =[
    {
        name: "John",
        age: 20,
        hobbies: ["swimming", "hiking", "reading"],
        address: "Leyte",
        isStudent: true,
        grades:[
            {
                subject: 'Math',
                grade: 89,
            },
            {
                subject: 'English',
                grade: 88,
            },
            {
                subject: "Science",
                grade: 87,
            }
        ]
    },
    {
        name: "Christian",
        age: 22,
        hobbies: ["swimming", "hiking", "reading"],
        address: "Leyte",
        isStudent: true,
        grades:[
            {
                subject: 'Math',
                grade: 75,
            },
            {
                subject: 'English',
                grade: 76,
            },
            {
                subject: "Science",
                grade: 77,
            }
        ]
    },
    {
        name: "Ezekiel",
        age: 23,
        hobbies: ["swimming", "hiking", "reading"],
        address: "Leyte",
        isStudent: true,
        grades:[
            {
                subject: 'Math',
                grade: 75,
            },
            {
                subject: 'English',
                grade: 76,
            },
            {
                subject: "Science",
                grade: 77,
            }
        ]
    },
    {
        name: "Zed",
        age: 23,
        hobbies: ["swimming", "hiking", "reading"],
        address: "Samar",
        isStudent: false,
        grades:[
            {
                subject: 'Math',
                grade: 1,
            },
            {
                subject: 'English',
                grade: 1,
            },
            {
                subject: "Science",
                grade: 1,
            }
        ]
    },
    
];

let myArray = [
    [0, 1, 2, 3], 
    [4, 5, 6, 7],
    [8, 9, 4, 0]
    ];

console.log(myArray[1][1]);


console.log(data);
const findSomeOne = data.map(name => "Christian");
console.log(findSomeOne);

const findSomeOne2 = data.map(name => name.name === "Christian");
console.log(findSomeOne2[1]);


const getData =(data)=>{
    const retData = data;
    console.log(retData + retData.length);
}
const labels = [
    "Weak Password",
    "Medium Password",
    "Strong Password"
];

const validatePasswordStrength =(password)=>{
    console.log("password length: " + password.length)
    if(password.length >= 1 && password.length < 10){
        console.log(labels[0]);
    }else if(password.length >=11 && password.length < 15){
        console.log(labels[1]);
    }else{
        console.log(labels[2]);
    }
}

console.log(validatePasswordStrength("P"));
console.log(validatePasswordStrength("adshdshdPPpPandsdsn121212!!!"))

