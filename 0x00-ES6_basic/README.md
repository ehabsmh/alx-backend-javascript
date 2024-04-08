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
[0. Const or let?](https://github.com/ehabsmh/alx-backend-javascript/blob/main/0x00-ES6_basic/0-constants.js)

### File modifications:
- function taskFirst to instantiate variables using const
- function taskNext to instantiate variables using let
