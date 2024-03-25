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
    result = fn(result, this[i], i, this);
  }
  return result;
};
//------------------------------------------------------------------------------------
const flatten = value => {
  const result = [];
  const copy = value.slice();

  while(copy.length){
    let item = copy.shift();
    if(Array.isArray(item)){
      copy.unshift(...item);
    }else{
      result.push(item)
    }
    return result;
  }

  const flatten_in_place = value => {
    for(let i =0; i < value.length;){
      if(Array.isArray(value[i]){
        value[i]=value.splice(i, 1, ...value[i])
      }else { 
        i++'
      }
    }
  }
//------------------------------------------------------------------------------------
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
console.log([1, 8, 2, 4]._includes(8))
