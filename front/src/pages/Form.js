import { useState } from 'react';
import axios from 'axios';

const Form = (props) => {

  // states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  // handlers
  const buttonHandler = (e) => {
    e.preventDefault();
    let server=process.env.REACT_APP_SERVER_URL

    let sendingData = {
      username: name,
      email: email,
      password: password,
      address: address,
      contact: contact,
    }

    // validate
    const validator = (name, email, password) => {
      if (name === '' || email === '' || password === ''){
        return false
      } else {
        return true
      }
    } 
    
    // sending Data
    const registerToAPI = async (data) => {
      if (validator(name, email, password)) {
        console.log(address)
        const response = await axios.post(`${server}/auth/register`, data)
      } else {
        alert('fill out all blanks')
      }
    }

    registerToAPI(sendingData);
  }

  const nameHandler = (e) => {
    setName(e.target.value);
  }
  const emailHandler = (e) => {
    setEmail(e.target.value);
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }
  const addressHandler = (e) => {
    setAddress(e.target.value);
  }
  const contactHandler = (e) => {
    setContact(e.target.value);
  }

  
  return (
    <div>
      <form>
        <p>name:</p>
        <input type='text' onChange={nameHandler} value={name}/>
        <p>email:</p>
        <input type='email' onChange={emailHandler} value={email}/>
        <p>password:</p>
        <input type='password' onChange={passwordHandler} value={password}/>
        <p>address</p>
        <input type='text' onChange={addressHandler} value={address}/>
        <p>contact</p>
        <input type='text' onChange={contactHandler} value={contact}/>
        <p>
          <button onClick={buttonHandler}>submit</button>
        </p>
      </form>

      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
      <p>{address}</p>
      <p>{contact}</p>
    </div>
  );
}
export default Form;