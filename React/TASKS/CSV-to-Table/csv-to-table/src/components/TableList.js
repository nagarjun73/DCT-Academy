export default function TableList(props){
  const{ele} = props
  return(
    <tr >
      <td>{ele.rank}</td>
      <td>{new Date(ele.date).toLocaleString()}</td>
      <td>{ele.name}</td>
      <td>{ele.email}</td>
      <td>{ele.phone}</td>
      <td>{ele.maximummarks}</td>
      <td>{ele.marksobtained}</td>
      <td>{ele.correctquestions}</td>
      <td>{ele.incorrectquestions}</td>
      <td>{ele.skippedquestions}</td>
      <td>{ele['totaltime(min)']}</td>
      <td>{ele['timeperquestion(s)']}</td>
      <td>{ele['totaltime(min)']}</td>
      <td>{ele['reacthooks-marks']}</td>
    </tr>
  )
}