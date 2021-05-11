import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'May 15th at 3.00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Alumni Meet',
      day: 'May 25th at 1.00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery shopping',
      day: 'May 20th at 11.00am',
      reminder: false,
    },
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Remainder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : ('No Tasks To Show'
        )}
    </div>
  );
}

export default App;
