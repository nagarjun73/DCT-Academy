import { useSelector } from 'react-redux'

export default function Show(props) {
  const count = useSelector((state) => {
    return state.count
  })
  return (
    <div>
      <h3>Count - {count}</h3>
    </div>
  )
}