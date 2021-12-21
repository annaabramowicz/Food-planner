import Item from "./FridgeIngredient/FridgeIngredient";
import Flex from "components/Flex/Flex";
import { useSelector } from "react-redux";
import { getFridgeState } from "store/fridge/fridge";

function FridgeIngredientsList(props) {
  const {ingredients} = useSelector(getFridgeState);
  return (
    <Flex flexWrap="wrap" justifyContent="space-around" {...props}>
      {ingredients.map((ingredient) => (
        <Item key={ingredient.id} ingredient={ingredient} />
      ))}
    </Flex>
  );
}

export default FridgeIngredientsList;
