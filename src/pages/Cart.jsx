import React, { useContext } from 'react'
import { ProductsContext } from '../App'
import Product from '../components/Product'

const Cart = () => {
    const [{ cart }, dispatch] = useContext(ProductsContext)
    let countPrice = 0
    cart?.forEach(elem => {
        let money = (elem.price * (100 - elem.discountPercentage) / 100)
        countPrice += money
    });

    const deleteHandler = () => {
        localStorage.setItem("cart", JSON.stringify([]))
        dispatch({ type: "UPDATE_CART", payload: [] })
    }

    return (
        <div className='mt-10 min-h-[45vh] main-container w-full px-5 sm:px-auto'>

            {
                cart.length ?
                    <>
                        <div className='flex pb-5 border-b-2 flex-col sm:items-center mb-10 sm:justify-between sm:flex-row'>
                            <div className='text-2xl sm:ext-3xl flex gap-3 '>
                                <h1>Total price :</h1>
                                <h1 className='font-semibold text-green-500'>${countPrice.toFixed(2)}</h1>
                            </div>
                            <button onClick={deleteHandler} className='bg-red-500 w-max rounded flex items-center px-3 py-2 text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                                <span>Delete All</span>
                            </button>
                        </div>
                        <Product page={"cart"} products={cart} />
                    </>
                    : <h1>Mahsulotlar yo'q....</h1>
            }
        </div>
    )
}

export default Cart