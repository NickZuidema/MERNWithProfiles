import React from "react";
import NavBar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Route, /*Router*/ Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Signin from "./components/screens/Signin";
import Profile from "./components/screens/Profile";
import Signup from "./components/screens/Signup";
import ListItem from "./components/screens/ListItem";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/*Requires /src/screens/Home.js*/}
        <Route exact path="/signup" element={<Signup />} />
        {/*Requires /src/screens/Signup.js*/}
        <Route exact path="/signin" element={<Signin />} />
        {/*Requires /src/screens/Login.js*/}
        <Route exact path="/profile" element={<Profile />} />
        {/*Requires /src/screens/Profile.js*/}
        <Route exact path="/createitem" element={<ListItem />} />
        {/*Requires /src/screens/ListItem.js*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
