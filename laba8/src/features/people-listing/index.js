import React from "react";
import ProductListItem from "../people-listing/people-list";
import { connect } from "react-redux";

function ProductListing(props) {
  return (
    <div className="List">
      {props.products.map((product) => {
        return (
          <div>
            <ProductListItem
              product={product}
              addToFriends={props.addToFriends}
              removeFromFriends={props.removeFromFriends}
              friend={
                props.cart.filter((friend) => friend.id === product.id)[0]
              }
            />
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToFriends: (item) => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromFriends: (item) => {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
