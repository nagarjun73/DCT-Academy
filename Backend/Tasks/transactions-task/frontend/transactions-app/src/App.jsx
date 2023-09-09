import { useReducer, useEffect, createContext } from 'react'
import Home from './Home'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserDetails from './UserDetails'


export const TransactionContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA": {
      return { ...state, transactions: [...action.payload[0].data], users: [...action.payload[1].data] }
    }

    case "ADD_TRANSACTION": {
      return { ...state, transactions: [action.payload, ...state.transactions] }
    }

    case "UPDATE_USER": {
      return { ...state, users: [...action.payload] }
    }

    case "ADD_USER": {
      return { ...state, users: [action.payload, ...state.users] }
    }

    case "USER_DETAIL_ID": {
      return { ...state, userDetailObj: action.payload }
    }

    default: {
      return { ...state }
    }
  }
}

export default function App() {
  const initialState = {
    transactions: [],
    users: [],
    userDetailObj: {}
  }

  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
    const tran = axios.get('http://localhost:3075/api/transactions')
    const users = axios.get('http://localhost:3075/api/users')

    axios.all([tran, users])
      .then(axios.spread((...res) => {
        dispatch({ type: "FETCH_DATA", payload: res })
      }))
  }, [])

  useEffect(() => {
    axios.get("http://localhost:3075/api/users")
      .then((res) => {
        dispatch({ type: "UPDATE_USER", payload: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [state.transactions])

  return (
    <div>
      <TransactionContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/user' element={< UserDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </TransactionContext.Provider>

    </div>
  )
}


