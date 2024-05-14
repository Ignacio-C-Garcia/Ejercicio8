import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import groceries from "./data/groceries";
function App() {
  const [itemList, setItemList] = useState([]);
  return (
    <div className="row">
      <div className="col-6 align-self-start">
        <p>Productos disponibles</p>
        <ProductList
          groceries={groceries}
          shoppingCart={itemList}
          setShoppingCart={setItemList}
        />
      </div>
      <div className="col-6 align-self-start">
        <p>Carrito de Compras</p>
        <ShoppingCart itemList={itemList} />
        {itemList.length > 0 ? (
          <p>
            Precio Total:{" "}
            {itemList
              .reduce(
                (total, currentV) => total + currentV.qty * currentV.unitPrice,
                0
              )
              .toFixed(1)}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
