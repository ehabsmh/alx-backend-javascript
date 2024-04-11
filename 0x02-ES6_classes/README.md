# :book: 0x02-ES6_classes

## Topics Covered
1. ES6 i.e ECMAScript 2015.
2. ES6 Classes

## Project setup
```bash
# Install dependancies in the package.json
npm install
```

#### check style
`npm run lint file_name`
or
`npx eslint file_name`

#### Execution
`npm run dev executables/file_name`

## Project tasks

### [0. You used to attend a place like this at some point](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x02-ES6_classes/0-classroom.js)

Implements a class named **`ClassRoom`** that accepts one attribute.

---

### [1. Let's make some classrooms](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x02-ES6_classes/1-make_classrooms.js)

Implements a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

---

### [2. A Course, Getters, and Setters](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x02-ES6_classes/2-hbtn_course.js)

- Implements a class named `HolbertonCourse`:

Constructor attributes:

    - name (String)
    - length (Number)
    - students (array of Strings)

- Type of attributes during object creation are verified.
- Each attribute stored in an “underscore” attribute version.
- a getter and setter for each attribute is implemented.

---

### [3. Methods, static methods, computed methods names..... MONEY](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x02-ES6_classes/3-currency.js)

Implement a class named `Currency`:

- Constructor attributes:
    - `code` (String)
    - `name` (String)
Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
Implement a getter and setter for each attribute.
Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`.

---

### [4. Pricing](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x02-ES6_classes/4-pricing.js)


Import the class `Currency` from `3-currency.js`

Implement a class named `Pricing`:

- Constructor attributes:
    - `amount` (Number)
    - `currency` (Currency)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
- Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.

---

### [5. A Building](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x02-ES6_classes/5-building.js)

Implement a class named `Building`:

- Constructor attributes:
`sqft` (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter for each attribute.
- Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
    - If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

---

### [6. Inheritance](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x02-ES6_classes/6-sky_high.js)

Import `Building` from `5-building.js`.

Implement a class named `SkyHighBuilding` that extends from `Building`:

- Constructor attributes:
    - `sqft` (Number) (must be assigned to the parent class `Building`)
    - `floors` (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter for each attribute.
- Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the @NUMBER_OF_FLOORS floors`.

---

### [7. Airport](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x02-ES6_classes/7-airport.js)

Implement a class named `Airport`:

- Constructor attributes:
    - `name` (String)
    - `code` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- The default string description of the class should return the airport `code` (example below).

---

### [8. Primitive - Holberton Class](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x02-ES6_classes/8-hbtn_class.js)

Implement a class named `HolbertonClass`:

- Constructor attributes:
    - `size` (Number)
    - `location` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- When the class is cast into a `Number`, it should return the size.
- When the class is cast into a `String`, it should return the location.

---

### [9. Hoisting](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x02-ES6_classes/9-hoisting.js)

Fix this code and make it work.

```es6
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];
```

Result:
```es6
bob@dylan:~$ cat 9-main.js
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)
```
