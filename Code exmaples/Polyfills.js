
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

// implment this (mpokket interview): 
obj.initializeVal(10).add(5).subtract(3).result()
obj.initializeVal(10).subtract(5).add(3).result()

// Solution 1: OOPs way
class Calculator {
  constructor() {
      this.value = 0;
  }

  initializeVal(val) {
      this.value = val;
      return this;
  }

  add(amount) {
      this.value += amount;
      return this;
  }

  subtract(amount) {
      this.value -= amount;
      return this;
  }

  result() {
      return this.value;
  }
}

// Usage example:
const obj = new Calculator();
console.log(obj.initializeVal(10).add(5).subtract(3).result());  // Output: 12
console.log(obj.initializeVal(10).subtract(5).add(3).result());  // Output: 8

// Solution 2:  Calculator Factory Function
function createCalculator(initialValue = 0) {
    return {
        value: initialValue,
        initializeVal: function(val) {
            return createCalculator(val);
        },
        add: function(amount) {
            return createCalculator(this.value + amount);
        },
        subtract: function(amount) {
            return createCalculator(this.value - amount);
        },
        result: function() {
            return this.value;
        }
    };
}

// Initialize the Calculator
const obj2 = createCalculator();



























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