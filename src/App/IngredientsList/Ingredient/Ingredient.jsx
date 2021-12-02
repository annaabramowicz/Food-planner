import Flex from "components/Flex/Flex";
import Text from "components/Text/Text";
import { colorPrimary, colorFourth } from "App/style/theme/theme";
import Image from "components/Image/Image";
import config from "config/env";

function Ingredient({ ingredient }) {
  const imageSize = `100x100`;
  const imagePath = `${config.apiCdnUrl}ingredients_${imageSize}/`;
  return (
    <Flex
      border="1px"
      borderColor={colorFourth}
      _hover={{ border: `3px solid ${colorPrimary}`, color: colorPrimary }}
      borderRadius="10px"
      p={1}
      m={1}
      flexDirection="column"
    >
      <Flex h="100px" minW="120px">
        <Image
          height="100px"
          htmlHeight="100px"
          src={imagePath + ingredient.image}
          alt={ingredient.name}
        />
      </Flex>
      <Text> {ingredient.name}</Text>
    </Flex>
  );
}

export default Ingredient;
