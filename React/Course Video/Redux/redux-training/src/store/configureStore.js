import { createStore, combineReducers, applyMiddleware } from 'redux'
import countReducer from '../reducers/countReducer'
import numbersReducer from '../reducers/numbersReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
  const store = createStore(combineReducers({
    count: countReducer,
    numbers: numbersReducer
  }), applyMiddleware(thunk))

  return store
}

export default configureStore