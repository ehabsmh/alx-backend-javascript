const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber(1, 3)', () => {
    it('Should produce 4', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
});

describe('calculateNumber(1, 3.7)', () => {
    it('Should produce 5', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
});

describe('calculateNumber(1.2, 3.7)', () => {
    it('Should produce 5', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
});

describe('calculateNumber(1.5, 3.7)', () => {
    it('Should produce 6', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});

describe('calculateNumber(0, 0)', () => {
    it('Should produce 0', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
});

describe('calculateNumber(0.3, 0.5)', () => {
    it('Should produce 1', () => {
        assert.strictEqual(calculateNumber(0.3, 0.5), 1);
    });
});

describe('calculateNumber(-1, -2.5)', () => {
    it('Should produce -3', () => {
        assert.strictEqual(calculateNumber(-1, -2.5), -3);
    });
});
