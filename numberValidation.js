const checkPhoneNumber=(input)=>{
    const phoneNumber = input.value.trim();
    const phoneWarning = document.getElementById('PhoneWarning');

    if(phoneNumber.length === 11){
        phoneWarning.style.display = 'none';
    }else{
        phoneWarning.style.display = 'block';
    }
}

const checkPhoneNumberifExists=()=>{

}

const checkValidPhoneNumber =(input)=>{
    const inputValue = input.value.trim();
    const phoneWarning = document.getElementById('PhoneWarning');

    if(inputValue.length === 11){
        phoneWarning.style.display = 'none';
        return true;
    }else{
        phoneWarning.style.display = 'block';
        return false;
    }
}

console.log(checkValidPhoneNumber("09123456789"));