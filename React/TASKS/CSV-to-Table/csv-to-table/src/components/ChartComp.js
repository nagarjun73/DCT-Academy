import {BarChart } from 'react-chartkick'
import 'chartkick/chart.js'

export default function ChartComp(props){
  const{data} = props

  const arrayOfMarks = data.map((ele) => {
    return [ele.name, ele.marksobtained
]
  })

  console.log(arrayOfMarks);

  return(
    <div>
      <h1>Chart based on Marks obtained</h1>
      <BarChart data={arrayOfMarks} />
    </div>
  )
}