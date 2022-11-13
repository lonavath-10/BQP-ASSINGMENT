import React,{useState} from 'react'
import TodoList from './TodoList';
function App() {
  const [task, setTask] = useState("");
  const [todos,setTodos] = useState([]);
  const changeHandler = e => {
    setTask(e.target.value)
  }
  const SubmitHandler = e => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask(""); 
  }
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);

  }
  return (
    <div >
      <center>
        <div className='card'>
          <div className='card-body'>
            <h3 className='card-tittle'> TODO-LIST</h3>
            <form onSubmit={SubmitHandler} >
              <input size='30' type='text' name='task' value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <input type='submit' value='ADD' name='ADD'/>
            </form>
            <TodoList todolist={ todos} deleteHandler = {deleteHandler} />

          </div>

        </div>

      </center>
     
    </div>
  );
}

export default App;
