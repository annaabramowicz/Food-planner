import PropTypes from "prop-types";
import Heading from "components/Heading/Heading";
import { useSelector } from "react-redux";
import { getTodos } from "store/todos/todos";

const CurrentNumberOfTodos = () => {
  const todosList = useSelector(getTodos);

  return (
    <Heading size="md">Current number of todos: {todosList.length}</Heading>
  );
};

CurrentNumberOfTodos.propTypes = {
  listOfTodos: PropTypes.array,
};

export default CurrentNumberOfTodos;
