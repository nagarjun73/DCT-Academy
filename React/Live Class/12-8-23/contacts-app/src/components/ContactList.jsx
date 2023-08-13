import { useState } from "react"

export default function ContactList(props){
  const {contacts, showDetailBtnHandle, editContactHandle, deleteContactHandle, filtered} = props
  
  function renderFiltered(){
    if(filtered.length !== 0){
      return filtered
    }else{
      return contacts
    }
  }

  return(
    <div>
      <ul className="list-group d-flex">
        {renderFiltered().map((ele) => {
            return (<li id="list-item" className="list-group-item list-group-item-action d-flex justify-content-between" key={ele.id} ><a href='#' onClick={() => showDetailBtnHandle(ele.id)} > {ele.name} - <span>{ele.number}</span></a>
            <span>
            <button onClick={() => editContactHandle(ele)}>Edit</button>
            <button className="btn btn-close" onClick={() => deleteContactHandle(ele.id)}></button>
            </span>
            </li>)
          })}
      </ul>
    </div>
  )
}