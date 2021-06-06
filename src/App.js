import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: 'Feb 5th at 2 30 PM',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Mar 5th at 11 00 AM',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Mar 5th at 6 30 PM',
      reminder: false
    }
  ]);
  const [isAdd, setAdd] = useState(false);
  const deleteTask = id => {
    alert('Deleted Task ID ' + id);
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
