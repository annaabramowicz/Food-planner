import Flex from "components/Flex/Flex";
import Text from "components/Text/Text";

function Ingredient({ ingredient }) {
  const imageSize = `100x100`;
  const imagePath = `https://spoonacular.com/cdn/ingredients_${imageSize}/`;
  return (
    <Flex mb={4} flexDirection="column">
      <Flex minH="100px" minW="120px">
        <img src={imagePath + ingredient.image} alt={ingredient.name} />
      </Flex>
      <Text> {ingredient.name}</Text>
    </Flex>
  );
}

export default Ingredient;
