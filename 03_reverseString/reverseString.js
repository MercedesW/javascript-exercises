const reverseString = function(str) {

    /* const arr1 = str.split(' ');
    let arr2 = [];

    for (const s of arr1) {
        const l = s.split('').reverse().join('');
        arr2.push(l);
    }

    const result = arr2.reverse().join(' ') */

    return str.split('').reverse().join('');
};


// Do not edit below this line
module.exports = reverseString;
