import React, { useState } from 'react'
const Task = ({task, Key, handleDelete, update}) => {
  const [editText, setEditText] = useState(task);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditChange(e) {
    setEditText(e.target.value)
  }
  
  function handleEdit(id) {
    setIsEditing(true)
  }
  return (
    
    <div className='flex gap-3 place-items-center'>
    {isEditing? (
      <form className='flex gap-2 place-items-center mt-3' onSubmit={() => {update(Key,editText); setIsEditing(false)}}>
        <input
          type="text"
          value={editText}
          onChange={handleEditChange}
          className='text-2xl bg-gray-300 border-2 rounded-xl p-2 w-[40rem]'
          autoFocus
        />
        <button type='submit' className='bg-yellow-400 p-3 rounded-lg cursor-pointer font-medium text-lg'>Save</button>
      </form>
    ) : (
      <>
    <div className='my-3 text-2xl bg-black border-2 border-amber-100 rounded-xl p-2 w-[40rem] text-gray-400'>
      {task}
    </div>
    <button onClick={() => handleEdit(Key)} className='bg-yellow-400 p-3 rounded-lg cursor-pointer font-medium text-lg'>Edit</button>
    <button onClick={() => handleDelete(Key)} className='bg-red-500 p-3 rounded-lg cursor-pointer font-medium text-lg'>Delete</button>
    </>
  )}</div>
  );
}

export default Task
