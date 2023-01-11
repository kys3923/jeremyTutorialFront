// components
import Header from './components/header.js';
// pages
import Landing from './pages/Landing.js';
import User from './pages/User.js';
import Login from './pages/Login'
import Register from './pages/userRoutes/Register';
import Tictactoe from './pages/Tictactoe.js';

// pages- todo
import TodoLanding from './pages/TodoLanding';
import TodoPage from './pages/todo/TodoPage.js';
import TodoRegister from './pages/todo/TodoRegister.js';

// imports
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet} from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {

  const ClientRoute = () => {
    if(sessionStorage.authToken) {
      return <Outlet />
    } else {
      return <Navigate to='login' />
    }
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path='register' element={<Register />} />
        
        {/* userRoutes */}
        <Route element={<ClientRoute />}>
          <Route path="user" element={<User />} />

          <Route path='todo' element={<TodoLanding />} />
          <Route path='todo/register' element={<TodoRegister />} />
          <Route path='todo/:id' element={<TodoPage />} />
          
          <Route path="tictactoe" element={<Tictactoe />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App;
