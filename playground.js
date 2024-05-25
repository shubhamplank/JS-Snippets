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
