const sumAll = function(a, b) {
    // Checks if a and b is a valid positive integer
    if ((a < 0 || typeof a !== 'number' || !Number.isInteger(a)) || (b < 0 || typeof b !== 'number' || !Number.isInteger(b))) {
        return "ERROR";
    }

    let sum = 0;
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    }
    else if (b < a) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
