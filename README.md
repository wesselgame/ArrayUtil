# ArrayUtil v0.0.1
Adds some utility functions to Arrays

## Installation
Using NPM:
```sh
npm i -g npm
npm i array-utility
```
Using Yarn:
```sh
npm i yarn -g
yarn add array-utility
```

## Examples
#### Chunk up an Array
```js
require('array-utility'); // Require Array-Utility
const array = ['This', 'is', 'an', 'awesome', 'array']; // The array to chunk

console.log(array.chunk(2)); // => [ [ 'This', 'is' ], [ 'an', 'awesome' ], [ 'array' ] ]
```
#### Find closest match in an Array
```js
require('array-utility'); // Require Array-Utility
const array = ['This', 'is', 'an', 'awesome', 'array']; // The array to check

console.log(array.close('thiss', 3)); // => This
```

> If you need any support, feel free to join https://discord.gg/SV7DAE9
> You can support the creator at https://patreon.com/wessel