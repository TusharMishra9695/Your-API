import React from "react";
import "../css/NavDropDown.css";

export default function NavDropDown() {
  return (
    <div className="flex dropdown">
      <div className="left ">
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>
      <ul className="rgt">
        <li>Not hello</li>
        <li>Not hello</li>

        <li>Not hello</li>
      </ul>
    </div>
  );
}
