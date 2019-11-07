const assert = require('assert');
const copydir = require('../lib');

describe('#indexOf()', function () {
  const src = './test/src';
  const dest = './test/dest';
 
  it('copydir should ok', async () => {
    try {
      await copydir(src, dest);
    } catch (error) {
      assert(false);
    }
  });
});