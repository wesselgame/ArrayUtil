const sift = require('./deps/sift');

class ArrayUtil extends Array {
  constructor() {
    super();

    Array.prototype.chunk = this.chunk;
    Array.prototype.close = this.close;

  }
  
  chunk(length = 1) {
    let i, chunks;
    i = 0;
    chunks = [];
    
    if (!Array.isArray(this)) throw new TypeError('Must provide a valid array');
    while (i < this.length) {
      chunks.push(this.slice(i, i += length));
    }

    return chunks;
  }

  close(string, treshhold = 3) {
    let distance, match, array;
    if (!string || !Array.isArray(this)) throw new TypeError('Must provide a valid array');
    array = new Array(this);

    for (let i = 0, candidate; candidate = array[i]; i++) {
      if (string === candidate) return string;
      const measurement = sift(string, candidate);
      if (!distance || measurement < distance) {
        distance = measurement;
        match = candidate;
      }
    }

    if (distance > treshhold) return false;
    return match[0];
  }
};

module.exports = new ArrayUtil();