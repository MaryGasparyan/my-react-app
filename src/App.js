

import {useEffect, useState} from 'react'

import Tasks from './Components/Tasks/Tasks.js'
function App() {
  const [input,setInput] = useState("")

  const handleChange = event =>{
    setInput(event.target.value)
  }
  var taskList = []
  useEffect(
    ()=>{
      taskList.push(input)
    },[]
  )
  return (
    <div className="App">
      <form>
        <input type = "text" placeholder="Input your next task" value = {input} onChange = {handleChange}/>
        <button onClick={
         handleChange
        }>Add</button>
      </form>
      <ul>
        {
          taskList.map((task,index)=>{
            <Tasks tasks = {task}/>
          })
         
        }
        
      </ul>
    </div>
  );
}

export default App;
