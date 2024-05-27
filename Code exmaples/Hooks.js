import React, { useState, useEffect, useCallback } from 'react'

// Custom Hooks : useFetch, useDebounce, useHover, useFocus, useWindowSize

export function useToggle(on) {
  const [toggle, setToggle] = useState(on)
  const handleToggle = () => setToggle((prevState) => !prevState)

  return [toggle, handleToggle]
}

//Debounce a value

export function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debounced
}

// Debounce a function
export function useDebounce(func, delay) {
  const debouncedFunction = React.useRef(null)

  return useCallback(
    (...args) => {
      clearTimeout(debouncedFunction.current)
      debouncedFunction.current = setTimeout(() => {
        func(...args)
      }, delay)
    },
    [func, delay]
  )
}

export function App() {
  const [value, setValue] = useState(0)

  const increment = useDebounce(() => setValue((state) => state + 1), 2000)

  return (
    <>
      <div>
        <button onClick={increment}>inc</button>
        <h2>value: {value}</h2>
      </div>
    </>
  )
}
