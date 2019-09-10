import React, { Component } from "react";
import PropTypes from "prop-types";
export class TodoItem extends Component {
  state = {};
  method = () => {
    return {
      background: "#ccc",
      padding: "10px",
      border: "1px #ffffff dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.method()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}
//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
const btnStyle = {
  background: "red",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "50%",
  float: "right"
};
export default TodoItem;
