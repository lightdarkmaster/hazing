// const splitNumberByDigit =(element)=>{
//     return element.split("");
// }



// const splitName =(element)=>{
//     const newDataGet = element.split("");
//     console.log(newDataGet);
// }

const myName = "Chan";

const splitname = myName.split("");
console.log(splitname);


const soloLevel = ["Bellion-Leutennant-General","Beru-General-Commander","Igris-General-Commander","Iron-General-Cammander","Jinwoo-Monarch-MC"];

const arrange =(element)=>{
    const parts = element.split("-");
    return `${parts[1]}-${parts[2]}-${parts[0]}`;
}

const newSoloLevel = soloLevel.map(arrange);
console.log(newSoloLevel);


const filterName = soloLevel.filter(arrange);
console.log("filter")
console.log(filterName);
