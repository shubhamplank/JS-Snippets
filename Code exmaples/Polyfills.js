
// Polyfills : reduce, flatten, bind, Promise.all, allSettled

// extensive map and reduce 
Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const array = new Array(len);

  for (let k = 0; k < len; k++) {
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    if (Object.hasOwn(this, k)) {
      array[k] = callbackFn.call(thisArg, this[k], k, this);
    }
  }

  return array;
};

Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitialValue = initialValue === undefined;
  const len = this.length;

  if (noInitialValue && len === 0) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let acc = noInitialValue ? this[0] : initialValue;
  let startingIndex = noInitialValue ? 1 : 0;

  for (let k = startingIndex; k < len; k++) {
    if (Object.hasOwn(this, k)) {
      acc = callbackFn(acc, this[k], k, this);
    }
  }

  return acc;
};

//------------------------------------------------------------------------------------
const flatten = value => {
  const result = [];
  const copy = value.slice();

  while (copy.length) {
    let item = copy.shift();
    if (Array.isArray(item)) {
      copy.unshift(...item);
    } else {
      result.push(item)
    }
  }
  return result;
}
const flatten_in_place = value => {
  for (let i = 0; i < value.length;) {
    if (Array.isArray(value[i]){
      value[i] = value.splice(i, 1, ...value[i])
    } else {
      i++;
    }
  }
}
//------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------


Function.prototype.myBind = function (thisArg, ...argArray) {
  const fn = this;
  return function (...args) {
    return fn.apply(thisArg, [...argArray, ...args]);
  };
};

//using bind
Function.prototype.myApply = function (thisArg, argArray = []) {
  return this.bind(thisArg, ...argArray)();
};
// using call
Function.prototype.myApply = function (thisArg, argArray = []) {
  return this.call(thisArg, ...argArray);
};





























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