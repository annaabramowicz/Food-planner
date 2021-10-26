import Item from "./Item/Item";

const itemsList = [
  {
    text: "beef",
  },
  {
    text: "carrots",
  },
  {
    text: "onions",
  },
  {
    text: "eggs",
  },
  {
    text: "fish",
  },
  {
    text: "cheese",
  },
];

function ItemsList() {
  return (
    <ul>
      {itemsList.map((item) => (
        <Item key={item.text} item={item} />
      ))}
    </ul>
  );
}

export default ItemsList;
