const subQuantity = (data, setCartData) => {
  const localData = JSON.parse(localStorage.getItem("cart1"));
  const index = localData.findIndex((item) => item.id == data.id);

  if( localData[index].quantity >1){
localData[index].quantity -= 1;
  }
  
  localStorage.setItem("cart1", JSON.stringify(localData));
  setCartData(localData);
};
export default subQuantity;