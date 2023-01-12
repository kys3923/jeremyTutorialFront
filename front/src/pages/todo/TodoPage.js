import { useEffect, useState } from "react";
import axios from "axios";
import './TodoPage.css'

const TodoPage = (props) => {

  const [ receivedTodo, setReceivedTodo ] = useState();
  const [ displayUpdate, setDisplayUpdate ] = useState(false);
  const [ subject, setSubject ] = useState('');
  const [ dueDate, setDueDate ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ isFinished, setIsFinished ] = useState()
  
  useEffect(() => {

    const pathModifiy = (path) => {
      let newPath
      newPath = path.slice(6)
      return newPath
    }

    let isMounted = true;

    const requestTodo = async (path) => {
      let newPath = pathModifiy(path);

      const config = {
        header: {
          "Content-Type": "application/json"
        }
      }

      if (isMounted) {
        const request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todo/view/${newPath}`, config)
        if(request.data.success) {
          setReceivedTodo(request.data.todo)
          setSubject(request.data.todo.subject)
          setDueDate(request.data.todo.dueDate)
          setDescription(request.data.todo.description)
          setIsFinished(request.data.todo.taskDone)
        }
      }
    }

    return () => {
      requestTodo(window.location.pathname)
      isMounted = false;
    }
  },[isFinished])

  const taskModify = (boolean) => {
    if(boolean) {
      return 'Done'
    } else {
      return 'Not Finished'
    }
  }

  const updateButtonHandler = (e) => {
    setDisplayUpdate(!displayUpdate)
  }

  const changeTask = async (e) => {

    const booleanSelector = (boolean) => {
      if (boolean) {
        return false;
      } else {
        return true
      }
    }
    
    let updatingData = {
      taskDone: booleanSelector(isFinished)
    };
    
    const requestUpdate = await axios.put(`${process.env.REACT_APP_SERVER_URL}/todo/update/${receivedTodo._id}`, updatingData)
    
    if(!!requestUpdate.data.success) {
      setIsFinished(requestUpdate.data.requestUpdate.taskDone)
      window.location.reload(false);
    }
    return
  }

  const submitUpdate = (e) => {
    console.log('update button clicked')
  }
  

  // ---- update details
  // 1. onChange function to subject, dueDate, description
  // 2. send Changed state to backend server (send todo id)
  // 3. receive requestUpdate
  // 4. update states with received requestUpdate
  // 5. window refresh
  
  return (
    <>
      {!!receivedTodo ? <h1>Todo {receivedTodo.subject}</h1> : <h1>Todo Loading...</h1>}
      {!!receivedTodo ? <div>
        <ul>
          <li>Due Date: {receivedTodo.dueDate}</li>
          <li>Finished: {taskModify(isFinished)}</li>
        </ul>
        <button onClick={changeTask}>Set Finished / undo</button>
        <button onClick={updateButtonHandler}>Update</button>
        <button>delete</button>
      </div> 
        :
        null
      }
      {!!displayUpdate ? <div>
        <h3>update section</h3>
        <form onSubmit={submitUpdate} className='form'>
          <label htmlFor="subject">Subject: </label>
          <input type='text' name='subject' className="formInput" value={subject} />
          <label htmlFor="dueDate">Due Date: </label>
          <input type='date' name='dueDate' className="formInput" value={dueDate}/>
          <label htmlFor="dueDate">Description: </label>
          <textarea name='dueDate' rows='4' cols='5' className="formInputArea" value={description}/>
          <button type="submit">Update</button>
        </form>
      </div> : null}
    </>
  );
}
export default TodoPage;