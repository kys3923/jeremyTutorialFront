import {useState, useEffect} from 'react';
import axios from 'axios';
import './TodoLanding.css';
import { useNavigate } from 'react-router-dom';

const TodoLanding = (props) => {

  const [ receivedTodos, setReceivedTodos ] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let isLoading = true;

    const getTodos = async () => {
      if(isLoading) {
        const todo = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todo/viewAll`)

        if (!!todo.data.success) {
          setReceivedTodos(todo.data.todo)
        }
      }
    }
    return () => {
      getTodos();
      isLoading = false;
    }
  },[])

  const statusDistributor = (todo) => {
    if (!!todo) {
      return <p>Finished</p>
    } else {
      return <p>Not Finished</p>
    }
  }

  const todoBoxHandler = (e, todo) => {
    e.preventDefault();
    navigate(`/todo/${todo._id}`)
  }

  return (
    <>
      <p>TodoLanding page</p>
      {console.log(receivedTodos)}
      {receivedTodos.length > 0 ? <p>data received</p> : <p>Loading...</p>}
      <div className='todoContainer'>
        {receivedTodos.map((todo) => {
          if(!todo.taskDone) {
            return <div key={todo._id} className='todoBox' onClick={(e) => todoBoxHandler(e, todo)}>
                <p>{todo.subject}</p>
                {statusDistributor(todo.taskDone)}
              </div>
          }
        })}
      </div>
    </>
  );
}

export default TodoLanding;