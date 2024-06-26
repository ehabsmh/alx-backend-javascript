export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== typeof ('')) throw new TypeError('Name must be a string');
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== typeof (0)) throw new TypeError('Length must be a number');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (typeof value !== typeof ([])) throw new TypeError('students must be an array of Strings');
    this._students = value;
  }
}
