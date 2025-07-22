const productdataapi = async (setProductData, setMaindata) => {
  const request = await fetch("https://dummyjson.com/recipes");
  const response = await request.json();

  if (request.status == 200) {
    setProductData(response.recipes);
    setMaindata(response.recipes);
  }
};
export default productdataapi;
