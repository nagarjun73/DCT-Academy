import axios from 'axios'

const setServerErrors = (msg) => {
  return {
    type: "UPDATE_SERVER_ERRORS",
    payload: msg
  }
}

export const startGetGender = (user, resetForm) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${user.name}`)
      user.gender = response.data.gender
      dispatch(addUser(user))
      resetForm()
    } catch (e) {
      dispatch(setServerErrors(e.response.data.error))
    }
  }
}


const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user
  }
}

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id
  }
}

export const addInput = (input) => {
  return {
    type: "ADD_INPUT",
    payload: input
  }
}

export const editUserId = (id) => {
  return {
    type: "UPDATE_EDIT_ID",
    payload: id
  }
}

export const startUpdateEditedUser = (data, resetForm) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${data.name}`)
      data.gender = response.data.gender
      dispatch(updateEditedUser(data))
      resetForm()
    } catch (e) {
      dispatch(setServerErrors(e.response.data.error))
    }
  }
}

const updateEditedUser = (data) => {
  return {
    type: "UPDATE_EDITED_USER",
    payload: data
  }
}