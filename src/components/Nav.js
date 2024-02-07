import React from "react";
import "../css/Nav.css";
import NavDropDown from "./NavDropDown";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex nav">
      <ul className="flex nav_ul">
        <li>GET</li>
        <li>POST</li>
        <li>PATCH</li>
        <li>DELETE</li>
      </ul>
      <ul className="flex nav_pages">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link
            to="https://github.com/TusharMishra9695/Your-API-Backend"
            target="_blank"
          >
            Github
          </Link>
        </li>
        <li>
          <Link to="/">Donate</Link>
        </li>
      </ul>
      {/* <NavDropDown /> */}
    </div>
  );
}
