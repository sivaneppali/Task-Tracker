// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: 'May 15th at 3.00pm',
//         remainder: true,
//     },
//     {
//         id: 2,
//         text: 'Alumni Meet',
//         day: 'May 25th at 1.00pm',
//         remainder: true,
//     },
//     {
//         id: 3,
//         text: 'Grocery shopping',
//         day: 'May 20th at 11.00am',
//         remainder: false,
//     }
// ]

import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Tasks
