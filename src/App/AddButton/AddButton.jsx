import PropTypes from "prop-types";
import Button from "components/Buttons/Button/Button";

function AddButton({ onButtonClick, isDisabled }) {
  const onClick = () => {
    onButtonClick();
  };

  return (
    <Button type="positive" onClick={onClick} disabled={isDisabled}>
      Add
    </Button>
  );
}

AddButton.propTypes = {
  onButtonClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default AddButton;
