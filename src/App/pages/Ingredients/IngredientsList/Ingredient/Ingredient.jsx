import Flex from "components/Flex/Flex";
import Text from "components/Text/Text";
import { colorPrimary, colorFourth } from "App/style/theme/theme";
import Image from "components/Image/Image";
import config from "config/env";
import PropTypes from "prop-types";
import { Circle } from "@chakra-ui/react";
import Icon from "components/Icon/Icon";
import { IoCheckmark } from "react-icons/io5";
import { useState } from "react";

function Ingredient({ ingredient }) {
  const imageSize = `100x100`;
  const imagePath = `${config.apiCdnUrl}ingredients_${imageSize}/`;
  const [showText, setShowText] = useState(false);
  const selectedIngredient = () => {
    setShowText(!showText);
  };

  return (
    <Flex
      m="10px 5px 0 5px"
      bg="white"
      onClick={selectedIngredient}
      w="120px"
      h="130px"
      border="1px"
      borderColor={colorFourth}
      _hover={{
        boxShadow: `0px 0px 0px 2px ${colorPrimary}`,
        color: colorPrimary,
        cursor: "pointer",
      }}
      {...(showText && {
        boxShadow: `0px 0px 0px 2px ${colorPrimary}`,
        color: colorPrimary,
      })}
      borderRadius="10px"
      p="4px"
      flexDirection="column"
    >
      <Flex h="100px" pos="relative">
        <Image
          maxH="80px"
          loading="lazy"
          htmlHeight="130px"
          src={imagePath + ingredient.image}
          alt={ingredient.name}
          opacity={showText ? 0.3 : 1}
        />
        {showText && (
          <Circle
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%,-50%)"
            size="30px"
            bg={colorPrimary}
            color="white"
          >
            <Icon as={IoCheckmark} />
          </Circle>
        )}
      </Flex>
      <Text>{ingredient.name}</Text>
    </Flex>
  );
}

Ingredient.propTypes = {
  ingredient: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default Ingredient;
