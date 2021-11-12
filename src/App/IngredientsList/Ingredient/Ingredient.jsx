import Flex from "components/Flex/Flex";
import Text from "components/Text/Text";
import { colorFourth } from "App/style/theme/theme";

function Ingredient({ ingredient }) {
  const imageSize = `100x100`;
  const imagePath = `https://spoonacular.com/cdn/ingredients_${imageSize}/`;
  return (
    <Flex
      border="1px"
      borderColor={colorFourth}
      borderRadius="10px"
      p={1}
      m={1}
      flexDirection="column"
    >
      <Flex minH="100px" minW="120px">
        <img src={imagePath + ingredient.image} alt={ingredient.name} />
      </Flex>
      <Text> {ingredient.name}</Text>
    </Flex>
  );
}

export default Ingredient;
