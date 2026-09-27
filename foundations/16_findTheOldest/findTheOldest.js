function getAge (birth, death) {
    let currentYear = new Date().getFullYear();
    if (!death) {
        death = currentYear;
    }
    return death - birth
}

const findTheOldest = function(arr) {
    return arr.reduce(
        (oldest, current) => {
            const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
            const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)

            // If the current person is older than the previous one, replace him
            if (currentAge > oldestAge) {
                return current;
            }
            else {
                return oldest;
            }
        }
    )
};

// Do not edit below this line
module.exports = findTheOldest;
