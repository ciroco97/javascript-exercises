const repeatString = function(string, num) {
    let addString = '';
    for (; num > 0; num--) {
        addString += string;
    };
    if (num < 0) {
        addString = 'ERROR';
    };
    return addString;
};

// Do not edit below this line
module.exports = repeatString;
