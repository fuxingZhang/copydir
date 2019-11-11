# copydir
Copy files from one directory to another by nodejs

## Install

```sh
$ npm i @zhangfuxing/copydir
```  

## Options  
```js
/**
 * copy files from one directory to another
 *   - `src` source directory
 *   - `dest` destination directory
 *   - `includeSrc` Whether to include the source folder, default: false
 */
declare function copydir(src: string, dest: string, includeSrc?: boolean): Promise<void>  
```

## Useage  

### Doesn't include the source folder

```js
const copydir = require('@zhangfuxing/copydir');
const src = './test/src';
const dest = './test/dest';

(async () => {
  await copydir(src, dest);
})().catch(console.error);
```  

### Including the source folder

```js
const copydir = require('@zhangfuxing/copydir');
const src = './test/src';
const dest = './test/dest';

(async () => {
  await copydir(src, dest, true);
})().catch(console.error);
```  

## Test

```sh
$ npm test
```  