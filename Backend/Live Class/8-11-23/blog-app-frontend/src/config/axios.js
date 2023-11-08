import axios from 'axios'

export default axios.create({
  baseURL: "http://localhost:3075",
  headers: {
    "Authorization": localStorage.getItem('token')
  }
})