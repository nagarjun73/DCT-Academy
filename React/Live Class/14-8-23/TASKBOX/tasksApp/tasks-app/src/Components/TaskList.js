import TaskItem from './TaskItem'

export default function TaskList(props) {
      const { tasks, editTask, deleteTask } = props

      return (
        <div>
          <h1 className='display-6 mb-3'>Total tasks <span className="badge rounded-pill text-bg-primary fw-light">{tasks.length}</span></h1>
          <ul className="list-group">
            {tasks.map((ele) => {
              return <TaskItem key={ele._id} {...ele} editTask={editTask} deleteTask={deleteTask} tasks={tasks} />
            })}
          </ul>
        </div>
      )
    }