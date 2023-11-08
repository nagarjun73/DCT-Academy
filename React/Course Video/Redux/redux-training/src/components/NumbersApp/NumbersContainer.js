import React from 'react'
import { useSelector } from 'react-redux'
import NumbersList from './NumbersList'
import NumbersControl from './NumbersControl'

export default function NumbersContainer(props) {
  const numbers = useSelector((state) => {
    return state.numbers
  })

  const addSum = () => {
    let total = 0
    numbers.forEach((ele) => {
      total += ele.value
    })
    return total
  }
  return (
    <div>
      <h1>Listing - {numbers.length}, Sum - {addSum()}</h1>
      <NumbersList />
      <NumbersControl />
    </div>
  )
}