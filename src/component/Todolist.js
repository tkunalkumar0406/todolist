
import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleUpdateTask = () => {
    if (editedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editedTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditedTask('');
    }
  };

  return (
    <div className='todolist'>
      <div className='peak'>
      <h1 className='todo' style={{color:'green'}}>ToDo-List App</h1>
      <div>
        <input className='todo' style={{width:'300px'}}
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className='todoi' onClick={handleAddTask} style={{color:'white',background:'orange', padding:' 23px 0px 0px 0px'}} >Add Task</button>
      </div>
      <h1 className='build'  style={{color:'white',fontSize:'53px'}}>Build</h1>
      <h1  className='build' style={{color:'red',fontSize:'63px'}}>ToDo<span style={{color:'white'}}>List</span></h1>
      <h1 className='build' style={{color:'white'}}><span style={{color:'red'}}>I</span>n<span style={{color:'red'}}>M</span>aking<span style={{color:'red'}}>R</span>eactJS</h1>

      {/* <h2 className='todo' style={{color:'orange'}} >Tasks</h2> */}
      </div>
      <ul>
        {tasks.map((task, index) => (
         
          <li key={index}>
            <li></li>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={handleUpdateTask}>Update</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => handleEditTask(index)} style={{color:'orange'}}><img src='images/download.png'style={{width:'28px',height:'15px'}}></img></button>
                <button onClick={() => handleDeleteTask(index)}style={{color:'orange'}}><img src='images/download.jpeg'style={{width:'28px',height:'15px'}}></img></button>
              </>
            )};oj;ojmpij
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
