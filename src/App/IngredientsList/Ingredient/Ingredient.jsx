import Flex from "components/Flex/Flex";
import Text from "components/Text/Text";
import { colorPrimary, colorFourth } from "App/style/theme/theme";
import Image from "components/Image/Image";
import config from "config/env";
import PropTypes from "prop-types";

function Ingredient({ ingredient }) {
  const imageSize = `100x100`;
  const imagePath = `${config.apiCdnUrl}ingredients_${imageSize}/`;
  return (
    <Flex
      w="120px"
      h="130px"
      border="1px"
      borderColor={colorFourth}
      _hover={{
        boxShadow: `0px 0px 0px 2px ${colorPrimary}`,
        color: colorPrimary,
        opacity: 0.8,
      }}
      borderRadius="10px"
      p="4px"
      flexDirection="column"
      m="5px"
    >
      <Flex h="100px">
        <Image
          loading="lazy"
          htmlHeight="130px"
          src={imagePath + ingredient.image}
          alt={ingredient.name}
        />
      </Flex>
      <Text>{ingredient.name}</Text>
    </Flex>
  );
}

Ingredient.propTypes = {
  ingredient: PropTypes.object,
};

export default Ingredient;
