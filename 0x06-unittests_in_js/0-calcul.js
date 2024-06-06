function calculateNumber(a, b) {
    if (typeof a === Number && typeof b === Number) {
        return a + b;
    } else {
        return Math.round(a) + Math.round(b);
    }
}

module.exports = calculateNumber;
