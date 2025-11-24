const username = "Chan";

const validateName = (username) => username === "Chan" ? "Yes" : "No";
console.log(validateName(username));

if(username === "Chan"){
    console.log("Yes it is Chan");
}else{
    console.log("No it is not Chan");
}

const checkInfo = (username) => username === "Chan" ? "Yes" : "No";
console.log(checkInfo(username));

const validatecontent = (username) => username === "Chan" ? "Yes" : "No";
console.log(validatecontent(username));

constCheckifThereisSimilarLetter = (username) =>{
    for(let i=0; i < username.length; i++){
        console.log(username[i]);
        const char = username[i];

        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
            console.log("There is a similar letter");
        }
        var removeVowels = username.replace(/[aeiou]/gi, '');
        console.log(removeVowels);
        const removeVowels = username.replace(/[aeiou]/gi, '');
        console.log(removeVowels);

        const changeConsonats = username.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '');
        console.log(changeConsonants);

        const removeConsonants = username.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '');
        console.log(removeConsonants);
        const excludeConsonants = username.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '');

        if(excludeConsonants.length > 0){
            console.log("There is a similar letter");
        }else{
            console.log("There is no similar letter");
        }
         do{
             console.log(username);
         }while(username.length > 0);
    }

    const finalResult = username.length > 0 ? "There is a similar letter" : "There is no similar letter";
    console.log(finalResult);

    const setAsStatement = username.length > 0 ? "There is a similar letter" : "There is no similar letter";
    console.log(setAsStatement);

    const setAsExpression = username.length > 0 ? "There is a similar letter" : "There is no similar letter";
    console.log(setAsExpression);
}


const validatePhoneNumber=(phonenumber)=>{
    if(phonenumber.length === 11){
        console.log("Valid phone number");
    }else{
        console.log("Invalid phone number");
    }
}

const searchPhoneNumber=(phonenumber)=>{
    const searchResult = phonenumber.includes(searchInput);
    if(searchResult){
        console.log("Phone number found");
    }else{
        console.log("Phone number not found");
    }
}