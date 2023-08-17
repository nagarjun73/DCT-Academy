export default function OverdueDateTask(props) {
      const { tasks } = props
      const dates = tasks.filter((ele) => {
        return new Date(ele.dueDate) < new Date() && ele.isCompleted == false
      })


      return (
        <div>
          <h2>Duedate Tasks</h2>
          <ul className="list-group">
            {dates.map((ele, i) => {
              return <li className="list-group-item" key={i}>{ele.title} - {ele.dueDate} - {ele.isCompleted ? 'Completed' : 'Incomplete'}</li>
            })}
          </ul>
        </div>
      )
    }