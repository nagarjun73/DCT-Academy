import { useState, useEffect } from "react"

function EditExpenseForm(props){
  const {selectedExp, editable, manipulateFun,  addEditedObj} = props
  const[selectedExpe, setSelectedExpe] = useState(selectedExp)
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState(0)
  const[category, setCategory] = useState('')
  const[notes, setNotes] = useState('')
  const[editables, setEditables] = useState(editable)

  useEffect(() => {
    if(selectedExpe){
      setDesc(selectedExpe.description)
      setAmount(selectedExpe.amount)
      setCategory(selectedExpe.category)
      setNotes(selectedExpe.notes)
    }
  }, [selectedExpe])

  function dialogueSubmitHandle(e){
    e.preventDefault()
    const editedObj = {
      id:selectedExpe.id,
      date:selectedExpe.date,
      description:desc,
      amount:amount,
      category:category,
      notes:notes
    }
    addEditedObj(editedObj)
    manipulateFun()
  }

  return(
    <div>
    {editables && <div>
        <form onSubmit={dialogueSubmitHandle}>
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
        <button onClick={() => {manipulateFun()}}>close</button>
      </div>}
      </div>
  )
}

export default EditExpenseForm