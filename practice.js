const checkPalindrome = () => {
    let str = 'madam'; // Example palindrome
    let str2 = str.split('').reverse().join(''); // Fix: split and join need proper arguments

    if (str === str2) {
        console.log("Palindrome");
    } else {
        console.log("Not A Palindrome");
    }
};

checkPalindrome();
