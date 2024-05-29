import React, { useState, useCallback, useRef } from 'react'
import ChildComponent from './ChildComponent'

// useCallback examples
function ParentComponent() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={increment} />
    </div>
  )
}

function ButtonClickCounter() {
  const [count, setCount] = useState(0)

  // Memoized callback using useCallback
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  return (
    <div>
      <h1>Button Click Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

// Ref examples
function TextInputWithFocusButton() {
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <h1>Text Input with Focus Button</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus on Input</button>
    </div>
  )
}

function PreviousValueDisplay() {
  const [value, setValue] = useState('')
  const prevValueRef = useRef('')

  const handleChange = (event) => {
    prevValueRef.current = value
    setValue(event.target.value)
  }

  return (
    <div>
      <h1>Previous Value Display</h1>
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValueRef.current}</p>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}
