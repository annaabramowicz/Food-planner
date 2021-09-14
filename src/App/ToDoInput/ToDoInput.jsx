import PropTypes from "prop-types";
import Input from "components/Input/Input";

const ToDoInput = ({ setValue, currentInputValue }) => {
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Input
      onChange={onInputChange}
      value={currentInputValue}
      placeholder="Insert your ToDo"
    />
  );
};
ToDoInput.propTypes = {
  setValue: PropTypes.func,
  currentInputValue: PropTypes.string,
};
export default ToDoInput;
