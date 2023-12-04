import React, { createContext, useEffect, useReducer } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './components/Product'
import { reduserFunc } from './reducer/reducerFunc'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'

export const ProductsContext = createContext()

const initilValue = {
  products: [],
  cart: [],
  wishlist: [],
}

const App = () => {
  useEffect(() => {
    let dataFromLS_Cart = JSON.parse(localStorage.getItem("cart")) || []
    let dataFromLS_Wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
    dispatch({ type: "UPDATE_CART", payload: dataFromLS_Cart })
    dispatch({ type: "UPDATE_WISHLIST", payload: dataFromLS_Wishlist })
  }, [])

  const [state, dispatch] = useReducer(reduserFunc, initilValue)
  return (
    <ProductsContext.Provider value={[state, dispatch]}>
      <div className='flex flex-col h-full'>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart-list' element={<Cart />} />
          <Route path='/wish-list' element={<Wishlist />} />
        </Routes>
        <Footer />
      </div>
    </ProductsContext.Provider>
  )
}

export default App