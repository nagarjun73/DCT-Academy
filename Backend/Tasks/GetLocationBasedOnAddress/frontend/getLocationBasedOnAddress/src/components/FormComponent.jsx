import { useState, useContext } from "react"
import axios from 'axios'
import { PlacesContext } from "../App"

export default function FormComponent(props) {
  const { places, placesDispatch } = useContext(PlacesContext)

  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [postcode, setPostcode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [selectCat, setSelectCat] = useState('')

  function addSubmitHandle(e) {
    e.preventDefault()
    const addObj = {
      name,
      street,
      postcode,
      city,
      state,
      country,
      categoryId: selectCat
    }

    axios.post('http://localhost:3075/api/addresses', addObj)
      .then((res) => {
        placesDispatch({ type: "SET_POSITION", payload: [Number(res.data.lat), Number(res.data.lon)] })
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
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

      <select onChange={(e) => setSelectCat(e.target.value)}>
        <option value="">select category</option>
        {places.categories.map((ele) => {
          return <option key={ele._id} value={ele._id}>{ele.name}</option>
        })}
      </select>

      <input type="submit" />
    </form>
  )
}