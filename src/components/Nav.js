import React from "react";
import "../css/Nav.css";

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
        <li>Home</li>
        <li>Github</li>
      </ul>
    </div>
  );
}
