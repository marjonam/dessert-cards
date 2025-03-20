import Dessert from "./Dessert";

function DessertList({ desserts }) {
  return (
    <>
      <div>
        <h1 className="main-title">Desserts</h1>
        <div className="desserts-list">
          {desserts.map((d) => {
            return <Dessert key={d.id} d={d} />;
          })}
        </div>
      </div>
    </>
  );
}

export default DessertList;
