import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/svg/logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    return setShow(!show);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href='/'>
          <Logo />
        </a>
      </div>
      <div
        className={
          show ? classNames(styles.links, styles.active) : styles.links
        }
      >
        <Link onClick={() => toggle()} to='/'>
          Home
        </Link>
        <Link onClick={() => toggle()} to='/about'>
          About
        </Link>
        <Link onClick={() => toggle()} to='/portfolio'>
          Portfolio
        </Link>
        <Link onClick={() => toggle()} to='/contact'>
          Contact
        </Link>
      </div>
      <div
        className={
          show
            ? classNames(styles.barsButton, styles.active)
            : styles.barsButton
        }
        onClick={() => toggle()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
