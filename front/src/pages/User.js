import { useEffect, useState } from 'react';
import axios from 'axios';

// pages
import Register from './userRoutes/Register';
import Update from './userRoutes/Update';
import Delete from './userRoutes/Delete';

const User = (props) => {

  const [ receivedUserData, setReceivedUserData ] = useState();
  const [ currentPage, setCurrentPage ] = useState(1);

  useEffect(() => {
    const getuser = async () => {
      
      const user = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/viewAll`);
      if(!!user.data.user) {
        setReceivedUserData(user.data.user);
      }
    }
    getuser();
    console.log('received Data', receivedUserData)
  },[])

  const links = [
    { name: 'Register', pageNum: 1 },
    { name: 'Update', pageNum: 2 },
    { name: 'Delete', pageNum: 3 },
  ]

  const buttonHandler = (e, pageNum) => {
    if(pageNum !== currentPage) {
      setCurrentPage(pageNum)
    }
  }

  const pageRenderer = (pageNum) => {
    if(pageNum === 1) {
      return <Register />
    } else if (pageNum === 2 ) {
      return <Update receivedUserData={receivedUserData} />
    } else if ( pageNum === 3 ) {
      return <Delete receivedUserData={receivedUserData} />
    } else {
      return 'page not available'
    }
  }
  
  return (
    <>
      <h3>User Page</h3>
      {links.map((link) => {
        return <button key={link.pageNum} onClick={(e) => buttonHandler(e, link.pageNum)}>{link.name}</button>
      })}

      {!!receivedUserData ?
        pageRenderer(currentPage)
        // <ul>
        //   {receivedUserData.map((user) => {
        //     return <div key={user._id}>
        //         <li>{user.username}</li>
        //         <li>{user.email}</li>
        //       </div>
        //   })}
        // </ul>
      :
        <p>data is not here</p>
      }
    </>
  );
}
export default User;