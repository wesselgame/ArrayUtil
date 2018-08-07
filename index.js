const sift = require('./deps/sift');

class ArrayUtil extends Array {
  constructor() {
    super();
    
    Array.prototype.list = this.list;
    Array.prototype.trim = this.trim;
    Array.prototype.chunk = this.chunk;
    Array.prototype.close = this.close;

  }

  list(conj = 'and') {
    if (!Array.isArray(this)) throw new TypeError('Must provide a valid array');
    const len = this.length;
    return `${this.slice(0, -1).join(', ')}${len > 1 ? ` ${conj} ` : ''}${this.slice(-1)}`;
  }

  trim(length = 1) {
    if (!Array.isArray(this)) throw new TypeError('Must provide a valid array');
    let array = this;
    if (array.length > length) {
      const prevLen = array.length - length;
      array = array.slice(0, length);
      array.push(`${prevLen} more...`);
    }
    
    return array;
  }

  chunk(length = 1) {
    if (!Array.isArray(this)) throw new TypeError('Must provide a valid array');
    let i, chunks;
    i = 0;
    chunks = [];
    
    while (i < this.length) {
      chunks.push(this.slice(i, i += length));
    }

    return chunks;
  }

  close(string, treshhold = 3) {
    if (!string || !Array.isArray(this)) throw new TypeError('Must provide a valid array');
    let distance, match, array;
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