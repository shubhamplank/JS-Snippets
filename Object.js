const mapKeys = (obj, fn) => Object.keys(obj).reduce((acc, key) => (acc[fn(obj[key], key)] = obj[key], acc), {})

const mapValues = (obj, fn) => Object.keys(obj).reduce((acc, key) => (acc[key] = fn(obj[key], key, obj), acc), {})

const omit = (obj, keys) => Object.keys(obj).filter(key => !(keys.includes(key))).reduce((acc, key) => (acc[key] = obj[key], acc), {})

const omitBy = (obj, fn) => Object.keys(obj).reduce((acc, key) => (!fn(obj[key]) ? acc[key] = obj[key] : null, acc), {})

<<<<<<< HEAD
const hasKey = (obj, keys) => keys.reduce((acc, key) => (acc = key in acc ? acc[key] : {}), obj)
let obj = {
    a: 1,
    b: { c: [{ y: 1 }] },
    'b.d': 5
};

let demo = hasKey(obj, ['b', 'c', 'y']);
console.log(demo)
=======

const deepGet = (obj, keys) => keys.reduce((acc, key) => (acc = acc && acc[key] !== null && acc[key] !== undefined ? acc[key] : null, acc), obj)


let index = 2;
const data = {
    foo: {
        foz: [1, 2, 3],
        bar: {
            baz: ['a', 'b', 'c']
        }
    }
};
deepGet(data, ['foo', 'foz', index]); // get 3
deepGet(data, ['foo', 'bar', 'baz', 8]); // null


let demo = deepGet(data, ['foo', 'bar', 'baz', 6]); // get 3
console.log(demo)

>>>>>>> 5704e583e6a2744e1ab7ef6a0361258012a33f09
