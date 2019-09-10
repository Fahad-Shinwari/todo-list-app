import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Todo List</h1>
      <Link style={styleTo} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={styleTo} to="/about">
        About
      </Link>
    </header>
  );
}
export default Header;
const styleTo = {
  color: "#000",
  textDecoration: "none"
};
