export default function ContactDetails(props){
  const {selected, closeButtonHandle} = props
  return(
    <div className="card">
      <h3>{selected.name}</h3>
      <h1>{selected.number}</h1>
      <p>{selected.email}</p>
      <button onClick={closeButtonHandle}>close</button>
    </div>
  )
}