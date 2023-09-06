import { useState } from 'react'
import axios from 'axios'
import MapComp from './components/map'

function App() {
  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [postcode, setPostcode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState([12.9457315, 77.5717632])

  function addSubmitHandle(e) {
    e.preventDefault()
    const addObj = {
      name,
      street,
      postcode,
      city,
      state,
      country
    }

    axios.post('http://localhost:3075/api/addresses', addObj)
      .then((res) => {
        setPosition([Number(res.data.lat), Number(res.data.lon)])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <form onSubmit={addSubmitHandle}>
        <label>Name</label> <br />
        <input type="text" onChange={(e) => setName(e.target.value)} /><br />

        <label>Street</label><br />
        <input type="text" onChange={(e) => setStreet(e.target.value)} /><br />

        <label>postcode</label><br />
        <input type="text" onChange={(e) => setPostcode(e.target.value)} /><br />

        <label>city</label><br />
        <input type="text" onChange={(e) => setCity(e.target.value)} /><br />

        <label>state</label><br />
        <input type="text" onChange={(e) => setState(e.target.value)} /><br />

        <label>country</label><br />
        <input type="text" onChange={(e) => setCountry(e.target.value)} /><br />

        <input type="submit" />
      </form>
      <MapComp position={position} />
    </div>
  )
}

export default App
