const compose = (fns) => (value) =>
  fns.reduceRight((result, fn) => fn(result), value);

const pipe = (fns) => (value) => fns.reduce((result, fn) => fn(result), value);

const sum = (x) => x + 5;
const multiply = (x) => x * 3;
const sub = (x) => x - 2;

const doCompose = compose(sum, multiply, sub)(10);
const doPipe = piep(sum, multiply, sub)(10);
console.log(doCompose, doPipe)