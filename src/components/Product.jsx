import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../App'
import { fetchAllProducts } from '../fetches/productsFetch'
import IsChecked from './IsChecked'
import Module from './Module'

const url = "https://dummyjson.com/products"

const Product = ({ products, page }) => {
  const [_, dispatch] = useContext(ProductsContext)
  const [detail, setDetail] = useState()
  useEffect(() => {
    fetchAllProducts(dispatch)
  }, [])
  // console.log(products);
  const toggleHandler = (store, dispatchType, card) => {
    let dataFromLS = JSON.parse(localStorage.getItem(store)) || []
    const el = dataFromLS?.find(item => item.id === card.id)

    if (el) {
      const filteredArr = dataFromLS.filter(item => item.id !== card.id)
      localStorage.setItem(store, JSON.stringify(filteredArr))
      dispatch({ type: dispatchType, payload: filteredArr })
    }
    else {
      localStorage.setItem(store, JSON.stringify([...dataFromLS, card]))
      dispatch({ type: dispatchType, payload: [...dataFromLS, card] })
    }
  }


  return (

    <div className='grid pb-20  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-7 xl:grid-cols-4'>
      {detail && <Module setDetail={setDetail} detail={detail}/>}
      {
        products.map((elem, i) => (
          <div key={i} className='flex flex-col gap-4 overflow-hidden shadow rounded-md  hover:shadow-lg transition-all relative'>
            <div className='relative'>
              <div className='bg-green-600 absolute bottom-0 left-0 rounded text-white text-sm px-1'>
                {elem.category}
              </div>
              <IsChecked cardId={elem.id} />
              <img className='w-full aspect-square object-cover' src={elem.thumbnail} alt="" />
            </div>
            <div className='flex flex-col gap-3 p-3'>
              <h1 className='text-slate-900 text-xl font-bold'>{elem.title}</h1>
              <div className='flex items-center '>
                <div>
                  <span className='text-red-500 font-semibold'><del>${elem.price}</del></span>
                  <span className='text-gray-400 text-[12px]'>(-{elem.discountPercentage})%</span>
                </div>
                <span className='text-green-500 font-semibold ms-7'>${(elem.price * (100 - elem.discountPercentage) / 100).toFixed(2)}</span>
              </div>
              <div className='text-yellow-500 flex gap-2'><span className='font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 fill-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </span> ({elem.rating})
              </div>
              <div className='flex gap-3 mt-auto'>
                <button onClick={() => toggleHandler("cart", "UPDATE_CART", elem)} className='rounded-md flex-1 justify-center flex items-center gap-2 p-2 text-center bg-green-500 text-white'>
                  {
                    page === "cart" ?
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        <span>Delete</span>
                      </>
                      :
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span>Buy</span>
                      </>
                  }
                </button>
                <button onClick={() => toggleHandler("wishlist", "UPDATE_WISHLIST", elem)} className='rounded-md p-2 text-center bg-red-500 text-white'>
                  {
                    page === "wishlist" ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                  }
                </button>
                <button onClick={()=>setDetail(elem)} className='rounded-md p-2 text-center bg-yellow-400 text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Product