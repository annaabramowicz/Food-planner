import Item from "./Ingredient/Ingredient";
import Flex from "components/Flex/Flex";
import { useSelector } from "react-redux";
import { getIngredients } from "store/ingredients/ingredients";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";

function IngredientsList() {
  const ingredientsState = useSelector(getIngredients);
  const renderedIngredients =
    ingredientsState.searchedIngredients?.length !== 0
      ? ingredientsState.searchedIngredients
      : ingredientsState.initialIngredients;
  return (
    <>
      {ingredientsState.loading ? (
        <LoadingSpinner />
      ) : (
        <Flex flexWrap="wrap" justifyContent="space-around">
          {renderedIngredients.map((ingredient) => (
            <Item key={ingredient.id} ingredient={ingredient} />
          ))}
        </Flex>
      )}
    </>
  );
}

export default IngredientsList;
