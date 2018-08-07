require('..'); // Require ArrayUtil
const array = ['This', 'is', 'an', 'awesome', 'array']; // The array to chunk

console.log(array.chunk(2)); // => [ [ 'This', 'is' ], [ 'an', 'awesome' ], [ 'array' ] ]