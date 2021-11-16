import Input from "components/Input/Input";
import InputGroup from "components/Input/InputGroup/InputGroup";
import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";
import { colorPrimary, colorThird } from "../style/theme/theme";
import Icon from "components/Icon/Icon";
import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getIngredientsAsyc } from "store/ingredients/ingredients";
import { throttle } from "lodash-es";

const throttledSearchIngredientsAsync = throttle(
  (dispatch, value) => {
    dispatch(getIngredientsAsyc(value));
  },
  3000,
  { leading: false }
);

const SearchBar = ({
  inputGroupProps,
  borderColor = "transparent",
  placeholder,
}) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onValueChange = (e) => {
    const searchTerm = e.target.value;
    setValue(searchTerm);
    // console.log(value);
    // throttledSearchIngredientsAsync(dispatch, value);
    throttledSearchIngredientsAsync(dispatch, searchTerm);
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
        onChange={onValueChange}
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
