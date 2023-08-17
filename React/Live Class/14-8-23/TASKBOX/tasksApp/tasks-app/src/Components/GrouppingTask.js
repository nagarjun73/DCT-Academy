// import GroupTaskItem from './GroupTaskItem'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import axios from 'axios';

export default function GrouppingTask(props) {
      const { tasks, dragFunctionCall } = props

      const newObj = {}
      tasks.forEach((ele) => {
        if (!newObj.hasOwnProperty(ele.dueDate)) {
          newObj[ele.dueDate] = [ele]
        } else {
          newObj[ele.dueDate] = [...newObj[ele.dueDate], ele]
        }
      })

    function handleOnDragEnd(result) {
      console.log(result);
      const draggableId = result.draggableId
      const dest = result.destination.droppableId
    axios.put(`http://localhost:3033/api/tasks/${draggableId}`,{dueDate:dest})
      .then((res) => {
        const editedArr = tasks.map((ele) => {
          if(ele._id === res.data._id){
            return {...ele, ...res.data}
          }else{
            return {...ele}
          }
        })
        dragFunctionCall(editedArr)
      })
  }

      return (
        <ul className="list-group">
          <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
          {Object.keys(newObj).sort((a,b) => new Date(a) - new Date(b)).map((ele, i) => {
            return (
            <Droppable droppableId={String(ele)} key={i}>
            {(provided) => {
            return (
            <div {...provided.droppableProps} ref={provided.innerRef}>
            <h2>{ele}</h2>
            {newObj[ele].map((ele, i) => {
              return(
                <Draggable key={i} draggableId={String(ele._id)} index={i}>
                {(provided) => {
                return (
                <div ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
                <li className="list-group-item" >{ele.title} - {ele.dueDate} - {ele.isCompleted ? 'Completed' : 'Incomplete'}</li>
                </div>
                )}}
                </Draggable>
              )
            })}
            {provided.placeholder}
            </div>)
            }}
            </Droppable>
            )
          })}
          </DragDropContext>
        </ul>
      )
    }