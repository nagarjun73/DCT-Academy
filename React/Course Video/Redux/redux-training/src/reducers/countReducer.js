const countIntitialState = 0

const countReducer = (state = countIntitialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1
    }
    case "DECREMENT": {
      return state - 1
    }

    case "RESET": {
      return countIntitialState
    }

    case "INCREMENT_BY": {
      return state + action.payload
    }

    default: {
      return state
    }
  }
}

export default countReducer