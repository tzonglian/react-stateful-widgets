/* To-Do List Stretch */

import React, {useState} from 'react'; 

const exampleListOfToDos = ['Example Task 1', 'Example Task 2', 'Example Task 3','Example Task 4','Example Task 5'];
const resetListOfToDos = ['Example Task 1', 'Example Task 2', 'Example Task 3','Example Task 4','Example Task 5'];

export default function Todos() {

  const [tasks,setTasks] = useState(exampleListOfToDos)
  const [inputTask, setInputTask] = useState("")
  // const [selectedTask, setSelectedTask] = useState(null)

  const addTask = evt => {
    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself.
    // console.log(value)
    // console.log(inputValue)
    // const { value } = evt.target;
    // console.log(value)
    // return setTasks(tasks.push(value))
    // return setInputTask(value)
  };
  
  const reset = () => {
    setTasks(resetListOfToDos)
  };

  const removeTask = (taskIndex) => {
    setTasks(tasks.filter(item =>{
      // console.log(item, tasks[taskIndex], taskIndex, item !== tasks[taskIndex] )
      return item !== tasks[taskIndex]
    }))
  }

  return (
    <div className='widget-todos container'>
      <h2>To Do's</h2>

      <div id='displayAllTasks'>
        {tasks.map((item,taskIndex) =>
          <div className='taskContainer' key = {taskIndex}>
            {item}
            <button className='removeTask' onClick={() =>{
              removeTask(taskIndex)}}>Remove Task</button>
          </div>
        )}
      </div>

      <div>
        <input className='inputTask' type='text' /*onChange={typingTask}*/ />
        {/* // value={inputTask} />  */}
        <button id='addTask' onClick={addTask()}>Add Task</button>
        <button id='resetAllTasks' onClick={reset}>Reset</button>
      </div>
      
    </div>
  );
}
