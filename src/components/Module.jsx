import React, { useContext } from 'react'
import IsChecked from './IsChecked'
import { ProductsContext } from '../App'

const Module = ({ detail, setDetail }) => {
    const [_, dispatch] = useContext(ProductsContext)
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
        <div className='fixed top-0 left-0 w-full h-screen bg-black/70 z-10 flex justify-center items-center'>
            <div className='bg-white gap-3 flex flex-row rounded-lg relative p-5 w-full mx-3 sm:mx-10  md:w-[700px]'>
                <div className='relative w-[70%]'>
                    <div className='bg-green-600 absolute bottom-0 left-0 rounded text-white text-sm px-1'>
                        {detail.category}
                    </div>
                    <IsChecked cardId={detail.id} />
                    <img className='w-full rounded-md aspect-square object-cover' src={detail.thumbnail} alt="" />
                </div>
                <div className='flex flex-col w-full   gap-3'>
                    <h1 className='text-slate-900 text-xl font-bold'>{detail.title}</h1>
                    <div className='flex items-center '>
                        <div>
                            <span className='text-red-500 font-semibold'><del>${detail.price}</del></span>
                            <span className='text-gray-400 text-[12px]'>(-{detail.discountPercentage})%</span>
                        </div>
                        <span className='text-green-500 font-semibold ms-7'>${(detail.price * (100 - detail.discountPercentage) / 100).toFixed(2)}</span>
                    </div>
                    <div className='text-yellow-500 flex gap-2'><span className='font-semibold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 fill-yellow-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </span> ({detail.rating})
                    </div>
                    <p>{detail.description}</p>
                    <div className='flex gap-3 mt-auto'>
                        <button onClick={() => toggleHandler("cart", "UPDATE_CART", detail)} className='rounded-md flex-1 justify-center flex items-center gap-2 p-2 text-center bg-green-500 text-white'>
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <span>Buy</span>
                            </>
                        </button>
                        <button onClick={() => toggleHandler("wishlist", "UPDATE_WISHLIST", detail)} className='rounded-md p-2 text-center bg-red-500 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </button>
                        <button onClick={() => setDetail("")} className='rounded-md p-2 text-center bg-yellow-400 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module