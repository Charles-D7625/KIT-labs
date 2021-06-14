import React from "react";
import { NavLink } from "react-router-dom";
import Router from "./Router";

import Busqet from "./features/friend.list/Busqet";

const Navigation = (props) => (
  <nav className="Navigation">
    <ul className="Navigation-bar">
      <li>
        <NavLink to="/">Люди</NavLink>
      </li>
      <li>
        <NavLink to="friend.list">
          Друзья(
          <Busqet />)
        </NavLink>
      </li>
    </ul>
  </nav>
);

function App() {
  return (
    <div className="page-container">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
