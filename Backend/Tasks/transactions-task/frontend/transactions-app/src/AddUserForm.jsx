import axios from "axios"
import { useContext, useState } from "react"
import { TransactionContext } from "./App"
import { Link } from "react-router-dom"

export default function AddUserForm(props) {
  const { state, dispatch } = useContext(TransactionContext)
  const [username, setUsername] = useState('')
  const [amount, setAmount] = useState('')

  function addUserSubmitHandle(e) {
    e.preventDefault()
    axios.post("http://localhost:3075/api/users", { name: username, balance: amount })
      .then((res) => {
        dispatch({ type: "ADD_USER", payload: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function selectUserFun(id) {
    axios.get(`http://localhost:3075/api/users/${id}`)
      .then((res) => {
        dispatch({ type: "USER_DETAIL_ID", payload: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly' }}>
      <div>
        <h1>Add User</h1>
        <form onSubmit={addUserSubmitHandle}>
          <label>Username</label> <br />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />

          <label>Amount</label><br />
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} /><br />

          <input type="submit" />
        </form>
      </div>
      <div>
        <h1>Users</h1>
        <ul>
          {state.users.map((ele) => {
            return <li key={ele._id}><Link to="/user" onClick={() => selectUserFun(ele._id)}>{ele.name} - {ele.balance}</Link></li>
          })}
        </ul>
      </div>
    </div>
  )
}