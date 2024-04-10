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

#### check style
`npm run lint 0-promise.js`
or
`npx eslint 0-promise.js`

#### Execution
`npm run dev executables/0-main.js`

---

### [1. Don't make a promise...if you know you can't keep it](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/1-promise.js)

Using the prototype below, return a promise. The parameter is a boolean.
**`getFullResponseFromAPI(success)`**

When the argument is:
- **__true__**
resolve the promise by passing an object with 2 attributes:
    - `status: 200`
    - `body: 'Success'`
- **__false__**
reject the promise with an error object with the message **`The fake API is not working currently`**

#### check style
`npm run lint 1-promise.js`
or
`npx eslint 1-promise.js`

#### Execution
`npm run dev executables/1-main.js`

---

### [2. Catch me if you can!](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/2-then.js)

Using the function prototype below

**`function handleResponseFromAPI(promise)`**

Append three handlers to the function:

When the Promise resolves, return an object with the following attributes
`status: 200`
`body: success`
When the Promise rejects, return an empty `Error` object
For every resolution, log `Got a response from the API` to the console

#### check style
`npm run lint 2-then.js`
or
`npx eslint 2-then.js`

#### Execution
`npm run dev executables/2-main.js`
