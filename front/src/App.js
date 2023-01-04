// components
import Header from './components/header.js';
// pages
import Landing from './pages/Landing.js';
import User from './pages/User.js';
// import Register from './pages/userRoutes/Register.js';
// import Update from './pages/userRoutes/Update.js';
// import Delete from './pages/userRoutes/Delete.js';
import Tictactoe from './pages/Tictactoe.js';

// imports
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* userRoutes */}
        <Route path="user" element={<User />} />
          {/* <Route path='register' element={<Register />} />
          <Route path='update' element={<Update />} />
          <Route path='delete' element={<Delete />} />
        </Route> */}
        
        <Route path="tictactoe" element={<Tictactoe />} />
      </Routes>
    </Router>
  )
}

export default App;
