import { useDispatch } from 'react-redux'
import { addNumber, plusTwo, removeAll } from '../../actions/numbersAction'
export default function NumbersControl(prosp) {
  const dispatch = useDispatch()
  const generateNumber = () => {
    const randomNum = Math.round(Math.random() * 100)
    const num = {
      id: Number(new Date()),
      value: randomNum
    }
    dispatch(addNumber(num))
  }

  const addPlusTwo = () => {
    dispatch(plusTwo())
  }

  const handleremoveAll = () => {
    dispatch(removeAll())
  }

  return (

    <div>
      <button onClick={generateNumber}>Generate</button>
      <button onClick={addPlusTwo}>+2</button>
      <button onClick={handleremoveAll}>Remove All</button>
    </div>
  )
}