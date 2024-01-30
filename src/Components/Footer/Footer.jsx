import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../Assets/logo1.png";
import { Link } from "react-router-dom";
import Social from "../../Assets/social.png";

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <div>
          <nav className={styles.Footermain}>
            <Link to="/">
              <img
                className={styles.Footerimage}
                src={Logo}
                alt="Logo"
                width={143}
              />
            </Link>
            <div className={styles.footernav}>
              <Link to="/">Home</Link>
              <Link to="/attorney">Attorney</Link>
              <Link to="/practice-areas">Practice Areas</Link>
              <Link to="/about-us">About Us</Link>
            </div>
            <div className={styles.Social}>
              <img src={Social} alt="facebook" height="25px" />
            </div>
          </nav>
          <div className={styles.Copyrights}>
            <p>
              &copy;2024 Acme. All right reserved. | Privacy Policy | Terms of
              Service
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
