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