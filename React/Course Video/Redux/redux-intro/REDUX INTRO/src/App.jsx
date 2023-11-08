import { createStore, combineReducers } from 'redux'

function App() {
  //initial state
  const countInitialState = 0

  //action creators
  const increment = () => {
    return {
      type: "INCREMENT"
    }
  }

  const decrement = () => {
    return {
      type: "DECREMENT"
    }
  }

  const reset = () => {
    return {
      type: "RESET"
    }
  }

  const incremetBy = (n) => {
    return {
      type: "INCREMENT_BY", payload: n
    }
  }

  //reducer function
  const countReducer = (state = countInitialState, action) => {
    if (action.type === "INCREMENT") {
      return state + 1
    } else if (action.type === "DECREMENT") {
      return state - 1
    } else if (action.type === "RESET") {
      return countInitialState
    } else if (action.type === "INCREMENT_BY") {
      return state + action.payload
    } else {
      return state
    }
  }

  //store
  const store = createStore(combineReducers({
    count: countReducer
  }))
  console.log(store.getState())

  //keep track of state changes
  store.subscribe(() => {
    console.log(store.getState())

  })

  store.dispatch(increment())

  store.dispatch(increment())

  store.dispatch(decrement())

  store.dispatch(reset())

  store.dispatch(incremetBy(5))

  return (
    <div>
      Hii
    </div>
  )
}
export default App