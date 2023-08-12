import { useEffect, useState } from "react"
import ExpenseList from "./expenseList"
import AddExpenseForm from "./AddExpenseForm"
import PieChart from "./chartJS"

function Dashboard(props) {
  const{username, expenses, addEditedObj, addObj, logoutHandler} = props
  const[addPopUp, setAddPopUp] = useState(false)


    function addExpHandle(){
      setAddPopUp(!addPopUp)
    }

    function remExpHandle(){
      setAddPopUp(!addPopUp)
    }

      return (
        <div>
          <h1>Dashboard</h1>
          <h3>Welcome - {username}</h3> 
          <button onClick={() => logoutHandler()}>Log out</button>
          <button onClick={addExpHandle}>Add Expense</button>
          {addPopUp && <AddExpenseForm addObj={addObj} remExpHandle={remExpHandle}/>}
          {expenses.length !== 0 && <PieChart expenses={expenses}/>}
          <ExpenseList expenses={expenses} addEditedObj={addEditedObj} />
        </div>
      )
    }

export default Dashboard