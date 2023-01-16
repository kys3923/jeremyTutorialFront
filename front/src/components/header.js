import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {

  const [ isAuth, setIsAuth ] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.authToken) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  },[])

  const loginButton = (e) => {
    e.preventDefault();
    navigate('/login')
  }
  
  const logoutButton = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.reload(false);
    navigate('/')
  }

  return (
    <nav>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/user'>User</a></li>
        <li><a href='/todo'>Todo</a></li>
        <li><a href='/tictactoe'>tictactoe</a></li>
        <li><a href='/todo/register'>Register Todo</a></li>
        {!isAuth ? <button onClick={loginButton}>Login</button> : <button onClick={logoutButton}>Logout</button>}
      </ul>
    </nav>
  );
}
export default Header;