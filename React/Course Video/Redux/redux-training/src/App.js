import React from 'react'
import NumbersContainer from './components/NumbersApp/NumbersContainer'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import Home from './Home'
import UsersList from './UsersList'

export default function App(props) {
  return (
    <div>
      <BrowserRouter>
        <h1>Random number generator</h1>
        <NumbersContainer />

        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}




// import { useSelector, useDispatch } from 'react-redux'
// import { increment } from './actions/countActions'
// import Btn from './Btn'
// import Show from './Show'

// const App = () => {
//   const count = useSelector((state) => {
//     return state.count
//   })

//   const dispatch = useDispatch()
//   return (
//     <div>
//       <h1>Redux training - count - {count}</h1>
//       <button onClick={() => {
//         dispatch(increment())
//       }}>+1</button>
//       <Btn />
//       <Show />
//     </div>
//   )
// }

// export default App