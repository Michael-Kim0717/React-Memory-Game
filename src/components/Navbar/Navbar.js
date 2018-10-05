import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Animal Memory Game
    </Link>
  </nav>
);

export default Navbar;
