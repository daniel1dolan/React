import React, { Component } from "react";
import { connect } from "react-redux";
import deleteProduct from "../actions/deleteProduct";
import "./styles.css";

class Cart extends Component {
  render() {
    return (
      <div className="main">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {this.props.productCart.map((obj, index) => {
              return (
                <tr key={index}>
                  <td>{obj.productName}</td>
                  <td>{obj.productPrice}</td>
                  <td
                    onClick={() => {
                      this.props.onDeleteProduct(obj);
                    }}
                  >
                    <button>Remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h5>Total Cost: ${this.props.totalCost} USD</h5>
      </div>
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
    onDeleteProduct: productData => dispatch(deleteProduct(productData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
