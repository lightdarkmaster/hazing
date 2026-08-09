const word = "Eagle";
const wordToLowerCase = word.toLowerCase();
const vowels = ["a", "e", "i", "o", "u"];

for(const vowel of vowels){
    // console.log(vowel);
}

// if(word.length > 0){
//     if(word.startsWith("a") || word.startsWith("e") || word.startsWith("i") || word.startsWith("o") || word.startsWith("u") || word.startsWith("A") || word.startsWith("E") || word.startsWith("I") || word.startsWith("O") || word.startsWith("U")){
//         console.log(word + "yay");
//     }else{
//         console.log(word + "ay");
//     }
// }else{
//     console.log("There is no similar letter");
// }


if(wordToLowerCase.length > 0){
    if(wordToLowerCase.startsWith(vowels[vowels.indexOf(wordToLowerCase[0])])){
        console.log(word + "yay");
    }else{
        console.log(word + "ay");
    }
}else{
    console.log("Invalid Input, Reason only 1 letter or numbers inputed or empty string");
}



//This is notes...
