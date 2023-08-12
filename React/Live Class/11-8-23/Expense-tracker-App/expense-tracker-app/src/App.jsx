import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/dashboard'
import Login from './Components/login'

function App() {
  const [ifLogged, setIfLogged] = useState(false)
  console.log(ifLogged)
  const[username, setUsername] = useState('')
  const [users, setUsers] = useState([{ name: 'nagarjun', password: 'secret123', isLogged:false }])
  const [expenses, setExpenses] = useState(localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [])

      useEffect(() => {
        const user1 = JSON.parse(sessionStorage.getItem('users'))
        console.log(user1)
        if(user1){
          setIfLogged(true)
        }
      },[])

      useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
      },[expenses])

      useEffect(() => {
        if(ifLogged){
          users[0].isLogged = !users[0].isLogged
          sessionStorage.setItem('users', JSON.stringify(users))
        }
      },[ifLogged])

      function logToggler(name) {
        setIfLogged(!ifLogged)
        setUsername(name)
      }

      function logoutHandler(){
        setIfLogged(!ifLogged)
        sessionStorage.removeItem('users')
      }

      function addObj(obj){
        const newExp = [obj, ...expenses]
        setExpenses(newExp)
      }
      
      function addEditedObj(obj){
        const expensesNew = [...expenses].map((ele) => {
          if(ele.id === obj.id){
            return obj
          }else{
            return ele
          }
        })
        setExpenses(expensesNew)
      }

      return (
        <div>
          {!ifLogged ? <Login logToggler={logToggler} users={users} /> : <Dashboard username={username} expenses={expenses} addEditedObj={addEditedObj} addObj={addObj} logoutHandler={logoutHandler} />}
        </div>
      )
}

export default App
