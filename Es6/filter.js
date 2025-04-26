const numbers = [2,3,4,5,6,7,8,9,10];

const isEven=(element)=>{
    return element % 2 === 0;
}

const isOdd=(element)=>{
    return element % 2 !== 0;
}

const newNumbers = numbers.filter(isEven);
console.log(newNumbers);

const newValue = numbers.filter(isOdd);
console.log(newValue);



const names = ["Chan", "Zed","Chan", "Troy","Nica", "Bellion", "Chan", "Igris", "Beru"];


const findName =(element)=>{
    if(element === "Chan"){
        console.log("I Found ");
    }else{
        console.log("I can't Find it");
    }
}

const searchName = names.filter(findName);
console.log(searchName);


const ages = [16,17,18,18,19,20,60];

const isAdult =(element)=>{
    return element < 18;
}

const newAge = ages.filter(isAdult);
console.log(newAge);

const belowSixteen = newAge.filter((newData)=>{
    return newData < 17;
})
console.log(belowSixteen);
console.log(belowSixteen + " and is below "+ newAge + "years old");