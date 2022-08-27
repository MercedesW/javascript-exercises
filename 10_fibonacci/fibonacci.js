const fibonacci = function(a) {
    let number = Number(a)

    if(number < 0) {
        return "OOPS";
    }

    let result = 0; // guardo el resultado de la suma
    let firstNumber = 0; // recorro secuencia
    let secondNumber = 1; // recorro secuencia
    let i = 1; // recorro números

    if(number == 1) {
        return number;
    }

    while( i < number) {
        result = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = result;
        i++;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
