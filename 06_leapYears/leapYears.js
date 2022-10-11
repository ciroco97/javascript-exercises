const leapYears = function(year) {
    let confirm;
    if (year % 400 === 0) {
        confirm = true;
    } else if (year % 100 === 0) {
            confirm = false;
        } else if (year % 4 === 0) {
            confirm = true;
        } else {
            confirm = false;
        }
    return confirm;
};

// Do not edit below this line
module.exports = leapYears;
