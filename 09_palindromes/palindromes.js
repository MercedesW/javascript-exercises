const palindromes = function (string) {
    let preString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let finalString = preString.toLowerCase().split(" ").join("");
    let miarray = finalString.split('');
    let isPalindrome = true;

    while(isPalindrome && miarray.length >= 1) {
        if(miarray[0] != miarray[miarray.length - 1]) {
            isPalindrome = false;
        }
        miarray.shift();
        miarray.pop()
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
