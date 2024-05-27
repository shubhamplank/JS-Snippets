import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { store } from './app/store'

import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from './redux'

function App() {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.list)

  const handleAddTask = () => {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9), // Generate random ID
      title: `Task ${tasks.length + 1}`,
    }
    dispatch(addTask(newTask))
  }

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId))
  }

  return (
    <div className="App">
      <h1>Tasks</h1>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
