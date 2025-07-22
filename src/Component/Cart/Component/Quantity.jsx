import React from 'react'
import addQuantity from '../../Product/Component/LocalStorage/addQuantity';
import subQuantity from '../../Product/Component/LocalStorage/SubQuantity';

const Quantity = ({data,setCartData}) => {
  return (
    <div className='flex items-center gap-5'>
      <div className='w-6 h-6 flex justify-center item-center rounded-md bg-red-600 text-white font-semibold cursor-pointer' onClick={()=>subQuantity(data,setCartData)}>
        -
      </div>
      <div className='font-semibold text-lg'>{data.quantity}</div>
        <div className='w-6 h-6 flex justify-center items-center rounded-md bg-green-600 text-white font-semibold cursor-pointer' onClick={()=> addQuantity (data , setCartData)}
          >
            +
        </div>
    </div>
  )
}

export default Quantity;
