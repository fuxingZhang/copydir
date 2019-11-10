const assert = require('assert');
const copydir = require('../lib');

describe('#indexOf()', function () {
  const src = './test/src';
  const dest = './test/dest';
  const destIncludeSrc = './test/dest_src';
 
  it('copydir should ok', async () => {
    try {
      await copydir(src, dest);
    } catch (error) {
      assert(false);
    }
  });

  it('copydir should ok', async () => {
    try {
      await copydir(src, destIncludeSrc, true);
    } catch (error) {
      assert(false);
    }
  });
});