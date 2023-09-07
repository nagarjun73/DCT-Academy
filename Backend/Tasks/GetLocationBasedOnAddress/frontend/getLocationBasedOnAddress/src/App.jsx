import { useReducer, useEffect, useContext, createContext } from 'react'
import MapComp from './components/map'
import FormComponent from './components/FormComponent'
import axios from 'axios'

export const PlacesContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case "SET_POSITION": {
      return { ...state, position: action.payload }
    }

    case "FETCH_MAP": {
      const pos = action.payload.map((ele) => [Number(ele.lat), Number(ele.lon)])
      return { ...state, position: pos }
    }
    default: {
      return { ...state }
    }
  }
}

function App() {
  const initialState = {
    position: []
  }
  const [places, placesDispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('http://localhost:3075/api/places')
      .then((res) => {
        placesDispatch({ type: "FETCH_MAP", payload: res.data })
      })
  }, [])

  return (
    <PlacesContext.Provider value={{ places, placesDispatch }}>
      <div>
        <FormComponent />
        <MapComp />
      </div>
    </PlacesContext.Provider>

  )
}

export default App
