import { configureStore } from '@reduxjs/toolkit'
import toDo from '../reducer/toDoApp'

export const store = configureStore({
  reducer: {
      toDo
  },
})