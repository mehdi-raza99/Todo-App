import React, { useEffect, useState } from 'react'

const Search = ({addTask}) => {
    const [task,setTask]=useState("");
    function handleChange(e){
        setTask(e.target.value)
    }
    function handleAdd(e){
        e.preventDefault();
        if(task.trim()) //Check if input exists or not! and trim extra spaces
          addTask(task);
        setTask("")
    }


    

  return (
    <form className='flex gap-2 mb-3' onSubmit={handleAdd}>
      <input
        type="text" 
        placeholder='Enter a new task' 
        className='text-2xl bg-gray-300 border-2 rounded-xl p-2 w-[40rem]'
        onChange={handleChange}
        value={task}
        />
        <button type='submit' className='bg-green-600 py-3 px-6 rounded-2xl text-lg cursor-pointer font-bold' onClick={handleAdd}>Add</button>
        

    </form>
  )
}

export default Search
