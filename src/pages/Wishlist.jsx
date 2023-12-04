import React, { useContext } from 'react'
import { ProductsContext } from '../App'
import Product from '../components/Product'

const Wishlist = () => {
    const [{ wishlist }, _] = useContext(ProductsContext)
    return (
        <div className='mt-10 min-h-[45vh] w-full main-container px-5 sm:px-auto'>
            {
                wishlist.length ? <Product page={"wishlist"} products={wishlist} /> : <h1>Mahsulotlar yo'q....</h1>
            }
        </div>
    )
}

export default Wishlist