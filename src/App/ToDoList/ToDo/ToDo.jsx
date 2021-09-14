import PropTypes from "prop-types";
import DeleteButton from "components/Buttons/IconButton/IconButton";
import React from "react";
import Flex from "components/Flex/Flex";

function ToDo({ todo, removeOneTodo }) {
  const onClick = () => {
    removeOneTodo(todo.id);
  };

  return (
    <li>
      <React.Fragment>
        <Flex h="5vh">
          {todo.text}
          <DeleteButton onClick={onClick}></DeleteButton>
        </Flex>
      </React.Fragment>
    </li>
  );
}

ToDo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  }),
  removeToDo: PropTypes.func,
};

export default ToDo;
