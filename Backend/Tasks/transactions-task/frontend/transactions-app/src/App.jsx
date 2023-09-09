import { useReducer, useEffect, createContext } from 'react'

const TransactionContext = createContext()

function App() {
  const initialState = {
    transactions: [],
    users: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <TransactionContext.Provider value={{ state, dispatch }}>
        <h1>hii</h1>
      </TransactionContext.Provider>
    </div>
  )
}

export default App
