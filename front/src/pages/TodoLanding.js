import {useState, useEffect} from 'react';
import axios from 'axios';

const TodoLanding = (props) => {

  const [ receivedTodos, setReceivedTodos ] = useState([]);

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

  return (
    <>
      <p>TodoLanding page</p>
      {console.log(receivedTodos)}
      {receivedTodos.length > 0 ? <p>data received</p> : <p>Loading...</p>}
      {receivedTodos.map((todo) => {
        if(!todo.taskDone) {
          return <p key={todo._id}>{todo.subject}</p>
        }
      })}
    </>
  );
}
export default TodoLanding;