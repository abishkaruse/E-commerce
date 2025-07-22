import React, { useEffect, useState } from 'react';
import Card from './Component/Card';
import productdataapi from '../Api/productdata.api';

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    productdataapi(setProductData);
  }, []);



  return (
    <div className='px-4 py-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {productData.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
