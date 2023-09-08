import { useContext, useState } from "react"
import { PlacesContext } from "../App"

export default function SelectionComp(props) {
  const { places, placesDispatch } = useContext(PlacesContext)
  const [catSelect, setCatSelect] = useState('')
  const [citySelect, setCitySelect] = useState('')
  console.log(catSelect, citySelect, "state")

  const cities = places.place.reduce((ini, fin) => {
    if (!ini.includes(fin.city)) {
      ini.push(fin.city)
    }
    return ini
  }, [])

  function findButtonHandle() {
    const foundPlaces = places.place.filter((ele) => {
      return ele.categoryId == catSelect && String(ele.city) == citySelect
    })
    console.log(foundPlaces)
    placesDispatch({ type: "FOUND_PLACES", payload: foundPlaces })
    placesDispatch({ type: "SELECT_CITY", payload: foundPlaces[0] })

  }

  return (
    <div>
      <select onChange={(e) => setCatSelect(e.target.value)}>
        <option value="">select category</option>
        {places.categories.map((ele) => {
          return <option key={ele._id} value={ele._id}>{ele.name}</option>
        })}
      </select>
      <select onChange={(e) => setCitySelect(e.target.value)}>
        <option value="">select city</option>
        {cities.map((ele, i) => {
          return <option key={i} value={ele}>{ele}</option>
        })}
      </select>
      <button onClick={findButtonHandle}>Find</button>
    </div>
  )
}