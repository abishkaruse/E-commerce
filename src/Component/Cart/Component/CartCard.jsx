import React from "react";
import StarCalc from "../../Product/Component/StarCalc";
import { BsFillTrash3Fill } from "react-icons/bs";
import Quantity from "./Quantity";
import removeFromCart from "../../Product/Component/LocalStorage/removeFromCart";

const CartCard = ({ data, setCartData }) => {
  return (
    <div className="p-2 mt-2 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col md:flex-row overflow-hidden">
      <button
        onClick={() => removeFromCart(data, setCartData)}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full z-10"
      >
        <BsFillTrash3Fill className="text-lg" />
      </button>

      <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="object-cover w-full h-full rounded-4xl"
        />
      </div>

      <div className="flex flex-col justify-between p-4 w-full">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-gray-800">{data.name}</p>
          <p className="text-sm text-gray-500">{data.tags[0]}</p>
          <Quantity data={data} setCartData={setCartData} />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <StarCalc rating={Math.floor(data.rating)} />
          <p className="text-xl font-bold text-gray-800">
            ${data.caloriesPerServing}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
