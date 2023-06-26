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

        let totalSlot = (((endTimehours - startTimeHours) * 60) + (endTimeMinutes - startTimeMinutes)) / slot
        
        // const startTime = format(new Date(startTime.value),'hh:mm');
        // let initialT = new Date(startTime.value)
        let resultArr = [new Date(startTime.value)]
        for(let i=0; i<totalSlot; i++){
                let add = addMinutes(resultArr[i] , slot)
                resultArr.push(add)
        }
        console.log(resultArr);
        
        //Total slots possible
        // let totalSlot = Math.round(((((dayDiff * 24) + hrsLeft )* 60) + minLeft ) / slot)



        // console.log(totalSlot);
            dataRes.insertAdjacentHTML('afterbegin', resultArr.map(ele => `<h2>${format(new Date(ele),'dd.MM.yyyy hh:mm')}</h2>`))
        }

        buttonCreate.addEventListener("click", displayDate)