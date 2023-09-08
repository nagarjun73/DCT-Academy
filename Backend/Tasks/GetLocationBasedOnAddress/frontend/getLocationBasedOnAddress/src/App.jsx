import { useReducer, useEffect, useContext, createContext } from 'react'
import MapComp from './components/map'
import FormComponent from './components/FormComponent'
import SelectionComp from './components/SelectionComp'
import axios from 'axios'

export const PlacesContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case "SET_POSITION": {
      return { ...state, place: [...state.place, action.payload] }
    }

    case "FETCH_MAP": {
      // const pos = action.payload.map((ele) => [Number(ele.lat), Number(ele.lon)])
      console.log(action.payload)
      return { ...state, place: [...action.payload], foundPlaces: [], selectedCity: [] }
    }

    case "FETCH_CAT": {
      return { ...state, categories: [...action.payload] }
    }

    case "FOUND_PLACES": {
      return { ...state, foundPlaces: [...action.payload], selectedCity: [Number(action.payload.lat), Number(action.payload.lon)] }
    }

    case "SELECT_CITY": {
      return { ...state, selectedCity: [Number(action.payload.lat), Number(action.payload.lon)] }
    }
    default: {
      return { ...state }
    }
  }
}

function App() {
  const initialState = {
    place: [],
    categories: [],
    foundPlaces: [],
    selectedCity: []
  }
  const [places, placesDispatch] = useReducer(reducer, initialState)
  console.log(places)

  useEffect(() => {
    // axios.get('http://localhost:3075/api/places')
    //   .then((res) => {
    //     placesDispatch({ type: "FETCH_MAP", payload: res.data })
    //   })
    const placeReq = axios.get('http://localhost:3075/api/places')
    const catReq = axios.get('http://localhost:3075/api/categories')
    axios.all([placeReq, catReq])
      .then(axios.spread((...res) => {
        placesDispatch({ type: "FETCH_MAP", payload: res[0].data })
        placesDispatch({ type: "FETCH_CAT", payload: res[1].data })
      }))
  }, [])

  return (
    <PlacesContext.Provider value={{ places, placesDispatch }}>
      <div>
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly" }}>
          <FormComponent />
          <SelectionComp />
        </div>
        {places.place.length && <MapComp />}
      </div>
    </PlacesContext.Provider>

  )
}

export default App
