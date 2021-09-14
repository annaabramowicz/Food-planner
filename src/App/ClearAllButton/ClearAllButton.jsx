import PropTypes from "prop-types";
import ClearButton from "components/Buttons/ClearButton/ClearButton";

const ClearAllButton = ({ removeAll }) => {
  const onButtonClicked = () => {
    removeAll();
  };
  return <ClearButton onClick={onButtonClicked}>CLEAR ALL</ClearButton>;
};

ClearAllButton.propTypes = {
  removeAll: PropTypes.func,
};

export default ClearAllButton;
