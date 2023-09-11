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
  const [searchRes, setSearchRes] = useState([])

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


  function autofillInputs() {
    const nameFormatted = name.replaceAll(" ", "%20")
    console.log(nameFormatted)
    if (nameFormatted) {
      axios.get(`https://api.geoapify.com/v1/geocode/search?text=${nameFormatted}&format=json&apiKey=de80eb3914e44b11ad5f6128504f83f1`)
        .then((res) => {
          console.log(res.data.results)
          if (res.data.results.length) {
            setSearchRes(res.data.results)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  function resultClickFun(ele) {
    const resObj = ele
    if (resObj.name) {
      setName(resObj.name)
    }
    if (resObj.street) {
      setStreet(resObj.street)
    }
    if (resObj.postcode) {
      setPostcode(resObj.postcode)
    }
    if (resObj.city) {
      setCity(resObj.city)
    }
    if (resObj.state) {
      setState(resObj.state)
    }
    if (resObj.country) {
      setCountry(resObj.country)
    }
    setSearchRes([])
  }

  return (
    <form onSubmit={addSubmitHandle}>
      <label>Name</label> <br />
      <input type="text" value={name} onBlur={autofillInputs} onChange={(e) => setName(e.target.value)} /><br />

      {searchRes.length !== 0 &&
        <ul style={{
          zIndex: "3",
          position: 'absolute',
          backgroundColor: "white",
          borderStyle: "solid",
          borderBlockWidth: "1px",
          borderRadius: '5px',
          padding: "5px"
        }}>
          {searchRes.map((ele) => {
            return <li
              style={{ listStyleType: "none" }}
              key={ele.place_id}
              onClick={(e) => resultClickFun(ele)}
            >{ele.formatted}</li>
          })}
        </ul>}

      <label>Street</label><br />
      <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} /><br />

      <label>postcode</label><br />
      <input type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} /><br />

      <label>city</label><br />
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /><br />

      <label>state</label><br />
      <input type="text" value={state} onChange={(e) => setState(e.target.value)} /><br />

      <label>country</label><br />
      <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} /><br />

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