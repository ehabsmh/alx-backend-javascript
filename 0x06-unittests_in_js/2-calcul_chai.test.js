const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Test SUM case', function () {
    it('calculateNumber(SUM, 1.5, 3.5) results 6', function () {
        expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
    });

    it('calculateNumber(SUM, 1.45, 3.9) results 5', function () {
        expect(calculateNumber('SUM', 1.45, 3.9)).to.equal(5);
    });

    it('calculateNumber(SUM, 1.99, 3.49) results 5', function () {
        expect(calculateNumber('SUM', 1.99, 3.49)).to.equal(5);
    });

    it('calculateNumber(SUM, 2.7, 3.9) results 7', function () {
        expect(calculateNumber('SUM', 2.7, 3.9)).to.equal(7);
    });

    it('calculateNumber(SUM, 11.99, 12) results 24', function () {
        expect(calculateNumber('SUM', 11.99, 12)).to.equal(24);
    });

    it('calculateNumber(SUM, 3, 4.0) results 7', function () {
        expect(calculateNumber('SUM', 3, 4.0)).to.equal(7);
    });

    it('calculateNumber(SUM, 9.489, 3) results 12', function () {
        expect(calculateNumber('SUM', 9.489, 3)).to.equal(12);
    });

    it('calculateNumber(SUM, 3.12, 9.1) results 12', function () {
        expect(calculateNumber('SUM', 3.12, 9.1)).to.equal(12);
    });

    it('calculateNumber(SUM, 0.85, 3) results 4', function () {
        expect(calculateNumber('SUM', 0.85, 3)).to.equal(4);
    });

    it('calculateNumber(SUM, 11, -3.67) results 7', function () {
        expect(calculateNumber('SUM', 11, -3.67)).to.equal(7);
    });
});

describe('Test SUBTRACT case', function () {
    it('calculateNumber(SUBTRACT, 1.5, 3.5) results -2', function () {
        expect(calculateNumber('SUBTRACT', 1.5, 3.5)).to.equal(-2);
    });

    // Edge Cases
    it('calculateNumber(SUBTRACT, 0, 0) results 0', function () {
        expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });

    it('calculateNumber(SUBTRACT, -1.4, -3.6) results 3', function () {
        expect(calculateNumber('SUBTRACT', -1.4, -3.6)).to.equal(3);
    });

    it('calculateNumber(SUBTRACT, 1.4, 0.6) results 0', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 0.6)).to.equal(0);
    });

    it('calculateNumber(SUBTRACT, 1.6, 0.4) results 2', function () {
        expect(calculateNumber('SUBTRACT', 1.6, 0.4)).to.equal(2);
    });

    it('calculateNumber(SUBTRACT, -1.5, 1.5) results -3', function () {
        expect(calculateNumber('SUBTRACT', -1.5, 1.5)).to.equal(-3);
    });

    it('calculateNumber(SUBTRACT, 1.5, -1.5) results 3', function () {
        expect(calculateNumber('SUBTRACT', 1.5, -1.5)).to.equal(3);
    });

    it('calculateNumber(SUBTRACT, 2.49, 1.51) results 0', function () {
        expect(calculateNumber('SUBTRACT', 2.49, 1.51)).to.equal(0);
    });

    it('calculateNumber(SUBTRACT, -2.5, -1.5) results -1', function () {
        expect(calculateNumber('SUBTRACT', -2.5, -1.5)).to.equal(-1);
    });

    it('calculateNumber(SUBTRACT, 1, 1.5) results -1', function () {
        expect(calculateNumber('SUBTRACT', 1, 1.5)).to.equal(-1);
    });

    it('calculateNumber(SUBTRACT, 1.5, 1) results 1', function () {
        expect(calculateNumber('SUBTRACT', 1.5, 1)).to.equal(1);
    });
});

describe('Test DIVIDE case', function () {
    it('calculateNumber(DIVIDE, 4.5, 1.5) results 2.5', function () {
        expect(calculateNumber('DIVIDE', 4.5, 1.5)).to.equal(2.5);
    });

    // Edge Cases
    it('calculateNumber(DIVIDE, 1.4, 0.6) results 1', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0.6)).to.equal(1);
    });

    it('calculateNumber(DIVIDE, 1.6, 0.4) results "Error"', function () {
        expect(calculateNumber('DIVIDE', 1.6, 0.4)).to.equal('Error');
    });

    it('calculateNumber(DIVIDE, -1.5, 1.5) results -0.5', function () {
        expect(calculateNumber('DIVIDE', -1.5, 1.5)).to.equal(-0.5);
    });

    it('calculateNumber(DIVIDE, 1.5, -1.5) results -2', function () {
        expect(calculateNumber('DIVIDE', 1.5, -1.5)).to.equal(-2);
    });

    it('calculateNumber(DIVIDE, 2.49, 1.51) results 1', function () {
        expect(calculateNumber('DIVIDE', 2.49, 1.51)).to.equal(1);
    });

    it('calculateNumber(DIVIDE, -2.5, -1.5) results 2', function () {
        expect(calculateNumber('DIVIDE', -2.5, -1.5)).to.equal(2);
    });

    it('calculateNumber(DIVIDE, 1, 1.5) results 0.5', function () {
        expect(calculateNumber('DIVIDE', 1, 1.5)).to.equal(0.5);
    });

    it('calculateNumber(DIVIDE, 1.5, 1) results 2', function () {
        expect(calculateNumber('DIVIDE', 1.5, 1)).to.equal(2);
    });

    it('calculateNumber(DIVIDE, 1.5, 0) results "Error"', function () {
        expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    });

    it('calculateNumber(DIVIDE, 0, 1.5) results 0', function () {
        expect(calculateNumber('DIVIDE', 0, 1.5)).to.equal(0);
    });
});
