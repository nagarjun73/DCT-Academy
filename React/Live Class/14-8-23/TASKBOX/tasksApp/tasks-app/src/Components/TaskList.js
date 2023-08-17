import TaskItem from './TaskItem'

export default function TaskList(props) {
      const { tasks, editTask, deleteTask } = props

      return (
        <div>
          <h1>Total tasks <span className="badge rounded-pill text-bg-primary">{tasks.length}</span></h1>
          <ul className="list-group">
            {tasks.map((ele) => {
              return <TaskItem key={ele._id} {...ele} editTask={editTask} deleteTask={deleteTask} tasks={tasks} />
            })}
          </ul>
        </div>
      )
    }