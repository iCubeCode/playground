import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Screens/Home'
import HeaderLayout from './layouts/HeaderLayout'
import Products from './Screens/Products'
import Cart from './Screens/Cart'
import Wishlist from './Screens/Wishlist'
import Orders from './Screens/Orders'

function App() {
  return (
    <Routes>

      <Route element={<HeaderLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/orders' element={<Orders />} />
      </Route>



    </Routes>
  )
}

export default App
