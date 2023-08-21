import './App.css';
import {useState, useEffect} from 'react'
import {DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

function App() {
  const[boxes, setBoxes] = useState({boxOne:[{id:17},{id:16}], boxTwo:[{id:165},{id:135}], checkBox:[
    {
      id:1,
      title:'checkbox-1'
    },
    {
      id:2,
      title:'checkbox-2'
    },
    {
      id:3,
      title:'checkbox-3'
    },
    {
      id:4,
      title:'checkbox-4'
    }
  ]})

  return (
    // onDragEnd={this.onDragEnd}
    <div>
    <ul>
    <DragDropContext onDragEnd={(result) => console.log(result)}>
    {
      Object.keys(boxes).map((ele, i) => {
        return (
          <Droppable droppableId={String(ele)} key={i} >
            {(provided) => {
            return (
            <div {...provided.droppableProps} ref={provided.innerRef} >
              <h2>{ele}</h2>
          {(boxes[ele]).map((els, ind) => {
            return (
            <Draggable key={els.id} draggableId={String(els.id)} index={ind}>
            {(provided) => {
              return(
                  <li ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>{els.title}</li>
              )
            }}
            </Draggable>
            )
          })}
          </div>
          )}}
          </Droppable>
        )
      })
    }
    </DragDropContext>
    </ul>
    </div>
  );
}

export default App;
