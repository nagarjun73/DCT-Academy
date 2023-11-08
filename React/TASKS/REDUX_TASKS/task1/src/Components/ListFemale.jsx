export default function ListFemale(props) {
  const { users } = props
  const females = users.data.filter((ele) => ele.gender == 'female')
  return (
    <div>
      <h3>Listing Female - {females.length}</h3>
      <ul>
        {females.map((ele) => <li key={ele.id}>{ele.name}</li>)}
      </ul>
    </div>
  )
}