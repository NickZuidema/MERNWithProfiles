import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [artist, setArtist] = useState(false);
  const handleChange = (e) => {
    setArtist(e.target.checked);
  };
  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({
        html: "Invalid email.",
        classes: "#c62828 red darken-3",
      });
      return;
    } //This checks if the email is valid. The same can be done for oter fields.
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        username,
        name,
        email,
        password,
        artist,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" }); //Toast for not filling in all the fields
        } else {
          M.toast({ html: data.message });
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="outer-card">
      <div className="card auth-card input-field">
        <h2>UMarket</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="switch">
          <label>
            Customer
            <input type="checkbox" checked={artist} onChange={handleChange} />
            <span className="lever"></span>
            Seller
          </label>
        </div>
        <button
          className="btn waves-effect waves-light black"
          onClick={() => PostData()}
        >
          Sign up
        </button>
        <h6>
          Already have an acccount? <Link to="/signin">Sign in</Link>
        </h6>
      </div>
    </div>
  );
};

export default Signup;
