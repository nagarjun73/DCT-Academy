import { useContext } from "react"
import { UserContext } from "./App"

export default function MessageComp(props){
  const{state, dispatch} = useContext(UserContext)

  return(
    <div>
      {state.notice && <p>{state.notice}</p>}
      {state.errors && <p>{state.errors}</p>}

    </div>
  )
}