import { useState } from "react"

export default function SearchComponent(props){
  const[searchInp, setSearchInp] = useState('')
  const{findSearchedIteam} = props

  function searchSubmitHandle(e){
    e.preventDefault()
    findSearchedIteam(searchInp)
  }

  return(
    <form className="row g-2 pb-4" onSubmit={searchSubmitHandle}>
    <div className="col-auto">
    <input className="form-control" type="text" value={searchInp} onChange={(e) => setSearchInp(e.target.value)} />
    </div>
    <div className="col-auto">
    <input type="submit" value="Search" className="btn btn-primary"/>
    </div>
    </form>
  )
}