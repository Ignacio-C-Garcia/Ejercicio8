export default function ShoppingCart({ itemList }) {
  return (
    <ul className="list-group">
      {itemList.map((item) => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.name} {item.qty}
          </li>
        );
      })}
    </ul>
  );
}
