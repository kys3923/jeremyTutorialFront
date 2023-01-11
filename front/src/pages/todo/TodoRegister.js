import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

const TodoRegister = (props) => {

  const [ formData, setFromData ] = useState(
    {
      subject: '',
      dueDate: '',
      description: '',
      author: sessionStorage.userId
    }
  );

  const navigate = useNavigate();

  const { subject, dueDate, description, author } = formData;

  const changeHandler = (e) => {
    setFromData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/todo/register`, formData)

    if(!!request.data.success) {
      navigate('/todo')
    }
  }
 
  return (
    <div>
      <h1>Register Todo</h1>
      <form onSubmit={submitHandler}>

        <div>
          <label htmlFor="subject">
            Subject
          </label>
          <input type='text' name='subject' onChange={changeHandler} />          
        </div>

        <div>
          <label htmlFor="dueDate">
            Due Date
          </label>
          <input type='date' name='dueDate' onChange={changeHandler} />
        </div>

        <div>
          <label htmlFor="description">
            Description
          </label>
          <textarea name='description' rows='5' cols='50' onChange={changeHandler} />
        </div>

        <button type='submit'>submit</button>
      </form>
    </div>
  );
}
export default TodoRegister;