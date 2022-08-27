/* const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
] */

const getAge = function(birth, death) {
    if (!death) {
        // No todos tienen fecha de muerte, entonces da el año actual
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function(data) {

    const theOldest = data.reduce(function(oldest, currentPerson) {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        // devuelve el oldest, porque es el que da True en oldestAge < currentAge
        return oldestAge < currentAge ? currentPerson : oldest;
    })
    console.log(theOldest); // { name: 'Ray', yearOfBirth: 1962, yearOfDeath: 2011 }
    return theOldest;
};














module.exports = findTheOldest;
