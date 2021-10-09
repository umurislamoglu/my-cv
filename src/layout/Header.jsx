import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {


  return (
    <header
    id="header"
      className=" navbar d-flex  justify-content-center align-items-center sticky-sm-top "
      style={{ backgroundColor: "#F2821A" }}
    >
      <div className="container">
        <h1 className="d-inline nav-item fs-2 me-auto">
          <NavLink
            exact
            to="/"
            className="navbar-brand text-decoration-none text-dark websiteBrand"
          >
            Umur Islamoglu
          </NavLink>
        </h1>

        <NavLink
          to="/"
          className="text-decoration-none  text-light nav-item p-2 bd-highlight "
        >
          About
        </NavLink>
        <NavLink
          to="/portfolio"
          className="text-decoration-none  text-light nav-item p-2 bd-highlight "
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/comments"
          className="text-decoration-none text-light nav-item p-2 bd-highlight "
        >
          Comments
        </NavLink>
        <NavLink
          to="/contact"
          className="text-decoration-none text-light nav-item p-2 bd-highlight "
        >
          Contact
        </NavLink>
        
      </div>
    </header>
  );
};

export default Header;
