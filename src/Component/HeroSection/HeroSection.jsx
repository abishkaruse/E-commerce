import React from 'react'

const HeroSection = () => {
  return (
    <div className='m-4'>
      <div className="bg-[url('./Heropizza.jpg')] h-[500px] md:h-[600px] bg-cover bg-center rounded-lg bg-no-repeat flex items-center">
        <div className='bg-opacity-50 w-full h-full rounded-lg flex items-center px-4 md:px-10'>
          <div>
            <div className='text-3xl md:text-6xl font-bold text-white mb-2'>
              <p className='m-0'>Order your</p>
              <p className='m-0'>favorite Food Here</p>
            </div>
            <div className='text-white  max-w-xl pt-4 mb-4 text-lg md:text-2xl'>
              Explore a world of flavors with mouthwatering recipes and culinary inspiration.
              From quick meals to gourmet dishes, satisfy every craving with our expertly curated content.
            </div>
            <div className='text-black cursor-pointer   border w-fit text-lg md:text-2xl bg-white px-4 py-2 rounded'>
              Enjoy 40% Discount on your Food
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroSection