

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
         console.log(newTask)
         setInput("")
         return newTask;
       }

       )
  }
 
  return (
    <div className="App">
     
        <input type = "text" placeholder="Input your next task" value = {input} onChange = {handleChange}/>
        <button onClick={
         handleClick
        }>Add</button>
      
      <ul>
        {
          
          taskList.map((task,index)=>{
           return <Tasks tasks = {task} key = {index}/>
          })
         
        }
        
      </ul>
    </div>
  );
}

export default App;
