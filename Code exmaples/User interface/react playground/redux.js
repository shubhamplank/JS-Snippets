import { configureStore, createSlice } from '@reduxjs/toolkit'

// Define a slice for managing tasks
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload)
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload)
    },
  },
})

// Extract action creators from the slice
export const { addTask, removeTask } = tasksSlice.actions

// Create the Redux store
export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
})
