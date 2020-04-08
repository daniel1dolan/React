let cartReducer = (state, action) => {
  if (state === undefined) {
    state = {
      totalCost: 99,
      productCart: [
        {
          productName: "Gucci Flip Flops",
          productPrice: 99
        }
      ]
    };
  }
  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        totalCost: state.totalCost + parseInt(action.productData.productPrice),
        productCart: state.productCart.concat(action.productData)
      };
    case "deleteProduct":
      let updateArray = state.productCart.filter(itemObj => {
        return itemObj.productName != action.productData.productName;
      });
      return {
        ...state,
        totalCost: state.totalCost - parseInt(action.productData.productPrice),
        productCart: updateArray
      };
    default:
      return state;
  }
};

export default cartReducer;
