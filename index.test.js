const assert = require('assert');
const add = require('./index.js');

assert.strictEqual(add(2,3),5,'Test Case 1 failed');
console.log('Test case 1 passed');

assert.strictEqual(add(-1, -4), -5, 'Test Case 2 Failed');
console.log('Test Case 2 Passed!');

console.log('All tests passed successfully!');