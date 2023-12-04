import React, { useContext } from 'react'
import Product from '../components/Product'
import { ProductsContext } from '../App'

const Home = () => {
  const [{ products }, _] = useContext(ProductsContext)

  return (
    <div className='mt-10 min-h-[45vh] main-container px-5 sm:px-auto'>
        <Product page={"home"} products={products}/>
    </div>
  )
}

export default Home