const fibonacci = function(num) {
    let numero = parseInt(num);
    let num1 = 1;
    let num2 = 1;
    if (numero < 0) {
        return "OOPS";
    } else {
        for (let i = 2; i < numero; i++) {
            if (num1 > num2) {
                num2 = num1 + num2;
            } else if (num1 < num2) {
                num1 = num1 + num2;
            } else {
                num2 = num1 + num2;
            }
        }
        if (num1 < num2) {
            return num2;
        } else {
            return num1;
        }
}
};

// Do not edit below this line
module.exports = fibonacci;

