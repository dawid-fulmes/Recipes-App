import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        Recipes App
      </Link>
    </header>
  );
};

export default Header;
