import React, { useState } from "react";
import CartCard from "./Component/CartCard";
import Navbar from "../Navbar/Navbar";
import OrangeButton from "../Button/OrangeButton";
import totalAmount from "../ComponentFunction/totalAmount";
import CheckOut from "./Component/CheckOut";

const Cart = () => {
  const [visible, setVisible] = useState(false);
  let data = localStorage.getItem("cart1");
  const [cartData, setCartData] = useState(JSON.parse(data) || []);

  return (
    <div>
      <Navbar />
      <div className="mx-5  space-y-5">
        {cartData.map((item) => (
          <CartCard data={item} key={item.id} setCartData={setCartData} />
        ))}
      </div>
      <div className="mt-54 h-21 w-[100vw] bg-yellow-400 z-10">
        <hr className="my-5" />
        <div className="mx-5 flex justify-between items-center  ">
          <OrangeButton title={"Check Out"} onClick={() => setVisible(true)} />
          <div className="flex justify-around font-bold">
            <div>Total Amount:</div>
            <div>${totalAmount(cartData)}</div>
          </div>
        </div>
        <CheckOut
          visible={visible}
          setVisible={setVisible}
          cartData={cartData}
        />
      </div>
    </div>
  );
};

export default Cart;
