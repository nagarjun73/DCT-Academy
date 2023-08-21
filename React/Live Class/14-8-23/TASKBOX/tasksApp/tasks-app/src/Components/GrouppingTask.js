import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import axios from 'axios';
import { addDays, differenceInDays } from 'date-fns'

export default function GrouppingTask(props) {
      const { tasks, dragFunctionCall } = props
      
      function dataObject(){
      const arrSort = tasks.map((ele) => ele.dueDate).sort((a,b) => new Date(a) - new Date(b))
      const daysLength = differenceInDays(new Date(arrSort[arrSort.length -1]), new Date(arrSort[0]))
      const daysArr = [new Date(arrSort[0])]
      for(let i=0; i<daysLength; i++){
        daysArr.push(addDays(daysArr[i], 1))
      }
      const datesArr = daysArr.map((ele) => ele.toLocaleDateString().replaceAll('/','-'));

      function callBackCheck(date){
        const datesArr = []
        tasks.forEach((ele) => {
          if(new Date(ele.dueDate).toLocaleDateString() == new Date(date).toLocaleDateString()){
            datesArr.push(ele)
          }
        })
        return datesArr
      }

      const finObj = {}
      datesArr.forEach((ele) => {
        if(new Date(ele).toLocaleDateString() !== new Date().toLocaleDateString()){
          finObj[ele] = callBackCheck(ele)
        }else{
          finObj['Today'] = callBackCheck(ele)
        }
      })
      return finObj
      }
      

    function handleOnDragEnd(result) {
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
        <ul className="list-group" style={{ width: '30rem' }}>
          <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
          {Object.keys(dataObject()).sort((a,b) => new Date(a) - new Date(b)).map((ele, i) => {
            return (
            <Droppable droppableId={String(ele)} key={i}>
            {(provided) => {
            return (
            <div {...provided.droppableProps} ref={provided.innerRef} >
            {ele !== 'Today' ? 
            <p className='badge bg-dark  text-wrap fs-4 mt-4 fw-light' style={{width:'12rem'}} >{ele}</p> : 
            <p className='badge bg-primary text-wrap fs-4 mt-4 fw-light' style={{width:'12rem'}} >{ele}</p> }
            {dataObject()[ele].length !== 0 ? dataObject()[ele].map((els, i) => {
              return(
                <Draggable key={i} draggableId={String(els._id)} index={i}>
                {(provided) => {
                return (
                <div ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
                <li className="list-group-item" >{els.title} - {els.dueDate} - {els.isCompleted ? <span className='badge bg-success fw-medium'>Completed</span> : <span className='badge bg-			danger fw-medium'>Incomplete</span>}</li>
                </div>
                )}}
                </Draggable>
              )
            }) : <div className='d-flex justify-content-center' style={{listStyle:'none'}}><li>No tasks</li>
              </div>}
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