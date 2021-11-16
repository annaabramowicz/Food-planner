import Item from "./Ingredient/Ingredient";
import Flex from "components/Flex/Flex";
import { useSelector } from "react-redux";
import { getIngredients } from "store/ingredients/ingredients";
import LoadingSpinner from "App/LoadingSpinner/LoadingSpinner";

function IngredientsList() {
  const ingredientsList = useSelector(getIngredients);
  const loadingSpinnerSwitched = ingredientsList.loading ? (
    <Flex flexWrap="wrap" justifyContent="space-around">
      {ingredientsList.ingredients.map((ingredient) => (
        <Item key={ingredient.id} ingredient={ingredient} />
      ))}
    </Flex>
  ) : (
    <LoadingSpinner />
  );

  return <>{loadingSpinnerSwitched}</>;
}

export default IngredientsList;
