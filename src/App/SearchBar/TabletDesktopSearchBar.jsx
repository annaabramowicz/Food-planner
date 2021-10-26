// import Input from "components/Input/Input";
// import InputGroup from "components/Input/InputGroup/InputGroup";
// import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";
import { colorPrimary, colorThird, colorFourth } from "../style/theme/theme";
// padding-inline-start: var(--chakra-space-3); z 8
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import Icon from "components/Icon/Icon";
import { IoSearch } from "react-icons/io5";

const TabletDesktopSearchBar = (props) => (
  <InputGroup size="sm" w={{ sm: "200px" }} color={colorThird} {...props}>
    <InputLeftElement
      pointerEvents="none"
      children={<Icon as={IoSearch} color={colorThird} />}
    />
    <Input
      focusBorderColor={colorPrimary}
      placeholder="Search tablet desktop"
      borderColor={colorFourth}
    />
  </InputGroup>
);

export default TabletDesktopSearchBar;
