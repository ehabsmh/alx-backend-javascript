const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require("./utils");
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
    let logSpy = sinon.spy();
    beforeEach(() => {
        logSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        logSpy.restore();
    })

    it('Calls sendPaymentRequestToAPI with 100, and 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(logSpy.withArgs('The total is: 120').calledOnce).to.be.true;
    });

    it('Calls sendPaymentRequestToAPI with 10, and 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(logSpy.withArgs('The total is: 20').calledOnce).to.be.true;
    });
})
