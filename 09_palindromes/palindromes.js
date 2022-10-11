const palindromes = function (a) {
    let confirm;
    let after = a.toLowerCase().replace(/[^a-z]/g, "");
    let reversed = after.split("").reverse().join("");
    if (after === reversed) {
        confirm = true;
    } else {
        confirm = false;
    }
    return confirm;
}

// Do not edit below this line
module.exports = palindromes;
