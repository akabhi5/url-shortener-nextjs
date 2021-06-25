import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Link href="/">Shorten URL</Link>
        </a>
        <div id="navbarSupportedContent">
          <ul
            style={{
              "list-style-type": "none",
              margin: "0",
              padding: "0",
            }}
            className=" ms-auto mb-2 mb-lg-0"
          >
            <li
              style={{ display: "inline", float: "left" }}
              className="nav-item"
            >
              <a className="nav-link active" aria-current="page" href="#">
                <Link href="login">Login</Link>
              </a>
            </li>
            <li
              style={{ display: "inline", float: "left" }}
              className="nav-item"
            >
              <a className="nav-link" href="#">
                <Link href="/signup">Signup</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
