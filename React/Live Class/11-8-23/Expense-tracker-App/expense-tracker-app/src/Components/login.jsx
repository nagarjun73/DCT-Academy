    import { useState } from "react"
    
    function Login(props) {
      const { logToggler, users } = props
      const [pwInput, setPwInput] = useState('')
      const [name, setName] = useState('')

      function loginHandleFun(e) {
        e.preventDefault()
        const foundUser = users.find(ele => ele.name == name)
        if (foundUser.password == pwInput) {
          console.log('logged');
          logToggler(foundUser.name)
        } else {
          console.log('Incorrect password');
        }
      }

      return (
        <div>
          <h1>Login Page</h1>
          <form onSubmit={loginHandleFun}>
            <label>Name</label><br />
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> <br />
            <label>Password</label><br />
            <input type="password" value={pwInput} onChange={(e) => setPwInput(e.target.value)} /> <br />
            <br />
            <input type="submit" value='Login' />
          </form>
        </div>
      )
    }

    export default Login