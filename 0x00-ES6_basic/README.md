# :book: 0x00. ES6 Basics
## Topics Covered
1. ES6 i.e ECMAScript 2015.
2. Node.js and NPM

## Project setup
```bash
# Create a new node project
npm init -y

# Install babel core for project
npm install --save-dev @babel/core

# Add babel presets (babel plugins and config options)
npm install --save-dev @babel/preset-env

# Create babel config file
touch babel.config.js

# Install babel-node for project
npm install --save-dev @babel/node

# Run js file using babel node
npx babel-node <js filename>

# Run js file using package.json script
npm run dev <filename>

# Install eslint for liniting js file
npm install --save-dev eslint

# Setup eslint configuration
npx eslint --init # or
npm init @eslint/config

# Lint a folder with js file or lint a js file.
npx eslint <folder | filename>

# Fix a js file lint issue
npx eslint <folder | filename> --fix

# Install Jest as development dependecy.
npm install --save-dev jest
npm uninstall --save-dev jest

npm install --save-dev jest@27.0.0

# Run jest test
npm run test

# Install @babel/jest
# npm install --save-dev babel-jest
# npm uninstall --save-dev babel-jest
```

## Project tasks
**[0. Const or let?](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/0-constants.js)**
- function taskFirst to instantiate variables using const.
- function taskNext to instantiate variables using let.
```es6
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```
### check style
`npm run lint 0-constants.js`

#### Execution
`npm run dev executables/0-main.js`

---

**[1. Block Scope](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/1-block-scoped.js)**

Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.
```es6
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```
### check style
`npm run lint 1-block-scoped.js`

#### Execution
`npm run dev executables/1-main.js`

---

**[2. Arrow functions](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/2-arrow.js)**

Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)
```es6
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```
### check style
`npm run lint 2-arrow.js`

#### Execution
`npm run dev executables/2-main.js`

---

**[3. Parameter defaults](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/3-default-parameter.js)**

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.
```es6
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```
### check style
`npm run lint 3-default-parameter.js`

#### Execution
`npm run dev executables/3-main.js`

---

**[4. Rest parameter syntax for functions](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/4-rest-parameter.js)**

Modify the following function to return the number of arguments passed to it using the rest parameter syntax
```es6
export default function returnHowManyArguments() {

}
```
### check style
`npm run lint 4-rest-parameter.js`

#### Execution
`npm run dev executables/4-main.js`

---

**[5. The wonders of spread syntax](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/5-spread-operator.js)**

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
```es6
export default function concatArrays(array1, array2, string) {
}
```
### check style
`npm run lint 5-spread-operator.js`

#### Execution
`npm run dev executables/5-main.js`

---

**[6. Take advantage of template literals](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/6-string-interpolation.js)**

Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

```es6
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```
### check style
`npm run lint 6-string-interpolation.js`

#### Execution
`npm run dev executables/6-main.js`

---

**[7. Object property value shorthand syntax](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/7-getBudgetObject.js)**

Notice how the keys and the variable names are the same?

Modify the following function’s budget object to simply use the keyname instead.
```es6
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```
### check style
`npm run lint 7-getBudgetObject.js`

#### Execution
`npm run dev executables/7-main.js`
