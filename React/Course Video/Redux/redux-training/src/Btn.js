import { useDispatch } from "react-redux"
import { increment } from './actions/countActions'

export default function Btn(props) {
  const dispatch = useDispatch()
  return (
    <button onClick={() => {
      dispatch(increment())
    }}>Compo inc</button>
  )
} 