require('..'); // Require ArrayUtil
const array = ['This', 'is', 'an', 'awesome', 'array']; // The array to trim

console.log(array.trim(2)); // => [ 'This', 'is', '3 more...' ]