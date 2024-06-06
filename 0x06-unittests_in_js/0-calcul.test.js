/**
 * @desc Task'0 module's test (0-calcul)
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test 0-calcul.js', function () {
    it('calculateNumber(1.5, 3.5) results 6', function () {
        assert.equal(calculateNumber(1.5, 3.5), 6);
    });
    it('calculateNumber(1.45, 3.9) results 5', function () {
        assert.equal(calculateNumber(1.45, 3.9), 5);
    });
    it('calculateNumber(1.99, 3.49) results 5', function () {
        assert.equal(calculateNumber(1.99, 3.49), 5);
    });
    it('calculateNumber(2.7, 3.9) results 7', function () {
        assert.equal(calculateNumber(2.7, 3.9), 7);
    });
    it('calculateNumber(11.99, 12) results 24', function () {
        assert.equal(calculateNumber(11.99, 12), 24);
    });
    it('calculateNumber(3, 4.0) results 7', function () {
        assert.equal(calculateNumber(3, 4.0), 7);
    });
    it('calculateNumber(9.489, 3) results 12', function () {
        assert.equal(calculateNumber(9.489, 3), 12);
    });
    it('calculateNumber(3.12, 9.1) results 12', function () {
        assert.equal(calculateNumber(3.12, 9.1), 12);
    });
    it('calculateNumber(0.85, 3) results 4', function () {
        assert.equal(calculateNumber(0.85, 3), 4);
    });
    it('calculateNumber(11, -3.67) results 7', function () {
        assert.equal(calculateNumber(11, -3.67), 7);
    });
});
