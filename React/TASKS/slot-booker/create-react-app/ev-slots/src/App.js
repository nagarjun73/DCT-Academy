import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { addMinutes, formatISO  } from 'date-fns'



function App(props) {
      const data = localStorage.getItem('timings') ? JSON.parse(localStorage.getItem('timings')) : []
      /*
      const [start, setStart] = useState('')
      const [end, setEnd] = useState('')
      const [slots, setSlots] = useState(0)
      const [timings, setTimings] = useState(data)
      const [events, setEvents] = useState([{ 
                    title: 'The Title', 
                    start: '2023-08-04T10:30',
                    end: '2023-08-04T11:30',
                  }])
      */
      const initialArg = {
            start: '',
            end:'',
            slots:'',
            timings:data,
            events:[]
      }

      function reducer(state, action){
        switch(action.type){
          case 'setStart' : {
            return {...state, start:action.value}
          }
          case 'setEnd' : {
            return {...state, end:action.value}
          }
          case 'setSlots' : {
            return {...state, slots:action.value}
          }
          case 'setTimings' : {
            return {...state, timings:action.value}
          }
          case 'setEvents' : {
            return {...state, events:action.value}
          }
        }
      }

      const[state, dispatch] = useReducer(reducer, initialArg)
      const {start, end, slots, timings, events} = state

      useEffect(() => {
          const newew = timings.map((ele) => {
          return {start:ele.start, end:ele.end, title:ele.title}
        })

        // setEvents(newew.filter((ele) => ele.title !== ''))
        dispatch({type:'setEvents', value:newew.filter((ele) => ele.title !== '')})
      },[timings])
      
      function startTimeHandle(e) {
        const startInput = e.target.value
        // setStart(startInput)
        dispatch({type:'setStart', value:startInput})
      }

      function endTimeHandle(e) {
        const endInput = e.target.value
        // setEnd(endInput)
        dispatch({type:'setEnd', value:endInput})
      }

      function slotsHandle(e) {
        const slotsInput = Number(e.target.value)
        // setSlots(slotsInput)
        dispatch({type:'setSlots', value:slotsInput})
      }

      function formSubmitHandle(e) {
        e.preventDefault();

        let stHrs = Number(start.slice(11, 13))
        let etHrs = Number(end.slice(11, 13))

        let stMin = Number(start.slice(14, 16))
        let etMin = Number(end.slice(14, 16))

        const totalSlots = Math.ceil((((etHrs - stHrs) * 60) + (etMin - stMin)) / slots)

        //////////////////////////////////TIMINGS ISO
        const formatedTime = new Date(start)
        const event1 = [{start:formatedTime, end:addMinutes(formatedTime, slots)}]
        for(let t=0; t<totalSlots-1; t++){
          console.log(event1[t].start);
          let date = addMinutes(event1[t].start, slots)
          event1.push({start:date, end:addMinutes(date, slots)});
          console.log(event1);

          const newTym = event1.map((ele) => {
            return {start:formatISO(ele.start).slice(0,16), end:formatISO(ele.end).slice(0,16), title: '', status: true}
          })

          // setTimings([...timings].concat(newTym));
          dispatch({type:'setTimings', value:[...timings].concat(newTym)})
          console.log(newTym);
        }
      }

      function bookHandle(index) {
        const name = prompt("Enter your Name")
        const updated = timings.map((ele, i) => {
          if (i == index) {
            return { ...ele, status: false, title: name }
          } else {
            return { ...ele }
          }
        })
        // setTimings(updated)
        dispatch({type:'setTimings', value:updated})
        console.log(timings);

      }

      function cancelHandle(index) {
        const updated = timings.map((ele, i) => {
          if (i == index) {
            return { ...ele, status: true, title: "" }
          } else {
            return { ...ele }
          }
        })
        // setTimings(updated)
        dispatch({type:'setTimings', value:updated})
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
                    <td>{ele.start.slice(11,16)} - {ele.end.slice(11,16)}</td>
                    <td>{ele.status ? "available" : "booked"}</td>
                    <td>{ele.title == '' ? "N/A" : ele.title}</td>
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









        // console.log(slots);
        // const slotsArr = [`${stHrs}:${stMin}`]
        // for (let i = 0; i < totalSlots; i++) {
        //   if ((Number(slotsArr[i].slice(3, 5)) + slots) >= 60) {
        //     const minutes = Math.abs((Number(slotsArr[i].slice(3, 5)) + slots) - 60)
        //     slotsArr.push(
        //       `${Number(slotsArr[i].slice(0, 2)) + 1}:${minutes.toString().length == 1 ? '0' + minutes : minutes}`)
        //   } else {
        //     const minutes = Number(slotsArr[i].slice(3, 5)) + slots
        //     slotsArr.push(`${Number(slotsArr[i].slice(0, 2))}:${minutes.toString().length == 1 ? '0' + minutes : minutes}`)
        //   }
        // }


        // let timeStampArr = []
        // for (let j = 0; j < slotsArr.length; j++) {
        //   if (slotsArr[j + 1]) {
        //     timeStampArr.push({ timeslots: `${slotsArr[j]} - ${slotsArr[j + 1]}`, name: '', status: true })
        //   }
        // }
