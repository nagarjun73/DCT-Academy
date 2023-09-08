import { useContext, useEffect, useState } from "react"
import { UserContext } from "./App"
import axios from "axios"

export default function DisplayComp(props){
  const{state, dispatch} = useContext(UserContext)
  const[id, setId] = useState(state.user.id)
  const[name, setName] = useState(state.user.name)
  const[email, setEmail] = useState(state.user.email)


  // useEffect(()=>{
  //   if(Object.keys(state.user).length){
  //     setId(state.user.id)
  //     setName(state.user.name)
  //     setEmail(state.user.email)
  //   }
  // },[state.user])

  function editFormSubmit(e){
    e.preventDefault()
    const edtObj = {
      id:id,
      name,
      email
    }

    axios.put(`http://localhost:3033/api/users/${id}`, edtObj)
      .then((res)=>{
        dispatch({type:"EDIT_USER", payload:res.data})
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  function deleteButtonhandle(){
    axios.delete(`http://localhost:3033/api/users/${id}`)
      .then((res)=>{
        console.log('Checked');
        dispatch({type:"DELETE_USER", payload:res.data})
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  return(
    <div>
      {!state.isEdit ? 
      <div>
        <h3>Name - {state.user.name}</h3>
        <h3>Email - {state.user.email}</h3>
        <button onClick={()=> dispatch({type:"EDIT_USER", payload:!state.isEdit})}>edit</button>
        <button onClick={deleteButtonhandle}>delete</button>

      </div> : 
      <div>
        <form onSubmit={editFormSubmit}>
          <label>Id</label><br/>
          <input disabled type="text" value={id}/><br/>

          <label>Name</label><br/>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/><br/>

          <label>Email</label><br/>
          <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/><br/>

          <input type="submit"/>
        </form>
      </div>}
    </div>
  )
}