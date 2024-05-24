import React, { useEffect, createContext, useReducer, useContext } from "react";
import NavBar from "./components/Navbar";
import "./App.css";
import {
  BrowserRouter,
  Route,
  /*Router*/ Routes,
  useNavigate,
  /*Switch,*/
} from "react-router-dom";
import Home from "./components/screens/Home";
import Signin from "./components/screens/Signin";
import Profile from "./components/screens/Profile";
import Signup from "./components/screens/Signup";
import ListItem from "./components/screens/ListItem";
import UserProfile from "./components/screens/UserProfile";
import { reducer, initialState } from "./reducers/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      navigate("/signin");
    }
  }, []);
  return (
    <Routes>
      {/*A Switch was used here*/}
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
      <Route exact path="/profile/:userid" element={<UserProfile />} />
      {/*Requires /src/screens/UserProfile.js, also, 'exact' property might need to be looked at*/}
    </Routes>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
