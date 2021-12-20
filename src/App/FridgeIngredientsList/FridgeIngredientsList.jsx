import Item from "./FridgeIngredient/FridgeIngredient";
import Flex from "components/Flex/Flex";
import { useSelector } from "react-redux";
import { getIngredientsFormFridge } from "store/fridge/fridge";

function FridgeIngredientsList(props) {
  const fridgeState = useSelector(getIngredientsFormFridge);
  return (
    <Flex flexWrap="wrap" justifyContent="space-around" {...props}>
      {fridgeState.map((ingredient) => (
        <Item key={ingredient.id} ingredient={ingredient} />
      ))}
    </Flex>
  );
}

export default FridgeIngredientsList;
