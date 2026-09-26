const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

    let original = str
        .toLowerCase()
        .split("")
        .filter(letter => alphanumerical.includes(letter))
        .join("");

    let reversed = original.split("").reverse().join("");
    return original === reversed;
};


// Do not edit below this line
module.exports = palindromes;
