// usage curry
const add = (x, y, z) => x + y + z;
console.log(curry(add)(3)(9)(3));

// usage compose
const sum = (x) => x + 5;
const multiply = (x) => x * 3;
const sub = (x) => x - 2;

const doCompose = compose(sum, multiply, sub)(10);
const doPipe = pipe(sum, multiply, sub)(10);
console.log(doCompose, doPipe);
