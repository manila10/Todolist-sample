
import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) =>{
    setNewTask(event.target.value)
  }
  
  const addTask = ()=>{
      const newToDoList = [...todoList, newTask ];
      setToDoList(newToDoList);
  }

  const deleteTask=(taskname)=>{
    setToDoList(todoList.filter((task)=> task !== taskname));
  }
  return (
      <div className="App">
        <div className="addTask">
          <input onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
        </div>
        
        <div className="list">
          {todoList.map((task)=>{
              return(
              <div>
              <h3>{task}</h3>
              <button onClick={() => deleteTask(task)}>
                X
              </button>
            </div>
            )
          })}

        </div>


      </div>
  )}
export default App;
