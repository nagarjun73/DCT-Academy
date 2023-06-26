import { minutesToHours } from 'date-fns'
import { add } from 'date-fns'

    const startTime = document.getElementById('startTime')
    const endTime = document.getElementById('endTime')
    const selectSlot = document.getElementById('selectSlot')
    const dataRes = document.getElementById('data')
    const buttonCreate = document.getElementById('buttonCreate')

    const displayDate =  function(){
        let slot = Number(selectSlot.value)

        let stHrs = Number(startTime.value.slice(11,13))
        let etHrs = Number(endTime.value.slice(11,13))

        let stMin = Number(startTime.value.slice(14,16))
        let etMin = Number(endTime.value.slice(14,16))

        let hrsLeft = etHrs - stHrs
        let minLeft = Math.abs(etMin - stMin)

        let totalSlot = Math.round(((hrsLeft * 60) + minLeft ) / slot)


        const slotsArr = [`${stHrs}:${stMin}`]
        let min = stMin
        for(let i=0; i<totalSlot - 1; i++){
            min + slot
            if(min > 60 ){
                let newMin = min - 60
                slotsArr.push(`${stHrs + 1}:${newMin}`) 
            }else{
                slotsArr.push(`${stHrs}:${min}`) 
            }
        }
        console.log(slotsArr);

            dataRes.insertAdjacentHTML('afterbegin', slotsArr.map(ele => `<h2> ${ele} </h2>`))
        }

        buttonCreate.addEventListener("click", displayDate)