import Display from "./Display"
import Form from './Form'
import Stats from './Stats'

export default function Container(props) {
  return (
    <div>
      <Form />
      <Display />
      <Stats />
    </div>
  )
}