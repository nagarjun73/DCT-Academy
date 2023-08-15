import TableList from "./TableList"


export default function TableComponent(props){
  const{data} = props
  return(
    <table className="table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Date</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Maximum marks</th>
          <th>Maximum obtained</th>
          <th>Correct Questions</th>
          <th>incorrect Questions</th>
          <th>skipped Questions</th>
          <th>Total time(min)</th>
          <th>Time per Questions(s)</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele, i) =>{
          return <TableList key={i} ele={ele}/>
        })}
      </tbody>
    </table>
  )
}