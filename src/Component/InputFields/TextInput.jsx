import React from "react";

const TextInput = ({ lable, placeholder, ref, err }) => {
  return (
    <div>
      <div className="text-sm font-semibold text-gray-900">
        {lable}
        <input
          className={`border focus:outline-none w-full ${
            err ? "border-red-600" : "border-gray-300"
          } p-1 px-2`}
          placeholder={placeholder}
          ref={ref}
        />
        <div className="h-5 text-xs text-rose-500 px-2">
          {err && "please enter a valid input"}
        </div>
      </div>
    </div>
  );
};

export default TextInput;
