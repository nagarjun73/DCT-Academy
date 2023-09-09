import { Link } from "react-router-dom"
import { useContext } from "react"
import { TransactionContext } from "./App"

export default function UserDetails(props) {
  const { state, dispatch } = useContext(TransactionContext)
  console.log(state, 'DETAILS')

  return (
    <div>
      <h1>{state.userDetailObj.name}</h1>
      <h2>Balance - Rs {state.userDetailObj.balance}</h2>
      <div>
        <h1>Sent transactions</h1>
        <ul>
          {state.transactions.filter((ele) => ele.senderId == state.userDetailObj._id).map((els) => {
            return <li key={els._id}>Rs <strong>{els.amount}</strong> to {state.users.find((ele) => ele._id == els.receiverId).name}</li>
          })}
        </ul>
      </div>
      <div>
        <h1>Received transactions</h1>
        <ul>
          {state.transactions.filter((ele) => ele.receiverId == state.userDetailObj._id).map((els) => {
            return <li key={els._id}>Rs <strong>{els.amount}</strong> from {state.users.find((ele) => ele._id == els.senderId).name} </li>
          })}
        </ul>
      </div>
      <button><Link to="/">Home</Link></button>
    </div>
  )
}