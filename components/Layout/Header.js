import React from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const user = null;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Shorten URL</a>
        </Link>
      </div>

      <nav>
        <ul className="mt-2">
          {user ? (
            // If logged in
            <>
              <li>
                <div
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FaSignOutAlt /> Logout
                </div>
              </li>
            </>
          ) : (
            // Ig logged out
            <>
              <li>
                <Link href="/login">
                  <a className="btn-icon">Login</a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <a className="btn-icon">Signup</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
