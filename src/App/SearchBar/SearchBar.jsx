import Input from "components/Input/Input";
import { colorFourth } from "../style/theme/theme";

const SearchBar = () => (
  <Input w="200px" placeholder="Search" borderColor={colorFourth} />
);

export default SearchBar;
