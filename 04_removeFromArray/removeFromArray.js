const removeFromArray = function([a, b, c, d], e, f, g, h) {
    let array = [a, b, c, d];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === e || array[i] === f || array [i] === g || array[i] === h) {
            array.splice(i, 1);
            i--;
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
