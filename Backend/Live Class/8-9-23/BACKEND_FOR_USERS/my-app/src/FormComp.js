import {useState, useContext} from 'react'
import axios from 'axios'
import {UserContext} from './App'

export default function FormComp(props){
  const [id, setId] = useState('')

  const { dispatch} = useContext(UserContext)

  function userSubmitHandle(e) {
        e.preventDefault()
        axios.get(`http://localhost:3033/api/users/${id}`)
          .then((res) => {
            dispatch({type:"FETCH_USER", payload:res.data});
            setId('')
          })
          .catch((err)=>{
            dispatch({type:"ERROR", payload:err.response.data.errors});
          })
      }

  return(
    <form onSubmit={userSubmitHandle}>
      <label>User Id</label> <br/>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br/>

      <input type="submit" />
    </form>
  )
}