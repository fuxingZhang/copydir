# copydir
Copy files from one directory to another by nodejs

## Install

```sh
$ npm i @zhangfuxing/copydir
```  

## Useage  

### use nodejs fs  

```js
const copydir = require('@zhangfuxing/copydir');
const src = './test/src';
const dest = './test/dest';

(async () => {
  await copydir(src, dest);
})().catch(console.error);
```  

## Test

```sh
$ npm test
```  