const sumAll = function(a, b) {
    let total = 0;
    if (typeof a !== 'string' && typeof b !== 'string' && a < b && a >= 0) {
        for (let i = a; i <= b; i++) {
            total = total + i;
        };
    } else if (typeof b !== 'string' && typeof a !== 'string' && a > b && b >= 0) {
        for (let i = b; i <= a; i++) {
            total = total + i;
        };
    } else {
        total.toString();
        total = "ERROR";
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
