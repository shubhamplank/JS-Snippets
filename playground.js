import React, { useState, useEffect, useCallback } from 'react'

const useToggle = (on) => {
  const [toggle, setToggle] = useState(on)
  const handleToggle = () => setToggle((prev) => !prev)

  return [toggle, handleToggle]
}

const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounced(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debounced
}

const useDebounceFn = (fn, delay) => {
  const debouncedFn = useRef(null)

  return useCallback(
    (...args) => {
      clearTimeout(debouncedFn.current)
      debouncedFn.current = setTimeout(() => {
        fn.call(...args)
      }, delay)
    },
    [fn, delay]
  )
}

class _Promise {
  constructor(executor) {
    this.state = 'pending'
    try {
      executor(this._resolve.bind(this), this._reject.bind(this))
    } catch (err) {
      this._reject(err)
    }
  }

  _resolve(value) {
    if (this.state !== 'pending') return
    this.state = 'fulfilled'
    this.result = value
    queueMicrotask(() => {
      if (this.onFulfillled === undefined) return

      try {
        const returnValue = this.onFulfillled(this.result)
        const isReturnvaluePromise = returnValue instanceof _Promise

        if (isReturnvaluePromise) {
          returnValue.then(this.thenPromiseResolve, this.thenPromiseReject)
        } else {
          this.thenPromiseResolve(returnValue)
        }
      } catch (error) {
        this.thenPromiseReject(error)
      }
    })
  }

  _reject(error) {
    if (this.state !== 'pending') return
    this.state = 'rejected'
    this.result = error
    queueMicrotask(() => {
      if (this.onRejected === undefined) return

      try {
        const returnValue = this.onRejected(this.result)
        const isReturnvaluePromise = returnValue instanceof _Promise

        if (isReturnvaluePromise) {
          returnValue.then(this.thenPromiseResolve, this.thenPromiseReject)
        } else {
          this.thenPromiseResolve(returnValue)
        }
      } catch (error) {
        this.thenPromiseReject(error)
      }
    })
  }

  then(onFulfillled, onRejected) {
    this.onFulfillled =
      typeof onFulfillled === 'function' ? onFulfillled : (value) => value

    this.onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (error) => {
            throw error
          }

    return new _Promise((resolve, reject) => {
      this.thenPromiseResolve = resolve
      this.thenPromiseReject = reject
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  static resolve(value) {
    if (!(value instanceof _Promise)) {
      return value
    }
    return new _Promise((resolve, reject) => {
      resolve(value)
    })
  }
  static reject(error) {
    return new _Promise((_, rej) => {
      rej(error)
    })
  }

  static race(iterable) {
    return new _Promise((resolve, reject) => {
      if (iterable.length === 0) {
        return
      }

      iterable.forEach(async (item) => {
        try {
          const result = await item
          resolve(result)
        } catch (err) {
          reject(err)
        }
      })
    })
  }

  static any(iterable) {
    return new _Promise((resolve, reject) => {
      if (iterable.length === 0) {
        return
      }
      let errorResult = []

      iterable.forEach(async (item) => {
        try {
          const p = await item
          resolve(p)
        } catch (err) {
          reject(err)
        }
        if (result.length === 0) {
          reject()
        }
      })
    })
  }
  static all(iterable) {
    return new _Promise((resolve, reject) => {
      if (iterable.length === 0) {
        return
      }
      let result = []
      iterable.forEach(async (item) => {
        try {
          const p = await item
          result.push(p)
        } catch (err) {
          reject(err)
        }
      })
      if (result.length === iterable.length) {
        resolve(result)
      }
    })
  }
  static allSettled(iterable) {
    return new _Promise((resolve, reject) => {
      if (iterable.length === 0) {
        return
      }

      iterable.forEach(async (item) => {
        try {
          const result = await item
          resolve(result)
        } catch (err) {
          reject(err)
        }
      })
    })
  }
}
