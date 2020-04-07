import React, { Component } from "react";
import { connect } from "react-redux";
import addProduct from "../actions/addProduct";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
      product: [
        {
          productName: "Gucci Flip Flops",
          productPrice: 99
        }
      ]
    };
  }
  productNameChangeHandler = e => {
    this.setState({
      productName: e.target.value
    });
  };
  productPriceChangeHandler = e => {
    this.setState({
      productPrice: e.target.value
    });
  };
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.onAddProduct({
      productName: this.state.productName,
      productPrice: this.state.productPrice
    });
    this.setState({
      productName: "",
      productPrice: 0
    });
  };
  render() {
    return (
      <>
        Add Product
        <form onSubmit={this.onSubmitHandler}>
          <label>Product Name</label>
          <input
            type="text"
            placeholder="ProductName"
            onChange={this.productNameChangeHandler}
            value={this.state.productName}
          />
          <label>Product Price</label>
          <input
            type="number"
            placeholder="Product Price"
            onChange={this.productPriceChangeHandler}
            value={this.state.productPrice}
          />
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

//Pulls from state
let mapStateToProps = state => {
  return {
    totalCost: state.totalCost,
    productCart: state.productCart
  };
};

//Pushes to state
let mapDispatchToProps = dispatch => {
  return {
    onAddProduct: productData => dispatch(addProduct(productData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
