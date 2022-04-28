Array.prototype._map = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }
  return result;
};
Array.prototype._filter = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) result.push(this[i]);
  }
  return result;
};
Array.prototype._forEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};
Array.prototype._reduce = function (fn, initial) {
  let result = initial;
  for (let i = 0; i < this.length; i++) {
    result = fn(result, this[i], i , this);
  }
  return result;
};

console.log([1, 2, 4]._filter(x=>x%2==0));
