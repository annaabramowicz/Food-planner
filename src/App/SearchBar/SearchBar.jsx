import Input from "components/Input/Input";
import InputGroup from "components/Input/InputGroup/InputGroup";
import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";
import { colorPrimary, colorThird } from "../style/theme/theme";
import Icon from "components/Icon/Icon";
import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getIngredientsAsync } from "store/ingredients/ingredients";
import { getRecipesAsync } from "store/recipes/recipes";
import { throttle } from "lodash-es";
import { useLocation } from "react-router-dom";
import { useBreakpointValue } from "@chakra-ui/react";

const throttledSearchIngredientsAsync = throttle(
  (dispatch, value, action) => {
    dispatch(action(value));
  },
  3000,
  { leading: false }
);

const SearchBar = ({ inputGroupProps, borderColor = "transparent" }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isCurrentRouteIngredients = pathname.indexOf("ingredients") === 1;
  const searchByPlaceholder = `Search by ${
    isCurrentRouteIngredients ? `ingredients` : `recipes`
  }`;
  const placeholder = useBreakpointValue({
    base: searchByPlaceholder,
    sm: "Search",
    md: searchByPlaceholder,
  });
  const searchBarAction = isCurrentRouteIngredients
    ? getIngredientsAsync
    : getRecipesAsync;

  const onValueChange = (e) => {
    throttledSearchIngredientsAsync(dispatch, e.target.value, searchBarAction);
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
  borderColor: PropTypes.string,
};

export default SearchBar;
