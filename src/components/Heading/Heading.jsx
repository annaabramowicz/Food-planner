import { Heading as ChakraHeading } from "@chakra-ui/layout";
import { fontFamilyPrimary } from "App/style/theme/theme";

const Heading = (props) => (
  <ChakraHeading fontFamily={fontFamilyPrimary} {...props} />
);

export default Heading;
