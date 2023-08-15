import { useState } from 'react';
import FormComp from './components/formComp.js';
import TableComponent from './components/TableComponent.js'
import ChartComp from './components/ChartComp.js';

function App() {
  const [data, setData] = useState([])

  console.log(data);

  function manipulator(obj){
    const newObj = {}
    for(const key in obj){
      newObj[key.split(' ').join('').toLowerCase()] = obj[key]
    }
    return newObj;
  }

  function updateData(data){
    const newdata = data.map((ele) => {
      return manipulator(ele)
    })
    console.log(newdata);
    setData(newdata)
  }

  return (
    <div>
      <FormComp updateData={updateData}/>
      {data.length !== 0 && <TableComponent data={data}/>}
      {data.length !== 0 && <ChartComp data={data}/>}
    </div>
  );
}

export default App;
