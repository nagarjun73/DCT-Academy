import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/usersReducer'

export default function configureStore() {
  const store = createStore(combineReducers({
    users: usersReducer
  }), applyMiddleware(thunk))

  return store
}