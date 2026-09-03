const reverseString = function(str) {
    let string = "";
    let len = str.length - 1;
    for (let i = len; i >= 0; i--) {
        string += str[i];
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
