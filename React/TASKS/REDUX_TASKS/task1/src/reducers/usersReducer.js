const usersInitialState = {
  data: [],
  editUserId: '',
  serverErrors: ''
}

export default function usersReducer(state = usersInitialState, action) {
  switch (action.type) {
    case "ADD_USER": {
      return { ...state, data: [...state.data, action.payload] }
    }

    // case "ADD_INPUT": {
    //   return { ...state, input: action.payload }
    // }

    case "DELETE_USER": {
      return {
        ...state, data: state.data.filter((ele) => {
          return ele.id !== action.payload
        })
      }
    }

    case "UPDATE_EDIT_ID": {
      return { ...state, editUserId: action.payload }
    }

    case "UPDATE_EDITED_USER": {
      return {
        ...state, data: state.data.map((ele) => {
          if (ele.id == action.payload.id) {
            return { ...ele, ...action.payload }
          } else {
            return { ...ele }
          }
        }), editUserId: ''
      }
    }

    case "UPDATE_SERVER_ERRORS": {
      return { ...state, serverErrors: action.payload }
    }

    default: {
      return { ...state }
    }
  }
}