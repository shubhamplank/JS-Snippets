// Lodash style utils : debounce, curry, compose

const debounce = function (fn, delay) {
  let id = null
  return function (...args) {
    clearTimeout(id)
    id = setTimeout(() => fn.apply(this, args), delay)
  }
}

const throttle = function (fn, delay) {
  let lock = false
  return function (...args) {
    if (!lock) {
      lock = true
      fn.apply(this, args)
      setTimeout(() => (lock = false), delay)
    }
  }
}

// ---------------------------------------------------------------
const curry = (fn) => {
  const curried = (...args) =>
    args.length < fn.length
      ? (...more) => curried(...args, ...more)
      : fn(...args)
  return curried
}

// ---------------------------------------------------------------
const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((result, fn) => fn(result), value)

const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((result, fn) => fn(result), value)

//-----------------------Deep Equal--------------------------

// 1. Check that both objects have the same keys:
// ---a. Both objects have the same number of keys.
// ---b. All of the first object's keys exist in the other object.
// 1. Recursively check that the each key's value are the same.

// Approach 1: with Primitive first approach
const deepEqual = (valueA, valueB) => {
  // Check primitives for equality.
  if (Object.is(valueA, valueB)) {
    return true
  }

  const bothObjects =
    Object.prototype.toString.call(valueA) === '[object Object]' &&
    Object.prototype.toString.call(valueB) === '[object Object]'
  const bothArrays = Array.isArray(valueA) && Array.isArray(valueB)

  // At this point, they can still be primitives but of different types.
  // If they had the same value, they would have been handled earlier in Object.is().
  // So if they're not both objects or both arrays, they're definitely not equal.
  if (!bothObjects && !bothArrays) {
    return false
  }

  // Compare the keys of arrays and objects.
  if (Object.keys(valueA).length !== Object.keys(valueB).length) {
    return false
  }
  for (const key in valueA) {
    if (!deepEqual(valueA[key], valueB[key])) {
      return false
    }
  }

  // All checked have passed, the arrays/objects are equal.
  return true
}

// Approach 2:  with array/objects first approach
function shouldDeepCompare(type: string) {
  return type === '[object Object]' || type === '[object Array]'
}

function getType(value: unknown): string {
  return Object.prototype.toString.call(value)
}

const deepEqual2 = (valueA: unknown, valueB: unknown): boolean => {
  // Check for arrays/objects equality.
  const type1 = getType(valueA)
  const type2 = getType(valueB)

  // Only compare the contents if they're both arrays or both objects.
  if (type1 === type2 && shouldDeepCompare(type1) && shouldDeepCompare(type2)) {
    const entriesA = Object.entries(valueA as Array<unknown> | Object)
    const entriesB = Object.entries(valueB as Array<unknown> | Object)

    if (entriesA.length !== entriesB.length) {
      return false
    }

    return entriesA.every(
      // Make sure the other object has the same properties defined.
      ([k, v]) =>
        Object.hasOwn(valueB as Array<unknown> | Object, k) &&
        deepEqual(v, (valueB as any)[k])
    )
  }

  // Check for primitives + type equality.
  return Object.is(valueA, valueB)
}

// ------------ Deep clone-----------------------------
function deepClone<T>(value: T): T {
  if (typeof value !== 'object' || value === null) {
    return value
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item)) as T
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)])
  ) as T
}
