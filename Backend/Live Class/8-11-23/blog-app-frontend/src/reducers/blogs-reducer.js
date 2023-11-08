const initialBlogsState = {
  data: [],
  serverErrors: [],
  isLoading: true,
  editId: '',
  blogShow: {},

}

export default function blogsReducer(state = initialBlogsState, action) {
  switch (action.type) {
    case "UPDATE_BLOGS": {
      return { ...state, data: [...action.payload] }
    }

    case "ADD_BLOG": {
      return { ...state, data: [...state.data, action.payload], serverErrors: [] }
    }

    case "UPDATE_ERRORS": {
      console.log(action.payload)
      return { ...state, serverErrors: [...action.payload] }
    }

    case "UPDATE_EDIT": {
      return { ...state, editId: action.payload }
    }

    case "DELETE_BLOG": {
      return { ...state, data: state.data.filter(ele => ele._id !== action.payload) }
    }

    case "FILTER_STATUS": {
      return { ...state, data: action.payload }
    }

    default: {
      return { ...state }
    }
  }
}