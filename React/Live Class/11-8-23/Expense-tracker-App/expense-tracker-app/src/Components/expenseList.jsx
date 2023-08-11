import { useState, useEffect } from "react"
import EditExpenseForm from "./EditExpenseForm"

function ExpenseList(props){
  const {expenses, addEditedObj} = props
  const[selectedExp, setSelectedExp] = useState({})
  const[selected, setSelected] = useState(false)
  const[editable, setEditable] = useState(false)

  function expenseClickHandle(ele){
    setSelectedExp(ele)
    setSelected(!selected)
  }

  function manipulateFun(){
    setSelected(!selected)
    setEditable(!editable)
  }

  return(
    <div>
      <h2>ExpenseList</h2>
      {selected && 
      <dialog open>
        {!editable ? (
          <div>
        <h3>date - {selectedExp.date}</h3>
        <p>description - <strong>{selectedExp.description}</strong></p>
        <label>Amount</label>
        <h3>{selectedExp.amount}</h3>
        <p>{selectedExp.category}</p>
        <p>{selectedExp.notes}</p>
        <button onClick={() => {setEditable(!editable)}}>edit</button>
        <button onClick={() => {setSelected(!selected)}}>close</button>
          </div>) : 
        <EditExpenseForm selectedExp={selectedExp}  manipulateFun={manipulateFun} editable={editable} addEditedObj={addEditedObj}/>}
      </dialog>}
      <ul>
        {expenses.map((ele, i) => {
        return (
          <li key={i}>
            <a href="#" onClick={() => expenseClickHandle(ele)}><span>{new Date(ele.date).toLocaleString()}</span> &nbsp; &nbsp; 
            <span>{ele.description}</span> &nbsp; &nbsp;
            <span>{ele.amount}</span></a>
          </li>
        )
      })}
      </ul>
      
    </div>
  )
}

export default ExpenseList