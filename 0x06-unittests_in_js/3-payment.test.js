const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const { Utils } = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
    before(() => {
        sinon.spy(Utils, "calculateNumber");
    })

    after(() => {
        sinon.restore();
    })

    it('Should call calculateNumber once and with the right arguments', () => {
        sendPaymentRequestToApi(100, 20);
        expect(Utils.calculateNumber.calledOnce).to.be.true;
        expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

    });
});
