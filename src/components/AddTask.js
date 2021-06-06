import {useState} from 'react'


const AddTask = ({onAdd, isAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
  
    const onSubmit = (e) => {
      e.preventDefault()
      if (!text) {
        alert("Please enter any task");
        return
      }
      onAdd({text, day, reminder});
      setText('');
      setDay('')
      setReminder(false);
    }
    if (isAdd){
      return (
      
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Day</label>
          <input
            type="text"
            placeholder="Add Day and Time"
            value={day}
            onChange={e => setDay(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Reminder</label>
          <input
            type="checkbox"
            value={reminder}
            onChange={e => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" className="btn btn-block" value="Save Task" />
      </form>
    );
    } else {
      return(
        <div>
          <h4>Click the above button to add new task</h4>
        </div>
      )
    }
    
  };
  export default AddTask;
  