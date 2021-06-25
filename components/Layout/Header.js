import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg py-4">
      <div className="container-fluid">
        <h2>
          <Link href="/">Shorten URL</Link>
        </h2>
        <div id="navbarSupportedContent">
          <ul
            style={{
              listStyleType: "none",
              margin: "0",
              padding: "0",
            }}
            className=" ms-auto mb-2 mb-lg-0"
          >
            <li
              style={{ display: "inline", float: "left" }}
              className="nav-item"
            >
              <h4 className="mx-3">
                <Link href="login">Login</Link>
              </h4>
            </li>
            <li
              style={{ display: "inline", float: "left" }}
              className="nav-item"
            >
              <h4 className="mx-3">
                <Link href="/signup">Signup</Link>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
