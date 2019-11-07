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
const dir = 'xxx';

(async () => {
  await copydir(dir);
})().catch(console.error);
```  

### use shell by nodejs child_process
```js
const copydir = require('@zhangfuxing/copydir/lib/shell');
const dir = 'xxx';

(async () => {
  await copydir(dir);
})().catch(console.error);
```  

## Test

```sh
$ npm test
```  