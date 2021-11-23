import Flex from "components/Flex/Flex";
import {colorThird, colorFourth } from "App/style/theme/theme";
import { Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => (
  <Flex height="80vh">
    <Spinner
      thickness="5px"
      speed="1.4s"
      emptyColor={colorFourth}
      color={colorThird}
      size="xl"
    />
  </Flex>
);

export default LoadingSpinner;
