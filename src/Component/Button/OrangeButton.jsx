import React from "react";

function OrangeButton({ title, ...props }) {
  return (
    <div {...props}
      className="cursor-pointer flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 bg-gradient-to-r from-[#f58021] to-[#f56200] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
    >
      {title}
    </div>
  );
}

export default OrangeButton;