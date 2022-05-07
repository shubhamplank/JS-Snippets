const mapKeys = (obj, fn) => Object.keys(obj).reduce((acc, key) => (acc[fn(obj[key], key)] = obj[key], acc), {})

const mapValues = (obj, fn) => Object.keys(obj).reduce((acc, key) => (acc[key] = fn(obj[key], key, obj), acc), {})

const omit = (obj, arr) => Object.keys(obj).filter(key => !(arr.includes(key))).reduce((acc, key) => (acc[key] = obj[key], acc), {})

const omitBy = (obj, fn) => Object.keys(obj).reduce((acc, key) => (!fn(obj[key]) ? acc[key] = obj[key] : null, acc), {})

const hasKey = (obj, keys) => keys.reduce((acc, key) => (acc = key in acc ? acc[key] : {}), obj)
let obj = {
    a: 1,
    b: { c: [{ y: 1 }] },
    'b.d': 5
};

let demo = hasKey(obj, ['b', 'c', 'y']);
console.log(demo)