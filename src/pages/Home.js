import React, { useState } from "react";
import "../css/Home.css";

let json = `fetch('https://localhost:5000/products')
            .then(res=>res.json())
            .then(json=>console.log(json))`;
export default function Home() {
  const [show, setshow] = useState(false);
  return (
    <div className="code_component">
      <p>Multiple Products</p>
      <div className="code">
        <pre>
          <code className="code_json"> {json}</code>
        </pre>
      </div>
      <span onClick={() => (show ? setshow(false) : setshow(true))}>
        {show ? "hide output" : "show output"}
      </span>
      {show && (
        <div className="code">
          <pre>
            <code className="code_json"> {json}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
