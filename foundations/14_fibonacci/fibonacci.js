const fibonacci = function(num) {

    number = Number(num);

    if (number === 1) {
        return 1;
    } else if (number === 2) {
        return 1;
    } else if (number === 0) {
        return 0;
    } else if (number < 0) {
        return 'OOPS'
    }

    

    let seq = [1, 1]

    for (let i = 2; i < number; i++) {
        seq.push(seq.at(-1) + seq.at(-2))
    }

    return seq.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
