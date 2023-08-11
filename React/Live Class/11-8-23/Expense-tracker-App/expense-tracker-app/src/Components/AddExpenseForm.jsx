import { useState } from "react"
import '../App.css'

function AddExpenseForm(props){
  const {addObj, remExpHandle} = props
  const[date, setDate] = useState('')
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState(0)
  const[category, setCategory] = useState('')
  const[notes, setNotes] = useState('')


  function dialogueSubmitHandle(e){
    e.preventDefault()
    const editedObj = {
      id:Number(new Date()),
      date:date,
      description:desc,
      amount:+amount,
      category:category,
      notes:notes
    }
    addObj(editedObj)
    remExpHandle()
  }

  return(
    <dialog open className="dialogue">
    <form onSubmit={dialogueSubmitHandle}>
        <label>Date</label><br />
        <input type='datetime-local' value={date} onChange={(e) => setDate(e.target.value)}/> <br />
        <label>Description</label><br />
        <input type='text' value={desc} onChange={(e) => setDesc(e.target.value)}/> <br />
        <label>Amount</label><br />
        <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/> <br />
        <label>category</label><br />
        <input type='text' value={category} onChange={(e) => setCategory(e.target.value)}/> <br />
        <label>notes</label><br />
        <input type='text' value={notes} onChange={(e) => setNotes(e.target.value)}/> 
        <input type="submit"/>
    </form>
    </dialog>
  )
}

export default AddExpenseForm