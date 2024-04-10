import handleProfileSignup from '../6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

/* 
[
    {
      status: 'fulfilled',
      value: { firstName: 'Bob', lastName: 'Dylan' }
    },
    {
      status: 'rejected',
      reason: Error: bob_dylan.jpg cannot be processed
          at uploadPhoto (/home/ehab/alx/alx-backend-javascript/0x01-ES6_promise/5-photo-reject.js:2:25)
          at handleProfileSignup (/home/ehab/alx/alx-backend-javascript/0x01-ES6_promise/6-final-user.js:7:62)
          at Object.<anonymous> (/home/ehab/alx/alx-backend-javascript/0x01-ES6_promise/executables/6-main.js:3:32)
          at Module._compile (internal/modules/cjs/loader.js:999:30)
          at Module._compile (/home/ehab/alx/alx-backend-javascript/0x01-ES6_promise/node_modules/pirates/lib/index.js:117:24)
          at Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
          at Object.newLoader [as .js] (/home/ehab/alx/alx-backend-javascript/0x01-ES6_promise/node_modules/pirates/lib/index.js:121:7)
          at Module.load (internal/modules/cjs/loader.js:863:32)
          at Function.Module._load (internal/modules/cjs/loader.js:708:14)
          at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    }
  ] */
