
import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import Task from './components/Task';

function App() {
  const [taskList,setTaskList]=useState([]);
  function addNewTask(task) {
    const newTask={
      id: Date.now(),
      description: task
    }
  setTaskList([...taskList,newTask]);
   console.log(taskList);
  }
  function deleteTask(id) {
    const updatedList=taskList.filter((task) => task.id !== id)
    setTaskList(updatedList)
  }
  return (
    <div className='w-[1080px] mx-auto py-14 '>
      <div className='text-5xl font-serif mx-auto mb-10 text-blue-700 bg-emerald-300 rounded-2xl max-w-fit p-5'>TODO APP</div>
      <Search addTask={addNewTask} />
      {taskList.map((task) => <Task key={task.id} Key={task.id} task={task.description} handleDelete={deleteTask} />)}
    </div>
  )
}

export default App
