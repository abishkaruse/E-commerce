import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const Ordersuccess = ({ success, setSuccess }) => {
  return (
    <div
      className={`${
        success ? "flex" : "hidden"
      } fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50`}
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center animate-fadeIn">
        <div className="flex flex-col items-center gap-4">
          <IoCheckmarkCircle className="text-green-500 text-5xl" />
          <h2 className="text-2xl font-bold text-gray-800">Order Successful</h2>
          <p className="text-gray-500">
            Thank you for your purchase! Your order has been placed.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ordersuccess;
