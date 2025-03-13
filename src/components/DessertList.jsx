import { Dessert } from "./";

function DessertList({ desserts }) {
  return (
    <div className="dessert-list">
      {desserts.map((d) => (
        <Dessert key={d.id} d={d} />
      ))}
    </div>
  );
}

export default DessertList;
