import Input from "components/Input/Input";
import { colorFourth } from "../style/theme/theme";

const SearchBar = () => (
  <Input
    display={{ sm: "none", md: "block" }}
    w="200px"
    placeholder="SearchBar"
    borderColor={colorFourth}
    mr={{ md: 20 }}
  />
);

export default SearchBar;
