import React from 'react'

const Task = ({task, Key, handleDelete}) => {
  return (
    <div className='flex gap-3 place-items-center'>
    <div className='my-3 text-2xl bg-black border-2 border-amber-100 rounded-xl p-2 w-[40rem] text-gray-400'>
      {task}
    </div>
    <button onClick={() => handleDelete(Key)} className='bg-red-500 p-3 rounded-lg cursor-pointer font-medium text-lg'>Delete</button>
    </div>
    )
}

export default Task
