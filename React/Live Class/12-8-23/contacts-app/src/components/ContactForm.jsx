import { useEffect, useState } from "react"

export default function ContactForm(props){
  const {addContact, editContact , edited, isEditable, contacts} = props
  const[name, setName] = useState('')
  const[number, setNumber] = useState('')
  const[email, setEmail] = useState('')
  const[formErrors, setFormErrors] = useState({})
  const errors = {}

   const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  function formValidation(){
    if(name.length === 0){
      errors.name = 'Name required'
    }

    if(number.length === 0){
      errors.number = 'Number required'
    }else if(number.length !== 10){
      errors.number = "Number should be 10 digits"
    }

    if(email.length ===0 && isEditable){
      errors.email = "Email required"
    }else if(!emailFormat.test(email)){
      errors.email = "Invalid Email format"
    }

    console.log(errors)
  }

  useEffect(() => {
    if(isEditable){
      setName(edited.name)
      setNumber(edited.number)
      setEmail(edited.email)
    }else{
      setName('')
      setNumber('')
      setEmail('')
    }
  }, [isEditable])

  useEffect(() => {
    if(contacts){
      setName('')
      setNumber('')
      setEmail('')
    }
    
  }, [contacts])

  function contactFormSubmit(e){
    e.preventDefault()
    formValidation()
    if(Object.keys(errors).length == 0){
      const contactObj = {
      id:Number(new Date()),
      name,
      number,
      email
    }
    addContact(contactObj)
    setFormErrors({})
    }else{
      setFormErrors(errors)
    }
    
  }

    function editSubmitHandle(e){
      e.preventDefault()
      
    const contactObj = {
      id:edited.id,
      name,
      number,
      email
    }
    editContact(contactObj)
    }

  return(
    <div>
      {isEditable ? <h2>Edit Contact</h2> : <h2>Add Contact</h2> }
    <form className="card needs-validation" onSubmit={isEditable ? editSubmitHandle : contactFormSubmit} noValidate>
      <label className="form-label">Name</label>
      <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      {formErrors.name && <span style={{color:'#FF0000'}} >{formErrors.name}</span>}<br />
      <label className="form-label">Number</label>
      <input className="form-control" type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
      {formErrors.number && <span style={{color:'#FF0000'}} >{formErrors.number}</span>}<br />
      <label className="form-label">Email</label>
      <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/> 
      {formErrors.email && <span style={{color:'#FF0000'}} >{formErrors.email}</span> }<br />
      <span className="d-flex justify-content-around">
      <input className="btn btn-primary" type="submit" value={isEditable ? 'Update' : 'add'}/>
      {isEditable && <button className="btn btn-primary">Close</button>}
      </span>
    </form>
    </div>
  )
}