import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetGender, startUpdateEditedUser } from '../actions/userAction'

export default function Form(props) {
  const [user, serverErrors] = useSelector((state) => {
    return [state.users.data.find((ele) => ele.id == state.users.editUserId), state.users.serverErrors]
  })

  const [name, setName] = useState('')

  // const users = useSelector((state) => {
  //   return state.users
  // })

  useEffect(() => {
    if (user) {
      setName(user.name)
    } else {
      setName('')
    }
  }, [user])

  const dispatch = useDispatch()

  const onsubmithandle = (e) => {
    e.preventDefault()
    const formData = {
      id: user ? user.id : Number(new Date()),
      name: name
    }

    const resetForm = () => {
      setName('')
    }

    if (!user) {
      dispatch(startGetGender(formData, resetForm))
    } else {
      dispatch(startUpdateEditedUser(formData, resetForm))
    }

  }

  function clearhandle() {
    setName('')
  }

  return (
    <div>
      {serverErrors && <b style={{ color: 'red' }}>{serverErrors}</b>}
      <form onSubmit={onsubmithandle}>
        <label>Enter Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <input type={'submit'} value={!user ? 'submit' : "update"} />
      </form>
      {user && <button onClick={clearhandle}>Clear</button>}
    </div>
  )
}