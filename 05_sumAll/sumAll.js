const sumAll = function(a, b) {

    if (a < 0 || b < 0) return "ERROR";
    if (typeof a !== 'number' || typeof b !== 'number') return "ERROR";

    const first = a > b ? b : a;
    const last = b > a ? b : a;
    let sum = 0;

    for (let i = first; i <= last; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
