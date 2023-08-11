import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/dashboard'
import Login from './Components/login'

function App() {
  const [ifLogged, setIfLogged] = useState(false)
  const[username, setUsername] = useState('')
  const [users, setUsers] = useState([{ name: 'nagarjun', password: 'secret123' }, { name: 'nagarjun1211', password: 'secret1234' }])
  const [expenses, setExpenses] = useState(sessionStorage.getItem('expenses') ? JSON.parse(sessionStorage.getItem('expenses')) : [])

      // useEffect(() => {
        
      // },[])

      useEffect(() => {
        sessionStorage.setItem('expenses', JSON.stringify(expenses))
      },[expenses])

      function logToggler(name) {
        setIfLogged(!ifLogged)
        setUsername(name)
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
          {!ifLogged ? <Login logToggler={logToggler} users={users} /> : <Dashboard username={username} expenses={expenses} addEditedObj={addEditedObj} addObj={addObj}/>}
        </div>
      )
}

export default App
