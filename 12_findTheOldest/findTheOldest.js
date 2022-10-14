const findTheOldest = function(array) {
    let current = 0;
    let oldest = 0;
    let name;
    for (let i = 0; i < array.length; i++) {
        if (array[i].yearOfDeath === undefined) {
            array[i].yearOfDeath = new Date().getFullYear();
        }
        current = array[i].yearOfDeath - array[i].yearOfBirth;
        if (current > oldest) {
            oldest = current;
            name = array[i];
        };
    }
    return name;
};

// Do not edit below this line
module.exports = findTheOldest;
