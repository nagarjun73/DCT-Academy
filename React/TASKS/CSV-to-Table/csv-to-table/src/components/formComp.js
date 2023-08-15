import Papa from 'papaparse'
import { useState } from 'react'

export default function FormComp(props){
  const {updateData} = props
  const[file, setFile] = useState('')

  function submitHandle(e){
    e.preventDefault()
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        updateData(results.data)
      },
    })
  }

  return(
    <form onSubmit={submitHandle}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
        <input type='submit'/>
      </form>
  )
}