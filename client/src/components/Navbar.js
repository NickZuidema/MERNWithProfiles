//import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link to="/profile" style={{ color: "black" }}>
            Profile
          </Link>
        </li>,
        <li>
          <Link to="/createitem" style={{ color: "black" }}>
            Create Item
          </Link>
        </li>,
        <li>
          <button
            className="btn waves-effect waves-light black"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              navigate("/signin");
            }}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link to="/signup" style={{ color: "black" }}>
            Sign up
          </Link>
        </li>,
        <li>
          <Link to="/signin" style={{ color: "black" }}>
            Sign in
          </Link>
        </li>,
      ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper white">
        <Link
          to={state ? "/" : "signin"}
          className="brand-logo left"
          style={{ color: "black" }}
        >
          UMarket
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
