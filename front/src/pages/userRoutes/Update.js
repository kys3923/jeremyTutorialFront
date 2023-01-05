import axios from 'axios';
import { useState } from 'react'

import Individual from './update/Individual';

const Update = (props) => {

  const [ userData, setUserData ] = useState();


  const boxHandler = async (e, id) => {

    const request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/view/${id}`, id);

    if (request.data.status === 'success') {
      setUserData(request.data.foundUser[0])
    }
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
          <Individual userData={userData}/>
        :
        null
      }
    </>
  );
}
export default Update;