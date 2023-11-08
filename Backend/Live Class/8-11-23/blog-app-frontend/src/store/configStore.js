import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import blogsReducer from '../reducers/blogs-reducer'
const rootReducer = {
  blogs: blogsReducer
}

export default function configureStore() {
  const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk))
  return store
}