import { PropTypes } from 'prop-types'

export default function List(props) {
  const { users, type } = props
  return (
    <div>
      <h3>Listing {type} - {users.length}</h3>
      <ul>
        {users.map((ele) => <li key={ele.id}>{ele.name}</li>)}
      </ul>
    </div>
  )
}

List.propTypes = {
  type: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
}