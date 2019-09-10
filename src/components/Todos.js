import React, { Component } from "react";
import TodoItem from "./todoitem";
import PropTypes from "prop-types";
class Todos extends Component {
  state = {};

  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}
//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
