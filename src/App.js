import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    
  ]);
  useEffect(()=> {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }
    getTasks();
  }, []);
  const [isAdd, setAdd] = useState(false);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/Tasks');
    const data = await res.json();
    return data;
  }
  const deleteTask = async (id) => {
    alert('Deleted Task ID ' + id);
    await fetch(`http://localhost:5000/Tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter(task => task.id !== id));
  };
  const toggleReminder = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const addTask = task => {
    console.log(task);
    var newTask = { ...task, id: Math.floor(Math.random() * 100) };
    setTasks([newTask, ...tasks]);
    setAdd(false);
  };
  const displayAddTask = () => setAdd(!isAdd);
  return (
    <div className="container">
      <Header displayAddTask={displayAddTask} isAdd={isAdd} />
      <AddTask onAdd={addTask} isAdd={isAdd} />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
