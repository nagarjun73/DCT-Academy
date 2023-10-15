import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [selUser, setSelUser] = useState({})
  const [createBlog, setCreateBlog] = useState('')
  const [editBlog, setEditBlog] = useState('')
  const [deleteBlog, setDeleteBlog] = useState('')

  console.log(users, selUser, createBlog, editBlog, deleteBlog)

  useEffect(() => {
    axios.get("http://localhost:3030/api/users/list", {
      headers: {
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTNmM2MzMzBiYzNlMjcxYzZkZmMzMCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NTg4NDY2NiwiZXhwIjoxNjk2NDg5NDY2fQ.5O-6wyrxXibkyu574De0Xqc_tBBvL7eDETNJybVlbFY"
      }
    })
      .then((res) => {
        setUsers(res.data.slice(-1))
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <div>
      <h1>Admin Panel</h1>
      <form>
        <select onChange={(e) => setSelUser(e.target.value)}>
          <option value="">select User</option>
          {users.map((ele, i) => {
            return <option key={i} value={ele.username}>{ele.username}</option>
          })}
        </select> <br />
        <input type='checkbox' checked={users.find((ele) => ele.username == selUser)?.role.includes("createBlog") ? true : false} onChange={(e) => setCreateBlog(e.target.checked)} /><label>create blog</label><br />
        <input type='checkbox' checked={users.find((ele) => ele.username == selUser)?.role.includes("editBlog") ? true : false} onChange={(e) => setEditBlog(e.target.checked)} /><label>edit blog</label><br />
        <input type='checkbox' checked={users.find((ele) => ele.username == selUser)?.role.includes("deleteBlog") ? true : false} onChange={(e) => setDeleteBlog(e.target.checked)} /><label>delete blog</label><br />
      </form>
    </div>
  );
}

export default App;
