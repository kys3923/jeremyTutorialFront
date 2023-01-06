import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Login = (props) => {

  // states
  const [ formData, setFormData ] = useState({ email: '', password: ''});

  const navigate = useNavigate();

  const { email, password } = formData;

  // handlers
  const submitForm = async (e) => {
    e.preventDefault();

    if (email == '' || password == '') {
      alert('please fill out all the blank form')
    } else {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, formData)

      if(request.data) {
        sessionStorage.setItem('authToken', request.data.token);
        sessionStorage.setItem('userId', request.data.user._id);
        sessionStorage.setItem('address', request.data.user.address);
        sessionStorage.setItem('contact', request.data.user.contact);
        sessionStorage.setItem('email', request.data.user.email);
        sessionStorage.setItem('username', request.data.user.username);
        navigate('/')
      }

      return request.data
    }
  }

  useEffect(() => {
    if (sessionStorage.authToken) {
      navigate('/')
    }
  }, [])

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      <h1>login page</h1>

      {/* INPUT FORMS */}
      <form onSubmit={(e) => submitForm(e)}>
        <label htmlFor='email'>
          Email:
        </label>
        <input type='text' name='email' onChange={changeHandler} />
        <label htmlFor='password'>
          Password:
        </label>
        <input type='password' name='password' onChange={changeHandler} />
        <button type='submit'>login</button>
      </form>

      {/* LINKS */}
      <div>
        <a href='#'>Forgot password?</a>
        <a href='#'>Register account</a>
      </div>

      <p>{email}</p>
      <p>{password}</p>
    </div>
  );
}
export default Login;