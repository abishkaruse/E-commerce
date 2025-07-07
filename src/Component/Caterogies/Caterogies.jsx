import React from 'react';

const icons = [
  { name: "All", src: "burger.png" },
  { name: "Fast food", src: "pizza.png" },
  { name: "Drinks", src: "juices.png" },
  { name: "Spicy", src: "noodle.png" },
  { name: "Sweets", src: "sweets.png" },
];

const Categories = () => {
  return (
    <div className="px-4 py-6">
      <div className="text-2xl text-black font-bold mb-4 p-4">Categories</div>

      <div className="flex flex-wrap gap-6 md:gap-40 justify-center md:justify-start">
        {icons.map((item) => (
          <div
            className="flex flex-col items-center gap-2 cursor-pointer font-medium"
            key={item.name}
          >
            <div className="bg-amber-300 border border-amber-300 rounded-3xl p-4 w-20 h-20 flex items-center justify-center">
              <img
                src={item.src}
                alt={item.name}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="text-sm md:text-base">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
