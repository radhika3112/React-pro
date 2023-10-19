import React, { useState } from 'react'
import ToDoList from './ToDoList';
function App() {
  const[inputList,setInputList]=useState("")
  const[items,setItems]=useState([])
  function itemEvent(event)
  {
    setInputList(event.target.value);
  }
  function listOfItems()
  {
    setItems(val=>{
      return [...val,inputList]
    }) 
    setInputList("")
  }

  function deleteIt(id)
    {
     setItems((val)=>{
      return val.filter((arrEle,index)=>{
      return index !==id;
      })
     })
    }

  return (
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>ToDo List</h1>
        <br/>
        <input type='text' placeholder='Add a Items' onChange={itemEvent} value={inputList}/>
        <button onClick={listOfItems}>+</button>

        <ol>
        {
         items.map((itemval,index)=>{
        return <ToDoList 
        key={index}
        id={index}
        itemval={itemval} 
        onSelect={deleteIt}/>

         })
        }
        </ol>
      </div>
    </div>
  )
}

export default App
