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

# Run jet test
npm run test

# Install @babel/jest
# npm install --save-dev babel-jest
# npm uninstall --save-dev babel-jest
```

## Projects tasks
**[0. Const or let?](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/0-constants.js)**
#### File modifications:
- function taskFirst to instantiate variables using const.
- function taskNext to instantiate variables using let.

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

---

**[4. Rest parameter syntax for functions](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/4-rest-parameter.js)**

Modify the following function to return the number of arguments passed to it using the rest parameter syntax

```es6
export default function returnHowManyArguments() {

}
```

---

**[5. The wonders of spread syntax](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/5-spread-operator.js)**

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

```es6
export default function concatArrays(array1, array2, string) {
}
```
