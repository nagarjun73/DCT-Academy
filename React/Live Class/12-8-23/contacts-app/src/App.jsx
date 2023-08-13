import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import ContactDetails from './components/ContactDetails'
import SearchComponent from './components/SearchComponent'

function App() {
  const [contacts, setContacts] = useState(localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : [])
  console.log(contacts)
  const[selected, setSelected] = useState({})
  const[edited, setEdited] = useState({})
  const[isEditable, setIsEditable] = useState(false)
  const[filtered, setFiltered] = useState([])


  useEffect(() => {
    localStorage.setItem('contacts',  JSON.stringify(contacts))
  },[contacts])


  function addContact(obj){
    setContacts([obj, ...contacts])
  }

  function editContact(obj){
    const newContacts = contacts.map((ele) => {
      if(ele.id === obj.id){
        return obj
      }else{
        return ele
      }
    })
    setContacts(newContacts)
    setIsEditable(!isEditable)
  }
  
  function showDetailBtnHandle(ide){
    const selectedContact = contacts.find((ele) => {
      return ele.id === ide
    })
    setSelected(selectedContact)
  }

  function closeButtonHandle(){
    setSelected({})
  }

  function editContactHandle(obj){
    setEdited(obj)
    setIsEditable(!isEditable)
  }

  function deleteContactHandle(id){
    const newContacts = contacts.filter((ele) => {
      return ele.id !== id
    })
    setContacts(newContacts)
  }

  function findSearchedIteam(str){
    const filteredSearch = contacts.filter((ele) => {
      return ele.name.toLowerCase().includes(str.toLowerCase())
    })
    setFiltered(filteredSearch)
  }

  return (
    <div>
      <h1 className='d-flex justify-content-center mb-5'>CONTACTS APP</h1>
      <div className='main-container'>
        <div>
      <h3>Contacts - <span className="badge bg-primary rounded-pill">{contacts.length}</span></h3>
      <SearchComponent findSearchedIteam={findSearchedIteam}/>
      <ContactList contacts={contacts} showDetailBtnHandle={showDetailBtnHandle} editContactHandle={editContactHandle} deleteContactHandle={deleteContactHandle} filtered={filtered}/>
        </div>
      {Object.keys(selected).length !== 0 && <ContactDetails selected={selected} closeButtonHandle={closeButtonHandle}/>}
        <div >
      <ContactForm addContact={addContact} edited={edited} isEditable={isEditable} editContact={editContact} contacts={contacts}/>
        </div>
      </div>
    </div>
  )
}

export default App
