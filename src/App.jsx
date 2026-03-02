import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes,Route } from 'react-router-dom'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'


const App = () => {
  return (
     <>
      <Routes>
        <Route path="/" element={<Home Name={"Devika"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<Product />} />
       <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
     </>
  )
}

export default App
