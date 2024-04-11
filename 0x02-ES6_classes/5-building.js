export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== typeof (0)) throw new TypeError('sqft must be a Number');
    this._sqft = value;
  }

  evacuationWarningMessage() {
    if (Object.getPrototypeOf(this) !== Building.prototype) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
