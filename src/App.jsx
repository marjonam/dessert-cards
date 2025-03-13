import { useSelector } from "react-redux";
import { YourCart, DessertList } from "./components";

function App() {
  const { desserts } = useSelector((store) => store.cart);

  return (
    <main className="app-container">
      <div className="content">
        <DessertList desserts={desserts} />
        <YourCart />
      </div>
    </main>
  );
}

export default App;
