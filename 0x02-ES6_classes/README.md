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
