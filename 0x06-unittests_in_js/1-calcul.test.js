/**
 * @desc Task'0 module's test (0-calcul)
 */

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test SUM case', function () {
    it('calculateNumber(SUM, 1.5, 3.5) results 6', function () {
        assert.equal(calculateNumber('SUM', 1.5, 3.5), 6);
    });
    it('calculateNumber(SUM, 1.45, 3.9) results 5', function () {
        assert.equal(calculateNumber('SUM', 1.45, 3.9), 5);
    });
    it('calculateNumber(SUM, 1.99, 3.49) results 5', function () {
        assert.equal(calculateNumber('SUM', 1.99, 3.49), 5);
    });
    it('calculateNumber(SUM, 2.7, 3.9) results 7', function () {
        assert.equal(calculateNumber('SUM', 2.7, 3.9), 7);
    });
    it('calculateNumber(SUM, 11.99, 12) results 24', function () {
        assert.equal(calculateNumber('SUM', 11.99, 12), 24);
    });
    it('calculateNumber(SUM, 3, 4.0) results 7', function () {
        assert.equal(calculateNumber('SUM', 3, 4.0), 7);
    });
    it('calculateNumber(SUM, 9.489, 3) results 12', function () {
        assert.equal(calculateNumber('SUM', 9.489, 3), 12);
    });
    it('calculateNumber(SUM, 3.12, 9.1) results 12', function () {
        assert.equal(calculateNumber('SUM', 3.12, 9.1), 12);
    });
    it('calculateNumber(SUM, 0.85, 3) results 4', function () {
        assert.equal(calculateNumber('SUM', 0.85, 3), 4);
    });
    it('calculateNumber(SUM, 11, -3.67) results 7', function () {
        assert.equal(calculateNumber('SUM', 11, -3.67), 7);
    });
});

describe('Test SUBTRACT case', function () {
    it('calculateNumber(SUBTRACT, 1.5, 3.5) results -2', function () {
        assert.equal(calculateNumber('SUBTRACT', 1.5, 3.5), -2);
    });

    // Edge Cases
    it('calculateNumber(SUBTRACT, 0, 0) results 0', function () {
        assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('calculateNumber(SUBTRACT, -1.4, -3.6) results 3', function () {
        assert.equal(calculateNumber('SUBTRACT', -1.4, -3.6), 3);
    });

    it('calculateNumber(SUBTRACT, 1.4, 0.6) results 0', function () {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 0.6), 0);
    });

    it('calculateNumber(SUBTRACT, 1.6, 0.4) results 2', function () {
        assert.equal(calculateNumber('SUBTRACT', 1.6, 0.4), 2);
    });

    it('calculateNumber(SUBTRACT, -1.5, 1.5) results -3', function () {
        assert.equal(calculateNumber('SUBTRACT', -1.5, 1.5), -3);
    });

    it('calculateNumber(SUBTRACT, 1.5, -1.5) results 3', function () {
        assert.equal(calculateNumber('SUBTRACT', 1.5, -1.5), 3);
    });

    it('calculateNumber(SUBTRACT, 2.49, 1.51) results 0', function () {
        assert.equal(calculateNumber('SUBTRACT', 2.49, 1.51), 0);
    });

    it('calculateNumber(SUBTRACT, -2.5, -1.5) results -1', function () {
        assert.equal(calculateNumber('SUBTRACT', -2.5, -1.5), -1);
    });

    it('calculateNumber(SUBTRACT, 1, 1.5) results -1', function () {
        assert.equal(calculateNumber('SUBTRACT', 1, 1.5), -1);
    });

    it('calculateNumber(SUBTRACT, 1.5, 1) results 1', function () {
        assert.equal(calculateNumber('SUBTRACT', 1.5, 1), 1);
    });
});

describe('Test DIVIDE case', function () {
    it('calculateNumber(DIVIDE, 4.5, 1.5) results 2.5', function () {
        assert.equal(calculateNumber('DIVIDE', 4.5, 1.5), 2.5);
    });

    // Edge Cases
    it('calculateNumber(DIVIDE, 1.4, 0.6) results 1', function () {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0.6), 1);
    });

    it('calculateNumber(DIVIDE, 1.6, 0.4) results "Error"', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.6, 0.4), "Error");
    });

    it('calculateNumber(DIVIDE, -1.5, 1.5) results -0.5', function () {
        assert.equal(calculateNumber('DIVIDE', -1.5, 1.5), -0.5);
    });

    it('calculateNumber(DIVIDE, 1.5, -1.5) results -2', function () {
        assert.equal(calculateNumber('DIVIDE', 1.5, -1.5), -2);
    });

    it('calculateNumber(DIVIDE, 2.49, 1.51) results 1', function () {
        assert.equal(calculateNumber('DIVIDE', 2.49, 1.51), 1);
    });

    it('calculateNumber(DIVIDE, -2.5, -1.5) results 2', function () {
        assert.equal(calculateNumber('DIVIDE', -2.5, -1.5), 2);
    });

    it('calculateNumber(DIVIDE, 1, 1.5) results 0.5', function () {
        assert.equal(calculateNumber('DIVIDE', 1, 1.5), 0.5);
    });

    it('calculateNumber(DIVIDE, 1.5, 1) results 2', function () {
        assert.equal(calculateNumber('DIVIDE', 1.5, 1), 2);
    });

    it('calculateNumber(DIVIDE, 1.5, 0) results "Error"', function () {
        assert.equal(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });

    it('calculateNumber(DIVIDE, 0, 1.5) results 0', function () {
        assert.equal(calculateNumber('DIVIDE', 0, 1.5), 0);
    });
});
