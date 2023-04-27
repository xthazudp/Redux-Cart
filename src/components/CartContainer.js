import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">Is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.key} {...item}></CartItem>;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
