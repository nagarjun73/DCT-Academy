import { add, compareAsc, format, addMinutes, parseISO } from 'date-fns'

    const startTime = document.getElementById('startTime')
    const endTime = document.getElementById('endTime')
    const selectSlot = document.getElementById('selectSlot')
    const dataRes = document.getElementById('data')
    const buttonCreate = document.getElementById('buttonCreate')

    const displayDate =  function(){
        dataRes.innerHTML = ''

        const startTimeFormat = format(new Date(startTime.value),'dd.MM.yyyy hh:mm');
        const endTimeFormat = format(new Date(endTime.value),'dd.MM.yyyy hh:mm');

        let slot = Number(selectSlot.value)

        const startTimeHours = format(new Date(startTime.value),'hh');
        const endTimehours = format(new Date(endTime.value),'hh');

        const startTimeMinutes = format(new Date(startTime.value),'mm');
        const endTimeMinutes = format(new Date(endTime.value),'mm');

        const startTimeDay = format(new Date(startTime.value),'dd');
        const endTimeDay = format(new Date(endTime.value),'dd');

        let totalSlot = (((((endTimeDay - startTimeDay) * 24)+(endTimehours - startTimeHours)) * 60) + (endTimeMinutes - startTimeMinutes)) / slot
        
        // const startTime = format(new Date(startTime.value),'hh:mm');
        // let initialT = new Date(startTime.value)
        let resultArr = [new Date(startTime.value)]
        for(let i=0; i<totalSlot; i++){
                let add = addMinutes(resultArr[i] , slot)
                resultArr.push(add)
        }
        console.log(resultArr);

        let newResArr = []
        for(let i=0; i<resultArr.length; i++){
            if(resultArr[i+1]){
                newResArr.push(`${resultArr[i]} - ${resultArr[i+1]}`)
            }
        }

        console.log(newResArr);
        
        //Total slots possible
        // let totalSlot = Math.round(((((dayDiff * 24) + hrsLeft )* 60) + minLeft ) / slot)



        // console.log(totalSlot);
            dataRes.insertAdjacentHTML('afterbegin', newResArr.map(ele => `<button style="display: block;">${ele.slice(3, 21)} - ${ele.slice(61, 79)}</button>`))
        }

        buttonCreate.addEventListener("click", displayDate)