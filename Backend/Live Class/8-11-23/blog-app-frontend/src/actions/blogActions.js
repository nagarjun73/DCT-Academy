import axios from '../config/axios'

const setMyBlogs = (blog) => {
  return {
    type: "UPDATE_BLOGS",
    payload: blog
  }
}

export const startGetBlogs = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get('/api/blogs/my-blogs')
      dispatch(setMyBlogs(result.data))
    } catch (e) {
      alert(e)
    }
  }
}

export const startCreateBlog = ({ formData, navigate, resetForm }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/blogs', formData)
      console.log(response.data)
      dispatch(addMyBlogs(response.data))
      resetForm()
      navigate(`/blogs/${response.data._id}`)
    } catch (e) {
      dispatch(formErrors(e.response.data.errors))
    }
  }
}

const addMyBlogs = (data) => {
  return {
    type: "ADD_BLOG",
    payload: data
  }
}

const formErrors = (message) => {
  return {
    type: "UPDATE_ERRORS",
    payload: message
  }
}

export const editBlog = (id) => {
  return {
    type: "UPDATE_EDIT",
    payload: id
  }
}

export const startDeleteBlog = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/blogs/${id}`)
      dispatch(updateDeletedBlog(response.data._id))
    } catch (e) {
      alert(e.message)
    }
  }
}

const updateDeletedBlog = (id) => {
  return {
    type: "DELETE_BLOG",
    payload: id
  }
}

export const startStatusCheck = (str) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/blogs/status/${str}`)
      dispatch(filterStatus(response.data))
    } catch (e) {
      alert(e.message)
    }
  }
}

const filterStatus = (data) => {
  return {
    type: "FILTER_STATUS",
    payload: data
  }
}

