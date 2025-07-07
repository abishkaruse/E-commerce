import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

export const Card = ({data}) => {
    console.log("data from card", data)
  return (
    <div className='max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden m-4 p-4 transition-transform '>
        <div className='flex justify-center mb-4'>
       <img src={data.image} alt="" className='h=60 w-60'/>
        </div>

        <div className='text-2xl  text-black pl-30'>{data.mealType}</div>
        <div className='flex flex-row font-bold gap-2 max-w-60 mx-5 '>
            <div>{data.name}</div>
            <div className='flex-row flex text-yellow-300'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                
            </div>
</div>
<div className='flex justify-between items-center mt-2'>
<div className='text-lg font-bold text '>RS.2000</div>
<button className='flex items-center font-bold gap-1 bg-amber-400 text-black px-3 py-1 rounded-xl '>
<IoCart />
<span>Add to cart</span>
</button>

</div>
    </div>

  );
};

export default Card;
