import React from 'react'

function  ToDoList(props) {
    
  return (
    <div className='todo_style'>
    <i className="fa-solid fa-xmark" onClick={()=>{props.onSelect(props.id)}}/>
     <li>{props.itemval}</li>
    </div>
  )
}

export default  ToDoList
