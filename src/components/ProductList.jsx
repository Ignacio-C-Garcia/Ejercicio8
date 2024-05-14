export default function ProductList({
  groceries,
  shoppingCart,
  setShoppingCart,
}) {
  const addToCart = (item) => {
    if (!shoppingCart.some((el) => el.id == item.id)) {
      return setShoppingCart([...shoppingCart, { ...item, qty: 1 }]);
    }
    setShoppingCart(
      shoppingCart.map((selected) => {
        return selected.id == item.id
          ? { ...selected, qty: ++selected.qty }
          : selected;
      })
    );
  };
  return (
    <ul className="list-group">
      {groceries.map((item) => (
        <li
          className="list-group-item"
          key={item.id}
          onClick={() => addToCart(item)}
        >
          <b>{item.name}</b> (${item.unitPrice} c/u)
        </li>
      ))}
    </ul>
  );
}
