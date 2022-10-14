const caesar = function(string, number) {
    let newString = "";
    let unicode = 0;
    let newNumber = number;
    while (newNumber > 26) {
        newNumber -= 26;
    };
    while (newNumber < 0) {
        newNumber += 26;
    };
    let num = newNumber;
    for (let i = 0; i < string.length; i++) {
        let preUnicode = string.charCodeAt(i);
        let cha = string[i];
        if (cha === " ") {
            newString = newString + " ";
        }   else if (cha.match(/[a-zA-Z]/)) {
            unicode = string.charCodeAt(i) + num;
            if (unicode > 90 && preUnicode < 97) {
            unicode = unicode - 26;
            } else if (unicode < 65) {
                unicode = unicode + 26;
            } else if (unicode > 122) {
                unicode = unicode - 26;
            }
            newString = newString + String.fromCharCode(unicode);
        } 
        else { 
            newString = newString + string[i];
        }
};
return newString;
}
// Do not edit below this line
module.exports = caesar;


