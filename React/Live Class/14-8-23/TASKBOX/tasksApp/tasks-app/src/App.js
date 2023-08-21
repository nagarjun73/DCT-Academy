import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import TaskList from './Components/TaskList'
import TaskForm from './Components/TaskForm'
import OverdueDateTask from './Components/OverdueDateTask'
import UpcomingIncompleteTask from './Components/UpcomingIncompleteTask'
import GrouppingTask from './Components/GrouppingTask'
// import CalenderComponent from './Components/CalenderComponent';

function App(props) {
      const [tasks, setTasks] = useState([])

      console.log('Render');

      useEffect(() => {
        axios.get("http://localhost:3033/api/tasks")
          .then((res) => {
            setTasks(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
      }, [])

      function addTask(taskNew) {
        setTasks(taskNew)
      }

      function editTask(dataUpdate) {
        setTasks(dataUpdate)
      }

      function deleteTask(data2) {
        setTasks(data2)
      }

      function setTask(data){
        setTasks(data)
      }

      function dragFunctionCall(data){
        console.log('dragFunctionCall');
        console.log(data);
        setTasks(data)
      }

      return (
        <div>
          <h1 className="d-flex justify-content-center pb-5 display-2" style={{ color: '#4D516D' }}>Task Manager App</h1>
          <div className="d-flex justify-content-evenly">
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
            <TaskForm addTask={addTask} tasks={tasks} />
          </div>
          <div className="d-flex justify-content-evenly pt-5">
            <OverdueDateTask tasks={tasks} />
            <UpcomingIncompleteTask tasks={tasks} setTask={setTask}/>
          </div>
          <div className='d-flex justify-content-center'>
            <GrouppingTask  dragFunctionCall ={dragFunctionCall}tasks={tasks} />
            {/* <CalenderComponent tasks={tasks}/> */}
          </div>
        </div>
      )
    }

export default App;
