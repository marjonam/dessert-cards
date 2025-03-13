import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../app/features/cartSlice";

function Dessert({ d }) {
  const dispatch = useDispatch();
  const { selectedDesserts } = useSelector((store) => store.cart);
  const currentItem = selectedDesserts.find((item) => item.id === d.id);

  return (
    <div className="dessert-card">
      <img className="dessert-image" src={d.image.thumbnail} alt={d.name} />
      <div className="dessert-info">
        <p className="dessert-name">{d.name}</p>
        <p className="dessert-price">${d.price.toFixed(2)}</p>
        <div className="dessert-buttons">
          <button onClick={() => dispatch(addToCart(d))}>Add to Card</button>
          <button onClick={() => dispatch(increaseQuantity(d.id))}>+</button>
          <span>{currentItem ? currentItem.amount : 0}</span>
          <button onClick={() => dispatch(decreaseQuantity(d.id))}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Dessert;
