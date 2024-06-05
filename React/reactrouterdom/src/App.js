import React from 'react';
import './App.css';
import { Routes, Route, Link, useNavigate, NavLink, useLocation } from 'react-router-dom'
import Home from './Components/Home';
import Profile from './Components/Profile';
import AboutUs from './Components/AboutUs';
import Users from './Components/Users';


function App() {

  const navigate = useNavigate()

  const location = useLocation()

  // console.log(location)

  function handleNavigate() {
    navigate('/profile')
  }

  return (
    <div className='app'>
      <NavigationBar />
      {/* <button onClick={handleNavigate}>Profile</button> */}
      <Routes>
        <Route path='/' element={
          <Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:username' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;


function NavigationBar() {
  return (
    <ul className='nav'>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/profile'>Profile</NavLink>
      </li>
      <li>
        <NavLink to='/aboutus'>About Us</NavLink>
      </li>
      <li>
        <NavLink to='/users'>Users</NavLink>
      </li>
    </ul>
  )
}
