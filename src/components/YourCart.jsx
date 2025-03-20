import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import OrderConfirmed from "./OrderConfirmed";

function YourCart() {
  const { desserts, totalAmount, totalPrice } = useSelector(
    (store) => store.cart
  );
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <OrderConfirmed setShowModal={setShowModal} />}
      <div className="your-cart">
        <h3 className="cart-amount">YourCart({totalAmount})</h3>
        {desserts.map((d) => {
          return d.amount !== 0 && <CartItem key={d.id} d={d} />;
        })}
        {totalAmount == 0 && (
          <div className="your-cart-empty">
            <img
              src="../images/illustration-empty-cart.svg"
              alt=""
              width={128}
              height={128}
            />
            <p className="cart-item">Your added items will appear here.</p>
          </div>
        )}
        {totalAmount !== 0 && (
          <div>
            <div className="order-total">
              <p>Order Total</p>
              <h2>${totalPrice}</h2>
            </div>
            <div className="delivery">
              <img src="./images/icon-carbon-neutral.svg" alt="" />
              <p>
                This is a<strong> carbon-neutral </strong>
                delivery
              </p>
            </div>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="order-btn"
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default YourCart;
