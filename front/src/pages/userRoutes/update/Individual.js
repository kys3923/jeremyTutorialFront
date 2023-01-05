import { useState, useEffect } from 'react';
import axios from 'axios';

const Individual = (props) => {

  const [ inputtedUsername, setInputtedUsername ] = useState('')
  const [ inputtedAddress, setInputtedAddress ] = useState('')
  const [ inputtedContact, setInputtedContact ] = useState('')
  const [ inputtedEmail, setInputtedEmail ] = useState('')

  useEffect(() => {
    let processing = true;

    const stateSetter = () => {
      if (props.userData) {
        setInputtedUsername(props.userData.username);
        setInputtedAddress(props.userData.address);
        setInputtedContact(props.userData.contact);
        setInputtedEmail(props.userData.email);
      }
    }

    return () => {
      stateSetter();
      processing = false;
    }

  },[])
  // handlers

  const usernameHandler = (e) => {
    setInputtedUsername(e.target.value);
  }
  const contactHandler = (e) => {
    setInputtedContact(e.target.value);
  }
  const addressHandler = (e) => {
    setInputtedAddress(e.target.value);
  }
  const emailHandler = (e) => {
    setInputtedEmail(e.target.value);
  }

  const updateAccount = async (e) => {
    e.preventDefault();
    console.log('update button clicked')

    let sendingData = {
      username: inputtedUsername,
      email: inputtedEmail,
      address: inputtedAddress,
      contact: inputtedContact
    }

    const request = await axios.put(`${process.env.REACT_APP_SERVER_URL}/auth/update/${props.userData._id}`, sendingData)

    if (request.data.status == 'success') {
      alert('update succesful')
    } else if (request.data.status == 'fail') {
      alert('problem at update your data')
    } else {
      alert('problem getting to the backend server')
    }
  }

  return (
    <>
      {!!props.userData ?
        <section>
          <form onSubmit={(e) => updateAccount(e)}>
            <p>username:</p>
            <input type='text' value={inputtedUsername} onChange={(e) => usernameHandler(e)} />
            {inputtedUsername}
            <p>contact:</p>
            <input type='text' value={inputtedContact} onChange={(e) => contactHandler(e)} />
            {inputtedContact}
            <p>address:</p>
            <input type='text' value={inputtedAddress} onChange={(e) => addressHandler(e)} />
            {inputtedAddress}
            <p>email:</p>
            <input type='text' value={inputtedEmail} onChange={(e) => emailHandler(e)} />
            {inputtedEmail}
            <button type='submit'>update</button>
          </form>
        </section>
      :
        <p>Loading ...</p>
      }
    </>
  );
}
export default Individual;