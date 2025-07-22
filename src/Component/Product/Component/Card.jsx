import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import ProductModal from '../modal/ProductModal';
import addTocart from './LocalStorage/addTocart';

export const Card = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const [cartBoolean, setCartBoolean] = useState(false);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        setCartBoolean(prev => !prev);
    };
    const addItemToCart=()=>{
        if(!cartBoolean){
        addTocart(data);
        }
    }

    return (
        <>
            <div
                className="max-w-sm w-full bg-white rounded-2xl shadow-md m-4 p-4 cursor-pointer transition-transform hover:scale-105"
                onClick={() => setShowModal(true)} >      
                <img
                    src={data.image}className="h-48 w-48 object-cover rounded-lg mx-auto mb-4"/>

               <span className="text-xs text-black font-medium px-3 py-1 rounded-full mb-3 flex justify-center">
                    {data.mealType}
                </span>

               
                <div className="flex justify-between items-center px-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{data.name}</h3>
                    <div className="flex text-yellow-400 text-lg">
                        {[...Array(4)].map((_, index) => (
                            <FaStar key={index} />
                        ))}
                    </div>
                </div>
                 <div className="flex justify-between items-center px-2 mt-4">
                    <span className="text-lg font-semibold text-gray-800">Rs: 1000</span>
                    <button
                        className={`flex items-center cursor-pointer gap-2 px-4 py-1 rounded-xl font-semibold transition-colors ${
                            cartBoolean ? 'bg-green-500 text-white' : 'bg-amber-400 text-black' }`}
                       onClick={(e)=>{
                        handleAddToCart(e);
                        addItemToCart();
                       }} >
                        <IoCart />
                        <span>{cartBoolean ? 'Added' : 'Add to Cart'}</span>
                    </button>
                </div>
            </div>
            {showModal && <ProductModal data={data} setShowModal={setShowModal} />}
        </>
    );
};

export default Card;
