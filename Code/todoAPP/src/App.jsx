import { useState } from 'react';
import Todos from "./components/Todos";

function App()
{
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const handleClick = () =>{
    if (task.trim() == '')
    {
      setError('Please Enter some value');      
    }
    else{
      setTodos([...todos, task]);
      setTask(''); // Clear the input field after adding the task
      setError(''); // Clear any previous error message
    } 
  }
  return(
    <>
      <h1>Todo App</h1>
      <div>
        <input type="text" placeholder='Enter the Task'
        onChange={(e)=>setTask(e.target.value)} value={task} />
        <button onClick={handleClick}>submit</button>        
      </div>
      {/* {task} */}
      <div>
        <Todos data={todos} />
        <p>{error}</p>
      </div>
    </>
  )
}
export default App