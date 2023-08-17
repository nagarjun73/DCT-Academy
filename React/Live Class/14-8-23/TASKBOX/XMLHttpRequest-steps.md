function App(props) {
      const [tasks, setTasks] = useState([])

      useEffect(() => {
        // const xhr = new XMLHttpRequest()
        // xhr.open("GET", "http://localhost:3033/api/tasks")
        // xhr.send()
        // xhr.onload = function () {
        //   const data = JSON.parse(xhr.responseText);
        //   console.log(data);
        //   setTasks(data)
        // }

        axios.get("http://localhost:3033/api/tasks")
          .then((res) => {
            setTasks(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
      }, [])

      function addTask(taskNew) {
        // const xhr = new XMLHttpRequest()
        // xhr.open("POST", 'http://localhost:3033/api/tasks')
        // xhr.setRequestHeader('Content-type', 'application/json')
        // xhr.send(JSON.stringify(taskObj))
        // xhr.onload = function () {
        //   console.log(xhr.responseText);
        // }
        setTasks(taskNew)
      }

      function editTask(dataUpdate) {

        // const xhr = new XMLHttpRequest()
        // xhr.open("PUT", `http://localhost:3033/api/tasks/${id}`)
        // xhr.setRequestHeader('Content-type', 'application/json')
        // xhr.onload = function () {
        //   if (xhr.status === 200) {
        //     const updatedTask = JSON.parse(xhr.responseText);
        //     console.table(updatedTask);
        //   } else {
        //     console.error(`Error editing task (Status ${xhr.status}): ${xhr.responseText}`);
        //   }
        // };
        // xhr.onerror = function () {
        //   console.error("Request failed.");
        // };
        // xhr.send(JSON.stringify(obj))

        setTasks(dataUpdate)
      }

      function deleteTask(data2) {
        // const xhr = new XMLHttpRequest()
        // xhr.open("DELETE", `http://localhost:3033/api/tasks/${id}`)
        // xhr.setRequestHeader('Content-type', 'application/json')
        // xhr.onload = function () {
        //   const data = xhr.responseText
        //   if (xhr.status == 200) {
        //     console.table(data);
        //   } else {
        //     console.error(data)
        //   }
        // }
        // xhr.send(null)

        setTasks(data2)
      }

      return (
        <div>
          <h1 className="d-flex justify-content-center pb-5" style={{ color: '#4D516D' }}>Task Manager App</h1>
          <div className="d-flex justify-content-evenly">
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
            <TaskForm addTask={addTask} tasks={tasks} />
          </div>
          <div className="d-flex justify-content-evenly">
            <OverdueDateTask tasks={tasks} />
            <UpcomingIncompleteTask tasks={tasks} />
          </div>

          <div>
            <GrouppingTask tasks={tasks} />
          </div>
        </div>
      )
    }