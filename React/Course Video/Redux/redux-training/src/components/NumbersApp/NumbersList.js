import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementnumber } from '../../actions/numbersAction'

export default function NumbersList(props) {
  const dispatch = useDispatch()
  const numbers = useSelector((state) => {
    return state.numbers
  })

  const incrementNumberHandle = (id) => {
    dispatch(incrementnumber(id))
  }
  return (
    <div>
      {numbers.map((num) => {
        return <li key={num.id}>{num.value}
          <button onClick={() => incrementNumberHandle(num.id)}>+</button>
          <button>-</button>
          <button>x</button>
        </li>
      })}
    </div>
  )
}