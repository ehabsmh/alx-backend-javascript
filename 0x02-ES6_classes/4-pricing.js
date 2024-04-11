import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== typeof (0)) throw new TypeError('Code must be a Number');
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (Object.getPrototypeOf(value) !== Currency.prototype) {
      throw new TypeError('currency must be a Currency object');
    }

    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
