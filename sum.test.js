const test = require('node:test');
const assert = require('node:assert');
const { sumar } = require('./sum');

test('sumar 2 + 3 da 5', () => {
  assert.strictEqual(sumar(2, 3), 5);
});