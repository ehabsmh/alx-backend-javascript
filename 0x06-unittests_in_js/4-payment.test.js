const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require("./utils");
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
    after(() => {
        sinon.restore();
    })

    it('Checks that Utils.calculateNumber is stubbed', () => {
        const spy = sinon.spy(console, 'log');
        sinon.stub(Utils, "calculateNumber").returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(spy.withArgs("The total is: 10").calledOnce).to.be.true;
        expect(Utils.calculateNumber.calledOnce).to.be.true;
        expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

    });
});
