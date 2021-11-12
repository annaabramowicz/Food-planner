import Item from "./Ingredient/Ingredient";
import ingredients from "../ingredients";
import Flex from "components/Flex/Flex";
import PropTypes from "prop-types";

function IngredientsList() {
  return (
    <Flex flexWrap="wrap" justifyContent="space-around">
      {ingredients.map((ingredient) => (
        <Item key={ingredient.id} ingredient={ingredient} />
      ))}
    </Flex>
  );
}

IngredientsList.propTypes = {
  ingredients: PropTypes.array,
};

export default IngredientsList;
