/**
 * @desc Task'0 module's test (0-calcul)
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test 0-calcul.js', function () {
    it('a: 1.5 - b: 3.5', function () {
        assert.equal(calculateNumber(1.5, 3.5), 6);
    });
    it('a: 1.45 - b: 3.9', function () {
        assert.equal(calculateNumber(1.45, 3.9), 5);
    });
    it('a: 1.99 - b: 3.49', function () {
        assert.equal(calculateNumber(1.99, 3.49), 5);
    });
    it('a: 2.7 - b: 3.9', function () {
        assert.equal(calculateNumber(2.7, 3.9), 7);
    });
    it('a: 11.99 - b: 12', function () {
        assert.equal(calculateNumber(11.99, 12), 24);
    });
    it('a: 3 - b: 4.0', function () {
        assert.equal(calculateNumber(3, 4.0), 7);
    });
    it('a: 9.489 - b: 3', function () {
        assert.equal(calculateNumber(9.489, 3), 12);
    });
    it('a: 3.12 - b: 9.1', function () {
        assert.equal(calculateNumber(3.12, 9.1), 12);
    });
    it('a: 0.85 - b: 3', function () {
        assert.equal(calculateNumber(0.85, 3), 4);
    });
    it('a: 11 - b: -3.67', function () {
        assert.equal(calculateNumber(11, -3.67), 7);
    });
});
