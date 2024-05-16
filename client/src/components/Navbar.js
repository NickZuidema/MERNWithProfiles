//import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left" style={{ color: "black" }}>
          UMarket
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/signup" style={{ color: "black" }}>
              Signup
            </Link>
          </li>
          <li>
            <Link to="/signin" style={{ color: "black" }}>
              Sign in
            </Link>
          </li>
          <li>
            <Link to="/profile" style={{ color: "black" }}>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
