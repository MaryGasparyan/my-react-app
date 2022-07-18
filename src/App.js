

import {useState} from 'react'

import Tasks from './Components/Tasks/Tasks.js'
function App() {
  
  const [input,setInput] = useState("")
  const [taskList,setTasks] = useState([])
  const handleChange = event =>{
   setInput(event.target.value)
   
   console.log(event.target.value)
  }
  const handleClick = () => {
       setTasks(()=>{
         var newTask = []
         newTask= [...taskList]
         newTask.push(input)
         return newTask;
       }

       )
  }
 
  return (
    <div className="App">
      <form>
        <input type = "text" placeholder="Input your next task" value = {input} onChange = {handleChange}/>
        <button onClick={
         handleClick()
        }>Add</button>
      </form>
      <ul>
        {
          
          taskList.map((task)=>{
            <Tasks tasks = {task}/>
          })
         
        }
        
      </ul>
    </div>
  );
}

export default App;
