Array.prototype._every = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i])) return false;
  }
  return true;
};
Array.prototype._some = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) return true;
  }
  return false;
};
Array.prototype._find = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) return this[i];
  }
  return false;
};
Array.prototype._findIndex = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) return i;
  }
  return false;
};

Array.prototype._includes = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (value === this[i]) return true;
  }
  return false;
};

Array.prototype._indexOf = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (value === this[i]) return i;
  }
  return -1;
};
console.log([1, 8, 2, 4]._includes(8));
