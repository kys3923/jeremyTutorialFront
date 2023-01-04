import axios from 'axios';
import { useState } from 'react'

const Update = (props) => {

  const [ userData, setUserData ] = useState();

  const boxHandler = async (e, id) => {
    console.log(id, 'clicked id');

    const request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/view/${id}`, id)
    console.log(request);
    if (request.data.status === 'success') {
      setUserData(request.data.foundUser[0])
    }
  }

  const updateAccount = (e) => {
    e.preventDefault();
    console.log('update button clicked')
  }

  return (
    <>
      <h4>Update User Page</h4>
      <ul>
        {
          !!props.receivedUserData ?
            props.receivedUserData.map((user) => {
              return <div key={user._id} onClick={(e) => boxHandler(e, user._id)}>
                <li>username: {user.username}</li>
                <li>email: {user.email}</li>
              </div>
            })
          :
          <p>Loading..</p>
        }
      </ul>
      {
        !!userData ?
        <div>
          <p>username: {userData.username}</p>
          <p>contact: {userData.contact}</p>
          <p>email: {userData.email}</p>
          <button onClick={(e) => updateAccount(e)}>update</button>
        </div>
        :
        null
      }
    </>
  );
}
export default Update;