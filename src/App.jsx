import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from "./Component/HeroSection/HeroSection";
import Caterogies from "./Component/Caterogies/Caterogies";
import Product from "./Component/Product/Product";
import productdataapi from "./Component/Api/productdata.api";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [maindata, setMaindata] = useState([]);
  useEffect(() => {
    productdataapi(setProductData, setMaindata);
  }, []);

  return (
    <div className="p-5 ">
      <Navbar />
      <HeroSection />
      <Caterogies maindata={maindata} setProductData={setProductData} />
      <Product productData={productData} />
    </div>
  );
};

export default App;
