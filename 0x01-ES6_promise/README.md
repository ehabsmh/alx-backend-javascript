# :book: 0x01-ES6_promise

## Topics Covered
1. ES6 i.e ECMAScript 2015.
2. Asynchronous Javascript and Promises

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

---

### [3. Handle multiple successful promises](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/3-all.js)

**`function handleProfileSignup()`**

- imports uploadPhoto and createUser from utils.js
- logs body firstName lastName to the console.

#### check style
`npm run lint 3-all.js`
or
`npx eslint 3-all.js`

#### Execution
`npm run dev executables/3-main.js`

---

### [4. Simple promise](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/4-user-promise.js)

Using the following prototype that returns a resolved promise:

**`function signUpUser(firstName, lastName) {}`**

#### check style
`npm run lint 4-user-promise.js`
or
`npx eslint 4-user-promise.js`

#### Execution
`npm run dev executables/4-main.js`

---

### [5. Reject the promises](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/5-photo-reject.js)

Write and export a function named uploadPhoto. It should accept one argument fileName (string).

The function should return a Promise rejecting with an Error and the string $fileName cannot be processed

**`export default function uploadPhoto(filename) {}`**

#### check style
`npm run lint 5-photo-reject.js`
or
`npx eslint 5-photo-reject.js`

#### Execution
`npm run dev executables/5-main.js`

---

### [6. Handle multiple promises](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/6-final-user.js)

Import `signUpUser` from **`4-user-promise.js`** and `uploadPhoto` from **`5-photo-reject.js`**.

Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

#### check style
`npm run lint 6-final-user.js`
or
`npx eslint 6-final-user.js`

#### Execution
`npm run dev executables/6-main.js`

---

### [7. Load balancer](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/7-load_balancer.js)

Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise).

The function should return the value returned by the promise that resolved the first.

---

### [8. Throw error / try catch](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/8-try.js)

Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).

When the `denominator` argument is equal to `0`, the function should throw a new error with the message `cannot divide by 0`. Otherwise it should return the numerator divided by the denominator.

---

### [9. Throw an error](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/9-try.js)

Write a function named `guardrail` that will accept one argument `mathFunction` (Function).

This function should create and return an array named `queue`.

When the `mathFunction` function is executed, the value returned by the function should be appended to the `queue`. If this function throws an error, the error message should be appended to the `queue`. In every case, the message `Guardrail was processed` should be added to the `queue`.

---

### [10. Await / Async](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x01-ES6_promise/100-await.js)

Import `uploadPhoto` and `createUser` from **`utils.js`**

Write an async function named `asyncUploadUser` that will call these two functions and return an object with the following format:

```es6
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
```
If one of the async function fails, return an empty object. Example:
```es6
{
  photo: null,
  user: null,
}
```
