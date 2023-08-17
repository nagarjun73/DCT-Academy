import { useState } from "react"
import axios from "axios"

export default function TaskItem(props) {
      const { _id, title, description, isCompleted, dueDate, editTask, deleteTask, tasks } = props
      const [completed, setCompleted] = useState(isCompleted)

      function editHandle(e) {
        setCompleted(e.target.checked)
        const editedObj = {
          isCompleted: !isCompleted
        }

        axios.put(`http://localhost:3033/api/tasks/${_id}`, editedObj)
          .then((res) => {
            const dataUpdate = tasks.map((ele) => {
              if (res.data._id === ele._id) {
                return res.data
              } else {
                return ele
              }
            })
            editTask(dataUpdate)
          })
          .catch((err) => {
            console.log(err);
          })

      }

      function deleteHandle(e) {
        axios.delete(`http://localhost:3033/api/tasks/${_id}`)
          .then((res) => {
            const data2 = tasks.filter((ele) => {
              if (ele._id !== _id) {
                return ele
              }
            })
            deleteTask(data2)
          })
      }

      return (
        <li className="list-group-item"><span>{title}</span>&nbsp; &nbsp;<span><input type="checkbox" checked={completed} onChange={editHandle} /></span>&nbsp;&nbsp;
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg></a>
          <button className="btn-close" onClick={deleteHandle}></button></li>
      )
    }