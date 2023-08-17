import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


export default function GroupTaskItem(props) {
      const { dataArr, tag } = props
      console.log(dataArr);
      return (
        <div>
          <h4>{tag}</h4>
          <ul>
            {
              dataArr.map((ele, i) => {
                return (
                <Draggable
                      key={i}
                      draggableId={i}
                      index={i}
                      >
                        {(provided, snapshot) => {
                                  return (
                <li className="list-group-item" key={i} ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}>{ele.title} - {ele.dueDate} - {ele.isCompleted ? 'Completed' : 'Incomplete'}</li>
                                  )}}</Draggable>
                )
              })
            }
          </ul>
        </div>
      )
    }