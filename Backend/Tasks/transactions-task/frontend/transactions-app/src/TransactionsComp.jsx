import { useContext, useEffect, useState } from "react"
import { TransactionContext } from './App'
import axios from "axios"

function TransactionsComp(props) {
  const { state, dispatch } = useContext(TransactionContext)
  const [senderId, setSenderId] = useState('')
  const [receiverId, setReceiverId] = useState('')
  const [amount, setAmount] = useState('')

  useEffect(() => {
    if (senderId) {
      axios.get(`http://localhost:3075/api/users/${senderId}`)
        .then((res) => {
          setAmount(res.data.balance)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [senderId])

  function sendMoneyFormHandle(e) {
    e.preventDefault()
    const transObj = {
      senderId,
      receiverId,
      amount: Number(amount)
    }
    axios.post('http://localhost:3075/api/transactions', transObj)
      .then((res) => {
        dispatch({ type: "ADD_TRANSACTION", payload: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
      <form onSubmit={sendMoneyFormHandle}>
        <h1>Send Money</h1>
        <select onChange={(e) => setSenderId(e.target.value)}>
          <option value="">select a sender</option>
          {!receiverId ? state.users.map((ele) => {
            return <option key={ele._id} value={ele._id}>{ele.name}</option>
          }) :
            state.users.filter((ele) => ele._id !== receiverId).map((ele) => {
              return <option key={ele._id} value={ele._id}>{ele.name}</option>
            })
          }
        </select>

        <select onChange={(e) => setReceiverId(e.target.value)}>
          <option value="">select a receiver</option>
          {!senderId ? state.users.map((ele) => {
            return <option key={ele._id} value={ele._id}>{ele.name}</option>
          }) :
            state.users.filter((ele) => ele._id !== senderId).map((ele) => {
              return <option key={ele._id} value={ele._id}>{ele.name}</option>
            })}
        </select> <br />

        <label>Amount</label><br />
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} /><br />

        <input type="submit" value="Send" />
      </form>
      <div>
        <h1>Transactions</h1>
        <ul>
          {state.transactions.sort((a, b) => new Date(b.transactionTime) - new Date(a.transactionTime)).map((ele) => {
            return <li key={ele._id}>{state.users.find((els) => els._id == ele.senderId).name} - {ele.amount} - {state.users.find((els) => els._id == ele.receiverId).name}
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default TransactionsComp;