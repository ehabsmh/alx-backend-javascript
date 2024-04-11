export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (!this.evacuationWarningMessage && Object.getPrototypeOf(this) !== Building.prototype) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== typeof (0)) throw new TypeError('sqft must be a Number');
    this._sqft = value;
  }
}
