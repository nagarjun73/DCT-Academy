import { useSelector, useDispatch } from "react-redux"
import { deleteUser } from '../actions/userAction'
import { editUserId } from '../actions/userAction'

export default function Table(props) {
  const dispatch = useDispatch()

  const users = useSelector((state) => {
    return state.users
  })

  const onClickHandle = (id) => {
    const confirmed = confirm()
    if (confirmed) {
      dispatch(deleteUser(id))
    }
  }

  const editClickHandle = (id) => {
    dispatch(editUserId(id))
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>gender</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((ele) => {
            return <tr key={ele.id}>
              <td>{ele.name}</td>
              <td>{ele.gender}</td>
              <td>
                <button onClick={() => editClickHandle(ele.id)}>e</button>
                <button onClick={() => onClickHandle(ele.id)}>x</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}