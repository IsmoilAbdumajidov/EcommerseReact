import React, { useContext, useEffect, useRef, useState } from 'react'
import { ProductsContext } from '../App'
import { fetchAllProducts, getProductByCategory, searchProduct } from '../fetches/productsFetch'
import { Link, useSearchParams } from 'react-router-dom'

const SearchBar = () => {
  const [categories, setCategories] = useState([])
  const [state, dispatch] = useContext(ProductsContext)
  const inpRef = useRef()
  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const resp = await fetch("https://dummyjson.com/products/categories")
        const data = await resp.json()
        setCategories(["all", ...data])
      } catch (error) {
        console.log(error);
      }
    }
    getAllCategory()
  }, [])

  const [searchP, setSearchP] = useSearchParams()

  const selectHandler = (e) => {
    e.target.value === "all" ? fetchAllProducts(dispatch) : getProductByCategory(e.target.value, dispatch)
  }
  const searchHandler = () => {
    // console.log(inpRef);
    const inputValue = inpRef.current.value
    setSearchP({ q: inputValue })
    searchProduct(inputValue, dispatch)

  }
  return (
    <div className='bg-red-500 p-3 sticky top-0 z-10'>
      <div className="main-container gap-4 flex justify-between items-center flex-wrap">
        <div className='bg-slate-800 py-3 w-full sm:w-max px-3 flex align-items-center gap-4 rounded-md text-white '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <select onChange={selectHandler} className='bg-transparent outline-none w-full sm:min-w-[150px]'>
            {categories.map((item, i) => (
              <option key={i} className='text-black' value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className='flex w-full lg:w-auto order-1 items-center'>
          <input ref={inpRef} type="text" className='outline-none py-3 text-[14px] px-2 rounded-s-md w-full  lg:w-[400px] xl:w-[500px]' placeholder='Search products...' />
          <button onClick={searchHandler} className='py-3 px-8 bg-slate-800 text-[14px] rounded-e-md text-white'>Search</button>
        </div>
        <div className='flex w-full justify-around sm:w-auto lg:order-1 gap-6 items-center'>
          <Link to={"wish-list"}>
            <div className='text-center relative flex justify-center flex-col items-center text-white text-[12px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <span className='absolute top-0 right-0 w-4 h-4 flex justify-center items-center bg-slate-800 rounded-full'>{state.wishlist.length}</span>
              <p>Wish list</p>
            </div>
          </Link>
          <Link to={"cart-list"}>
            <div className='text-center relative flex justify-center flex-col items-center text-white text-[12px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <span className='absolute top-0 right-0 w-4 h-4 flex justify-center items-center bg-slate-800 rounded-full'>{state.cart.length}</span>
              <p>Cart</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className='text-center relative flex justify-center flex-col items-center text-white text-[12px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <p>Home</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchBar