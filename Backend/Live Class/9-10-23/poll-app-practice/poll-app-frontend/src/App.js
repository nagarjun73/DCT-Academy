import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </div>
    </BrowserRouter >
  )
}