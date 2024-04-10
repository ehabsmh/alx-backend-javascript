# :book: 0x00. ES6 Basics
## Topics Covered
1. ES6 i.e ECMAScript 2015.
2. Node.js and NPM

## Project setup
```bash
# Install dependancies in the package.json
npm install
```

## Project tasks

### [0. Keep every promise you make and only make promises you can keep](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/0-promise.js)

Returns a Promise using this prototype **`function getResponseFromAPI()`**

---

### [1. Don't make a promise...if you know you can't keep it](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/0-promise.js)

Using the prototype below, return a promise. The parameter is a boolean.
**`getFullResponseFromAPI(success)`**

When the argument is:
- **__true__**
resolve the promise by passing an object with 2 attributes:
    - `status: 200`
    - `body: 'Success'`
- **__false__**
reject the promise with an error object with the message **`The fake API is not working currently`**
