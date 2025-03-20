import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../app/features/cartSlice";

function OrderConfirmed({ d, setShowModal }) {
  const { totalPrice, desserts } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(desserts);
  return (
    <>
      <div onClick={() => setShowModal(false)} className="modal-overlay">
        <div className="modal">
          <div className="orderz">
            <img
              src="./images/icon-order-confirmed.svg"
              width={48}
              height={48}
              alt=""
            />
            <h1>Order Confirmed</h1>
            <span className="order-enjoy">We hope you enjoy your food!</span>
          </div>
          {desserts.map((d) => {
            return (
              d.amount !== 0 && (
                <div key={d.id}>
                  {" "}
                  <ul className="dessert-list-item order-list">
                    <li key={d.id} className="list-item">
                      <div className="order-info">
                        <img
                          src={d.image.thumbnail}
                          width={48}
                          height={48}
                          alt=""
                        />
                        <div>
                          <p className="dessert-name">{d.name}</p>
                          <div className="total">
                            <span>{d.amount}x</span>
                            <p> @ ${d.price}</p>
                          </div>
                        </div>
                      </div>
                      <b>${d.price * d.amount}</b>
                    </li>
                  </ul>
                </div>
              )
            );
          })}
          <div className="order-total total-btn">
            <p>Order Total</p>
            <h2>${totalPrice}</h2>
          </div>
          <button
            onClick={() => {
              dispatch(resetCart());
            }}
            className="order-btn"
          >
            Start New Order
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderConfirmed;
