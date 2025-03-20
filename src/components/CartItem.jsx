import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../app/features/cartSlice";

function CartItem({ d }) {
  const { totalPrice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div className="your-card-item">
      <div className="your-card-product-price-name-wrapper">
        <h4 className="your-card-product-name"> {d.name}</h4>
        <p className="your-card-product-price">
          <span>{d.amount}x</span>
          <span>
            @ ${d.price} <b>${d.price * d.amount}</b>
          </span>
        </p>
      </div>
      <div onClick={() => dispatch(removeFromCart(d.id))} className="remove">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default CartItem;
