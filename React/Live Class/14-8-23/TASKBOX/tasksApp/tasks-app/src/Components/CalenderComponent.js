import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function CalenderComponent(props){
  const{tasks} = props

  console.log(tasks);

  const evenObj = []

  tasks.forEach((ele) => {
    evenObj.push({
      id:ele._id,
      title:ele.title,
      start: ele.dueDate
    })
  })

  console.log(evenObj);
  
  return(
    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        headerToolbar = {{
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
      editable = {true}
      events= {evenObj}
      />
  )
}