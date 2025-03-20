import desserts from "./data";
import { YourCart, DessertList, Dessert } from "./components";
import { useSelector } from "react-redux";

function App() {
  const { desserts, totalAmount, totalPrice } = useSelector(
    (store) => store.cart
  );

  return (
    <main>
      <section className="container grid-container">
        <DessertList desserts={desserts} />
        <YourCart />
      </section>
    </main>
  );
}

export default App;
