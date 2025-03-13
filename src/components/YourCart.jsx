import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../app/features/cartSlice";

function YourCart() {
  const { selectedDesserts, totalPrice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="red">Your Cart</h2>
      {selectedDesserts.length === 0 ? <p>Cart is empty</p> : null}
      {selectedDesserts.map((d) => (
        <div key={d.id}>
          <span>
            {d.name} - ${d.price} x {d.amount}
          </span>
          <button onClick={() => dispatch(removeFromCart(d.id))}></button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default YourCart;
