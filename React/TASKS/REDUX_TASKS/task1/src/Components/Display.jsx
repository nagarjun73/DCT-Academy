import { useSelector } from 'react-redux'
import Table from './Table'
import List from './List'

export default function Display(props) {
  const users = useSelector((state) => {
    return state.users
  })

  return (
    <div>
      <h2>Listing Users - {users.data.length}</h2>
      <Table />
      <List users={users.data.filter((ele) => ele.gender == "male")} type={'male'} />
      <List users={users.data.filter((ele) => ele.gender == "female")} type={'female'} />
    </div>
  )
}