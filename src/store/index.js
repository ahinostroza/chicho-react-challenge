import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer : rootReducer
})

export default store
