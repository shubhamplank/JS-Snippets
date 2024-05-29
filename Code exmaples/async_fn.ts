const sleep = async function (duration) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

const PromiseRace = function (iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return resolve([])
    }

    iterable.forEach(async (item) => {
      try {
        let value = await item
        resolve(value)
      } catch (error) {
        reject(error)
      }
    })
  })
}

const PromiseAny = function (iterable) {
  return new Promise((resolve, reject) => {
    let result = []
    let pending = iterable.length

    if (pending === 0) {
      return resolve([])
    }

    iterable.forEach(async (item, index) => {
      try {
        let value = await item
        resolve(value)
      } catch (error) {
        result[index] = error

        if (pending === 0) {
          reject(new AggregateError(result))
        }
      }
    })
  })
}

const PromiseAll = function (iterable) {
  return new Promise((resolve, reject) => {
    let result = []
    let pending = iterable.length

    if (pending === 0) {
      return reject([])
    }

    iterable.forEach(async (item, index) => {
      try {
        let value = await item
        result[index] = value

        if (pending === 0) {
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    })
  })
}
