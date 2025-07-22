import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const ProductModal = ({ data, setShowModal, cartBoolean, setCartBoolean }) => {



  return (
    <div 
      className='fixed inset-0 bg-black/30 flex justify-center items-center z-50 backdrop-blur-sm'
      onClick={() => setShowModal(false)}
    >
      <div 
        className='bg-white rounded-xl w-[80%] h-[80%] flex shadow-lg overflow-hidden relative'
        onClick={(e) => e.stopPropagation()}>
        <div className='w-[45%] h-full relative'>
          <div 
            className='absolute p-2 bg-amber-500 rounded-full top-4 left-4 cursor-pointer hover:bg-amber-600 transition' onClick={() => setShowModal(false)} >
            <FaArrowLeftLong color="white" size={20} />
          </div>
          <img 
            src={data.image} 
            
            className='object-cover h-full w-full rounded-l-xl' 
          />
        </div>

 <div className='w-[55%] p-8 flex flex-col justify-between'>
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>{data.title}</h2>
            <p className='text-gray-600 text-sm mb-4'>{data.description}</p>

            <div className='flex items-center gap-1 text-yellow-400 text-2xl mb-4 pl-90'>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <div className='mb-4'>
              <h3 className='text-lg font-bold mb-1'>Description</h3>
              <p className='text-black'>"Our signature Spicy Chicken Burger is a bold fusion of flavor and texture — featuring a juicy, marinated chicken breast, perfectly grilled and layered with crisp</p>
            </div>

            <div className='mb-4'>
              <span className='font-semibold text-black text-2xl '>Ingredients:</span>
              <p className='text-black pt-6'>{data.ingredients}</p>
            </div>
            <div className='text-2xl font-semibold text-yellow-600 mt-15 flex justify-center items-center gap-50'>
              Rs:1000 
               <span className='cursor-pointer text-white rounded-full px-10 py-1   border bg-amber-300 '>Add to cart</span>
         
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
