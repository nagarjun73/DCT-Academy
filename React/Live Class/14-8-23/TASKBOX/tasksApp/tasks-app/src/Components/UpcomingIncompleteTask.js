import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function UpcomingIncompleteTask(props) {
      const { tasks, setTask } = props
      let dates = tasks.filter((ele) => {
        return new Date(ele.dueDate) > new Date() && ele.isCompleted == false
      })


      function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(dates);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dates = items
  }

      return (
        <div>
  <h2 className='display-6'>Upcoming Tasks</h2>
  <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId={String(Math.random())}>
      {(provided) => ( 
        <ul className="list-group" {...provided.droppableProps} ref={provided.innerRef}>
          {dates.map((ele, i) => (
            <Draggable key={ele._id} draggableId={String(ele._id)} index={i}>
              {(provided) => ( 
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="list-group-item"
                >
                  {ele.title} - {ele.dueDate} - {ele.isCompleted ? 'Completed' : 'Incomplete'}
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  </DragDropContext>
</div>

      )
    }