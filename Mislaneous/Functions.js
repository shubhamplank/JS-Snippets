const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((result, fn) => fn(result), value);

const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((result, fn) => fn(result), value);

const sum = (x) => x + 5;
const multiply = (x) => x * 3;
const sub = (x) => x - 2;

const doCompose = compose(sum, multiply, sub)(10);
const doPipe = pipe(sum, multiply, sub)(10);
console.log(doCompose, doPipe);

//-------------------------------------------------

const currify = (fn) => {
  const curried = (...args) =>
    args.length < fn.length
      ? (...more) => curried(...args, ...more)
      : fn(...args);
  return curried;
};

const add = (x, y, z) => x + y + z;
console.log(currify(add)(3)(9)(3));



//-------------------------------------------------
const debounce = function (fn, delay) {
  let id = null;
  return function (...args) {
    clearTimeout(id)
    id = setTimeout(() => fn.apply(this, args), delay);
  };
};

const throttle = function (fn, delay) {
  let lock = false;
  return function(...args){
    if(!lock){
      lock = true;
      fn.apply(this, args);
      setTimeout(() => lock = false, delay)
    }
  }
}

