import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="outer-card">
      <div className="card auth-card input-field">
        <h2>UMarket</h2>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button className="btn waves-effect waves-light black">Sign in</button>
        <h6>
          Don't have an acccount? <Link to="/signup">Sign up</Link>
        </h6>
      </div>
    </div>
  );
};

export default Signin;
