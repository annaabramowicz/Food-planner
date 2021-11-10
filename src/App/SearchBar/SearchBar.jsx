import Input from "components/Input/Input";
import InputGroup from "components/Input/InputGroup/InputGroup";
import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";
import { colorPrimary, colorThird } from "../style/theme/theme";
import Icon from "components/Icon/Icon";
import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";

const SearchBar = ({
  inputGroupProps,
  placeholder = "Search",
  borderColor = "transparent",
  setValue,
  currentInputValue,
}) => {
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputGroup size="sm" color={colorThird} {...inputGroupProps}>
      <InputLeftElement
        children={<Icon w={4} as={IoSearch} color={colorThird} />}
      />
      <Input
        paddingLeft={8}
        borderRadius="7px"
        focusBorderColor={colorPrimary}
        placeholder={placeholder}
        borderColor={borderColor}
        onChange={onInputChange}
        value={currentInputValue}
      />
    </InputGroup>
  );
};

SearchBar.propTypes = {
  inputGroupProps: PropTypes.object,
  placeholder: PropTypes.string,
  borderColor: PropTypes.string,
};

export default SearchBar;

// InputGroup
//     color={colorThird}
//     bgColor={colorFourth}
//     variant="filled"
//     size="sm"
//     m="20px 0"
//     // w={{ sm: "200px" }}
//     {...props}
//   >
//     <InputLeftElement
//       pointerEvents="none"
//       children={<Icon as={IoSearch} color={colorThird} />}
//     />
//     <Input focusBorderColor={colorPrimary} placeholder="Search mobile" />
//   </InputGroup>
