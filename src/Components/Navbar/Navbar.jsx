import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className={styles.navbar}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className={styles.navbuttons}>
            <Link to="/">Home</Link>
            <Link to="/attorney">Attorney</Link>
            <Link to="/practice-areas">Practice Areas</Link>
            <Link to="/about-us">About Us</Link>
          </div>
          <div className={styles.Button}>
            <button type="button"> Contact Now </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
