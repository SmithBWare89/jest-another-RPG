module.exports = function checkIfEqual(val1, val2) {
    if (val1 === val2) {
        return true;
    } else {
        return false;
    }
};

function randomNumber() {
    return Math.floor(Math.random() * 9 + 1);
}

module.exports = randomNumber;