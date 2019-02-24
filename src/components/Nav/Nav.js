import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand">
        {props.title}
      </li>
      <li id="rw">{props.isCorrectOrNot}</li>


      <li className="alignRight">SCORE - Top: {props.topScore}{" "} | Current: {props.score}</li>

    </ul>
  </nav>
);

export default Nav;