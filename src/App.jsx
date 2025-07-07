import React from 'react'
import Navbar from './Component/Navbar'
import HeroSection from './Component/HeroSection/HeroSection'
import Caterogies from './Component/Caterogies/Caterogies'
import Product from './Component/Product/Product'

const App = () => {
  return (
    <div className='p-5 '>
     <Navbar/>
     <HeroSection/>
     <Caterogies/>
     <Product/>
    </div>
  )
}

export default App
