export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== typeof (0)) throw new TypeError('Name must be a Number');
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== typeof ('')) throw new TypeError('Code must be a string');
    this._location = value;
  }

  [Symbol.toPrimitive](cast) {
    if (cast === 'string') return this.location;
    return this.size;
  }
}
