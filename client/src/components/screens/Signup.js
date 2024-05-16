import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="outer-card">
      <div className="card auth-card input-field">
        <h2>UMarket</h2>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="full name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <div className="switch">
          <label>
            Customer
            <input type="checkbox" />
            <span className="lever"></span>
            Seller
          </label>
        </div>
        <button className="btn waves-effect waves-light black">Sign up</button>
        <h6>
          Already have an acccount? <Link to="/signin">Sign in</Link>
        </h6>
      </div>
    </div>
  );
};

export default Signup;
