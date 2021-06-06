import React from 'react'
import Task from './Task'



const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      <h3>
        <li>Tasks highligted with green color are set to be reminded</li>
        <li>Double click to add or remove a reminder</li>
      </h3>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};
export default Tasks;