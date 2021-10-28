import Item from "./Item/Item";
import { useSelector } from "react-redux";
import { getAllRecipes } from "store/recipes/recipes";

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
  const recipesList = useSelector(getAllRecipes);

  console.log(recipesList);
  return (
    <ul>
      {recipesList.map((recipes) => (
        <Item key={recipes.id} item={recipes.title} />
      ))}
    </ul>
  );
}

export default ItemsList;
