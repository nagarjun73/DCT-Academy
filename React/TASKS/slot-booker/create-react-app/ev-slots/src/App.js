import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { addMinutes, format  } from 'date-fns'

function App(props) {
      const [start, setStart] = useState('')
      const [end, setEnd] = useState('')
      const [slots, setSlots] = useState(0)
      const data = localStorage.getItem('timings') ? JSON.parse(localStorage.getItem('timings')) : []
      const [timings, setTimings] = useState(data)
      const [events, setEvents] = useState([{ 
                    title: 'The Title', 
                    start: '2023-07-31T10:30',
                    end: '2023-07-31T11:30',
                  }])
      
      console.log(timings);


      function startTimeHandle(e) {
        const startInput = e.target.value
        console.log(startInput);
        setStart(startInput)
      }

      function endTimeHandle(e) {
        const endInput = e.target.value
        setEnd(endInput)
      }

      function slotsHandle(e) {
        const slotsInput = Number(e.target.value)
        setSlots(slotsInput)
      }

      function formSubmitHandle(e) {
        e.preventDefault();

        let stHrs = Number(start.slice(11, 13))
        let etHrs = Number(end.slice(11, 13))

        let stMin = Number(start.slice(14, 16))
        let etMin = Number(end.slice(14, 16))

        const totalSlots = Math.ceil((((etHrs - stHrs) * 60) + (etMin - stMin)) / slots)

        const formatedTime = new Date(start).toISOString()
        console.log(formatedTime);
        const event1 = [formatedTime]
        for(let i=0; i<totalSlots; i++){
          let date = addMinutes(event1[i], slots)
          const newDate = date
          event1.push({start:newDate});
        }
        console.log(event1);


        console.log(slots);
        const slotsArr = [`${stHrs}:${stMin}`]
        for (let i = 0; i < totalSlots; i++) {
          if ((Number(slotsArr[i].slice(3, 5)) + slots) >= 60) {
            const minutes = Math.abs((Number(slotsArr[i].slice(3, 5)) + slots) - 60)
            slotsArr.push(
              `${Number(slotsArr[i].slice(0, 2)) + 1}:${minutes.toString().length == 1 ? '0' + minutes : minutes}`)
          } else {
            const minutes = Number(slotsArr[i].slice(3, 5)) + slots
            slotsArr.push(`${Number(slotsArr[i].slice(0, 2))}:${minutes.toString().length == 1 ? '0' + minutes : minutes}`)
          }
        }

        console.log(start)

        let timeStampArr = []
        for (let j = 0; j < slotsArr.length; j++) {
          if (slotsArr[j + 1]) {
            timeStampArr.push({ timeslots: `${slotsArr[j]} - ${slotsArr[j + 1]}`, name: '', status: true })
          }
        }
        setTimings(timeStampArr);
      }

      function bookHandle(index) {
        const name = prompt("Enter your Name")
        const updated = timings.map((ele, i) => {
          if (i == index) {
            return { ...ele, status: false, name: name }
          } else {
            return { ...ele }
          }
        })
        setTimings(updated)
      }

      function cancelHandle(index) {
        const updated = timings.map((ele, i) => {
          if (i == index) {
            return { ...ele, status: true, name: "" }
          } else {
            return { ...ele }
          }
        })
        setTimings(updated)
      }

      function saveHandle() {
        localStorage.setItem('timings', JSON.stringify(timings))
      }

      return (
        <div>
          <form onSubmit={formSubmitHandle}>
            <label>start time</label> <br />
            <input type="datetime-local" value={start} onChange={startTimeHandle} /><br />

            <label>end time</label><br />
            <input type="datetime-local" value={end} onChange={endTimeHandle} /><br />

            <label>slot</label><br />
            <input type="radio" name='slotSelect' value='15' onChange={slotsHandle} /> 15 Min <br />
            <input type="radio" name='slotSelect' value='30' onChange={slotsHandle} /> 30 Min <br />
            <input type="radio" name='slotSelect' value='60' onChange={slotsHandle} /> 60 Min <br />

            <input type="submit" value="Create" />
            <br />
            <br />
          </form>

          <table border="1">
            <thead>
              <tr>
                <th>time</th>
                <th>status</th>
                <th>name</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {timings.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td>{ele.timeslots}</td>
                    <td>{ele.status ? "available" : "booked"}</td>
                    <td>{ele.name == '' ? "N/A" : ele.name}</td>
                    <td>{ele.status ? <button onClick={() => bookHandle(i)}>Book</button> : <button onClick={() => cancelHandle(i)}>Cancel</button>}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <button onClick={() => saveHandle()}>Save</button>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView= 'dayGridWeek'
            headerToolbar = {{
                          left: 'prev,next',
                          center: 'title',
                          right: 'dayGridWeek,dayGridDay'
                        }}
            editable= {true}
            events={ events}/>
        </div>
      )
    }

export default App;
