import {useState} from 'react'
import axios from 'axios'

export default function TaskForm(props) {
      const { addTask, tasks } = props
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')
      const [isCompleted, setIsCompleted] = useState(false)
      const [dueDate, setDueDate] = useState('')


      function addFormSubmitHandle(e) {
        e.preventDefault()

        const taskObj = {
          title,
          description,
          isCompleted,
          dueDate
        }

        axios.post('http://localhost:3033/api/tasks', taskObj)
          .then((res) => {
            const taskNew = [...tasks, res.data]
            console.log(taskNew);
            addTask(taskNew)

            //reset Form
            setTitle('')
            setDescription('')
            setIsCompleted(false)
            setDueDate('')
          })
          .catch((err) => {
            console.log(err);
          })
      }

      return (
        <div  style={{ width: '25rem', height:'100%' }}>
          <h1 className='display-6 mb-3'>Add task</h1>
          <form onSubmit={addFormSubmitHandle} className="card p-4 mt-3">
            <div>
              <label className="form-label pt-3">title</label>
              <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
              <label className="form-label pt-3">description</label>
              <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div>
              <label className="form-label pt-3">due date</label>
              <input className="form-control" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </div>

            <div className='p-3'>
              <input className="form-check-input" type="checkbox" value={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
              <label className="form-check-label px-3">Completed</label><br />
            </div>
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      )
    }