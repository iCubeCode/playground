import React from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Header from './Components/Header'
import Products from './Screens/Products'
import Cart from './Screens/Cart'
import Wishlist from './Screens/Wishlist'
import Orders from './Screens/Orders'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Route>
    </Routes>
  )
}

export default App;


const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  )
}