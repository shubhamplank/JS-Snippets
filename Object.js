const mapKeys = (obj, fn) => Object.keys(obj).reduce((acc, key) => (acc[fn(obj[key], key)] = obj[key], acc), {})

const mapValues = (obj, fn) => Object.keys(obj).reduce((acc, key) => (acc[key] = fn(obj[key], key, obj), acc), {})

const omit = (obj, arr) => Object.keys(obj).filter(key => !(arr.includes(key))).reduce((acc, key) => (acc[key] = obj[key], acc), {})

const omitBy = (obj, fn) => Object.keys(obj).reduce((acc, key) => (!fn(obj[key]) ? acc[key] = obj[key] : null, acc), {})

let demo = omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number')
console.log(demo)